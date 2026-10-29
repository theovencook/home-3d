// The realistic look (#39) in the 3D view: the themed surfaces get a lit twin (Lambert, flat shaded, so the plan's
// geometry needs no normals), the sun from sun.sun lights them and throws shadows, the sky lights them from above, and
// a lawn under the house catches the shadow. The neon materials stay untouched: leaving the look gives them back.
//
// Cheap on purpose: one directional light with one shadow map (none on phones, a small one that is only redrawn when
// something other than the camera moved on the tablet level), Lambert instead of physically based materials, and
// the twins are shared by every mesh of a neon material (a handful per floor).

import {
  BasicShadowMap,
  CanvasTexture,
  CircleGeometry,
  Color,
  DirectionalLight,
  Group,
  HemisphereLight,
  Mesh,
  MeshBasicMaterial,
  MeshDepthMaterial,
  MeshLambertMaterial,
  NormalBlending,
  PCFShadowMap,
  SRGBColorSpace,
  type Material,
  type Object3D,
  type Scene,
  type WebGLRenderer,
} from "three";
import { realisticSky, sunLight, type ShadowPlan, type SkyWeather } from "../realistic.ts";
import { makeFoldable, type FoldMasks, type FoldRole } from "./fold.ts";

/** A material that becomes lit in the realistic look: a themed surface drawn normally (no glow, no lines). */
function litSurface(m: Material | Material[]): m is MeshBasicMaterial {
  return m instanceof MeshBasicMaterial && m.userData.fp3dThemed === "surface" && m.blending === NormalBlending;
}

/** The scene's frame for the light: the middle of the house on its lawn and a radius around it (metres). */
export interface RealismFrame {
  x: number;
  y: number;
  z: number;
  r: number;
}

export class Realism {
  /** Lights and lawn: in the scene only while the look is on. */
  readonly group = new Group();
  private readonly sunLight = new DirectionalLight(0xffffff, 0);
  private readonly skyLight = new HemisphereLight(0xc4d8ee, 0x58604a, 1);
  private readonly lawn: Mesh<CircleGeometry, MeshLambertMaterial>;
  private readonly twins = new Map<MeshBasicMaterial, MeshLambertMaterial>();
  private readonly depths = new WeakMap<FoldMasks, Map<FoldRole, MeshDepthMaterial>>();
  private meshes = new Set<Mesh>();
  private on = false;
  private plan: ShadowPlan | null = null;
  /** The shadow map must be drawn again (the sun moved, the house changed). */
  private dirty = true;

  constructor() {
    // the lawn fades out towards its edge into the sky's ground colour behind the canvas
    const lawn = new MeshLambertMaterial({ color: 0x58704a, flatShading: true, transparent: true, depthWrite: false });
    lawn.alphaMap = fadeTexture();
    this.lawn = new Mesh(new CircleGeometry(1, 48), lawn);
    this.lawn.rotation.x = -Math.PI / 2;
    this.lawn.receiveShadow = true;
    this.lawn.renderOrder = -2;
    this.group.add(this.sunLight, this.sunLight.target, this.skyLight, this.lawn);
  }

  get active(): boolean {
    return this.on;
  }

  /** Turns the look on or off; off gives every mesh its neon material back. */
  enable(scene: Scene, on: boolean): void {
    if (on === this.on) return;
    this.on = on;
    this.dirty = true;
    if (on) {
      scene.add(this.group);
      return;
    }
    scene.remove(this.group);
    for (const mesh of this.meshes) {
      const basic = (mesh.material as Material).userData.fp3dBasic as MeshBasicMaterial | undefined;
      if (basic) mesh.material = basic;
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      mesh.customDepthMaterial = undefined;
    }
    this.meshes.clear();
  }

  /** How shadows are drawn on this device (null: none). */
  setPlan(renderer: WebGLRenderer, plan: ShadowPlan | null): void {
    const was = this.plan;
    this.plan = plan;
    const on = this.on && !!plan;
    const size = plan?.size ?? 0;
    if (renderer.shadowMap.enabled !== on) {
      renderer.shadowMap.enabled = on;
      // the lit twins are compiled again with or without shadows
      for (const twin of this.twins.values()) twin.needsUpdate = true;
      this.lawn.material.needsUpdate = true;
    }
    renderer.shadowMap.type = plan?.soft ? PCFShadowMap : BasicShadowMap;
    renderer.shadowMap.autoUpdate = !!plan?.live;
    this.sunLight.castShadow = on;
    if (size && (!was || was.size !== size)) {
      this.sunLight.shadow.map?.dispose();
      this.sunLight.shadow.map = null;
      this.sunLight.shadow.mapSize.set(size, size);
    }
    this.sunLight.shadow.radius = plan?.soft ? 3 : 1;
    // the coarser hard-edged map needs a larger bias against shadow acne
    this.sunLight.shadow.bias = plan?.soft ? -0.0006 : -0.002;
    this.dirty = true;
  }

  /** Something other than the camera changed (the sun, a door, the house): the shadow map is drawn again. */
  touch(): void {
    this.dirty = true;
  }

  /**
   * The sun and the sky for sun.sun (null: none), the weather (null: none) and the plan's north (degrees), around the
   * house `frame`.
   */
  update(sun: { azimuth: number; elevation: number } | null, weather: SkyWeather | null, north: number, frame: RealismFrame): void {
    const light = sunLight(sun, weather?.cloud ?? 0, north);
    const sky = realisticSky(sun ? sun.elevation : null, weather);
    const srgb = (c: readonly number[]) => new Color().setRGB(c[0] / 255, c[1] / 255, c[2] / 255, SRGBColorSpace);
    this.sunLight.intensity = light.sun;
    this.sunLight.color.setRGB(light.color[0], light.color[1], light.color[2], SRGBColorSpace);
    this.sunLight.shadow.intensity = light.shadow;
    // the light stands out along the sun's direction, far enough to see the whole plot
    const reach = frame.r * 2;
    this.sunLight.position.set(frame.x + light.dir[0] * reach, frame.y + light.dir[1] * reach, frame.z + light.dir[2] * reach);
    this.sunLight.target.position.set(frame.x, frame.y, frame.z);
    this.sunLight.target.updateMatrixWorld();
    const cam = this.sunLight.shadow.camera;
    cam.left = cam.bottom = -frame.r;
    cam.right = cam.top = frame.r;
    cam.near = 0.5;
    cam.far = reach * 2;
    cam.updateProjectionMatrix();
    // the sky lights from above in its own colour, the ground throws a little of its colour back
    this.skyLight.intensity = light.sky;
    // (mostly white: a blue sky light would turn every shadow blue)
    this.skyLight.color.copy(srgb(sky.horizon).lerp(srgb(sky.top), 0.4).lerp(new Color(1, 1, 1), 0.6));
    this.skyLight.groundColor.copy(srgb(sky.ground));
    // the lawn in daylight colours (the lights darken it at night), white under snow
    this.lawn.material.color.copy(srgb(realisticSky(null, weather).ground));
    this.lawn.position.set(frame.x, frame.y, frame.z);
    this.lawn.scale.setScalar(frame.r * 1.6);
    this.dirty = true;
  }

  /**
   * Gives every themed surface under `root` its lit twin and keeps the twins in step with their neon materials (a
   * floor fading, a colour changing). Call before every frame while the look is on; `shadows`: whether this device
   * draws them. `moving`: something other than the camera moves this frame.
   */
  realize(root: Object3D, shadows: boolean, renderer?: WebGLRenderer, moving = false): void {
    if (!this.on) return;
    const seen = new Set<Mesh>();
    root.traverse((o) => {
      const mesh = o as Mesh;
      if (!mesh.isMesh) return;
      const cur = mesh.material;
      const basic = Array.isArray(cur) ? null : ((cur.userData.fp3dBasic as MeshBasicMaterial | undefined) ?? (litSurface(cur) ? cur : null));
      if (!basic) return;
      seen.add(mesh);
      mesh.material = this.twin(basic);
      // a floor that fades out lets the light through
      const solid = basic.visible && basic.depthWrite && (!basic.transparent || basic.opacity > 0.85);
      mesh.castShadow = shadows && solid;
      mesh.receiveShadow = shadows;
      const fold = basic.userData.fp3dFold as { masks: FoldMasks; role: FoldRole } | undefined;
      mesh.customDepthMaterial = fold && fold.role !== "glass" ? this.depth(fold.masks, fold.role) : undefined;
    });
    this.meshes = seen;
    for (const [basic, twin] of this.twins) sync(basic, twin);
    if (renderer && this.plan && !this.plan.live && (this.dirty || moving)) renderer.shadowMap.needsUpdate = true;
    this.dirty = false;
  }

  dispose(): void {
    for (const twin of this.twins.values()) twin.dispose();
    this.twins.clear();
    this.lawn.geometry.dispose();
    this.lawn.material.alphaMap?.dispose();
    this.lawn.material.dispose();
    this.sunLight.shadow.map?.dispose();
    this.sunLight.dispose();
  }

  private twin(basic: MeshBasicMaterial): MeshLambertMaterial {
    let twin = this.twins.get(basic);
    if (twin) return twin;
    twin = new MeshLambertMaterial({ vertexColors: basic.vertexColors, map: basic.map, flatShading: true });
    twin.userData.fp3dBasic = basic;
    twin.userData.fp3dVersion = basic.version;
    sync(basic, twin);
    // the neon material's patches (look, cut walls), and bright signal colours light themselves (theme.ts: fp3dGlow)
    twin.onBeforeCompile = (shader, renderer) => {
      basic.onBeforeCompile(shader, renderer);
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <emissivemap_fragment>",
        "#include <emissivemap_fragment>\n  totalEmissiveRadiance += diffuseColor.rgb * fp3dGlow;",
      );
    };
    twin.customProgramCacheKey = () => `${basic.customProgramCacheKey()}-lit`;
    const owned = twin;
    basic.addEventListener("dispose", () => {
      owned.dispose();
      this.twins.delete(basic);
    });
    this.twins.set(basic, twin);
    return twin;
  }

  private depth(masks: FoldMasks, role: FoldRole): MeshDepthMaterial {
    let byRole = this.depths.get(masks);
    if (!byRole) this.depths.set(masks, (byRole = new Map()));
    let m = byRole.get(role);
    if (!m) byRole.set(role, (m = makeFoldable(new MeshDepthMaterial(), masks, role)));
    return m;
  }
}

/** A small radial alpha ramp: opaque in the middle, gone at the rim (the lawn's UVs map the circle onto it). */
function fadeTexture(): CanvasTexture | null {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "#fff");
  g.addColorStop(0.55, "#fff");
  g.addColorStop(1, "#000");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new CanvasTexture(canvas);
}

/** The neon material's state that changes while it is shown, copied to its twin. */
function sync(basic: MeshBasicMaterial, twin: MeshLambertMaterial): void {
  twin.opacity = basic.opacity;
  twin.transparent = basic.transparent;
  twin.visible = basic.visible;
  twin.side = basic.side;
  twin.depthWrite = basic.depthWrite;
  twin.depthTest = basic.depthTest;
  twin.alphaTest = basic.alphaTest;
  twin.polygonOffset = basic.polygonOffset;
  twin.polygonOffsetFactor = basic.polygonOffsetFactor;
  twin.polygonOffsetUnits = basic.polygonOffsetUnits;
  twin.color.copy(basic.color);
  if (twin.map !== basic.map) {
    twin.map = basic.map;
    twin.needsUpdate = true;
  }
  if (twin.userData.fp3dVersion !== basic.version) {
    twin.userData.fp3dVersion = basic.version;
    twin.needsUpdate = true;
  }
}
