// 2D editor: floors, rooms (rectangles and free shapes), snapping, undo, background template.
// The element (reactive state, fields, getters, the Lit lifecycle, render) lives here; the methods of each editor area
// live in a module under editor/ and are copied onto this class (editor/parts.ts, #202). Styles: editor/styles/.

import { html, LitElement, nothing, svg, type PropertyDeclaration, type PropertyValues, type TemplateResult } from "lit";
import { linesField } from "./lines-field.ts";
import { shellStyles } from "./editor/styles/shell.ts";
import { planStyles } from "./editor/styles/plan.ts";
import { sideStyles } from "./editor/styles/side.ts";
import { wallViewStyles } from "./editor/styles/wall-view.ts";
import { menuStyles } from "./editor/styles/menus.ts";
import { wallsRoofStyles } from "./editor/styles/walls-roof.ts";
import { formStyles } from "./editor/styles/forms.ts";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { live } from "lit/directives/live.js";
import { fetchImage, listHistory, restoreSnapshot, storeImage, takeSnapshot, type Snapshot } from "../api.ts";
import { download, exportFile, parseExport } from "../transfer.ts";
import { carEntities, type CarEntities, areaEntities, autoPlace, hiddenInHa, CLIMATE_CLASSES, defaultHeight, entityName, entityAreaId, furnitureEntities, groupByDevice, hasScreen, isMediaFurniture, isPlaceable, isRoomClimateSensor, kindOf, openingEntities, otherAreaEntities, pictureRuleMatches, roomClimateSensors, unassignedEntities, windowPosition, type ClimateKey } from "../devices.ts";
import { furnitureSymbol } from "./furniture2d.ts";
import { clipConvex, netRoomArea } from "../geometry/area.ts";
import { areaText, formatImperial, lengthText, lengthUnit, parseLength, unitLabel, type LengthUnit } from "../units.ts";
import { closeGaps, straightenEdges, suggestedThickness } from "../geometry/gaps.ts";
import { clampIntoRoom, keepInRoom, snapToWall } from "../geometry/snap.ts";
import { alignLines, halfSize, itemBox, snapOnWall, snapPoint, snapTolerance, wallGuides, type AlignLines, type Box, type Guide, type Span } from "../geometry/snap-guides.ts";
import { altPick, firmHit, itemsAt, minHitPx, nextPick } from "../geometry/pick.ts";
import { itemsByRoom } from "../item-list.ts";
import "./item-list-view.ts";
import type { ItemRow } from "./item-list-view.ts";
import { nearestOnOutline, type ConnectVia } from "../pool-runs.ts";
import { holeInRoom } from "../geometry/holes.ts";
import { SHOW_PRESENCE } from "../flags.ts";
import { labOn, released } from "../features.ts";
import { loadLocate } from "../load-locate.ts";
import { BIN_SHAPES, BIN_SIZE, binColors, binShape, householdCountry, isPackBin, isPackPlant, MAILBOX_SHAPES, MAILBOX_SIZE, mailboxShape, WASTE_KINDS, wasteColors } from "../household.ts";
import { cameraMotionSensors, cameraOwnSensors, detectionKind, setCameraSensors } from "../markers.ts";
import type { DirectorSettings } from "../director.ts";
import { deviceSensors, energySummary, flowSegments, gridPoint, powerSensorFor, proposeEnergySensors, type EnergyPrefs, type FlowSegment, proposeMeters } from "../energy.ts";
import { energySensorFor } from "../wire-ends.ts";
import { CLIMATE_ATTRS, isPulseDrive, robotRoomSensor, TOGGLE_KINDS } from "../devices.ts";
import { ACTION_TYPES, GESTURES, actionTypeChoosable, parseActionData, performActionLocked, withGesture, type ActionType, type Gesture, type ItemAction, type ItemActions } from "../item-actions.ts";
import { activeSections, sectionFloor, dormerParent, effectiveDormer, proposeDormer, sectionGeometry, floorOutline, polygonBox, headroomLines, ridgeHeight, sectionAbove, sectionCutsBelow, roofSectionsFromRooms, sectionFrame, sectionTurn, turnSectionAbout, wallTopUnder } from "../roof-sections.ts";
import { bestFace, clampField, faceAt, faceCompass, fieldFace, fieldModules, GROUND, moveField, pointOnFace, proposeField, proposeGroundField, proposeWindow, proposeWallField, roofFaces, rowCounts, turnGroundField, fieldCenter, wallFaces, windowAsField, windowCorners, onFace, onField, rayOnFace, type RoofFace } from "../solar.ts";
import type { SurfaceGrab, SurfaceRay } from "../viewer/viewer3d.ts";
import { storedImageIds } from "../transfer.ts";
import { type CarLinks, type Background, OUTDOOR_TOP, sidelightLayout, normalizeBuilding, syncCameraLooks, furnitureFootprint, type FreeWall, poolShapePoints } from "../model.ts";
import { furnishRoom, PACKAGES, type PackageId } from "../packages.ts";
import { edgeReach, generateWalls, locateOpening, openingHost, pointOnRoomEdge, type Wall } from "../geometry/walls.ts";
import { edgeStartCorner, openingTap } from "../geometry/openings.ts";
import { nameNewRoom, roomNameSuggestions } from "../room-naming.ts";
import { wallSummary } from "../geometry/room-walls.ts";
import { carryRectResize, strandedBy } from "../geometry/room-resize.ts";
import { formatNumber, languageReady, loadLanguage, translate, type I18nKey } from "../i18n.ts";
import { ISSUES_URL } from "./extensions.ts";
import { beforeSelectionChange, deepActive, releaseTyping, selectionMoved, takesTyping } from "../focus-release.ts";
import { escapeStep } from "../editor-keys.ts";
import { furniturePanel, retypePatch, typeOptionLabels, type FurnitureField } from "../item-panel.ts";
import { moveToFloor } from "../item-floor.ts";
import { clipboardKey, copyItems, pasteItems, withKeys, type ItemClip } from "../clipboard.ts";
import { TypedCommit } from "../typed-commit.ts";
import { typedValue } from "./typed-value.ts";
import { iconPath } from "../icons.ts";
import { moduleAreaFields, moduleFurnitureFields, moduleRoomFields, modulePipeRules, type ModuleField, type ModuleHost, type PipeRules } from "../modules.ts";
import { pipePlanner } from "../pipe-planner.ts";
import {
  bounds,
  centroid,
  FLOOR_MATERIALS,
  FURNITURE_GROUPS,
  ENERGY_DEVICES,
  gangPlateWidth,
  gangsOf,
  splitAliases,
  GANG_TYPES,
  MAX_GANGS,
  TECH_SIZE,
  TECH_TYPES,
  type Gang,
  DEFAULT_HOLOGRAM,
  type HologramSettings,
  type StartView,
  FURNITURE_SIZE,
  FURNITURE_TYPES,
  canLift,
  isFixed,
  isLamp,
  LAMP_MODEL,
  isAxisRect,
  OUTDOOR_TYPES,
  BUTTON_ACTIONS,
  type ButtonAction,
  type CustomButton,
  type MediaPreset,
  outdoorStanding,
  outdoorZones,
  SLOPE_DIRS,
  type SlopeDir,
  spotGrid,
  step,
  type Direction,
  signedArea,
  newFloor,
  OPENING_PRESETS,
  openingPreset,
  type OpeningPreset,
  floorElevation,
  resizeFurniture,
  roomTiles,
  unplacedAreas,
  pointInPolygon,
  polygonArea,
  uid,
  type Building,
  type Floor,
  type Furniture,
  type ShowInterval,
  type ShowWhen,
  type FurnitureType,
  type LampMount,
  type RoofSection,
  type RoofShape,
  type RoofEnd,
  ROOF_ENDS,
  type SolarField,
  type SolarString,
  type RoofWindow,
  ROOF_SHAPES,
  type MarkerShow,
  MARKER_SHOWS,
  type OutdoorArea,
  type OutdoorType,
  type RoofType,
  type Placement,
  type Opening,
  type OpeningType,
  type Room,
  type Vec2,
  openingStyles,
  SILL_BOARDS,
  openingStyle,
  isFrontDoor,
  type OpeningStyle,
  type SillBoard,
  type ScreenPicture,
  STAIR_TYPES,
  stairLimits,
  stairOptionPatch,
  setTerrain,
  clearFirstState,
} from "../model.ts";
import { windowGetsWell } from "../geometry/wells.ts";
import { controls, tokens } from "../styles.ts";
import "./entity-picker.ts";
import type { HassArea, HassFloor, HomeAssistant } from "../types.ts";
import { checkBackup, fetchBackup, fetchPackUpdates, getEditors, restoreBackup, setEditors, updatePlacedItems, type BackupFile, type BackupHome } from "../api.ts";
import { libraryUpdates } from "../pack-updates.ts";
import { lastAdmin, pickEditor, pickTabletUser, type EditorUser } from "../editors.ts";
import { load3d } from "../load3d.ts";
import { ensureRecipes, packTypesIn } from "../pack-recipes.ts";
import "./ask-dialog.ts";
import { isHelpKey, LEGEND, SHORTCUTS } from "../help.ts";
import { hintKey, type Tool } from "../editor-hint.ts";
import { askConfirm, tell } from "../ask.ts";
import "./library.ts";
import "./rack-sheet.ts";
import type { RackElevation } from "../rack-elevation.ts";
import { basicTypes, buildIndex, roomKindOf, type LibraryEntry } from "../library-index.ts";
import { packsVersion as libPacksVersion } from "../packs.ts";
import { detectCameraModel, isCameraModel, setCameraLook } from "../camera-models.ts";
import { COLOUR_PRESETS, PAINT_COLOURS, itemColourRoles, parseHex, roleColour, setRoleColour, type ColourRole } from "../colour-roles.ts";
import { MATERIALS, ownMaterial, setRoleMaterial, usualMaterial, type Material } from "../role-materials.ts";
import type { WallMode } from "../viewer/viewer3d.ts";
import { movePet, staticPetsOn } from "../pet-place.ts";
import { furnitureName } from "../furniture-names.ts";
import { itemTempSource, roomLiveSensors, shadeKind, type LiveKind } from "../room-effects.ts";
import { energyRole, furnitureSize, isElectric, isPackType, isRobotVacuum, migratePlanTypes, mountBase, packInfo, packItem, packItemName, packMotion, packName, packType, setPacks, setPlanRecipes, type FurniturePack } from "../packs.ts";
import { isThermostatItem, linkField, linkFilter } from "../furniture-links.ts";
import { hiddenUnplaced, setUnplacedHidden, suggestLinks, unplacedByArea, type LinkSuggestion } from "../unplaced.ts";
import { setIntervalPart } from "../show-when.ts";
import { UndoHistory } from "../undo-history.ts";
import { EntityOptionCache, type EntityOption } from "../entity-options.ts";
import { HassWatch } from "../hass-watch.ts";
import { shiftBy, transformPlan, turnAbout } from "../plan-transform.ts";
import { insertCorner, removeCorner } from "../geometry/room-corners.ts";
import { ENTITY_DRAG, type ResizeNote, type FixKind, MAX_MOUNT_Y, PAW, type Drag, type Guides, EDIT_DRAGS, wallPeers, turnBy, type EditorTopic, SNAP_PX, round, type RunDraft, type RunCtx, patchItem, ARROWS, NO_STATE_TYPES, isEnergyDevice, volumeMeter, distToSegment, EN_HASS, numberish, binaryish } from "./editor/helpers.ts";
import { mixParts } from "./editor/parts.ts";
import { RacksPart } from "./editor/racks.ts";
import { WallViewPart } from "./editor/wall-view.ts";
import { WallKitPart } from "./editor/wall-kit.ts";
import { PipesPart } from "./editor/pipes.ts";
import { PoolPart } from "./editor/pool.ts";
export type { EditorTopic };

/** The editor's item clipboard (#74): in memory, shared by every editor on the page, kept while the Editor tab is closed. */
let clipboard: ItemClip | null = null;

export class Fp3dEditor extends LitElement {
  static properties = {
    _shiftX: { state: true },
    _shiftAll: { state: true },
    _bgEdit: { state: true },
    _bgRuler: { state: true },
    _bgRulerLen: { state: true },
    _bgLevel: { state: true },
    _bgOpen: { state: true },
    _shiftZ: { state: true },
    hass: { attribute: false },
    building: { attribute: false },
    narrow: { type: Boolean },
    packs: { attribute: false },
    _preview: { state: true },
    _libUpdates: { state: true },
    _doc: { state: true },
    _doc3d: { state: true },
    _split: { state: true },
    _splitRatio: { state: true },
    _backupBusy: { state: true },
    _wall3d: { state: true },
    _solarDim: { state: true },
    _sidePinned: { state: true },
    _sideMin: { state: true },
    _sideOpen: { state: true },
    _floorId: { state: true },
    _roomId: { state: true },
    _vertex: { state: true },
    _openingId: { state: true },
    _furnitureId: { state: true },
    _multi: { state: true },
    _hiddenItems: { state: true },
    _placing: { state: true },
    _placeAt: { state: true },
    _single: { state: true },
    _multiMode: { state: true },
    _deviceId: { state: true },
    _deviceQuery: { state: true },
    _devSource: { state: true },
    _unplacedOpen: { state: true },
    _unplacedHiddenView: { state: true },
    _roofId: { state: true },
    _solarId: { state: true },
    _solarPick: { state: true },
    _roofWinId: { state: true },
    _energyNote: { state: true },
    _cableId: { state: true },
    _expanded: { state: true },
    _notice: { state: true },
    _resize: { state: true },
    _history: { state: true },
    _spots: { state: true },
    _outdoorId: { state: true },
    _wallId: { state: true },
    _edgeHi: { state: true },
    _wallView: { state: true },
    _wallSel: { state: true },
    _wallMulti: { state: true },
    _wallSingle: { state: true },
    _wallGap: { state: true },
    _wallCat: { state: true },
    _wallQuery: { state: true },
    _wallFrame: { state: true },
    _wallPicTick: { state: true },
    _wallPick: { state: true },
    _kerbPick: { state: true },
    _runMode: { state: true },
    _techMode: { state: true },
    _feedKind: { state: true },
    _techAsk: { state: true },
    _runDraft: { state: true },
    _runSel: { state: true },
    _conn: { state: true },
    _jointPlace: { state: true },
    _card: { state: true },
    _cardJoin: { state: true },
    _wallView3d: { state: true },
    _ctx: { state: true },
    _fixedHint: { state: true },
    _openingNote: { state: true },
    _help: { state: true },
    _rackSheet: { state: true },
    _phoneHint: { state: true },
    _floorMenu: { state: true },
    _openingPreset: { state: true },
    _measureLen: { state: true },
    _packages: { state: true },
    _rectSize: { state: true },
    _rectName: { state: true },
    _wallsOpen: { state: true },
    _tool: { state: true },
    _toolMenu: { state: true },
    _settingsMenu: { state: true },
    _sideWidth: { state: true },
    _toolOpen: { state: true },
    _viewMenu: { state: true },
    _draft: { state: true },
    _outdoorFree: { state: true },
    _outdoorType: { state: true },
    _poolShape: { state: true },
    _pipeMode: { state: true },
    _pipeDraft: { state: true },
    _pipeId: { state: true },
    _cursor: { state: true },
    // a snap computed again on every pointer move is mostly the same: only a different one draws the plan again (#130)
    _guides: { state: true, hasChanged: (a: unknown, b: unknown) => JSON.stringify(a) !== JSON.stringify(b) },
    _view: { state: true },
    _size: { state: true },
    _images: { state: true },
    _canUndo: { state: true },
    _canRedo: { state: true },
    canEdit: { attribute: false },
    home: { attribute: false },
    homeName: { attribute: false },
    history: { attribute: false },
    topic: { attribute: false },
  };

  /** Home Assistant as handed in; `hass` reads it through `hassWatch` while rendering (#130). */
  rawHass: HomeAssistant | undefined;
  readonly hassWatch = new HassWatch();
  readonly optionCache = new EntityOptionCache();

  get hass(): HomeAssistant {
    const h = this.rawHass;
    // while rendering, the states it reads are noted: a later state change of anything else needs no render
    return (h && this.hassWatch.rendering ? this.hassWatch.wrap(h) : h) as HomeAssistant;
  }

  set hass(value: HomeAssistant) {
    this.rawHass = value;
  }

  declare building: Building;
  /** On the editors list (#7), from the panel's controller; unset: admins are. */
  declare canEdit: boolean | undefined;
  /** The home being edited (#53): pictures, restore points and backups go there; unset: the active home. */
  declare home: string | null | undefined;
  /** Its name (#160: the HA-areas import says which home its rooms go into). */
  declare homeName: string | null | undefined;
  /** The undo history (#66): the panel's, so it outlives this element when another tab opens; else its own. */
  declare history: UndoHistory;
  /**
   * One part of the editor shown on its own on the Settings page (#139: favourites, own buttons, backup …), without
   * the plan, the tools, the keyboard shortcuts or the library; null: the whole editor.
   */
  declare topic: EditorTopic | null;
  declare narrow: boolean;
  /** Imported furniture packs (from the panel's controller). */
  declare packs: FurniturePack[] | undefined;
  /** Result of the last pack import. */
  /** Picture of the furniture under the pointer in the library. */
  declare _preview: { type: string; url: string | null; left: number; top: number } | null;
  /** The furniture types of placed items with an update (#48), shown on the library's cards. */
  declare _libUpdates: ReadonlySet<string>;
  declare _doc: Building;
  /** The draft as the 3D pane shows it (follows _doc with a short delay, so drags stay smooth). */
  declare _doc3d: Building;
  doc3dTimer: ReturnType<typeof setTimeout> | undefined;
  /** The live 3D pane next to the plan (remembered per browser). */
  declare _split: boolean;
  /** Share of the width the plan takes next to the 3D pane (0.2 … 0.8). */
  declare _splitRatio: number;
  declare _backupBusy: boolean;
  /** Walls in the 3D pane: full height ("auto") or cut at the cut height (shows wall units and shelves). */
  declare _wall3d: WallMode;
  /** Energy tool: roof solar fields drawn faint over the floor plan (the selected one stays full), per device (#89). */
  declare _solarDim: boolean;
  /** Sidebar beside the 3D pane: pinned open always, or folded to a strip while nothing is selected. */
  declare _sidePinned: boolean;
  /** The sidebar folded to a narrow strip beside the plan (more room to move furniture); remembered per browser. */
  declare _sideMin: boolean;
  declare _sideOpen: boolean;
  declare _floorId: string | null;
  declare _roomId: string | null;
  declare _vertex: number | null;
  declare _openingId: string | null;
  declare _furnitureId: string | null;
  /** Several furniture items selected together (shift-click, a frame); empty = the usual single selection. */
  declare _multi: string[];
  /** Items hidden in this editor's plan only (#75), to reach what lies under them; not saved. */
  declare _hiddenItems: string[];
  /** A library card waiting for a click on the plan that places it (#76). */
  declare _placing: { type: string; mirror: boolean } | null;
  /** Where the armed card would land (the pointer over the plan), for its outline. */
  declare _placeAt: Vec2 | null;
  /** Alignment lines for placing an armed card (#143), gathered again when the floor changes. */
  placeLines: { floor: Floor; lines: AlignLines } | null = null;
  /** One part of a furniture block is edited on its own (double-click), not the whole block. */
  declare _single: boolean;
  /** Touch: taps add items to the selection, a drag on empty ground draws a frame. */
  declare _multiMode: boolean;
  /** The last tap on a furniture item, for the double-tap into a block. */
  lastFurnTap: { id: string; t: number } | null = null;
  /** Whether Shift is held (the 3D views report taps without their keys). */
  shiftHeld = false;
  readonly onShift = (e: KeyboardEvent) => (this.shiftHeld = e.shiftKey);
  /** Library pictures for the wall view's side bar (type -> image). */
  kitPics = new Map<string, string>();
  kitPicsAsked = new Set<string>();
  declare _deviceId: string | null;
  declare _deviceQuery: string;
  /** Which devices the room form lists: its own area, other areas, or entities without an area. */
  declare _devSource: "area" | "other" | "none";
  /** The floor overview's "Unplaced entities" list is open (#83; computed only then), and shows the hidden ones. */
  declare _unplacedOpen: boolean;
  declare _unplacedHiddenView: boolean;
  /** Selected roof section (tool "roof"). */
  declare _roofId: string | null;
  /** Selected solar field (roof tool). */
  declare _solarId: string | null;
  /** Solar field form: taps in the plan switch single modules on and off. */
  declare _solarPick: boolean;
  /** Selected roof window (roof tool). */
  declare _roofWinId: string | null;
  /** What the import from the energy dashboard did (shown under its button). */
  declare _energyNote: string | null;
  /** The cable picked in the energy tool (its key), shown with its points in the plan. */
  declare _cableId: string | null;
  /** The cables' ways for the plan, computed once per document. */
  cableCache: { doc: Building; segs: FlowSegment[] } | null = null;
  /** Furniture library: the search text, and which sections are open (built-in groups and packs). */
  /** Devices whose further entities are unfolded in the device list. */
  declare _expanded: Set<string>;
  /** Short confirmation shown after an action (e.g. closed gaps). */
  declare _notice: string | null;
  /** What the last outline edit of a room carried or left outside (#64); stale once the document moves on. */
  declare _resize: ResizeNote | null;
  /** Restore points, loaded when the backup section is opened. */
  declare _history: Snapshot[] | null;
  /** The opt-in reports: their status (null = not loaded, "error" = backend without them). */
  /** Open "place spots" form of the selected room. */
  declare _outdoorId: string | null;
  /** Selected free-standing wall. */
  declare _wallId: string | null;
  /** Selected room wall (id from generateWalls), to set its height. */
  /** Edge of the selected room highlighted from the wall height list. */
  declare _edgeHi: number | null;
  /** The wall view: a room's wall seen from the front (what stands and hangs on it), and the piece chosen in it. */
  declare _wallView: { roomId: string; edge: number } | null;
  declare _wallSel: string | null;
  /** Wall view: several pieces chosen together (shift-click, a frame); empty = the usual single choice. */
  declare _wallMulti: string[];
  /** Wall view: one part of a block moved on its own ("Nur dieses Teil"). */
  declare _wallSingle: boolean;
  /** Wall view: the free stretch of wall tapped (from s0 to s1 along the wall; low = standing pieces, else hanging). */
  declare _wallGap: { s0: number; s1: number; low: boolean } | null;
  /** Wall view side bar: the category shown and the search text. */
  declare _wallCat: string | null;
  declare _wallQuery: string;
  /** Wall view: the frame being drawn (view coordinates). */
  declare _wallFrame: { x0: number; y0: number; x1: number; y1: number } | null;
  declare _wallPicTick: number;
  /** The toolbar's wall view button is on: the next tap on a wall in the plan opens it. */
  declare _wallPick: boolean;
  /** A bin's "Set kerb spot" is on (#142): the next tap in the plan is where the bin stands while it is out. */
  declare _kerbPick: boolean;
  /** Pool Pro in the wall view: laying a pipe, or placing a ball valve or sight glass on one. */
  declare _runMode: "draw" | "valve" | "sight" | "hole_wall" | "hole_floor" | "tee" | "y" | "feed" | "erase" | null;
  /** Pool Pro, "Technik zeichnen": the wall view draws the technical room (devices, lines from outside, pipes). */
  declare _techMode: boolean;
  /** The pool line being brought in ("skimmer", "drain", "inlet", "waste"): the next tap on the wall places it. */
  declare _feedKind: string | null;
  /** Where a press in the drawing went down (a drag from there draws a pipe to where it is let go). */
  techPress: { s: number; y: number } | null = null;
  /** The pen: the stroke under the pointer (wall coordinates), made into a pipe with right angles when let go. */
  techStroke: { s: number; y: number }[] | null = null;
  /** A stroke ended on nothing: the pipe is laid with a loose end, and the side bar offers where the line could go. */
  declare _techAsk: { s: number; y: number; pipe: string } | null;
  /** The zoomed part of the 2D wall view (svg units), per wall; null: the whole wall. */
  wvZoom: { key: string; k: number; x0: number; y0: number } | null = null;
  /** Touch points on the 2D wall view, and a two-finger zoom under way. */
  wvTouch = new Map<number, { x: number; y: number }>();
  wvPinch: { d: number; mx: number; my: number; k: number; x0: number; y0: number } | null = null;
  /** A touch while drawing waits for its release (a second finger makes it a zoom instead of a point). */
  wvTap: { s: number; y: number } | null = null;
  wvScale = 1;
  /** The wall about to be picked opens straight in "Technik zeichnen" (asked from the pool tool). */
  techPick = false;
  /** Pool Pro: the part whose card is open ("dev:<id>", "joint:<id>", "port:<id>") and its pool. */
  declare _card: { pool: string; part: string } | null;
  /** The card's open connection being joined: its target and stops. */
  declare _cardJoin: { port: string; to: string; vias: ConnectVia[] } | null;
  /** Pool Pro: a T- or Y-piece waiting for a tap in the plan (on a pipe it is put into the pipe). */
  declare _jointPlace: "tee" | "y" | null;
  /** Pool Pro: the connection being put together in the pool tool (from, its stops, one or two ends). */
  declare _conn: { from: string; vias: ConnectVia[]; to: string; to2: string };
  declare _runDraft: RunDraft | null;
  /** The chosen pipe in the wall view and its chosen point. */
  declare _runSel: { pipe: string; pt: number | null } | null;
  /** A pipe point being dragged in the wall view, and where the pointer is while laying a pipe. */
  runDrag: { pipe: string; i: number; d: number; base: Building; moved: boolean } | null = null;
  runHover: [number, number] | null = null;
  /** A T-/Y-piece or hole being dragged in the wall view (along the wall and up or down; a hole in the floor along only). */
  jointDrag: { id: string; d: number; base: Building; moved: boolean } | null = null;
  /** A ball valve or sight glass being dragged along its pipe (a tap without moving opens or closes a valve). */
  fitDrag: { pipe: string; id: string; base: Building; moved: boolean; x: number; y: number } | null = null;
  /** The wall shown in the 3D wall view, for laying pipes there. */
  runCtx3d: RunCtx | null = null;
  /** The wall view stands in the room in 3D (true) or shows the wall flat from the front. */
  declare _wallView3d: boolean;
  /** The 3D view of the wall view and the wall its camera was last set up for. */
  wall3dEl: HTMLElement | null = null;
  wall3dKey = "";
  /** The height handle over the chosen piece in the 3D wall view (screen position, height text), and a lift in progress. */
  liftRaf = 0;
  lift: { id: string; y: number; startY: number; perPx: number; base: Building; top: number; moved: boolean } | null = null;
  /** Wall view: a size handle being dragged (side l/r = width along the wall, t/b = top or bottom edge). */
  wallResize: { id: string; side: "l" | "r" | "t" | "b"; x0: number; x1: number; y0: number; y1: number; base: Building; moved: boolean } | null = null;
  wallDrag: { id: string; ids?: string[]; w?: number; x: number; y: number; base: Building; s0: number; y0: number; lift: boolean; moved: boolean } | null = null;
  /** Front pictures of the pieces in the wall view, by type, size and turn (null: none to draw); asked for once. */
  wallPics = new Map<string, { url: string; x0: number; x1: number; y0: number; y1: number } | null>();
  wallPicsAsked = new Set<string>();
  declare _shiftX: number;
  /** Shift and turn take every floor with them (roof, outdoor areas, cables, hologram included). */
  declare _shiftAll: boolean;
  /** The background picture is being moved and scaled in the plan (drag it, pull its corner). */
  declare _bgEdit: boolean;
  /** Scale the background with a ruler (#183): null = off, else the points tapped so far (two = waiting for the length). */
  declare _bgRuler: Vec2[] | null;
  declare _bgRulerLen: number;
  /** Straighten the background: two taps along a wall that should run straight (null = off). */
  declare _bgLevel: Vec2[] | null;
  /** The background section is open: the picture has handles like a piece of furniture (move, scale, turn). */
  declare _bgOpen: boolean;
  declare _shiftZ: number;
  /** Open context menu (right-click, long press) at a plan point, for one item. */
  declare _ctx: { x: number; y: number; kind: FixKind; id: string } | null;
  /** A drag on a fixed item was turned into panning: the hint line says why. */
  declare _fixedHint: boolean;
  /** Doors & windows mode: why the last tap added nothing (it would overlap another opening), shown in the hint bar (#62). */
  declare _openingNote: string | null;
  /** Doors & windows mode: what a tap where the mouse rests would do (#62). */
  /** What a tap in Doors & windows mode would do where the mouse rests (#62): written straight into the hint bar (#130). */
  openingHoverText: string | null = null;
  get _openingHover(): string | null {
    return this.openingHoverText;
  }
  set _openingHover(text: string | null) {
    if (text === this.openingHoverText) return;
    this.openingHoverText = text;
    // the hint text alone changes: no render of the whole editor on every mouse move
    const shown = this.renderRoot?.querySelector?.(".fp3d-hint-text") as HTMLElement | null | undefined;
    if (shown) shown.textContent = this.hintText();
  }
  /** The opening panel's height before its kind was changed, kept as its minimum so nothing jumps (#63). */
  openingFormMin: { id: string; h: number } | null = null;
  /** The '?' help overlay (#95) is open. */
  declare _help: boolean;
  /** The rack whose "Edit rack" sheet is open (#113; its furniture id). */
  declare _rackSheet: string | null;
  /** The one-time "draw on a PC or tablet" hint on phones (shown by CSS on narrow screens only). */
  declare _phoneHint: boolean;
  /** A one-time invitation for admins to switch on the usage reports (while they are off and it was not closed). */
  fixedPan = false;
  /** Frame the 3D half again after the next render (the roof tool shows the whole house). */
  reframe3d = false;
  pressTimer = 0;
  pressStart: [number, number] | null = null;
  /** The "add floor" menu with the floors of Home Assistant is open. */
  declare _floorMenu: boolean;
  /** Kind of opening the opening tool places (the last one chosen). */
  declare _openingPreset: OpeningPreset;
  /** Length typed for the next wall when drawing by measure, and the size for "rectangle by size". */
  declare _measureLen: number;
  /** The package list of the selected room is open. */
  declare _packages: boolean;
  declare _rectSize: [number, number];
  /** Name typed for the next "Rectangle by size" room (#65); empty = "Room N". */
  declare _rectName: string;
  /** The room panel's Walls section is unfolded (#67; per browser, `home3d.wallsOpen`). */
  declare _wallsOpen: boolean;
  declare _spots: { type: FurnitureType; rows: number; cols: number; entity: string | null } | null;
  declare _tool: Tool;
  /** The toolbar menu open (its group), and which tool's choices are unfolded in it. */
  declare _toolMenu: string | null;
  /** The ⚙ menu in the toolbar is open; the global settings dialog shown (its topic). */
  declare _settingsMenu: boolean;
  /** Width of the side bar (px), dragged at its left edge and remembered per browser (#620). */
  declare _sideWidth: number;
  /** What the last module import said (the ⚙ Module dialog). */
  sideDrag: { x: number; width: number } | null = null;
  declare _toolOpen: Tool | null;
  /** The view menu of the toolbar (fit, 3D beside, wall view, lock) is open. */
  declare _viewMenu: boolean;
  declare _draft: Vec2[];
  /** Outdoor tool: corner by corner like a free-form room instead of a dragged rectangle (#97). */
  declare _outdoorFree: boolean;
  /** What the outdoor tool draws next (lawn, terrace, pool …), chosen before drawing. */
  declare _outdoorType: OutdoorType;
  /** Pools: the shape drawn next (rectangle, round, oval or free). */
  declare _poolShape: "rect" | "round" | "oval" | "free";
  /** Pool tool: drawing a pipe (tap a node, corner points, the end node) and the pipe being drawn. */
  declare _pipeMode: boolean;
  /** A pipe being drawn in the plan: from a node, or on from a pipe's loose end (laid on a wall, down into the floor). */
  declare _pipeDraft: { from: string; points: Vec2[]; extend?: { pipe: string; end: "from" | "to"; at: Vec2 } } | null;
  /** Pool tool: the selected pipe (its corner points can be dragged). */
  declare _pipeId: string | null;
  declare _cursor: Vec2 | null;
  declare _guides: Guides;
  declare _view: { scale: number; ox: number; oy: number };
  declare _size: { w: number; h: number };
  declare _images: Record<string, { url: string; aspect: number }>;
  declare _canUndo: boolean;
  declare _canRedo: boolean;

  drag: Drag | null = null;
  /** Set while a change that may join the last undo step runs (arrow nudges, #66). */
  mergeKey: string | null = null;
  /** How long after the last change of `mergeKey` a change still joins its step (a typed value: as long as it is typed). */
  mergeWithin: number | undefined = undefined;
  pointers = new Map<number, [number, number]>();
  pinch: { dist: number; mid: [number, number] } | null = null;
  fitted = false;
  /** The view fit() set last (the plan follows size changes until it is moved). */
  fittedView: unknown = null;
  /** The last fit framed everything (plot, garden items), not just the house: a resize keeps that (#91). */
  fittedAll = false;
  resizeObserver?: ResizeObserver;
  loadingImages = new Set<string>();

  constructor() {
    super();
    this.narrow = false;
    this._floorId = null;
    this._roomId = null;
    this._vertex = null;
    this._openingId = null;
    this._furnitureId = null;
    this._multi = [];
    this._hiddenItems = [];
    this._placing = null;
    this._placeAt = null;
    this._single = false;
    this._multiMode = false;
    this._deviceId = null;
    this._deviceQuery = "";
    this._devSource = "area";
    this._unplacedOpen = false;
    this._unplacedHiddenView = false;
    this._roofId = null;
    this._solarId = null;
    this._solarPick = false;
    this._roofWinId = null;
    this._energyNote = null;
    this._cableId = null;
    this._expanded = new Set();
    this._notice = null;
    this._openingNote = null;
    this._openingHover = null;
    this._history = null;
    this._spots = null;
    this._outdoorId = null;
    this._wallId = null;
    this._edgeHi = null;
    this._wallView = null;
    this._techMode = false;
    this._feedKind = null;
    this._techAsk = null;
    this._wallSel = null;
    this._wallMulti = [];
    this._wallSingle = false;
    this._wallGap = null;
    this._wallCat = null;
    this._wallQuery = "";
    this._wallFrame = null;
    this._wallPicTick = 0;
    this._wallPick = false;
    this._kerbPick = false;
    this._runMode = null;
    this._runDraft = null;
    this._runSel = null;
    this._conn = { from: "", vias: [], to: "", to2: "" };
    this._jointPlace = null;
    this._card = null;
    this._cardJoin = null;
    this._wallView3d = (() => {
      try {
        return localStorage.getItem("home3d.wall3d") !== "0";
      } catch {
        return true;
      }
    })();
    this._shiftX = 0;
    this._shiftAll = false;
    this._bgEdit = false;
    this._bgRuler = null;
    this._bgRulerLen = 0;
    this._bgLevel = null;
    this._bgOpen = false;
    this._shiftZ = 0;
    this._floorMenu = false;
    this._openingPreset = "door";
    this._phoneHint = true;
    try {
      this._phoneHint = localStorage.getItem("home3d.phoneHint") !== "0";
    } catch {
      // no storage: shown until closed
    }
    let split = false;
    try {
      split = localStorage.getItem("home3d.editor3d") === "1";
    } catch {
      // no storage
    }
    this._split = split;
    this._splitRatio = 0.55;
    try {
      const saved = Number(localStorage.getItem("home3d.editorSplit"));
      if (saved >= 20 && saved <= 80) this._splitRatio = saved / 100;
    } catch {
      /* no storage */
    }
    this._backupBusy = false;
    // the 3D pane's wall view stays as it was last set on this device (#309)
    this._wall3d = "cut";
    this._wallsOpen = false;
    try {
      if (localStorage.getItem("home3d.walls3d") === "auto") this._wall3d = "auto";
      this._wallsOpen = localStorage.getItem("home3d.wallsOpen") === "1";
    } catch {
      // no storage: the default
    }
    this._solarDim = true;
    try {
      if (localStorage.getItem("home3d.solarDim") === "off") this._solarDim = false;
    } catch {
      // no storage: dimmed
    }
    this._doc3d = this._doc;
    this._sideOpen = false;
    let pinned = true;
    try {
      pinned = localStorage.getItem("home3d.sidePinned") !== "0";
    } catch {
      // no storage
    }
    this._sidePinned = pinned;
    let min = false;
    try {
      min = localStorage.getItem("home3d.sideMin") === "1";
    } catch {
      // no storage
    }
    this._sideMin = min;
    this._preview = null;
    this._libUpdates = new Set();
    this._measureLen = 3;
    this._packages = false;
    this._rectSize = [4, 3];
    this._rectName = "";
    this._tool = "select";
    this._toolMenu = null;
    this._settingsMenu = false;
    let width = 320;
    try {
      width = Number(localStorage.getItem("home3d.sideWidth")) || 320;
    } catch {
      // no storage: the default width
    }
    this._sideWidth = Math.min(640, Math.max(280, width));
    this._toolOpen = null;
    this._viewMenu = false;
    this._draft = [];
    this._outdoorFree = false;
    this._outdoorType = "lawn";
    this._poolShape = "rect";
    this._pipeMode = false;
    this._pipeDraft = null;
    this._pipeId = null;
    this._cursor = null;
    this._guides = {};
    this._view = { scale: 50, ox: 40, oy: 40 };
    this._help = false;
    this._rackSheet = null;
    this._size = { w: 800, h: 600 };
    this._images = {};
    this._canUndo = false;
    this._canRedo = false;
    this.history = new UndoHistory();
    this.topic = null;
  }

  t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  // ------------------------------------------------------------------ lifecycle

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("keydown", this.onKey);
    window.addEventListener("keyup", this.onShift);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this.onKey);
    window.removeEventListener("keyup", this.onShift);
    this.resizeObserver?.disconnect();
  }

  /**
   * Every property set passes here, straight after the new value is in. A new plan selection releases the box with
   * the cursor (#56): its shortcuts work again, the next search doesn't rename the item, and what was typed is saved
   * on the item it was typed for.
   */
  requestUpdate(name?: PropertyKey, oldValue?: unknown, ...rest: [PropertyDeclaration?, boolean?, unknown?]): void {
    if (typeof name === "string") beforeSelectionChange(this, name, oldValue, this.renderRoot as ShadowRoot | undefined);
    super.requestUpdate(name, oldValue, ...rest);
  }

  /**
   * A new `hass` for a state change of nothing the last render read (most of the several updates a second) needs no
   * render (#130): only the 3D views in the editor get it, as a render would have handed it to them.
   */
  protected shouldUpdate(changed: PropertyValues): boolean {
    if (changed.size === 1 && changed.has("hass") && !this.hassWatch.matters(changed.get("hass") as HomeAssistant | undefined, this.rawHass)) {
      for (const view of this.renderRoot?.querySelectorAll?.("fp3d-view3d") ?? []) (view as HTMLElement & { hass?: HomeAssistant }).hass = this.rawHass;
      return false;
    }
    return true;
  }

  /** A render notes which states it reads (see shouldUpdate). */
  protected update(changed: PropertyValues): void {
    this.hassWatch.begin();
    try {
      super.update(changed);
    } finally {
      this.hassWatch.end();
    }
  }

  protected willUpdate(changed: PropertyValues): void {
    // this bundle keeps its own pack registry – and its own language table, so it fetches the language itself
    if (changed.has("packs")) setPacks(this.packs ?? []);
    if (changed.has("_doc")) setTerrain(this._doc);
    if (changed.has("hass") && this.hass && !languageReady(this.hass.language)) void loadLanguage(this.hass.language).then(() => this.requestUpdate());
    // the 3D pane and the wall view's 3D both show the draft (otherwise a piece moved in the wall view jumps back)
    if (changed.has("_doc") && (this._split || this._wallView)) this.queue3d();
    if ((changed.has("_split") && this._split) || (changed.has("_wallView") && this._wallView)) this._doc3d = this._doc;
    if (changed.has("_runDraft") && this._wallView) this._doc3d = this.docWithDraft();
    if (changed.has("_tool") && this.houseTool && !this._split && !this.narrow) this._split = true;
    // entering or leaving the roof tool: the 3D half frames the whole house (or the floor) again
    if (changed.has("_tool") && (this.houseTool || changed.get("_tool") === "roof" || changed.get("_tool") === "energy")) this.reframe3d = true;
    // an armed library card (#76) belongs to the floor and home it was picked on (#126)
    if (this._placing && (changed.has("home") || (changed.has("_floorId") && changed.get("_floorId") !== undefined))) this.cancelPlacing();
    // nothing chosen in one home stays chosen in another (#150): the new home's plan below picks its own start floor
    if (changed.has("home") && changed.get("home") != null) {
      this.selectItem("room", null);
      this._floorId = null;
    }
    if (changed.has("building") && this.building !== this._doc) {
      // the plan this panel's history leads up to keeps its steps (the tab was left and opened again, #66); a plan
      // from anywhere else (another home, the server, someone else's edit) starts a fresh history
      this.history.adopt(this.building, this.home);
      this.showHistory();
      this._doc = this.building;
      this._doc3d = this.building;
      // the first plan: the floor chosen in the house settings (D418), else the first of the list
      const start = this._doc.settings.editor_floor;
      if (this._floorId === null && start && this._doc.floors.some((f) => f.id === start)) this._floorId = start;
      if (!this._doc.floors.some((f) => f.id === this._floorId)) this._floorId = this._doc.floors[0]?.id ?? null;
      if (!this.floor?.rooms.some((r) => r.id === this._roomId)) this._roomId = null;
    }
    // the plan's recipe copies (#2): placed items keep their look whatever the installed packs say
    setPlanRecipes(this._doc?.recipes);
    if (changed.has("_doc") || changed.has("packs")) this.fetchPlacedRecipes();
    // a plan or library from the backend: which placed items have an update now (#48)
    if ((changed.has("building") || changed.has("packs")) && this.isEditor && !this.topic) this.refreshLibUpdates();
  }

  recipesAsked = new Set<string>();

  /**
   * Library items in the plan that neither the plan's copies nor the fetched recipes draw yet (#44: a camera look, a
   * parking spot's vehicle, an item placed a moment ago): fetch their recipes once, then draw them again. The next
   * save brings the plan's copies of them anyway.
   */
  fetchPlacedRecipes(): void {
    if (!this.hass || !this._doc || !this.packs?.length) return;
    const types = packTypesIn(this._doc).filter((t) => !packItem(t) && !this.recipesAsked.has(t));
    if (!types.length) return;
    for (const t of types) this.recipesAsked.add(t);
    void ensureRecipes(this.hass, types).then(() => {
      if (!types.some((t) => packItem(t))) return;
      if (this._split || this._wallView) this._doc3d = { ...this.docWithDraft() };
      this.requestUpdate();
    });
  }

  protected firstUpdated(): void {
    const stage = this.renderRoot.querySelector(".fp3d-canvas-wrap") as HTMLElement | null;
    if (!stage) return;
    this.resizeObserver = new ResizeObserver(() => {
      this._size = { w: stage.clientWidth, h: stage.clientHeight };
      // a plan nobody has moved since it was fitted stays fitted (the 3D half opening beside the roof tool)
      if ((!this.fitted || this._view === this.fittedView) && this._size.w > 0) {
        this.fitted = true;
        this.fit(this.fittedAll);
      }
    });
    this.resizeObserver.observe(stage);
  }

  /** Hand the draft to the 3D pane a moment after the last change (a drag changes it many times a second). */
  queue3d(): void {
    clearTimeout(this.doc3dTimer);
    this.doc3dTimer = setTimeout(() => (this._doc3d = this.docWithDraft()), 150);
  }

  /** Dragging the divider between the plan and the 3D pane changes their share of the width. */
  onSplitDown(e: PointerEvent): void {
    const pair = (e.currentTarget as HTMLElement).parentElement!;
    const handle = e.currentTarget as HTMLElement;
    handle.setPointerCapture(e.pointerId);
    const rect = pair.getBoundingClientRect();
    const move = (ev: PointerEvent) => {
      this._splitRatio = Math.min(0.8, Math.max(0.2, (ev.clientX - rect.left) / rect.width));
    };
    const up = () => {
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", up);
      handle.removeEventListener("pointercancel", up);
      try {
        localStorage.setItem("home3d.editorSplit", String(Math.round(this._splitRatio * 100)));
      } catch {
        /* no storage */
      }
    };
    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", up);
    handle.addEventListener("pointercancel", up);
    e.preventDefault();
  }

  toggleSplit(): void {
    this._split = !this._split;
    try {
      localStorage.setItem("home3d.editor3d", this._split ? "1" : "0");
    } catch {
      // no storage: the choice lasts for this page
    }
  }

  /** Furnishing in the 3D pane: the item moved there is moved in the draft (undoable, saved with the plan). */
  onFurnitureMoved3d(e: CustomEvent<{ id: string; x: number; z: number }>): void {
    const { id, x, z } = e.detail;
    const wall = this._doc.settings.wall_interior;
    // a part of a block (or of a multi selection) takes the others along by the same step
    const sel = this._wallView ? this.wallSelection() : this._furnitureId ? this.selection() : [];
    const together = sel.includes(id) && sel.length > 1 ? sel : [];
    if (together.length) {
      const f = this.floor?.furniture.find((m) => m.id === id);
      if (!f || together.some((x2) => this.isFixedItem("furniture", x2))) return;
      const dx = round(x - f.x);
      const dz = round(z - f.z);
      const ids = new Set(together);
      this.change((_, floor) => {
        for (const m of floor.furniture) if (ids.has(m.id)) Object.assign(m, { x: round(m.x + dx), z: round(m.z + dz) });
      });
      return;
    }
    this.change((doc) => {
      for (const floor of doc.floors) {
        const f = floor.furniture.find((m) => m.id === id);
        if (!f) continue;
        // the item stays in its room (no dragging through walls)
        const [kx, kz] = keepInRoom(floor, f.x, f.z, x, z);
        const [nx, nz] = clampIntoRoom(floor, f, kx, kz, wall);
        const was = snapToWall(floor, f, wall);
        const gapBefore = was ? Math.hypot(was.x - f.x, was.z - f.z) : Infinity;
        Object.assign(f, { x: nx, z: nz });
        const snap = snapToWall(floor, f, wall);
        // pulled away from the wall (a fridge 15 cm forward): it stays where it was put instead of snapping back
        if (snap && Math.hypot(snap.x - nx, snap.z - nz) <= gapBefore + 0.01) Object.assign(f, snap);
      }
    });
  }

  onDeviceMoved3d(e: CustomEvent<{ id: string; x: number; z: number }>): void {
    const { id, x, z } = e.detail;
    this.change((doc) => {
      for (const floor of doc.floors) {
        const p = floor.placements.find((d) => d.entity_id === id);
        if (!p) continue;
        const [nx, nz] = keepInRoom(floor, p.x, p.z, x, z);
        Object.assign(p, { x: nx, z: nz });
      }
    });
  }

  /** Bar under the 3D pane: turn or delete the selected item or device (as when furnishing in the panel). */
  render3dBar() {
    if (!this.isEditor) return nothing;
    const f = this.furnitureItem;
    const d = this.device;
    if (f) {
      const wallItem = canLift(f);
      const num = (key: "w" | "d" | "h", label: string, min = 0.05) => html`<label class="fp3d-3d-size" title=${this.t(`size_${key}` as I18nKey)}
        >${label}
        <input
          type=${this.unit === "imperial" ? "text" : "number"}
          inputmode="decimal"
          step="0.05"
          min=${min}
          .value=${this.unit === "imperial" ? formatImperial(f[key]) : String(Math.round(f[key] * 100) / 100)}
          @change=${(e: Event) => {
            const v = this.readLen((e.target as HTMLInputElement).value);
            if (v !== null && v >= min) this.updateFurniture({ [key]: Math.round(v * 1000) / 1000 });
          }}
        />
      </label>`;
      return html`<div class="fp3d-3d-bar">
        <span>${furnitureName(this.hass, f.type)}</span>
        ${num("w", this.t("size_short_w"))} ${num("d", this.t("size_short_d"))} ${num("h", this.t("size_short_h"))}
        ${wallItem
          ? html`<label class="fp3d-3d-size" title=${unitLabel(this.t("mount_height"), this.unit)}
              >↕
              <input
                type=${this.unit === "imperial" ? "text" : "number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit === "imperial" ? formatImperial(f.mount_y ?? mountBase(this.floor!, f)) : String(Math.round((f.mount_y ?? mountBase(this.floor!, f)) * 100) / 100)}
                @change=${(e: Event) => {
                  const v = this.readLen((e.target as HTMLInputElement).value);
                  if (v !== null && v >= 0) this.updateFurniture({ mount_y: Math.round(Math.min(MAX_MOUNT_Y, v) * 1000) / 1000 });
                }}
              />
            </label>`
          : nothing}
        <button class="fp3d-chip" @click=${() => this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${() => this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture", f.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`;
    }
    if (d) {
      const kind = kindOf(d.entity_id);
      const light = kind === "light";
      const auto = kind ? defaultHeight(kind, this.floor?.height ?? 2.5, light ? (d.mount ?? "ceiling") : null) : 1;
      return html`<div class="fp3d-3d-bar">
        <span>${entityName(this.hass, d.entity_id)}</span>
        ${light
          ? html`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${(e: Event) => this.updateDevice({ mount: (e.target as HTMLSelectElement).value as LampMount, y: null })}>
              ${(["ceiling", "floor", "table", "wall"] as const).map((m) => html`<option value=${m} ?selected=${m === (d.mount ?? "ceiling")}>${this.t(`lamp_${m}`)}</option>`)}
            </select>`
          : nothing}
        <label class="fp3d-3d-size" title=${unitLabel(this.t("marker_height"), this.unit)}
          >${this.t("size_short_h")}
          <input
            type=${this.unit === "imperial" ? "text" : "number"}
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${this.lenValue(d.y ?? auto)}
            @change=${(e: Event) => {
              const v = this.readLen((e.target as HTMLInputElement).value);
              if (v !== null && v >= 0) this.updateDevice({ y: Math.round(v * 1000) / 1000 });
            }}
          />
        </label>
        <button class="fp3d-chip" @click=${() => this.updateDevice({ rotation: ((((d.rotation ?? 0) - 45) % 360) + 360) % 360 })}>↺ 45°</button>
        <button class="fp3d-chip" @click=${() => this.updateDevice({ rotation: (((d.rotation ?? 0) + 45) % 360) % 360 })}>↻ 45°</button>
        ${this.fixButton("device", d.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${() => this.deleteItem("device", d.entity_id)}>${this.t("delete")}</button>
      </div>`;
    }
    return nothing;
  }

  /** A solar field or roof window grabbed in the 3D pane: its grab point on its face, and the plan before. */
  grab3d: { id: string; win: boolean; du: number; ds: number; base: Building; moved: boolean } | null = null;

  /** Moves solar fields (energy tool) and roof windows (roof tool) in the 3D pane, along the faces under the pointer. */
  surfaceGrabber: SurfaceGrab = {
    start: (ray) => this.grab3dStart(ray),
    move: (ray) => this.grab3dMove(ray),
    end: () => {
      const g = this.grab3d;
      this.grab3d = null;
      if (g?.moved) this.pushHistory(g.base);
    },
  };

  grab3dStart(ray: SurfaceRay): boolean {
    const doc = this._doc;
    const roof = roofFaces(doc);
    let best: { id: string; win: boolean; t: number; du: number; ds: number } | null = null;
    const consider = (id: string, win: boolean, face: RoofFace | null, field: SolarField, locked = false) => {
      if (!face || locked) return;
      const hit = rayOnFace(face, ray.o, ray.d);
      if (!hit || !onField(face, field, hit.u, hit.s) || (best && best.t <= hit.t)) return;
      best = { id, win, t: hit.t, du: hit.u - field.u, ds: hit.s - field.v };
    };
    if (this._tool === "energy") for (const f of doc.settings.roof.solar ?? []) consider(f.id, false, fieldFace(doc, f, roof), f, !!f.locked);
    if (this._tool === "roof") for (const w of doc.settings.roof.windows ?? []) consider(w.id, true, roof.find((x) => x.key === w.face) ?? null, windowAsField(w), !!w.locked);
    if (!best) return false;
    const b = best as { id: string; win: boolean; du: number; ds: number };
    this.grab3d = { id: b.id, win: b.win, du: b.du, ds: b.ds, base: doc, moved: false };
    if (b.win) this._roofWinId = b.id;
    else this.selectSolar(b.id);
    return true;
  }

  grab3dMove(ray: SurfaceRay): void {
    const g = this.grab3d;
    if (!g) return;
    const doc = g.base;
    const winSrc = g.win ? doc.settings.roof.windows?.find((x) => x.id === g.id) : undefined;
    const src = g.win ? (winSrc ? windowAsField(winSrc) : undefined) : doc.settings.roof.solar?.find((x) => x.id === g.id);
    if (!src) return;
    const own = fieldFace(doc, src);
    // free-standing fields stay on their own level; the others go to the face nearest under the pointer
    const faces = own?.unbounded ? [own] : g.win ? roofFaces(doc) : [...roofFaces(doc), ...wallFaces(doc)];
    let best: { face: RoofFace; t: number; u: number; s: number } | null = null;
    for (const face of faces) {
      const hit = rayOnFace(face, ray.o, ray.d);
      if (hit && onFace(face, hit.u, hit.s) && (!best || hit.t < best.t)) best = { face, ...hit };
    }
    if (!best) return;
    const face = best.face;
    const step = 0.05;
    const snapTo = (v: number) => round(Math.round(v / step) * step);
    const kept = clampField(face, { ...src, face: face.key, u: snapTo(best.u - g.du), v: snapTo(best.s - g.ds), tilt: face.flat ? (src.tilt ?? 15) : src.tilt });
    g.moved = true;
    this.change(
      (d) => {
        if (g.win) {
          const w = d.settings.roof.windows?.find((x) => x.id === g.id);
          if (w) Object.assign(w, { face: face.key, ...kept });
          return;
        }
        const f = d.settings.roof.solar?.find((x) => x.id === g.id);
        if (f) Object.assign(f, { face: face.key, ...kept }, face.flat && f.tilt == null ? { tilt: 15 } : {});
      },
      g.base,
      false,
    );
  }

  /** Tools that work on the whole house (roof, solar): the 3D pane shows all floors with the roof. */
  get houseTool(): boolean {
    return this._tool === "roof" || this._tool === "energy";
  }

  render3d() {
    return html`<div class="fp3d-editor-3d">
      ${this.houseTool
        ? nothing
        : html`<div class="fp3d-seg fp3d-3d-walls">
            <button aria-pressed=${this._wall3d === "auto"} @click=${() => this.setWall3d("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d === "cut"} @click=${() => this.setWall3d("cut")}>${this.t("walls_cut")}</button>
          </div>`}
      <button class="fp3d-3d-fold" title=${this.t("split_fold_hint")} aria-label=${this.t("split_fold_hint")} @click=${() => this.toggleSplit()}>✕ 3D</button>
      ${this.render3dBar()}
      <fp3d-view3d
              .walkable=${false}
        .pivotMark=${true}
        .hass=${this.rawHass}
        .home=${this.home}
        .building=${this._doc3d}
        .floorId=${this.houseTool ? null : this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool ? "auto" : this._wall3d}
        .explode=${false}
        .keepRoof=${this._tool === "roof" || this._tool === "energy"}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${false}
        .holograms=${this._tool === "energy" ? true : null}
        .flows=${false}
        ?furnish=${this.isEditor}
        .surfaceGrab=${this.isEditor && this.houseTool ? this.surfaceGrabber : null}
        .furnishTypes=${this._tool === "energy" ? ENERGY_DEVICES : this._tool === "roof" ? [] : null}
        .selectedFurniture=${this._furnitureId}
        .selectedDevice=${this._deviceId}
        .quality=${"auto"}
        .floorThumbs=${false}
        .roomLabels=${true}
        .floorStack=${this.houseTool ? "stacked" : "single"}
        .panelOpen=${false}
        .alerts=${false}
        .scenes=${false}
        @furniture-select=${(e: CustomEvent<{ id: string | null }>) => {
          if (e.detail.id) this.selectFrom3d("furniture", e.detail.id);
          else if (this._furnitureId) this.selectFrom3d("furniture", null);
        }}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${(e: CustomEvent<{ id: string | null }>) => {
          if (e.detail.id) this.selectFrom3d("device", e.detail.id);
          else if (this._deviceId) this.selectFrom3d("device", null);
        }}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${(e: CustomEvent<{ floorId: string | null }>) => {
          if (e.detail.floorId) this._floorId = e.detail.floorId;
          this._sideOpen = false;
        }}
        @room-tap=${(e: CustomEvent<{ floorId: string; roomId: string | null }>) => {
          if (e.detail.floorId) this._floorId = e.detail.floorId;
          if (e.detail.roomId) this.selectFrom3d("room", e.detail.roomId);
          else this._sideOpen = false;
        }}
      ></fp3d-view3d>
    </div>`;
  }

  setWall3d(mode: WallMode): void {
    this._wall3d = mode;
    try {
      localStorage.setItem("home3d.walls3d", mode);
    } catch {
      // no storage: not remembered
    }
  }

  protected updated(changed: PropertyValues): void {
    // another item (room, door, floor …) opens its panel at the top: the fields are where they always are (#71)
    if (selectionMoved(changed, this)) for (const side of this.renderRoot.querySelectorAll<HTMLElement>(".fp3d-side")) side.scrollTop = 0;
    // a part on the Settings page (#139) shows its section unfolded (its summary is hidden there)
    if (this.topic) for (const d of this.renderRoot.querySelectorAll<HTMLDetailsElement>(".fp3d-embed details")) if (!d.open) d.open = true;
    // the item preview is placed in window coordinates; with the 3D view beside the plan an ancestor becomes its
    // containing block (a transform or filter), so "fixed" no longer means the window: measure and correct once
    const preview = this._preview ? this.renderRoot.querySelector<HTMLElement>(".fp3d-preview") : null;
    if (preview && this._preview) {
      const r = preview.getBoundingClientRect();
      const dx = r.left - this._preview.left;
      const dy = r.top - this._preview.top;
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        preview.style.left = `${parseFloat(preview.style.left) - dx}px`;
        preview.style.top = `${parseFloat(preview.style.top) - dy}px`;
      }
    }
    // ?selected only sets an option's selectedness until the user picks one in that select; after that a
    // reused <select> (another room, another item) would keep showing the old pick: follow the attribute
    for (const option of this.renderRoot.querySelectorAll<HTMLOptionElement>("select option[selected]")) {
      if (!option.selected) option.selected = true;
    }
    if (this.reframe3d) {
      this.reframe3d = false;
      // after the 3D half got its new floor (and built the roof): frame it
      setTimeout(() => (this.renderRoot.querySelector("fp3d-view3d") as (HTMLElement & { resetView(): void }) | null)?.resetView(), 250);
    }
    const bg = this.floor?.background;
    if (bg && !this._images[bg.image_id] && !this.loadingImages.has(bg.image_id)) void this.loadImage(bg.image_id);
    // thumbnails of the selected screen's stored pictures
    if (this.furnitureItem?.pictures) {
      // thumbnails of every stored picture in the plan (they can be reused on other screens)
      for (const id of this.storedPictures()) {
        if (!this._images[id] && !this.loadingImages.has(id)) void this.loadImage(id);
      }
    }
  }

  // ------------------------------------------------------------------ document helpers

  get floor(): Floor | undefined {
    return this._doc?.floors.find((f) => f.id === this._floorId);
  }

  get room(): Room | undefined {
    return this.floor?.rooms.find((r) => r.id === this._roomId);
  }

  /** On the editors list (#7): may change the plan. Unset (a backend before #7): admins are. */
  get isEditor(): boolean {
    return this.canEdit ?? this.hass?.user?.is_admin ?? true;
  }

  /** A Home Assistant admin: locating, Assist's sentence files and the editors list stay theirs. */
  get isHaAdmin(): boolean {
    return this.hass?.user?.is_admin ?? false;
  }

  /** Replace the document; `base` (the state before the change) goes into the undo history. */
  setDoc(next: Building, base: Building | null = this._doc): void {
    if (base) this.history.push(base, this.mergeKey, this.mergeWithin);
    this.history.track(next);
    this._doc = next;
    setCameraSensors(next);
    this.showHistory();
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: next }, bubbles: true, composed: true }));
  }

  /** Apply a change to a copy of the document (or of `base`) and store it. */
  change(mutate: (doc: Building, floor: Floor) => void, base: Building = this._doc, history = true): void {
    const next = structuredClone(base);
    const floor = next.floors.find((f) => f.id === this._floorId);
    if (!floor && this._floorId) return;
    mutate(next, floor as Floor);
    syncCameraLooks(next, base);
    this.setDoc(next, history ? base : null);
  }

  /**
   * A change of the current floor alone, made on every pointer move of a drag (#130): only that floor is copied; the
   * other floors, the settings and the recipe copies (most of a big plan) are shared with `base`, which nothing edits
   * in place. No history step (the drag records one when it ends).
   */
  changeFloor(mutate: (floor: Floor) => void, base: Building): void {
    const i = base.floors.findIndex((f) => f.id === this._floorId);
    if (i < 0) return;
    const floor = structuredClone(base.floors[i]);
    mutate(floor);
    const floors = base.floors.slice();
    floors[i] = floor;
    // camera looks follow their camera on this floor; the shared floors are not touched
    syncCameraLooks({ ...base, floors: [floor] }, base);
    this.setDoc({ ...base, floors }, null);
  }

  undo(): void {
    const prev = this.history.undo(this._doc);
    if (prev) this.restore(prev);
  }

  redo(): void {
    const next = this.history.redo(this._doc);
    if (next) this.restore(next);
  }

  /** The undo / redo buttons follow the history. */
  showHistory(): void {
    this._canUndo = this.history.canUndo;
    this._canRedo = this.history.canRedo;
  }

  restore(doc: Building): void {
    this._doc = doc;
    if (!doc.floors.some((f) => f.id === this._floorId)) this._floorId = doc.floors[0]?.id ?? null;
    if (!this.floor?.rooms.some((r) => r.id === this._roomId)) this._roomId = null;
    this._vertex = null;
    this.showHistory();
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: doc }, bubbles: true, composed: true }));
  }

  // ------------------------------------------------------------------ view transform

  toScreen(p: Vec2): [number, number] {
    const { scale, ox, oy } = this._view;
    return [p[0] * scale + ox, p[1] * scale + oy];
  }

  toWorld(sx: number, sy: number): Vec2 {
    const { scale, ox, oy } = this._view;
    return [(sx - ox) / scale, (sy - oy) / scale];
  }

  localPoint(e: PointerEvent | WheelEvent): [number, number] {
    const rect = (this.renderRoot.querySelector("svg") as SVGSVGElement).getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  }

  /** "Whole plan": the floor's rooms; `all` ("Fit everything", #91): the plot, items and devices in the garden too. */
  fit(all = false): void {
    const pts = this.floor?.rooms.flatMap((r) => r.points) ?? [];
    if (all || this._tool === "outdoor" || this._tool === "pool") for (const a of this.floor?.outdoor ?? []) pts.push(...a.points);
    if (all) {
      for (const f of this.floor?.furniture ?? []) {
        const r = Math.max(f.w, f.d) / 2;
        pts.push([f.x - r, f.z - r], [f.x + r, f.z + r]);
      }
      for (const p of this.floor?.placements ?? []) pts.push([p.x, p.z]);
    }
    this.fittedAll = all;
    // the roof tool shows the roof sections too, which reach past the rooms
    if (this._tool === "roof") for (const s of this._doc.settings.roof.sections ?? []) pts.push([s.x0, s.z0], [s.x1, s.z1]);
    const b = pts.length ? bounds(pts) : { x0: 0, z0: 0, x1: 10, z1: 8 };
    const margin = 1.5;
    const w = b.x1 - b.x0 + 2 * margin;
    const h = b.z1 - b.z0 + 2 * margin;
    const scale = Math.max(8, Math.min(400, Math.min(this._size.w / w, this._size.h / h)));
    this._view = {
      scale,
      ox: this._size.w / 2 - ((b.x0 + b.x1) / 2) * scale,
      oy: this._size.h / 2 - ((b.z0 + b.z1) / 2) * scale,
    };
    this.fittedView = this._view;
  }

  /** Bring a plan point to the middle of the plan, zoomed in enough to see a small item there. */
  showPoint(x: number, z: number): void {
    // already in view (with a margin): the plan stays where it is (#75)
    const [sx, sy] = this.toScreen([x, z]);
    const m = 32;
    if (sx >= m && sy >= m && sx <= this._size.w - m && sy <= this._size.h - m) return;
    const scale = Math.max(this._view.scale, 70);
    this._view = { scale, ox: this._size.w / 2 - x * scale, oy: this._size.h / 2 - z * scale };
  }

  zoomAt(factor: number, sx: number, sy: number): void {
    const { scale, ox, oy } = this._view;
    const next = Math.max(8, Math.min(600, scale * factor));
    const k = next / scale;
    this._view = { scale: next, ox: sx - (sx - ox) * k, oy: sy - (sy - oy) * k };
  }

  // ------------------------------------------------------------------ snapping

  snap(p: Vec2, skip?: { roomId: string; index?: number }, free = false): Vec2 {
    this._guides = {};
    if (free) return p;
    const thr = SNAP_PX / this._view.scale;
    const rooms = this.floor?.rooms ?? [];
    const others: Vec2[] = [];
    for (const r of rooms) {
      r.points.forEach((q, i) => {
        if (skip && r.id === skip.roomId && (skip.index === undefined || skip.index === i)) return;
        others.push(q);
      });
    }
    // 1. corners of rooms
    let best: Vec2 | null = null;
    let bestD = thr;
    for (const q of others) {
      const d = Math.hypot(q[0] - p[0], q[1] - p[1]);
      if (d < bestD) {
        bestD = d;
        best = q;
      }
    }
    if (best) {
      this._guides = { point: best };
      return [best[0], best[1]];
    }
    // 2. edges of other rooms (so walls can meet in a T)
    for (const r of rooms) {
      if (skip && r.id === skip.roomId) continue;
      for (let i = 0; i < r.points.length; i++) {
        const a = r.points[i];
        const b = r.points[(i + 1) % r.points.length];
        const dx = b[0] - a[0];
        const dz = b[1] - a[1];
        const l2 = dx * dx + dz * dz;
        if (l2 < 1e-9) continue;
        const t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l2;
        if (t <= 0 || t >= 1) continue;
        const q: Vec2 = [a[0] + t * dx, a[1] + t * dz];
        const d = Math.hypot(q[0] - p[0], q[1] - p[1]);
        const g = this._doc.settings.grid;
        if (Math.abs(dz) < 1e-9) q[0] = Math.min(Math.max(Math.round(q[0] / g) * g, Math.min(a[0], b[0])), Math.max(a[0], b[0]));
        if (Math.abs(dx) < 1e-9) q[1] = Math.min(Math.max(Math.round(q[1] / g) * g, Math.min(a[1], b[1])), Math.max(a[1], b[1]));
        if (d < bestD) {
          bestD = d;
          best = q;
        }
      }
    }
    if (best) {
      this._guides = { point: best };
      return [round(best[0]), round(best[1])];
    }
    // 3. grid, with alignment to other corners per axis
    const g = this._doc.settings.grid;
    const out: Vec2 = [round(Math.round(p[0] / g) * g), round(Math.round(p[1] / g) * g)];
    let ax = thr;
    let az = thr;
    const guides: Guides = {};
    for (const q of others) {
      if (Math.abs(q[0] - p[0]) < ax) {
        ax = Math.abs(q[0] - p[0]);
        out[0] = q[0];
        guides.x = q[0];
      }
      if (Math.abs(q[1] - p[1]) < az) {
        az = Math.abs(q[1] - p[1]);
        out[1] = q[1];
        guides.z = q[1];
      }
    }
    this._guides = guides;
    return out;
  }

  // ------------------------------------------------------------------ pointer input

  onPointerDown(e: PointerEvent): void {
    this._ctx = null;
    this._fixedHint = false;
    this.fixedPan = false;
    // a press that places an armed library card (#76) is no long press for the item menu
    const placing = !!this._placing;
    this.pointerDown(e);
    if (this.pointers.size !== 1) {
      clearTimeout(this.pressTimer);
      return;
    }
    this.guardFixed(this.localPoint(e));
    clearTimeout(this.pressTimer);
    this.pressStart = null;
    if (e.pointerType === "touch" && !placing && (this._tool === "select" || this._tool === "furniture")) {
      const at = this.localPoint(e);
      const target = e.target as Element;
      this.pressStart = at;
      this.pressTimer = window.setTimeout(() => {
        const d = this.drag;
        if (d && "moved" in d && d.moved) return;
        this.drag = null;
        this.openContext(target, at, "touch");
      }, 550);
    }
  }

  /** A drag that would move a fixed item pans the view instead (the item stays selected). */
  guardFixed(local: [number, number]): void {
    const d = this.drag;
    if (!d) return;
    let target: [FixKind, string] | null = null;
    if (d.kind === "vertex" || d.kind === "room") target = ["room", d.roomId];
    else if (d.kind === "device") target = ["device", d.entityId];
    else if (d.kind === "opening") target = ["opening", d.id];
    else if (d.kind === "furniture" || d.kind === "rotate" || d.kind === "resize") target = ["furniture", d.id];
    else if (d.kind === "furnset") target = ["furniture", d.ids.find((id) => this.isFixedItem("furniture", id)) ?? d.ids[0]];
    else if (d.kind === "wallmove") target = ["wall", d.id];
    else if (d.kind === "outdoor") target = ["outdoor", d.id];
    if (!target || !this.isFixedItem(...target)) return;
    if ("moved" in d && d.moved && "base" in d) this.restoreLive(d.base);
    this.drag = { kind: "pan", last: local };
    this.fixedPan = true;
  }

  pointerDown(e: PointerEvent): void {
    const svgEl = e.currentTarget as SVGSVGElement;
    svgEl.setPointerCapture(e.pointerId);
    const local = this.localPoint(e);
    this.pointers.set(e.pointerId, local);
    if (this.pointers.size === 2) {
      // second finger: cancel the current gesture and pinch instead
      if (this.drag && EDIT_DRAGS.has(this.drag.kind) && "moved" in this.drag && this.drag.moved && "base" in this.drag) this.restoreLive(this.drag.base);
      this.drag = null;
      this.pinch = this.pinchState();
      return;
    }
    if (this.pointers.size > 2) return;
    if (e.button === 1 || e.button === 2 || !this.floor) {
      // the right button: dragged it moves the plan, a click without moving opens the item's menu (D518)
      if (e.button === 2) this.rightPress = { at: local, target: e.target as Element, moved: false };
      this.drag = { kind: "pan", last: local };
      return;
    }
    const world = this.toWorld(...local);
    const target = e.target as Element;
    if (this._wallPick) {
      this.pickWall(world);
      return;
    }
    if (this._kerbPick) {
      this.setKerb(world);
      return;
    }
    if (this._bgLevel && this.isEditor && this.floor?.background) {
      // straighten: the second tap turns the picture so the tapped wall runs exactly along x or z
      const pts = [...this._bgLevel, world];
      if (pts.length < 2) this._bgLevel = pts;
      else this.applyBgLevel(pts[0], pts[1]);
      return;
    }
    if (this.bgHandles() && this.floor.background && target.closest("[data-bg-rotate]")) {
      const bg = this.floor.background;
      const img = this._images[bg.image_id];
      const h = bg.width * (img?.aspect ?? 1);
      const c: Vec2 = [bg.x + bg.width / 2, bg.z + h / 2];
      this.drag = { kind: "bgrotate", base: this._doc, moved: false, start: Math.atan2(world[1] - c[1], world[0] - c[0]), rot: bg.rotation ?? 0 };
      return;
    }
    if (this._bgRuler && this._bgRuler.length < 2 && this.isEditor && this.floor?.background) {
      // the ruler: two taps on a stretch of known length in the picture
      this._bgRuler = [...this._bgRuler, world];
      return;
    }
    if (this.bgHandles() && this.floor.background && !this._bgEdit && (target.closest("[data-bg-handle]") || target.closest("[data-bg]"))) {
      // the background section is open: the picture moves and scales like furniture
      const bg = this.floor.background;
      this.drag = target.closest("[data-bg-handle]")
        ? { kind: "bgscale", base: this._doc, moved: false }
        : { kind: "bgmove", start: world, bx: bg.x, bz: bg.z, base: this._doc, moved: false };
      return;
    }
    if (this._bgEdit && this.isEditor && this.floor?.background) {
      // the background picture: its corner scales it, its body moves it; anything else ends the editing
      const bg = this.floor.background;
      if (target.closest("[data-bg-handle]")) {
        this.drag = { kind: "bgscale", base: this._doc, moved: false };
        return;
      }
      if (target.closest("[data-bg]")) {
        this.drag = { kind: "bgmove", start: world, bx: bg.x, bz: bg.z, base: this._doc, moved: false };
        return;
      }
      this._bgEdit = false;
    }
    if (this._tool === "wall") {
      const start = this.snap(world, undefined, e.altKey);
      this.drag = { kind: "freewall", start, end: start };
      return;
    }
    if (this._tool === "pool" && this.poolDown(e, target, world, local)) return;
    if (this._tool === "roof" || this._tool === "energy") {
      const corner = target.closest("[data-roof-corner]")?.getAttribute("data-roof-corner");
      const vertex = target.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex");
      const body = target.closest("[data-roof]")?.getAttribute("data-roof");
      const marker = this._tool === "energy" ? target.closest("[data-energy-device]")?.getAttribute("data-energy-device") : null;
      if (marker) {
        // an energy device by its marker (above solar fields on the roof): selected and moved like furniture
        this._solarId = null;
        this.selectItem("furniture", marker);
        this.drag = this.isEditor ? { kind: "furniture", id: marker, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
        return;
      }
      if (this._tool === "energy" && target.closest("[data-holo-pt]")) {
        // the free hologram's handle
        this.drag = this.isEditor ? { kind: "holopt", base: this._doc, moved: false } : { kind: "pan", last: local };
        return;
      }
      if (this._tool === "energy") {
        const pt = target.closest("[data-cable-pt]")?.getAttribute("data-cable-pt");
        const lockedCable = (id: string) => !!this._doc.settings.roof.cables?.find((c) => c.id === id)?.locked;
        if (pt && this.isEditor && !lockedCable(pt.slice(0, pt.lastIndexOf(":")))) {
          const i = pt.lastIndexOf(":");
          const id = pt.slice(0, i);
          const index = Number(pt.slice(i + 1));
          // a double click takes the point out (one point stays at least)
          if (this.doubleTap(e, `cable:${pt}`)) {
            this.change((d) => {
              const c = d.settings.roof.cables?.find((x) => x.id === id);
              if (c && c.points.length > 1) c.points.splice(index, 1);
            });
            this.drag = { kind: "pan", last: local };
            return;
          }
          this.drag = { kind: "cablept", id, index, base: this._doc, moved: false };
          return;
        }
        const line = target.closest("[data-cable-line]")?.getAttribute("data-cable-line");
        if (line && this.isEditor && !lockedCable(line)) {
          // a click on the laid cable puts a new point there and takes it along (piece i lies before point i)
          const index = Number(target.closest("[data-cable-line]")?.getAttribute("data-cable-seg") ?? 0);
          const base = this._doc;
          this.change((d) => {
            const c = d.settings.roof.cables?.find((x) => x.id === line);
            if (c) c.points.splice(index, 0, [round(world[0]), round(world[1])]);
          });
          this.drag = { kind: "cablept", id: line, index, base, moved: true };
          return;
        }
        const cable = target.closest("[data-cable]")?.getAttribute("data-cable");
        if (cable) {
          this._cableId = cable;
          // grabbing an automatic cable lays it by hand right away, with a new point under the pointer to drag
          if (this.isEditor && this._floorId && !this._doc.settings.roof.cables?.some((c) => c.id === cable)) {
            const base = this._doc;
            this.layCable(cable);
            const laid = this._doc.settings.roof.cables?.find((c) => c.id === cable);
            const mine = this.cableSegments().filter((x) => x.key === cable);
            if (laid && mine.length) {
              const chain: Vec2[] = [[mine[0].a[0], mine[0].a[2]], ...laid.points, [mine[mine.length - 1].b[0], mine[mine.length - 1].b[2]]];
              let index = 0;
              let best = Infinity;
              for (let i = 0; i + 1 < chain.length; i++) {
                const d = distToSegment(world, chain[i], chain[i + 1]);
                if (d < best) {
                  best = d;
                  index = i;
                }
              }
              this.change((d) => {
                const c = d.settings.roof.cables?.find((x) => x.id === cable);
                if (c) c.points.splice(index, 0, [round(world[0]), round(world[1])]);
              });
              this.drag = { kind: "cablept", id: cable, index, base, moved: true };
              return;
            }
          }
          this.drag = { kind: "pan", last: local };
          return;
        }
      }
      const solar = this._tool === "energy" ? target.closest("[data-solar]")?.getAttribute("data-solar") : null;
      const turn = this._tool === "energy" ? target.closest("[data-solar-turn]")?.getAttribute("data-solar-turn") : null;
      if (turn && this.isEditor) {
        this.drag = { kind: "solarturn", id: turn, base: this._doc, moved: false };
        return;
      }
      if (solar) {
        const cell = target.closest("[data-cell]")?.getAttribute("data-cell");
        // pick mode on the selected field: a tap switches the module on or off
        if (this._solarPick && solar === this._solarId && cell && this.isEditor) {
          this.toggleSolarCell(cell);
          this.drag = { kind: "pan", last: local };
          return;
        }
        // otherwise: select the field and move it, also onto another roof face
        if (solar !== this._solarId) this._solarPick = false;
        this._solarId = solar;
        this._roofId = null;
        const field = this._doc.settings.roof.solar?.find((x) => x.id === solar);
        const face = field ? (fieldFace(this._doc, field) ?? undefined) : undefined;
        const hit = face ? this.faceHit(face, world) : null;
        const grab = field && hit ? { du: hit.u - field.u, ds: Number.isNaN(hit.s) ? 0 : hit.s - field.v } : null;
        // solar fields are fittings like furniture: the plan lock (rooms, walls, openings) does not hold them
        this.drag = this.isEditor && !field?.locked ? { kind: "solarmove", id: solar, start: world, startScreen: local, base: this._doc, moved: false, grab } : { kind: "pan", last: local };
        return;
      }
      const win = this._tool === "roof" ? target.closest("[data-roofwin]")?.getAttribute("data-roofwin") : null;
      if (win) {
        this._roofWinId = win;
        this._roofId = null;
        const w = this._doc.settings.roof.windows?.find((x) => x.id === win);
        const face = w ? roofFaces(this._doc).find((f) => f.key === w.face) : undefined;
        const hit = face ? pointOnFace(face, world) : null;
        const grab = w && hit ? { du: hit.u - w.u, ds: hit.s - w.v } : null;
        this.drag = this.isEditor && !w?.locked ? { kind: "solarmove", id: win, start: world, startScreen: local, base: this._doc, moved: false, grab, win: true } : { kind: "pan", last: local };
        return;
      }
      if (this._tool === "roof") this._roofWinId = null;
      const device = this._tool === "energy" ? target.closest(".fp3d-energy-item")?.getAttribute("data-furniture") : null;
      if (device) {
        // an energy device (inverter, battery, wallbox): selected and moved like furniture
        this._solarId = null;
        this.selectItem("furniture", device);
        this.drag = this.isEditor ? { kind: "furniture", id: device, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
        return;
      }
      if (this._tool === "energy") {
        // beside the fields the energy tool only pans the plan
        this.selectItem("furniture", null);
        this._solarId = null;
        this.drag = { kind: "pan", last: local };
        return;
      }
      if (vertex && this.isEditor) {
        const [id, idx] = vertex.split(":");
        this.drag = { kind: "roofvertex", id, index: Number(idx), base: this._doc, moved: false };
      } else if (corner && this.isEditor) {
        const [id, cx, cz] = corner.split(":");
        this.drag = { kind: "roofcorner", id, corner: [cx === "1" ? 1 : 0, cz === "1" ? 1 : 0], base: this._doc, moved: false };
      } else if (body) {
        const fixed = this.roofFixed(this._doc.settings.roof.sections?.find((x) => x.id === body));
        if (fixed && this._roofId === body) this._fixedHint = true;
        this._roofId = body;
        this.drag = this.isEditor && !fixed ? { kind: "roofmove", id: body, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
      } else if (this.isEditor) {
        this._roofId = null;
        const start = this.snap(world, undefined, e.altKey);
        this.drag = { kind: "rect", start, end: start, roof: true };
      } else this.drag = { kind: "pan", last: local };
      return;
    }
    const drawsPool = this._tool === "pool" && !this._pipeMode;
    if (this._tool === "rect" || ((this._tool === "outdoor" || drawsPool) && !this._outdoorFree) || this._tool === "hole") {
      const start = this.snap(world, undefined, e.altKey);
      this.drag = { kind: "rect", start, end: start, outdoor: this._tool === "outdoor" || drawsPool, hole: this._tool === "hole" };
      return;
    }
    if (this._tool === "polygon" || this._tool === "measure" || ((this._tool === "outdoor" || drawsPool) && this._outdoorFree)) {
      this.drag = { kind: "tap", startScreen: local, last: local, panning: false };
      return;
    }
    if (this._tool === "opening") {
      this._openingNote = null;
      // a press on an existing opening selects it (and drags it along its wall) before anything is added (#62)
      const openingEl = target.closest("[data-opening]");
      if (openingEl) this.pressOpening(openingEl.getAttribute("data-opening")!, local);
      else if (!this.placeOpening(this._openingPreset, local, e.altKey)) this.drag = { kind: "pan", last: local };
      return;
    }
    if (this._placing && this.isEditor && (this._tool === "select" || this._tool === "furniture")) {
      // an armed library card lands where the plan is clicked (#76); Shift keeps it for the next click
      this.placeArmed(this.placePoint(world, e.altKey), e.shiftKey);
      this.drag = null;
      return;
    }
    if (this.isEditor && (this._tool === "select" || this._tool === "furniture") && (e.shiftKey || this._multiMode)) {
      // several furniture items: shift-click (or the multi mode on touch) adds or removes one, a drag draws a frame
      const fEl = target.closest("[data-furniture]");
      if (fEl) {
        this.toggleMulti(fEl.getAttribute("data-furniture")!);
        this.drag = null;
      } else this.drag = { kind: "marquee", start: world, end: world, add: true };
      return;
    }
    const petEl = target.closest("[data-pet]");
    if (petEl && this.isEditor) {
      // a static pet (#17): dragged to its spot
      this.drag = { kind: "pet", id: petEl.getAttribute("data-pet")!, start: world, startScreen: local, base: this._doc, moved: false };
      return;
    }
    const deviceEl = target.closest("[data-device]");
    if (deviceEl && this.isEditor) {
      this.drag = { kind: "device", entityId: deviceEl.getAttribute("data-device")!, start: world, startScreen: local, base: this._doc, moved: false };
      return;
    }
    const openingEl = target.closest("[data-opening]");
    // a door's or window's wide invisible tap band gives way to an item pressed on its shape: a radiator under the
    // window, 2 px deep on screen, was out of reach (#132); the opening's drawn gap still wins
    if (openingEl && !(target.getAttribute("class") === "fp3d-open-hit" && this.firmItemAt(world, e.pointerType))) {
      this.pressOpening(openingEl.getAttribute("data-opening")!, local);
      return;
    }
    const resizeEl = target.closest("[data-resize]");
    if (resizeEl && this.isEditor) {
      const [id, sx, sz] = resizeEl.getAttribute("data-resize")!.split(":");
      this.drag = { kind: "resize", id, corner: [sx === "1" ? 1 : -1, sz === "1" ? 1 : -1], base: this._doc, moved: false };
      return;
    }
    const rotateEl = target.closest("[data-rotate]");
    if (rotateEl && this.isEditor) {
      this.drag = { kind: "rotate", id: rotateEl.getAttribute("data-rotate")!, base: this._doc, moved: false };
      return;
    }
    // an item under the press, its drawn shape grown to a minimum target (#72): it wins over the room under it. With
    // Alt held a press on the selected item grabs it (Alt-drag = move freely) and a click goes through the stack (#125)
    const alt = e.altKey ? altPick(this.itemHits(target, world, e.pointerType), this.selection(), this._furnitureId) : null;
    const pickedId = alt ? (alt.grab ?? this.pickItem(target, world, e.pointerType)) : this.pickItem(target, world, e.pointerType);
    if (pickedId) {
      const id = pickedId;
      const now = Date.now();
      const twice = this.lastFurnTap?.id === id && now - this.lastFurnTap.t < 400;
      this.lastFurnTap = { id, t: now };
      const f = this.floor.furniture.find((m) => m.id === id);
      if (twice && f?.group) {
        // a double tap into a block: this one part alone
        this.selectItem("furniture", id);
        this._single = true;
      } else if (!this.selection().includes(id) || this._single) {
        this.selectItem("furniture", id);
      }
      const set = this.selection();
      this.drag = !this.isEditor
        ? { kind: "pan", last: local }
        : set.length > 1
          ? { kind: "furnset", ids: set, start: world, startScreen: local, base: this._doc, moved: false, pick: alt?.next }
          : { kind: "furniture", id, start: world, startScreen: local, base: this._doc, moved: false, pick: alt?.next };
      return;
    }
    const vertexEl = target.closest("[data-vertex]");
    const midEl = target.closest("[data-mid]");
    if (vertexEl && this.room && this.isEditor) {
      this._vertex = Number(vertexEl.getAttribute("data-vertex"));
      this.drag = { kind: "vertex", roomId: this.room.id, index: this._vertex, base: this._doc, moved: false };
      return;
    }
    if (midEl && this.room && this.isEditor) {
      const i = Number(midEl.getAttribute("data-mid"));
      const pts = this.room.points;
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      const mid: Vec2 = [round((a[0] + b[0]) / 2), round((a[1] + b[1]) / 2)];
      const base = this._doc;
      const roomId = this.room.id;
      // no history here: the pointer-up records the state before the insert
      this.change(
        (_, floor) => {
          // the halves keep the wall's settings; splits, part heights and openings go with their half (#157)
          insertCorner(floor, roomId, i, mid);
        },
        base,
        false,
      );
      this._vertex = i + 1;
      this.drag = { kind: "vertex", roomId, index: i + 1, base, moved: true };
      return;
    }
    const wallEndEl = target.closest("[data-wall-end]");
    if (wallEndEl && this.isEditor) {
      const [id, end] = wallEndEl.getAttribute("data-wall-end")!.split(":");
      this.drag = { kind: "wallmove", id, end: end as "a" | "b", start: world, startScreen: local, base: this._doc, moved: false };
      return;
    }
    const freeWallEl = target.closest("[data-free-wall]");
    if (freeWallEl) {
      const id = freeWallEl.getAttribute("data-free-wall")!;
      this.selectItem("wall", id);
      this.drag = this.isEditor ? { kind: "wallmove", id, end: null, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
      return;
    }
    const outBoxEl = target.closest("[data-out-box]");
    if (outBoxEl && this.isEditor) {
      const [id, i] = outBoxEl.getAttribute("data-out-box")!.split(":");
      this.drag = { kind: "outbox", id, corner: Number(i), base: this._doc, moved: false };
      return;
    }
    const outVertexEl = target.closest("[data-out-vertex]");
    if (outVertexEl && this.isEditor) {
      const [id, i] = outVertexEl.getAttribute("data-out-vertex")!.split(":");
      this.drag = { kind: "outvertex", id, index: Number(i), base: this._doc, moved: false };
      return;
    }
    const outdoorEl = target.closest("[data-outdoor]");
    if (outdoorEl && !target.closest("[data-room]") && !this.roomAt(world)) {
      // the drawn element is the topmost area; a smaller one under the point (a pool in the lawn) wins
      const id = this.outdoorAt(world) ?? outdoorEl.getAttribute("data-outdoor")!;
      this.selectItem("outdoor", id);
      this.drag = this.isEditor ? { kind: "outdoor", id, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
      return;
    }
    const roomId = target.closest("[data-room]")?.getAttribute("data-room") ?? this.roomAt(world);
    if (roomId) {
      if (roomId !== this._roomId) this._vertex = null;
      // the body moves the room only once the room alone is selected (#72); the first press selects it and pans
      const selectedAlone = roomId === this._roomId && !this._furnitureId && !this._openingId && !this._deviceId && !this._outdoorId && !this._wallId && !this._multi.length;
      this.selectItem("room", roomId);
      this.drag =
        this.isEditor && this._tool !== "furniture" && selectedAlone
        ? { kind: "room", roomId, start: world, startScreen: local, base: this._doc, moved: false }
        : { kind: "pan", last: local };
      return;
    }
    this.selectItem("room", null);
    this.drag = { kind: "pan", last: local };
  }

  onPointerMove(e: PointerEvent): void {
    if (this.rightPress && !this.rightPress.moved) {
      const p = this.localPoint(e);
      if (Math.hypot(p[0] - this.rightPress.at[0], p[1] - this.rightPress.at[1]) > 5) this.rightPress.moved = true;
    }
    if (this.pressStart) {
      const p = this.localPoint(e);
      if (Math.hypot(p[0] - this.pressStart[0], p[1] - this.pressStart[1]) > 8) {
        clearTimeout(this.pressTimer);
        this.pressStart = null;
        if (this.fixedPan) this._fixedHint = true;
      }
    } else if (this.fixedPan && !this._fixedHint && this.drag?.kind === "pan") this._fixedHint = true;
    const local = this.localPoint(e);
    if (this.pointers.has(e.pointerId)) this.pointers.set(e.pointerId, local);
    if (this.pinch) {
      const now = this.pinchState();
      if (now) {
        this.zoomAt(now.dist / Math.max(1, this.pinch.dist), ...now.mid);
        this._view = { ...this._view, ox: this._view.ox + now.mid[0] - this.pinch.mid[0], oy: this._view.oy + now.mid[1] - this.pinch.mid[1] };
        this.pinch = now;
      }
      return;
    }
    const world = this.toWorld(...local);
    const drag = this.drag;
    if (!drag) {
      if (this._placing) this._placeAt = this.placePoint(world, e.altKey);
      // Doors & windows draws no cursor: a new point there would only render the editor again (#130); its snap
      // guides along the wall come from hoverOpening (#143)
      if (this._tool !== "select" && this._tool !== "furniture" && this._tool !== "opening" && this.floor) this._cursor = this.snap(world, undefined, e.altKey);
      if (this._tool === "opening" && e.pointerType !== "touch") this.hoverOpening(e.target as Element, local, e.altKey);
      return;
    }
    switch (drag.kind) {
      case "pan":
        this._view = { ...this._view, ox: this._view.ox + local[0] - drag.last[0], oy: this._view.oy + local[1] - drag.last[1] };
        drag.last = local;
        break;
      case "tap":
        if (drag.panning || Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) > 6) {
          drag.panning = true;
          this._view = { ...this._view, ox: this._view.ox + local[0] - drag.last[0], oy: this._view.oy + local[1] - drag.last[1] };
        }
        drag.last = local;
        break;
      case "rect":
        drag.end = this.snap(world, undefined, e.altKey);
        this.requestUpdate();
        break;
      case "freewall": {
        // Shift keeps the wall straight (horizontal or vertical)
        let end = this.snap(world, undefined, e.altKey);
        if (e.shiftKey) end = Math.abs(end[0] - drag.start[0]) > Math.abs(end[1] - drag.start[1]) ? [end[0], drag.start[1]] : [drag.start[0], end[1]];
        drag.end = end;
        this.requestUpdate();
        break;
      }
      case "wallmove": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const w = (drag.base.floors.find((f) => f.id === this._floorId)?.walls ?? []).find((q) => q.id === drag.id);
        if (!w) return;
        let next: Pick<FreeWall, "a" | "b">;
        if (drag.end) {
          const p = this.snap(world, undefined, e.altKey);
          next = drag.end === "a" ? { a: p, b: w.b } : { a: w.a, b: p };
        } else {
          const g = e.altKey ? 0.01 : this._doc.settings.grid;
          const dx = Math.round((world[0] - drag.start[0]) / g) * g;
          const dz = Math.round((world[1] - drag.start[1]) / g) * g;
          next = { a: [round(w.a[0] + dx), round(w.a[1] + dz)], b: [round(w.b[0] + dx), round(w.b[1] + dz)] };
        }
        this.changeFloor((floor) => Object.assign((floor.walls ?? []).find((q) => q.id === drag.id)!, next), drag.base);
        break;
      }
      case "vertex": {
        const p = this.snap(world, { roomId: drag.roomId, index: drag.index }, e.altKey);
        drag.moved = true;
        this.change(
          (_, floor) => {
            floor.rooms.find((r) => r.id === drag.roomId)!.points[drag.index] = p;
          },
          drag.base,
          false,
        );
        break;
      }
      case "room": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const room = drag.base.floors.find((f) => f.id === this._floorId)?.rooms.find((r) => r.id === drag.roomId);
        if (!room) return;
        const delta = this.roomDelta(room, [world[0] - drag.start[0], world[1] - drag.start[1]], e.altKey);
        const baseFloor = drag.base.floors.find((f) => f.id === this._floorId)!;
        // devices inside the room move with it
        const inside = new Set(baseFloor.placements.filter((pl) => pointInPolygon([pl.x, pl.z], room.points)).map((pl) => pl.entity_id));
        this.change(
          (_, floor) => {
            const r = floor.rooms.find((x) => x.id === drag.roomId)!;
            r.points = room.points.map(([x, z]) => [round(x + delta[0]), round(z + delta[1])]);
            floor.placements = baseFloor.placements.map((pl) =>
              inside.has(pl.entity_id) ? { ...pl, x: round(pl.x + delta[0]), z: round(pl.z + delta[1]) } : pl,
            );
          },
          drag.base,
          false,
        );
        break;
      }
      case "roofmove": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        const dx = round(Math.round((world[0] - drag.start[0]) / g) * g);
        const dz = round(Math.round((world[1] - drag.start[1]) / g) * g);
        const src = drag.base.settings.roof.sections?.find((x) => x.id === drag.id);
        if (!src) return;
        this.change(
          (doc) => {
            const sec = doc.settings.roof.sections?.find((x) => x.id === drag.id);
            if (!sec) return;
            Object.assign(sec, { x0: round(src.x0 + dx), x1: round(src.x1 + dx), z0: round(src.z0 + dz), z1: round(src.z1 + dz) });
            if (src.pivot) sec.pivot = [round(src.pivot[0] + dx), round(src.pivot[1] + dz)];
            if (src.points) sec.points = src.points.map(([x, z]) => [round(x + dx), round(z + dz)] as Vec2);
          },
          drag.base,
          false,
        );
        break;
      }
      case "solarturn": {
        drag.moved = true;
        const src = drag.base.settings.roof.solar?.find((x) => x.id === drag.id);
        const face = src ? fieldFace(drag.base, src) : null;
        if (!src || !face) return;
        // the handle sits in front of the field: turn its front towards the pointer
        const [cx, cz] = fieldCenter(face, src);
        let a = (Math.atan2(world[0] - cx, -(world[1] - cz)) * 180) / Math.PI;
        const step = e.altKey ? 1 : 15;
        a = Math.round(a / step) * step;
        const turned = turnGroundField(drag.base, src, a);
        this.change(
          (doc) => {
            const f = doc.settings.roof.solar?.find((x) => x.id === drag.id);
            if (f) Object.assign(f, turned);
          },
          drag.base,
          false,
        );
        break;
      }
      case "solarmove": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const winSrc = drag.win ? drag.base.settings.roof.windows?.find((x) => x.id === drag.id) : undefined;
        const src = drag.win ? (winSrc ? windowAsField(winSrc) : undefined) : drag.base.settings.roof.solar?.find((x) => x.id === drag.id);
        // roof faces, and the walls of the floor the plan shows
        const faces = drag.win ? roofFaces(drag.base) : [...roofFaces(drag.base), ...(this._floorId ? wallFaces(drag.base, this._floorId) : [])];
        const own = src ? fieldFace(drag.base, src, faces) : null;
        if (!src || !own) return;
        const step = e.altKey ? 0.01 : 0.05;
        const snapTo = (v: number) => round(Math.round(v / step) * step);
        // over a roof face the field follows the cursor there (it may change to that face) …
        const hit = own.unbounded ? null : faceAt(faces, world);
        let face = own;
        let u: number;
        let v: number;
        if (hit && drag.grab) {
          face = hit.face;
          u = snapTo(hit.u - drag.grab.du);
          // on a wall the height stays (or starts at head height when the field comes from elsewhere)
          v = Number.isNaN(hit.s) ? (hit.face.key === src.face ? src.v : Math.max(0, hit.face.ls - 1.5)) : snapTo(hit.s - drag.grab.ds);
        } else {
          // … elsewhere it moves along its own face (a slope looks shorter in the plan)
          const dx = world[0] - drag.start[0];
          const dz = world[1] - drag.start[1];
          const es = [own.es[0], own.es[2]];
          const esLen2 = es[0] * es[0] + es[1] * es[1] || 1;
          u = snapTo(src.u + dx * own.eu[0] + dz * own.eu[2]);
          v = snapTo(src.v + (dx * es[0] + dz * es[1]) / esLen2);
        }
        // it never slides off its face
        const kept = clampField(face, { ...src, face: face.key, u, v, tilt: face.flat ? (src.tilt ?? 15) : src.tilt });
        this.change(
          (doc) => {
            if (drag.win) {
              const w = doc.settings.roof.windows?.find((x) => x.id === drag.id);
              if (w) Object.assign(w, { face: face.key, ...kept });
              return;
            }
            const f = doc.settings.roof.solar?.find((x) => x.id === drag.id);
            if (f) Object.assign(f, { face: face.key, ...kept }, face.flat && f.tilt == null ? { tilt: 15 } : {});
          },
          drag.base,
          false,
        );
        break;
      }
      case "outbox": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        const src = drag.base.floors.find((f) => f.id === this._floorId)?.outdoor.find((a) => a.id === drag.id);
        if (!src?.pool_shape) return;
        const b = bounds(src.points);
        const corners: Vec2[] = [[b.x0, b.z0], [b.x1, b.z0], [b.x1, b.z1], [b.x0, b.z1]];
        const fixed = corners[(drag.corner + 2) % 4];
        let dx = p[0] - fixed[0];
        let dz = p[1] - fixed[1];
        if (src.pool_shape === "round") {
          // a circle: the larger of the two pulls decides the diameter
          const d = Math.max(Math.abs(dx), Math.abs(dz), 0.5);
          dx = Math.sign(dx || 1) * d;
          dz = Math.sign(dz || 1) * d;
        } else {
          dx = Math.sign(dx || 1) * Math.max(Math.abs(dx), 0.5);
          dz = Math.sign(dz || 1) * Math.max(Math.abs(dz), 0.5);
        }
        const x0 = Math.min(fixed[0], fixed[0] + dx);
        const x1 = Math.max(fixed[0], fixed[0] + dx);
        const z0 = Math.min(fixed[1], fixed[1] + dz);
        const z1 = Math.max(fixed[1], fixed[1] + dz);
        const shape = src.pool_shape;
        this.change(
          (_, floor) => {
            const a = floor.outdoor.find((x) => x.id === drag.id);
            if (a) a.points = poolShapePoints(shape, round(x0), round(z0), round(x1), round(z1));
          },
          drag.base,
          false,
        );
        break;
      }
      case "pipept": {
        drag.moved = true;
        const q = this.snap(world, undefined, e.altKey);
        this.change(
          (_, floor) => {
            const pipe = floor.outdoor.find((a) => a.id === drag.pool)?.pool?.pipes?.find((x) => x.id === drag.pipe);
            if (pipe) pipe.points[drag.index] = [round(q[0]), round(q[1])];
          },
          drag.base,
          false,
        );
        break;
      }
      case "poolport": {
        drag.moved = true;
        const q = this.snap(world, undefined, e.altKey);
        this.change(
          (_, floor) => {
            const area = floor.outdoor.find((a) => a.id === drag.pool);
            const port = area?.pool?.ports?.find((x) => x.id === drag.id);
            if (!area || !port) return;
            // skimmer and inlets sit on the pool's rim, the drain and the waste drain anywhere
            const [x, z] = port.kind === "skimmer" || port.kind === "inlet" ? nearestOnOutline(area.points, q) : q;
            port.x = round(x);
            port.z = round(z);
          },
          drag.base,
          false,
        );
        break;
      }
      case "pooljoint": {
        if (!drag.moved && Math.hypot(world[0] - drag.start[0], world[1] - drag.start[1]) < 0.05) break;
        drag.moved = true;
        const src = drag.base.floors.flatMap((f) => f.outdoor).find((o) => o.id === drag.pool)?.pool?.joints?.find((j) => j.id === drag.id);
        if (!src) break;
        let q = this.snap([src.x + world[0] - drag.start[0], src.z + world[1] - drag.start[1]], undefined, e.altKey);
        // a hole in a wall stays in its wall: it slides along it
        if (src.kind === "wall") {
          const t: Vec2 = [-(src.nz ?? 0), src.nx ?? 0];
          const k = (q[0] - src.x) * t[0] + (q[1] - src.z) * t[1];
          q = [src.x + t[0] * k, src.z + t[1] * k];
        }
        this.change(
          (d) => {
            const j = d.floors.flatMap((f) => f.outdoor).find((o) => o.id === drag.pool)?.pool?.joints?.find((x) => x.id === drag.id);
            if (j) [j.x, j.z] = [round(q[0]), round(q[1])];
          },
          drag.base,
          false,
        );
        break;
      }
      case "pooldev": {
        if (!drag.moved && Math.hypot(world[0] - drag.start[0], world[1] - drag.start[1]) < 0.05) break;
        drag.moved = true;
        const src = drag.base.floors.flatMap((f) => f.furniture).find((m) => m.id === drag.id);
        if (!src) break;
        const q = this.snap([src.x + world[0] - drag.start[0], src.z + world[1] - drag.start[1]], undefined, e.altKey);
        this.change(
          (d) => {
            const f = d.floors.flatMap((x) => x.furniture).find((m) => m.id === drag.id);
            if (f) [f.x, f.z] = [round(q[0]), round(q[1])];
          },
          drag.base,
          false,
        );
        break;
      }
      case "outvertex": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        const src = drag.base.floors.find((f) => f.id === this._floorId)?.outdoor.find((a) => a.id === drag.id);
        if (!src) return;
        const rect = isAxisRect(src.points);
        this.change(
          (_, floor) => {
            const a = floor.outdoor.find((x) => x.id === drag.id);
            if (!a) return;
            const pts = src.points.map((q) => [...q] as Vec2);
            const i = drag.index;
            const old = src.points[i];
            pts[i] = [round(p[0]), round(p[1])];
            // a rectangle stays a rectangle: the corners sharing an x or a z with the dragged one follow
            if (rect)
              src.points.forEach((q, j) => {
                if (j === i) return;
                if (Math.abs(q[0] - old[0]) < 1e-6) pts[j][0] = round(p[0]);
                if (Math.abs(q[1] - old[1]) < 1e-6) pts[j][1] = round(p[1]);
              });
            a.points = pts;
          },
          drag.base,
          false,
        );
        break;
      }
      case "cablept": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        this.change(
          (doc) => {
            const c = doc.settings.roof.cables?.find((x) => x.id === drag.id);
            if (c && c.points[drag.index]) c.points[drag.index] = [round(p[0]), round(p[1])];
          },
          drag.base,
          false,
        );
        break;
      }
      case "holopt": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        this.change((doc) => (doc.settings.roof.hologram = { ...(doc.settings.roof.hologram ?? DEFAULT_HOLOGRAM), place: "free", x: round(p[0]), z: round(p[1]) }), drag.base, false);
        break;
      }
      case "bgmove": {
        drag.moved = true;
        const dx = world[0] - drag.start[0];
        const dz = world[1] - drag.start[1];
        this.change(
          (_, floor) => {
            if (floor.background) {
              floor.background.x = round(drag.bx + dx);
              floor.background.z = round(drag.bz + dz);
            }
          },
          drag.base,
          false,
        );
        break;
      }
      case "bgrotate": {
        drag.moved = true;
        const bg = this.floor?.background;
        const img = bg ? this._images[bg.image_id] : undefined;
        if (!bg || !img) break;
        const h = bg.width * img.aspect;
        const c: Vec2 = [bg.x + bg.width / 2, bg.z + h / 2];
        const now = Math.atan2(world[1] - c[1], world[0] - c[0]);
        // turn about the middle; Shift snaps to whole 15° steps, otherwise tenths of a degree
        let rot = drag.rot + ((now - drag.start) * 180) / Math.PI;
        rot = e.shiftKey ? Math.round(rot / 15) * 15 : Math.round(rot * 10) / 10;
        rot = ((((rot + 180) % 360) + 360) % 360) - 180;
        this.change(
          (_, floor) => {
            if (floor.background) floor.background.rotation = rot;
          },
          drag.base,
          false,
        );
        break;
      }
      case "bgscale": {
        drag.moved = true;
        const bg = this.floor?.background;
        const img = bg ? this._images[bg.image_id] : undefined;
        if (!bg || !img) break;
        // the corner follows the pointer along the picture's own width, whatever its turn
        const [lx] = this.bgLocal(bg, world, img.aspect);
        const width = Math.max(0.5, round(lx));
        this.change(
          (_, floor) => {
            if (floor.background) floor.background.width = width;
          },
          drag.base,
          false,
        );
        break;
      }
      case "roofvertex": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        this.change(
          (doc) => {
            const sec = doc.settings.roof.sections?.find((x) => x.id === drag.id);
            if (!sec?.points || drag.index >= sec.points.length) return;
            sec.points[drag.index] = [round(p[0]), round(p[1])];
            Object.assign(sec, polygonBox(sec.points));
          },
          drag.base,
          false,
        );
        break;
      }
      case "roofcorner": {
        drag.moved = true;
        const p = this.snap(world, undefined, e.altKey);
        this.change(
          (doc) => {
            const sec = doc.settings.roof.sections?.find((x) => x.id === drag.id);
            if (!sec) return;
            if (drag.corner[0]) sec.x1 = round(p[0]);
            else sec.x0 = round(p[0]);
            if (drag.corner[1]) sec.z1 = round(p[1]);
            else sec.z0 = round(p[1]);
          },
          drag.base,
          false,
        );
        break;
      }
      case "opening": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const baseFloor = drag.base.floors.find((f) => f.id === this._floorId);
        const o = baseFloor?.openings.find((x) => x.id === drag.id);
        const host = o && baseFloor ? openingHost(o, baseFloor.rooms, baseFloor.walls ?? []) : null;
        if (!o || !host) return;
        // the wall's middle and ends, equal gaps, set distances from a corner, else the grid; Alt: freely (#143)
        drag.peers ??= wallPeers(baseFloor!, o);
        const offset = this.snapOnEdge(host.room, host.edge, world, o.width, drag.peers, e.altKey);
        this.changeFloor((floor) => patchItem(floor.openings.find((x) => x.id === drag.id), { offset }), drag.base);
        break;
      }
      case "furniture": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const baseFloor = drag.base.floors.find((x) => x.id === this._floorId);
        const f = baseFloor?.furniture.find((x) => x.id === drag.id);
        if (!baseFloor || !f) return;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        const rx = f.x + world[0] - drag.start[0];
        const rz = f.z + world[1] - drag.start[1];
        // alignment with the room's centre lines and other items' edges and centres first (#143; the lines are
        // gathered once per drag); an axis no guide takes goes on the grid
        const aligned = e.altKey ? null : snapPoint([rx, rz], halfSize(f), (drag.lines ??= this.alignLinesFor(baseFloor, f.id)), snapTolerance(this._view.scale));
        let x = aligned?.x ? round(aligned.p[0]) : round(Math.round(rx / g) * g);
        let z = aligned?.z ? round(aligned.p[1]) : round(Math.round(rz / g) * g);
        let rotation = f.rotation;
        // near a wall: turn the back (or a side) to it and sit flush; Alt moves freely
        const snap = e.altKey ? null : this.snapToWall({ ...f, x, z });
        if (snap) ({ x, z, rotation } = snap);
        // a wall that pulled the item off a guide drops that guide
        this.showGuides(aligned?.guides.length ? aligned.guides.filter((q) => Math.abs(q.axis === "x" ? x - aligned.p[0] : z - aligned.p[1]) < 0.002) : []);
        this.changeFloor((floor) => patchItem(floor.furniture.find((q) => q.id === drag.id), { x, z, rotation }), drag.base);
        break;
      }
      case "furnset": {
        // the whole selection by the same step (on the grid; Alt: by the centimetre), no wall snap – it keeps its shape
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        const dx = round(Math.round((world[0] - drag.start[0]) / g) * g);
        const dz = round(Math.round((world[1] - drag.start[1]) / g) * g);
        const ids = new Set(drag.ids);
        this.changeFloor((floor) => {
          for (const m of floor.furniture) if (ids.has(m.id)) Object.assign(m, { x: round(m.x + dx), z: round(m.z + dz) });
        }, drag.base);
        break;
      }
      case "marquee":
        drag.end = world;
        this.requestUpdate();
        break;
      case "outdoor": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const area = drag.base.floors.find((f) => f.id === this._floorId)?.outdoor.find((o) => o.id === drag.id);
        if (!area) return;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        const dx = Math.round((world[0] - drag.start[0]) / g) * g;
        const dz = Math.round((world[1] - drag.start[1]) / g) * g;
        this.change(
          (_, floor) => {
            const o = floor.outdoor.find((x) => x.id === drag.id)!;
            o.points = area.points.map(([x, z]) => [round(x + dx), round(z + dz)]);
            // a pool's ports move with it (pipes keep their own way)
            if (o.pool?.ports && area.pool?.ports) o.pool.ports = area.pool.ports.map((q) => ({ ...q, x: round(q.x + dx), z: round(q.z + dz) }));
          },
          drag.base,
          false,
        );
        break;
      }
      case "resize": {
        drag.moved = true;
        const f = drag.base.floors.find((x) => x.id === this._floorId)?.furniture.find((x) => x.id === drag.id);
        if (!f) return;
        const size = resizeFurniture(f, drag.corner, world, e.altKey ? 0.01 : this._doc.settings.grid);
        this.changeFloor((floor) => patchItem(floor.furniture.find((q) => q.id === drag.id), size), drag.base);
        break;
      }
      case "rotate": {
        drag.moved = true;
        const f = drag.base.floors.find((x) => x.id === this._floorId)?.furniture.find((x) => x.id === drag.id);
        if (!f) return;
        // the handle sits in front of the item: turn the front towards the pointer
        let a = (Math.atan2(-(world[0] - f.x), world[1] - f.z) * 180) / Math.PI;
        const step = e.altKey ? 1 : 15;
        a = ((Math.round(a / step) * step) % 360 + 360) % 360;
        this.changeFloor((floor) => patchItem(floor.furniture.find((q) => q.id === drag.id), { rotation: a }), drag.base);
        break;
      }
      case "device": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const pl = drag.base.floors.find((f) => f.id === this._floorId)?.placements.find((x) => x.entity_id === drag.entityId);
        if (!pl) return;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        const x = round(Math.round((pl.x + world[0] - drag.start[0]) / g) * g);
        const z = round(Math.round((pl.z + world[1] - drag.start[1]) / g) * g);
        this.changeFloor((floor) => patchItem(floor.placements.find((q) => q.entity_id === drag.entityId), { x, z }), drag.base);
        break;
      }
      case "pet": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const pet = drag.base.settings.pets?.list.find((p) => p.id === drag.id);
        if (pet?.x == null || pet.z == null) return;
        const [px, pz] = [pet.x, pet.z];
        this.change((doc) => movePet(doc, drag.id, px + world[0] - drag.start[0], pz + world[1] - drag.start[1], e.altKey ? 0.01 : this._doc.settings.grid), drag.base, false);
        break;
      }
    }
  }

  onPointerUp(e: PointerEvent): void {
    const right = this.rightPress;
    this.rightPress = null;
    if (right && e.button === 2) {
      // the browser's contextmenu event (before or after this) stays quiet; a click without moving opens the menu
      this.rightUp = performance.now();
      if (!right.moved && e.type !== "pointercancel" && (this._tool === "select" || this._tool === "furniture")) this.openContext(right.target, right.at);
    }
    clearTimeout(this.pressTimer);
    this.pressStart = null;
    this.fixedPan = false;
    this.pointers.delete(e.pointerId);
    if (this.pinch) {
      if (this.pointers.size < 2) this.pinch = null;
      return;
    }
    const drag = this.drag;
    this.drag = null;
    if (drag?.kind === "opening" || drag?.kind === "furniture") this._guides = {};
    if (!drag || e.type === "pointercancel") {
      if (drag && EDIT_DRAGS.has(drag.kind) && "moved" in drag && drag.moved && "base" in drag) this.restoreLive(drag.base);
      return;
    }
    const local = this.localPoint(e);
    switch (drag.kind) {
      case "freewall": {
        if (Math.hypot(drag.end[0] - drag.start[0], drag.end[1] - drag.start[1]) >= 0.2) this.addFreeWall(drag.start, drag.end);
        this._guides = {};
        break;
      }
      case "wallmove":
        if (drag.moved) this.pushHistory(drag.base);
        this._guides = {};
        break;
      case "rect": {
        const [x0, z0] = drag.start;
        const [x1, z1] = drag.end;
        if (Math.abs(x1 - x0) >= 0.2 && Math.abs(z1 - z0) >= 0.2) {
          const lo: Vec2 = [Math.min(x0, x1), Math.min(z0, z1)];
          const hi: Vec2 = [Math.max(x0, x1), Math.max(z0, z1)];
          const pts: Vec2[] = [lo, [hi[0], lo[1]], hi, [lo[0], hi[1]]];
          if (drag.outdoor) this.addOutdoor(pts);
          else if (drag.hole) this.addHole(lo, hi);
          else if (drag.roof) this.addRoofSection(lo, hi);
          else this.addRoom(pts);
        }
        this._guides = {};
        break;
      }
      case "tap":
        if (drag.panning) break;
        // by measure, a tap only sets (or moves) the starting point; the walls are typed in
        if (this._tool === "measure") this._draft = [this.snap(this.toWorld(...local), undefined, e.altKey)];
        else this.addDraftPoint(this.snap(this.toWorld(...local), undefined, e.altKey), local);
        break;
      case "marquee": {
        // everything whose centre lies in the frame joins the selection
        const [x0, x1] = [Math.min(drag.start[0], drag.end[0]), Math.max(drag.start[0], drag.end[0])];
        const [z0, z1] = [Math.min(drag.start[1], drag.end[1]), Math.max(drag.start[1], drag.end[1])];
        const hit = (this.floor?.furniture ?? []).filter((m) => m.x >= x0 && m.x <= x1 && m.z >= z0 && m.z <= z1).map((m) => m.id);
        if (hit.length) this.setMulti([...new Set([...this.selection(), ...this.withGroups(hit)])]);
        break;
      }
      case "opening":
      case "furniture":
      case "furnset":
      case "rotate":
      case "resize":
      case "outdoor":
      case "solarmove":
      case "solarturn":
      case "roofmove":
      case "roofcorner":
      case "roofvertex":
      case "cablept":
      case "outvertex":
      case "outbox":
      case "pipept":
      case "poolport":
      case "pooljoint":
        if (drag.moved) this.pushHistory(drag.base);
        // Alt+click without moving: the next item in the stack (#75, #125)
        else if ((drag.kind === "furniture" || drag.kind === "furnset") && drag.pick) this.selectItem("furniture", drag.pick);
        // a tap on a port or a joint opens its card
        else if (drag.kind === "poolport" || drag.kind === "pooljoint") this.openCard(drag.pool, `${drag.kind === "poolport" ? "port" : "joint"}:${drag.id}`);
        break;
      case "holopt":
      case "bgmove":
      case "bgscale":
      case "bgrotate":
        if (drag.moved) this.pushHistory(drag.base);
        break;
      case "pooldev": {
        if (drag.moved) this.pushHistory(drag.base);
        // a tap on a ball valve opens or closes it, on any other device its card
        else if (this._doc.floors.flatMap((f) => f.furniture).find((m) => m.id === drag.id)?.type === "pool_valve") this.togglePoolValve(drag.id);
        else if (this.poolArea) this.openCard(this.poolArea.id, `dev:${drag.id}`);
        break;
      }
      case "pet":
        if (drag.moved) this.pushHistory(drag.base);
        break;
      case "device":
        if (drag.moved) this.pushHistory(drag.base);
        // a tap on a device selects it (and the room it stands in)
        else this.selectItem("device", drag.entityId);
        break;
      case "vertex":
      case "room":
        // the drag already changed the document without history; record the state before the drag
        if (drag.moved) this.pushHistory(drag.base);
        if (drag.moved && drag.kind === "vertex") this.noteResize(drag.roomId, drag.base);
        this._guides = {};
        break;
      default:
        break;
    }
  }

  onWheel(e: WheelEvent): void {
    e.preventDefault();
    const [sx, sy] = this.localPoint(e);
    this.zoomAt(Math.exp(-e.deltaY * (e.deltaMode === 1 ? 0.05 : 0.0015)), sx, sy);
  }

  pinchState(): { dist: number; mid: [number, number] } | null {
    const pts = [...this.pointers.values()];
    if (pts.length < 2) return null;
    const [a, b] = pts;
    return { dist: Math.hypot(a[0] - b[0], a[1] - b[1]), mid: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] };
  }

  pushHistory(base: Building): void {
    this.history.push(base);
    this.showHistory();
  }

  restoreLive(base: Building): void {
    this._doc = base;
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: base }, bubbles: true, composed: true }));
  }

  /** Movement of a whole room: grid steps, pulled onto nearby corners of other rooms. */
  roomDelta(room: Room, raw: Vec2, free: boolean): Vec2 {
    if (free) return raw;
    const g = this._doc.settings.grid;
    let delta: Vec2 = [Math.round(raw[0] / g) * g, Math.round(raw[1] / g) * g];
    const thr = SNAP_PX / this._view.scale;
    let best = thr;
    this._guides = {};
    for (const other of this.floor?.rooms ?? []) {
      if (other.id === room.id) continue;
      for (const q of other.points) {
        for (const p of room.points) {
          const d = Math.hypot(p[0] + raw[0] - q[0], p[1] + raw[1] - q[1]);
          if (d < best) {
            best = d;
            delta = [q[0] - p[0], q[1] - p[1]];
            this._guides = { point: q };
          }
        }
      }
    }
    return delta;
  }

  roomAt(p: Vec2): string | null {
    const rooms = this.floor?.rooms ?? [];
    // smallest room first so nested rooms stay reachable
    const hits = rooms.filter((r) => pointInPolygon(p, r.points)).sort((a, b) => polygonArea(a.points) - polygonArea(b.points));
    return hits[0]?.id ?? null;
  }

  /** The outdoor area under a point: the smallest one, so a pool in a lawn or a bed on a terrace stays reachable. */
  outdoorAt(p: Vec2): string | null {
    const areas = this.floor?.outdoor ?? [];
    const hits = areas.filter((a) => a.points.length >= 3 && pointInPolygon(p, a.points)).sort((a, b) => polygonArea(a.points) - polygonArea(b.points));
    return hits[0]?.id ?? null;
  }

  /** Corners are set one by one: the free-form room, and an outdoor area drawn as a free shape. */
  get drawingPoints(): boolean {
    return this._tool === "polygon" || ((this._tool === "outdoor" || (this._tool === "pool" && !this._pipeMode)) && this._outdoorFree);
  }

  addDraftPoint(p: Vec2, screen: [number, number]): void {
    const draft = this._draft;
    if (draft.length >= 3) {
      const [fx, fy] = this.toScreen(draft[0]);
      if (Math.hypot(fx - screen[0], fy - screen[1]) < 14) {
        this.closeDraft();
        return;
      }
    }
    const last = draft[draft.length - 1];
    if (last && Math.hypot(last[0] - p[0], last[1] - p[1]) < 1e-6) return;
    this._draft = [...draft, p];
  }

  closeDraft(): void {
    if (this._draft.length >= 3 && Math.abs(polygonArea(this._draft)) > 0.05) {
      if (this._tool === "outdoor" || this._tool === "pool") this.addOutdoor(this._draft);
      else this.addRoom(this._draft);
    }
    this._draft = [];
    this._cursor = null;
    this._guides = {};
  }

  /** Adds a wall of the typed length in a direction (drawing by measure). */
  measureStep(dir: Direction): void {
    const last = this._draft[this._draft.length - 1];
    if (!last || !(this._measureLen > 0)) return;
    const next = step(last, this._measureLen, dir);
    // arriving at the start closes the room
    const first = this._draft[0];
    if (this._draft.length >= 3 && Math.hypot(next[0] - first[0], next[1] - first[1]) < 0.01) {
      this.closeDraft();
      return;
    }
    this._draft = [...this._draft, next];
  }

  rectBySize(): void {
    const start = this._draft[0] ?? [0, 0];
    const [w, d] = this._rectSize;
    if (!(w >= 0.1 && d >= 0.1)) {
      this._notice = this.t("rect_too_small", { min: this.m(0.1) });
      return;
    }
    this._notice = null;
    const floor = this.floor;
    const fallback = this.t("new_room", { n: (floor?.rooms.length ?? 0) + 1 });
    const named = nameNewRoom(this._rectName, Object.values(this.hass?.areas ?? {}), this.usedAreas(), fallback);
    this.addRoom([start, step(start, w, "right"), step(step(start, w, "right"), d, "down"), step(start, d, "down")], named);
    this._draft = [];
    this._rectName = "";
  }

  /** Type the start corner of the next room (#65): moves a tapped start and any walls typed from it. */
  setRectStart(axis: 0 | 1, value: number): void {
    if (!Number.isFinite(value)) return;
    const start: Vec2 = this._draft[0] ?? [0, 0];
    const delta = round(value - start[axis]);
    const shift = (p: Vec2): Vec2 => (axis === 0 ? [round(p[0] + delta), p[1]] : [p[0], round(p[1] + delta)]);
    this._draft = this._draft.length ? this._draft.map(shift) : [shift(start)];
  }

  /** Areas some room or outdoor area of the home already stands for. */
  usedAreas(): Set<string | null> {
    return new Set(this._doc.floors.flatMap((f) => [...f.rooms.map((r) => r.area_id), ...(f.outdoor ?? []).map((a) => a.area_id ?? null)]));
  }

  renderMeasureForm() {
    const draft = this._draft;
    const first = draft[0];
    const last = draft[draft.length - 1];
    const gap = first && last && draft.length > 1 ? Math.hypot(last[0] - first[0], last[1] - first[1]) : 0;
    const arrows: [Direction, string][] = [
      ["up", "↑"],
      ["left", "←"],
      ["right", "→"],
      ["down", "↓"],
    ];
    const len = (v: number) => formatNumber(this.hass, v, 2);
    return html`<section>
      <h3>${this.t("measure")}</h3>
      ${!first
        ? html`<p class="fp3d-sub">${this.t("measure_start")}</p>`
        : html`<p class="fp3d-sub">${this.t("measure_from", { x: this.m(first[0]), z: this.m(first[1]) })}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${unitLabel(this.t("measure_length"), this.unit)}
                <input
                  class="fp3d-measure-input"
                  type=${this.unit === "imperial" ? "text" : "number"}
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${this.lenValue(this._measureLen)}
                  @change=${(e: Event) => (this._measureLen = this.readLen((e.target as HTMLInputElement).value) ?? 0)}
                  @keydown=${(e: KeyboardEvent) => {
                    const dir = { ArrowRight: "right", ArrowLeft: "left", ArrowUp: "up", ArrowDown: "down" }[e.key] as Direction | undefined;
                    if (dir) {
                      e.preventDefault();
                      this.measureStep(dir);
                    } else if (e.key === "Enter") this.closeDraft();
                  }}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${arrows.map(([dir, label]) => html`<button class="fp3d-btn fp3d-arrow-${dir}" title=${this.t(`dir_${dir}`)} @click=${() => this.measureStep(dir)}>${label}</button>`)}
              </div>
            </div>
            ${draft.length > 1
              ? html`<ol class="fp3d-measure-list">
                  ${draft.slice(1).map((p, i) => html`<li>${this.m(Math.hypot(p[0] - draft[i][0], p[1] - draft[i][1]))}</li>`)}
                </ol>`
              : nothing}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${draft.length < 3} @click=${() => this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${draft.length < 2} @click=${() => (this._draft = draft.slice(0, -1))}>${this.t("measure_undo")}</button>
            </div>
            ${draft.length >= 3 ? html`<p class="fp3d-sub">${this.t("measure_gap", { gap: len(gap) })}</p>` : nothing}`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      ${this._notice ? html`<p class="fp3d-sub fp3d-notice">${this._notice}</p>` : nothing}
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input
            list="fp3d-room-names"
            .value=${this._rectName}
            placeholder=${this.t("new_room", { n: (this.floor?.rooms.length ?? 0) + 1 })}
            @change=${(e: Event) => (this._rectName = (e.target as HTMLInputElement).value)}
            @keydown=${(e: KeyboardEvent) => {
              if (e.key !== "Enter") return;
              this._rectName = (e.target as HTMLInputElement).value;
              this.rectBySize();
            }}
          /><datalist id="fp3d-room-names">
            ${roomNameSuggestions(Object.values(this.hass?.areas ?? {}), this.usedAreas(), this.floor?.ha_floor ?? null).map((n) => html`<option value=${n}></option>`)}
          </datalist></label
        >
        ${this.len(this.t("x"), first?.[0] ?? 0, (v) => this.setRectStart(0, v))} ${this.len(this.t("z"), first?.[1] ?? 0, (v) => this.setRectStart(1, v))}
        ${this.len(this.t("width"), this._rectSize[0], (v) => (this._rectSize = [Math.max(0.1, v), this._rectSize[1]]), 0.01, 0.1)}
        ${this.len(this.t("depth"), this._rectSize[1], (v) => (this._rectSize = [this._rectSize[0], Math.max(0.1, v)]), 0.01, 0.1)}
        <button class="fp3d-btn fp3d-wide" @click=${() => this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`;
  }

  /** A free-standing wall from a to b (a partition through part of a room). */
  addFreeWall(a: Vec2, b: Vec2): void {
    if (!this.floor) return;
    const wall: FreeWall = { id: uid("wall"), a: [round(a[0]), round(a[1])], b: [round(b[0]), round(b[1])], thickness: null };
    this.change((_, floor) => (floor.walls = [...(floor.walls ?? []), wall]));
    this.selectItem("wall", wall.id);
  }

  get freeWall(): FreeWall | undefined {
    return this._wallId ? (this.floor?.walls ?? []).find((w) => w.id === this._wallId) : undefined;
  }

  updateFreeWall(patch: Partial<FreeWall>): void {
    const id = this._wallId;
    if (!id) return;
    this.change((_, floor) => Object.assign((floor.walls ?? []).find((w) => w.id === id)!, patch));
  }

  async deleteFreeWall(): Promise<void> {
    const id = this._wallId;
    if (!id || !this.isEditor || !(await this.confirmFixedDelete("wall", id))) return;
    this.change((_, floor) => {
      floor.walls = (floor.walls ?? []).filter((w) => w.id !== id);
      floor.openings = floor.openings.filter((o) => o.wall !== id);
    });
    this._wallId = null;
  }

  /** The plan symbol of free walls: a wide invisible hit line, and end handles when selected. */
  renderFreeWalls(floor: Floor) {
    return svg`<g>${(floor.walls ?? []).map((w) => {
      const [x0, y0] = this.toScreen(w.a);
      const [x1, y1] = this.toScreen(w.b);
      const sel = w.id === this._wallId;
      return svg`<g data-free-wall=${w.id} class=${`fp3d-free-wall${sel ? " fp3d-free-wall-sel" : ""}`}>
        <line class="fp3d-hit" x1=${x0} y1=${y0} x2=${x1} y2=${y1} />
        <line class="fp3d-free-wall-line" x1=${x0} y1=${y0} x2=${x1} y2=${y1} />
      </g>
      ${sel && this.isEditor && !isFixed(w, true, this._doc.settings)
        ? svg`<g class="fp3d-vertex" data-wall-end=${`${w.id}:a`}><circle cx=${x0} cy=${y0} r="16" class="fp3d-hit" /><circle cx=${x0} cy=${y0} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${w.id}:b`}><circle cx=${x1} cy=${y1} r="16" class="fp3d-hit" /><circle cx=${x1} cy=${y1} r="6" /></g>`
        : nothing}`;
    })}</g>`;
  }

  renderFreeWallForm(w: FreeWall) {
    const admin = this.isEditor;
    const length = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]);
    const setLength = (v: number) => {
      const l = Math.max(0.1, v);
      const k = l / (length || 1);
      this.updateFreeWall({ b: [round(w.a[0] + (w.b[0] - w.a[0]) * k), round(w.a[1] + (w.b[1] - w.a[1]) * k)] });
    };
    // X/Y name the wall's middle like a piece of furniture's; typing moves the whole wall, off the grid (#315)
    const mid: Vec2 = [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2];
    const moveTo = (i: 0 | 1, v: number) => {
      const d = v - mid[i];
      const shift = (p: Vec2): Vec2 => (i === 0 ? [round(p[0] + d), p[1]] : [p[0], round(p[1] + d)]);
      this.updateFreeWall({ a: shift(w.a), b: shift(w.b) });
    };
    return html`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall", w.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"), mid[0], (v) => moveTo(0, v))} ${this.len(this.t("z"), mid[1], (v) => moveTo(1, v))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"), length, setLength, 0.01, 0.1)}
        ${this.len(this.t("wall_thickness"), w.thickness ?? this._doc.settings.wall_interior, (v) => this.updateFreeWall({ thickness: Math.min(1, Math.max(0.02, v)) }), 0.01, 0.02)}
        ${this.len(this.t("wall_height"), w.height ?? this.floor?.height ?? 2.5, (v) => this.updateFreeWall({ height: v >= (this.floor?.height ?? 2.5) - 0.005 ? null : Math.max(0.05, v) }), 0.05, 0.05)}
      </div>
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`
        : nothing}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`;
  }

  /** A floor opening (stairwell, gallery): a hole in this floor's floor, drawn as a rectangle. */
  addHole(lo: Vec2, hi: Vec2): void {
    if (!this.floor) return;
    const item: Furniture = {
      id: uid("hole"),
      type: "stairwell",
      x: round((lo[0] + hi[0]) / 2),
      z: round((lo[1] + hi[1]) / 2),
      w: round(hi[0] - lo[0]),
      d: round(hi[1] - lo[1]),
      h: 0.02,
      rotation: 0,
      variant: null,
    };
    this.change((_, floor) => floor.furniture.push(item));
    this.selectItem("furniture", item.id);
    // the tool stays: the next one is placed right away (Esc or "Select" ends it)
  }

  addOutdoor(points: Vec2[]): void {
    if (!this.floor) return;
    const type = this._tool === "pool" ? "pool" : (this._outdoorType ?? "lawn");
    const area: OutdoorArea = { id: uid("outdoor"), type, points: points.map(([x, z]) => [round(x), round(z)]) };
    const shape = type === "pool" && !this._outdoorFree ? this._poolShape : "rect";
    if (shape === "round" || shape === "oval") {
      const b = bounds(area.points);
      area.points = poolShapePoints(shape, b.x0, b.z0, b.x1, b.z1);
      area.pool_shape = shape;
    }
    // a new pool comes with its links when a module draws pools (Pool Pro: its entities are found by name)
    if (type === "pool" && this.pipeRules) area.pool = {};
    this.change((_, floor) => floor.outdoor.push(area));
    this.selectItem("outdoor", area.id);
    // the tool stays: the next area (or the pool's ports and pipes) right away; Esc or "Select" ends it
  }

  get outdoorArea(): OutdoorArea | undefined {
    return this._outdoorId ? this.floor?.outdoor.find((o) => o.id === this._outdoorId) : undefined;
  }

  updateOutdoor(patch: Partial<OutdoorArea>): void {
    const id = this._outdoorId;
    this.change((_, floor) => patchItem(floor.outdoor.find((o) => o.id === id), patch));
  }

  async deleteOutdoor(): Promise<void> {
    const id = this._outdoorId;
    if (!id || !this.isEditor || !(await this.confirmFixedDelete("outdoor", id))) return;
    // a pool with its pipes is a lot of work: ask first
    const a = this.floor?.outdoor.find((o) => o.id === id);
    const pipes = a?.pool?.pipes?.length ?? 0;
    if (a?.type === "pool" && pipes && !(await this.ask(this.t("pool_delete_confirm", { n: pipes })))) return;
    this.change((_, floor) => (floor.outdoor = floor.outdoor.filter((o) => o.id !== id)));
    this._outdoorId = null;
  }

  duplicateOutdoor(): void {
    const a = this.outdoorArea;
    if (!a || !this.isEditor) return;
    const copy: OutdoorArea = { ...a, id: uid("outdoor"), points: a.points.map(([x, z]) => [round(x + 0.5), round(z + 0.5)]) };
    this.change((_, floor) => floor.outdoor.push(copy));
    this.selectItem("outdoor", copy.id);
  }

  addRoom(points: Vec2[], named?: { name: string; area_id: string | null }): void {
    if (!this.floor) return;
    const id = uid("room");
    const n = this.floor.rooms.length + 1;
    const { name, area_id } = named ?? { name: this.t("new_room", { n }), area_id: null };
    this.change((_, floor) => floor.rooms.push({ id, name, area_id, points: points.map(([x, z]) => [round(x), round(z)]), floor_material: "wood" }));
    this._roomId = id;
    this._vertex = null;
    // the tool stays: one room after the other (Esc or "Select" ends it)
  }

  // ------------------------------------------------------------------ keyboard

  readonly onKey = (e: KeyboardEvent) => {
    // a part on the Settings page has no plan to work the keys on
    if (this.topic) return;
    this.shiftHeld = e.shiftKey;
    const path = e.composedPath();
    if (path.some((el) => el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement)) {
      // Escape in one of the editor's boxes lets go of it (what was typed is kept): the shortcuts work again (#70)
      if (e.key === "Escape" && path.includes(this)) this.escape();
      return;
    }
    if (!this.isConnected || !this.offsetParent) return;
    // an entity picker with its list open has the keyboard, even when a press beside its box took the focus (#132)
    if (this.pickerOpen()) return;
    // '?' shows the help (#95); while it is open no key edits the plan behind it, and Esc closes it first
    if (isHelpKey(e)) {
      e.preventDefault();
      this._help = !this._help;
      return;
    }
    if (this._help) {
      if (e.key === "Escape") this._help = false;
      return;
    }
    // the rack sheet (#113) has its own keys; none edits the plan behind it
    if (this._rackSheet) {
      if (e.key === "Escape") this._rackSheet = null;
      return;
    }
    const mod = e.ctrlKey || e.metaKey;
    // the wall view has its own keys: Delete there must never reach what is chosen in the plan behind it
    // (it took the whole pool with every pipe); only undo and redo still work from here
    if (this._wallView && !(mod && ["z", "y"].includes(e.key.toLowerCase()))) return;
    if (mod && e.key.toLowerCase() === "z") {
      e.preventDefault();
      if (e.shiftKey) this.redo();
      else this.undo();
    } else if (mod && e.key.toLowerCase() === "y") {
      e.preventDefault();
      this.redo();
    } else if (clipboardKey(e)) {
      // the editor's own clipboard (#74); a key with nothing to do leaves the browser's copy and paste alone
      const act = clipboardKey(e);
      if (act === "copy" ? this.copySelection() : act === "paste" ? this.pasteClipboard() : this.selectAll()) e.preventDefault();
    } else if (mod && e.key.toLowerCase() === "d") {
      e.preventDefault();
      if (this._furnitureId) this.duplicateFurniture();
      else this.duplicateRoom();
    } else if (e.key === "Delete" || (e.key === "Backspace" && (this._tool === "select" || this._tool === "furniture"))) {
      this.deleteSelected();
    } else if (e.key.toLowerCase() === "l" && !mod && this._tool === "roof" && this.roofSection && !this._doc.settings.lock_plan) {
      this.updateRoofSection({ locked: !this.roofSection.locked });
    } else if (e.key.toLowerCase() === "l" && !mod && this._furnitureId && this.selection().length > 1) {
      this.lockSelection(!this.selection().every((id) => this.isFixedItem("furniture", id)));
    } else if (e.key.toLowerCase() === "l" && !mod && (this._furnitureId || this._deviceId)) {
      const s = this.selectedFix!;
      this.toggleFixed(s.kind, s.id);
    } else if (Object.prototype.hasOwnProperty.call(ARROWS, e.key) && !mod && (this._tool === "select" || this._tool === "furniture")) {
      // arrow keys nudge the selection: one grid step, Shift 10 cm, Alt 1 cm
      const step = e.altKey ? 0.01 : e.shiftKey ? 0.1 : this._doc.settings.grid;
      const [dx, dz] = ARROWS[e.key];
      if (this.nudge(dx * step, dz * step)) e.preventDefault();
    } else if (e.key.toLowerCase() === "r" && !mod && this._furnitureId) {
      this.rotateFurniture(e.shiftKey ? -90 : 90);
    } else if (e.key === "Tab" && !mod && !e.altKey && this._furnitureId && (this._tool === "select" || this._tool === "furniture") && this.keysFree(path)) {
      // Tab steps through the items of the room (#75), Shift+Tab backwards
      const next = nextPick(this.tabItems(), this._furnitureId, e.shiftKey ? -1 : 1);
      if (next) {
        e.preventDefault();
        this.selectFromList(next);
      }
    } else if (e.key === "Backspace" && this.drawingPoints) {
      this._draft = this._draft.slice(0, -1);
    } else if (e.key === "Enter" && this.drawingPoints) {
      this.closeDraft();
    } else if (e.key === "Escape") {
      this.escape();
    }
  };

  /** Whether one of the side panel's entity pickers shows its list (#132). */
  pickerOpen(): boolean {
    const pickers = (this.renderRoot as ShadowRoot | undefined)?.querySelectorAll?.("fp3d-entity-picker") ?? [];
    return [...pickers].some((p) => (p as unknown as { open?: boolean }).open);
  }

  /** One step back per Escape (#70): the box with the cursor, a menu, a pipe or outline, the item, the tool, the room. */
  escape(): void {
    if (this._kerbPick) {
      this._kerbPick = false;
      return;
    }
    const step = escapeStep({
      typing: takesTyping(deepActive(this.renderRoot as ShadowRoot)),
      menu: !!this._ctx,
      placing: !!this._placing,
      pipeDraft: !!this._pipeDraft,
      pipeMode: this._pipeMode,
      drawing: this._draft.length > 0,
      item: !!(this._furnitureId || this._openingId || this._deviceId || this._outdoorId || this._wallId),
      tool: this._tool,
      room: !!this._roomId,
    });
    if (step === "release") releaseTyping(this.renderRoot as ShadowRoot);
    else if (step === "close_menu") this._ctx = null;
    else if (step === "cancel_place") this.cancelPlacing();
    else if (step === "cancel_pipe") this._pipeDraft = null;
    else if (step === "end_pipe_mode") this._pipeMode = false;
    else {
      if (step === "clear_draft") this._draft = [];
      // back to the library (furnishing) or to the item's room, the tool stays
      else if (step === "deselect_item") this.selectItem("room", this._roomId);
      else if (step === "select_tool") this._tool = "select";
      else this.selectItem("room", null);
      this._cursor = null;
    }
  }

  /**
   * Nothing that uses Tab itself has the keyboard (#75): no button, link or field is focused, so Tab may step
   * through items instead of moving the focus.
   */
  keysFree(path: EventTarget[]): boolean {
    const top = path[0];
    if (!top) return true;
    if (top === this || (typeof document !== "undefined" && (top === document.body || top === document.documentElement))) return true;
    return typeof SVGElement !== "undefined" && top instanceof SVGElement;
  }

  // ------------------------------------------------------------------ actions

  /**
   * Moves the selected item by (dx, dz) metres; false when nothing movable is selected. Nudges of the same selection
   * in quick succession are one undo step (#66).
   */
  nudge(dx: number, dz: number): boolean {
    const key = ["nudge", this._furnitureId ? this.selection().join(",") : "", this._deviceId, this._openingId, this._wallId, this._outdoorId, this._roomId, this._vertex].join("|");
    this.mergeKey = key;
    try {
      return this.nudgeBy(dx, dz);
    } finally {
      this.mergeKey = null;
    }
  }

  nudgeBy(dx: number, dz: number): boolean {
    const floor = this.floor;
    if (!floor || !this.isEditor) return false;
    const fix = this.selectedFix;
    const set = this._furnitureId ? this.selection() : [];
    if ((fix && this.isFixedItem(fix.kind, fix.id)) || set.some((id) => this.isFixedItem("furniture", id))) {
      this._fixedHint = true;
      return true;
    }
    const mv = (p: Vec2): Vec2 => [round(p[0] + dx), round(p[1] + dz)];
    if (set.length > 1) {
      const ids = new Set(set);
      this.change((_, f) => {
        for (const m of f.furniture) if (ids.has(m.id)) [m.x, m.z] = mv([m.x, m.z]);
      });
      return true;
    }
    if (this._deviceId) {
      const id = this._deviceId;
      if (!floor.placements.some((p) => p.entity_id === id)) return false;
      this.change((_, f) => {
        const p = f.placements.find((x) => x.entity_id === id)!;
        [p.x, p.z] = mv([p.x, p.z]);
      });
    } else if (this._furnitureId) {
      const id = this._furnitureId;
      this.change((_, f) => {
        const m = f.furniture.find((x) => x.id === id);
        if (m) [m.x, m.z] = mv([m.x, m.z]);
      });
    } else if (this._openingId) {
      const o = this.opening;
      const host = o ? openingHost(o, floor.rooms, floor.walls ?? []) : null;
      if (!o || !host) return false;
      const a = host.room.points[host.edge];
      const b = host.room.points[(host.edge + 1) % host.room.points.length];
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
      // along the wall: the arrow's share in the wall direction
      const along = (dx * (b[0] - a[0]) + dz * (b[1] - a[1])) / len;
      if (Math.abs(along) < 1e-9) return true;
      this.updateOpening({ offset: this.clampOffset(host.room, host.edge, o.width, o.offset + along) });
    } else if (this._wallId) {
      const id = this._wallId;
      this.change((_, f) => {
        const w = (f.walls ?? []).find((x) => x.id === id);
        if (w) [w.a, w.b] = [mv(w.a), mv(w.b)];
      });
    } else if (this._outdoorId) {
      const id = this._outdoorId;
      this.change((_, f) => {
        const area = f.outdoor.find((x) => x.id === id);
        if (area) area.points = area.points.map(mv);
      });
    } else if (this._roomId) {
      const id = this._roomId;
      const vertex = this._vertex;
      const room = floor.rooms.find((r) => r.id === id);
      if (!room) return false;
      // a selected corner moves alone; otherwise the room moves with the devices in it
      const inside = new Set(floor.placements.filter((pl) => pointInPolygon([pl.x, pl.z], room.points)).map((pl) => pl.entity_id));
      this.change((_, f) => {
        const r = f.rooms.find((x) => x.id === id)!;
        if (vertex !== null && vertex < r.points.length) {
          r.points[vertex] = mv(r.points[vertex]);
          return;
        }
        r.points = r.points.map(mv);
        for (const pl of f.placements) if (inside.has(pl.entity_id)) [pl.x, pl.z] = mv([pl.x, pl.z]);
      });
    } else return false;
    return true;
  }

  /** Floors of Home Assistant's floor registry that no floor of the plan stands for yet, lowest first. */
  get freeHaFloors(): HassFloor[] {
    const used = new Set(this._doc.floors.map((f) => f.ha_floor));
    return Object.values(this.hass?.floors ?? {})
      .filter((f) => !used.has(f.floor_id))
      .sort((a, b) => (a.level ?? 99) - (b.level ?? 99) || a.name.localeCompare(b.name));
  }

  /** Areas of a floor's Home Assistant floor that have no room in the plan yet (none for a sample home, #61). */
  unplacedAreas(floor: Floor): HassArea[] {
    return unplacedAreas(this._doc, floor, this.hass?.areas);
  }

  addFloor(ha: HassFloor | null = null): void {
    const floors = this._doc.floors;
    const id = uid("floor");
    const name = ha?.name ?? (floors.length === 0 ? this.t("default_floor") : this.t("new_floor", { n: floors.length }));
    const floor = { ...newFloor(id, name, floorElevation(floors, ha?.level)), ha_floor: ha?.floor_id ?? null };
    const next = structuredClone(this._doc);
    // floors are kept from bottom to top
    const at = next.floors.findIndex((f) => f.elevation > floor.elevation);
    next.floors.splice(at < 0 ? next.floors.length : at, 0, floor);
    this.setDoc(next);
    this._floorId = id;
    this._roomId = null;
    this._floorMenu = false;
    this.fit();
  }

  /** One room tile per unplaced area of the floor's Home Assistant floor, to drag into place. */
  addAreaRooms(floor: Floor): void {
    const areas = this.unplacedAreas(floor);
    if (!areas.length) return;
    const rooms = roomTiles(floor, areas, () => uid("room"));
    this.change((_, f) => f.rooms.push(...rooms));
    this.fit();
  }

  moveFloor(dir: -1 | 1): void {
    const i = this._doc.floors.findIndex((f) => f.id === this._floorId);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= this._doc.floors.length) return;
    const next = structuredClone(this._doc);
    [next.floors[i], next.floors[j]] = [next.floors[j], next.floors[i]];
    this.setDoc(next);
  }

  async deleteFloor(): Promise<void> {
    const floor = this.floor;
    if (!floor || !(await this.ask(this.t("delete_floor_confirm", { name: floor.name })))) return;
    const next = structuredClone(this._doc);
    next.floors = next.floors.filter((f) => f.id !== floor.id);
    this.setDoc(next);
    this._floorId = next.floors[0]?.id ?? null;
    this._roomId = null;
  }

  async deleteRoom(): Promise<void> {
    const id = this._roomId;
    if (!id || !this.isEditor || !(await this.confirmFixedDelete("room", id))) return;
    this.change((_, floor) => {
      const room = floor.rooms.find((r) => r.id === id);
      floor.rooms = floor.rooms.filter((r) => r.id !== id);
      floor.openings = floor.openings.filter((o) => o.room_id !== id || o.wall);
      if (room) floor.placements = floor.placements.filter((pl) => !pointInPolygon([pl.x, pl.z], room.points));
    });
    this._roomId = null;
    this._vertex = null;
  }

  duplicateRoom(): void {
    const room = this.room;
    if (!room || !this.isEditor) return;
    const id = uid("room");
    this.change((_, floor) => floor.rooms.push({ ...structuredClone(room), id, points: room.points.map(([x, z]) => [round(x + 0.5), round(z + 0.5)]) }));
    this._roomId = id;
  }

  // ------------------------------------------------------------------ roof sections

  /** A section is fixed by its own lock or by the plan lock. */
  roofFixed(sec: RoofSection | undefined): boolean {
    return !!sec && (!!sec.locked || !!this._doc.settings.lock_plan);
  }

  /** Floor buttons in the roof tool: the plan below shows that floor's rooms to draw along. */
  renderRoofFloors() {
    const floors = [...this._doc.floors].sort((a, b) => b.elevation - a.elevation);
    if (floors.length < 2) return nothing;
    // these only pick the floor the plan shows to draw along: the roof itself is the whole building's (#68)
    return html`<div class="fp3d-roof-floors" title=${this.t("roof_floor_pick_hint")}>
      <span class="fp3d-sub">${this.t("roof_floor_pick")}</span>
      <div class="fp3d-seg fp3d-dev-source">
        ${floors.map((f) => html`<button aria-pressed=${f.id === this._floorId} @click=${() => (this._floorId = f.id)}>${f.name}</button>`)}
      </div>
    </div>`;
  }

  get roofSection(): RoofSection | undefined {
    return this._roofId ? this._doc.settings.roof.sections?.find((x) => x.id === this._roofId) : undefined;
  }

  /** Switch to a roof of sections; without sections yet, propose them from the rooms. */
  async useRoofSections(regenerate = false): Promise<void> {
    if (!this.isEditor) return;
    const has = (this._doc.settings.roof.sections ?? []).length > 0;
    if (regenerate && has && !(await this.ask(this.t("roof_regen_confirm"), this.t("ask_ok")))) return;
    this.change((doc) => {
      doc.settings.roof.type = "custom";
      if (regenerate || !has) doc.settings.roof.sections = roofSectionsFromRooms(doc, () => uid("roof"));
    });
    this._roofId = null;
  }

  addRoofSection(lo: Vec2, hi: Vec2): void {
    if (!this.isEditor) return;
    // eaves on the walls of the rooms below (a garage), whatever floor the plan shows; over no room
    // (a terrace, a carport) a canopy: a flat pent roof on posts, 2.4 m above the ground floor
    const walls = wallTopUnder(this._doc, lo[0], lo[1], hi[0], hi[1]);
    const ground = Math.min(...this._doc.floors.map((f) => f.elevation));
    const canopy = walls === null;
    const top = round(walls ?? ground + 2.4);
    const pitch = canopy ? 6 : this._doc.settings.roof.pitch || 35;
    const sec: RoofSection = {
      id: uid("roof"),
      x0: round(lo[0]),
      z0: round(lo[1]),
      x1: round(hi[0]),
      z1: round(hi[1]),
      shape: canopy ? "pent" : "gable",
      axis: hi[0] - lo[0] >= hi[1] - lo[1] ? "x" : "z",
      eave_a: top,
      eave_b: top,
      pitch_a: pitch,
      pitch_b: pitch,
      base: top,
      overhang: canopy ? 0.15 : null,
      ...(canopy ? { open: true } : {}),
    };
    this.change((doc) => {
      doc.settings.roof.type = "custom";
      doc.settings.roof.sections = [...(doc.settings.roof.sections ?? []), sec];
    });
    this._roofId = sec.id;
  }

  /** A flat section takes the outline of the floor shown (its rooms at the outer wall faces) as its shape. */
  takeRoofOutline(): void {
    const floor = this.floor;
    const id = this._roofId;
    if (!floor || !id || !this.isEditor) return;
    const outline = floorOutline(floor.rooms, floor.walls ?? [], this._doc.settings.wall_exterior, this._doc.settings.wall_interior);
    if (!outline) return;
    const points = outline.map(([x, z]) => [round(x), round(z)] as Vec2);
    this.updateRoofSection({ shape: "flat", points, ...polygonBox(points) });
  }

  /** A dormer on a side of the selected section, in its middle; then the dormer is selected. */
  addDormer(side: "a" | "b"): void {
    const parent = this.roofSection;
    if (!parent || !this.isEditor) return;
    const d = proposeDormer(parent, side, uid("roof"));
    this.change((doc) => {
      doc.settings.roof.sections = [...(doc.settings.roof.sections ?? []), d];
    });
    this._roofId = d.id;
  }

  updateRoofSection(patch: Partial<RoofSection>): void {
    const id = this._roofId;
    if (!id || !this.isEditor) return;
    if (patch.locked === false) this._fixedHint = false;
    this.change((doc) => {
      const sec = doc.settings.roof.sections?.find((x) => x.id === id);
      if (sec) Object.assign(sec, patch);
    });
  }

  /** Turn the selected section to `angle` degrees (clockwise in the plan); its dormers and cross gables come along (#634, #724). */
  turnRoofSection(angle: number): void {
    const id = this._roofId;
    if (!id || !this.isEditor) return;
    this.change((doc) => {
      const sections = doc.settings.roof.sections ?? [];
      const sec = sections.find((x) => x.id === id);
      if (!sec || (sec.points && sec.points.length >= 3)) return;
      const delta = angle - (sec.rotation ?? 0);
      if (!delta) return;
      const p: Vec2 = sec.pivot ?? [round((sec.x0 + sec.x1) / 2), round((sec.z0 + sec.z1) / 2)];
      const along = new Set(sections.filter((d) => d !== sec && dormerParent(sections, d) === sec).map((d) => d.id));
      doc.settings.roof.sections = sections.map((x) => {
        if (x !== sec && !along.has(x.id)) return x;
        const t = turnSectionAbout(x, delta, p);
        return { ...t, x0: round(t.x0), x1: round(t.x1), z0: round(t.z0), z1: round(t.z1), pivot: t.pivot && ([round(t.pivot[0]), round(t.pivot[1])] as Vec2), rotation: round(t.rotation ?? 0) };
      });
    });
  }

  deleteRoofSection(): void {
    const id = this._roofId;
    if (!id || !this.isEditor) return;
    this.change((doc) => (doc.settings.roof.sections = (doc.settings.roof.sections ?? []).filter((x) => x.id !== id)));
    this._roofId = null;
  }

  duplicateRoofSection(): void {
    const sec = this.roofSection;
    if (!sec || !this.isEditor) return;
    const copy = { ...structuredClone(sec), id: uid("roof"), x0: round(sec.x0 + 1), x1: round(sec.x1 + 1), z0: round(sec.z0 + 1), z1: round(sec.z1 + 1) };
    if (sec.pivot) copy.pivot = [round(sec.pivot[0] + 1), round(sec.pivot[1] + 1)];
    this.change((doc) => (doc.settings.roof.sections = [...(doc.settings.roof.sections ?? []), copy]));
    this._roofId = copy.id;
  }

  /** The sections over the plan: outline, ridge (and hips), a label; the selected one with corner handles. */
  renderRoofSections() {
    const roof = this._doc.settings.roof;
    const sections = roof.type === "custom" ? (roof.sections ?? []) : [];
    return svg`<g class="fp3d-roof-layer">${sections.map((sec, i) => {
      const sel = sec.id === this._roofId;
      const fr = sectionFrame(sec);
      const shape = sec.shape === "flat" && sec.points && sec.points.length >= 3 ? sec.points : null;
      // a dormer or cross gable shows as deep as it is drawn (its ridge meets the slope there)
      const parent = dormerParent(sections, sec);
      const dfr = parent ? sectionFrame(effectiveDormer(parent, sec)) : fr;
      const pts = (shape ?? [dfr.at(dfr.u0, 0), dfr.at(dfr.u1, 0), dfr.at(dfr.u1, dfr.w), dfr.at(dfr.u0, dfr.w)]).map((p) => this.toScreen(p));
      const line = (a: Vec2, b: Vec2) => {
        const [ax, ay] = this.toScreen(a);
        const [bx, by] = this.toScreen(b);
        return svg`<line x1=${ax} y1=${ay} x2=${bx} y2=${by} />`;
      };
      const geom = sec.shape === "flat" || sec.shape === "parapet" ? null : sectionGeometry(sec, { u0: 0, u1: 0, a: 0, b: 0 });
      const ridge = geom ? svg`${geom.ridges.map(([p, q]) => line(fr.at(p[0], p[1]), fr.at(q[0], q[1])))}` : nothing;
      const [cx, cy] = this.toScreen(fr.at((fr.u0 + fr.u1) / 2, fr.w / 2));
      const label = `${this.roofFixed(sec) ? "🔒 " : ""}${i + 1} · ${sec.dormer ? this.t("roof_dormer") : sec.open ? this.t("roof_open_short") : this.t(`roof_shape_${sec.shape}` as I18nKey)} · ${this.m(ridgeHeight(sec), 1)}`;
      return svg`<g data-roof=${sec.id} class=${`fp3d-roof-sec${sel ? " fp3d-roof-sel" : ""}`}>
          <polygon points=${pts.map((p) => p.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${ridge}</g>
          <text x=${cx} y=${cy - 14}>${label}</text>
        </g>
        ${sel && this.isEditor && !this.roofFixed(sec) && shape
          ? shape.map((p, k) => {
              const [x, y] = this.toScreen(p);
              return svg`<g class="fp3d-vertex" data-roof-vertex=${`${sec.id}:${k}`}><circle cx=${x} cy=${y} r="16" class="fp3d-hit" /><circle cx=${x} cy=${y} r="6" /></g>`;
            })
          : nothing}
        ${sel && this.isEditor && !this.roofFixed(sec) && !shape && !sectionTurn(sec)
          ? ([[0, 0], [1, 0], [1, 1], [0, 1]] as const).map(([kx, kz]) => {
              const [x, y] = this.toScreen([kx ? Math.max(sec.x0, sec.x1) : Math.min(sec.x0, sec.x1), kz ? Math.max(sec.z0, sec.z1) : Math.min(sec.z0, sec.z1)]);
              return svg`<g class="fp3d-vertex" data-roof-corner=${`${sec.id}:${kx}:${kz}`}><circle cx=${x} cy=${y} r="16" class="fp3d-hit" /><circle cx=${x} cy=${y} r="6" /></g>`;
            })
          : nothing}`;
    })}</g>`;
  }

  /** Where a plan point lies on a face; on a house wall only along it (s = NaN: the height stays). */
  faceHit(face: RoofFace, p: Vec2): { u: number; s: number } | null {
    if (!face.wall) return pointOnFace(face, p);
    return { u: (p[0] - face.o[0]) * face.eu[0] + (p[1] - face.o[2]) * face.eu[2], s: Number.NaN };
  }

  /** Draw roof solar fields faint over the plan (or at full strength); remembered on this device (#89). */
  setSolarDim(on: boolean): void {
    this._solarDim = on;
    try {
      localStorage.setItem("home3d.solarDim", on ? "on" : "off");
    } catch {
      // no storage: this session only
    }
  }

  /** Solar fields over the plan: every module as a small rectangle; the selected field highlighted. */
  renderSolarFields() {
    const fields = this._doc.settings.roof.solar ?? [];
    if (!fields.length) return nothing;
    const faces = roofFaces(this._doc);
    return svg`<g class="fp3d-solar-layer">${fields.map((f) => {
      const face = fieldFace(this._doc, f, faces);
      if (!face || (face.wall && face.wall.floorId !== this._floorId)) return nothing;
      const sel = f.id === this._solarId;
      // a field on the roof lies over every floor's plan: faint unless chosen, so the rooms under it stay readable
      const dim = this._solarDim && !sel && !face.wall && !face.unbounded;
      let handle: unknown = nothing;
      if (sel && face.unbounded && this.isEditor && !f.locked) {
        const [cx, cz] = fieldCenter(face, f);
        const r = ((f.rotation ?? 0) * Math.PI) / 180;
        const reach = 0.9 + Math.max(...fieldModules(face, f, true).flatMap((m) => m.corners.map((p) => Math.hypot(p[0] - cx, p[2] - cz)))) * 0.5;
        const [fx, fy] = this.toScreen([cx, cz]);
        const [hx, hy] = this.toScreen([cx + Math.sin(r) * reach, cz - Math.cos(r) * reach]);
        handle = svg`<g class="fp3d-rotate" data-solar-turn=${f.id}>
          <line x1=${fx} y1=${fy} x2=${hx} y2=${hy} />
          <circle cx=${hx} cy=${hy} r="16" class="fp3d-hit" />
          <circle cx=${hx} cy=${hy} r="8" />
          <path d="M${hx - 4} ${hy - 1}a4 4 0 1 1 2 3.5" />
        </g>`;
      }
      // the selected field also shows its switched-off modules (dashed), so they can be switched on again
      return svg`<g data-solar=${f.id} class=${`fp3d-solar${sel ? " fp3d-solar-sel" : ""}${dim ? " fp3d-solar-dim" : ""}${sel && this._solarPick ? " fp3d-solar-pick" : ""}`}>${fieldModules(face, f, sel).map(
        (m) => {
          // on a wall the modules stand upright: in the plan a strip just outside the wall
          // as deep as the modules stand off the wall (tilted ones further), at least 30 cm to grab
          const depth = face.wall ? Math.max(0.3, ...m.corners.map((p) => (p[0] - face.o[0]) * face.n[0] + (p[2] - face.o[2]) * face.n[2])) : 0;
          const pts: Vec2[] = face.wall
            ? [m.corners[0], m.corners[1]].flatMap((p, i) => {
                const q: Vec2 = [p[0], p[2]];
                const o: Vec2 = [p[0] + face.n[0] * depth, p[2] + face.n[2] * depth];
                return i === 0 ? [q, o] : [o, q];
              })
            : m.corners.map((p) => [p[0], p[2]] as Vec2);
          return svg`<polygon data-cell=${m.cell} class=${m.skipped ? "fp3d-solar-off" : ""} points=${pts.map((p) => this.toScreen(p).join(",")).join(" ")} />`;
        },
      )}</g>${handle}`;
    })}</g>`;
  }

  /** Roof windows over the plan (roof tool), the selected one highlighted. */
  renderRoofWindows() {
    const windows = this._doc.settings.roof.windows ?? [];
    if (!windows.length) return nothing;
    const faces = new Map(roofFaces(this._doc).map((f) => [f.key, f]));
    return svg`<g class="fp3d-roofwin-layer">${windows.map((w) => {
      const face = faces.get(w.face);
      const c = face ? windowCorners(face, w) : null;
      if (!c) return nothing;
      return svg`<g data-roofwin=${w.id} class=${`fp3d-roofwin${w.id === this._roofWinId ? " fp3d-roofwin-sel" : ""}`}><polygon points=${c.map((p) => this.toScreen([p[0], p[2]]).join(",")).join(" ")} /></g>`;
    })}</g>`;
  }

  addRoofWindow(): void {
    if (!this.isEditor) return;
    const faces = roofFaces(this._doc).filter((f) => !f.flat);
    const face = bestFace(faces, this._doc.settings.north ?? 0) ?? roofFaces(this._doc)[0];
    if (!face) return;
    const w = proposeWindow(face, uid("rwin"));
    this.change((doc) => (doc.settings.roof.windows = [...(doc.settings.roof.windows ?? []), w]));
    this._roofWinId = w.id;
    this._roofId = null;
  }

  updateRoofWindow(patch: Partial<RoofWindow>): void {
    const id = this._roofWinId;
    if (!id || !this.isEditor) return;
    this.change((doc) => {
      const w = doc.settings.roof.windows?.find((x) => x.id === id);
      if (!w) return;
      Object.assign(w, patch);
      const face = roofFaces(doc).find((x) => x.key === w.face);
      if (face) Object.assign(w, clampField(face, windowAsField(w)));
    });
  }

  deleteRoofWindow(): void {
    const id = this._roofWinId;
    if (!id || !this.isEditor) return;
    this.change((doc) => (doc.settings.roof.windows = (doc.settings.roof.windows ?? []).filter((x) => x.id !== id)));
    this._roofWinId = null;
  }

  renderRoofWindowList() {
    const windows = this._doc.settings.roof.windows ?? [];
    const faces = new Map(roofFaces(this._doc).map((f) => [f.key, f]));
    return html`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(faces.size ? "roof_windows_hint" : "solar_no_roof")}</p>
      ${windows.length
        ? html`<div class="fp3d-room-list">
            ${windows.map((w, i) => {
              const face = faces.get(w.face);
              return html`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${() => {
                  this._roofWinId = w.id;
                  this._roofId = null;
                }}>
                  <span>${this.t("roof_window")} ${i + 1} · ${face ? this.faceLabel(face) : this.t("solar_face_gone")}</span>
                </button>
              </div>`;
            })}
          </div>`
        : nothing}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isEditor || !faces.size} @click=${() => this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`;
  }

  renderRoofWindowForm(w: RoofWindow) {
    const admin = this.isEditor;
    const faces = roofFaces(this._doc);
    const set = (patch: Partial<RoofWindow>) => this.updateRoofWindow(patch);
    const index = (this._doc.settings.roof.windows ?? []).findIndex((x) => x.id === w.id) + 1;
    const covers = this.entityOptions((id) => id.startsWith("cover."));
    const contacts = this.entityOptions((id) => binaryish(id) || numberish(id));
    return html`<button class="fp3d-btn fp3d-back" @click=${() => (this._roofWinId = null)}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${index}</h3>
          ${admin
            ? html`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!w.locked} title=${this.t("fix_hint")} @click=${() => set({ locked: !w.locked })}>
                ${w.locked ? `🔒 ${this.t("unfix")}` : `🔓 ${this.t("fix")}`}
              </button>`
            : nothing}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!admin} @change=${(e: Event) => {
              const next = faces.find((x) => x.key === (e.target as HTMLSelectElement).value);
              if (next) set({ ...proposeWindow(next, w.id), w: w.w, h: w.h, cover: w.cover, contact: w.contact, tilt: w.tilt, window: w.window, name: w.name, float: w.float });
            }}>
              ${faces.map((x) => html`<option value=${x.key} ?selected=${x.key === w.face}>${this.faceLabel(x)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"), w.w ?? 0.78, (v) => set({ w: Math.max(0.3, Math.min(4, round(v))) }), 0.01, 0.3)}
          ${this.len(this.t("height_m"), w.h ?? 1.18, (v) => set({ h: Math.max(0.3, Math.min(4, round(v))) }), 0.01, 0.3)}
          ${this.len(this.t("solar_u"), w.u, (v) => set({ u: round(v) }), 0.05)}
          ${this.len(this.t("solar_v"), w.v, (v) => set({ v: round(v) }), 0.05)}
          ${this.entitySelect(this.t("cover_entity"), w.cover ?? null, undefined, covers, (v) => set({ cover: v === "none" ? null : v }))}
          ${this.entitySelect(this.t("contact_entity"), w.contact ?? null, undefined, contacts, (v) => set({ contact: v === "none" ? null : v }))}
          ${this.entitySelect(this.t("roof_window_tilt"), w.tilt ?? null, undefined, contacts, (v) => set({ tilt: v === "none" ? null : v }))}
          ${this.entitySelect(this.t("roof_window_motor"), w.window ?? null, undefined, covers, (v) => set({ window: v === "none" ? null : v }))}
          <label class="fp3d-field fp3d-wide"
            >${this.t("roof_window_name")}
            <input .value=${w.name ?? ""} ?disabled=${!admin} maxlength="64" @change=${(e: Event) => set({ name: (e.target as HTMLInputElement).value.trim() || null })}
          /></label>
        </div>
        <label class="fp3d-check"
          ><input type="checkbox" ?disabled=${!admin} .checked=${!!w.float} @change=${(e: Event) => set({ float: (e.target as HTMLInputElement).checked || undefined })} />
          ${this.t("roof_window_float")}</label
        >
        <p class="fp3d-sub">${this.t("roof_window_float_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${admin ? html`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${() => this.deleteRoofWindow()}>${this.t("delete")}</button></div>` : nothing}
      </section>`;
  }

  /** Energy tool: a round marker with a symbol and its name on every energy device of the floor, above all else. */
  /** The cables' ways (with a still picture of the flows: all sensors at zero), once per document. */
  cableSegments(): FlowSegment[] {
    if (this.cableCache?.doc === this._doc) return this.cableCache.segs;
    const b = this._doc;
    const fieldPower = new Map((b.settings.roof.solar ?? []).map((f) => [f.id, 0]));
    const summary = { grid: 0, solar: 0, battery: 0, soc: null, tariff: null, consumption: 0 };
    let segs: FlowSegment[] = [];
    try {
      segs = flowSegments({ building: b, consumers: [], summary, fieldPower }).filter((x) => x.key);
    } catch {
      segs = [];
    }
    this.cableCache = { doc: b, segs };
    return segs;
  }

  /** The cables by key, in order: solar fields, inverters, batteries, the grid. */
  cableKeys(): string[] {
    const keys = [...new Set(this.cableSegments().map((x) => x.key!))];
    const rank = (k: string) => (k.startsWith("solar:") ? 0 : k.startsWith("inv:") ? 1 : k.startsWith("bat:") ? 2 : 3);
    return keys.sort((p, q) => rank(p) - rank(q) || p.localeCompare(q));
  }

  /** What a cable key means to the user: "Solarfeld 1 → Wechselrichter Nord". */
  cableLabel(key: string): string {
    const furn = (id: string) => {
      const m = this._doc.floors.flatMap((f) => f.furniture).find((x) => x.id === id);
      return m ? m.name || this.typeName(m.type) : "?";
    };
    const meter = this._doc.floors.flatMap((f) => f.furniture).find((x) => energyRole(x.type) === "meter");
    const meterName = meter ? meter.name || this.t("furn_meter") : this.t("energy_meter");
    if (key === "grid") return `${meterName} → ${this.t("furn_grid_point")}`;
    const [kind, id] = [key.slice(0, key.indexOf(":")), key.slice(key.indexOf(":") + 1)];
    if (kind === "solar") {
      const fields = this._doc.settings.roof.solar ?? [];
      const i = fields.findIndex((f) => f.id === id);
      // a solar panel placed as an item (#22)
      if (i < 0 && this._doc.floors.some((fl) => fl.furniture.some((m) => m.id === id))) return `${furn(id)} → ${this.t("furn_inverter")}`;
      const f = fields[i];
      return `${f?.name || `${this.t("solar_field")} ${i + 1}`} → ${this.t("furn_inverter")}`;
    }
    if (kind === "inv") return `${furn(id)} → ${meterName}`;
    return `${this.t("furn_inverter")} ↔ ${furn(id)}`;
  }

  /** Lay a cable by hand: its automatic way (on the plan) becomes points to drag. */
  layCable(key: string): void {
    if (!this.isEditor || !this._floorId) return;
    const pts: Vec2[] = [];
    for (const seg of this.cableSegments().filter((x) => x.key === key)) {
      for (const q of [seg.a, seg.b]) {
        const p: Vec2 = [round(q[0]), round(q[2])];
        const last = pts[pts.length - 1];
        if (!last || Math.hypot(last[0] - p[0], last[1] - p[1]) > 0.05) pts.push(p);
      }
    }
    // the ends are the devices themselves: only the way between them is laid
    const inner = pts.length > 2 ? pts.slice(1, -1) : pts;
    const floorId = this._floorId;
    this.change((d) => {
      d.settings.roof.cables = [...(d.settings.roof.cables ?? []).filter((c) => c.id !== key), { id: key, floor_id: floorId, points: inner.length ? inner : [pts[0] ?? [0, 0]], height: 0.03 }];
    });
    this._cableId = key;
  }

  /** The cables in the plan: faint for the automatic ways, solid for laid ones, with points on the picked cable. */
  renderCables() {
    const all = this.cableSegments();
    if (!all.length) return nothing;
    const segs = all.filter((x) => x.floorId === this._floorId);
    const cables = this._doc.settings.roof.cables ?? [];
    const sel = this._cableId;
    const keys = [...new Set(all.map((x) => x.key!))];
    return svg`<g class="fp3d-cable-layer">${keys.map((key) => {
      const laid = cables.find((c) => c.id === key);
      const cls = `fp3d-cable fp3d-cable-${key.split(":")[0]}${laid ? " fp3d-cable-laid" : ""}${key === sel ? " fp3d-cable-sel" : ""}`;
      const mine = all.filter((x) => x.key === key);
      const lines = segs
        .filter((x) => x.key === key)
        .map((x) => {
          const a = this.toScreen([x.a[0], x.a[2]]);
          const b = this.toScreen([x.b[0], x.b[2]]);
          return svg`<line x1=${a[0]} y1=${a[1]} x2=${b[0]} y2=${b[1]} />`;
        });
      if (!(laid && key === sel && laid.floor_id === this._floorId && !laid.locked)) return lines.length ? svg`<g class=${cls} data-cable=${key}><g class="fp3d-cable-hit">${lines}</g>${lines}</g>` : nothing;
      // the picked laid cable: its points to drag; every piece from device to device takes new points
      const first = mine[0];
      const last = mine[mine.length - 1];
      const chain = [this.toScreen([first.a[0], first.a[2]]), ...laid.points.map((p) => this.toScreen(p)), this.toScreen([last.b[0], last.b[2]])];
      const pieces = chain.slice(0, -1).map((p, i) => svg`<line class="fp3d-cable-piece" data-cable-line=${key} data-cable-seg=${i} x1=${p[0]} y1=${p[1]} x2=${chain[i + 1][0]} y2=${chain[i + 1][1]} />`);
      const handles = laid.points.map((p, i) => {
        const q = this.toScreen(p);
        return svg`<g class="fp3d-vertex" data-cable-pt=${`${key}:${i}`}><circle cx=${q[0]} cy=${q[1]} r="16" class="fp3d-hit" /><circle cx=${q[0]} cy=${q[1]} r="6" /></g>`;
      });
      return svg`<g class=${cls} data-cable=${key}>${lines}${pieces}${handles}</g>`;
    })}</g>`;
  }

  /** Energie Pro: the cables, each to lay by hand with points and a height. */
  renderCableSettings() {
    const keys = this.cableKeys();
    if (!keys.length) return nothing;
    const admin = this.isEditor;
    const cables = this._doc.settings.roof.cables ?? [];
    const sel = this._cableId ? cables.find((c) => c.id === this._cableId) : undefined;
    return html`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${keys.map(
          (key) => html`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${key === this._cableId ? "fp3d-sel" : ""}"
              @click=${() => {
                this._cableId = key === this._cableId ? null : key;
                // a laid cable lives on its floor: the plan goes there so its points can be dragged
                const laid = cables.find((c) => c.id === key);
                if (this._cableId && laid && this._doc.floors.some((f) => f.id === laid.floor_id)) this._floorId = laid.floor_id;
              }}
            >
              <span>${this.cableLabel(key)}${cables.some((c) => c.id === key) ? html` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>` : nothing}</span>
            </button>
          </div>`,
        )}
      </div>
      ${this._cableId
        ? html`<div class="fp3d-actions">
              ${sel
                ? html`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!sel.locked} title=${this.t("fix_hint")} ?disabled=${!admin} @click=${() => this.change((d) => {
                      const c = d.settings.roof.cables?.find((x) => x.id === sel.id);
                      if (c) c.locked = !c.locked;
                    })}>
                      ${sel.locked ? `🔒 ${this.t("unfix")}` : `🔓 ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.change((d) => (d.settings.roof.cables = (d.settings.roof.cables ?? []).filter((c) => c.id !== this._cableId)))}>${this.t("cable_auto")}</button>`
                : html`<button class="fp3d-btn fp3d-primary" ?disabled=${!admin || !this._floorId} @click=${() => this.layCable(this._cableId!)}>${this.t("cable_lay")}</button>`}
            </div>
            ${sel
              ? html`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"), sel.height, (v) => this.change((d) => {
                      const c = d.settings.roof.cables?.find((x) => x.id === sel.id);
                      if (c) c.height = Math.min(30, Math.max(0, round(v)));
                    }), 0.05, 0)}
                  </div>
                  <p class="fp3d-sub">${sel.floor_id === this._floorId ? this.t("cable_points_hint") : this.t("cable_other_floor", { floor: this._doc.floors.find((f) => f.id === sel.floor_id)?.name ?? "" })}</p>`
              : nothing}`
        : nothing}
    </section>`;
  }

  renderEnergyMarkers() {
    const floor = this.floor;
    if (!floor) return nothing;
    const icons: Record<string, string> = { inverter: "⚡", home_battery: "🔋", wallbox: "🔌", meter: "📟", grid_point: "🏁", solar: "☀" };
    const h = this._doc.settings.roof.hologram;
    const holoPt = h?.place === "free" && Number.isFinite(h.x) && Number.isFinite(h.z) ? this.toScreen([h.x!, h.z!]) : null;
    return svg`<g class="fp3d-energy-markers">${
      holoPt
        ? svg`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${holoPt[0]} cy=${holoPt[1]} r="17" />
          <text x=${holoPt[0]} y=${holoPt[1] + 6} class="fp3d-energy-icon">◈</text>
          <text x=${holoPt[0]} y=${holoPt[1] + 32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`
        : nothing
    }${floor.furniture
      .filter((m) => isEnergyDevice(m.type))
      .map((m) => {
        const [x, y] = this.toScreen([m.x, m.z]);
        const sel = m.id === this._furnitureId;
        return svg`<g data-energy-device=${m.id} class=${`fp3d-energy-marker${sel ? " fp3d-energy-marker-sel" : ""}`}>
          <circle cx=${x} cy=${y} r="17" />
          <text x=${x} y=${y + 6} class="fp3d-energy-icon">${icons[energyRole(m.type) ?? m.type] ?? "⚡"}</text>
          ${sel ? svg`<text x=${x} y=${y + 32} class="fp3d-energy-name">${this.typeName(m.type)}</text>` : nothing}
          <title>${this.typeName(m.type)}</title>
        </g>`;
      })}</g>`;
  }

  /** "Main roof · south · 35°" or "Section 2 · flat roof". */
  faceLabel(face: RoofFace): string {
    if (face.key === GROUND) return this.t("solar_ground");
    if (face.wall) {
      // named by its room and the room's corner numbers in the plan (short walls look alike otherwise, #295)
      const { floorId, room: roomId, edge, free } = face.wall;
      const floor = this._doc.floors.find((x) => x.id === floorId);
      const room = floor?.rooms.find((r) => r.id === roomId);
      const where = free ? this.t("solar_wall_free") : room ? `${room.name}${edge != null ? ` ${edge + 1}–${((edge + 1) % room.points.length) + 1}` : ""}` : "";
      return `${this.t("solar_wall")} ${floor?.name ?? ""} · ${where ? `${where} · ` : ""}${this.t(`compass_${faceCompass(face, this._doc.settings.north ?? 0)}` as I18nKey)} · ${this.m(face.lu, 2)}`;
    }
    const sections = this._doc.settings.roof.sections ?? [];
    const part = face.section ? this.t("solar_section", { n: sections.findIndex((x) => x.id === face.section) + 1 }) : this.t("solar_main");
    if (face.flat) return `${part} · ${this.t("solar_flat")}`;
    // the triangular ends of a hip or pyramid section say so, they are easy to overlook in the list (#302)
    const end = face.side === "c" || face.side === "d" ? ` · ${this.t("roof_shape_hip")}` : "";
    return `${part} · ${this.t(`compass_${faceCompass(face, this._doc.settings.north ?? 0)}` as I18nKey)} · ${Math.round(face.pitch)}°${end}`;
  }

  addSolarField(): void {
    if (!this.isEditor) return;
    const faces = roofFaces(this._doc);
    const used = new Set((this._doc.settings.roof.solar ?? []).map((f) => f.face));
    // the sunniest face that has no field yet, else the sunniest one
    const north = this._doc.settings.north ?? 0;
    const face = bestFace(faces.filter((f) => !used.has(f.key)), north) ?? bestFace(faces, north);
    if (!face) return;
    const field = proposeField(face, uid("pv"));
    this.change((doc) => (doc.settings.roof.solar = [...(doc.settings.roof.solar ?? []), field]));
    this._solarId = field.id;
    this._roofId = null;
  }

  /** Select a solar field; one on a house wall brings up its floor in the plan. */
  selectSolar(id: string): void {
    this._solarId = id;
    this._roofId = null;
    const f = this._doc.settings.roof.solar?.find((x) => x.id === id);
    if (f?.face.startsWith("wall:")) this._floorId = f.face.split(":")[1];
  }

  addWallField(): void {
    if (!this.isEditor) return;
    const floorId = this._floorId ?? this._doc.floors[0]?.id;
    const field = floorId ? proposeWallField(this._doc, uid("pv"), floorId) : null;
    if (!field) return;
    this.change((doc) => (doc.settings.roof.solar = [...(doc.settings.roof.solar ?? []), field]));
    this._solarId = field.id;
  }

  addGroundField(): void {
    if (!this.isEditor) return;
    const field = proposeGroundField(this._doc, uid("pv"));
    this.change((doc) => (doc.settings.roof.solar = [...(doc.settings.roof.solar ?? []), field]));
    this._solarId = field.id;
  }

  updateSolar(patch: Partial<SolarField>): void {
    const id = this._solarId;
    if (!id || !this.isEditor) return;
    if (patch.locked === false) this._fixedHint = false;
    this.change((doc) => {
      const f = doc.settings.roof.solar?.find((x) => x.id === id);
      if (!f) return;
      Object.assign(f, patch);
      // a larger field (more rows, landscape …) moves back so that it stays on its face where it can
      const face = fieldFace(doc, f);
      if (face) Object.assign(f, clampField(face, f));
    });
  }

  /** Put the selected field into a string ("new" makes one), or take it out (null). */
  setSolarString(value: string | null): void {
    const id = this._solarId;
    if (!id || !this.isEditor) return;
    this.change((doc) => {
      const roof = doc.settings.roof;
      const f = roof.solar?.find((x) => x.id === id);
      if (!f) return;
      if (value === "new") {
        const strings = roof.strings ?? [];
        const s: SolarString = { id: uid("str"), name: this.t("solar_string_n", { n: strings.length + 1 }), entity: f.entity ?? null, inverter: null };
        roof.strings = [...strings, s];
        f.string = s.id;
      } else f.string = value;
      // strings without fields go away
      const used = new Set((roof.solar ?? []).map((x) => x.string).filter(Boolean));
      roof.strings = (roof.strings ?? []).filter((x) => used.has(x.id));
    });
  }

  updateSolarString(patch: Partial<SolarString>): void {
    const field = this._doc.settings.roof.solar?.find((x) => x.id === this._solarId);
    const sid = field?.string;
    if (!sid || !this.isEditor) return;
    this.change((doc) => {
      const s = doc.settings.roof.strings?.find((x) => x.id === sid);
      if (s) Object.assign(s, patch);
    });
  }

  toggleSolarCell(cell: string): void {
    this.updateSolarField((f) => {
      const skip = new Set(f.skip ?? []);
      if (skip.has(cell)) skip.delete(cell);
      else skip.add(cell);
      f.skip = skip.size ? [...skip].sort() : null;
    });
  }

  updateSolarField(edit: (f: SolarField) => void): void {
    const id = this._solarId;
    if (!id || !this.isEditor) return;
    this.change((doc) => {
      const f = doc.settings.roof.solar?.find((x) => x.id === id);
      if (f) edit(f);
    });
  }

  deleteSolar(): void {
    const id = this._solarId;
    if (!id || !this.isEditor) return;
    this.change((doc) => {
      const roof = doc.settings.roof;
      roof.solar = (roof.solar ?? []).filter((x) => x.id !== id);
      const used = new Set(roof.solar.map((x) => x.string).filter(Boolean));
      roof.strings = (roof.strings ?? []).filter((x) => used.has(x.id));
    });
    this._solarId = null;
  }

  /** The overview of the solar fields, below the roof sections. */
  renderSolarList() {
    const fields = this._doc.settings.roof.solar ?? [];
    const roofList = roofFaces(this._doc);
    const faces = new Map(fields.map((f) => [f.id, fieldFace(this._doc, f, roofList)] as const));
    const admin = this.isEditor;
    return html`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(roofList.length ? "solar_hint" : "solar_no_roof")}</p>
      ${fields.length
        ? html`<label class="fp3d-check fp3d-solar-dim-toggle"
            ><input type="checkbox" .checked=${this._solarDim} @change=${(e: Event) => this.setSolarDim((e.target as HTMLInputElement).checked)} />
            ${this.t("solar_dim")}</label
          >`
        : nothing}
      ${fields.length
        ? html`<div class="fp3d-room-list">
            ${fields.map((f, i) => {
              const face = faces.get(f.id);
              const n = face ? fieldModules(face, f).length : 0;
              return html`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${() => this.selectSolar(f.id)}
                >
                  <span>${f.name || `${this.t("solar_field")} ${i + 1}`} · ${face ? this.faceLabel(face) : this.t("solar_face_gone")} · ${this.t("solar_summary", { n, kwp: formatNumber(this.hass, (n * (f.wp ?? 400)) / 1000, 1) })}</span>
                </button>
              </div>`;
            })}
          </div>`
        : nothing}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!admin || !roofList.length} @click=${() => this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!admin || !this._floorId} @click=${() => this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings ?? []).length
        ? html`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings ?? []).map((st) => {
              const own = fields.filter((f) => f.string === st.id);
              const counts = own.map((f) => (faces.get(f.id) ? fieldModules(faces.get(f.id)!, f).length : 0));
              const n = counts.reduce((a, b) => a + b, 0);
              const kwp = own.reduce((a, f, k) => a + (counts[k] * (f.wp ?? 400)) / 1000, 0);
              return html`<p class="fp3d-sub">🔗 <b>${st.name}</b> · ${this.t("solar_string_sum", { fields: own.length, n, kwp: formatNumber(this.hass, kwp, 1) })}</p>`;
            })}`
        : nothing}
    </section>`;
  }

  renderSolarForm(f: SolarField) {
    const admin = this.isEditor;
    const faces = roofFaces(this._doc);
    const walls = wallFaces(this._doc);
    const face = fieldFace(this._doc, f, faces);
    const ground = f.face === GROUND;
    const n = face ? fieldModules(face, f).length : 0;
    const counts = rowCounts(f);
    const total = counts.reduce((a, b) => a + b, 0) - (f.skip?.length ?? 0);
    const power = this.entityOptions((id) => this.isPowerSensor(id));
    const set = (patch: Partial<SolarField>) => this.updateSolar(patch);
    const index = (this._doc.settings.roof.solar ?? []).findIndex((x) => x.id === f.id) + 1;
    return html`<button class="fp3d-btn fp3d-back" @click=${() => (this._solarId = null)}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${f.name || `${this.t("solar_field")} ${index}`}</h3>
          ${admin
            ? html`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!f.locked} title=${this.t("fix_hint")} @click=${() => this.updateSolar({ locked: !f.locked })}>
                ${f.locked ? `🔒 ${this.t("unfix")}` : `🔓 ${this.t("fix")}`}
              </button>`
            : nothing}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!admin}
              .value=${f.name ?? ""}
              placeholder=${this.t("solar_name_hint")}
              @change=${(e: Event) => set({ name: (e.target as HTMLInputElement).value.trim() || null })}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!admin}
              @change=${(e: Event) => {
                const key = (e.target as HTMLSelectElement).value;
                const keep = { portrait: f.portrait, look: f.look, name: f.name, string: f.string, entity: f.entity, module_w: f.module_w, module_h: f.module_h, wp: f.wp };
                // on another face the field keeps its modules and is laid out anew there (#258)
                if (key === GROUND) set({ ...proposeGroundField(this._doc, f.id), ...keep, rows: f.rows, cols: f.cols });
                const next = faces.find((x) => x.key === key);
                if (next) set(moveField(next, { ...f, ...keep }));
                const wall = walls.find((x) => x.key === key);
                if (wall) set(moveField(wall, { ...f, ...keep, rows: 1 }));
              }}
            >
              ${face ? nothing : html`<option selected>${this.t("solar_face_gone")}</option>`}
              ${faces.map((x) => html`<option value=${x.key} ?selected=${x.key === f.face}>${this.faceLabel(x)}</option>`)}
              <option value=${GROUND} ?selected=${ground}>${this.t("solar_ground")}</option>
              ${walls.map((x) => html`<option value=${x.key} ?selected=${x.key === f.face}>${this.faceLabel(x)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"), counts.length, (v) => {
            const rows = Math.max(1, Math.min(40, Math.round(v)));
            // rows of their own length keep their counts; new rows take the last row's
            set(f.layout?.length ? { layout: Array.from({ length: rows }, (_, i) => f.layout![i] ?? f.layout![f.layout!.length - 1]), rows } : { rows });
          }, 1, 1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!admin}
              .value=${f.layout?.length ? f.layout.join(", ") : String(f.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${(e: Event) => {
                const parts = (e.target as HTMLInputElement).value.split(/[,;\s]+/).map((x) => parseInt(x, 10)).filter((x) => Number.isFinite(x) && x >= 0);
                if (!parts.length) return;
                // one number: every row the same; a list: each row its own (4, 4, 3)
                if (parts.length === 1) set({ cols: Math.max(1, Math.min(60, parts[0])), layout: null, skip: null });
                else set({ layout: parts.slice(0, 40).map((x) => Math.min(60, x)), rows: Math.min(40, parts.length), cols: Math.max(1, ...parts), skip: null });
              }}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${face && !face.unbounded ? html`${this.t("solar_face_size", { w: formatNumber(this.hass, face.lu, 1), h: formatNumber(this.hass, face.ls, 1) })} · ` : nothing}${this.t("solar_cols_hint")}
        </p>
        ${f.layout?.length && new Set(f.layout).size > 1
          ? html`<div class="fp3d-seg fp3d-dev-source">
              ${(["left", "center", "right"] as const).map((a) => html`<button aria-pressed=${(f.align ?? "left") === a} ?disabled=${!admin} @click=${() => set({ align: a })}>${this.t(`solar_align_${a}` as I18nKey)}</button>`)}
            </div>`
          : nothing}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${f.portrait !== false} ?disabled=${!admin} @click=${() => set({ portrait: true })}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${f.portrait === false} ?disabled=${!admin} @click=${() => set({ portrait: false })}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${f.look !== "blue"} ?disabled=${!admin} @click=${() => set({ look: "black" })}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${f.look === "blue"} ?disabled=${!admin} @click=${() => set({ look: "blue" })}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.len(this.t("solar_module_w"), f.module_w ?? 1.13, (v) => set({ module_w: Math.max(0.3, Math.min(3, round(v))) }), 0.01, 0.3)}
          ${this.len(this.t("solar_module_h"), f.module_h ?? 1.72, (v) => set({ module_h: Math.max(0.3, Math.min(3, round(v))) }), 0.01, 0.3)}
          ${this.num(this.t("solar_wp"), f.wp ?? 400, (v) => set({ wp: Math.max(50, Math.min(1500, Math.round(v))) }), 5, 50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!admin} @click=${() => (this._solarPick = !this._solarPick)}>${this._solarPick ? "✓ " : ""}${this.t("solar_pick")}</button>
          ${f.skip?.length ? html`<button class="fp3d-btn" ?disabled=${!admin} @click=${() => set({ skip: null })}>${this.t("solar_pick_all")}</button>` : nothing}
        </div>
        ${this._solarPick ? html`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>` : nothing}
        <div class="fp3d-form">
          ${ground
            ? html`${this.len(this.t("solar_base"), f.base ?? 0, (v) => set({ base: v > 0.001 ? Math.min(60, round(v)) : null }), 0.05, 0)}
                ${this.num(this.t("solar_rotation"), f.rotation ?? 0, (v) => set(turnGroundField(this._doc, f, v)), 5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!admin} @click=${() => set(turnGroundField(this._doc, f, (f.rotation ?? 0) - 15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!admin} @click=${() => set(turnGroundField(this._doc, f, (f.rotation ?? 0) + 15))}>↻ 15°</button>
                </div>`
            : html`${this.len(this.t("solar_u"), f.u, (v) => set({ u: round(v) }), 0.05)} ${this.num(this.t(face?.wall ? "solar_v_wall" : "solar_v"), f.v, (v) => set({ v: round(v) }), 0.05)}`}
          ${face?.wall
            ? html`${this.num(this.t("solar_tilt_wall"), f.tilt ?? 0, (v) => set({ tilt: Math.max(0, Math.min(90, Math.round(v))) }), 5, 0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!admin} .checked=${!!f.flip} @change=${(e: Event) => set({ flip: (e.target as HTMLInputElement).checked })} />
                  ${this.t("solar_flip_wall")}</label
                >`
            : nothing}
          ${face?.flat
            ? html`${this.num(this.t("solar_tilt"), f.tilt ?? 15, (v) => set({ tilt: Math.max(0, Math.min(45, Math.round(v))) }), 1, 0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!admin} .checked=${!!f.flip} @change=${(e: Event) => set({ flip: (e.target as HTMLInputElement).checked })} />
                  ${this.t("solar_flip")}</label
                >`
            : nothing}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary", { n, kwp: formatNumber(this.hass, (n * (f.wp ?? 400)) / 1000, 1) })}${n < total ? html` · <b>${this.t("solar_partial", { n, total })}</b>` : nothing}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!admin} @change=${(e: Event) => {
              const v = (e.target as HTMLSelectElement).value;
              this.setSolarString(v === "" ? null : v);
            }}>
              <option value="" ?selected=${!f.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings ?? []).map((st) => html`<option value=${st.id} ?selected=${st.id === f.string}>${st.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(() => {
            const st = this._doc.settings.roof.strings?.find((x) => x.id === f.string);
            if (!st) return this.entitySelect(this.t("solar_entity"), f.entity ?? null, undefined, power, (v) => set({ entity: v === "none" ? null : v }));
            // each inverter by its own name, else its entity's name, numbered across the house only as a last resort (#213)
            const linked = this.hass ? furnitureEntities(this.hass, this._doc.floors) : null;
            // the inverters, and the batteries with a solar input of their own (a power station, D410)
            const named = (type: "inverter" | "home_battery") =>
              this._doc.floors
                .flatMap((fl) => fl.furniture.filter((m) => energyRole(m.type) === type).map((m) => ({ m, fl })))
                .map(({ m, fl }, i) => {
                  const entity = linked?.get(m.id)?.entity;
                  const own = m.name?.trim() || (entity && this.hass ? entityName(this.hass, entity) : "");
                  return { id: m.id, label: `${own || `${this.t(`furn_${type}`)} ${i + 1}`} · ${fl.name}` };
                });
            const inverters = [...named("inverter"), ...named("home_battery")];
            return html`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!admin} .value=${st.name} @change=${(e: Event) => this.updateSolarString({ name: (e.target as HTMLInputElement).value.trim() || st.name })}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"), st.entity ?? null, undefined, power, (v) => this.updateSolarString({ entity: v === "none" ? null : v }))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!admin} @change=${(e: Event) => this.updateSolarString({ inverter: (e.target as HTMLSelectElement).value || null })}>
                  <option value="" ?selected=${!st.inverter}>${this.t(inverters.length ? "solar_string_inverter_none" : "solar_string_inverter_missing")}</option>
                  ${inverters.map((x) => html`<option value=${x.id} ?selected=${x.id === st.inverter}>${x.label}</option>`)}
                </select></label
              >`;
          })()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${admin
          ? html`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!face} @click=${() => face && set({ ...proposeField(face, f.id), portrait: f.portrait })}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteSolar()}>${this.t("delete")}</button>
            </div>`
          : nothing}
      </section>`;
  }

  /** Sidebar of the roof tool: the selected section's form, or the overview of all sections. */
  renderRoofPanel() {
    const roof = this._doc.settings.roof;
    const admin = this.isEditor;
    const sec = roof.type === "custom" ? this.roofSection : undefined;
    const win = this._roofWinId ? roof.windows?.find((x) => x.id === this._roofWinId) : undefined;
    if (win) return this.renderRoofWindowForm(win);
    if (sec) return this.renderRoofSectionForm(sec);
    const sections = roof.type === "custom" ? (roof.sections ?? []) : [];
    return html`${this.renderRoofBasics()}
    <section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${roof.type !== "custom"
        ? html`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!admin} @click=${() => this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`
        : html`<div class="fp3d-room-list">
              ${sections.map(
                (x, i) => html`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${() => (this._roofId = x.id)}>
                    <span>${i + 1} · ${x.dormer ? this.t("roof_dormer") : this.t(`roof_shape_${x.shape}` as I18nKey)} · ${this.m(Math.abs(x.x1 - x.x0), 1)} × ${this.m(Math.abs(x.z1 - x.z0), 1)} · ${this.t("roof_ridge_height")} ${this.m(ridgeHeight(x), 1)}</span>
                  </button>
                </div>`,
              )}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.useRoofSections(true)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.change((doc) => (doc.settings.roof.type = "gable"))}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`;
  }

  /** Sidebar of the energy tool: the selected solar field, or the overview (fields, strings). */
  renderEnergyPanel() {
    const field = this._solarId ? this._doc.settings.roof.solar?.find((x) => x.id === this._solarId) : undefined;
    if (field) return this.renderSolarForm(field);
    const device = this._furnitureId ? this.floor?.furniture.find((x) => x.id === this._furnitureId && isEnergyDevice(x.type)) : undefined;
    if (device)
      return html`<button class="fp3d-btn fp3d-back" @click=${() => this.selectItem("furniture", null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(device)}`;
    return html`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderCableSettings()}
      ${this.renderSettingsLink("energy", null, "settings_moved_energy")}`;
  }

  /**
   * Energie Pro: which solar field the hologram hangs on, how big it is and where exactly. Shown without solar
   * fields too (the house card then hangs beside the house), only the field's own settings wait for a field (#334).
   */
  renderHologramSettings() {
    const fields = this._doc.settings.roof.solar ?? [];
    const admin = this.isEditor;
    const h = this._doc.settings.roof.hologram ?? DEFAULT_HOLOGRAM;
    const free = h.place === "free";
    const set = (patch: Partial<HologramSettings>) => this.change((d) => (d.settings.roof.hologram = { ...(d.settings.roof.hologram ?? DEFAULT_HOLOGRAM), ...patch }));
    const name = (f: SolarField, i: number) => f.name || `${this.t("solar_field")} ${i + 1}`;
    // setting it free for the first time puts the handle beside the house, to the right of the rooms
    const setFree = () => {
      let x1 = -Infinity;
      let z0 = Infinity;
      let z1 = -Infinity;
      for (const f of this._doc.floors) for (const r of f.rooms) for (const [x, z] of r.points) {
        x1 = Math.max(x1, x);
        z0 = Math.min(z0, z);
        z1 = Math.max(z1, z);
      }
      const ok = Number.isFinite(x1);
      set({ place: "free", x: h.x ?? (ok ? round(x1 + 2) : 0), z: h.z ?? (ok ? round((z0 + z1) / 2) : 0), height: h.height ?? 3 });
    };
    return html`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!admin} @change=${(e: Event) => ((e.target as HTMLSelectElement).value === "free" ? setFree() : set({ place: "field" }))}>
            <option value="field" ?selected=${!free}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${free}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${free
          ? html`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)", h.x ?? 0, (v) => set({ x: round(v) }), 0.25)} ${this.len("Z (m)", h.z ?? 0, (v) => set({ z: round(v) }), 0.25)}
              ${this.len(this.t("holo_height"), h.height ?? 3, (v) => set({ height: Math.min(60, Math.max(0, round(v))) }), 0.25, 0)}`
          : !fields.length
            ? html`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`
          : html`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!admin} @change=${(e: Event) => set({ field: (e.target as HTMLSelectElement).value || null })}>
                  <option value="" ?selected=${!h.field}>${this.t("holo_field_auto")}</option>
                  ${fields.map((f, i) => html`<option value=${f.id} ?selected=${f.id === h.field}>${name(f, i)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"), h.right, (v) => set({ right: Math.min(30, Math.max(-30, round(v))) }), 0.25)}
              ${this.len(this.t("holo_up"), h.up, (v) => set({ up: Math.min(30, Math.max(-30, round(v))) }), 0.25)}`}
        ${this.num(this.t("holo_size"), h.size, (v) => set({ size: Math.min(3, Math.max(0.3, round(v))) }), 0.1, 0.3)}
        ${this.num(this.t("holo_device_min_w"), h.device_min_w ?? 0, (v) => set({ device_min_w: Math.max(0, Math.round(v)) }), 1, 0)}
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_house_hint")}
          ><input type="checkbox" .checked=${h.device_house !== false} ?disabled=${!admin} @change=${(e: Event) => set({ device_house: (e.target as HTMLInputElement).checked ? undefined : false })} />
          ${this.t("holo_device_house")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_room_hint")}
          ><input type="checkbox" .checked=${!!h.device_room} ?disabled=${!admin} @change=${(e: Event) => set({ device_room: (e.target as HTMLInputElement).checked || undefined })} />
          ${this.t("holo_device_room")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_plant_floor_hint")}
          ><input type="checkbox" .checked=${!!h.plant_floor} ?disabled=${!admin} @change=${(e: Event) => set({ plant_floor: (e.target as HTMLInputElement).checked || undefined })} />
          ${this.t("holo_plant_floor")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_mirror_hint")}
          ><input type="checkbox" .checked=${h.mirror !== false} ?disabled=${!admin} @change=${(e: Event) => set({ mirror: (e.target as HTMLInputElement).checked ? undefined : false })} />
          ${this.t("holo_mirror")}</label
        >
      </div>
    </section>`;
  }

  /** A power sensor: device class power, or a plain sensor in W or kW (templates, MQTT, many meters have no class). */
  isPowerSensor(id: string): boolean {
    if (!numberish(id)) return false;
    const a = this.hass?.states[id]?.attributes;
    return a?.device_class === "power" || a?.unit_of_measurement === "W" || a?.unit_of_measurement === "kW";
  }

  /** The name of a furniture type: a pack item's own name, else the built-in type's. */
  typeName(type: string): string {
    const item = packInfo(type);
    return item ? packItemName(item, this.hass?.language ?? "en") : this.t(`furn_${type}` as I18nKey);
  }

  /** The power sensor of an energy device: set by hand, or the one found on its Home Assistant device. */
  devicePower(m: Furniture, links: Map<string, { power: string | null }>): string | null {
    return m.power && m.power !== "none" ? m.power : (links.get(m.id)?.power ?? null);
  }

  /** What the energy tool still needs, ticked off live; every row jumps to the right place. */
  renderEnergyChecklist() {
    const doc = this._doc;
    const links = this.hass ? furnitureEntities(this.hass, doc.floors) : new Map<string, { power: string | null }>();
    const all = doc.floors.flatMap((fl) => fl.furniture.map((m) => ({ m, fl })));
    const of = (type: string) => all.filter((x) => (energyRole(x.m.type) ?? x.m.type) === type);
    const goTo = (x: (typeof all)[number]) => {
      this._floorId = x.fl.id;
      this._solarId = null;
      this.selectItem("furniture", x.m.id);
      this.showPoint(x.m.x, x.m.z);
    };
    const fields = doc.settings.roof.solar ?? [];
    const meters = of("meter");
    const inverters = of("inverter");
    const batteries = of("home_battery");
    const grid = of("grid_point");
    const meterOk = !!doc.energy.grid || meters.some((x) => this.devicePower(x.m, links));
    const inverterOk = !!doc.energy.solar || (inverters.length > 0 && inverters.every((x) => this.devicePower(x.m, links)));
    const batteryOk = batteries.every((x) => this.devicePower(x.m, links) && x.m.soc && x.m.soc !== "none") || !!doc.energy.battery;
    type Row = { state: "ok" | "todo" | "opt"; label: string; action?: () => void; href?: string };
    const rows: Row[] = [
      { state: fields.length ? "ok" : "todo", label: this.t(fields.length ? "chk_solar" : "chk_solar_add"), action: fields.length ? () => (this._solarId = fields[0].id) : () => this.addSolarField() },
      meters.length
        ? { state: meterOk ? "ok" : "todo", label: this.t(meterOk ? "chk_meter" : "chk_meter_sensor"), action: () => goTo(meters[0]) }
        : { state: "todo", label: this.t("chk_meter_add"), action: () => this.addEnergyDevice("meter") },
      inverters.length
        ? { state: inverterOk ? "ok" : "todo", label: this.t(inverterOk ? "chk_inverter" : "chk_inverter_sensor"), action: () => goTo(inverters.find((x) => !this.devicePower(x.m, links)) ?? inverters[0]) }
        : { state: "todo", label: this.t("chk_inverter_add"), action: () => this.addEnergyDevice("inverter") },
      batteries.length
        ? { state: batteryOk ? "ok" : "todo", label: this.t(batteryOk ? "chk_battery" : "chk_battery_sensor"), action: () => goTo(batteries[0]) }
        : { state: "opt", label: this.t("chk_battery_opt"), action: () => this.addEnergyDevice("home_battery") },
      grid.length ? { state: "ok", label: this.t("chk_grid"), action: () => goTo(grid[0]) } : { state: "opt", label: this.t("chk_grid_opt"), action: () => this.addEnergyDevice("grid_point") },
    ];
    const done = rows.filter((r) => r.state === "ok").length;
    return html`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${done}/${rows.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${rows.map((r) =>
        r.href
          ? html`<a class="fp3d-chk fp3d-chk-${r.state}" href=${r.href} target="_blank" rel="noopener"><span>${r.state === "ok" ? "✓" : r.state === "todo" ? "○" : "·"}</span>${r.label}</a>`
          : html`<button class="fp3d-chk fp3d-chk-${r.state}" ?disabled=${!this.isEditor && !!r.action && r.state !== "ok"} @click=${r.action}><span>${r.state === "ok" ? "✓" : r.state === "todo" ? "○" : "·"}</span>${r.label}</button>`,
      )}
    </section>`;
  }

  /** Where to report a problem and where to propose an idea. */
  renderHelpLinks() {
    return html`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href=${ISSUES_URL} target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
      </div>
    </section>`;
  }

  /**
   * Add an energy device where it belongs: a wallbox in the garage (or carport), an inverter or a battery in a
   * utility room (or the garage), else in the selected room; against the nearest wall, and the plan goes there.
   */
  addEnergyDevice(type: string): void {
    const floor = this.floor;
    if (!floor || !this.isEditor) return;
    if (type === "grid_point") {
      // the grid connection goes where the cable would reach the street by itself; then it can be dragged
      const auto = gridPoint(this._doc);
      const [gw, gd, gh] = furnitureSize(type);
      const [gx, gz] = auto ? auto.end : this.toWorld(this._size.w / 2, this._size.h / 2);
      const point: Furniture = { id: uid("furniture"), type, x: round(gx), z: round(gz), rotation: 0, w: gw, d: gd, h: gh, variant: null };
      this.change((_, f) => f.furniture.push(point));
      this.selectItem("furniture", point.id);
      this.showPoint(point.x, point.z);
      return;
    }
    const areaName = (r: Room) => `${r.name} ${(r.area_id && this.hass?.areas?.[r.area_id]?.name) || ""} ${r.area_id ?? ""}`.toLowerCase();
    const rooms = floor.rooms.filter((r) => r.points.length >= 3);
    const find = (re: RegExp) => rooms.find((r) => re.test(areaName(r)));
    const parked = rooms.find((r) => floor.furniture.some((m) => m.type === "parking" && pointInPolygon([m.x, m.z], r.points)));
    const garage = find(/garage|carport/) ?? parked;
    const utility = find(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/);
    const hall = find(/flur|diele|eingang|hall|entr|lobby/);
    const room = (type === "wallbox" ? garage : type === "meter" ? (utility ?? hall ?? garage) : (utility ?? garage)) ?? this.room ?? rooms.sort((a, b) => Math.abs(signedArea(b.points)) - Math.abs(signedArea(a.points)))[0];
    const [w, d, h] = furnitureSize(type);
    let [x, z] = room ? centroid(room.points) : this.toWorld(this._size.w / 2, this._size.h / 2);
    if (room) {
      // in front of the room's longest wall, so it snaps to that wall (from the middle no wall is near enough)
      const [cx, cz] = centroid(room.points);
      let best: { mx: number; mz: number; nx: number; nz: number; l: number } | null = null;
      // walls with a door, gate or window are no place for it (the garage door wall least of all)
      const open = new Set(floor.openings.filter((o) => o.room_id === room.id).map((o) => o.edge));
      const free = room.points.some((_, i) => !open.has(i));
      room.points.forEach((p, i) => {
        if (free && open.has(i)) return;
        const q = room.points[(i + 1) % room.points.length];
        const l = Math.hypot(q[0] - p[0], q[1] - p[1]);
        if (best && l <= best.l) return;
        const mx = (p[0] + q[0]) / 2;
        const mz = (p[1] + q[1]) / 2;
        let nx = -(q[1] - p[1]) / l;
        let nz = (q[0] - p[0]) / l;
        if ((cx - mx) * nx + (cz - mz) * nz < 0) [nx, nz] = [-nx, -nz];
        best = { mx, mz, nx, nz, l };
      });
      const b = best as { mx: number; mz: number; nx: number; nz: number; l: number } | null;
      if (b) [x, z] = [b.mx + b.nx * (d / 2 + 0.25), b.mz + b.nz * (d / 2 + 0.25)];
    }
    const item: Furniture = { id: uid("furniture"), type, x: round(x), z: round(z), rotation: 0, w, d, h, variant: null };
    // against the nearest wall of its room, like furniture snapping to a wall
    const snapped = room ? snapToWall({ ...floor, furniture: [...floor.furniture, item] }, item, this._doc.settings.wall_interior) : null;
    if (snapped) Object.assign(item, { x: round(snapped.x), z: round(snapped.z), rotation: snapped.rotation });
    this.change((_, f) => f.furniture.push(item));
    this.selectItem("furniture", item.id);
    this.showPoint(item.x, item.z);
  }

  /** Inverters, batteries and wallboxes of all floors, and buttons to add them on the floor shown. */
  renderEnergyDevices() {
    const admin = this.isEditor;
    const list = this._doc.floors.flatMap((fl) => fl.furniture.filter((m) => isEnergyDevice(m.type)).map((m) => ({ fl, m })));
    return html`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${list.length
        ? html`<div class="fp3d-room-list">
            ${list.map(
              ({ fl, m }) => html`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${() => {
                    this._floorId = fl.id;
                    this._solarId = null;
                    this.selectItem("furniture", m.id);
                    this.showPoint(m.x, m.z);
                  }}
                >
                  <span>${m.name || this.typeName(m.type)} · ${fl.name}</span>
                </button>
              </div>`,
            )}
          </div>`
        : nothing}
      <div class="fp3d-actions">
        ${ENERGY_DEVICES.map(
          (type) => html`<button
            class="fp3d-btn"
            ?disabled=${!admin || !this.floor}
            @click=${() => {
              this._solarId = null;
              this.addEnergyDevice(type);
            }}
          >
            + ${this.t(`furn_${type}` as I18nKey)}
          </button>`,
        )}
      </div>
    </section>`;
  }

  renderRoofSectionForm(sec: RoofSection) {
    const admin = this.isEditor;
    const set = (patch: Partial<RoofSection>) => this.updateRoofSection(patch);
    // side a is the top (ridge across the plan) or the left (ridge up and down the plan)
    const sides = sec.axis === "x" ? [this.t("roof_side_top"), this.t("roof_side_bottom")] : [this.t("roof_side_left"), this.t("roof_side_right")];
    const [sideA, sideB] = sec.flip ? [sides[1], sides[0]] : sides;
    const flat = sec.shape === "flat" || sec.shape === "parapet";
    const pent = sec.shape === "pent";
    const n = (sections: RoofSection[]) => sections.findIndex((x) => x.id === sec.id) + 1;
    const num = (label: string, value: number, apply: (v: number) => void, step = 0.05, min = 0) => this.len(label, value, (v) => apply(Math.max(min, round(v))), step, min);
    const deg = (label: string, value: number, apply: (v: number) => void) => this.num(label, value, (v) => apply(Math.max(0, round(v))), 1, 0);
    const planLocked = !!this._doc.settings.lock_plan;
    return html`<button class="fp3d-btn fp3d-back" @click=${() => (this._roofId = null)}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${sec.dormer ? this.t("roof_dormer") : this.t("roof_section")} ${n(this._doc.settings.roof.sections ?? [])}</h3>
          ${admin
            ? planLocked
              ? html`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${() => this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`
              : html`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!sec.locked} title=${this.t("fix_hint")} @click=${() => set({ locked: !sec.locked })}>
                  ${sec.locked ? `🔒 ${this.t("unfix")}` : `🔓 ${this.t("fix")}`}
                </button>`
            : nothing}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!admin} @change=${(e: Event) => set({ shape: (e.target as HTMLSelectElement).value as RoofShape })}>
            ${ROOF_SHAPES.map((shape) => html`<option value=${shape} ?selected=${sec.shape === shape}>${this.t(`roof_shape_${shape}` as I18nKey)}</option>`)}
          </select>
        </label>
        ${flat
          ? nothing
          : html`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${sec.axis === "x"} ?disabled=${!admin} @click=${() => set({ axis: "x" })}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${sec.axis === "z"} ?disabled=${!admin} @click=${() => set({ axis: "z" })}>${this.t("roof_axis_z")}</button>
            </div>`}
        ${sec.points || sec.dormer
          ? nothing
          : html`<div class="fp3d-form" title=${this.t("roof_turn_hint")}>
              ${this.num(`${this.t("roof_turn")} (°)`, sec.rotation ?? 0, (v) => this.turnRoofSection(Math.max(-180, Math.min(180, round(v)))), 1)}
              ${admin && !this.roofFixed(sec)
                ? html`<div class="fp3d-actions">
                    <button class="fp3d-btn" @click=${() => this.turnRoofSection(turnBy(sec.rotation ?? 0, -15))}>↺ 15°</button>
                    <button class="fp3d-btn" @click=${() => this.turnRoofSection(turnBy(sec.rotation ?? 0, 15))}>↻ 15°</button>
                  </div>`
                : nothing}
            </div>`}
        ${sec.shape === "gable" || sec.shape === "hip" || sec.shape === "halfhip"
          ? html`<div class="fp3d-form" title=${this.t("roof_end_hint")}>
              ${([0, 1] as const).map((end) => {
                // the u0 end is the left one (ridge across the plan) or the top one (ridge up and down)
                const where = this.t(sec.axis === "x" ? (end === 0 ? "roof_side_left" : "roof_side_right") : end === 0 ? "roof_side_top" : "roof_side_bottom");
                const value = (end === 0 ? sec.end_u0 : sec.end_u1) ?? "";
                return html`<label class="fp3d-field"
                  >${this.t("roof_end")} ${where}
                  <select
                    ?disabled=${!admin}
                    @change=${(e: Event) => {
                      const v = ((e.target as HTMLSelectElement).value || null) as RoofEnd | null;
                      set(end === 0 ? { end_u0: v } : { end_u1: v });
                    }}
                  >
                    <option value="" ?selected=${value === ""}>${this.t("roof_end_auto")}</option>
                    ${ROOF_ENDS.map((e) => html`<option value=${e} ?selected=${value === e}>${this.t(e === "gable" ? "roof_end_gable" : `roof_shape_${e}`)}</option>`)}
                  </select></label
                >`;
              })}
            </div>`
          : nothing}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!sec.open} ?disabled=${!admin} @change=${(e: Event) => set({ open: (e.target as HTMLInputElement).checked })} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${flat
            ? num(this.t("roof_height"), sec.eave_a, (v) => set({ eave_a: v, eave_b: v }))
            : html`${num(`${this.t("roof_eave")} ${pent ? "" : sideA}`, sec.eave_a, (v) => set({ eave_a: v }))}
              ${pent ? nothing : num(`${this.t("roof_eave")} ${sideB}`, sec.eave_b, (v) => set({ eave_b: v }))}
              ${deg(`${this.t("roof_pitch_short")} ${pent ? "" : sideA}`, sec.pitch_a, (v) => set({ pitch_a: Math.min(75, v) }))}
              ${pent ? nothing : deg(`${this.t("roof_pitch_short")} ${sideB}`, sec.pitch_b, (v) => set({ pitch_b: Math.min(75, v) }))}`}
          ${num(this.t("roof_base"), sec.base, (v) => set({ base: v }))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!admin}
              @change=${(e: Event) => {
                const f = this._doc.floors.find((x) => x.id === (e.target as HTMLSelectElement).value);
                if (!f) return;
                // the section moves onto that floor's wall tops: base and eaves shift by the same amount
                const top = round(f.elevation + f.height);
                const shift = top - sec.base;
                set({ base: top, eave_a: round(sec.eave_a + shift), eave_b: round(sec.eave_b + shift) });
              }}
            >
              ${[...this._doc.floors]
                .filter((f) => f.rooms.length)
                .sort((p, q) => q.elevation - p.elevation)
                .map((f) => html`<option value=${f.id} ?selected=${sectionFloor(this._doc, sec)?.id === f.id}>${f.name}</option>`)}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${num(this.t("roof_overhang"), sec.overhang ?? this._doc.settings.roof.overhang, (v) => set({ overhang: Math.min(2, v) }), 0.05, 0)}
        </div>
        ${flat && admin
          ? html`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${() => this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${sec.points ? html`<button class="fp3d-btn" @click=${() => set({ points: null })}>${this.t("roof_rect")}</button>` : nothing}
            </div>
            <p class="fp3d-sub">${this.t(sec.points ? "roof_points_hint" : "roof_outline_hint")}</p>`
          : nothing}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(ridgeHeight(sec), 2)} · ${this.t("roof_section_hint")}</p>
        ${admin
          ? html`<div class="fp3d-actions">
              ${flat
                ? nothing
                : html`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${() => set({ flip: !sec.flip })}>⇅ ${this.t("roof_swap")}</button>`}
              ${!flat && !sec.dormer && !sec.open
                ? html`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${() => this.addDormer("a")}>+ ${this.t("roof_dormer")} ${sideA}</button>
                  ${pent ? nothing : html`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${() => this.addDormer("b")}>+ ${this.t("roof_dormer")} ${sideB}</button>`}`
                : nothing}
              <button class="fp3d-btn" @click=${() => this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`
          : nothing}
      </section>`;
  }

  /** The item of a fixable kind on a floor. */
  fixItem(floor: Floor | undefined, kind: FixKind, id: string): object | undefined {
    if (!floor) return undefined;
    switch (kind) {
      case "room":
        return floor.rooms.find((r) => r.id === id);
      case "opening":
        return floor.openings.find((o) => o.id === id);
      case "furniture":
        return floor.furniture.find((m) => m.id === id);
      case "device":
        return floor.placements.find((p) => p.entity_id === id);
      case "wall":
        return (floor.walls ?? []).find((w) => w.id === id);
      case "outdoor":
        return floor.outdoor.find((a) => a.id === id);
    }
  }

  /** Fixed by itself, or (rooms, walls, doors, windows, outdoor areas) by the plan lock. */
  isFixedItem(kind: FixKind, id: string): boolean {
    return isFixed(this.fixItem(this.floor, kind, id), kind !== "furniture" && kind !== "device", this._doc.settings);
  }

  toggleFixed(kind: FixKind, id: string): void {
    // rooms, walls, doors, windows and outdoor areas follow the plan lock alone
    if (!this.isEditor || (kind !== "furniture" && kind !== "device")) return;
    const next = !this.isFixedItem(kind, id);
    // released: the "fixed, release first" hint has done its job
    if (!next) this._fixedHint = false;
    this.change((_, floor) => {
      const item = this.fixItem(floor, kind, id) as { locked?: boolean | null } | undefined;
      if (item) item.locked = next;
    });
  }

  toggleLockPlan(): void {
    if (!this.isEditor) return;
    if (this._doc.settings.lock_plan) this._fixedHint = false;
    this.change((doc) => (doc.settings.lock_plan = !doc.settings.lock_plan));
  }

  /** The selected item (for the L key and nudging), the most specific selection first. */
  get selectedFix(): { kind: FixKind; id: string } | null {
    if (this._deviceId) return { kind: "device", id: this._deviceId };
    if (this._openingId) return { kind: "opening", id: this._openingId };
    if (this._furnitureId) return { kind: "furniture", id: this._furnitureId };
    if (this._wallId) return { kind: "wall", id: this._wallId };
    if (this._outdoorId) return { kind: "outdoor", id: this._outdoorId };
    if (this._roomId) return { kind: "room", id: this._roomId };
    return null;
  }

  /** A fixed item is only deleted after asking. */
  async confirmFixedDelete(kind: FixKind, id: string): Promise<boolean> {
    return !this.isFixedItem(kind, id) || (await this.ask(this.t("fixed_delete_confirm")));
  }

  /** A yes / no question in the app's own dialog (#59); `ok` names what yes does, a warning unless `danger` is false. */
  ask(text: string, ok: string = this.t("delete"), danger = true): Promise<boolean> {
    return askConfirm(text, { ok, cancel: this.t("cancel"), danger });
  }

  /** A message in the app's own dialog (#59). */
  tell(text: string): Promise<void> {
    return tell(text, { ok: this.t("ask_ok") });
  }

  onContextMenu(e: MouseEvent): void {
    e.preventDefault();
    // a mouse's right button is handled on its release (drag = move the plan); this is a long press on a tablet
    if (this.rightPress || performance.now() - this.rightUp < 600) return;
    if (this._tool !== "select" && this._tool !== "furniture") return;
    this.drag = null;
    this.openContext(e.target as Element, this.localPoint(e as PointerEvent));
  }

  /** Select the item under a plan point and open its menu. */
  /**
   * The item a plan press lands on (#72): its drawn shape grown to a 24 px target (44 px on touch), smallest item
   * first. A press on a room corner or wall-end handle is never an item.
   */
  pickItem(target: Element, world: Vec2, pointerType: string): string | null {
    if (!this.floor || target.closest("[data-vertex], [data-mid], [data-wall-end], [data-out-box], [data-out-vertex]")) return null;
    return this.itemHits(target, world, pointerType)[0] ?? target.closest("[data-furniture]")?.getAttribute("data-furniture") ?? null;
  }

  /** The shown items under a plan press, best first (#72); none on a room corner or wall-end handle. */
  itemHits(target: Element, world: Vec2, pointerType: string): string[] {
    if (!this.floor || target.closest("[data-vertex], [data-mid], [data-wall-end], [data-out-box], [data-out-vertex]")) return [];
    const hidden = this._hiddenItems;
    return itemsAt(this.floor.furniture, world, this._view.scale, minHitPx(pointerType), hidden.length ? (f) => hidden.includes(f.id) : undefined);
  }

  /** Whether a shown item is pressed on its shape (a thin one's grown depth included, #132). */
  firmItemAt(world: Vec2, pointerType: string): boolean {
    const hidden = this._hiddenItems;
    return (this.floor?.furniture ?? []).some((f) => !hidden.includes(f.id) && firmHit(f, world, this._view.scale, minHitPx(pointerType)));
  }

  /** Hide an item in this editor's plan, or show it again (#75); a hidden selected item is let go. */
  toggleItemHidden(id: string): void {
    const hidden = this._hiddenItems;
    this._hiddenItems = hidden.includes(id) ? hidden.filter((x) => x !== id) : [...hidden, id];
    if (this._hiddenItems.includes(id) && this.selection().includes(id)) this.selectItem("room", this._roomId);
  }

  /** The items Tab cycles through (#75): the shown ones in the selected item's room, else on the floor. */
  tabItems(): string[] {
    const floor = this.floor;
    const f = this.furnitureItem;
    if (!floor || !f) return [];
    const shown = floor.furniture.filter((m) => !this._hiddenItems.includes(m.id));
    const groups = itemsByRoom(floor.rooms, shown);
    for (const list of groups.values()) if (list.some((m) => m.id === f.id)) return list.map((m) => m.id);
    return shown.map((m) => m.id);
  }

  /** An item chosen in the items list (#75): selected, and brought into view only if it is out of view. */
  selectFromList(id: string): void {
    const f = this.floor?.furniture.find((m) => m.id === id);
    if (!f) return;
    this.selectItem("furniture", id);
    this._single = !!f.group;
    this.showPoint(f.x, f.z);
  }

  /** Delete one item from the items list (#75): that row only, even when it is part of a block. */
  async deleteFromList(id: string): Promise<void> {
    if (!this.floor?.furniture.some((m) => m.id === id)) return;
    this.selectItem("furniture", id);
    this._single = true;
    // asks first for a fixed item, in the app's own dialog (#59)
    await this.deleteFurniture();
  }

  openContext(target: Element, local: [number, number], pointerType = "mouse"): void {
    if (!this.isEditor || !this.floor) return;
    const world = this.toWorld(...local);
    const attr = (sel: string) => target.closest(`[${sel}]`)?.getAttribute(sel) ?? null;
    let hit: [FixKind, string] | null = null;
    const device = attr("data-device");
    const opening = attr("data-opening");
    const furniture = this.pickItem(target, world, pointerType);
    const wall = attr("data-free-wall");
    const outdoor = attr("data-outdoor") ? (this.outdoorAt(world) ?? attr("data-outdoor")) : null;
    const room = attr("data-room") ?? this.roomAt(world);
    if (device) hit = ["device", device];
    else if (opening) hit = ["opening", opening];
    else if (furniture) hit = ["furniture", furniture];
    else if (wall) hit = ["wall", wall];
    else if (outdoor && !room) hit = ["outdoor", outdoor];
    else if (room) hit = ["room", room];
    if (!hit) {
      this._ctx = null;
      return;
    }
    const [kind, id] = hit;
    this.selectItem(kind, id);
    if (kind === "opening" || kind === "furniture") this._roomId = this._roomId ?? room;
    this._ctx = { x: local[0], y: local[1], kind, id };
  }

  async deleteItem(kind: FixKind, id: string): Promise<void> {
    if (kind === "device") {
      if (!(await this.confirmFixedDelete(kind, id))) return;
      this.removeDevice(id);
      this._deviceId = null;
      return;
    }
    // the delete methods ask themselves for fixed items
    if (kind === "room") this.deleteRoom();
    else if (kind === "opening") this.deleteOpening();
    else if (kind === "furniture") this.deleteFurniture();
    else if (kind === "wall") this.deleteFreeWall();
    else this.deleteOutdoor();
  }

  renderContext() {
    const c = this._ctx;
    if (!c) return nothing;
    const fixed = this.isFixedItem(c.kind, c.id);
    const wrap = this.renderRoot.querySelector(".fp3d-canvas-wrap") as HTMLElement | null;
    // keep the menu inside the plan
    const x = Math.max(4, Math.min(c.x, (wrap?.clientWidth ?? 800) - 190));
    const y = Math.max(4, Math.min(c.y, (wrap?.clientHeight ?? 600) - 190));
    const run = (fn: () => void) => () => {
      this._ctx = null;
      fn();
    };
    return html`<div class="fp3d-ctx" style=${`left:${x}px;top:${y}px`} @pointerdown=${(e: Event) => e.stopPropagation()} @contextmenu=${(e: Event) => e.preventDefault()}>
      ${c.kind === "furniture" || c.kind === "device"
        ? html`<button title=${this.t("fix_hint")} @click=${run(() => this.toggleFixed(c.kind, c.id))}>${fixed ? `🔓 ${this.t("unfix")}` : `🔒 ${this.t("fix")}`}</button>`
        : html`<button title=${this.t("lock_plan_hint")} @click=${run(() => this.toggleLockPlan())}>${this._doc.settings.lock_plan ? `🔓 ${this.t("plan_unlock")}` : `🔒 ${this.t("plan_lock")}`}</button>`}
      ${c.kind === "room" ? html`<button @click=${run(() => this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>` : nothing}
      ${c.kind === "room" && clipboard ? html`<button title=${withKeys(this.t("paste_items"), ["Ctrl+V"])} @click=${run(() => this.pasteClipboard())}>⎘ ${this.t("paste_items_n", { n: clipboard.items.length })}</button>` : nothing}
      ${c.kind === "furniture"
        ? html`<button title=${withKeys(this.t("duplicate"), ["Ctrl+D"])} @click=${run(() => this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button title=${withKeys(this.t("copy_items"), ["Ctrl+C"])} @click=${run(() => this.copySelection())}>⎘ ${this.t("copy_items")}</button>
            <button ?disabled=${fixed} title=${withKeys(this.t("ctx_rotate"), ["R"])} @click=${run(() => this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${fixed} @click=${run(() => this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${run(() => {
              const f = this.floor?.furniture.find((m) => m.id === c.id);
              if (f) this.openWallViewFor(f);
            })}>▦ ${this.t("wall_view")}</button>`
        : nothing}
      <button class="fp3d-ctx-danger" @click=${run(() => this.deleteItem(c.kind, c.id))}>✕ ${this.t("delete")}</button>
    </div>`;
  }

  /** Lock button in the form of an item. */
  fixButton(kind: FixKind, id: string) {
    if (!this.isEditor) return nothing;
    if (kind !== "furniture" && kind !== "device") {
      // part of the floor plan: shows the plan lock, a click releases it
      return this._doc.settings.lock_plan
        ? html`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${() => this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`
        : nothing;
    }
    const fixed = this.isFixedItem(kind, id);
    return html`<button class="fp3d-btn fp3d-fix" aria-pressed=${fixed} title=${this.t("fix_hint")} @click=${() => this.toggleFixed(kind, id)}>
      ${fixed ? `🔒 ${this.t("unfix")}` : `🔓 ${this.t("fix")}`}
    </button>`;
  }

  /** Select a room, an opening or a furniture item (only one at a time). */
  selectItem(kind: "room" | "opening" | "furniture" | "device" | "outdoor" | "wall", id: string | null): void {
    this._notice = null;
    this._kerbPick = false;
    // a selection made in the plan (or by a tool) opens the folded sidebar
    if (id) this._sideOpen = true;
    this._outdoorId = kind === "outdoor" ? id : null;
    this._wallId = kind === "wall" ? id : null;
    this._edgeHi = null;
    if (kind === "outdoor" || kind === "wall") this._roomId = null;
    if (kind !== "room" || id !== this._roomId) this._vertex = null;
    this._roomId = kind === "room" ? id : this._roomId;
    this._openingId = kind === "opening" ? id : null;
    this._furnitureId = kind === "furniture" ? id : null;
    this._multi = [];
    this._single = false;
    this._deviceId = kind === "device" ? id : null;
    if (kind === "device" && id) {
      const pl = this.floor?.placements.find((x) => x.entity_id === id);
      this._roomId = (pl && this.roomAt([pl.x, pl.z])) ?? this._roomId;
    }
    if (kind === "opening" && id) this._roomId = this.floor?.openings.find((o) => o.id === id)?.room_id ?? this._roomId;
  }

  get opening(): Opening | undefined {
    return this._openingId ? this.floor?.openings.find((o) => o.id === this._openingId) : undefined;
  }

  get furnitureItem(): Furniture | undefined {
    return this._furnitureId ? this.floor?.furniture.find((f) => f.id === this._furnitureId) : undefined;
  }

  /** Centre offset on a room edge closest to `world`, keeping the opening inside the edge. */
  offsetOnEdge(room: Room, edge: number, world: Vec2, width: number, free: boolean): number {
    const a = room.points[edge];
    const b = room.points[(edge + 1) % room.points.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const t = ((world[0] - a[0]) * (b[0] - a[0]) + (world[1] - a[1]) * (b[1] - a[1])) / len;
    const g = free ? 0.01 : this._doc.settings.grid;
    return this.clampOffset(room, edge, width, Math.round(t / g) * g);
  }

  /**
   * An opening's centre kept on its room edge with the whole opening inside the edge – or reaching on across
   * a transition without a wall, where the outer wall carries on in line (#624).
   */
  clampOffset(room: Room, edge: number, width: number, offset: number): number {
    const a = room.points[edge];
    const b = room.points[(edge + 1) % room.points.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const floor = this.floor;
    const s = this._doc.settings;
    const [before, after] = floor ? edgeReach(generateWalls(floor.rooms, { exterior: s.wall_exterior, interior: s.wall_interior }, floor.walls ?? []).walls, room, edge) : [0, 0];
    const half = Math.min(width, len + before + after) / 2;
    return round(Math.min(len, len + after - half, Math.max(0, half - before, offset)));
  }

  /** A press on an opening: select it, and (for editors) start dragging it along its wall. */
  pressOpening(id: string, local: [number, number]): void {
    this.selectItem("opening", id);
    this.drag = this.isEditor ? { kind: "opening", id, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
  }

  /**
   * What a tap at a screen point does in Doors & windows mode (#62): add a new opening of `preset` on the nearest
   * wall, select the existing one it lands on, or nothing because the new one would overlap another (`blocked`).
   * Null: no wall near enough. Nothing is changed here.
   */
  planOpening(
    preset: OpeningPreset,
    screen: [number, number],
    free = false,
  ): { add: Opening } | { select: Opening } | { blocked: Opening } | null {
    const floor = this.floor;
    if (!floor || !this.isEditor) return null;
    let best: { room: Room; edge: number; d: number; wall?: string; roomId?: string } | null = null;
    for (const w of floor.walls ?? []) {
      const host = openingHost({ room_id: "", edge: 0, wall: w.id }, floor.rooms, floor.walls ?? []);
      if (!host) continue;
      const [ax, ay] = this.toScreen(w.a);
      const [bx, by] = this.toScreen(w.b);
      const l2 = (bx - ax) ** 2 + (by - ay) ** 2 || 1;
      const t = Math.min(1, Math.max(0, ((screen[0] - ax) * (bx - ax) + (screen[1] - ay) * (by - ay)) / l2));
      const d = Math.hypot(screen[0] - ax - (bx - ax) * t, screen[1] - ay - (by - ay) * t);
      // a free wall wins over a room edge at the same distance
      const mid: Vec2 = [(w.a[0] + w.b[0]) / 2, (w.a[1] + w.b[1]) / 2];
      const inside = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon(mid, r.points));
      if (d < SNAP_PX * 2.2 && (!best || d - 1 < best.d)) best = { room: host.room, edge: 0, d: d - 1, wall: w.id, roomId: inside?.id ?? w.id };
    }
    for (const room of floor.rooms) {
      for (let i = 0; i < room.points.length; i++) {
        const [ax, ay] = this.toScreen(room.points[i]);
        const [bx, by] = this.toScreen(room.points[(i + 1) % room.points.length]);
        const l2 = (bx - ax) ** 2 + (by - ay) ** 2 || 1;
        const t = Math.min(1, Math.max(0, ((screen[0] - ax) * (bx - ax) + (screen[1] - ay) * (by - ay)) / l2));
        const d = Math.hypot(screen[0] - ax - (bx - ax) * t, screen[1] - ay - (by - ay) * t);
        // the selected room wins on shared edges
        const score = d - (room.id === this._roomId ? 0.5 : 0);
        if (d < SNAP_PX * 2.2 && (!best || score < best.d)) best = { room, edge: i, d: score };
      }
    }
    if (!best) return null;
    const { room, edge, wall } = best;
    const a = room.points[edge];
    const b = room.points[(edge + 1) % room.points.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const defaults = OPENING_PRESETS[preset];
    const type: OpeningType = defaults.type;
    const width = round(Math.min(defaults.width, Math.max(0.3, len - 0.1)));
    const tap = this.toWorld(...screen);
    // the same snap guides as when dragging one along its wall (#143)
    const offset = this.snapOnEdge(room, edge, tap, width, wallPeers(floor, { id: "", room_id: best.roomId ?? room.id, edge, wall }), free);
    // never on top of another door or window (#62): a tap inside one selects it, a tap beside it says why not
    const span: [Vec2, Vec2] = [pointOnRoomEdge(room, edge, offset - width / 2), pointOnRoomEdge(room, edge, offset + width / 2)];
    const clash = openingTap(tap, span, floor.openings, floor.rooms, floor.walls ?? []);
    if (clash) return clash;
    const opening: Opening = {
      id: uid("opening"),
      room_id: best.roomId ?? room.id,
      edge,
      ...(wall ? { wall } : {}),
      offset,
      width,
      type,
      sill: defaults.sill,
      height: defaults.height,
      // a front door or glass wall keeps its look; a plain door stays automatic (front style in an outer wall)
      ...("style" in defaults && preset !== "door" ? { style: defaults.style } : {}),
      hinge: "left",
      leaves: defaults.leaves,
      swing: "in",
      cover: null,
      contact: null,
      contact2: null,
      tilt: null,
    };
    return { add: opening };
  }

  /** Doors & windows mode with a mouse: keep the hint bar saying what a tap at the pointer would do (#62). */
  hoverOpening(target: Element, local: [number, number], free = false): void {
    const id = target?.closest?.("[data-opening]")?.getAttribute("data-opening");
    const on = id ? this.floor?.openings.find((o) => o.id === id) : undefined;
    const plan = on ? { select: on } : this.planOpening(this._openingPreset, local, free);
    if (!plan || !("add" in plan)) this.showGuides([]);
    const text = plan ? this.openingHint(plan) : null;
    if (text !== this._openingHover) this._openingHover = text;
  }

  /** A tap in Doors & windows mode: add a door or window on the nearest wall, or select the one tapped (#62). */
  placeOpening(preset: OpeningPreset, screen: [number, number], free = false): boolean {
    const plan = this.planOpening(preset, screen, free);
    this.showGuides([]);
    if (!plan) return false;
    if ("select" in plan) this.pressOpening(plan.select.id, screen);
    else if ("blocked" in plan) this._openingNote = this.openingHint(plan);
    else {
      const opening = plan.add;
      this.change((_, f) => f.openings.push(opening));
      // the tool stays: six doors and windows in a row without going back to the menu (Esc or "Select" ends it)
      this.selectItem("opening", opening.id);
    }
    return true;
  }

  /** The hint bar under the plan (#96, #62): what the current tool does, what can be done with the selection, on a new
   *  plan the next step, and in Doors & windows mode what a tap will do right now. */
  hintText(): string {
    // while a guide holds what is placed or dragged, the bar says which and how to get free of it (#143)
    // (placing and Doors & windows keep their own sentence: it already says what a click does there)
    const snapped = this.drag ? this._guides.lines?.[0]?.label : undefined;
    if (snapped) return this.t("hint_snapped", { what: snapped });
    const key = this.hintKeyNow();
    // the kind the next tap adds is always named: it is never inherited silently (#63)
    if (key === "hint_place" && this._placing) return this.t("hint_place", { name: furnitureName(this.hass, this._placing.type) });
    if (key === "hint_opening") return this._openingNote ?? this._openingHover ?? this.t("hint_opening", { kind: this.t(`preset_${this._openingPreset}` as I18nKey) });
    return this.t(key);
  }

  /** Which hint string shows now (editor-hint.ts hintKey, #96). */
  hintKeyNow(): I18nKey {
    const floor = this.floor;
    return hintKey({
      tool: this._tool,
      hasFloor: !!floor,
      rooms: floor?.rooms.length ?? 0,
      placing: !!this._placing,
      selected: this._deviceId ? "device" : this._furnitureId ? "furniture" : this._openingId ? "opening" : this._roomId ? "room" : null,
      wallPick: this._wallPick,
      kerbPick: this._kerbPick,
      fixedHint: this._fixedHint,
      outdoorFree: !!this._outdoorFree,
      jointPlace: !!this._jointPlace,
      pipeMode: !!this._pipeMode,
      poolArea: !!this.poolArea,
      pipeDraft: !!this._pipeDraft,
      poolTech: released("pool"),
    });
  }

  /** The hint bar's sentence for what a tap does in Doors & windows mode (#62). */
  openingHint(plan: { add: Opening } | { select: Opening } | { blocked: Opening }): string {
    const kind = (o: Opening) => this.t(`preset_${openingPreset(o)}` as I18nKey);
    if ("add" in plan) return this.t("hint_opening_add", { kind: kind(plan.add) });
    if ("select" in plan) return this.t("hint_opening_select", { kind: kind(plan.select) });
    return this.t("opening_overlap", { kind: kind(plan.blocked) });
  }

  /** Turns an opening into another kind (door, double door, window, terrace door, garage door). */
  setOpeningPreset(o: Opening, preset: OpeningPreset): void {
    // converting THIS opening never touches the kind the next tap adds (#159): that is pickOpeningKind's job
    const d = OPENING_PRESETS[preset];
    const sameWidth = openingPreset(o) === preset;
    const style = "style" in d ? d.style : null;
    const floor = this.floor;
    const host = floor ? openingHost(o, floor.rooms, floor.walls ?? []) : null;
    let size: Partial<Opening> = {};
    if (!sameWidth) {
      // the same limit as placing one: no wider than its wall, and still inside it afterwards
      let width: number = d.width;
      if (host) {
        const a = host.room.points[host.edge];
        const b = host.room.points[(host.edge + 1) % host.room.points.length];
        width = round(Math.min(d.width, Math.max(0.3, Math.hypot(b[0] - a[0], b[1] - a[1]) - 0.1)));
      }
      size = { width, ...(host ? { offset: this.clampOffset(host.room, host.edge, width, o.offset) } : {}) };
    }
    this.updateOpening({ type: d.type, leaves: d.leaves, sill: d.sill, height: d.height, style, ...size });
  }

  updateOpening(patch: Partial<Opening>): void {
    const id = this._openingId;
    this.change((_, floor) => patchItem(floor.openings.find((o) => o.id === id), patch));
  }

  async deleteOpening(): Promise<void> {
    const id = this._openingId;
    if (!id || !this.isEditor || !(await this.confirmFixedDelete("opening", id))) return;
    this.change((_, floor) => (floor.openings = floor.openings.filter((o) => o.id !== id)));
    this._openingId = null;
  }

  /** How strongly a lamp glows in 3D, in percent (#181): many bright LED strips need not outshine the room. */
  glowScaleField(value: number | null | undefined, set: (v: number | null) => void) {
    return html`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((value ?? 1) * 100))}
        ?disabled=${!this.isEditor}
        @change=${(e: Event) => {
          const v = Math.min(150, Math.max(10, Number((e.target as HTMLInputElement).value) || 100)) / 100;
          set(Math.abs(v - 1) < 0.001 ? null : v);
        }}
    /></label>`;
  }

  typeLabelMemo = new WeakMap<FurniturePack, { lang: string; labels: string[] }>();

  /** A pack's lines in the Type list, same-named items told apart (#132); kept per pack and language. */
  typeLabels(pack: FurniturePack): string[] {
    const lang = this.hass?.language ?? "en";
    const kept = this.typeLabelMemo.get(pack);
    if (kept && kept.lang === lang) return kept.labels;
    const labels = typeOptionLabels(pack.items, lang);
    this.typeLabelMemo.set(pack, { lang, labels });
    return labels;
  }

  /**
   * The built-in types offered in a furniture item's type list: what the library offers (#530 – devices of the energy
   * tool, Pool Pro parts not released yet and the stairwell are no furniture to switch to), plus the item's own type.
   */
  typeChoices(current: string): string[] {
    const shown = new Set<string>(Object.values(FURNITURE_GROUPS).flat());
    // the smart fridge: its own pack, or Haushalt Pro
    shown.add("fridge_smart");
    return FURNITURE_TYPES.filter((t) => shown.has(t) || t === current);
  }

  /** Furniture that can stand for a placed device of this kind (a speaker for a media player, a lamp for a light …). */
  furnitureFor(entityId: string): { type: string; label: string }[] {
    const kind = kindOf(entityId);
    const lang = this.hass?.language ?? "en";
    const all = [
      ...FURNITURE_TYPES.map((t) => ({ type: t as string, label: this.t(`furn_${t}` as I18nKey) })),
      ...(this.packs ?? []).flatMap((p) => p.items.map((it) => ({ type: packType(p.id, it.id), label: `${packItemName(it, lang)} · ${packName(p, lang)}` }))),
    ];
    const speakerish = /speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/;
    const fits = (t: string): boolean => {
      if (kind === "light") return isLamp(t);
      if (kind === "climate") return t === "radiator" || t === "ac_unit";
      if (entityId.startsWith("vacuum.")) return isRobotVacuum(t);
      if (kind === "media") return hasScreen(t) || (isElectric(t) && speakerish.test(t));
      return isElectric(t) && !isLamp(t);
    };
    return all.filter((x) => fits(x.type)).sort((a, b) => a.label.localeCompare(b.label));
  }

  /** A vehicle placed as plain furniture becomes a parking spot with this vehicle (presence and Auto Pro live there). */
  vehicleToSpot(f: Furniture): void {
    if (!this.isEditor) return;
    const [w, d, h] = furnitureSize("parking");
    const spot: Furniture = { id: uid("furniture"), type: "parking", x: f.x, z: f.z, rotation: f.rotation, w: Math.max(w, round(f.w + 0.5)), d: Math.max(d, round(f.d + 0.4)), h, variant: null, vehicle: f.type, ...(f.name ? { name: f.name } : {}) };
    this.change((_, floor) => {
      floor.furniture = floor.furniture.filter((m) => m.id !== f.id);
      floor.furniture.push(spot);
    });
    this.selectItem("furniture", spot.id);
  }

  /** Replace a placed device by a furniture item linked to it, where the pin stood (one undo step). */
  deviceToFurniture(pl: Placement, type: string): void {
    if (!this.isEditor) return;
    // a camera keeps its pin with everything set there (field of view, aim, Kamera-Cockpit): the model is only its
    // look – one item that replaces the last one and moves with the camera (#779); a camera model sets its mount (#9)
    if (pl.entity_id.startsWith("camera.")) {
      this.change((_, f) => setCameraLook(f, pl.entity_id, type));
      return;
    }
    const [w, d, h] = furnitureSize(type);
    const item: Furniture = {
      id: uid("furniture"),
      type,
      x: pl.x,
      z: pl.z,
      rotation: pl.rotation ?? 0,
      w,
      d,
      h,
      variant: null,
      entity: pl.entity_id,
      name: pl.name ?? null,
      ...(pl.locked ? { locked: true } : {}),
      // own tap / hold / double-tap actions go along (#6)
      ...(pl.actions ? { actions: pl.actions } : {}),
    };
    this.change((_, f) => {
      f.placements = f.placements.filter((p) => p.entity_id !== pl.entity_id);
      f.furniture.push(item);
    });
    this._deviceId = null;
    this.selectItem("furniture", item.id);
  }

  /** Turn a furniture item linked by hand back into a plain device pin at its place. */
  furnitureToDevice(f: Furniture): void {
    const id = f.entity;
    if (!this.isEditor || !id || id === "none") return;
    const pl: Placement = { entity_id: id, x: f.x, z: f.z, y: null, rotation: f.rotation, ...(f.name ? { name: f.name } : {}), ...(id.startsWith("light.") ? { pin: true } : {}), ...(f.actions ? { actions: f.actions } : {}) };
    this.change((_, floor) => {
      floor.furniture = floor.furniture.filter((m) => m.id !== f.id);
      if (!floor.placements.some((p) => p.entity_id === id)) floor.placements.push(pl);
    });
    this._furnitureId = null;
    this.selectItem("device", id);
  }

  /**
   * A camera's real shape (#9): the camera models of the packs (the core pack's UniFi cameras), the one its device
   * reports marked. Only its look: the pin keeps the live view, the aim and the actions.
   */
  renderCameraModel(pl: Placement) {
    const lang = this.hass?.language ?? "en";
    const packs = this.packs ?? [];
    const models = packs
      .flatMap((p) => p.items.filter(isCameraModel).map((it) => ({ type: packType(p.id, it.id), label: packItemName(it, lang) })))
      .sort((a, b) => a.label.localeCompare(b.label));
    if (!models.length) return nothing;
    const look = this.floor?.furniture.find((m) => m.look_of === pl.entity_id)?.type ?? "";
    const found = this.hass ? detectCameraModel(this.hass, pl.entity_id, packs) : null;
    return html`<label class="fp3d-field fp3d-wide" title=${this.t("camera_model_hint")}
      >${this.t("camera_model")}
      <select
        ?disabled=${!this.isEditor}
        @change=${(e: Event) => {
          const v = (e.target as HTMLSelectElement).value;
          this.change((_, f) => setCameraLook(f, pl.entity_id, v || null));
        }}
      >
        <option value="" ?selected=${!look}>${this.t("camera_look_builtin")}</option>
        ${look && !models.some((m) => m.type === look) ? html`<option value=${look} selected>${furnitureName(this.hass, look)}</option>` : nothing}
        ${models.map((m) => html`<option value=${m.type} ?selected=${m.type === look}>${m.type === found ? this.t("camera_model_found", { name: m.label }) : m.label}</option>`)}
      </select></label
    >`;
  }

  renderAsFurniture(pl: Placement) {
    if (!this.isEditor) return nothing;
    const options = this.furnitureFor(pl.entity_id);
    if (!options.length) return nothing;
    // a camera with a look of its own can go back to the built-in camera model
    const look = pl.entity_id.startsWith("camera.") ? this.floor?.furniture.find((m) => m.look_of === pl.entity_id) : undefined;
    return html`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${(e: Event) => {
          const v = (e.target as HTMLSelectElement).value;
          if (v === "__builtin") this.change((_, f) => (f.furniture = f.furniture.filter((m) => m.look_of !== pl.entity_id)));
          else if (v) this.deviceToFurniture(pl, v);
        }}
      >
        <option value="" selected>${look ? furnitureName(this.hass, look.type) : this.t("as_furniture_pick")}</option>
        ${look ? html`<option value="__builtin">${this.t("camera_look_builtin")}</option>` : nothing}
        ${options.map((o) => html`<option value=${o.type}>${o.label}</option>`)}
      </select></label
    >`;
  }

  /**
   * A library card was chosen (#76): it waits for a click on the plan, which places it there ("Place in the
   * middle" keeps the old way). Its recipe is fetched meanwhile (#44), so it shows as itself at once.
   */
  addFurniture(type: string, mirror = false): void {
    if (!this.hass || !this.isEditor) return;
    this._placing = { type, mirror };
    this._placeAt = null;
    void ensureRecipes(this.hass, [type]);
  }

  /** The armed card placed at a plan point (or in the room's middle without one); Shift keeps it armed. */
  placeArmed(at: Vec2 | null, keep = false): void {
    const p = this._placing;
    if (!p || !this.hass) return;
    if (!keep) {
      this._placing = null;
      this._placeAt = null;
    }
    this.showGuides([]);
    void ensureRecipes(this.hass, [p.type]).then(() => this.placeFurniture(p.type, p.mirror, at));
  }

  placeArmedInMiddle(): void {
    this.placeArmed(null);
  }

  cancelPlacing(): void {
    this._placing = null;
    this._placeAt = null;
    this.showGuides([]);
  }

  /** A plan point for the armed card: on a room's centre lines or in line with other items (#143), else on the grid; Alt places freely. */
  placePoint(world: Vec2, free: boolean): Vec2 {
    const g = this._doc.settings.grid;
    const grid = (v: number) => (free || !g ? round(v) : round(Math.round(v / g) * g));
    const p = this._placing;
    const floor = this.floor;
    if (free || !p || !floor) {
      this.showGuides([]);
      return [grid(world[0]), grid(world[1])];
    }
    const [w, d] = furnitureSize(p.type);
    // the lines are gathered again only when the plan changed
    if (this.placeLines?.floor !== floor) this.placeLines = { floor, lines: this.alignLinesFor(floor, null) };
    const s = snapPoint(world, [w / 2, d / 2], this.placeLines.lines, snapTolerance(this._view.scale));
    this.showGuides(s.guides);
    return [s.x ? round(s.p[0]) : grid(world[0]), s.z ? round(s.p[1]) : grid(world[1])];
  }

  /** Alignment lines on a floor (#143): every item's edges and centre (but `skip`'s) and the rooms' centre lines. */
  alignLinesFor(floor: Floor, skip: string | null): AlignLines {
    const boxes: Box[] = [];
    for (const m of floor.furniture) if (m.id !== skip) boxes.push(itemBox(m));
    return alignLines(boxes, floor.rooms);
  }

  /**
   * offsetOnEdge with the snap guides (#143): the wall's middle and ends, equal gaps to the other doors and windows on
   * it, set distances from a corner; else the grid. Alt (`free`): by the centimetre, no guides.
   */
  snapOnEdge(room: Room, edge: number, world: Vec2, width: number, peers: readonly Span[], free: boolean): number {
    if (!free) {
      const a = room.points[edge];
      const b = room.points[(edge + 1) % room.points.length];
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
      const t = ((world[0] - a[0]) * (b[0] - a[0]) + (world[1] - a[1]) * (b[1] - a[1])) / len;
      const snap = snapOnWall(t, width, len, peers, snapTolerance(this._view.scale));
      if (snap) {
        const offset = this.clampOffset(room, edge, width, round(snap.offset));
        if (Math.abs(offset - snap.offset) < 0.002) {
          this.showGuides(wallGuides(a, b, snap, 14 / this._view.scale));
          return offset;
        }
      }
    }
    this.showGuides([]);
    return this.offsetOnEdge(room, edge, world, width, free);
  }

  /** The guides shown on the plan (#143), labelled in the plan's unit ("mid", "= 0.60 m"); none: nothing drawn. */
  showGuides(guides: readonly Guide[]): void {
    if (!guides.length) {
      if (this._guides.lines) this._guides = {};
      return;
    }
    this._guides = {
      lines: guides.map((q) => ({ a: q.a, b: q.b, label: this.t(`snap_${q.kind}` as I18nKey, q.value !== undefined ? { d: this.m(q.value) } : undefined) })),
    };
  }

  placeFurniture(type: string, mirror: boolean, at: Vec2 | null = null): void {
    const floor = this.floor;
    if (!floor || !this.isEditor) return;
    // placed by a click (#76): into the room under the point
    if (at) this._roomId = this.roomAt(at) ?? this._roomId;
    const [w, d, h0] = furnitureSize(type);
    // stairs reach up to the next floor
    const above = this._doc.floors.filter((f) => f.elevation > floor.elevation).sort((p, q) => p.elevation - q.elevation)[0];
    const h = STAIR_TYPES.has(type) ? round(above ? above.elevation - floor.elevation : floor.height + 0.25) : h0;
    const room = this.room;
    const [x, z] = at ?? (room ? centroid(room.points) : this.toWorld(this._size.w / 2, this._size.h / 2));
    let rotation = 0;
    if (type === "parking" && room) {
      // a parking spot runs into the room from its garage door, else along the room's longer side
      const gate = floor.openings.find((o) => o.room_id === room.id && o.type === "garage");
      const a = gate ? room.points[gate.edge] : null;
      const c = gate ? room.points[(gate.edge + 1) % room.points.length] : null;
      const b = bounds(room.points);
      rotation = (a && c ? Math.abs(c[1] - a[1]) > Math.abs(c[0] - a[0]) : b.x1 - b.x0 > b.z1 - b.z0) ? 90 : 0;
    }
    const item: Furniture = { id: uid("furniture"), type, x: round(x), z: round(z), rotation, w, d, h, variant: null, ...(mirror ? { mirror: true } : {}) };
    this.change((_, f) => f.furniture.push(item));
    this.selectItem("furniture", item.id);
    // small items are easy to lose in a large plan: bring the new one into view
    this.showPoint(item.x, item.z);
  }

  /**
   * Snap a furniture item against the nearest wall of its room: back to the wall (or a side, when it
   * stands sideways), flush with the wall face. Null when no wall is close enough.
   */
  snapToWall(f: Furniture): { x: number; z: number; rotation: number } | null {
    return this.floor ? snapToWall(this.floor, f, this._doc.settings.wall_interior) : null;
  }

  /** Straight stairs: open treads, a turn or landing at the bottom, a flat top and a start height (#16). */
  renderStairOptions(f: Furniture) {
    const admin = this.isEditor;
    const limits = stairLimits(f);
    const apply = (change: Parameters<typeof stairOptionPatch>[1]) => this.updateFurniture(stairOptionPatch(f, change));
    return html`<div class="fp3d-form">
      <label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${!!f.stair_open} ?disabled=${!admin} @change=${(e: Event) => apply({ stair_open: (e.target as HTMLInputElement).checked })} />
        ${this.t("stair_open")}</label
      >
      <label class="fp3d-field fp3d-wide" title=${this.t("stair_turn_hint")}
        >${this.t("stair_turn")}
        <select ?disabled=${!admin || !limits.canTurn} @change=${(e: Event) => apply({ stair_turn: ((e.target as HTMLSelectElement).value || null) as "left" | "right" | null })}>
          ${(["", "left", "right"] as const).map((v) => html`<option value=${v} ?selected=${(f.stair_turn ?? "") === v}>${this.t(`stair_turn_${v || "none"}` as I18nKey)}</option>`)}
        </select></label
      >
      <span title=${this.t("stair_landing_hint")}>${this.num(this.t("stair_landing"), f.stair_landing ?? 0, (v) => apply({ stair_landing: v }), 1, 0)}</span>
      <span title=${this.t("stair_top_hint")}>${this.len(this.t("stair_top"), f.stair_top ?? 0, (v) => apply({ stair_top: v }), 0.05, 0)}</span>
      ${this.len(this.t("stair_start"), f.mount_y ?? 0, (v) => this.updateFurniture({ mount_y: Math.round(Math.min(MAX_MOUNT_Y, Math.max(0, v)) * 1000) / 1000 || null }), 0.05, 0)}
    </div>`;
  }

  /** The tapped point becomes the selected bin's kerb spot (#142). */
  setKerb(world: Vec2): void {
    this._kerbPick = false;
    if (!this.isEditor) return;
    this.updateFurniture({ bin_kerb: { x: Math.round(world[0] * 100) / 100, z: Math.round(world[1] * 100) / 100 } });
  }

  /** The selected bin's kerb spot (#142): a dashed line from the bin to a ring on the spot. */
  renderKerb(floor: Floor) {
    const f = this._furnitureId ? floor.furniture.find((x) => x.id === this._furnitureId) : undefined;
    const k = f?.type === "waste_bin" ? f.bin_kerb : null;
    if (!f || !k) return nothing;
    const [ax, ay] = this.toScreen([f.x, f.z]);
    const [bx, by] = this.toScreen([k.x, k.z]);
    return svg`<g pointer-events="none" class="fp3d-kerb">
      <line x1=${ax} y1=${ay} x2=${bx} y2=${by} />
      <circle cx=${bx} cy=${by} r="8" />
    </g>`;
  }

  updateFurniture(patch: Partial<Furniture>): void {
    const id = this._furnitureId;
    // a field may report its change after the item was deselected or the floor changed (on blur): then nothing to do
    if (!id || !this.floor?.furniture.some((f) => f.id === id)) return;
    this.change((_, floor) => {
      const item = floor.furniture.find((f) => f.id === id);
      if (item) Object.assign(item, patch);
    });
  }

  /** Another type from the item panel (#132): with the new type's size unless the item was resized by hand. */
  retypeFurniture(type: string): void {
    const f = this.furnitureItem;
    if (f) this.updateFurniture(retypePatch(f, type));
  }

  mirrorFurniture(): void {
    const f = this.furnitureItem;
    if (!f || !this.isEditor) return;
    this.updateFurniture({ mirror: !f.mirror });
  }

  rotateFurniture(delta: number): void {
    const f = this.furnitureItem;
    if (!f || !this.isEditor) return;
    const set = this.selection();
    if (set.length > 1) return this.rotateSelection(delta);
    this.updateFurniture({ rotation: (((f.rotation + delta) % 360) + 360) % 360 });
  }

  async deleteFurniture(): Promise<void> {
    const id = this._furnitureId;
    if (!id || !this.isEditor) return;
    const set = this.selection();
    if (set.length > 1) {
      const fixed = set.some((x) => this.isFixedItem("furniture", x));
      if (!(await this.ask(this.t(fixed ? "block_delete_fixed" : "block_delete", { n: set.length })))) return;
      const ids = new Set(set);
      this.change((_, floor) => (floor.furniture = floor.furniture.filter((f) => !ids.has(f.id))));
      this.selectItem("room", this._roomId);
      return;
    }
    if (!(await this.confirmFixedDelete("furniture", id))) return;
    this.change((_, floor) => (floor.furniture = floor.furniture.filter((f) => f.id !== id)));
    this._furnitureId = null;
  }

  duplicateFurniture(): void {
    const f = this.furnitureItem;
    if (!f || !this.isEditor) return;
    const set = this.selection();
    if (set.length > 1) {
      // the copy of a block is a block of its own
      const items = this.floor!.furniture.filter((m) => set.includes(m.id));
      const blocks = new Map<string, string>();
      const copies = items.map((m) => ({ ...structuredClone(m), id: uid("furniture"), x: round(m.x + 0.3), z: round(m.z + 0.3), group: m.group ? (blocks.get(m.group) ?? blocks.set(m.group, uid("block")).get(m.group)!) : null, locked: null }));
      this.change((_, floor) => floor.furniture.push(...copies));
      this.setMulti(copies.map((c) => c.id));
      return;
    }
    const copy = { ...structuredClone(f), id: uid("furniture"), x: round(f.x + 0.3), z: round(f.z + 0.3), group: this._single ? f.group : null };
    this.change((_, floor) => floor.furniture.push(copy));
    this.selectItem("furniture", copy.id);
  }

  /**
   * The item panel's floor dropdown (#73): the chosen item (its block, the multi selection) goes to another floor
   * with its links, in one undo step, and the editor follows it there, still chosen. Fixed items stay put.
   */
  moveSelectionToFloor(to: string): void {
    const from = this._floorId;
    const ids = this._furnitureId ? this.selection() : [];
    if (!from || to === from || !ids.length || !this.isEditor) return;
    if (ids.some((id) => this.isFixedItem("furniture", id))) {
      this._fixedHint = true;
      return;
    }
    const [first, multi, single] = [this._furnitureId!, this._multi.length > 1, this._single];
    let moved: string[] = [];
    this.change((doc) => (moved = moveToFloor(doc, from, ids, to)));
    if (!moved.length) return;
    this._floorId = to;
    this._vertex = null;
    this._draft = [];
    if (multi) this.setMulti(moved);
    else this.selectItem("furniture", first);
    this._single = single;
    const item = this.furnitureItem;
    this._roomId = item ? this.roomAt([item.x, item.z]) : null;
  }

  /** Ctrl+C (#74): the chosen items (block, multi selection) go to the editor's clipboard; false when none is chosen. */
  copySelection(): boolean {
    const floor = this.floor;
    const clip = floor && this._furnitureId ? copyItems(floor, this.selection()) : null;
    if (!clip) return false;
    clipboard = clip;
    this.requestUpdate();
    return true;
  }

  /** Ctrl+V (#74): copies of the clipboard's items on the floor being edited, chosen; false with nothing to paste. */
  pasteClipboard(): boolean {
    const floor = this.floor;
    if (!clipboard || !floor || !this.isEditor) return false;
    const copies = pasteItems(clipboard, floor.id, uid);
    this.change((_, f) => f.furniture.push(...copies));
    this.setMulti(copies.map((c) => c.id));
    const first = this.furnitureItem;
    if (first) this._roomId = this.roomAt([first.x, first.z]) ?? this._roomId;
    return true;
  }

  /** Ctrl+A (#74): every item on the floor; false when it has none. */
  selectAll(): boolean {
    const items = this.floor?.furniture ?? [];
    if (!items.length) return false;
    this.setMulti(items.map((m) => m.id));
    return true;
  }

  /** Duplicate, copy and (with something copied) paste, each with its shortcut in the tooltip (#74). */
  renderClipButtons() {
    return html`<button class="fp3d-btn" title=${withKeys(this.t("duplicate"), ["Ctrl+D"])} @click=${() => this.duplicateFurniture()}>${this.t("duplicate")}</button>
      <button class="fp3d-btn" title=${withKeys(this.t("help_key_copy"), ["Ctrl+C"])} @click=${() => this.copySelection()}>${this.t("copy_items")}</button>
      ${this.renderPasteButton()}`;
  }

  /** "Paste (n)" while the clipboard holds items (#74): pastes them on this floor. */
  renderPasteButton() {
    if (!clipboard || !this.isEditor) return nothing;
    return html`<button class="fp3d-btn" title=${withKeys(this.t("help_key_paste"), ["Ctrl+V"])} @click=${() => this.pasteClipboard()}>${this.t("paste_items_n", { n: clipboard.items.length })}</button>`;
  }

  // ------------------------------------------------------------------ furniture blocks and multi selection

  /** The furniture moved together: the multi selection, else the selected item's block (unless one part is edited alone), else the item. */
  selection(): string[] {
    if (this._multi.length) return this._multi;
    const f = this.furnitureItem;
    if (!f) return [];
    if (f.group && !this._single) return (this.floor?.furniture ?? []).filter((m) => m.group === f.group).map((m) => m.id);
    return [f.id];
  }

  /** Ids with every other part of their blocks. */
  withGroups(ids: string[]): string[] {
    const groups = new Set((this.floor?.furniture ?? []).filter((m) => ids.includes(m.id) && m.group).map((m) => m.group));
    return [...new Set([...ids, ...(this.floor?.furniture ?? []).filter((m) => m.group && groups.has(m.group)).map((m) => m.id)])];
  }

  setMulti(ids: string[]): void {
    if (!ids.length) return this.selectItem("room", this._roomId);
    this.selectItem("furniture", ids[0]);
    // one item (or exactly one block) needs no multi selection
    const block = this.selection();
    if (ids.length > 1 && !(ids.length === block.length && ids.every((id) => block.includes(id)))) this._multi = ids;
  }

  /** Shift-click: an item (with its block) joins the selection or leaves it. */
  toggleMulti(id: string): void {
    const cur = this._furnitureId ? this.selection() : [];
    const part = this.withGroups([id]);
    const next = cur.includes(id) ? cur.filter((x) => !part.includes(x)) : [...new Set([...cur, ...part])];
    this.setMulti(next);
  }

  /** The selection's centre (middle of its items' extent). */
  selectionCentre(ids: string[]): Vec2 {
    const items = (this.floor?.furniture ?? []).filter((m) => ids.includes(m.id));
    const xs = items.map((m) => m.x);
    const zs = items.map((m) => m.z);
    return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...zs) + Math.max(...zs)) / 2];
  }

  /** Turns the whole selection about its centre (positions and each item's own turn). */
  rotateSelection(delta: number): void {
    const set = this.selection();
    if (set.some((id) => this.isFixedItem("furniture", id))) {
      this._fixedHint = true;
      return;
    }
    const [cx, cz] = this.selectionCentre(set);
    const a = (delta * Math.PI) / 180;
    const c = Math.round(Math.cos(a) * 1e6) / 1e6;
    const s = Math.round(Math.sin(a) * 1e6) / 1e6;
    const ids = new Set(set);
    this.change((_, floor) => {
      for (const m of floor.furniture) {
        if (!ids.has(m.id)) continue;
        const dx = m.x - cx;
        const dz = m.z - cz;
        // the plan turns clockwise for a positive angle (x right, z down)
        Object.assign(m, { x: round(cx + dx * c - dz * s), z: round(cz + dx * s + dz * c), rotation: (((m.rotation + delta) % 360) + 360) % 360 });
      }
    });
  }

  /** "Als Block zusammenfassen": the selection becomes one block. */
  groupSelection(): void {
    const ids = new Set(this.selection());
    if (ids.size < 2) return;
    const gid = uid("block");
    this.change((_, floor) => {
      for (const m of floor.furniture) if (ids.has(m.id)) m.group = gid;
    });
    this._multi = [];
    this._single = false;
  }

  /** "Block auflösen": every part on its own again (the parts stay selected). */
  ungroupSelection(): void {
    const set = this.selection();
    const ids = new Set(set);
    this.change((_, floor) => {
      for (const m of floor.furniture) if (ids.has(m.id)) m.group = null;
    });
    if (set.length > 1) this._multi = set;
  }

  lockSelection(on: boolean): void {
    const ids = new Set(this.selection());
    this.change((_, floor) => {
      for (const m of floor.furniture) if (ids.has(m.id)) m.locked = on || null;
    });
  }

  /** Place entities in the selected room; an entity already placed elsewhere moves here. */
  placeDevices(entityIds: string[], zone?: Room, floorId?: string): void {
    const room = zone ?? this.room;
    if (!room || !entityIds.length || !this.isEditor) return;
    const ids = new Set(entityIds);
    this.change((doc, current) => {
      // the room's own floor (the unplaced list places into any floor's room, #83)
      const floor = (floorId && doc.floors.find((f) => f.id === floorId)) || current;
      for (const f of doc.floors) {
        f.placements = f.placements.filter((pl) => !ids.has(pl.entity_id));
        f.furniture = f.furniture.filter((m) => !(isLamp(m.type) && m.entity && ids.has(m.entity)));
      }
      const taken = [...floor.placements.map((pl) => [pl.x, pl.z] as Vec2), ...floor.furniture.filter((m) => isLamp(m.type)).map((m) => [m.x, m.z] as Vec2)];
      for (const pl of autoPlace(room, entityIds, taken)) {
        // outside (an outdoor area acting as a room) a light stays a pin: no ceiling lamp over the lawn
        if (!pl.entity_id.startsWith("light.") || room.outdoor) {
          floor.placements.push(pl);
          // a camera whose device names a known model gets that shape right away (#9); changed by hand any time
          const model = pl.entity_id.startsWith("camera.") && this.hass ? detectCameraModel(this.hass, pl.entity_id, this.packs ?? []) : null;
          if (model) setCameraLook(floor, pl.entity_id, model);
          continue;
        }
        // a light becomes a ceiling lamp that is tapped directly in 3D
        const [w, d, h] = FURNITURE_SIZE.lamp_ceiling;
        floor.furniture.push({ id: uid("furniture"), type: "lamp_ceiling", x: pl.x, z: pl.z, rotation: 0, w, d, h, variant: null, entity: pl.entity_id, power: null });
      }
    });
  }

  /** Drag an unplaced entity from the side bar onto the plan (#83). */
  onPlanDragOver = (e: DragEvent): void => {
    if (this.isEditor && this.floor && e.dataTransfer?.types.includes(ENTITY_DRAG)) {
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    }
  };

  /** Dropped on the plan: the entity is placed at that point (a light in a room as a ceiling lamp, like Place). */
  onPlanDrop = (e: DragEvent): void => {
    const id = e.dataTransfer?.getData(ENTITY_DRAG);
    const svg = this.renderRoot.querySelector("svg.fp3d-plan");
    if (!id || !svg || !this.isEditor || !this.floor) return;
    e.preventDefault();
    const rect = svg.getBoundingClientRect();
    const [x, z] = this.toWorld(e.clientX - rect.left, e.clientY - rect.top);
    const roomId = this.roomAt([x, z]);
    const room = this.floor.rooms.find((r) => r.id === roomId);
    this.change((doc, floor) => {
      for (const f of doc.floors) {
        f.placements = f.placements.filter((pl) => pl.entity_id !== id);
        f.furniture = f.furniture.filter((m) => !(isLamp(m.type) && m.entity === id));
      }
      const at = { x: round(x), z: round(z) };
      if (id.startsWith("light.") && room && !room.outdoor) {
        const [w, d, h] = FURNITURE_SIZE.lamp_ceiling;
        floor.furniture.push({ id: uid("furniture"), type: "lamp_ceiling", ...at, rotation: 0, w, d, h, variant: null, entity: id, power: null });
        return;
      }
      floor.placements.push({ entity_id: id, ...at, y: null, mount: null });
      const model = id.startsWith("camera.") && this.hass ? detectCameraModel(this.hass, id, this.packs ?? []) : null;
      if (model) setCameraLook(floor, id, model);
    });
  };

  /** Link a suggested item to an unplaced entity in one tap (#83). */
  acceptLink(entityId: string, s: LinkSuggestion): void {
    this.change((doc) => {
      const f = doc.floors.find((fl) => fl.id === s.floorId)?.furniture.find((m) => m.id === s.furnitureId);
      if (f) f.entity = entityId;
    });
  }

  setUnplacedHidden(entityId: string, on: boolean): void {
    this.change((doc) => {
      doc.settings.unplaced_hidden = setUnplacedHidden(doc.settings, entityId, on);
    });
  }

  /**
   * "Unplaced entities" (#83): the devices of each HA area the plan does not show yet. Place puts one into the
   * area's room (or drag it onto the plan), a suggested item is linked in one tap, Hide moves it to the Hidden view.
   * Computed only while open: it walks every area.
   */
  renderUnplaced() {
    const hass = this.hass;
    if (!hass || !this.isEditor || !hass.areas) return nothing;
    const b = this._doc;
    const open = this._unplacedOpen;
    const hiddenN = (b.settings.unplaced_hidden ?? []).length;
    const icon = (id: string) =>
      html`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${iconPath(kindOf(id) ?? "sensor")} /></svg>`;
    const body = () => {
      if (this._unplacedHiddenView) {
        const hidden = hiddenUnplaced(hass, b);
        return html`<button class="fp3d-link" @click=${() => (this._unplacedHiddenView = false)}>← ${this.t("unplaced_back")}</button>
          ${hidden.length
            ? html`<div class="fp3d-room-list">
                ${hidden.map(
                  (h) => html`<div class="fp3d-row fp3d-dev-row">
                    <span class="fp3d-dev-name">${icon(h.id)}<span>${entityName(hass, h.id)}${h.area ? html`<small class="fp3d-muted"> · ${h.area}</small>` : nothing}</span></span>
                    <button class="fp3d-link" @click=${() => this.setUnplacedHidden(h.id, false)}>${this.t("unplaced_unhide")}</button>
                  </div>`,
                )}
              </div>`
            : html`<p class="fp3d-sub">${this.t("unplaced_hidden_none")}</p>`}`;
      }
      const links = furnitureEntities(hass, b.floors);
      const linked = [...links.values()].flatMap((l) => [l.entity, l.power]).filter((v): v is string => !!v);
      const here = this._floorId;
      // the areas of this floor's rooms first
      const areas = unplacedByArea(hass, b, { linked }).sort((x, y) => Number(y.floorId === here) - Number(x.floorId === here));
      const suggested = suggestLinks(hass, b, areas, links);
      const itemName = (s: LinkSuggestion) => {
        const f = b.floors.find((fl) => fl.id === s.floorId)?.furniture.find((m) => m.id === s.furnitureId);
        return f ? f.name || furnitureName(hass, f.type) : "";
      };
      const LIMIT = 80;
      let shown = 0;
      const total = areas.reduce((n, a) => n + a.ids.length, 0);
      return html`<p class="fp3d-sub">${this.t("unplaced_hint")}</p>
        ${areas.length
          ? html`<div class="fp3d-room-list">
                ${areas.map((a) => {
                  const take = a.ids.slice(0, Math.max(0, LIMIT - shown));
                  shown += take.length;
                  if (!take.length) return nothing;
                  const floor = b.floors.find((f) => f.id === a.floorId);
                  const room = floor?.rooms.find((r) => r.id === a.roomId);
                  return html`<div class="fp3d-dev-area">${a.name}${room ? nothing : html`<small class="fp3d-muted"> · ${this.t("unplaced_no_room")}</small>`}</div>
                    ${take.map((id) => {
                      const s = suggested.get(id);
                      return html`<div
                        class="fp3d-row fp3d-dev-row fp3d-unplaced-row"
                        draggable="true"
                        title=${this.t("unplaced_drag")}
                        @dragstart=${(e: DragEvent) => {
                          e.dataTransfer?.setData(ENTITY_DRAG, id);
                          if (e.dataTransfer) e.dataTransfer.effectAllowed = "copy";
                        }}
                      >
                        <span class="fp3d-dev-name">${icon(id)}<span>${entityName(hass, id, a.name)}</span></span>
                        ${s ? html`<button class="fp3d-link fp3d-suggest" @click=${() => this.acceptLink(id, s)}>${this.t("unplaced_link", { name: itemName(s) })}</button>` : nothing}
                        ${room && floor ? html`<button class="fp3d-link" @click=${() => this.placeDevices([id], room, floor.id)}>${this.t("devices_place")}</button>` : nothing}
                        <button class="fp3d-pin" title=${this.t("unplaced_hide")} aria-label=${this.t("unplaced_hide")} @click=${() => this.setUnplacedHidden(id, true)}>🙈</button>
                      </div>`;
                    })}`;
                })}
              </div>
              ${total > shown ? html`<p class="fp3d-sub">${this.t("devices_narrow", { n: total - shown })}</p>` : nothing}`
          : html`<p class="fp3d-sub">${this.t("unplaced_none")}</p>`}
        ${hiddenN ? html`<button class="fp3d-link" @click=${() => (this._unplacedHiddenView = true)}>${this.t("unplaced_hidden", { n: hiddenN })}</button>` : nothing}`;
    };
    return html`<section>
      <details class="fp3d-points fp3d-unplaced" ?open=${open} @toggle=${(e: Event) => (this._unplacedOpen = (e.target as HTMLDetailsElement).open)}>
        <summary>${this.t("unplaced")}</summary>
        ${open ? body() : nothing}
      </details>
    </section>`;
  }

  get device(): Placement | undefined {
    return this._deviceId ? this.floor?.placements.find((p) => p.entity_id === this._deviceId) : undefined;
  }

  updateDevice(patch: Partial<Placement>): void {
    const id = this._deviceId;
    this.change((_, floor) => patchItem(floor.placements.find((p) => p.entity_id === id), patch));
  }

  /** Move the selected device to the middle of its room. */
  centreDevice(): void {
    const pl = this.device;
    const roomId = pl ? this.roomAt([pl.x, pl.z]) : null;
    const room = this.floor?.rooms.find((r) => r.id === roomId);
    if (!pl || !room) return;
    const [x, z] = centroid(room.points);
    this.updateDevice({ x: round(x), z: round(z) });
  }

  /** Spread the room's ceiling lights evenly over it (grid of cells, one light per cell). */
  spreadCeilingLights(room: Room): void {
    const floor = this.floor;
    if (!floor) return;
    const lights = floor.placements.filter(
      (p) => kindOf(p.entity_id) === "light" && (p.mount ?? "ceiling") === "ceiling" && pointInPolygon([p.x, p.z], room.points),
    );
    if (lights.length < 2) return;
    const b = bounds(room.points);
    const w = b.x1 - b.x0;
    const d = b.z1 - b.z0;
    const cols = Math.max(1, Math.round(Math.sqrt((lights.length * w) / Math.max(0.1, d))));
    const rows = Math.ceil(lights.length / cols);
    const spots = lights.map((_, i) => {
      const r = Math.floor(i / cols);
      // a last row that is not full is spread over the whole width as well
      const inRow = r === rows - 1 ? lights.length - cols * (rows - 1) : cols;
      const c = i - r * cols;
      return [round(b.x0 + (w / inRow) * (c + 0.5)), round(b.z0 + (d / rows) * (r + 0.5))] as Vec2;
    });
    const ids = lights.map((l) => l.entity_id);
    this.change((_, f) => {
      ids.forEach((id, i) => patchItem(f.placements.find((p) => p.entity_id === id), { x: spots[i][0], z: spots[i][1] }));
    });
  }

  /** Straighten edges that are almost along an axis (a corner a centimetre off makes slanted walls in 3D, #333). */
  straightenFloor(): void {
    const floor = this.floor;
    if (!floor || !this.isEditor) return;
    const { rooms, fixed } = straightenEdges(floor.rooms);
    if (!fixed) {
      this._notice = this.t("straighten_none");
      return;
    }
    this.change((_, f) => (f.rooms = rooms));
    this._notice = this.t("straighten_done", { n: fixed });
  }

  /** Close gaps between rooms of this floor and take the gap as interior wall thickness. */
  closeFloorGaps(): void {
    const floor = this.floor;
    if (!floor || !this.isEditor) return;
    const { rooms, gaps } = closeGaps(floor.rooms);
    if (!gaps.length) {
      this._notice = this.t("gaps_none");
      return;
    }
    const thickness = suggestedThickness(gaps);
    this.change((doc, f) => {
      f.rooms = rooms;
      if (thickness) doc.settings.wall_interior = thickness;
    });
    this._notice = thickness
      ? this.t("gaps_closed_wall", { n: gaps.length, t: formatNumber(this.hass, thickness, 2) })
      : this.t("gaps_closed", { n: gaps.length });
  }

  removeDevice(entityId: string): void {
    this.change((doc) => {
      for (const f of doc.floors) {
        f.placements = f.placements.filter((pl) => pl.entity_id !== entityId);
        f.furniture = f.furniture.filter((m) => !(isLamp(m.type) && m.entity === entityId));
      }
    });
  }

  deleteVertex(index: number): void {
    const room = this.room;
    if (!room || room.points.length <= 3) return;
    const base = this._doc;
    // the edges at the corner become one; splits, part heights and openings are remapped with it (#157)
    this.change((_, floor) => removeCorner(floor, room.id, index));
    this.noteResize(room.id, base);
    this._vertex = null;
  }

  /** Move everything on the floor (or with "all floors" the whole house) by (dx, dz): every plan coordinate, see plan-transform.ts (#156). */
  shiftFloor(dx: number, dz: number): void {
    if (!this.isEditor || (!dx && !dz)) return;
    const all = this._shiftAll;
    this.change((doc, floor) => transformPlan(doc, all ? null : [floor.id], shiftBy(dx, dz)));
    this._shiftX = 0;
    this._shiftZ = 0;
  }

  /** Turn everything on the floor by 90° (clockwise in the plan) about the middle of its rooms: when a floor was drawn the wrong way round. */
  turnFloor(): void {
    const floor = this.floor;
    if (!floor || !this.isEditor) return;
    // with "all floors" the house turns about the middle of every room on every floor
    const all = this._shiftAll;
    const pts = (all ? this._doc.floors : [floor]).flatMap((f) => f.rooms.flatMap((r) => r.points));
    if (!pts.length) return;
    const xs = pts.map((p) => p[0]);
    const zs = pts.map((p) => p[1]);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cz = (Math.min(...zs) + Math.max(...zs)) / 2;
    this.change((doc, f) => transformPlan(doc, all ? null : [f.id], turnAbout(cx, cz)));
  }

  updateFloor(patch: Partial<Floor>): void {
    this.change((_, floor) => Object.assign(floor, patch));
  }

  updateRoom(patch: Partial<Room>): void {
    const id = this._roomId;
    this.change((_, floor) => patchItem(floor.rooms.find((r) => r.id === id), patch));
  }

  setArea(areaId: string): void {
    const room = this.room;
    if (!room) return;
    const area = areaId ? this.hass?.areas?.[areaId] : undefined;
    const generic = !room.name || /^(Raum|Room) \d+$/.test(room.name) || Object.values(this.hass?.areas ?? {}).some((a) => a.name === room.name);
    this.updateRoom({ area_id: areaId || null, ...(area && generic ? { name: area.name } : {}) });
  }

  setRect(field: "x" | "z" | "w" | "d", value: number): void {
    const room = this.room;
    if (!room || !Number.isFinite(value)) return;
    const b = bounds(room.points);
    let { x0, z0, x1, z1 } = b;
    if (field === "x") [x0, x1] = [value, value + (x1 - x0)];
    if (field === "z") [z0, z1] = [value, value + (z1 - z0)];
    if (field === "w" && value > 0.05) x1 = x0 + value;
    if (field === "d" && value > 0.05) z1 = z0 + value;
    const points: Vec2[] = [[round(x0), round(z0)], [round(x1), round(z0)], [round(x1), round(z1)], [round(x0), round(z1)]];
    // a rectangle carries its contents and shared walls along (#64); "Outline only" swaps in the plain edit
    const base = this._doc;
    const floorId = this._floorId;
    const outline = structuredClone(base);
    const plain = outline.floors.find((f) => f.id === floorId)?.rooms.find((r) => r.id === room.id);
    if (plain) plain.points = points;
    let carried: ReturnType<typeof carryRectResize> = null;
    this.change((_, floor) => {
      carried = carryRectResize(floor, room.id, points);
      if (!carried) floor.rooms.find((r) => r.id === room.id)!.points = points;
    });
    this.noteResize(room.id, base, carried, outline);
  }

  /** The note of the last outline edit, while the document is still the one it describes. */
  resizeNote(): ResizeNote | null {
    const n = this._resize;
    return n && n.doc === this._doc ? n : null;
  }

  /** After an outline edit of `roomId` (`base` = the document before it): remember what moved and what it left outside. */
  noteResize(roomId: string, base: Building, carried: ResizeNote["carried"] = null, outline: Building | null = null): void {
    // the previous note still holds if it described the document this edit started from
    const prev = this._resize?.doc === base ? this._resize : null;
    const floor = this.floor;
    const room = floor?.rooms.find((r) => r.id === roomId);
    // a run of edits on the same room counts from the outline before the first one
    const before = prev?.roomId === roomId ? prev.before : base.floors.find((f) => f.id === this._floorId)?.rooms.find((r) => r.id === roomId)?.points;
    this._resize = floor && room && before ? { roomId, before, doc: this._doc, base, carried, outline, stranded: strandedBy(floor, before, room.points) } : null;
  }

  /** "Outline only": keep the new outline, put the contents and neighbouring walls back (same undo step). */
  outlineOnly(): void {
    const n = this.resizeNote();
    if (!n?.outline) return;
    this.setDoc(structuredClone(n.outline), null);
    this.noteResize(n.roomId, n.base);
  }

  /** Select the items (else the first device) a resize left outside the room. */
  selectStranded(): void {
    const n = this.resizeNote();
    if (!n) return;
    const ids = n.stranded.furniture.filter((id) => this.floor?.furniture.some((m) => m.id === id));
    if (ids.length) this.setMulti(ids);
    else if (n.stranded.devices.length) this.selectItem("device", n.stranded.devices[0]);
  }

  renderResizeNote(room: Room) {
    const n = this.resizeNote();
    if (!n || n.roomId !== room.id || !this.isEditor) return nothing;
    const c = n.carried;
    const moved = n.outline && c ? c.furniture + c.devices + c.walls : 0;
    const out = n.stranded.furniture.length + n.stranded.devices.length;
    if (!moved && !out) return nothing;
    return html`<div class="fp3d-resize-note" role="status">
      ${moved && c
        ? html`<p class="fp3d-sub">${this.t("resize_carried", { n: c.furniture + c.devices, w: c.walls })}</p>
            <div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("resize_outline_only_hint")} @click=${() => this.outlineOnly()}>${this.t("resize_outline_only")}</button>
              <button class="fp3d-btn" @click=${() => this.undo()}>${this.t("undo")}</button>
            </div>`
        : nothing}
      ${out
        ? html`<p class="fp3d-sub">${out === 1 ? this.t("resize_outside_one") : this.t("resize_outside", { n: out })}</p>
            <div class="fp3d-actions"><button class="fp3d-btn" @click=${() => this.selectStranded()}>${this.t("resize_select")}</button></div>`
        : nothing}
    </div>`;
  }

  setPoint(index: number, axis: 0 | 1, value: number): void {
    const room = this.room;
    if (!room || !Number.isFinite(value)) return;
    const points = room.points.map((p) => [...p] as Vec2);
    points[index][axis] = round(value);
    const base = this._doc;
    this.updateRoom({ points });
    this.noteResize(room.id, base);
  }

  async loadImage(imageId: string): Promise<void> {
    this.loadingImages.add(imageId);
    try {
      const url = await fetchImage(this.hass, imageId, this.home);
      const img = new Image();
      img.src = url;
      await img.decode();
      this._images = { ...this._images, [imageId]: { url, aspect: img.naturalHeight / img.naturalWidth } };
    } catch {
      // image missing (e.g. removed): the background stays empty
    }
  }

  async uploadBackground(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file) return;
    const bitmap = await createImageBitmap(file);
    const k = Math.min(1, 2048 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * k);
    canvas.height = Math.round(bitmap.height * k);
    canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const data = canvas.toDataURL("image/jpeg", 0.85);
    const imageId = uid("img");
    await storeImage(this.hass, imageId, data, this.home);
    this._images = { ...this._images, [imageId]: { url: data, aspect: canvas.height / canvas.width } };
    const b = this.floor?.rooms.length ? bounds(this.floor.rooms.flatMap((r) => r.points)) : null;
    this.updateFloor({ background: { image_id: imageId, x: b ? b.x0 : 0, z: b ? b.z0 : 0, width: b ? Math.max(4, round(b.x1 - b.x0)) : 12, opacity: 0.5 } });
  }

  // ------------------------------------------------------------------ rendering

  /** "Later" on the news: gone for this visit of the editor, back the next time. */

  /** Work on another floor (from the floor menu of the toolbar). */
  selectFloor(id: string): void {
    this._floorId = id;
    this._roomId = null;
    this._vertex = null;
    this._draft = [];
    this.fit();
  }

  /**
   * The floor worked on, always at hand at the left of the toolbar whatever the tool: a menu with every floor (top
   * floor first), "New floor" (from a Home Assistant floor or empty) and the floor's settings in the sidebar.
   */
  renderFloorMenu() {
    const floors = this._doc.floors;
    const floor = this.floor;
    const admin = this.isEditor;
    const open = this._toolMenu === "floor";
    const close = () => ((this._toolMenu = null), (this._floorMenu = false));
    return html`<div class="fp3d-seg fp3d-seg-menu fp3d-seg-floor">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${open} @click=${() => ((this._toolMenu = open ? null : "floor"), (this._floorMenu = false), (this._viewMenu = false))}>
          <span class="fp3d-menu-label">${this.t("floor_label")}</span> ${floor?.name ?? this.t("floors")} <span class="fp3d-caret">▾</span>
        </button>
        ${open
          ? html`<div class="fp3d-menu-veil" @click=${close}></div>
              <div class="fp3d-menu" role="menu">
                ${[...floors].reverse().map(
                  (f) => html`<button role="menuitem" class="fp3d-menu-item ${f.id === this._floorId ? "fp3d-menu-on" : ""}" @click=${() => (close(), this.selectFloor(f.id))}>
                    ${f.name}<span class="fp3d-menu-more">${f.id === this._floorId ? "✓" : ""}</span>
                  </button>`,
                )}
                ${admin
                  ? html`<div class="fp3d-menu-sep"></div>
                      <button
                        role="menuitem"
                        class="fp3d-menu-item"
                        aria-expanded=${this.freeHaFloors.length ? this._floorMenu : nothing}
                        @click=${() => (this.freeHaFloors.length ? (this._floorMenu = !this._floorMenu) : (close(), this.addFloor()))}
                      >
                        ${this.t("add_floor")}${this.freeHaFloors.length ? html`<span class="fp3d-menu-more">${this._floorMenu ? "▾" : "▸"}</span>` : nothing}
                      </button>
                      ${this._floorMenu
                        ? html`<div class="fp3d-menu-sub">
                            ${this.freeHaFloors.map((f) => html`<button class="fp3d-chip" @click=${() => (close(), this.addFloor(f))}>${f.name}</button>`)}
                            <button class="fp3d-chip" @click=${() => (close(), this.addFloor())}>${this.t("floor_empty")}</button>
                          </div>`
                        : nothing}
                      ${floor
                        ? html`<button
                            role="menuitem"
                            class="fp3d-menu-item"
                            @click=${() => {
                              close();
                              // the floor's settings are the sidebar's first page: "Select", nothing chosen
                              this.setTool("select");
                              this.selectItem("room", null);
                              this._sideOpen = true;
                            }}
                          >
                            ${this.t("floor_settings")}
                          </button>`
                        : nothing}`
                  : nothing}
              </div>`
          : nothing}
      </div>
    </div>`;
  }

  /**
   * What the Delete key removes: only what the active tool has selected (#158). The roof and energy tools own a roof
   * window, solar field or roof section; nothing else, least of all a room drawn earlier, goes with their Delete.
   * The room is the fallback in the select and furniture tools only.
   */
  deleteSelected(): void {
    if (this._roofWinId && this._tool === "roof") this.deleteRoofWindow();
    else if (this._solarId && this.houseTool) this.deleteSolar();
    else if (this._roofId && this._tool === "roof") this.deleteRoofSection();
    else if (this._deviceId) this.deleteItem("device", this._deviceId);
    else if (this._outdoorId) this.deleteOutdoor();
    else if (this._wallId) this.deleteFreeWall();
    else if (this._openingId) this.deleteOpening();
    else if (this._furnitureId) this.deleteFurniture();
    else if (this._vertex !== null && !this.houseTool) this.deleteVertex(this._vertex);
    else if (this._tool === "select" || this._tool === "furniture") this.deleteRoom();
  }

  /** Let go of everything the last tool had selected (#158); the room stays, except for the roof and energy tools. */
  clearToolSelection(): void {
    this._openingId = null;
    this._furnitureId = null;
    this._deviceId = null;
    this._outdoorId = null;
    this._wallId = null;
    this._vertex = null;
    this._multi = [];
    this._single = false;
    this._roofId = null;
    this._solarId = null;
    this._roofWinId = null;
    this._cableId = null;
    this._solarPick = false;
    this._edgeHi = null;
  }

  /** Switch to a tool (from the tool menu): a fresh drawing, the sidebar for it. */
  setTool(tool: Tool): void {
    const floor = this.floor;
    if (tool !== this._tool) {
      this.clearToolSelection();
      if (tool === "roof" || tool === "energy") this._roomId = null;
    }
    this._tool = tool;
    if (tool !== "select" && tool !== "furniture") this.cancelPlacing();
    this._draft = [];
    this._cursor = null;
    this._notice = null;
    this._rectName = "";
    this._openingNote = null;
    this.openingHoverText = null;
    this._pipeMode = false;
    this._pipeDraft = null;
    // the pool tool works on a pool: the selected one, else the first of the floor
    if (tool === "pool" && this.outdoorArea?.type !== "pool") {
      const first = floor?.outdoor.find((x) => x.type === "pool");
      if (first) this.selectItem("outdoor", first.id);
    }
    // another tool: its sidebar (library, presets, details) unfolds again, even if it was collapsed for the last one
    this.setSideFolded(false);
  }

  /**
   * The toolbar, tidied up: "Select" stays a button; the drawing tools sit in menus by what they are for – "Build"
   * (room, wall, door & window, floor opening, roof), "Outside" (areas, pool) – with "Furniture" and "Energy" as
   * buttons of their own. Tools with choices (room, outdoor, pool) unfold them in the menu; a group's button names the
   * tool in use. Undo and redo stay, the view switches (fit, 3D beside, wall view, lock) are in a view menu.
   */
  renderToolBar(floor: Floor | undefined) {
    const admin = this.isEditor;
    const off = !floor || !admin;
    type Choice = { label: string; on: boolean; pick: () => void };
    type Entry = { tool: Tool; label: string; choices?: () => Choice[] };
    const outdoorTypes = OUTDOOR_TYPES.filter((t) => t !== "pool");
    const room: Entry = {
      tool: "rect",
      label: this.t("tool_room"),
      choices: () => [
        { label: this.t("tool_rect"), on: this._tool === "rect", pick: () => this.setTool("rect") },
        { label: this.t("tool_polygon"), on: this._tool === "polygon", pick: () => this.setTool("polygon") },
        { label: this.t("tool_measure"), on: this._tool === "measure", pick: () => this.setTool("measure") },
      ],
    };
    const outdoor: Entry = {
      tool: "outdoor",
      label: this.t("tool_outdoor"),
      choices: () => [
        ...outdoorTypes.map((t) => ({
          label: this.t(`out_${t}` as I18nKey),
          on: this._tool === "outdoor" && (this._outdoorType ?? "lawn") === t,
          pick: () => {
            this.setTool("outdoor");
            this._outdoorType = t;
          },
        })),
        { label: this.t("outdoor_shape_rect"), on: this._tool === "outdoor" && !this._outdoorFree, pick: () => (this.setTool("outdoor"), (this._outdoorFree = false)) },
        { label: this.t("outdoor_shape_free"), on: this._tool === "outdoor" && this._outdoorFree, pick: () => (this.setTool("outdoor"), (this._outdoorFree = true)) },
      ],
    };
    const pool: Entry = {
      tool: "pool",
      label: this.t("tool_pool"),
      choices: () => [
        ...(["rect", "round", "oval", "free"] as const).map((k) => ({
          label: this.t(`pool_shape_${k}` as I18nKey),
          on: this._tool === "pool" && !this._pipeMode && (this._poolShape ?? "rect") === k,
          pick: () => {
            this.setTool("pool");
            this._poolShape = k;
            this._outdoorFree = k === "free";
          },
        })),
        ...(this.pipeRules ? [{ label: this.t("pool_pipe_draw"), on: this._tool === "pool" && !!this._pipeMode, pick: () => (this.setTool("pool"), (this._pipeMode = true)) }] : []),
      ],
    };
    const groups: { id: string; label: string; entries: Entry[] }[] = [
      {
        id: "build",
        label: this.t("tool_group_build"),
        entries: [room, { tool: "wall", label: this.t("tool_wall") }, { tool: "opening", label: this.t("tool_opening") }, { tool: "hole", label: this.t("tool_hole") }, { tool: "roof", label: this.t("tool_roof") }],
      },
      { id: "outside", label: this.t("tool_group_outside"), entries: [outdoor, pool] },
    ];
    const inEntry = (e: Entry) => e.tool === this._tool || (e === room && (this._tool === "polygon" || this._tool === "measure"));
    // what a group's button says while one of its tools is in use: the tool, and its shape or kind
    const detail = (e: Entry) =>
      e === pool ? (this._pipeMode ? this.t("pool_pipe_draw") : this.t(`pool_shape_${this._poolShape ?? "rect"}` as I18nKey)) : e === outdoor ? this.t(`out_${this._outdoorType ?? "lawn"}` as I18nKey) : e === room ? this.t(`tool_${this._tool}` as I18nKey) : "";
    const close = () => ((this._toolMenu = null), (this._toolOpen = null));
    const plain = (tool: Tool, label: string) =>
      html`<button aria-pressed=${this._tool === tool} ?disabled=${off} @click=${() => (close(), this.setTool(tool))}>${label}</button>`;
    return html`<div class="fp3d-seg fp3d-seg-menu" role="group">
        <button aria-pressed=${this._tool === "select"} ?disabled=${!floor} @click=${() => (close(), this.setTool("select"))}>${this.t("tool_select")}</button>
        ${groups.map((g) => {
          const active = g.entries.find(inEntry);
          const open = this._toolMenu === g.id;
          const text = active ? `${active.label}${detail(active) ? `: ${detail(active)}` : ""}` : g.label;
          return html`<div class="fp3d-menu-wrap">
            <button aria-pressed=${!!active} aria-haspopup="menu" aria-expanded=${open} ?disabled=${off} @click=${() => ((this._toolMenu = open ? null : g.id), (this._toolOpen = null), (this._viewMenu = false))}>
              ${text} <span class="fp3d-caret">▾</span>
            </button>
            ${open
              ? html`<div class="fp3d-menu-veil" @click=${close}></div>
                  <div class="fp3d-menu" role="menu">
                    ${g.entries.map((x) => {
                      const choices = x.choices?.() ?? [];
                      const unfolded = this._toolOpen === x.tool;
                      return html`<button
                          role="menuitem"
                          class="fp3d-menu-item ${inEntry(x) ? "fp3d-menu-on" : ""}"
                          aria-expanded=${choices.length ? unfolded : nothing}
                          @click=${() => {
                            if (choices.length) this._toolOpen = unfolded ? null : x.tool;
                            else {
                              this.setTool(x.tool);
                              close();
                            }
                          }}
                        >
                          ${x.label}${choices.length ? html`<span class="fp3d-menu-more">${unfolded ? "▾" : "▸"}</span>` : nothing}
                        </button>
                        ${unfolded
                          ? html`<div class="fp3d-menu-sub">
                              ${choices.map(
                                (c) =>
                                  html`<button
                                    class="fp3d-chip ${c.on ? "fp3d-menu-on" : ""}"
                                    @click=${() => {
                                      c.pick();
                                      this._draft = [];
                                      close();
                                    }}
                                  >
                                    ${c.label}
                                  </button>`,
                              )}
                            </div>`
                          : nothing}`;
                    })}
                  </div>`
              : nothing}
          </div>`;
        })}
        ${plain("furniture", this.t("tool_furniture"))} ${plain("energy", this.t("tool_energy"))}
      </div>
      <!-- Wall view is a mode: beside the tools, kept away from the view buttons by undo / redo (#91) -->
      <div class="fp3d-seg fp3d-seg-menu">
        <button aria-pressed=${this._wallPick} title=${this.t("wall_view_open")} @click=${(e: Event) => (close(), this.toggleWallPick(e.currentTarget as HTMLElement))}>${this.t("wall_view")}</button>
      </div>
      <div class="fp3d-seg fp3d-seg-menu">
        <button class="fp3d-undo" ?disabled=${!this._canUndo} @click=${() => this.undo()} title=${`${this.t("undo")} (Ctrl+Z)`} aria-label=${this.t("undo")}>↶</button>
        <button class="fp3d-undo" ?disabled=${!this._canRedo} @click=${() => this.redo()} title=${`${this.t("redo")} (Ctrl+Y)`} aria-label=${this.t("redo")}>↷</button>
      </div>
      <div class="fp3d-seg fp3d-seg-menu fp3d-seg-views">
        <button class="fp3d-split-btn" aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${() => (close(), this.toggleSplit())}>${this._split ? "◧ " : "▢ "}${this.t("split_3d")}</button>
        <button title=${this.t("fit_hint")} @click=${() => (close(), this.fit())}>${this.t("fit")}</button>
        <button title=${this.t("fit_all_hint")} @click=${() => (close(), this.fit(true))}>${this.t("fit_all")}</button>
        <button class="fp3d-help-btn" aria-pressed=${this._help} aria-label=${this.t("help_open")} title=${this.t("help_open")} @click=${() => (close(), (this._help = !this._help))}>?</button>
      </div>
      ${this.renderSettingsMenu(close)}`;
  }

  /**
   * ⚙ Settings: everything that belongs to the whole plan, not to a floor, a room or an item. Each topic opens the
   * Settings page (#139) at its section; locating keeps its own assistant (a bundle of its own).
   */
  renderSettingsMenu(closeTools: () => void) {
    const admin = this.isEditor;
    const open = this._settingsMenu;
    const all: { key: string; section: string | null; id?: string; icon: string; label: string; admin: boolean }[] = [
      { key: "all", section: null, icon: "⚙", label: this.t("all_settings"), admin: false },
      { key: "house", section: "general", icon: "🏠", label: this.t("settings_house"), admin: true },
      { key: "weather", section: "scene", id: "weather_entity", icon: "🌦", label: this.t("settings_weather"), admin: true },
      { key: "director", section: "cameras", id: "director.doorbell", icon: "🎬", label: this.t("card_director"), admin: true },
      { key: "voice", section: "voice", icon: "🎙", label: this.t("voice"), admin: false },
      ...(released("locate") && this.isHaAdmin ? [{ key: "locate", section: null, icon: "📡", label: this.t("locate"), admin: true }] : []),
      { key: "favorites", section: "favourites", icon: "⭐", label: this.t("favorites"), admin: true },
      { key: "backdrop", section: "scene", id: "backdrop.kind", icon: "🖼", label: this.t("backdrop"), admin: true },
      { key: "terrain", section: "scene", id: "terrain.level", icon: "⛰", label: this.t("terrain"), admin: true },
      { key: "backup", section: "backup", icon: "💾", label: this.t("backup"), admin: true },
      ...(this.isHaAdmin ? [{ key: "editors", section: "access", icon: "👥", label: this.t("editors_title"), admin: true }] : []),
    ];
    const topics = all.filter((t) => admin || !t.admin);
    const toggle = () => {
      closeTools();
      this._settingsMenu = !open;
    };
    return html`<div class="fp3d-seg fp3d-seg-menu fp3d-seg-settings">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${open} title=${this.t("settings")} @click=${toggle}>
          ⚙ <span class="fp3d-settings-word">${this.t("settings")}</span> <span class="fp3d-caret">▾</span>
        </button>
        ${open
          ? html`<div class="fp3d-menu-veil" @click=${() => (this._settingsMenu = false)}></div>
              <div class="fp3d-menu fp3d-menu-right" role="menu">
                ${topics.map(
                  (t) => html`<button
                    role="menuitem"
                    class="fp3d-menu-item"
                    @click=${() => {
                      this._settingsMenu = false;
                      if (t.key === "locate") {
                        if (this.hass) void loadLocate().then((m) => m.openLocateSetup(this.hass!, this._doc, () => this.hass, (look) => this.setSettings({ person_look: look === "figure" ? null : look })));
                        return;
                      }
                      this.openSettings(t.section, t.id ?? null);
                    }}
                  >
                    ${t.icon} ${t.label}
                  </button>`,
                )}
              </div>`
          : nothing}
      </div>
    </div>`;
  }

  /**
   * Where a house-wide setting went (#139): a line in a tool panel or item form that opens the Settings page at it.
   * `text` says what is there; `icon` leads it (a lock's state).
   */
  renderSettingsLink(section: string, id: string | null, text: I18nKey, icon = "⚙") {
    return html`<button class="fp3d-settings-link fp3d-wide" @click=${() => this.openSettings(section, id)}>
      <span>${icon} ${this.t(text)}</span><b>${this.t("settings")} ›</b>
    </button>`;
  }

  /** Opens the Settings page (#139) at a section and setting; the panel listens. */
  openSettings(section: string | null, id: string | null = null): void {
    this.dispatchEvent(new CustomEvent("open-settings", { detail: { section, id }, bubbles: true, composed: true }));
  }

  /** The hint bar under the plan (#96): the current tool, the selection, or on a new plan the next step. */
  renderHint() {
    const key = this.hintKeyNow();
    const first = key === "hint_empty" || key === "hint_first_room";
    const warn = this._fixedHint || (this._tool === "opening" && !!this._openingNote);
    // the tooltip names the key that turns snapping off while dragging (#143)
    return html`<div class="fp3d-hint ${warn ? "fp3d-hint-fixed" : ""} ${first ? "fp3d-hint-first" : ""}" role="status" aria-live="polite" title=${this.t("snap_off_tip")}>
      <span class="fp3d-hint-text" .textContent=${live(this.hintText())}></span>
      <button class="fp3d-hint-help" title=${this.t("help_open")} @click=${() => (this._help = true)}>? ${this.t("hint_help")}</button>
    </div>`;
  }

  /** The last front view drawn, by what it was drawn from: the item panel re-renders often, the drawing changes rarely (#115). */
  elevationMemo: { key: string; el: RackElevation | null } | null = null;

  /** Any entity: the rack sheet's pickers (one function, so its options are memoised). */
  readonly anyEntity = () => true;
  rackDevicesMemo: { entities: unknown; devices: unknown; count: number; options: { id: string; label: string }[] } | null = null;

  /** The '?' help (#95): the shortcuts and the plan's marks, both from the tables in help.ts. */
  renderHelp() {
    if (!this._help) return nothing;
    const close = () => (this._help = false);
    const mark = (m: (typeof LEGEND)[number]["mark"]) => {
      const shape =
        m === "swing"
          ? svg`<path class="fp3d-help-swing" d="M4 22L4 4A18 18 0 0 1 22 22" />`
          : m === "track"
            ? svg`<path class="fp3d-help-track" d="M4 20L4 4M22 20L22 4" />`
            : m === "guide"
              ? svg`<line class="fp3d-guide" x1="2" y1="13" x2="24" y2="13" />`
              : m === "snap"
                ? svg`<circle class="fp3d-snap" cx="13" cy="13" r="8" />`
                : m === "ghost"
                  ? svg`<rect class="fp3d-ghost" x="3" y="5" width="20" height="16" />`
                  : svg`<rect class="fp3d-help-sel" x="3" y="5" width="20" height="16" rx="2" />`;
      return html`<svg class="fp3d-help-mark" viewBox="0 0 26 26" aria-hidden="true">${shape}</svg>`;
    };
    return html`<div class="fp3d-dialog-veil" @click=${(e: Event) => e.target === e.currentTarget && close()}>
      <div class="fp3d-dialog fp3d-help-overlay" role="dialog" aria-label=${this.t("help_overlay_title")} tabindex="-1">
        <div class="fp3d-dialog-head">
          <h3>${this.t("help_overlay_title")}</h3>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${close}>✕</button>
        </div>
        <div class="fp3d-dialog-body">
          <h4>${this.t("help_shortcuts")}</h4>
          <dl class="fp3d-help-keys">
            ${SHORTCUTS.map((k) => html`<dt>${k.keys.map((key, i) => html`${i ? " / " : ""}<kbd>${key}</kbd>`)}</dt><dd>${this.t(k.text)}</dd>`)}
          </dl>
          <h4>${this.t("help_legend")}</h4>
          <ul class="fp3d-help-legend">
            ${LEGEND.map((l) => html`<li>${mark(l.mark)}<span>${this.t(l.text)}</span></li>`)}
          </ul>
        </div>
      </div>
    </div>`;
  }

  /** A part of the editor on the Settings page (#139): drawn as in the editor, around it only its form. */
  renderTopic(topic: EditorTopic): TemplateResult {
    const doc = this._doc;
    if (!doc) return html``;
    let body: unknown = nothing;
    if (topic === "director_triggers") {
      const placed = [...new Set(doc.floors.flatMap((f) => f.placements.map((p) => p.entity_id)))];
      body = this.renderDirectorTriggers(doc.settings.director ?? {}, placed);
    } else if (topic === "favorites") body = this.renderFavorites();
    else if (topic === "own_buttons") body = this.renderOwnButtons();
    else if (topic === "media_presets") body = this.renderMediaPresets();
    else if (topic === "editors") body = this.renderEditors();
    else if (topic === "tablet_users") {
      this.askEditors();
      body = this.editorsList ? html`<div class="fp3d-form">${this.renderTabletUsers(this.editorsList.users)}</div>` : html`<p class="fp3d-sub">${this.t("loading")}</p>`;
    } else if (topic === "backup") body = this.renderBackup();
    else if (topic === "energy_balance") body = this.renderEnergyBalance();
    else if (topic === "hologram") body = this.renderHologramSettings();
    else if (topic === "presence") body = this.renderPresenceSettings();
    return html`<div class="fp3d-embed">${body}</div>`;
  }

  protected render(): TemplateResult {
    if (this.topic) return this.renderTopic(this.topic);
    const floor = this.floor;
    const walls = floor ? generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []) : null;
    return html`
      ${this.renderPreview()} ${this.renderWallView()} ${this.renderPartCard()} ${this.renderHelp()} ${this.renderRackSheet()}
      <div class="fp3d-editor ${this.narrow ? "fp3d-narrow" : ""}" style=${`--fp3d-side-w:${this._sideWidth}px`}>
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            ${this._wallPick ? html`<div class="fp3d-pick-tip" style=${`left:${this.wallPickTip[0]}px;top:${this.wallPickTip[1]}px`} @click=${() => (this._wallPick = false)}>${this.t("hint_wall_pick")}</div>` : nothing}
            ${this.renderFloorMenu()} ${this.renderToolBar(floor)}
            ${walls?.warnings.length ? html`<span class="fp3d-warn">${this.t("overlap_warning")}</span>` : nothing}
          </div>
          <div class="fp3d-stage-pair ${this._split ? "fp3d-split" : ""}" style=${this._split && !this.narrow ? `--fp3d-split:${Math.round(this._splitRatio * 100)}%` : ""}>
          <div class="fp3d-canvas-wrap">
            ${this._phoneHint
              ? html`<div class="fp3d-phone-hint">
                  <span>${this.t("phone_hint")}</span>
                  <button
                    class="fp3d-btn"
                    aria-label=${this.t("close")}
                    @click=${() => {
                      this._phoneHint = false;
                      try {
                        localStorage.setItem("home3d.phoneHint", "0");
                      } catch {
                        // no storage: gone for this visit
                      }
                    }}
                  >
                    ✕
                  </button>
                </div>`
              : nothing}
            ${this.houseTool ? html`<div class="fp3d-tool-note">${this.t(this._tool === "energy" ? "energy_only_note" : "roof_only_note")}</div>` : nothing}
            <svg
              class="fp3d-plan fp3d-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${() => {
                if (!this.drag) this._cursor = null;
                this._openingHover = null;
              }}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
              @dragover=${this.onPlanDragOver}
              @drop=${this.onPlanDrop}
            >
              ${this.renderBackground(floor)} ${this.renderGrid()} ${this.renderGhost()} ${walls ? this.renderWalls(walls.walls) : nothing}
              ${floor ? this.renderOutdoor(floor) : nothing} ${floor ? this.renderRooms(floor) : nothing} ${floor ? this.renderFurniture(floor) : nothing} ${this.renderPlaceGhost()}
              ${floor ? this.renderFreeWalls(floor) : nothing}
              ${floor && walls ? this.renderOpenings(floor, walls.walls) : nothing} ${floor ? this.renderMeter(floor) : nothing}
              ${floor && this._tool === "select" ? this.renderDevices(floor) : nothing}
              ${floor && this._tool === "select" ? this.renderPets(floor) : nothing}
              ${this.room && this.isEditor && this._tool === "select" && !this._openingId && !this._furnitureId && !this.isFixedItem("room", this.room.id) ? this.renderHandles(this.room) : nothing}
              ${floor ? this.renderOutdoorHandles(floor) : nothing}
              ${this.room && this._tool === "select" ? this.renderSplitMarks(this.room) : nothing}
              ${floor ? this.renderHeadroom(floor) : nothing}
              ${this._tool === "roof" ? svg`${this.renderRoofSections()}${this.renderRoofWindows()}` : this._tool === "energy" ? svg`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}` : this._tool === "pool" && floor && this.pipeRules ? this.renderPoolPlan(floor) : nothing} ${this.renderDraft()} ${this.renderGuides()}
              ${floor ? this.renderKerb(floor) : nothing}
            </svg>
            ${this.renderContext()}
            ${this.renderHint()}
          </div>
          ${this._split && !this.narrow
            ? html`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`
            : nothing}
          ${this._split ? this.render3d() : nothing}
          </div>
        </div>
        ${this.renderAside(floor)}
      </div>
    `;
  }

  renderBackground(floor: Floor | undefined) {
    const bg = floor?.background;
    const img = bg ? this._images[bg.image_id] : undefined;
    if (!bg || !img) return nothing;
    const [x, y] = this.toScreen([bg.x, bg.z]);
    const w = bg.width * this._view.scale;
    const h = w * img.aspect;
    const rot = bg.rotation ?? 0;
    const edit = this.bgHandles();
    // while editing, the picture takes the pointer (drag moves it) and its lower right corner scales it
    return svg`<g transform="rotate(${rot} ${x + w / 2} ${y + h / 2})">
      <image href=${img.url} x=${x} y=${y} width=${w} height=${h} opacity=${bg.opacity} preserveAspectRatio="none" pointer-events=${edit ? "auto" : "none"} data-bg="1" style=${edit ? "cursor:move" : ""} />
      ${edit
        ? svg`<rect class="fp3d-bg-frame" x=${x} y=${y} width=${w} height=${h} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${x + w} cy=${y + h} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${x + w / 2} y1=${y} x2=${x + w / 2} y2=${y - 30} />
            <circle cx=${x + w / 2} cy=${y - 30} r="16" class="fp3d-hit" />
            <circle cx=${x + w / 2} cy=${y - 30} r="8" />
            <path d="M${x + w / 2 - 4} ${y - 31}a4 4 0 1 1 2 3.5" />
          </g>`
        : nothing}
    </g>${this.renderBgRuler()}`;
  }

  /** The picture has handles (move, scale, turn) only while "Move and scale" is switched on, with the select tool. */
  bgHandles(): boolean {
    return !!this.floor?.background && this.isEditor && this._tool === "select" && this._bgEdit;
  }

  /** The ruler's points and line over the background (#183), or the straighten line. */
  renderBgRuler() {
    const pts = this._bgLevel?.length ? this._bgLevel : this._bgRuler;
    if (!pts?.length) return nothing;
    const s = pts.map((p) => this.toScreen(p));
    return svg`<g class="fp3d-bg-ruler">
      ${s.length === 2 ? svg`<line x1=${s[0][0]} y1=${s[0][1]} x2=${s[1][0]} y2=${s[1][1]} />` : nothing}
      ${s.map(([x, y]) => svg`<circle cx=${x} cy=${y} r="6" />`)}
    </g>`;
  }

  /** Turn the background about the first tap so the tapped line runs exactly along x or z (whichever is nearer). */
  applyBgLevel(p: Vec2, q: Vec2): void {
    const bg = this.floor?.background;
    const img = bg ? this._images[bg.image_id] : undefined;
    this._bgLevel = null;
    if (!bg || !img || Math.hypot(q[0] - p[0], q[1] - p[1]) < 0.05) return;
    const a = Math.atan2(q[1] - p[1], q[0] - p[0]);
    const delta = Math.round(a / (Math.PI / 2)) * (Math.PI / 2) - a;
    if (Math.abs(delta) < 1e-4) return;
    // turning about p moves the picture's middle along: c' = p + R(delta) (c − p)
    const h = bg.width * img.aspect;
    const c: Vec2 = [bg.x + bg.width / 2, bg.z + h / 2];
    const dx = c[0] - p[0];
    const dz = c[1] - p[1];
    const c2: Vec2 = [p[0] + dx * Math.cos(delta) - dz * Math.sin(delta), p[1] + dx * Math.sin(delta) + dz * Math.cos(delta)];
    let rot = (bg.rotation ?? 0) + (delta * 180) / Math.PI;
    rot = Math.round((((((rot + 180) % 360) + 360) % 360) - 180) * 100) / 100;
    this.updateFloor({ background: { ...bg, rotation: rot, x: round(c2[0] - bg.width / 2), z: round(c2[1] - h / 2) } });
  }

  /** Scale the background about the ruler's first point so the measured stretch gets its real length (#183). */
  applyBgRuler(real: number): void {
    const floor = this.floor;
    const bg = floor?.background;
    const pts = this._bgRuler;
    const img = bg ? this._images[bg.image_id] : undefined;
    if (!bg || !img || !pts || pts.length < 2 || !(real > 0)) return;
    const measured = Math.hypot(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]);
    if (measured < 1e-4) return;
    const k = real / measured;
    // scaling about p keeps the turn: the centre moves to p + k (c − p), the size grows by k
    const h = bg.width * img.aspect;
    const c: Vec2 = [bg.x + bg.width / 2, bg.z + h / 2];
    const p = pts[0];
    const c2: Vec2 = [p[0] + k * (c[0] - p[0]), p[1] + k * (c[1] - p[1])];
    const w2 = bg.width * k;
    const h2 = h * k;
    this.updateFloor({ background: { ...bg, width: round(w2), x: round(c2[0] - w2 / 2), z: round(c2[1] - h2 / 2) } });
    this._bgRuler = null;
    this._bgRulerLen = 0;
  }

  /** The picture's own frame: a plan point measured from its top left corner, along its (turned) sides, in metres. */
  bgLocal(bg: Background, world: Vec2, aspect: number): Vec2 {
    const h = bg.width * aspect;
    const cx = bg.x + bg.width / 2;
    const cz = bg.z + h / 2;
    const a = (-(bg.rotation ?? 0) * Math.PI) / 180;
    const dx = world[0] - cx;
    const dz = world[1] - cz;
    return [cx + dx * Math.cos(a) - dz * Math.sin(a) - bg.x, cz + dx * Math.sin(a) + dz * Math.cos(a) - bg.z];
  }

  renderGrid() {
    const { scale } = this._view;
    const { w, h } = this._size;
    const minor = scale >= 90 ? 0.1 : scale >= 30 ? 0.5 : 1;
    const major = scale >= 20 ? 1 : 5;
    const [x0, z0] = this.toWorld(0, 0);
    const [x1, z1] = this.toWorld(w, h);
    const lines: ReturnType<typeof svg>[] = [];
    const push = (step: number, cls: string) => {
      for (let x = Math.ceil(x0 / step) * step; x <= x1; x += step) {
        const sx = this.toScreen([x, 0])[0];
        lines.push(svg`<line class=${cls} x1=${sx} y1="0" x2=${sx} y2=${h} />`);
      }
      for (let z = Math.ceil(z0 / step) * step; z <= z1; z += step) {
        const sy = this.toScreen([0, z])[1];
        lines.push(svg`<line class=${cls} x1="0" y1=${sy} x2=${w} y2=${sy} />`);
      }
    };
    if (minor < major) push(minor, "fp3d-grid-minor");
    push(major, "fp3d-grid-major");
    const [ox, oy] = this.toScreen([0, 0]);
    lines.push(svg`<circle class="fp3d-origin" cx=${ox} cy=${oy} r="3" />`);
    return svg`<g pointer-events="none">${lines}</g>`;
  }

  /** Rooms of the floor below, as orientation. */
  /** The outline of an armed library card under the pointer (#76). */
  renderPlaceGhost() {
    const p = this._placing;
    const at = this._placeAt;
    if (!p || !at) return nothing;
    const [w, d] = furnitureSize(p.type);
    const k = this._view.scale;
    const [cx, cy] = this.toScreen(at);
    return svg`<rect class="fp3d-place-ghost" x=${cx - (w * k) / 2} y=${cy - (d * k) / 2} width=${w * k} height=${d * k} />`;
  }

  renderGhost() {
    const i = this._doc?.floors.findIndex((f) => f.id === this._floorId) ?? -1;
    const below = i > 0 ? this._doc.floors[i - 1] : undefined;
    if (!below) return nothing;
    return svg`<g pointer-events="none">${below.rooms.map(
      (r) => svg`<polygon class="fp3d-ghost" points=${r.points.map((p) => this.toScreen(p).join(",")).join(" ")} />`,
    )}</g>`;
  }

  renderWalls(walls: Wall[]) {
    const H = this.floor?.height ?? 2.5;
    return svg`<g pointer-events="none">${walls.map((w) => {
      const low = w.height !== undefined && w.height < H - 0.01;
      const cls = `fp3d-wall${w.exterior ? " fp3d-wall-ext" : ""}${low ? " fp3d-wall-low" : ""}`;
      return svg`<polygon class=${cls} points=${w.footprint.map((p) => this.toScreen(p).join(",")).join(" ")} />`;
    })}</g>`;
  }

  /** Sets the height of one edge of a room, and of every wall piece shared with it. */
  /** The parts another room splits an edge into (start distances along the edge), in order; one part when whole. */
  edgeParts(room: Room, edge: number): number[] {
    const floor = this.floor;
    if (!floor) return [0];
    // the parts a per-part height list follows (#157): also the ones whose walls merged or are left out ("No wall")
    const starts = generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []).parts.get(`${room.id}:${edge}`) ?? [];
    return starts.length ? [...new Set(starts)].sort((a, b) => a - b) : [0];
  }

  /** A sloping wall on a room edge: its heights at the edge's start and end corner, or null for a plain wall (D569). */
  setEdgeSlope(room: Room, edge: number, slope: [number, number] | null): void {
    if (!this.isEditor) return;
    this.change((_, f) => {
      const r = f.rooms.find((x) => x.id === room.id);
      if (!r) return;
      const list = (r.wall_slopes ?? []).slice(0, r.points.length);
      while (list.length < r.points.length) list.push(null);
      list[edge] = slope ? [Math.round(Math.max(0.05, slope[0]) * 1000) / 1000, Math.round(Math.max(0.05, slope[1]) * 1000) / 1000] : null;
      r.wall_slopes = list.every((x) => !x) ? undefined : list;
    });
  }

  /** Set a wall height on a room edge (and on the rooms sharing it), or on one part of a split edge only. */
  setEdgeHeight(room: Room, edge: number, height: number | null, part?: number): void {
    const floor = this.floor;
    if (!floor || !this.isEditor) return;
    if (part !== undefined) {
      const n = this.edgeParts(room, edge).length;
      this.change((_, f) => {
        const r = f.rooms.find((x) => x.id === room.id);
        if (!r) return;
        const list = (r.wall_heights ?? []).slice(0, r.points.length);
        while (list.length < r.points.length) list.push(null);
        const cur = list[edge];
        const parts: (number | null)[] = Array.isArray(cur) ? [...cur] : new Array<number | null>(n).fill(typeof cur === "number" ? cur : null);
        while (parts.length < n) parts.push(null);
        parts[part] = height;
        list[edge] = parts.every((h) => h === parts[0]) ? parts[0] : parts;
        r.wall_heights = list.every((h) => h === null) ? undefined : list;
      });
      return;
    }
    const walls = generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []).walls;
    const sources = walls.filter((w) => w.sources.some((s) => s.room_id === room.id && s.edge === edge)).flatMap((w) => w.sources);
    if (!sources.some((s) => s.room_id === room.id && s.edge === edge)) sources.push({ room_id: room.id, edge, t0: 0, t1: 0 });
    this.change((_, f) => {
      for (const s of sources) {
        const r = f.rooms.find((x) => x.id === s.room_id);
        if (!r) continue;
        const list = (r.wall_heights ?? []).slice(0, r.points.length);
        while (list.length < r.points.length) list.push(null);
        list[s.edge] = height;
        r.wall_heights = list.every((h) => h === null) ? undefined : list;
      }
    });
  }

  /**
   * Kamera-Cockpit: which detection sensors count for the camera (person, vehicle, animal, motion). Found by
   * themselves on the camera's device; with "choose" a tick per sensor, and sensors of other devices can be added
   * (Frigate's person sensor for a Reolink camera, #815).
   */
  renderCameraDetections(cameraId: string) {
    if (!this.hass) return nothing;
    const hass = this.hass;
    const pl = this.floor?.placements.find((p) => p.entity_id === cameraId);
    const chosen = Array.isArray(pl?.detect_sensors) ? pl!.detect_sensors : null;
    const own = cameraOwnSensors(hass, cameraId);
    const sensors = cameraMotionSensors(hass, cameraId);
    const kinds = [...new Set(sensors.map((id) => detectionKind(hass, id)))];
    const admin = this.isEditor;
    const set = (list: string[] | null) => this.updateDevice({ detect_sensors: list });
    const detectClass = (id: string) => id.startsWith("binary_sensor.") && ["motion", "occupancy", "presence"].includes(String(hass.states[id]?.attributes.device_class));
    // the list to tick: the camera's own sensors and every one chosen before
    const listed = [...new Set([...own, ...(chosen ?? [])])];
    return html`<p class="fp3d-sub fp3d-wide">
        ${sensors.length
          ? html`${this.t("camera_detect_found", { kinds: kinds.map((k) => this.t(`detect_${k}` as I18nKey)).join(", "), n: sensors.length })}`
          : this.t("camera_detect_none")}
      </p>
      <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_choose_hint")}
        ><input type="checkbox" .checked=${chosen !== null} ?disabled=${!admin} @change=${(ev: Event) => set((ev.target as HTMLInputElement).checked ? [...own] : null)} />
        ${this.t("camera_detect_choose")}</label
      >
      ${chosen !== null
        ? html`${listed.map(
              (id) =>
                html`<label class="fp3d-check fp3d-wide fp3d-indent"
                  ><input type="checkbox" .checked=${chosen.includes(id)} ?disabled=${!admin} @change=${(ev: Event) => set((ev.target as HTMLInputElement).checked ? [...chosen, id] : chosen.filter((x) => x !== id))} />
                  ${entityName(hass, id)} <span class="fp3d-sub">${id}</span></label
                >`,
            )}
            ${this.entitySelect(this.t("camera_detect_add"), null, undefined, this.entityOptionsFor(this.detectFilter(detectClass, listed)), (v) => {
              if (v && v !== "none") set([...chosen, v]);
            })}`
        : nothing}`;
  }
  /** The filter of the "add a sensor" list, kept per camera so its options stay cached (see entityOptions). */
  _detectFilter: { key: string; fn: (id: string) => boolean } | null = null;
  detectFilter(cls: (id: string) => boolean, listed: string[]): (id: string) => boolean {
    const key = listed.join(",");
    if (this._detectFilter?.key !== key) this._detectFilter = { key, fn: (id) => cls(id) && !listed.includes(id) };
    return this._detectFilter.fn;
  }

  /** Cut a wall (or one part of it) in the middle: a split point of its own, the new part keeps the height. */
  splitEdge(room: Room, edge: number, part: number | undefined): void {
    if (!this.isEditor) return;
    const pts = room.points;
    const len = Math.hypot(pts[(edge + 1) % pts.length][0] - pts[edge][0], pts[(edge + 1) % pts.length][1] - pts[edge][1]);
    const starts = this.edgeParts(room, edge);
    const s0 = part === undefined ? 0 : starts[part];
    const s1 = part === undefined ? len : (starts[part + 1] ?? len);
    if (s1 - s0 < 0.4) return;
    const at = Math.round(((s0 + s1) / 2) * 100) / 100;
    this.change((_, f) => {
      const r = f.rooms.find((x) => x.id === room.id);
      if (!r) return;
      const splits = (r.wall_splits ?? []).slice(0, r.points.length);
      while (splits.length < r.points.length) splits.push(null);
      splits[edge] = [...(splits[edge] ?? []), at].sort((a, b) => a - b);
      r.wall_splits = splits;
      // a per-part height list grows by the new part, which starts with the height of the one it was cut from
      const cur = r.wall_heights?.[edge];
      if (Array.isArray(cur)) {
        const k = part ?? 0;
        cur.splice(k + 1, 0, cur[k] ?? null);
      }
    });
  }

  /** Move a split point along its edge (kept clear of the ends and of other stops). */
  moveSplit(room: Room, edge: number, from: number, to: number): void {
    const pts = room.points;
    const len = Math.hypot(pts[(edge + 1) % pts.length][0] - pts[edge][0], pts[(edge + 1) % pts.length][1] - pts[edge][1]);
    const others = this.edgeParts(room, edge).filter((s) => Math.abs(s - from) > 1e-3 && s > 0);
    let at = Math.max(0.1, Math.min(len - 0.1, Math.round(to * 100) / 100));
    if (others.some((s) => Math.abs(s - at) < 0.1)) at = from;
    this.change((_, f) => {
      const r = f.rooms.find((x) => x.id === room.id);
      const list = r?.wall_splits?.[edge];
      if (!list) return;
      const k = list.findIndex((d) => Math.abs(d - from) < 1e-3);
      if (k >= 0) list[k] = at;
      list.sort((a, b) => a - b);
    });
  }

  /** Remove a split point: the part behind it joins the one before (whose height stays). */
  joinSplit(room: Room, edge: number, at: number, part: number): void {
    this.change((_, f) => {
      const r = f.rooms.find((x) => x.id === room.id);
      if (!r?.wall_splits?.[edge]) return;
      const list = r.wall_splits[edge]!.filter((d) => Math.abs(d - at) > 1e-3);
      r.wall_splits[edge] = list.length ? list : null;
      if (r.wall_splits.every((l) => !l)) r.wall_splits = undefined;
      const cur = r.wall_heights?.[edge];
      if (Array.isArray(cur)) {
        cur.splice(part, 1);
        if (cur.every((h) => h === cur[0])) r.wall_heights![edge] = cur[0] ?? null;
      }
    });
  }

  /** Marks on the selected room's edges where a wall is split by hand. */
  renderSplitMarks(room: Room) {
    const pts = room.points;
    return svg`${(room.wall_splits ?? []).flatMap((list, i) => {
      if (!list || i >= pts.length) return [];
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
      const ux = (b[0] - a[0]) / l;
      const uz = (b[1] - a[1]) / l;
      return list.map((d) => {
        const [x, y] = this.toScreen([a[0] + ux * d, a[1] + uz * d]);
        // a short tick across the wall
        return svg`<line class="fp3d-split-mark" x1=${x - uz * 7} y1=${y + ux * 7} x2=${x + uz * 7} y2=${y - ux * 7} />`;
      });
    })}`;
  }

  /** Height list per wall of a room in the room form (always open); hovering a row lights the wall up. */
  renderEdgeHeights(room: Room) {
    const H = this.floor!.height;
    const n = room.points.length;
    // which edges are outer walls (their default thickness is the exterior one)
    const s = this._doc.settings;
    const outer = new Set<number>();
    for (const w of generateWalls(this.floor!.rooms, { exterior: s.wall_exterior, interior: s.wall_interior }, this.floor!.walls ?? []).walls) {
      if (w.exterior) for (const src of w.sources) if (src.room_id === room.id) outer.add(src.edge);
    }
    const setThick = (edge: number, v: number | null) =>
      this.change((_, f) => {
        const r = f.rooms.find((x) => x.id === room.id);
        if (!r) return;
        const list = (r.wall_thickness ?? []).slice(0, r.points.length);
        while (list.length < r.points.length) list.push(null);
        list[edge] = v;
        r.wall_thickness = list.every((t) => t === null) ? undefined : list;
      });
    const sum = wallSummary(room);
    const special = [sum.open ? this.t("walls_open_n", { n: sum.open }) : "", sum.sloping ? this.t("walls_sloping_n", { n: sum.sloping }) : ""].filter(Boolean).join(", ");
    return html`<details class="fp3d-edge-box" ?open=${this._wallsOpen} @toggle=${(e: Event) => this.setWallsOpen((e.target as HTMLDetailsElement).open)}>
      <summary>
        <h4>${this.t("walls_section", { n: sum.walls })}</h4>
        ${special ? html`<span class="fp3d-sub">${special}</span>` : nothing}
      </summary>
      ${room.points.flatMap((a, i) => {
        const b = room.points[(i + 1) % n];
        const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
        const entry = room.wall_heights?.[i] ?? null;
        const slope = room.wall_slopes?.[i] ?? null;
        const on = () => (this._edgeHi = i);
        const off = () => (this._edgeHi = null);
        // an edge another room splits: one row per part, each with its own height (#77)
        const starts = this.edgeParts(room, i);
        const parts = starts.length > 1 ? starts.map((_, k) => k) : [undefined];
        return parts.map((part) => {
          const h = part === undefined ? (Array.isArray(entry) ? (entry[0] ?? null) : entry) : Array.isArray(entry) ? (entry[part] ?? null) : entry;
          const partLen = part === undefined ? len : (starts[part + 1] ?? len) - starts[part];
          const set = (v: number | null) => this.setEdgeHeight(room, i, v, part);
          return html`<div
            class="fp3d-edge-height${i === this._edgeHi ? " fp3d-edge-on" : ""}${h !== null ? " fp3d-edge-low" : ""}"
            @mouseenter=${on}
            @mouseleave=${off}
            @focusin=${on}
            @focusout=${off}
          >
            <span
              ><b>${this.t("wall_n", { a: i + 1, b: ((i + 1) % n) + 1 })}${part === undefined ? "" : ` · ${this.t("wall_part", { n: part + 1 })}`}</b><br /><span class="fp3d-muted"
                >${this.m(partLen, 2)}</span
              ></span
            >
            ${h === 0
              ? html`<span class="fp3d-muted">${this.t("wall_none")}</span>`
              : slope && part === undefined
                ? html`${this.len(this.t("wall_slope_start", { n: i + 1 }), slope[0], (v) => this.setEdgeSlope(room, i, [v, slope[1]]), 0.05, 0.05)}
                  ${this.len(this.t("wall_slope_end", { n: ((i + 1) % n) + 1 }), slope[1], (v) => this.setEdgeSlope(room, i, [slope[0], v]), 0.05, 0.05)}`
                : this.len(this.t("wall_height"), h ?? H, (v) => set(v >= H - 0.005 ? null : Math.max(0.05, v)), 0.05, 0.05)}
            ${this.isEditor && part === undefined && h !== 0
              ? html`<button class="fp3d-btn" aria-pressed=${!!slope} title=${this.t("wall_slope_hint")} @click=${() => this.setEdgeSlope(room, i, slope ? null : [h ?? H, h ?? H])}>◢ ${this.t("wall_slope")}</button>`
              : nothing}
            ${this.isEditor && h !== null ? html`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${() => set(null)}>↥</button>` : nothing}
            ${this.isEditor && h !== 0 ? html`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${() => set(0)}>${this.t("wall_none")}</button>` : nothing}
            ${this.isEditor && partLen >= 0.4 ? html`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${() => this.splitEdge(room, i, part)}>✂</button>` : nothing}
            ${(part === undefined || part === 0) && h !== 0 ? html`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${() => this.openWallView(room.id, i)}>▦</button>` : nothing}
            ${(part === undefined || part === 0) && h !== 0
              ? html`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"), room.wall_thickness?.[i] ?? (outer.has(i) ? s.wall_exterior : s.wall_interior), (v) => {
                    const def = outer.has(i) ? s.wall_exterior : s.wall_interior;
                    const t = Math.min(1.5, Math.max(0.02, Math.round(v * 1000) / 1000));
                    setThick(i, Math.abs(t - def) < 0.0005 ? null : t);
                  }, 0.01, 0.02)}
                  ${this.isEditor && room.wall_thickness?.[i] != null ? html`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${() => setThick(i, null)}>↺</button>` : nothing}</span
                >`
              : nothing}
            ${part !== undefined && part > 0 && (room.wall_splits?.[i] ?? []).some((d) => Math.abs(d - starts[part]) < 1e-3)
              ? html`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"), starts[part], (v) => this.moveSplit(room, i, starts[part], v), 0.05, 0.1)}
                  ${this.isEditor ? html`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${() => this.joinSplit(room, i, starts[part], part)}>⨉</button>` : nothing}</span
                >`
              : nothing}
          </div>`;
        });
      })}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </details>`;
  }

  setWallsOpen(open: boolean): void {
    if (this._wallsOpen === open) return;
    this._wallsOpen = open;
    try {
      localStorage.setItem("home3d.wallsOpen", open ? "1" : "0");
    } catch {
      // no storage (private mode): open for this visit only
    }
  }

  /** Corner handles of the selected outdoor area (a rectangle stays a rectangle while dragging). */
  renderOutdoorHandles(floor: Floor) {
    const a = this._outdoorId ? floor.outdoor.find((x) => x.id === this._outdoorId) : undefined;
    if (!a || !this.isEditor || (this._tool !== "select" && !(this._tool === "pool" && !this._pipeMode)) || this._doc.settings.lock_plan) return nothing;
    if (a.pool_shape) {
      // a round or oval pool: the corners of its box (it keeps its shape while it grows)
      const b = bounds(a.points);
      const corners: Vec2[] = [[b.x0, b.z0], [b.x1, b.z0], [b.x1, b.z1], [b.x0, b.z1]];
      return svg`${corners.map((p, i) => {
        const [x, y] = this.toScreen(p);
        return svg`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${a.id}:${i}`}><circle cx=${x} cy=${y} r="16" class="fp3d-hit" /><rect x=${x - 5} y=${y - 5} width="10" height="10" /></g>`;
      })}`;
    }
    return svg`${a.points.map((p, i) => {
      const [x, y] = this.toScreen(p);
      return svg`<g class="fp3d-vertex" data-out-vertex=${`${a.id}:${i}`}><circle cx=${x} cy=${y} r="16" class="fp3d-hit" /><circle cx=${x} cy=${y} r="6" /></g>`;
    })}`;
  }

  renderOutdoor(floor: Floor) {
    return svg`<g>${floor.outdoor.map((a) => {
      const pts = a.points.map((p) => this.toScreen(p).join(",")).join(" ");
      const [cx, cy] = this.toScreen(centroid(a.points));
      const b = bounds(a.points);
      const big = Math.min(b.x1 - b.x0, b.z1 - b.z0) * this._view.scale > 40;
      return svg`<g data-outdoor=${a.id} class=${`fp3d-out fp3d-out-${a.type}${a.id === this._outdoorId ? " fp3d-out-sel" : ""}`}>
        <polygon points=${pts} />
        ${big ? svg`<text x=${cx} y=${cy + 4}>${this.t(`out_${a.type}` as I18nKey)}</text>` : nothing}
      </g>`;
    })}</g>`;
  }

  /** An outdoor area like a room (#100): a Home Assistant area (with its devices) and a name for chip and 3D. */
  renderOutdoorZone(a: OutdoorArea) {
    const admin = this.isEditor;
    const areas = Object.values(this.hass?.areas ?? {}).sort((x, y) => x.name.localeCompare(y.name));
    return html`<label class="fp3d-field fp3d-wide" title=${this.t("outdoor_area_hint")}
        >${this.t("area")}
        <select
          ?disabled=${!admin}
          @change=${(e: Event) => {
            const id = (e.target as HTMLSelectElement).value || null;
            // the area's name is a good first name for the garden or terrace
            const name = (a.name ?? "").trim() || (id ? (this.hass?.areas?.[id]?.name ?? null) : null);
            this.updateOutdoor({ area_id: id, name: id ? name : a.name ?? null });
          }}
        >
          <option value="" ?selected=${!a.area_id}>${this.t("no_area")}</option>
          ${areas.map((x) => html`<option value=${x.area_id} ?selected=${x.area_id === a.area_id}>${x.name}</option>`)}
        </select></label
      >
      ${a.area_id
        ? html`<label class="fp3d-field fp3d-wide"
            >${this.t("room_name")}
            <input .value=${a.name ?? ""} ?disabled=${!admin} @change=${(e: Event) => this.updateOutdoor({ name: (e.target as HTMLInputElement).value.trim() || null })}
          /></label>`
        : nothing}
      <p class="fp3d-sub fp3d-wide">${this.t("outdoor_area_hint")}</p>
      ${a.area_id ? this.renderOutdoorDevices(a) : nothing}`;
  }

  /** The devices of an outdoor area's Home Assistant area, to place on it like a room's (#100). */
  renderOutdoorDevices(a: OutdoorArea) {
    const hass = this.hass;
    const floor = this.floor;
    const zone = floor ? outdoorZones(floor).find((z) => z.id === a.id) : undefined;
    if (!hass || !floor || !zone) return nothing;
    const areaName = zone.area_id ? hass.areas?.[zone.area_id]?.name : undefined;
    const groups = groupByDevice(hass, areaEntities(hass, zone.area_id).filter((id) => isPlaceable(kindOf(id))));
    // placed as a pin, or as a lamp (a path light, a garden spot) with this light
    const placed = new Set([
      ...floor.placements.filter((pl) => pointInPolygon([pl.x, pl.z], zone.points)).map((pl) => pl.entity_id),
      ...floor.furniture.filter((m) => isLamp(m.type) && m.entity && pointInPolygon([m.x, m.z], zone.points)).map((m) => m.entity!),
    ]);
    const open = groups.map((g) => g.primary).filter((id) => !placed.has(id));
    const pinned = new Set(a.panel ?? []);
    const hidden = new Set(a.hidden ?? []);
    const noState = new Set(a.no_state ?? []);
    const flip = (list: Set<string>, id: string) => (list.has(id) ? [...list].filter((x) => x !== id) : [...list, id]);
    if (!groups.length) return html`<p class="fp3d-sub fp3d-wide">${this.t("devices_none")}</p>`;
    return html`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("devices")}</h4>
      ${groups.map(
        (g) => html`<div class="fp3d-row fp3d-dev-row ${hidden.has(g.primary) ? "fp3d-dev-hidden" : ""}">
          <button class="fp3d-dev-name ${placed.has(g.primary) ? "" : "fp3d-muted"}" ?disabled=${!placed.has(g.primary)} @click=${() => this.selectItem("device", g.primary)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d=${iconPath(kindOf(g.primary)!)} />
            </svg>
            <span>${entityName(hass, g.primary, areaName)}</span>
          </button>
          ${this.isEditor
            ? html`<button
                  class="fp3d-pin ${hidden.has(g.primary) ? "fp3d-pin-on" : ""}"
                  aria-pressed=${hidden.has(g.primary)}
                  title=${this.t(hidden.has(g.primary) ? "panel_unhide" : "panel_hide")}
                  @click=${() => this.updateOutdoor({ hidden: flip(hidden, g.primary) })}
                >
                  ${hidden.has(g.primary) ? "🙈" : "👁"}
                </button>
                ${hidden.has(g.primary)
                  ? nothing
                  : html`<button
                      class="fp3d-pin ${noState.has(g.primary) ? "fp3d-pin-on" : ""}"
                      aria-pressed=${noState.has(g.primary)}
                      title=${this.t(noState.has(g.primary) ? "panel_state_show" : "panel_state_hide")}
                      @click=${() => this.updateOutdoor({ no_state: flip(noState, g.primary) })}
                    >
                      ${noState.has(g.primary) ? "∅" : "Aa"}
                    </button>`}
                ${placed.has(g.primary)
                  ? nothing
                  : html`<button
                      class="fp3d-pin ${pinned.has(g.primary) ? "fp3d-pin-on" : ""}"
                      aria-pressed=${pinned.has(g.primary)}
                      title=${this.t(pinned.has(g.primary) ? "panel_unpin" : "panel_pin")}
                      @click=${() => this.updateOutdoor({ panel: flip(pinned, g.primary) })}
                    >
                      ${pinned.has(g.primary) ? "★" : "☆"}
                    </button>`}`
            : nothing}
          ${this.isEditor
            ? placed.has(g.primary)
              ? html`<button class="fp3d-link" @click=${() => this.removeDevice(g.primary)}>${this.t("devices_remove")}</button>`
              : html`<button class="fp3d-link" @click=${() => this.placeDevices([g.primary], zone)}>${this.t("devices_place")}</button>`
            : nothing}
        </div>`,
      )}
      ${this.isEditor && open.length > 1
        ? html`<button class="fp3d-link fp3d-place-all" @click=${() => this.placeDevices(open, zone)}>${this.t("devices_place_all_n", { n: open.length })}</button>`
        : nothing}
    </div>`;
  }

  renderOutdoorForm(a: OutdoorArea) {
    const admin = this.isEditor;
    const rect = isAxisRect(a.points);
    const b = bounds(a.points);
    const setRect = (field: "x" | "z" | "w" | "d", v: number) => {
      let { x0, z0, x1, z1 } = b;
      if (field === "x") [x0, x1] = [v, v + (x1 - x0)];
      if (field === "z") [z0, z1] = [v, v + (z1 - z0)];
      if (field === "w") x1 = x0 + Math.max(0.1, v);
      if (field === "d") z1 = z0 + Math.max(0.1, v);
      this.updateOutdoor({ points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]].map(([x, z]) => [round(x), round(z)] as Vec2) });
    };
    return html`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor", a.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateOutdoor({ type: (e.target as HTMLSelectElement).value as OutdoorType })}>
            ${OUTDOOR_TYPES.map((t) => html`<option value=${t} ?selected=${t === a.type}>${this.t(`out_${t}` as I18nKey)}</option>`)}
          </select></label
        >
        ${outdoorStanding(a.type) ? nothing : this.renderOutdoorZone(a)}
        ${rect
          ? html`${this.len(this.t("x"), b.x0, (v) => setRect("x", v))} ${this.len(this.t("z"), b.z0, (v) => setRect("z", v))}
            ${this.len(this.t("width"), b.x1 - b.x0, (v) => setRect("w", v), 0.01, 0.1)} ${this.len(this.t("depth"), b.z1 - b.z0, (v) => setRect("d", v), 0.01, 0.1)}`
          : nothing}
        ${outdoorStanding(a.type)
          ? this.len(this.t("outdoor_height"), a.height ?? OUTDOOR_TOP[a.type], (v) => this.updateOutdoor({ height: Math.min(6, Math.max(0.1, round(v))) }), 0.05, 0.1)
          : a.type === "balcony"
            ? this.len(this.t("balcony_rail"), a.height ?? 1, (v) => this.updateOutdoor({ height: Math.min(2, Math.max(0.4, round(v))) }), 0.05, 0.4)
            : nothing}
        ${this.len(this.t("outdoor_offset"), a.offset ?? 0, (v) => this.updateOutdoor({ offset: Math.min(10, Math.max(-10, round(v))) || null }), 0.05)}
        ${a.type !== "pool"
          ? html`${this.len(this.t("outdoor_slope"), a.slope ?? 0, (v) => this.updateOutdoor({ slope: Math.min(20, Math.max(0, round(v))) || null }), 0.05, 0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!admin} @change=${(e: Event) => this.updateOutdoor({ slope_dir: (e.target as HTMLSelectElement).value as SlopeDir })}>
                  ${SLOPE_DIRS.map((d) => html`<option value=${d} ?selected=${d === (a.slope_dir ?? "x")}>${this.t(`slope_${d.replace("-", "n")}` as I18nKey)}</option>`)}
                </select></label
              >`
          : nothing}
        ${a.type === "pool" ? this.renderPoolShape(a) : nothing}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${a.outline !== false} ?disabled=${!admin} @change=${(ev: Event) => this.updateOutdoor({ outline: (ev.target as HTMLInputElement).checked ? undefined : false })} />
          ${this.t("outdoor_outline")}</label
        >
        ${a.type === "fence" || a.type === "pergola"
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!a.open} ?disabled=${!admin} @change=${(ev: Event) => this.updateOutdoor({ open: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("outdoor_open")}</label
            >`
          : nothing}
        ${a.type === "pergola"
          ? html`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!a.bracing} ?disabled=${!admin} @change=${(ev: Event) => this.updateOutdoor({ bracing: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("outdoor_bracing")}</label
            >`
          : nothing}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!a.cut} ?disabled=${!admin} @change=${(ev: Event) => this.updateOutdoor({ cut: (ev.target as HTMLInputElement).checked || undefined })} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${a.slope ? html`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>` : nothing}
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${this.renderModuleFields(a)}
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${() => this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`
        : nothing}
    </section>`;
  }

  /** Where the bubble under the toolbar's wall view button points to (px from the toolbar's top left corner). */
  wallPickTip: [number, number] = [0, 0];

  techDocCache: { src: Building; doc: Building } | null = null;

  /** The pool whose pipes the wall view shows: the chosen one, else the first on this floor. */
  get runPool(): OutdoorArea | undefined {
    return this.poolArea ?? this.floor?.outdoor.find((o) => o.type === "pool" && o.points.length >= 3);
  }

  /** The pipe tools of the wall view: "Technik zeichnen" (Pool Pro) switched on, or the lab switch. */
  get canLayRuns(): boolean {
    return (labOn() || this._techMode) && !!this.runPool;
  }

  // ------------------------------------------------------------------ the pool tool

  /** The pool the pool tool works on: the selected one on this floor, else the only pool on it. */
  get poolArea(): OutdoorArea | undefined {
    const a = this.outdoorArea;
    if (a?.type === "pool") return a;
    // with one pool there is nothing to choose: drawing a pipe works without selecting it first
    const pools = this.floor?.outdoor.filter((o) => o.type === "pool") ?? [];
    return pools.length === 1 ? pools[0] : undefined;
  }

  /** The pipe rules of a loaded module (Pool Pro); without them the pipe tools stay hidden. */
  get pipeRules(): PipeRules | null {
    return modulePipeRules();
  }

  /** The host a module gets from the editor: the plan as edited here, and the means to change it. */
  editorHost(): ModuleHost {
    const hass = this.hass!;
    return {
      api: 1,
      hass: () => hass,
      building: () => this._doc,
      language: () => hass.language || "en",
      devices: () => [],
      findDevice: () => null,
      openings: () => [],
      energy: () => null,
      consumers: () => [],
      canEdit: () => this.isEditor,
      updateBuilding: (mutate) => this.change((doc) => mutate(doc)),
      callService: (domain, service, data) => hass.callService(domain, service, data),
      newId: (prefix) => uid(prefix),
      refresh: () => {
        // a module changed its own state (a demo started): its fields are made anew
        this._moduleFieldMemo = null;
        this.requestUpdate();
      },
      plan: pipePlanner,
    };
  }

  /**
   * A module's fields, made only when the item, the plan or Home Assistant's devices change – not on every state
   * change: Wärme Pro searches every entity for its form, and made anew several times a second it kept the CPU busy
   * and closed an open selection list at once (#815).
   */
  _moduleFieldMemo: { item: object; doc: unknown; entities: unknown; lang: string; fields: ModuleField[] } | null = null;
  memoFields(item: object, make: () => ModuleField[]): ModuleField[] {
    const m = this._moduleFieldMemo;
    const hass = this.hass!;
    if (m && m.item === item && m.doc === this._doc && m.entities === hass.entities && m.lang === hass.language) return m.fields;
    const fields = make();
    this._moduleFieldMemo = { item, doc: this._doc, entities: hass.entities, lang: hass.language, fields };
    return fields;
  }

  /** Fields a module adds to an outdoor area's form (Pool Pro: the pool's entities, the assistant), rendered here. */
  renderModuleFields(a: OutdoorArea) {
    if (!this.hass) return nothing;
    return this.renderFields(this.memoFields(a, () => moduleAreaFields(this.editorHost(), a)));
  }

  /** Fields a module adds to a room's form (the room's own speaker for the announcements). */
  renderModuleRoomFields(room: Room) {
    const floor = this.floor;
    if (!this.hass || !floor) return nothing;
    return this.renderFields(this.memoFields(room, () => moduleRoomFields(this.editorHost(), room, floor)), false);
  }

  /** Fields a module adds to a piece of furniture's form (a device's entities, a setup assistant). */
  renderModuleFurnitureFields(f: Furniture) {
    if (!this.hass) return nothing;
    return this.renderFields(this.memoFields(f, () => moduleFurnitureFields(this.editorHost(), f)));
  }

  /** A module's fields, drawn like the editor's own. */
  renderFields(fields: ModuleField[], wrap = true) {
    if (!fields.length) return nothing;
    const admin = this.isEditor;
    const field = (f: ModuleField) => {
      switch (f.kind) {
        case "heading":
          return html`<h3>${f.text}</h3>`;
        case "text":
          return html`<p class="fp3d-sub fp3d-wide">${f.text}</p>`;
        case "entity":
          return this.entitySelect(f.label, f.value, f.auto, this.entityOptionsFor(f.filter), (v) => f.set(v));
        case "select":
          return html`<label class="fp3d-field fp3d-wide"
            >${f.label}
            <select ?disabled=${!admin} @change=${(e: Event) => f.set((e.target as HTMLSelectElement).value)}>
              ${f.options.map((o) => html`<option value=${o.id} ?selected=${o.id === f.value}>${o.label}</option>`)}
            </select></label
          >`;
        case "check":
          return html`<label class="fp3d-check fp3d-wide"><input type="checkbox" .checked=${f.value} ?disabled=${!admin} @change=${(e: Event) => f.set((e.target as HTMLInputElement).checked)} /> ${f.label}</label>`;
        case "button":
          return html`<button class="fp3d-btn ${f.primary ? "fp3d-primary" : ""} fp3d-wide" ?disabled=${!admin} title=${f.title ?? ""} @click=${() => f.onTap()}>${f.label}</button>`;
        case "lines":
          return linesField(f.value, !admin, { label: f.label, placeholder: f.placeholder ?? this.t("lines_new"), add: this.t("lines_add"), remove: this.t("delete") }, (v) => f.set(v), true);
      }
    };
    if (!wrap) return fields.map(field);
    return html`<section>
      <div class="fp3d-form fp3d-links">${fields.map(field)}</div>
    </section>`;
  }

  renderRooms(floor: Floor) {
    return svg`
      <g>${floor.rooms.map((r) => {
        const pts = r.points.map((p) => this.toScreen(p).join(",")).join(" ");
        return svg`<polygon data-room=${r.id} class=${r.id === this._roomId ? "fp3d-room fp3d-room-sel" : "fp3d-room"} points=${pts} />`;
      })}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${floor.rooms.map((r) => {
        const [cx, cy] = this.toScreen(centroid(r.points));
        return svg`<text class="fp3d-room-name" x=${cx} y=${cy - 2}>${r.name}</text>
          <text class="fp3d-room-area" x=${cx} y=${cy + 14}>${this.area(polygonArea(r.points))}</text>`;
      })}</g>
    `;
  }

  /** The wall of the selected room whose row in the wall height list is hovered. */
  renderEdgeHighlight() {
    const r = this.room;
    const i = this._edgeHi;
    if (!r || i === null || i >= r.points.length) return nothing;
    const [x1, y1] = this.toScreen(r.points[i]);
    const [x2, y2] = this.toScreen(r.points[(i + 1) % r.points.length]);
    return svg`<line class="fp3d-edge-hi" pointer-events="none" x1=${x1} y1=${y1} x2=${x2} y2=${y2} />`;
  }

  renderMeter(floor: Floor) {
    const m = this._doc.energy?.meter;
    if (!m || m.floor_id !== floor.id) return nothing;
    const [x, y] = this.toScreen([m.x, m.z]);
    return svg`<g class="fp3d-meter" transform="translate(${x} ${y})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`;
  }

  renderFurniture(floor: Floor) {
    const k = this._view.scale;
    const set = this._furnitureId ? this.selection() : [];
    const many = set.length > 1;
    const hidden = this._hiddenItems;
    const shown = hidden.length ? floor.furniture.filter((f) => !hidden.includes(f.id)) : floor.furniture;
    return svg`<g>${this.renderSelectionFrame(floor, set)}${shown.map((f) => {
      const member = set.includes(f.id);
      const sel = f.id === this._furnitureId && !many;
      const [cx, cy] = this.toScreen([f.x, f.z]);
      const big = Math.min(f.w, f.d) * k > 44;
      // the handle sits in front of the item; dragging it turns the item
      const a = (f.rotation * Math.PI) / 180;
      const reach = f.d / 2 + Math.max(0.3, 26 / k);
      const [hx, hy] = this.toScreen([f.x - Math.sin(a) * reach, f.z + Math.cos(a) * reach]);
      const [fx, fy] = this.toScreen([f.x - Math.sin(a) * (f.d / 2), f.z + Math.cos(a) * (f.d / 2)]);
      const lit = isLamp(f.type) && !!f.entity && f.entity !== "none" && this.hass?.states[f.entity]?.state === "on";
      return svg`<g data-furniture=${f.id} class=${`fp3d-furn${sel || member ? " fp3d-furn-sel" : ""}${lit ? " fp3d-furn-lit" : ""}${isEnergyDevice(f.type) ? " fp3d-energy-item" : ""}`}>
        <g transform="translate(${cx} ${cy}) rotate(${f.rotation}) scale(${f.mirror ? -k : k} ${k})">
          <rect class="fp3d-furn-body" x=${-f.w / 2} y=${-f.d / 2} width=${f.w} height=${f.d} />
          <g class="fp3d-furn-sym">${furnitureSymbol(f.type, f.w, f.d)}</g>
          <line class="fp3d-furn-front" x1=${-f.w / 2} y1=${f.d / 2} x2=${f.w / 2} y2=${f.d / 2} />
        </g>
        ${big ? svg`<text x=${cx} y=${cy + 4}>${furnitureName(this.hass, f.type)}</text>` : nothing}
      </g>
      ${sel && this.isEditor && !f.locked
        ? ([[-1, -1], [1, -1], [1, 1], [-1, 1]] as const).map(([sx, sz]) => {
            const [x, y] = this.toScreen([f.x + (sx * f.w * Math.cos(a)) / 2 - (sz * f.d * Math.sin(a)) / 2, f.z + (sx * f.w * Math.sin(a)) / 2 + (sz * f.d * Math.cos(a)) / 2]);
            return svg`<g class="fp3d-resize" data-resize=${`${f.id}:${sx}:${sz}`}>
              <circle cx=${x} cy=${y} r="14" class="fp3d-hit" />
              <rect x=${x - 5} y=${y - 5} width="10" height="10" rx="2" />
            </g>`;
          })
        : nothing}
      ${sel
        ? (() => {
            // behind the item, away from the turn handle in front
            const [lx, ly] = this.toScreen([f.x + Math.sin(a) * (f.d / 2 + 18 / k), f.z - Math.cos(a) * (f.d / 2 + 18 / k)]);
            return svg`<text class="fp3d-dim" x=${lx} y=${ly + 4}>${this.m(f.w, 2)} × ${this.m(f.d, 2)}</text>`;
          })()
        : nothing}
      ${sel && f.locked ? svg`<text class="fp3d-lock" x=${hx} y=${hy + 5}>🔒</text>` : nothing}
      ${sel && this.isEditor && !f.locked
        ? svg`<g class="fp3d-rotate" data-rotate=${f.id}>
            <line x1=${fx} y1=${fy} x2=${hx} y2=${hy} />
            <circle cx=${hx} cy=${hy} r="16" class="fp3d-hit" />
            <circle cx=${hx} cy=${hy} r="8" />
            <path d="M${hx - 4} ${hy - 1}a4 4 0 1 1 2 3.5" />
          </g>`
        : nothing}`;
    })}</g>`;
  }

  /** A dashed frame around several selected items (a block or a multi selection), and the frame being drawn. */
  renderSelectionFrame(floor: Floor, set: string[]) {
    const d = this.drag;
    const drawing = d?.kind === "marquee" ? svg`<rect class="fp3d-marquee" x=${Math.min(...[d.start, d.end].map((p) => this.toScreen(p)[0]))} y=${Math.min(...[d.start, d.end].map((p) => this.toScreen(p)[1]))} width=${Math.abs(this.toScreen(d.end)[0] - this.toScreen(d.start)[0])} height=${Math.abs(this.toScreen(d.end)[1] - this.toScreen(d.start)[1])} />` : nothing;
    if (set.length < 2) return drawing;
    const pts = floor.furniture.filter((m) => set.includes(m.id)).flatMap((m) => furnitureFootprint(m));
    if (!pts.length) return drawing;
    const [x0, y0] = this.toScreen([Math.min(...pts.map((p) => p[0])), Math.min(...pts.map((p) => p[1]))]);
    const [x1, y1] = this.toScreen([Math.max(...pts.map((p) => p[0])), Math.max(...pts.map((p) => p[1]))]);
    const block = !this._multi.length;
    return svg`${drawing}<g class=${`fp3d-selframe${block ? " fp3d-selframe-block" : ""}`}>
      <rect x=${x0 - 6} y=${y0 - 6} width=${x1 - x0 + 12} height=${y1 - y0 + 12} rx="6" />
      <text x=${x0 - 4} y=${y0 - 12}>${block ? `▣ ${this.t("block_title")} · ${set.length}` : this.t("multi_title", { n: set.length })}</text>
    </g>`;
  }

  /** Side panel for several items: a block (or a multi selection that can become one). */
  renderBlockForm() {
    const set = this.selection();
    const items = (this.floor?.furniture ?? []).filter((m) => set.includes(m.id));
    const block = !this._multi.length && !!items[0]?.group;
    const fixed = items.every((m) => this.isFixedItem("furniture", m.id));
    const some = !fixed && items.some((m) => this.isFixedItem("furniture", m.id));
    return html`<section>
      <div class="fp3d-h3row"><h3>${block ? `▣ ${this.t("block_title")}` : this.t("multi_title", { n: items.length })}</h3></div>
      <p class="fp3d-sub">${this.t(block ? "block_hint" : "multi_hint")}</p>
      ${some ? html`<p class="fp3d-sub fp3d-wv-fixnote">${this.t("block_some_fixed")}</p>` : nothing}
      <div class="fp3d-block-parts">
        ${items.map(
          (m) => html`<button class="fp3d-chip" title=${this.t("block_part_edit")} @click=${() => {
            this.selectItem("furniture", m.id);
            this._single = !!m.group;
          }}>${m.name || furnitureName(this.hass, m.type)}</button>`,
        )}
      </div>
      ${this._doc.floors.length > 1 ? html`<div class="fp3d-form">${this.renderItemFloor()}</div>` : nothing}
      <div class="fp3d-actions">
        ${block
          ? html`<button class="fp3d-btn" @click=${() => this.ungroupSelection()}>${this.t("block_break")}</button>`
          : html`<button class="fp3d-btn fp3d-primary" @click=${() => this.groupSelection()}>▣ ${this.t("block_make")}</button>`}
        <button class="fp3d-btn" title=${withKeys(this.t("rotate_left"), ["Shift+R"])} @click=${() => this.rotateSelection(-90)}>${this.t("rotate_left")}</button>
        <button class="fp3d-btn" title=${withKeys(this.t("rotate_right"), ["R"])} @click=${() => this.rotateSelection(90)}>${this.t("rotate_right")}</button>
        ${this.renderClipButtons()}
        <button class="fp3d-btn ${some ? "fp3d-primary" : ""}" title=${withKeys(this.t(fixed || some ? "unfix" : "fix"), ["L"])} @click=${() => this.lockSelection(!fixed && !some)}>${fixed ? `🔓 ${this.t("unfix")}` : some ? `🔓 ${this.t("unfix_all")}` : `🔒 ${this.t("fix")}`}</button>
        <button class="fp3d-btn fp3d-danger" title=${withKeys(this.t("delete"), ["Del"])} @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>
      </div>
      ${this.renderMultiToggle()}
    </section>`;
  }

  /** Touch has no shift key: this switch makes taps add items and a drag on empty ground draw a frame. */
  renderMultiToggle() {
    return html`<label class="fp3d-check fp3d-multi-toggle"><input type="checkbox" .checked=${this._multiMode} @change=${(e: Event) => (this._multiMode = (e.target as HTMLInputElement).checked)} /> ${this.t("multi_mode")}</label>`;
  }

  renderOpenings(floor: Floor, walls: Wall[]) {
    return svg`<g>${floor.openings.map((o) => {
      const host = openingHost(o, floor.rooms, floor.walls ?? []);
      if (!host) return nothing;
      const { room, edge } = host;
      const hit = locateOpening(walls, o, host);
      const p0 = pointOnRoomEdge(room, edge, o.offset - o.width / 2);
      const p1 = pointOnRoomEdge(room, edge, o.offset + o.width / 2);
      const ux = (p1[0] - p0[0]) / (o.width || 1);
      const uz = (p1[1] - p0[1]) / (o.width || 1);
      // normal into the room (room outlines may run either way round)
      const sgn = signedArea(room.points) >= 0 ? 1 : -1;
      const n: Vec2 = [-uz * sgn, ux * sgn];
      // gap across the whole wall thickness
      let across: [number, number] = [0.06, 0.06];
      if (hit) across = hit.wall.free || hit.wall.roomLeft === room.id ? [hit.wall.left, hit.wall.right] : [hit.wall.right, hit.wall.left];
      const q = (p: Vec2, k: number) => this.toScreen([p[0] + n[0] * k, p[1] + n[1] * k]);
      const gap = [q(p0, across[0] + 0.01), q(p1, across[0] + 0.01), q(p1, -across[1] - 0.01), q(p0, -across[1] - 0.01)];
      const sel = o.id === this._openingId;
      const style = openingStyle(o, hit?.wall.exterior ?? false);
      const front = o.type === "door" && isFrontDoor(style);
      const cls = `fp3d-open fp3d-open-${o.type}${front ? " fp3d-open-front" : ""}${sel ? " fp3d-open-sel" : ""}`;
      let symbol;
      if (o.type === "garage") {
        // door panel just inside the room, with its track under the ceiling drawn dashed
        const a0 = q(p0, across[0] - 0.04);
        const a1 = q(p1, across[0] - 0.04);
        const b0 = q(p0, across[0] + Math.min(2, o.height));
        const b1 = q(p1, across[0] + Math.min(2, o.height));
        // the tracks only while selected (#95): unexplained dashes looked like stray guides
        symbol = svg`<line x1=${a0[0]} y1=${a0[1]} x2=${a1[0]} y2=${a1[1]} />
          ${sel ? svg`<path class="fp3d-open-track" d="M${a0[0]} ${a0[1]}L${b0[0]} ${b0[1]}M${a1[0]} ${a1[1]}L${b1[0]} ${b1[1]}"><title>${this.t("help_legend_track")}</title></path>` : nothing}`;
      } else if (o.type === "door") {
        // leaves swinging into the room (or out of it) from the hinge side; "left" is seen from the
        // room, so it depends on which way round the outline runs
        const out = o.swing === "out";
        const face = out ? -across[1] : across[0];
        const hingeAtP0 = (o.hinge === "left") === sgn > 0;
        const two = o.leaves === 2;
        // sidelights: fixed glass beside the leaf, drawn like window panes
        let l0 = p0;
        let l1 = p1;
        let panes: [Vec2, Vec2][] = [];
        const lights = sidelightLayout(o.width, style, hingeAtP0, o);
        if (lights) {
          const at = (k: number): Vec2 => (k <= 0.02 ? p0 : k >= o.width - 0.02 ? p1 : pointOnRoomEdge(room, edge, o.offset - o.width / 2 + k));
          l0 = at(lights.x0);
          l1 = at(lights.x1);
          panes = lights.panels.map(([a, b]) => [at(a), at(b)]);
        }
        const midP: Vec2 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
        const leafW = (two ? 0.5 : 1) * Math.hypot(l1[0] - l0[0], l1[1] - l0[1]);
        const mid = (across[0] - across[1]) / 2;
        const paneLines = panes.map(([a, b]) => {
          const a0 = q(a, mid + 0.035);
          const b0 = q(b, mid + 0.035);
          const a1 = q(a, mid - 0.035);
          const b1 = q(b, mid - 0.035);
          return svg`<line class="fp3d-open-pane" x1=${a0[0]} y1=${a0[1]} x2=${b0[0]} y2=${b0[1]} /><line class="fp3d-open-pane" x1=${a1[0]} y1=${a1[1]} x2=${b1[0]} y2=${b1[1]} />`;
        });
        const arc = (hinge: Vec2, free: Vec2) => {
          const [hx, hy] = q(hinge, face);
          const [fx, fy] = q(free, face);
          const leaf = q(hinge, face + (out ? -leafW : leafW));
          const r = leafW * this._view.scale;
          const cross = (leaf[0] - hx) * (fy - hy) - (leaf[1] - hy) * (fx - hx);
          // the leaf always; its dashed swing only while the door is selected (#95), explained by a tooltip
          return svg`<line class="fp3d-open-leaf" x1=${hx} y1=${hy} x2=${leaf[0]} y2=${leaf[1]} />${
            sel ? svg`<path class="fp3d-open-swing" d="M${leaf[0]} ${leaf[1]}A${r} ${r} 0 0 ${cross > 0 ? 1 : 0} ${fx} ${fy}"><title>${this.t("help_legend_swing")}</title></path>` : nothing
          }`;
        };
        symbol = svg`${paneLines}${
          style === "passage"
            ? svg`<line class="fp3d-open-passage" x1=${q(p0, mid)[0]} y1=${q(p0, mid)[1]} x2=${q(p1, mid)[0]} y2=${q(p1, mid)[1]} />`
            : style === "sliding"
            ? svg`<line x1=${q(l0, face)[0]} y1=${q(l0, face)[1]} x2=${q(l1, face)[0]} y2=${q(l1, face)[1]} />`
            : two
              ? svg`${arc(l0, midP)}${arc(l1, midP)}`
              : arc(hingeAtP0 ? l0 : l1, hingeAtP0 ? l1 : l0)
        }`;
      } else {
        // two panes in the middle of the wall; a double window has a post in the middle
        const mid = (across[0] - across[1]) / 2;
        const a0 = q(p0, mid + 0.035);
        const a1 = q(p1, mid + 0.035);
        const b0 = q(p0, mid - 0.035);
        const b1 = q(p1, mid - 0.035);
        const midP: Vec2 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        const m0 = q(midP, across[0]);
        const m1 = q(midP, -across[1]);
        symbol = svg`<line x1=${a0[0]} y1=${a0[1]} x2=${a1[0]} y2=${a1[1]} /><line x1=${b0[0]} y1=${b0[1]} x2=${b1[0]} y2=${b1[1]} />${
          o.leaves === 2 ? svg`<line x1=${m0[0]} y1=${m0[1]} x2=${m1[0]} y2=${m1[1]} />` : nothing
        }`;
      }
      // a wide invisible band along the opening, so a door is easy to tap again (#312)
      const h0 = q(p0, (across[0] - across[1]) / 2);
      const h1 = q(p1, (across[0] - across[1]) / 2);
      // the selected one: a ring around its gap, a little past both ends, so it stands out on any wall (#63)
      let ring: unknown = nothing;
      if (sel) {
        const r0: Vec2 = [p0[0] - ux * 0.08, p0[1] - uz * 0.08];
        const r1: Vec2 = [p1[0] + ux * 0.08, p1[1] + uz * 0.08];
        const pts = [q(r0, across[0] + 0.1), q(r1, across[0] + 0.1), q(r1, -across[1] - 0.1), q(r0, -across[1] - 0.1)];
        ring = svg`<polygon class="fp3d-open-ring" points=${pts.map((p) => p.join(",")).join(" ")} />`;
      }
      return svg`<g data-opening=${o.id} class=${cls}>
        <line class="fp3d-open-hit" x1=${h0[0]} y1=${h0[1]} x2=${h1[0]} y2=${h1[1]} />
        <polygon class="fp3d-open-gap" points=${gap.map((p) => p.join(",")).join(" ")} />
        ${symbol} ${ring}
      </g>`;
    })}</g>`;
  }

  /** Fun pack "pets": the static pets of this floor (#17), a paw at each one's spot, dragged to move it. */
  renderPets(floor: Floor) {
    if (this._doc.settings.pets?.on === false) return nothing;
    return svg`<g>${staticPetsOn(this._doc, floor.id).map((pet) => {
      const [x, y] = this.toScreen([pet.x!, pet.z!]);
      return svg`<g data-pet=${pet.id} class="fp3d-device fp3d-pet" transform="translate(${x} ${y})">
        <title>${pet.name || this.t(`pet_kind_${pet.kind}`)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${PAW} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>`;
    })}</g>`;
  }

  renderDevices(floor: Floor) {
    return svg`<g>${floor.placements.map((pl) => {
      const kind = kindOf(pl.entity_id);
      if (!kind) return nothing;
      const [x, y] = this.toScreen([pl.x, pl.z]);
      const on = this.hass?.states[pl.entity_id]?.state === "on";
      const sel = pl.entity_id === this._deviceId;
      const cls = `fp3d-device${on ? " fp3d-device-on" : ""}${sel ? " fp3d-device-sel" : ""}`;
      return svg`<g data-device=${pl.entity_id} class=${cls} transform="translate(${x} ${y})">
        <title>${entityName(this.hass, pl.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${iconPath(kind)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${sel && pl.locked ? svg`<text class="fp3d-lock" x=${x + 16} y=${y - 12}>🔒</text>` : nothing}`;
    })}</g>`;
  }

  renderHandles(room: Room) {
    const pts = room.points;
    const n = pts.length;
    const edges = pts.map((a, i) => {
      const b = pts[(i + 1) % n];
      const [ax, ay] = this.toScreen(a);
      const [bx, by] = this.toScreen(b);
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const mx = (ax + bx) / 2;
      const my = (ay + by) / 2;
      // label outside the room: offset along the edge normal away from the centroid
      const [cx, cy] = this.toScreen(centroid(pts));
      let nx = -(by - ay);
      let ny = bx - ax;
      const nl = Math.hypot(nx, ny) || 1;
      nx /= nl;
      ny /= nl;
      if (nx * (mx - cx) + ny * (my - cy) < 0) {
        nx = -nx;
        ny = -ny;
      }
      const screenLen = Math.hypot(bx - ax, by - ay);
      return svg`
        ${screenLen > 50
          ? // on an upright edge the text starts beside the "+" instead of centred over it (#431)
            Math.abs(nx) > Math.abs(ny)
            ? svg`<text class="fp3d-dim" style="text-anchor:${nx > 0 ? "start" : "end"}" x=${mx + nx * 13} y=${my + ny * 13 + 4}>${this.m(len, 2)}</text>`
            : svg`<text class="fp3d-dim" x=${mx + nx * 16} y=${my + ny * 16 + 4}>${this.m(len, 2)}</text>`
          : nothing}
        ${screenLen > 36 ? svg`<g data-mid=${i} class="fp3d-mid"><circle cx=${mx} cy=${my} r="14" class="fp3d-hit" /><circle cx=${mx} cy=${my} r="6" /><path d="M${mx - 3} ${my}h6M${mx} ${my - 3}v6" /></g>` : nothing}
      `;
    });
    const vertices = pts.map((p, i) => {
      const [x, y] = this.toScreen(p);
      return svg`<g data-vertex=${i} class=${i === this._vertex ? "fp3d-vertex fp3d-vertex-sel" : "fp3d-vertex"}><circle cx=${x} cy=${y} r="16" class="fp3d-hit" /><circle cx=${x} cy=${y} r="6" /></g>
        <text class="fp3d-vertex-no" x=${x + 9} y=${y - 9}>${i + 1}</text>`;
    });
    return svg`<g>${edges}${vertices}</g>`;
  }

  renderDraft() {
    const drag = this.drag;
    if (drag?.kind === "freewall") {
      const [x0, y0] = this.toScreen(drag.start);
      const [x1, y1] = this.toScreen(drag.end);
      const l = Math.hypot(drag.end[0] - drag.start[0], drag.end[1] - drag.start[1]);
      return svg`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${x0} y1=${y0} x2=${x1} y2=${y1} />
        <text class="fp3d-dim" x=${(x0 + x1) / 2} y=${(y0 + y1) / 2 - 10}>${this.m(l, 2)}</text>
      </g>`;
    }
    if (drag?.kind === "rect") {
      const [x0, y0] = this.toScreen(drag.start);
      const [x1, y1] = this.toScreen(drag.end);
      const w = Math.abs(drag.end[0] - drag.start[0]);
      const d = Math.abs(drag.end[1] - drag.start[1]);
      return svg`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(x0, x1)} y=${Math.min(y0, y1)} width=${Math.abs(x1 - x0)} height=${Math.abs(y1 - y0)} />
        <text class="fp3d-dim" x=${(x0 + x1) / 2} y=${Math.min(y0, y1) - 8}>${this.m(w, 2)} × ${this.m(d, 2)}</text>
      </g>`;
    }
    if (this._tool !== "polygon" && this._tool !== "measure" && !this.drawingPoints) return nothing;
    const world = [...this._draft, ...(this._cursor && this._draft.length ? [this._cursor] : [])];
    const pts = world.map((p) => this.toScreen(p));
    return svg`<g pointer-events="none">
      ${pts.length > 1 ? svg`<polyline class="fp3d-draft" points=${pts.map((p) => p.join(",")).join(" ")} />` : nothing}
      ${pts.slice(1).map((b, i) => {
        // every segment's length, the one to the pointer too (free form as with the other tools, #351)
        const a = pts[i];
        if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 30) return nothing;
        return svg`<text class="fp3d-dim" x=${(a[0] + b[0]) / 2} y=${(a[1] + b[1]) / 2 - 6}>${this.m(Math.hypot(world[i + 1][0] - world[i][0], world[i + 1][1] - world[i][1]), 2)}</text>`;
      })}
      ${this._draft.map((p, i) => {
        const [x, y] = this.toScreen(p);
        return svg`<circle class=${i === 0 && this._draft.length >= 3 ? "fp3d-draft-pt fp3d-draft-first" : "fp3d-draft-pt"} cx=${x} cy=${y} r=${i === 0 && this._draft.length >= 3 ? 9 : 5} />`;
      })}
      ${this._cursor ? svg`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />` : nothing}
    </g>`;
  }

  renderGuides() {
    const g = this._guides;
    const { w, h } = this._size;
    return svg`<g pointer-events="none">
      ${g.x !== undefined ? svg`<line class="fp3d-guide" x1=${this.toScreen([g.x, 0])[0]} y1="0" x2=${this.toScreen([g.x, 0])[0]} y2=${h} />` : nothing}
      ${g.z !== undefined ? svg`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0, g.z])[1]} x2=${w} y2=${this.toScreen([0, g.z])[1]} />` : nothing}
      ${g.point ? svg`<circle class="fp3d-snap" cx=${this.toScreen(g.point)[0]} cy=${this.toScreen(g.point)[1]} r="9" />` : nothing}
      ${g.lines ? this.renderSnapLines(g.lines) : nothing}
    </g>`;
  }

  /** Snap guides (#143): thin dashed accent lines, each with its short label once ("mid", "= 0.60 m"). */
  renderSnapLines(lines: NonNullable<Guides["lines"]>) {
    return lines.map((l, i) => {
      const [ax, ay] = this.toScreen(l.a);
      const [bx, by] = this.toScreen(l.b);
      // equal gaps repeat their label; a label already shown at an earlier line is not drawn again (but "= 0.60 m" twice is the point)
      const show = l.label && (lines.findIndex((q) => q.label === l.label) === i || l.label.startsWith("="));
      return svg`<line class="fp3d-snapline" x1=${ax} y1=${ay} x2=${bx} y2=${by} />${show
        ? svg`<text class="fp3d-snaplabel" x=${(ax + bx) / 2 + 6} y=${(ay + by) / 2 - 6}>${l.label}</text>`
        : nothing}`;
    });
  }

  /** Metres or feet and inches, as the plan's setting (or Home Assistant) says (#117). */
  get unit(): LengthUnit {
    return lengthUnit(this.hass, this._doc.settings.units);
  }

  /** A length with its unit for labels: "2,45 m" or 8' 0.5". */
  m(v: number, digits = 2): string {
    return lengthText(v, this.unit, (x) => formatNumber(this.hass, x, digits));
  }

  area(v: number): string {
    return areaText(Math.abs(v), this.unit, (x) => formatNumber(this.hass, x, 1));
  }

  /** The value of a length input: metres, or feet and inches as text. */
  lenValue(v: number): string {
    return this.unit === "imperial" ? formatImperial(v) : String(round(v));
  }

  /** A length typed into an input, in metres (null: not a length). */
  readLen(text: string): number | null {
    if (this.unit === "imperial") return parseLength(text, "imperial");
    const v = parseFloat(text.replace(",", "."));
    return Number.isFinite(v) ? v : null;
  }

  /** A length field: a number field in metres, a text field in feet and inches (8' 2", 98in, 2.5m all work). */
  len(label: string, value: number, onChange: (v: number) => void, step = 0.01, min?: number) {
    if (this.unit !== "imperial") return this.num(label, value, onChange, step, min);
    const on = this.typedEvents((text) => {
      const v = parseLength(text, "imperial");
      // the value it already has saves nothing (no empty undo step when Enter is followed by a change event)
      if (v !== null && Math.abs(v - value) > 1e-9) onChange(min !== undefined ? Math.max(min, v) : v);
    });
    // rubbish typed shows the old value again once the box is left (typedValue)
    return html`<label class="fp3d-field"
      >${unitLabel(label, "imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        placeholder="8' 2&quot;"
        title=${this.t("units_formats")}
        .value=${typedValue(this.typed, formatImperial(value))}
        ?disabled=${!this.isEditor}
        @focus=${on.focus}
        @input=${on.input}
        @change=${on.change}
        @keydown=${on.keydown}
        @blur=${on.blur}
    /></label>`;
  }

  /** Typed numbers are saved on Enter, on leaving the box and after a pause in typing (#69). */
  readonly typed = new TypedCommit();

  /**
   * The listeners of a typed number box; `save` gets the text (and ignores what isn't a number). The saves of one
   * typing run (the box got the cursor, until Enter or leaving it) on the same selection are one undo step (#127).
   */
  typedEvents(save: (text: string) => void) {
    const box = (e: Event) => e.target as HTMLInputElement;
    const commit = (text: string, run: number) => {
      const on = [this._furnitureId ? this.selection().join(",") : "", this._deviceId, this._openingId, this._wallId, this._outdoorId, this._roomId, this._vertex];
      this.mergeKey = ["typed", run, ...on].join("|");
      this.mergeWithin = Infinity;
      try {
        save(text);
      } finally {
        this.mergeKey = null;
        this.mergeWithin = undefined;
      }
    };
    return {
      focus: (e: Event) => this.typed.focus(box(e)),
      input: (e: Event) => this.typed.input(box(e), box(e).value, commit),
      change: (e: Event) => this.typed.change(box(e), box(e).value, commit),
      keydown: (e: KeyboardEvent) => {
        if (e.key !== "Enter") return;
        this.typed.enter(box(e), box(e).value, commit);
        this.requestUpdate();
      },
      blur: (e: Event) => {
        this.typed.blur(box(e));
        // the plan's value shows again (-90° typed reads 270°)
        this.requestUpdate();
      },
    };
  }

  num(label: string, value: number, onChange: (v: number) => void, step = 0.01, min?: number) {
    const on = this.typedEvents((text) => {
      const v = parseFloat(text.replace(",", "."));
      // the value it already shows saves nothing (no empty undo step when Enter is followed by a change event)
      if (Number.isFinite(v) && v !== round(value)) onChange(v);
    });
    return html`<label class="fp3d-field"
      >${label}
      <input
        type="number"
        inputmode="decimal"
        step=${step}
        min=${min ?? nothing}
        .value=${typedValue(this.typed, String(round(value)))}
        ?disabled=${!this.isEditor}
        @focus=${on.focus}
        @input=${on.input}
        @change=${on.change}
        @keydown=${on.keydown}
        @blur=${on.blur}
    /></label>`;
  }

  /** The right mouse button held down: where, on what, and whether it was dragged (then it moved the plan). */
  rightPress: { at: [number, number]; target: Element; moved: boolean } | null = null;
  /** When the right button was last released (its contextmenu event then stays quiet). */
  rightUp = -1e9;

  /** The last press on a point, to tell a double click (a pointerdown's `detail` stays 0 in Chrome, D410). */
  lastTap: { key: string; at: number } | null = null;

  /** Whether this press is the second of a double click on the same point (within 450 ms). */
  doubleTap(e: PointerEvent, key: string): boolean {
    const now = performance.now();
    const twice = e.detail >= 2 || (this.lastTap?.key === key && now - this.lastTap.at < 450);
    this.lastTap = twice ? null : { key, at: now };
    return twice;
  }

  /** A tap in the 3D pane: select there, and fold the sidebar away (the bar under the pane has the essentials). */
  selectFrom3d(kind: "room" | "furniture" | "device", id: string | null): void {
    this.selectItem(kind, id);
    this._sideOpen = false;
  }

  setSidePinned(pinned: boolean): void {
    this._sidePinned = pinned;
    this._sideOpen = false;
    try {
      localStorage.setItem("home3d.sidePinned", pinned ? "1" : "0");
    } catch {
      // no storage
    }
  }

  /** Fold the sidebar to its strip, or unfold it (beside the 3D pane: over the pane, while needed). */
  setSideFolded(folded: boolean): void {
    if (this._split && !this._sidePinned) {
      this._sideOpen = !folded;
      return;
    }
    this._sideMin = folded;
    try {
      localStorage.setItem("home3d.sideMin", folded ? "1" : "0");
    } catch {
      // no storage
    }
  }

  /**
   * The sidebar: beside the plan, folded to a narrow strip on request (more room for the plan); next to the 3D pane
   * and not pinned, folded while idle and opened over the pane.
   */
  /** The grip at the side bar's left edge: drag it to make the bar wider or narrower (#620). */
  renderSideGrip() {
    if (this.narrow) return nothing;
    const move = (e: PointerEvent) => {
      if (!this.sideDrag) return;
      this._sideWidth = Math.min(640, Math.max(280, Math.round(this.sideDrag.width + (this.sideDrag.x - e.clientX))));
    };
    const up = (e: PointerEvent) => {
      if (!this.sideDrag) return;
      this.sideDrag = null;
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      try {
        localStorage.setItem("home3d.sideWidth", String(this._sideWidth));
      } catch {
        // no storage: the width lasts for this visit
      }
    };
    return html`<div
      class="fp3d-side-grip"
      title=${this.t("side_resize")}
      @pointerdown=${(e: PointerEvent) => {
        this.sideDrag = { x: e.clientX, width: this._sideWidth };
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        e.preventDefault();
      }}
      @pointermove=${move}
      @pointerup=${up}
      @pointercancel=${up}
    ></div>`;
  }

  renderAside(floor: Floor | undefined) {
    const folding = this._split && !this._sidePinned && !this.narrow;
    const folded = !this.narrow && (folding ? !this._sideOpen : this._sideMin);
    if (folded) {
      return html`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${() => this.setSideFolded(false)}>‹</button>
        ${this._furnitureId || this._deviceId || this._openingId || this._roomId
          ? html`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${() => this.setSideFolded(false)}>⚙</button>`
          : nothing}
      </aside>`;
    }
    if (!folding) return html`<aside class="fp3d-side">${this.renderSideGrip()}${this.renderPinRow()}${this.renderSide(floor)}</aside>`;
    // open over the 3D pane, so the pane keeps its size
    return html`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderSideGrip()}
        ${this.renderPinRow(true)}
        ${this.renderSide(floor)}
      </aside>`;
  }

  renderPinRow(_overlay = false) {
    if (this.narrow) return nothing;
    const fold = html`<button class="fp3d-btn" title=${this.t("side_fold_hint")} @click=${() => this.setSideFolded(true)}>${this.t("side_close")} ›</button>`;
    if (!this._split) return html`<div class="fp3d-pin-row">${fold}</div>`;
    return html`<div class="fp3d-pin-row">
      ${fold}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${() => this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned ? "side_pinned" : "side_pin")}
      </button>
    </div>`;
  }

  renderSide(floor: Floor | undefined) {
    const floors = this._doc?.floors ?? [];
    const room = this.room;
    const admin = this.isEditor;
    const areas = Object.values(this.hass?.areas ?? {}).sort((a, b) => a.name.localeCompare(b.name));
    if (this._tool === "roof") return this.renderRoofPanel();
    if (this._tool === "energy") return this.renderEnergyPanel();
    if (this._tool === "pool") return this.renderPoolPanel(floor);
    // furnishing: the library and the selected item come first
    if (this._tool === "furniture" && floor && admin) {
      // a way back to the library: the item panel takes its place while an item is chosen (#70)
      return html`${this.furnitureItem
          ? html`<button class="fp3d-btn fp3d-back" @click=${() => this.selectItem("room", this._roomId)}>‹ ${this.t("back_to_library")}</button>
              ${this.renderFurnitureForm(this.furnitureItem)}`
          : nothing}
        ${this.renderFurnitureLibrary()}`;
    }
    // a selected item shows only its own form, with a way back to the floor and room
    const item =
      this._tool === "measure"
        ? null
        : this.furnitureItem
          ? this.renderFurnitureForm(this.furnitureItem)
          : this.opening
            ? this.renderOpeningForm(this.opening)
            : this.device
              ? this.renderDeviceForm(this.device)
              : this.outdoorArea
                ? this.renderOutdoorForm(this.outdoorArea)
                : this.freeWall
                  ? this.renderFreeWallForm(this.freeWall)
                  : null;
    // Doors & windows mode: the kind the next tap adds, chosen up front (#63); it stays within reach while an
    // opening is selected, so choosing it never has to go through that opening's own chips (#159)
    const nextKind =
      this._tool === "opening" && admin && floor
        ? html`<section>
            <h3>${this.t("opening_next_kind")}</h3>
            ${this.renderOpeningKinds(this._openingPreset, (p) => this.pickOpeningKind(p))}
          </section>`
        : nothing;
    if (item) {
      return html`${nextKind}<button class="fp3d-btn fp3d-back" @click=${() => this.selectItem("room", this._roomId)}>‹ ${this.t(room ? "back_to_room" : "back_to_floor", { room: room?.name ?? "" })}</button>
        ${item}`;
    }
    if (room && this._tool !== "measure") {
      return html`${nextKind}<button class="fp3d-btn fp3d-back" @click=${() => this.selectItem("room", null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(room, areas)} ${this.renderDeviceList(room)}`;
    }
    return html`
      ${nextKind} ${admin ? nothing : html`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${floor ? this.t("floor_settings_of", { floor: floor.name }) : this.t("floors")}</h3>
        ${floors.length
          ? nothing
          : html`${admin ? html`<button class="fp3d-btn fp3d-primary" @click=${() => this.addFloor()}>${this.t("first_floor_add")}</button>` : nothing}
              <p class="fp3d-sub">${this.t("floor_none_hint")}</p>`}
        ${admin && floor ? this.renderSettingsLink("general", "lock_plan", this._doc.settings.lock_plan ? "plan_locked" : "plan_lock", this._doc.settings.lock_plan ? "🔒" : "🔓") : nothing}
        ${floor
          ? html`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${floor.name} ?disabled=${!admin} @change=${(e: Event) => this.updateFloor({ name: (e.target as HTMLInputElement).value })}
              /></label>
              ${this.len(this.t("elevation"), floor.elevation, (v) => this.updateFloor({ elevation: v }))}
              ${admin
                ? html`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${unitLabel(this.t("floor_shift"), this.unit)}</span>
                    <input type=${this.unit === "imperial" ? "text" : "number"} step="0.05" .value=${this.lenValue(this._shiftX)} aria-label="X" @change=${(e: Event) => (this._shiftX = this.readLen((e.target as HTMLInputElement).value) ?? 0)} />
                    <input type=${this.unit === "imperial" ? "text" : "number"} step="0.05" .value=${this.lenValue(this._shiftZ)} aria-label="Z" @change=${(e: Event) => (this._shiftZ = this.readLen((e.target as HTMLInputElement).value) ?? 0)} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX && !this._shiftZ} @click=${() => this.shiftFloor(this._shiftX, this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${() => this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${() => this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${floor.start_view ? html`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${() => this.updateFloor({ start_view: null })}>↺</button>` : nothing}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${(ev: Event) => (this._shiftAll = (ev.target as HTMLInputElement).checked)} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`
                : nothing}
              ${this.len(this.t("height"), floor.height, (v) => this.updateFloor({ height: Math.max(1, v) }), 0.05, 1)}
              ${Object.keys(this.hass?.floors ?? {}).length
                ? html`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!admin} @change=${(e: Event) => this.updateFloor({ ha_floor: (e.target as HTMLSelectElement).value || null })}>
                      <option value="" ?selected=${!floor.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors ?? {})
                        .filter((f) => f.floor_id === floor.ha_floor || !floors.some((x) => x.ha_floor === f.floor_id))
                        .map((f) => html`<option value=${f.floor_id} ?selected=${f.floor_id === floor.ha_floor}>${f.name}</option>`)}
                    </select></label
                  >`
                : nothing}
              ${admin && this.unplacedAreas(floor).length
                ? html`<p class="fp3d-sub fp3d-wide fp3d-area-import">
                    ${this.t("area_rooms_label")}
                    <button class="fp3d-link" title=${this.t("area_rooms_hint")} @click=${() => this.addAreaRooms(floor)}>
                      ${this.t("area_rooms", { n: this.unplacedAreas(floor).length })}
                    </button>
                    ${this.homeName ? html`<br /><small class="fp3d-area-home">${this.t("area_rooms_note", { home: this.homeName })}</small>` : nothing}
                  </p>`
                : nothing}
              ${admin
                ? html`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("floor_order_hint")} @click=${() => this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_order_hint")} @click=${() => this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteFloor()}>${this.t("delete_floor")}</button>
                    ${this.renderPasteButton()}
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${floor.rooms.length < 2} @click=${() => this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                    <button class="fp3d-btn" title=${this.t("straighten_hint")} ?disabled=${!floor.rooms.length} @click=${() => this.straightenFloor()}>
                      ${this.t("straighten")}
                    </button>
                  </div>
                  ${this._notice ? html`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>` : nothing}`
                : nothing}
            </div>`
          : nothing}
      </section>
      ${this._tool === "measure" && floor
        ? this.renderMeasureForm()
        : this.freeWall
        ? this.renderFreeWallForm(this.freeWall)
        : this.outdoorArea
        ? this.renderOutdoorForm(this.outdoorArea)
        : this.opening
        ? this.renderOpeningForm(this.opening)
        : this.furnitureItem
          ? this.renderFurnitureForm(this.furnitureItem)
          : this.device
            ? this.renderDeviceForm(this.device)
          : room
            ? html`${this.renderRoomForm(room, areas)} ${this.renderDeviceList(room)}`
            : floor
              ? html`${this.renderRoomList(floor)} ${this.renderItemsList(floor.furniture, true)} ${this.renderUnplaced()}`
              : nothing}
      ${this.renderHelpLinks()}
      ${admin && SHOW_PRESENCE ? this.renderPresenceSettings() : nothing}
      ${floor && admin ? this.renderBackgroundForm(floor) : nothing}
    `;
  }

  /** A room one place up or down in its floor's list – the room bar of the 3D view shows them in this order (D599). */
  moveRoom(id: string, by: number): void {
    this.change((_d, floor) => {
      const i = floor.rooms.findIndex((r) => r.id === id);
      const j = i + by;
      if (i < 0 || j < 0 || j >= floor.rooms.length) return;
      const [room] = floor.rooms.splice(i, 1);
      floor.rooms.splice(j, 0, room);
    });
  }

  renderRoomList(floor: Floor) {
    if (!floor.rooms.length) return nothing;
    return html`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${floor.rooms.map(
          (r, i) => html`<div class="fp3d-row fp3d-dev-row">
            <button class="fp3d-row fp3d-room-btn" @click=${() => this.selectItem("room", r.id)}>
              <span>${r.name}</span><span class="fp3d-muted">${this.area(polygonArea(r.points))}</span>
            </button>
            ${this.isEditor && floor.rooms.length > 1
              ? html`<button class="fp3d-pin" title=${this.t("room_order_up")} ?disabled=${i === 0} @click=${() => this.moveRoom(r.id, -1)}>↑</button>
                  <button class="fp3d-pin" title=${this.t("room_order_down")} ?disabled=${i === floor.rooms.length - 1} @click=${() => this.moveRoom(r.id, 1)}>↓</button>`
              : nothing}
          </div>`,
        )}
      </div>
    </section>`;
  }

  /**
   * The items of a floor (with their room) or of one room (#75): select one that is hard to hit in the plan,
   * hide it in the plan to reach what is under it, or delete it. The list draws only the rows in view.
   */
  renderItemsList(items: Furniture[], withRoom: boolean) {
    const floor = this.floor;
    if (!floor || !items.length) return nothing;
    const names = withRoom ? new Map(floor.rooms.map((r) => [r.id, r.name])) : null;
    const byRoom = withRoom ? itemsByRoom(floor.rooms, items) : null;
    const roomOf = new Map<string, string>();
    if (byRoom && names) for (const [id, list] of byRoom) for (const f of list) roomOf.set(f.id, id ? (names.get(id) ?? "") : "");
    const set = this._furnitureId ? this.selection() : [];
    const rows: ItemRow[] = items.map((f) => ({
      id: f.id,
      name: f.name || furnitureName(this.hass, f.type),
      note: roomOf.get(f.id),
      hidden: this._hiddenItems.includes(f.id),
      selected: set.includes(f.id),
    }));
    return html`<details class="fp3d-points fp3d-items">
      <summary>${this.t("items_list")} (${items.length})</summary>
      <fp3d-item-list
        .rows=${rows}
        .texts=${{ hide: this.t("item_hide"), show: this.t("item_show"), remove: this.t("delete") }}
        ?editable=${this.isEditor}
        @item-select=${(e: CustomEvent<{ id: string }>) => this.selectFromList(e.detail.id)}
        @item-hide=${(e: CustomEvent<{ id: string }>) => this.toggleItemHidden(e.detail.id)}
        @item-delete=${(e: CustomEvent<{ id: string }>) => void this.deleteFromList(e.detail.id)}
      ></fp3d-item-list>
    </details>`;
  }

  /** The room's doors and windows as a list: a tap selects one that is hard to hit in the plan (#312). */
  renderRoomOpenings(room: Room) {
    const own = (this.floor?.openings ?? []).filter((o) => o.room_id === room.id);
    if (!own.length) return nothing;
    return html`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${own.length})</summary>
      <div class="fp3d-room-list">
        ${own.map(
          (o) => html`<button class="fp3d-row" @click=${() => (this.selectItem("opening", o.id), this.renderRoot.querySelector(".fp3d-side")?.scrollTo(0, 0))}>
            <span>${this.t(`preset_${openingPreset(o)}` as I18nKey)}</span><span class="fp3d-muted">${this.m(o.width, 2)}</span>
          </button>`,
        )}
      </div>
    </details>`;
  }

  renderRoomForm(room: Room, areas: { area_id: string; name: string }[]) {
    const admin = this.isEditor;
    const rect = isAxisRect(room.points);
    const b = bounds(room.points);
    return html`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room", room.id)}</div>
      ${this.renderResizeNote(room)}
      <button class="fp3d-btn fp3d-wv-open" title=${this.t("wall_view_open")} @click=${() => this.openRoomWalls(room)}>▦ ${this.t("wall_view_room")}</button>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${room.name} ?disabled=${!admin} @change=${(e: Event) => this.updateRoom({ name: (e.target as HTMLInputElement).value })}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(room.aliases ?? []).join(", ")} ?disabled=${!admin} placeholder=${this.t("aliases_placeholder")} @change=${(e: Event) => this.updateRoom({ aliases: splitAliases((e.target as HTMLInputElement).value) })}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.setArea((e.target as HTMLSelectElement).value)}>
            <option value="" ?selected=${!room.area_id}>${this.t("no_area")}</option>
            ${areas.map((a) => html`<option value=${a.area_id} ?selected=${a.area_id === room.area_id}>${a.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateRoom({ floor_material: (e.target as HTMLSelectElement).value })}>
            ${FLOOR_MATERIALS.map((m) => html`<option value=${m} ?selected=${m === room.floor_material}>${this.t(`mat_${m}` as I18nKey)}</option>`)}
          </select></label
        >
        ${rect
          ? html`${this.len(this.t("x"), b.x0, (v) => this.setRect("x", v))} ${this.len(this.t("z"), b.z0, (v) => this.setRect("z", v))}
            ${this.len(this.t("width"), b.x1 - b.x0, (v) => this.setRect("w", v), 0.01, 0.05)}
            ${this.len(this.t("depth"), b.z1 - b.z0, (v) => this.setRect("d", v), 0.01, 0.05)}`
          : nothing}
      </div>
      ${this.renderEdgeHeights(room)}
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${unitLabel(this.t("room_ceiling"), this.unit)}
          <input
            type=${this.unit === "imperial" ? "text" : "number"}
            step="0.05"
            min="1"
            placeholder=${this.floor ? this.lenValue(this.floor.height) : ""}
            .value=${room.ceiling_height != null ? this.lenValue(room.ceiling_height) : ""}
            ?disabled=${!admin}
            @change=${(e: Event) => {
              const raw = (e.target as HTMLInputElement).value.trim();
              const v = raw === "" ? null : this.readLen(raw);
              this.updateRoom({ ceiling_height: v === null || v <= 0 ? null : Math.min(30, Math.max(1, v)) });
            }}
        /></label>
        <p class="fp3d-sub fp3d-wide">${this.t("room_ceiling_hint")}</p>
      </div>
      <div class="fp3d-actions">
        <button class="fp3d-btn" title=${this.t("room_start_view_hint")} ?disabled=${!admin} @click=${() => this.rememberRoomView()}>${this.t("room_start_view")}</button>
        ${room.start_view ? html`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!admin} @click=${() => this.updateRoom({ start_view: null })}>↺</button>` : nothing}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net", { a: this.area(polygonArea(room.points)), n: this.area(netRoomArea(room, this.floor!, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior })) })}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${() => void navigator.clipboard?.writeText(room.id).catch(() => undefined)}>${room.id}</code></p>
      ${this.renderRoomClimate(room)} ${this.renderRoomLive(room)} ${this.renderRoomOpenings(room)}
      ${this.renderItemsList(this.floor ? (itemsByRoom(this.floor.rooms, this.floor.furniture).get(room.id) ?? []) : [], false)}
      <details class="fp3d-points" ?open=${!rect}>
        <summary>${this.t("points")} (${room.points.length})</summary>
        ${room.points.map(
          (p, i) => html`<div class="fp3d-point ${i === this._vertex ? "fp3d-point-sel" : ""}">
            <span class="fp3d-muted">${i + 1}</span>
            ${this.len(this.t("x"), p[0], (v) => this.setPoint(i, 0, v))} ${this.len(this.t("z"), p[1], (v) => this.setPoint(i, 1, v))}
            ${admin
              ? html`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${room.points.length <= 3} @click=${() => this.deleteVertex(i)}>
                  ×
                </button>`
              : nothing}
          </div>`,
        )}
      </details>
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${() => (this._packages = !this._packages)}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${() => this.openSpotForm(room)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" title=${withKeys(this.t("duplicate"), ["Ctrl+D"])} @click=${() => this.duplicateRoom()}>${this.t("duplicate")}</button>
            ${this.renderPasteButton()}
            <button class="fp3d-btn fp3d-danger" title=${withKeys(this.t("delete"), ["Del"])} @click=${() => this.deleteRoom()}>${this.t("delete")}</button>
          </div>`
        : nothing}
      ${this.renderModuleRoomFields(room)}
      ${this._spots ? this.renderSpotForm(room) : nothing}
      ${this._packages
        ? html`<div class="fp3d-packages">
            ${PACKAGES.map(
              (p) => html`<button class="fp3d-btn" @click=${() => this.applyPackage(room, p)}>
                <b>${this.t(`pkg_${p}` as I18nKey)}</b><span>${this.t(`pkg_${p}_desc` as I18nKey)}</span>
              </button>`,
            )}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`
        : nothing}
    </section>`;
  }

  /** Adds the furniture of a room package (lamps link to the room's lights automatically). */
  applyPackage(room: Room, pkg: PackageId): void {
    if (!this.isEditor) return;
    const items = furnishRoom(room, pkg, () => uid("furniture"));
    this.change((_, floor) => floor.furniture.push(...items));
    this._packages = false;
    this._notice = this.t("pkg_done", { n: items.length });
  }

  /** Suggests about one spot per 1.2 m in each direction, and the room's first light. */
  openSpotForm(room: Room): void {
    const b = bounds(room.points);
    const lights = this.hass ? areaEntities(this.hass, room.area_id).filter((id) => id.startsWith("light.")) : [];
    this._spots = {
      type: "lamp_downlight",
      rows: Math.max(1, Math.round((b.z1 - b.z0) / 1.2)),
      cols: Math.max(1, Math.round((b.x1 - b.x0) / 1.2)),
      entity: lights[0] ?? null,
    };
  }

  placeSpots(room: Room): void {
    const f = this._spots;
    if (!f || !this.isEditor) return;
    const [w, d, h] = FURNITURE_SIZE[f.type];
    const items = spotGrid(room, f.rows, f.cols).map(([x, z]) => ({
      id: uid("furniture"),
      type: f.type,
      x,
      z,
      rotation: 0,
      w,
      d,
      h,
      variant: null,
      // every spot of the grid follows the same light (spots on one dimmer); "none" = not linked
      entity: f.entity ?? "none",
      power: null,
    }));
    this.change((_, floor) => floor.furniture.push(...items));
    this._spots = null;
    this._notice = this.t("spots_placed", { n: items.length });
  }

  renderSpotForm(room: Room) {
    const f = this._spots!;
    const count = spotGrid(room, f.rows, f.cols).length;
    const lights = this.entityOptions((id) => /^(light|switch|input_boolean)\./.test(id));
    const set = (patch: Partial<NonNullable<Fp3dEditor["_spots"]>>) => (this._spots = { ...f, ...patch });
    return html`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${(e: Event) => set({ type: (e.target as HTMLSelectElement).value as FurnitureType })}>
          ${(["lamp_downlight", "lamp_spot", "lamp_panel", "lamp_ceiling"] as FurnitureType[]).map(
            (t) => html`<option value=${t} ?selected=${t === f.type}>${this.t(`furn_${t}` as I18nKey)}</option>`,
          )}
        </select></label
      >
      ${this.num(this.t("spots_cols"), f.cols, (v) => set({ cols: Math.max(1, Math.min(12, Math.round(v))) }), 1, 1)}
      ${this.num(this.t("spots_rows"), f.rows, (v) => set({ rows: Math.max(1, Math.min(12, Math.round(v))) }), 1, 1)}
      ${this.entitySelect(this.t("furn_entity_light"), f.entity, undefined, lights, (v) => set({ entity: v === "none" ? null : v }))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!count} @click=${() => this.placeSpots(room)}>${this.t("spots_add", { n: count })}</button>
        <button class="fp3d-btn" @click=${() => (this._spots = null)}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`;
  }

  /** An own symbol for the marker (a Material Design icon name), with a preview. */
  iconInput(value: string | null | undefined, onChange: (v: string | null) => void) {
    const name = value ? (value.startsWith("mdi:") ? value : `mdi:${value}`) : "";
    return html`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${value ?? ""} ?disabled=${!this.isEditor} @change=${(e: Event) => onChange((e.target as HTMLInputElement).value.trim().replace(/^mdi:/, "") || null)} />
        ${name ? unsafeHTML(`<ha-icon icon="${name.replace(/[^a-z0-9:-]/gi, "")}"></ha-icon>`) : nothing}
      </span></label
    >`;
  }

  /** How the marker of a device or furniture item shows in 3D. */
  markerSelect(value: MarkerShow | null, onChange: (v: MarkerShow | null) => void) {
    return html`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isEditor} @change=${(e: Event) => onChange(((e.target as HTMLSelectElement).value || null) as MarkerShow | null)}>
        <option value="" ?selected=${!value}>${this.t("marker_show_auto")}</option>
        ${MARKER_SHOWS.map((m) => html`<option value=${m} ?selected=${m === value}>${this.t(`marker_show_${m}` as I18nKey)}</option>`)}
      </select></label
    >`;
  }

  /**
   * The entities a picker offers (#130): kept until an entity comes or goes or a registry changes. An inline filter is
   * named by its source, so pass whatever else it captures (besides `this`, `hass` and module functions) as `deps`.
   */
  entityOptions(filter: (id: string) => boolean, ...deps: unknown[]): EntityOption[] {
    const key = deps.length ? `${filter}|${deps.map(String).join("|")}` : String(filter);
    return this.hassWatch.pause(() => this.optionCache.get(this.rawHass, key, filter));
  }

  planMemo: { doc: Building; entities: unknown; devices: unknown; areas: unknown; count: number; kept: Map<string, unknown> } | null = null;

  /**
   * A value worked out from the plan and Home Assistant's entities (what "automatic" would link): kept while the plan
   * and the registries stay and no entity came or went, so a selection or a state change does not work it out again
   * (it clones the plan's floors and searches every entity, #130).
   */
  keptForPlan<T>(key: string, make: () => T): T {
    const hass = this.rawHass;
    const count = Object.keys(hass?.states ?? {}).length;
    let m = this.planMemo;
    if (!m || m.doc !== this._doc || m.entities !== hass?.entities || m.devices !== hass?.devices || m.areas !== hass?.areas || m.count !== count)
      m = this.planMemo = { doc: this._doc, entities: hass?.entities, devices: hass?.devices, areas: hass?.areas, count, kept: new Map() };
    if (m.kept.has(key)) return m.kept.get(key) as T;
    const value = this.hassWatch.pause(make);
    m.kept.set(key, value);
    return value;
  }

  /** The entities a picker offers, for a filter that stays the same object (a module's field, a kept filter). */
  entityOptionsFor(filter: (id: string) => boolean): EntityOption[] {
    return this.hassWatch.pause(() => this.optionCache.get(this.rawHass, filter, filter));
  }

  /** The circuit a device hangs on (a circuit monitor's channel), so its watts are not counted on top of it (#43). */
  circuitSelect(value: string | null, own: string | null, onChange: (v: string | null) => void) {
    const options = this.entityOptions((id) => this.isPowerSensor(id)).filter((o) => o.id !== own);
    return html`${this.entitySelect(this.t("energy_circuit"), value ?? "none", undefined, options, (v) => onChange(v && v !== "none" ? v : null))}
      <p class="fp3d-sub fp3d-wide">${this.t("energy_circuit_hint")}</p>
      ${value ? nothing : html`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("energy_circuit_unset")}</p>`}`;
  }

  /** The energy sensor whose today's kWh its cable end shows (#29): found on the device unless chosen here. */
  wireEnergySelect(value: string | null, power: string, onChange: (v: string | null) => void) {
    const options = this.entityOptions((id) => id.startsWith("sensor.") && this.hass?.states[id]?.attributes.device_class === "energy");
    const auto = this.hass ? energySensorFor(this.hass, power) : null;
    return html`${this.entitySelect(this.t("energy_wire_sensor"), value, auto, options, onChange)}
      <p class="fp3d-sub fp3d-wide">${this.t("energy_wire_sensor_hint")}</p>`;
  }

  /** The HA area of what the side panel edits (#132): the room an item stands in, else the chosen room's. */
  pickerArea(): string | null {
    const f = this.furnitureItem;
    const roomId = f ? (this.roomAt([f.x, f.z]) ?? this._roomId) : this._roomId;
    return (roomId && this.floor?.rooms.find((r) => r.id === roomId)?.area_id) || null;
  }

  /** `domains`: the link's likely entity domains, best first (#132); with the room's area they lead the list. */
  entitySelect(
    label: string,
    value: string | null,
    auto: string | null | undefined,
    options: { id: string; label: string }[],
    onChange: (v: string | null) => void,
    domains: readonly string[] = [],
  ) {
    const autoLabel =
      auto === undefined ? null : auto ? this.t("entity_auto", { name: entityName(this.hass, auto) }) : this.t("entity_auto_none");
    // searchable picker: the fixed choices (automatic, none) first, then the entities filtered as you type
    const fixed = [...(autoLabel !== null ? [{ id: "__auto", label: autoLabel }] : []), { id: "none", label: this.t("entity_none") }];
    const current = value === null ? (autoLabel !== null ? "__auto" : "none") : value;
    return html`<label class="fp3d-field fp3d-wide"
      >${label}
      <fp3d-entity-picker
        .options=${options}
        .fixed=${fixed}
        .value=${current}
        .prefer=${{ area: this.pickerArea(), domains }}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isEditor}
        @change=${(e: CustomEvent<{ value: string }>) => {
          e.stopPropagation();
          onChange(e.detail.value === "__auto" ? null : e.detail.value);
        }}
      ></fp3d-entity-picker></label
    >`;
  }

  /** Whether an opening sits in an exterior wall (decides the automatic door style). */
  openingIsExterior(o: Opening): boolean {
    const floor = this.floor;
    const host = floor ? openingHost(o, floor.rooms, floor.walls ?? []) : null;
    if (!floor || !host) return false;
    const walls = generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }, floor.walls ?? []);
    return locateOpening(walls.walls, o, host)?.wall.exterior ?? false;
  }

  /** The look of a door or window: automatic (by wall), or one of the built-in styles. */
  /** Front doors with sidelights: which side the single one sits on, and the widths (empty = automatic). */
  renderSidelightFields(o: Opening) {
    if (o.type !== "door") return nothing;
    const style = openingStyle(o, this.openingIsExterior(o));
    if (style !== "sidelight" && style !== "sidelights") return nothing;
    const admin = this.isEditor;
    const width = (key: "sidelight_width" | "sidelight_width2", label: I18nKey) => html`<label class="fp3d-field"
      >${this.t(label)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${o[key] == null ? "" : String(o[key])}
        ?disabled=${!admin}
        @change=${(e: Event) => {
          const v = Number((e.target as HTMLInputElement).value);
          this.updateOpening({ [key]: Number.isFinite(v) && v > 0 ? Math.min(3, Math.max(0.1, Math.round(v * 100) / 100)) : null });
        }}
      />
    </label>`;
    return style === "sidelight"
      ? html`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!o.sidelight_hinge} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ sidelight_hinge: (ev.target as HTMLInputElement).checked })} />
            ${this.t("sidelight_hinge")}</label
          >
          ${width("sidelight_width", "sidelight_width")}`
      : html`${width("sidelight_width", "sidelight_width_left")} ${width("sidelight_width2", "sidelight_width_right")}`;
  }

  renderStyleSelect(o: Opening) {
    const styles = openingStyles(o.type);
    const auto = openingStyle({ type: o.type, style: null }, this.openingIsExterior(o));
    const current = o.style && (styles as readonly string[]).includes(o.style) ? o.style : "";
    return html`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isEditor} @change=${(e: Event) => this.updateOpening({ style: ((e.target as HTMLSelectElement).value || null) as OpeningStyle | null })}>
        <option value="" ?selected=${!current}>${this.t("style_auto", { style: this.t(`style_${auto}` as I18nKey) })}</option>
        ${styles.map((s) => html`<option value=${s} ?selected=${s === current}>${this.t(`style_${s}` as I18nKey)}</option>`)}
      </select></label
    >`;
  }

  /** The door and window kinds as a fixed grid of chips: none moves when another is picked (#63). */
  renderOpeningKinds(active: OpeningPreset, pick: (p: OpeningPreset, ev: Event) => void) {
    return html`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
      ${(Object.keys(OPENING_PRESETS) as OpeningPreset[]).map(
        (p) => html`<button class="fp3d-chip" aria-pressed=${p === active} @click=${(ev: Event) => pick(p, ev)}>${this.t(`preset_${p}` as I18nKey)}</button>`,
      )}
    </div>`;
  }

  /** The kind the next tap in Doors & windows mode adds, picked before placing (#63). */
  pickOpeningKind(preset: OpeningPreset): void {
    this._openingPreset = preset;
  }

  /** "Centre from east corner (m)": the position field names the corner it measures from (#63). */
  openingPositionLabel(o: Opening): string {
    const floor = this.floor;
    const host = floor ? openingHost(o, floor.rooms, floor.walls ?? []) : null;
    if (!host) return this.t("opening_position");
    const corner = edgeStartCorner(host.room, host.edge, this._doc.settings.north ?? 0);
    return this.t("opening_position_from", { corner: this.t(`compass_${corner}` as I18nKey) });
  }

  renderOpeningForm(o: Opening) {
    const admin = this.isEditor;
    const window = o.type === "window";
    const garage = o.type === "garage";
    // what "automatic" would pick: resolve with the opening's own links cleared
    const autoPick = (key: "cover" | "contact") =>
      this.keptForPlan(`opening|${o.id}|${key}`, () => {
        if (!this.hass) return null;
        const probe = structuredClone(this._doc.floors);
        for (const f of probe) for (const x of f.openings) if (x.id === o.id) x[key] = null;
        return openingEntities(this.hass, probe).get(o.id)?.[key] ?? null;
      });
    const dc = (id: string) => this.hass?.states[id]?.attributes.device_class as string | undefined;
    const covers = this.entityOptions((id) => id.startsWith("cover."));
    // a garage door's drive may also be a pulse switch or a button that the opener answers (#677)
    const garageDrives = garage ? this.entityOptions((id) => id.startsWith("cover.") || isPulseDrive(id)) : covers;
    // sensors with a number for the live position of a blind
    const positions = this.entityOptions((id) => /^(sensor|number|input_number)\./.test(id) && Number.isFinite(Number(this.hass?.states[id]?.state)));
    // plain contacts, and handle sensors with three states (open / tilted / closed)
    // a garage door may also be a switch or toggle helper (a relay that drives the door): on = open, a tap switches it
    // a contact: a binary sensor of the door/window kind, or one without any class (KNX, enOcean, templates often
    // have none – they were missing from the list)
    const isContact = (id: string) => id.startsWith("binary_sensor.") && ["door", "window", "opening", "garage_door", ""].includes(dc(id) ?? "");
    const contacts = this.entityOptions(
      (id) =>
        isContact(id) ||
        (numberish(id) && windowPosition(this.hass?.states[id]) !== null) ||
        (garage && /^(switch|input_boolean)\./.test(id)),
      garage,
    );
    // handle sensors: text states (open / tilted / closed), a window_state attribute, or a telling name
    const handles = this.entityOptions((id) => {
      const st = this.hass?.states[id];
      if (id.startsWith("binary_sensor.")) return typeof st?.attributes.window_state === "string";
      return numberish(id) && (windowPosition(st) !== null || /griff|handle|fenster|window|drehgriff/i.test(`${id} ${entityName(this.hass, id)}`));
    });
    const plainContacts = this.entityOptions(isContact);
    type Kind = NonNullable<Opening["sensor"]>;
    const leafSensors = (leaf: 1 | 2) => {
      const main = leaf === 1;
      const tilt = main ? o.tilt : (o.tilt2 ?? null);
      const contact = main ? o.contact : o.contact2;
      const kind: Kind = (main ? o.sensor : o.sensor2) ?? (tilt && tilt !== "none" ? "contact_tilt" : "contact");
      const setContact = (v: string | null) => this.updateOpening(main ? { contact: v } : { contact2: v === "none" ? null : v });
      return html`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!admin}
            @change=${(e: Event) => {
              const next = (e.target as HTMLSelectElement).value as Kind;
              const clearTilt = next === "contact_tilt" ? {} : main ? { tilt: null } : { tilt2: null };
              this.updateOpening({ ...(main ? { sensor: next } : { sensor2: next }), ...clearTilt });
            }}
          >
            ${(["contact", "handle", "contact_tilt"] as const).map((k) => html`<option value=${k} ?selected=${k === kind}>${this.t(`sensor_kind_${k}`)}</option>`)}
          </select></label
        >
        ${kind === "handle"
          ? this.entitySelect(this.t("handle_entity"), contact, undefined, handles, (v) => setContact(v === "none" ? (main ? "none" : null) : v))
          : this.entitySelect(this.t("contact_entity"), contact, main ? autoPick("contact") : undefined, plainContacts, setContact)}
        ${kind === "contact_tilt"
          ? this.entitySelect(this.t("tilt_entity"), tilt, undefined, contacts, (v) => this.updateOpening(main ? { tilt: v === "none" ? null : v } : { tilt2: v === "none" ? null : v }))
          : nothing}
        ${main
          ? html`${this.entitySelect(this.t("tilt_angle_entity"), o.tilt_angle ?? null, undefined, this.entityOptions((id) => numberish(id)), (v) => this.updateOpening({ tilt_angle: v === "none" ? null : v }))}
            ${o.tilt_angle && o.tilt_angle !== "none"
              ? html`${this.num(this.t("tilt_angle_max"), o.tilt_max ?? 15, (v) => this.updateOpening({ tilt_max: Math.min(90, Math.max(1, v)) }), 1, 1)}
                ${this.num(this.t("tilt_angle_offset"), o.tilt_offset ?? 0, (v) => this.updateOpening({ tilt_offset: v }), 0.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!o.tilt_invert} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ tilt_invert: (ev.target as HTMLInputElement).checked })} />
                  ${this.t("tilt_angle_invert")}</label
                >`
              : nothing}`
          : nothing}`;
    };
    const preset = openingPreset(o);
    const door = o.type === "door";
    const minH = this.openingFormMin?.id === o.id ? this.openingFormMin.h : 0;
    return html`<section style=${minH ? `min-height:${Math.round(minH)}px` : ""}>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${preset}` as I18nKey)}</h3>${this.fixButton("opening", o.id)}</div>
      ${admin ? html`<p class="fp3d-sub">${this.t("opening_change_to")}</p>` : nothing}
      ${admin
        ? this.renderOpeningKinds(preset, (p, ev) => {
            // the panel below the chips changes with the kind: keep it at least as tall as it was, so the chips
            // (and the scroll position) stay where they are for the next tap (#63)
            const section = (ev.currentTarget as Element | null)?.closest?.("section") as HTMLElement | null;
            const h = section?.getBoundingClientRect().height ?? 0;
            const prev = this.openingFormMin?.id === o.id ? this.openingFormMin.h : 0;
            this.openingFormMin = { id: o.id, h: Math.max(prev, h) };
            this.setOpeningPreset(o, p);
          })
        : nothing}
      ${admin && !garage
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${() => this.updateOpening({ hinge: o.hinge === "left" ? "right" : "left" })}>
              ⇆ ${this.t(o.leaves === 2 ? "flip_main_leaf" : "flip_hinge")}
            </button>
            ${door || (window && o.sill < 0.1)
              ? html`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${() => this.updateOpening({ swing: o.swing === "out" ? "in" : "out" })}>
                  ⇅ ${this.t("flip_swing")}
                </button>`
              : nothing}
          </div>`
        : nothing}
      <div class="fp3d-form">
        ${this.len(this.t("width"), o.width, (v) => this.updateOpening({ width: Math.max(0.3, v) }), 0.01, 0.3)}
        ${this.len(this.openingPositionLabel(o), o.offset, (v) => this.updateOpening({ offset: Math.max(0, v) }), 0.01, 0)}
        ${window ? this.len(this.t("sill"), o.sill, (v) => this.updateOpening({ sill: Math.max(0, v) }), 0.01, 0) : nothing}
        ${this.len(this.t("opening_height"), o.height, (v) => this.updateOpening({ height: Math.max(0.3, v) }), 0.01, 0.3)}
        ${window && this.isEditor
          ? html`<div class="fp3d-actions fp3d-wide">
              <button
                class="fp3d-btn"
                title=${this.t("cellar_window_hint")}
                @click=${() => {
                  // small and high up in the wall: 1.0 × 0.5 m, its top 25 cm under the ceiling
                  const h = this.floor?.height ?? 2.5;
                  this.updateOpening({ width: 1, height: 0.5, sill: Math.max(0, Math.round((h - 0.75) * 100) / 100) });
                }}
              >
                ▭ ${this.t("cellar_window")}
              </button>
            </div>`
          : nothing}
        ${this.renderStyleSelect(o)}
        ${window
          ? html`<label class="fp3d-field fp3d-wide" title=${this.t("sill_board_hint")}
              >${this.t("sill_board")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateOpening({ sill_board: ((e.target as HTMLSelectElement).value || "auto") as SillBoard })}>
                ${SILL_BOARDS.map((m) => html`<option value=${m} ?selected=${(o.sill_board ?? "auto") === m}>${this.t(`sill_board_${m}`)}</option>`)}
              </select></label
            >`
          : nothing}
        ${this.renderSidelightFields(o)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isEditor} @change=${(e: Event) => this.updateOpening({ mark: (e.target as HTMLSelectElement).value === "closed" ? "closed" : null })}>
            <option value="" ?selected=${o.mark !== "closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${o.mark === "closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${garage
          ? nothing
          : html`<label class="fp3d-field fp3d-wide"
          >${this.t(o.leaves === 2 ? "main_leaf" : "hinge")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateOpening({ hinge: (e.target as HTMLSelectElement).value as "left" | "right" })}>
            <option value="left" ?selected=${o.hinge === "left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${o.hinge === "right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${window || garage || door ? this.entitySelect(this.t(window ? "cover_entity" : "door_cover"), o.cover, autoPick("cover"), garage ? garageDrives : covers, (v) => this.updateOpening({ cover: v })) : nothing}
        ${garage && isPulseDrive(o.cover) ? html`<p class="fp3d-sub fp3d-wide">${this.t("garage_pulse_hint")}</p>` : nothing}
        ${(window || garage || door) && o.cover !== "none" && (o.cover || autoPick("cover"))
          ? html`${isPulseDrive(o.cover) ? nothing : this.entitySelect(this.t("cover_position_entity"), o.position ?? null, undefined, positions, (v) => this.updateOpening({ position: v === "none" ? null : v }))}
              ${o.position && !isPulseDrive(o.cover)
                ? html`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!admin}
                      .checked=${!!o.position_inverted}
                      @change=${(ev: Event) => this.updateOpening({ position_inverted: (ev.target as HTMLInputElement).checked })}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`
                : nothing}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!admin} .checked=${!!o.confirm} @change=${(ev: Event) => this.updateOpening({ confirm: (ev.target as HTMLInputElement).checked })} />
                ${this.t("device_confirm")}</label
              >`
          : nothing}
        ${window
          ? html`${o.leaves === 2 ? html`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>` : nothing}
              ${leafSensors(1)} ${o.leaves === 2 ? html`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${leafSensors(2)}` : nothing}
              ${o.sill <= 0.01
                ? html`${this.entitySelect(this.t("door_lock"), o.lock ?? null, undefined, this.entityOptions((id) => id.startsWith("lock.")), (v) => this.updateOpening({ lock: v === "none" ? null : v }))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`
                : nothing}`
          : html`${this.entitySelect(this.t(o.leaves === 2 ? "contact_main" : "contact_entity"), o.contact, autoPick("contact"), contacts, (v) => this.updateOpening({ contact: v }))}
              ${o.leaves === 2 && !garage
                ? this.entitySelect(this.t("contact_second"), o.contact2, undefined, contacts, (v) => this.updateOpening({ contact2: v === "none" ? null : v }))
                : nothing}
              ${door
                ? html`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!o.shut} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ shut: (ev.target as HTMLInputElement).checked })} />
                    ${this.t("door_shut")}</label
                  >
                  <label class="fp3d-field" title=${this.t("door_angle_hint")}
                    >${this.t("door_angle")}
                    <select
                      ?disabled=${!admin}
                      @change=${(ev: Event) => {
                        const v = Number((ev.target as HTMLSelectElement).value);
                        this.updateOpening({ open_angle: v > 0 ? v : null });
                      }}
                    >
                      <option value="0" ?selected=${!o.open_angle}>${this.t("door_angle_default")}</option>
                      ${[15, 30, 45, 60, 90].map((a) => html`<option value=${a} ?selected=${o.open_angle === a}>${a}°</option>`)}
                      ${o.open_angle && ![15, 30, 45, 60, 90].includes(o.open_angle) ? html`<option value=${o.open_angle} selected>${o.open_angle}°</option>` : nothing}
                    </select></label
                  >
                  ${this.entitySelect(this.t("door_lock"), o.lock ?? null, undefined, this.entityOptions((id) => id.startsWith("lock.")), (v) => this.updateOpening({ lock: v === "none" ? null : v }))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`
                : nothing}`}
        ${o.contact !== "none" && (o.contact || o.contact2 || autoPick("contact"))
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!o.contact_invert} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ contact_invert: (ev.target as HTMLInputElement).checked })} />
              ${this.t("contact_invert")}</label
            >`
          : nothing}
        ${this.floor && windowGetsWell(this._doc, this.floor, o)
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("well_hint")}
                ><input type="checkbox" .checked=${o.well !== false} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ well: (ev.target as HTMLInputElement).checked ? undefined : false })} />
                ${this.t("well")}</label
              >
              ${o.well !== false ? this.len(this.t("well_rim"), o.well_rim ?? 0, (v) => this.updateOpening({ well_rim: Math.max(-0.3, Math.min(1, v)) || null }), 0.01, -0.3) : nothing}`
          : nothing}
        ${o.type === "window"
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!o.rain_ignore} ?disabled=${!admin} @change=${(ev: Event) => this.updateOpening({ rain_ignore: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("rain_ignore")}</label
            >`
          : nothing}
      </div>
      <p class="fp3d-sub">${this.t(window ? "opening_hint" : garage ? "garage_hint" : "door_hint")}</p>
      ${admin
        ? html`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${() => this.deleteOpening()}>${this.t("delete")}</button></div>`
        : nothing}
    </section>`;
  }

  renderFurnitureForm(f: Furniture) {
    if (this.selection().length > 1) return this.renderBlockForm();
    const admin = this.isEditor;
    const panel = furniturePanel({ mirror: !isLamp(f.type), strip: f.type === "led_strip", lift: canLift(f) && !!this.floor, floors: this._doc.floors.length > 1 });
    return html`<section>
      <div class="fp3d-pos-head">
        <div class="fp3d-h3row"><h3>${f.name || this.t("furniture")}</h3>${this.fixButton("furniture", f.id)}</div>
        <div class="fp3d-form">${panel.head.map((field) => this.furnitureField(f, field))}</div>
      </div>
      ${f.group
        ? html`<p class="fp3d-sub fp3d-block-note">▣ ${this.t("block_part")} <button class="fp3d-link" @click=${() => {
            this._single = false;
            this.requestUpdate();
          }}>${this.t("block_select")}</button></p>`
        : nothing}
      <div class="fp3d-form">${panel.body.map((field) => this.furnitureField(f, field))}</div>
      ${this.renderColourRoles(f)}
      ${f.type === "stairs" ? html`<p class="fp3d-sub">${this.t("stairs_hint")}</p>` : nothing}
      ${f.type === "stairs" ? this.renderStairOptions(f) : nothing}
      ${f.type === "stairs_u" ? html`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>` : nothing}
      ${f.type === "stairwell"
        ? html`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor && !this.floor.rooms.some((r) => r.points.length >= 3 && (holeInRoom(furnitureFootprint(f), r.points) || polygonArea(clipConvex(r.points, furnitureFootprint(f))) > 0.01))
              ? html`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`
              : nothing}`
        : nothing}
      ${f.type === "inverter" || f.type === "home_battery"
        ? html`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ variant: (e.target as HTMLSelectElement).value || null })}>
                ${(f.type === "inverter" ? (["", "slim", "hybrid"] as const) : (["", "wall", "cube"] as const)).map(
                  (v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(`${f.type === "inverter" ? "inverter" : "battery"}_${v || "std"}` as I18nKey)}</option>`,
                )}
              </select></label
            >
          </div>`
        : nothing}
      ${f.type === "lamp_pendant"
        ? html`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ variant: (e.target as HTMLSelectElement).value || null })}>
                ${(["", "globe", "cone", "drum"] as const).map(
                  (v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(`pendant_${v || "shade"}` as I18nKey)}</option>`,
                )}
              </select></label
            >
          </div>`
        : nothing}
      ${isElectric(f.type) ? this.renderFurnitureLinks(f) : !NO_STATE_TYPES.has(f.type) ? html`<div class="fp3d-form fp3d-links">${this.renderStateLinks(f)}</div>` : nothing} ${GANG_TYPES.has(f.type) ? this.renderGangsForm(f) : nothing} ${TECH_TYPES.has(f.type) ? this.renderTechForm(f) : nothing} ${f.type === "parking" ? this.renderParkingForm(f) : nothing} ${f.type === "waste_bin" || f.type === "mailbox" ? this.renderHouseholdForm(f) : this.renderHouseholdExtras(f)}
      ${this.renderModuleFurnitureFields(f)}
      ${this.renderShowWhen(f)}
      ${this.renderItemActions(f.actions, f.entity && f.entity !== "none" ? f.entity : null, (a) => this.updateFurniture({ actions: a }))}
      ${/^pack:[^:]+\.vehicles:/.test(f.type) && this.isEditor
        ? html`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${() => this.vehicleToSpot(f)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`
        : nothing}
      ${this.rackOf(f) ? this.renderRackFrameForm(f) : nothing}
      ${this.renderRackElevation(f)}
      ${this.renderRackCardForm(f)}
      ${!admin && this.rackOf(f) ? html`<div class="fp3d-actions"><button class="fp3d-btn" @click=${() => this.openRackSheet()}>▤ ${this.t("rack_edit")}</button></div>` : nothing}
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${withKeys(this.t("rotate_left"), ["Shift+R"])} @click=${() => this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" title=${withKeys(this.t("rotate_right"), ["R"])} @click=${() => this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${() => this.openWallViewFor(f)}>▦ ${this.t("wall_view")}</button>
            ${this.rackOf(f) ? html`<button class="fp3d-btn" @click=${() => this.openRackSheet()}>▤ ${this.t("rack_edit")}</button>` : nothing}
            ${f.entity && f.entity !== "none" && f.type !== "parking" ? html`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${() => this.furnitureToDevice(f)}>${this.t("as_device")}</button>` : nothing}
            ${this.renderClipButtons()}
            <button class="fp3d-btn fp3d-danger" title=${withKeys(this.t("delete"), ["Del"])} @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>
          </div>
          ${this.renderMultiToggle()}`
        : nothing}
    </section>`;
  }

  /** One field (or a few that belong together) of the item panel, in the order of furnitureFields (#70). */
  furnitureField(f: Furniture, field: FurnitureField) {
    const admin = this.isEditor;
    switch (field) {
      case "x":
        return this.len(this.t("x"), f.x, (v) => this.updateFurniture({ x: v }));
      case "z":
        return this.len(this.t("z"), f.z, (v) => this.updateFurniture({ z: v }));
      case "rotation":
        return this.num(this.t("rotation"), f.rotation, (v) => this.updateFurniture({ rotation: ((v % 360) + 360) % 360 }), 1);
      case "w":
        return this.len(this.t("width"), f.w, (v) => this.updateFurniture({ w: Math.max(0.01, v) }), 0.01, 0.01);
      case "d":
        return this.len(this.t("depth"), f.d, (v) => this.updateFurniture({ d: Math.max(0.01, v) }), 0.01, 0.01);
      case "h":
        return this.len(this.t("height_m"), f.h, (v) => this.updateFurniture({ h: Math.max(0.005, v) }), 0.01, 0);
      case "mount":
        return html`${this.len(this.t("mount_height"), f.mount_y ?? mountBase(this.floor!, f), (v) => this.updateFurniture({ mount_y: Math.min(MAX_MOUNT_Y, Math.max(0, v)) }), 0.01, 0)}
          ${f.mount_y != null ? html`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!admin} @click=${() => this.updateFurniture({ mount_y: null })}>${this.t("height_auto")}</button>` : nothing}`;
      case "mirror":
        return html`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
          ><input type="checkbox" .checked=${!!f.mirror} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ mirror: (ev.target as HTMLInputElement).checked })} />
          ${this.t("furn_mirror")}</label
        >`;
      case "strip":
        return html`${this.num(this.t("strip_tilt"), f.tilt ?? 0, (v) => this.updateFurniture({ tilt: Math.max(-90, Math.min(90, Math.round(v))) }), 5)}
          ${f.upright ? nothing : html`<span title=${this.t("strip_rise_hint")}>${this.num(this.t("strip_rise"), f.rise ?? 0, (v) => this.updateFurniture({ rise: Math.max(-80, Math.min(80, Math.round(v))) || undefined }), 5)}</span>`}
          <label class="fp3d-check" title=${this.t("strip_upright_hint")}
            ><input type="checkbox" .checked=${!!f.upright} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ upright: (ev.target as HTMLInputElement).checked })} />
            ${this.t("strip_upright")}</label
          >`;
      case "name":
        return html`<label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${f.name ?? ""} ?disabled=${!admin} placeholder=${this.t(`furn_${f.type}` as I18nKey) === `furn_${f.type}` ? "" : this.t(`furn_${f.type}` as I18nKey)} @change=${(e: Event) => this.updateFurniture({ name: (e.target as HTMLInputElement).value.trim() || null })} />
        </label>`;
      case "show_name":
        // always there (greyed out until the item has a name), so naming an item moves no row (#71)
        return html`<label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${!!f.show_name && !!f.name} ?disabled=${!admin || !f.name} @change=${(ev: Event) => this.updateFurniture({ show_name: (ev.target as HTMLInputElement).checked || undefined })} />
          ${this.t("show_name")}</label
        >`;
      case "aliases":
        return html`<label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(f.aliases ?? []).join(", ")} ?disabled=${!admin} placeholder=${this.t("aliases_placeholder")} @change=${(e: Event) => this.updateFurniture({ aliases: splitAliases((e.target as HTMLInputElement).value) })}
        /></label>`;
      case "type":
        return html`<label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.retypeFurniture((e.target as HTMLSelectElement).value)}>
            ${this.typeChoices(f.type).map((t) => html`<option value=${t} ?selected=${t === f.type}>${this.t(`furn_${t}` as I18nKey)}</option>`)}
            ${(this.packs ?? [])
              .filter((pack) => pack.items.length)
              .map(
                (pack) => html`<optgroup label=${packName(pack, this.hass?.language ?? "de")}>
                  ${this.typeLabels(pack).map((label, i) => {
                    const t = packType(pack.id, pack.items[i].id);
                    return html`<option value=${t} ?selected=${t === f.type}>${label}</option>`;
                  })}
                </optgroup>`,
              )}
            ${f.type.startsWith("pack:") && !(this.packs ?? []).some((p) => f.type.startsWith(`pack:${p.id}:`))
              ? html`<option value=${f.type} selected>${furnitureName(this.hass, f.type)}</option>`
              : nothing}
          </select></label
        >`;
      case "floor":
        return this.renderItemFloor();
    }
  }

  /** The floor the chosen item (block, multi selection) stands on: picking another moves it there (#73). */
  renderItemFloor() {
    return html`<label class="fp3d-field fp3d-wide" title=${this.t("item_floor_hint")}
      >${this.t("floor")}
      <select ?disabled=${!this.isEditor} @change=${(e: Event) => this.moveSelectionToFloor((e.target as HTMLSelectElement).value)}>
        ${[...this._doc.floors].reverse().map((fl) => html`<option value=${fl.id} ?selected=${fl.id === this._floorId}>${fl.name}</option>`)}
      </select></label
    >`;
  }

  setEnergy(patch: Partial<Building["energy"]>): void {
    const next = structuredClone(this._doc);
    next.energy = { ...next.energy, ...patch };
    this.setDoc(next);
  }

  /** Fill the balance from Home Assistant's energy dashboard: its statistics lead to power sensors of the same devices. */
  async importEnergyPrefs(): Promise<void> {
    if (!this.hass) return;
    let prefs: EnergyPrefs;
    try {
      prefs = await this.hass.callWS<EnergyPrefs>({ type: "energy/get_prefs" });
    } catch {
      this._energyNote = this.t("energy_import_failed");
      return;
    }
    const found = proposeEnergySensors(this.hass, prefs);
    // the sensors go to the devices in the plan (meter, inverter, battery), which are created when missing;
    // only empty fields are filled: what the user chose stays
    let n = 0;
    const find = (type: string) => this._doc.floors.flatMap((f) => f.furniture).find((m) => m.type === type);
    const put = (type: string, key: "power" | "soc", value: string | null | undefined) => {
      if (!value) return;
      let m = find(type);
      if (!m && this.floor) {
        this.addEnergyDevice(type);
        m = find(type);
      }
      if (!m || (m[key] && m[key] !== "none")) return;
      const id = m.id;
      this.change((d) => {
        const x = d.floors.flatMap((f) => f.furniture).find((y) => y.id === id);
        if (x) x[key] = value;
      });
      n++;
    };
    put("meter", "power", found.grid);
    put("inverter", "power", found.solar);
    put("home_battery", "power", found.battery);
    put("home_battery", "soc", found.battery_soc);
    // gas and water meters go to the balance itself (they have no device in the plan)
    const meters = proposeMeters(prefs);
    for (const key of ["gas", "water"] as const) {
      if (meters[key] && !this._doc.energy[key]) {
        this.setEnergy({ [key]: meters[key] });
        n++;
      }
    }
    this.selectItem("furniture", null);
    this._energyNote = n ? this.t("energy_import_done", { n }) : this.t("energy_import_none");
  }

  /** Grid, solar, battery and house sensors: from the devices in the plan unless chosen here. */
  renderEnergyBalance() {
    const e = this._doc.energy;
    const admin = this.isEditor;
    const attr = (id: string, key: string) => this.hass?.states[id]?.attributes[key] as string | undefined;
    const power = this.entityOptions((id) => this.isPowerSensor(id));
    const soc = this.entityOptions((id) => numberish(id) && attr(id, "device_class") === "battery");
    const tariff = this.entityOptions(
      (id) => numberish(id) && (attr(id, "device_class") === "monetary" || /\/(kWh|MWh)$/.test(attr(id, "unit_of_measurement") ?? "")),
    );
    // the cheap rate (#29): anything that is on while it runs (a binary sensor, a schedule, an input boolean)
    const cheap = this.entityOptions((id) => /^(binary_sensor|schedule|input_boolean|switch)\./.test(id));
    const pick = (key: "grid" | "solar" | "battery" | "battery_soc" | "consumption" | "tariff") => (v: string | null) => this.setEnergy({ [key]: v === "none" ? null : v });
    // gas and water meters: counters of that device class, or in m³, litres, ft³ or gallons
    const meter = (kind: "gas" | "water") =>
      this.entityOptions((id) => numberish(id) && (attr(id, "device_class") === kind || /^(m³|m3|L|l|ft³|gal|CCF)$/.test(attr(id, "unit_of_measurement") ?? "")), kind);
    const links = this.hass ? furnitureEntities(this.hass, this._doc.floors) : new Map<string, { power: string | null }>();
    const devices = deviceSensors(this._doc, (f) => this.devicePower(f, links));
    // the usual trap: a sign the wrong way round – exporting without any sun, or a battery charging at night
    const sum = this.hass ? energySummary(this.hass, this._doc, [], devices) : null;
    const night = !!sum && (sum.solar ?? 0) < 20;
    const gridWrong = night && sum!.grid !== null && sum!.grid < -50;
    const batteryWrong = night && sum!.battery !== null && sum!.battery < -50 && (sum!.grid ?? 0) <= 0;
    return html`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${gridWrong
        ? html`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.setEnergy({ grid_invert: !e.grid_invert })}>${this.t("energy_sign_flip")}</button></p>`
        : nothing}
      ${batteryWrong
        ? html`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.setEnergy({ battery_invert: !e.battery_invert })}>${this.t("energy_sign_flip")}</button></p>`
        : nothing}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"), e.grid, devices.grid, power, pick("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.grid_invert} ?disabled=${!admin} @change=${(ev: Event) => this.setEnergy({ grid_invert: (ev.target as HTMLInputElement).checked })} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"), e.solar, devices.solar[0] ?? null, power, pick("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"), e.battery, devices.battery[0] ?? null, power, pick("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.battery_invert} ?disabled=${!admin} @change=${(ev: Event) => this.setEnergy({ battery_invert: (ev.target as HTMLInputElement).checked })} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"), e.battery_soc, devices.soc[0] ?? null, soc, pick("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"), e.consumption, null, power, pick("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"), e.tariff, undefined, tariff, pick("tariff"))}
        ${this.entitySelect(this.t("energy_gas_meter"), e.gas ?? null, undefined, meter("gas"), (v) => this.setEnergy({ gas: v === "none" ? null : v }))}
        ${this.entitySelect(this.t("energy_water_meter"), e.water ?? null, undefined, meter("water"), (v) => this.setEnergy({ water: v === "none" ? null : v }))}
      </div>
      <p class="fp3d-sub">${this.t("energy_meters_hint")}</p>
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_cheap_rate"), e.cheap_rate ?? null, undefined, cheap, (v) => this.setEnergy({ cheap_rate: v === "none" ? null : v }))}
        <label class="fp3d-field"
          >${this.t("energy_cheap_from")}
          <input type="time" .value=${e.cheap_from ?? ""} ?disabled=${!admin} @change=${(ev: Event) => this.setEnergy({ cheap_from: (ev.target as HTMLInputElement).value || null })}
        /></label>
        <label class="fp3d-field"
          >${this.t("energy_cheap_to")}
          <input type="time" .value=${e.cheap_to ?? ""} ?disabled=${!admin} @change=${(ev: Event) => this.setEnergy({ cheap_to: (ev.target as HTMLInputElement).value || null })}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("energy_cheap_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!admin || !this.hass} @click=${() => this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote ? html`<p class="fp3d-sub">${this._energyNote}</p>` : nothing}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`;
  }

  /** Attic floors: dashed lines where the roof slope leaves 1.5 m and 2 m of headroom, with labels. */
  renderHeadroom(floor: Floor) {
    const ceiling = floor.elevation + floor.height;
    const sections = activeSections(this._doc);
    if (!sections.some((s) => sectionCutsBelow(s, ceiling) && sectionAbove(s, floor.elevation))) return nothing;
    const b = { settings: this._doc.settings };
    return svg`${[1.5, 2].map((h) =>
      headroomLines(b, floor.elevation, h).map(([p, q]) => {
        const [x1, y1] = this.toScreen(p);
        const [x2, y2] = this.toScreen(q);
        return svg`<line class="fp3d-headroom" x1=${x1} y1=${y1} x2=${x2} y2=${y2} />
          <text class="fp3d-headroom-label" x=${(x1 + x2) / 2} y=${(y1 + y2) / 2 - 4}>${this.m(h, 1)}</text>`;
      }),
    )}`;
  }

  /** Favourites of the house: scenes, scripts and switches in the central menu (star) of the 3D view (#145). */
  renderFavorites() {
    const list = this._doc.settings.favorites ?? [];
    const domains = ["scene", "script", "automation", "button", "input_button", "switch", "input_boolean", "light", "fan", "cover", "lock"];
    const options = this.entityOptions((id) => domains.includes(id.split(".")[0]) && !list.includes(id), list.join(","));
    const set = (next: string[]) => this.change((d) => (d.settings.favorites = next.length ? next : undefined));
    const move = (i: number, by: number) => {
      const next = [...list];
      const [x] = next.splice(i, 1);
      next.splice(Math.max(0, Math.min(next.length, i + by)), 0, x);
      set(next);
    };
    return html`<details class="fp3d-section">
      <summary>${this.t("favorites")}${list.length ? html` <span class="fp3d-lib-count">${list.length}</span>` : nothing}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${list.map(
        (id, i) => html`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${entityName(this.hass, id)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${i === 0} @click=${() => move(i, -1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${i === list.length - 1} @click=${() => move(i, 1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${() => set(list.filter((x) => x !== id))}>✕</button>
        </div>`,
      )}
      ${list.length < 40
        ? html`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"), null, undefined, options, (v) => {
              if (v && v !== "none" && !list.includes(v)) set([...list, v]);
            })}
          </div>`
        : nothing}
    </details>`;
  }

  /** Klang & Kino: stations and playlists to start on a speaker from its quick menu. */
  renderMediaPresets() {
    const list = this._doc.settings.media_presets ?? [];
    const set = (next: MediaPreset[]) => this.change((d) => (d.settings.media_presets = next.length ? next : undefined));
    const upd = (i: number, patch: Partial<MediaPreset>) => set(list.map((p, j) => (j === i ? { ...p, ...patch } : p)));
    return html`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music", "url", "playlist", "SPOTIFY", "AMAZON_MUSIC", "TUNEIN", "APPLE_MUSIC"].map((t) => html`<option value=${t}></option>`)}
      </datalist>
      ${list.map(
        (p, i) => html`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${p.label} @change=${(e: Event) => upd(i, { label: (e.target as HTMLInputElement).value.trim() || "Radio" })}
          /></label>
          <label class="fp3d-field" title=${this.t("preset_type_hint")}
            >${this.t("preset_type")}
            <input type="text" list="fp3d-preset-types" .value=${p.type} @change=${(e: Event) => upd(i, { type: (e.target as HTMLInputElement).value.trim() || "music" })}
          /></label>
          <label class="fp3d-field fp3d-wide" title=${this.t("preset_content_hint")}
            >${this.t("preset_content")}
            <input type="text" .value=${p.content} placeholder="https://… · spotify:playlist:… · Rock Antenne" @change=${(e: Event) => upd(i, { content: (e.target as HTMLInputElement).value.trim() })}
          /></label>
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn fp3d-danger" @click=${() => set(list.filter((_, j) => j !== i))}>${this.t("delete")}</button>
          </div>
        </div>`,
      )}
      ${list.length < 30
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${() => set([...list, { id: uid("preset"), label: "Radio", type: "music", content: "" }])}>+ ${this.t("preset_add")}</button>
          </div>`
        : nothing}`;
  }

  /**
   * Own tap, hold and double-tap actions of a device or item (#6). Only editors change them; everyone who can
   * see the view can use them.
   */
  renderItemActions(actions: ItemActions | null | undefined, ownEntity: string | null, onChange: (next: ItemActions | null) => void) {
    const admin = this.isEditor;
    const set = (g: Gesture, patch: Partial<ItemAction> | null) => {
      const cur = actions?.[g];
      onChange(withGesture(actions, g, patch === null ? null : ({ ...(cur ?? { action: "default" }), ...patch } as ItemAction)));
    };
    const placeholder = (type: ActionType) =>
      type === "navigate" ? "/lovelace/garden" : type === "url" ? "https://" : type === "perform_action" ? "script.turn_on" : (ownEntity ?? "light.kitchen");
    return html`<h4>${this.t("item_actions")}</h4>
      <p class="fp3d-sub">${this.t("item_actions_hint")}</p>
      ${admin && !this.isHaAdmin ? html`<p class="fp3d-sub">${this.t("item_action_perform_admin")}</p>` : nothing}
      ${GESTURES.map((g) => {
        const a = actions?.[g] ?? null;
        const type: ActionType = a?.action ?? "default";
        const runs = type !== "default" && type !== "none";
        // a perform_action only an admin changes (#51): an editor may replace it, not edit it
        const locked = !admin || performActionLocked(a, this.isHaAdmin);
        return html`<div class="fp3d-form fp3d-item-action" data-gesture=${g}>
          <label class="fp3d-field fp3d-wide"
            >${this.t(`item_gesture_${g}` as I18nKey)}
            <select ?disabled=${!admin} @change=${(e: Event) => {
              const v = (e.target as HTMLSelectElement).value as ActionType;
              set(g, v === "default" ? null : { action: v, target: null, data: null });
            }}>
              ${ACTION_TYPES.map((t) => html`<option value=${t} ?selected=${t === type} ?disabled=${!actionTypeChoosable(t, a, this.isHaAdmin)}>${this.t(`item_action_${t}` as I18nKey)}</option>`)}
            </select></label
          >
          ${runs
            ? html`<label class="fp3d-field fp3d-wide"
                >${this.t(`item_target_${type}` as I18nKey)}
                <input type="text" maxlength="2000" .value=${a?.target ?? ""} ?disabled=${locked} placeholder=${placeholder(type)} @change=${(e: Event) => set(g, { target: (e.target as HTMLInputElement).value.trim() || null })}
              /></label>`
            : nothing}
          ${type === "perform_action"
            ? html`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="3"
                  spellcheck="false"
                  ?disabled=${locked}
                  placeholder='{"entity_id": "script.movie_night"}'
                  .value=${a?.data ? JSON.stringify(a.data, null, 1) : ""}
                  @change=${(e: Event) => {
                    const el = e.target as HTMLTextAreaElement;
                    el.setCustomValidity("");
                    try {
                      set(g, { data: parseActionData(el.value) });
                    } catch {
                      el.setCustomValidity(this.t("own_data_bad"));
                      el.reportValidity();
                    }
                  }}
                ></textarea></label
              >`
            : nothing}
          ${runs
            ? html`<label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!a?.confirm} ?disabled=${locked} @change=${(ev: Event) => set(g, { confirm: (ev.target as HTMLInputElement).checked || undefined })} />
                  ${this.t("item_action_confirm")}</label
                >
                ${a?.confirm
                  ? html`<label class="fp3d-field fp3d-wide"
                      >${this.t("item_action_confirm_text")}
                      <input type="text" maxlength="300" .value=${a.confirm_text ?? ""} ?disabled=${locked} placeholder=${this.t("item_action_confirm_placeholder")} @change=${(e: Event) => set(g, { confirm_text: (e.target as HTMLInputElement).value.trim() || null })}
                    /></label>`
                  : nothing}`
            : nothing}
        </div>`;
      })}`;
  }

  /** Own buttons of the central menu (D143): label, icon, action, target and data. */
  renderOwnButtons() {
    const list = this._doc.settings.buttons ?? [];
    const set = (next: CustomButton[]) => this.change((d) => (d.settings.buttons = next.length ? next : undefined));
    const upd = (i: number, patch: Partial<CustomButton>) => set(list.map((b, j) => (j === i ? { ...b, ...patch } : b)));
    const placeholder: Record<ButtonAction, string> = { navigate: "/lovelace/rollos", more_info: "cover.wohnzimmer", service: "script.turn_on", fire_dom_event: "" };
    // service and event buttons run in the session of whoever taps: only an admin adds or changes one (#151)
    const privileged = (a: ButtonAction) => a === "service" || a === "fire_dom_event";
    const lockedBtn = (b: CustomButton) => !this.isHaAdmin && privileged(b.action);
    return html`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${!this.isHaAdmin ? html`<p class="fp3d-sub">${this.t("own_button_admin")}</p>` : nothing}
      ${list.map(
        (b, i) => html`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${b.label} @change=${(e: Event) => upd(i, { label: (e.target as HTMLInputElement).value.trim() || this.t("own_button_new") })}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select ?disabled=${lockedBtn(b)} @change=${(e: Event) => upd(i, { action: (e.target as HTMLSelectElement).value as ButtonAction })}>
              ${BUTTON_ACTIONS.filter((a) => this.isHaAdmin || !privileged(a) || a === b.action).map((a) => html`<option value=${a} ?selected=${a === b.action}>${this.t(`own_action_${a}` as I18nKey)}</option>`)}
            </select></label
          >
          ${this.iconInput(b.icon ?? null, (v) => upd(i, { icon: v }))}
          ${b.action !== "fire_dom_event"
            ? html`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${b.action}` as I18nKey)}
                <input type="text" ?disabled=${lockedBtn(b)} .value=${b.target ?? ""} placeholder=${placeholder[b.action]} @change=${(e: Event) => upd(i, { target: (e.target as HTMLInputElement).value.trim() || null })}
              /></label>`
            : nothing}
          ${b.action === "service" || b.action === "fire_dom_event"
            ? html`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  ?disabled=${lockedBtn(b)}
                  placeholder=${b.action === "fire_dom_event" ? '{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}' : '{"entity_id": "script.party"}'}
                  .value=${b.data ? JSON.stringify(b.data, null, 1) : ""}
                  @change=${(e: Event) => {
                    (e.target as HTMLTextAreaElement).setCustomValidity("");
                    const raw = (e.target as HTMLTextAreaElement).value.trim();
                    if (!raw) return upd(i, { data: null });
                    try {
                      const v = JSON.parse(raw);
                      if (v && typeof v === "object" && !Array.isArray(v)) upd(i, { data: v });
                    } catch {
                      (e.target as HTMLTextAreaElement).setCustomValidity(this.t("own_data_bad"));
                      (e.target as HTMLTextAreaElement).reportValidity();
                    }
                  }}
                ></textarea></label
              >`
            : nothing}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${i === 0} @click=${() => set([...list.slice(0, i - 1), b, list[i - 1], ...list.slice(i + 1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${() => set(list.filter((_, j) => j !== i))}>${this.t("delete")}</button>
          </div>
        </div>`,
      )}
      ${list.length < 20
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${() => set([...list, { id: uid("btn"), label: this.t("own_button_new"), action: "navigate", target: null }])}>+ ${this.t("own_button_add")}</button>
          </div>`
        : nothing}`;
  }

  /** The camera of the editor's 3D pane as it stands right now, rounded for the plan (null: no pane). */
  paneView(): StartView | null {
    const pane = this.renderRoot.querySelector("fp3d-view3d") as (HTMLElement & { currentView(): StartView | null }) | null;
    const v = pane?.currentView();
    if (!v) return null;
    const t = v.target;
    return { theta: round(v.theta), phi: round(v.phi), radius: round(v.radius), ...(t ? { target: { x: round(t.x), y: round(t.y), z: round(t.z) } } : {}) };
  }

  /** This floor opens with the camera of the editor's 3D pane as it stands right now (#182). */
  rememberFloorView(): void {
    const v = this.paneView();
    if (!v) {
      void this.tell(this.t("floor_start_view_need_pane"));
      return;
    }
    this.updateFloor({ start_view: v });
  }

  /** Tapping this room in 3D flies to the camera of the editor's 3D pane as it stands right now (#282). */
  rememberRoomView(): void {
    const v = this.paneView();
    if (!v) {
      void this.tell(this.t("room_start_view_need_pane"));
      return;
    }
    this.updateRoom({ start_view: v });
  }

  /** The camera the house opens with: the editor's 3D pane as it stands right now, or the default. */
  /** Live director: own triggers – an entity that goes on or open and the camera to show for it (D615). */
  renderDirectorTriggers(d: DirectorSettings, placed: string[]) {
    const hass = this.hass;
    if (!hass) return nothing;
    const list = d.triggers ?? [];
    const save = (next: { entity: string; camera: string | null }[]) => this.change((doc) => (doc.settings.director = { ...(doc.settings.director ?? {}), triggers: next.length ? next : null }));
    return html`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("director_triggers")}</h4>
      <p class="fp3d-sub">${this.t("director_triggers_hint")}</p>
      ${list.map(
        (t, i) => html`<div class="fp3d-form">
          ${this.entitySelect(this.t("director_trigger_entity"), t.entity || null, undefined, this.entityOptions((id) => /^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(id)), (v) =>
            save(list.map((x, k) => (k === i ? { ...x, entity: v && v !== "none" ? v : "" } : x)).filter((x) => x.entity)),
          )}
          ${this.entitySelect(this.t("director_doorbell_camera"), t.camera, undefined, this.entityOptions((id) => id.startsWith("camera.") && placed.includes(id), placed.join(",")), (v) =>
            save(list.map((x, k) => (k === i ? { ...x, camera: v && v !== "none" ? v : null } : x))),
          )}
          <button class="fp3d-btn" @click=${() => save(list.filter((_, k) => k !== i))}>✕ ${this.t("delete")}</button>
        </div>`,
      )}
      ${list.length < 20
        ? html`<div class="fp3d-form">
            ${this.entitySelect(this.t("director_trigger_add"), null, undefined, this.entityOptions((id) => /^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(id)), (v) => {
              if (v && v !== "none") save([...list, { entity: v, camera: null }]);
            })}
          </div>`
        : nothing}
    </div>`;
  }

  /** The editors list (#7) as the backend last sent it; null until asked. */
  editorsList: { users: EditorUser[]; custom: boolean } | null = null;
  editorsAsked = false;
  editorsMsg: string | null = null;

  /** Who may change the plan: every user with a tick; the default is every admin. Admins only. */
  renderEditors() {
    const hass = this.hass;
    if (!hass) return nothing;
    const answer = (p: Promise<{ users: EditorUser[]; custom: boolean }>) =>
      p
        .then((res) => {
          this.editorsList = res;
          this.editorsMsg = null;
        })
        .catch((err: unknown) => {
          const code = (err as { code?: string } | null)?.code;
          this.editorsMsg = this.t(code === "no_admin" ? "editors_no_admin" : "editors_failed");
        })
        .finally(() => this.requestUpdate());
    this.askEditors(answer);
    const list = this.editorsList;
    return html`<div class="fp3d-form">
      <p class="fp3d-sub fp3d-wide">${this.t("editors_hint")}</p>
      ${list
        ? list.users.map(
            (u) => html`<label class="fp3d-check fp3d-wide"
              ><input
                type="checkbox"
                .checked=${u.editor}
                ?disabled=${u.editor && lastAdmin(list.users, u.id)}
                @change=${(e: Event) => void answer(setEditors(hass, pickEditor(list.users, u.id, (e.target as HTMLInputElement).checked)))}
              />
              ${u.name || u.id}${u.is_admin ? html` <span class="fp3d-sub">(${this.t("editors_admin")})</span>` : nothing}</label
            >`,
          )
        : html`<p class="fp3d-sub fp3d-wide">${this.t("loading")}</p>`}
      ${this.editorsMsg ? html`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.editorsMsg}</p>` : nothing}
      ${list?.custom
        ? html`<div class="fp3d-actions fp3d-wide"><button class="fp3d-btn" @click=${() => void answer(setEditors(hass, null))}>${this.t("editors_reset")}</button></div>`
        : nothing}
    </div>`;
  }

  /** The users (from the editors list, HA admins only): asked once, answered into `editorsList`. */
  askEditors(answer?: (p: Promise<{ users: EditorUser[]; custom: boolean }>) => Promise<void>): void {
    const hass = this.hass;
    if (this.editorsAsked || !hass) return;
    this.editorsAsked = true;
    const p = getEditors(hass);
    if (answer) void answer(p);
    else
      void p
        .then((res) => (this.editorsList = res))
        .catch(() => undefined)
        .finally(() => this.requestUpdate());
  }

  /** Wall tablets (#92): users whose panel opens locked (no editor, no settings); the idle return is a row of its own. */
  renderTabletUsers(users: EditorUser[]) {
    const ticked = this._doc.settings.tablet_users ?? [];
    return html`${users.map(
        (u) => html`<label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${ticked.includes(u.id)} @change=${(e: Event) => this.setTabletUser(u.id, (e.target as HTMLInputElement).checked)} />
          ${u.name || u.id}</label
        >`,
      )}`;
  }

  setTabletUser(id: string, on: boolean): void {
    this.change((d) => (d.settings.tablet_users = pickTabletUser(d.settings.tablet_users, id, on)));
  }

  renderPresenceSettings() {
    const persons = Object.keys(this.hass?.states ?? {})
      .filter((id) => id.startsWith("person."))
      .sort();
    const sensors = (person: string) => {
      // likely room sensors of this person first (ESPresense / Bermuda name them after the device)
      const slug = person.slice("person.".length);
      const all = this.entityOptions((id) => numberish(id));
      const likely = (id: string) => id.includes(slug) && /(area|room|raum|bermuda|espresense)/.test(id);
      return [...all.filter((o) => likely(o.id)), ...all.filter((o) => !likely(o.id))];
    };
    const set = (person: string, sensor: string | null) => {
      const next = structuredClone(this._doc);
      next.presence = next.presence.filter((p) => p.person !== person);
      if (sensor && sensor !== "none") next.presence.push({ person, sensor });
      this.setDoc(next);
    };
    return html`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${persons.length
          ? persons.map((id) =>
              this.entitySelect(
                `${entityName(this.hass, id)} · ${this.t("presence_sensor")}`,
                this._doc.presence.find((p) => p.person === id)?.sensor ?? null,
                undefined,
                sensors(id),
                (v) => set(id, v),
              ),
            )
          : html`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`;
  }

  /** When the item shows (#15): while an entity is available and/or inside intervals of days and times of day (editors only). */
  renderShowWhen(f: Furniture) {
    const rule: ShowWhen = f.show_when ?? {};
    const list = rule.intervals ?? [];
    const off = !this.isEditor;
    const set = (patch: ShowWhen) => {
      const next = { ...rule, ...patch };
      this.updateFurniture({ show_when: (next.entity && next.entity !== "none") || next.intervals?.length ? next : null });
    };
    // never half-open (#46): picking one end fills the other, clearing one clears both
    const setAt = (i: number, patch: ShowInterval) => set({ intervals: list.map((iv, j) => (j === i ? setIntervalPart(iv, patch) : iv)) });
    // days are kept without a year ("MM-DD"); the picker shows a leap year so 29 February can be picked
    const field = (label: string, kind: "date" | "time", v: string | null | undefined, on: (v: string | null) => void) =>
      html`<label class="fp3d-field"
        >${label}
        <input type=${kind} ?disabled=${off} .value=${v ? (kind === "date" ? `2028-${v}` : v) : ""} @change=${(e: Event) => {
          const raw = (e.target as HTMLInputElement).value;
          on(raw ? (kind === "date" ? raw.slice(5) : raw) : null);
        }}
      /></label>`;
    return html`<details class="fp3d-section" ?open=${!!f.show_when}>
      <summary>${this.t("show_when")}</summary>
      <div class="fp3d-form">
        ${this.entitySelect(this.t("show_when_entity"), rule.entity ?? null, undefined, this.entityOptions(() => true), (v) => set({ entity: v === "none" ? null : v }))}
        ${list.map(
          (iv, i) => html`${field(this.t("show_from"), "date", iv.from, (v) => setAt(i, { from: v }))} ${field(this.t("show_to"), "date", iv.to, (v) => setAt(i, { to: v }))}
            ${field(this.t("show_start"), "time", iv.start, (v) => setAt(i, { start: v }))} ${field(this.t("show_end"), "time", iv.end, (v) => setAt(i, { end: v }))}
            <button class="fp3d-pin" title=${this.t("delete")} ?disabled=${off} @click=${() => set({ intervals: list.filter((_, j) => j !== i) })}>✕</button>`,
        )}
      </div>
      ${off || list.length >= 12 ? nothing : html`<div class="fp3d-actions"><button class="fp3d-btn" @click=${() => set({ intervals: [...list, {}] })}>+ ${this.t("show_add_interval")}</button></div>`}
      <p class="fp3d-sub">${this.t("show_when_hint")}</p>
    </details>`;
  }

  /** "State from": an entity lights the item's top (two light its halves) – any furniture, a bed with occupancy mats too (#116). */
  renderStateLinks(f: Furniture) {
    return html`${this.entitySelect(this.t("furn_state_entity"), f.state_entity ?? null, undefined, this.entityOptions((id) => /^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(id)), (v) => this.updateFurniture(clearFirstState(f, v)))}
              ${f.state_entity && f.state_entity !== "none"
                ? html`${this.entitySelect(this.t("furn_state_entity2"), f.state_entity2 ?? null, undefined, this.entityOptions((id) => /^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(id)), (v) => this.updateFurniture({ state_entity2: v === "none" ? null : v }))}
                    ${f.state_entity2 && f.state_entity2 !== "none"
                      ? html`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isEditor} @change=${(e: Event) => this.updateFurniture({ state_split: (e.target as HTMLSelectElement).value === "top_bottom" ? "top_bottom" : "left_right" })}>
                            <option value="left_right" ?selected=${f.state_split !== "top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${f.state_split === "top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`
                      : nothing}`
                : nothing}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`;
  }

  /**
   * Colour and material per role (#12, #40): each role the item is drawn in, with a colour picker, the named presets and
   * its material. A role without a colour of its own follows the look; "From the look" clears it. A role without a
   * material of its own takes its usual one; materials show in the realistic look. Only editors change them.
   */
  renderColourRoles(f: Furniture) {
    const roles = itemColourRoles(f.type);
    if (!roles.length) return nothing;
    const admin = this.isEditor;
    const set = (role: ColourRole, hex: string | null) => this.updateFurniture({ colors: setRoleColour(f.colors, role, hex) });
    const setMaterial = (role: ColourRole, m: string) => this.updateFurniture({ materials: setRoleMaterial(f.materials, role, (m || null) as Material | null) });
    const materialName = (m: Material) => this.t(`material_${m}` as I18nKey);
    return html`<div class="fp3d-form">
      <h4 class="fp3d-lib-head fp3d-wide">${this.t("colours")}</h4>
      ${roles.map((role) => {
        const own = roleColour(f.colors, role);
        if (role === "paint") return this.renderPaint(f, own);
        const preset = own ? COLOUR_PRESETS.find((p) => p.hex === own) : undefined;
        const mat = ownMaterial(f.materials, role);
        return html`<div class="fp3d-field fp3d-colour-role">
          <span>${this.t(`colour_role_${role}` as I18nKey)}</span>
          <span class="fp3d-colour-pick">
            <input type="color" class=${own ? "" : "fp3d-colour-unset"} aria-label=${this.t(`colour_role_${role}` as I18nKey)} .value=${own ?? "#808080"} ?disabled=${!admin}
              @change=${(e: Event) => set(role, (e.target as HTMLInputElement).value)} />
            <select ?disabled=${!admin} @change=${(e: Event) => set(role, (e.target as HTMLSelectElement).value || null)}>
              <option value="" ?selected=${!own}>${this.t("colour_theme")}</option>
              ${own && !preset ? html`<option value=${own} selected>${this.t("colour_own")}</option>` : nothing}
              ${COLOUR_PRESETS.map((p) => html`<option value=${p.hex} ?selected=${p === preset}>${this.t(`colour_preset_${p.id}` as I18nKey)}</option>`)}
            </select>
            <select class="fp3d-material" aria-label=${this.t("material_of", { role: this.t(`colour_role_${role}` as I18nKey) })} ?disabled=${!admin}
              @change=${(e: Event) => setMaterial(role, (e.target as HTMLSelectElement).value)}>
              <option value="" ?selected=${!mat}>${this.t("material_usual", { material: materialName(usualMaterial(role)) })}</option>
              ${MATERIALS.map((m) => html`<option value=${m} ?selected=${m === mat}>${materialName(m)}</option>`)}
            </select>
          </span>
        </div>`;
      })}
      <p class="fp3d-sub fp3d-wide">${this.t("colours_hint")}</p>
    </div>`;
  }

  /** A vehicle's paint (#129): ten base colours as swatches plus a hex field, saved in the item's `paint` colour role. */
  renderPaint(f: Furniture, own: string | null) {
    const admin = this.isEditor;
    const name = this.t("colour_role_paint");
    return html`<div class="fp3d-field fp3d-colour-role fp3d-wide">
      <span>${name}</span>
      <span class="fp3d-paint">
        ${PAINT_COLOURS.map((c) => {
          const label = this.t(`paint_${c.id}` as I18nKey);
          return html`<button type="button" class="fp3d-swatch" style=${`background:${c.hex}`} title=${label} aria-label=${label} aria-pressed=${own === c.hex ? "true" : "false"}
            ?disabled=${!admin} @click=${() => this.setPaint(f, c.hex)}></button>`;
        })}
        <input type="text" class="fp3d-paint-hex" maxlength="7" placeholder="#rrggbb" aria-label=${this.t("paint_hex")} .value=${own ?? ""} ?disabled=${!admin}
          @change=${(e: Event) => this.setPaint(f, (e.target as HTMLInputElement).value)} />
        <input type="color" class=${own ? "" : "fp3d-colour-unset"} aria-label=${this.t("paint_hex")} .value=${own ?? "#808080"} ?disabled=${!admin}
          @change=${(e: Event) => this.setPaint(f, (e.target as HTMLInputElement).value)} />
        ${own ? html`<button type="button" ?disabled=${!admin} @click=${() => this.setPaint(f, "")}>${this.t("colour_theme")}</button>` : nothing}
      </span>
    </div>`;
  }

  /** Sets the paint of an item from a swatch or typed text: a colour is saved, empty goes back to the look, anything else is ignored. */
  setPaint(f: Furniture, text: string): void {
    const hex = parseHex(text);
    if (text.trim() && !hex) return;
    this.updateFurniture({ colors: setRoleColour(f.colors, "paint", hex) });
  }

  /**
   * Waste bin and mailbox: shape and colours for everyone; the waste calendar and the post sensors with Haushalt Pro
   * (a teaser while it is locked).
   */
  renderHouseholdForm(f: Furniture) {
    const admin = this.isEditor;
    const select = <T extends string>(label: string, value: T, options: readonly T[], key: (o: T) => I18nKey, onChange: (v: T) => void) =>
      html`<label class="fp3d-field fp3d-wide"
        >${label}
        <select ?disabled=${!admin} @change=${(e: Event) => onChange((e.target as HTMLSelectElement).value as T)}>
          ${options.map((o) => html`<option value=${o} ?selected=${o === value}>${this.t(key(o))}</option>`)}
        </select></label
      >`;
    if (f.type === "waste_bin") {
      const shape = binShape(f);
      const kind = f.bin_kind ?? "rest";
      const [body, lid] = binColors(f);
      const sources = this.entityOptions((id) => id.startsWith("calendar.") || id.startsWith("sensor."));
      return html`<div class="fp3d-form fp3d-links">
        ${select(this.t("bin_shape"), shape, BIN_SHAPES, (o) => `bin_shape_${o}` as I18nKey, (v) => {
          const [w, d, h] = BIN_SIZE[v];
          this.updateFurniture({ variant: v === "bin240" ? null : v, w, d, h });
        })}
        ${select(this.t("bin_kind"), kind, WASTE_KINDS, (o) => `bin_kind_${o}` as I18nKey, (v) => {
          // a new kind starts from its usual colours in this country
          const [b, l] = wasteColors(v, householdCountry());
          this.updateFurniture({ bin_kind: v, bin_color: b, bin_lid: l === b ? null : l });
        })}
        <label class="fp3d-field"
          >${this.t("bin_color")}
          <input type="color" .value=${body} ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ bin_color: (e.target as HTMLInputElement).value })}
        /></label>
        <label class="fp3d-field"
          >${this.t("bin_lid")}
          <input type="color" .value=${lid} ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ bin_lid: (e.target as HTMLInputElement).value })}
        /></label>
        ${html`${this.entitySelect(this.t("bin_source"), f.bin_source ?? null, undefined, sources, (v) => this.updateFurniture({ bin_source: v === "none" ? null : v }))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("bin_match")}
                <input type="text" .value=${f.bin_match ?? ""} placeholder=${this.t(`bin_kind_${kind}` as I18nKey)} ?disabled=${!admin}
                  @change=${(e: Event) => this.updateFurniture({ bin_match: (e.target as HTMLInputElement).value.trim() || null })} /></label>
              ${this.entitySelect(this.t("bin_out"), f.bin_out ?? null, undefined, this.entityOptions((id) => /^(input_boolean|switch|binary_sensor)\./.test(id)), (v) => this.updateFurniture({ bin_out: v === "none" ? null : v }))}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_out_hint")}</p>
              <div class="fp3d-field fp3d-wide">
                <span>${this.t("bin_kerb")}</span>
                <div class="fp3d-actions">
                  <button class="fp3d-btn" aria-pressed=${this._kerbPick} ?disabled=${!admin} @click=${() => (this._kerbPick = !this._kerbPick)}>
                    ${this._kerbPick ? "✓ " : ""}${this.t(f.bin_kerb ? "bin_kerb_move" : "bin_kerb_set")}
                  </button>
                  ${f.bin_kerb ? html`<button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.updateFurniture({ bin_kerb: null })}>${this.t("bin_kerb_clear")}</button>` : nothing}
                </div>
              </div>
              <p class="fp3d-sub fp3d-wide">${this.t(this._kerbPick ? "hint_kerb_pick" : "bin_kerb_hint")}</p>
              ${this.renderSettingsLink("household", "household.bin_from", "settings_moved_bins")}`}
      </div>`;
    }
    const shape = mailboxShape(f);
    const flags = this.entityOptions((id) => ["binary_sensor.", "input_boolean.", "sensor.", "counter.", "input_number."].some((d) => id.startsWith(d)));
    const doors = this.entityOptions((id) => id.startsWith("binary_sensor."));
    return html`<div class="fp3d-form fp3d-links">
      ${select(this.t("mailbox_shape"), shape, MAILBOX_SHAPES, (o) => `mailbox_shape_${o}` as I18nKey, (v) => {
        const [w, d, h] = MAILBOX_SIZE[v];
        this.updateFurniture({ variant: v === "wall" ? null : v, w, d, h });
      })}
      ${html`${this.entitySelect(this.t("mailbox_entity"), typeof f.entity === "string" && f.entity !== "none" ? f.entity : null, undefined, flags, (v) => this.updateFurniture({ entity: v ?? "none" }))}
            ${this.entitySelect(this.t("mailbox_door"), f.mailbox_door ?? null, undefined, doors, (v) => this.updateFurniture({ mailbox_door: v === "none" ? null : v }))}
            <p class="fp3d-sub fp3d-wide">${this.t("mailbox_hint")}</p>`}
    </div>`;
  }

  /**
   * Haushalt Pro on other items: a plant's moisture, a washer's time left and door, a fridge's door warning, and a
   * consumable or service for every electric item. A teaser on plants, appliances and fridges while it is locked.
   */
  renderHouseholdExtras(f: Furniture) {
    const plant = f.type === "plant" || isPackPlant(f.type);
    const appliance = f.type === "washer" || f.type === "dryer" || f.type === "dishwasher";
    const fridge = f.type === "fridge" || f.type === "fridge_smart";
    const electric = isElectric(f.type);
    // a bin from a pack is only a model: say where the kerb spot and the calendar are (#170)
    if (!plant && !electric && isPackBin(f.type)) return html`<p class="fp3d-sub fp3d-wide">${this.t("bin_model_hint")}</p>`;
    if (!plant && !electric) return nothing;
    const sensors = this.entityOptions((id) => id.startsWith("sensor."));
    const doors = this.entityOptions((id) => id.startsWith("binary_sensor."));
    const services = this.entityOptions((id) => ["sensor.", "binary_sensor.", "input_boolean.", "input_datetime.", "input_number."].some((d) => id.startsWith(d)));
    const ref = (v: string | null) => (v === "none" ? null : v);
    return html`<div class="fp3d-form fp3d-links">
      <p class="fp3d-sub fp3d-wide"><b>🏠 ${this.t("section_household")}</b></p>
      ${plant
        ? html`${this.entitySelect(this.t("hh_moisture"), f.moisture ?? null, undefined, this.entityOptions((id) => id.startsWith("plant.") || id.startsWith("sensor.")), (v) => this.updateFurniture({ moisture: ref(v) }))}
            ${this.num(this.t("hh_moisture_min"), f.moisture_min ?? 20, (v) => this.updateFurniture({ moisture_min: Math.max(0, Math.min(100, Math.round(v))) }), 1)}`
        : nothing}
      ${appliance
        ? html`${this.entitySelect(this.t("hh_remaining"), f.remaining ?? null, undefined, sensors, (v) => this.updateFurniture({ remaining: ref(v) }))}
            ${this.entitySelect(this.t("hh_door"), f.door_left ?? null, undefined, doors, (v) => this.updateFurniture({ door_left: ref(v) }))}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_appliance_hint")}</p>`
        : nothing}
      ${fridge
        ? html`${f.type === "fridge" ? this.entitySelect(this.t("hh_fridge_door"), f.door_left ?? null, undefined, doors, (v) => this.updateFurniture({ door_left: ref(v) })) : nothing}
            ${this.num(this.t("hh_door_alarm"), f.door_alarm ?? 2, (v) => this.updateFurniture({ door_alarm: Math.max(0.5, Math.min(120, v)) }), 0.5)}`
        : nothing}
      ${electric
        ? html`${this.entitySelect(this.t("hh_service_entity"), f.service ?? null, undefined, services, (v) => this.updateFurniture({ service: ref(v) }))}
            ${f.service && f.service !== "none" ? this.num(this.t("hh_service_min"), f.service_min ?? 10, (v) => this.updateFurniture({ service_min: Math.max(0, v) }), 1) : nothing}
            ${(f.service && f.service !== "none") || (f.service2 && f.service2 !== "none")
              ? this.entitySelect(this.t("hh_service2_entity"), f.service2 ?? null, undefined, services, (v) => this.updateFurniture({ service2: ref(v) }))
              : nothing}
            ${f.service2 && f.service2 !== "none" ? this.num(this.t("hh_service2_min"), f.service2_min ?? 10, (v) => this.updateFurniture({ service2_min: Math.max(0, v) }), 1) : nothing}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_service_hint")}</p>`
        : nothing}
    </div>`;
  }

  /** Awning: its fall, the valance, a position sensor, its run time and the other direction (with the cover above). */
  renderAwningFields(f: Furniture) {
    const admin = this.isEditor;
    const sensors = this.entityOptions((id) => id.startsWith("sensor.") || id.startsWith("input_number.") || id.startsWith("number."));
    // each kind with the sizes it usually has: width, projection (depth), height above the floor, fall
    const KINDS: Record<string, { w: number; d: number; y: number; pitch: number | null }> = {
      arm: { w: 3, d: 2.5, y: 2.3, pitch: null },
      drop: { w: 2.4, d: 1.2, y: 2.3, pitch: 20 },
      vertical: { w: 2, d: 0.2, y: 2.3, pitch: null },
      pergola: { w: 4, d: 3.5, y: 2.6, pitch: 6 },
      side: { w: 3, d: 0.2, y: 1.8, pitch: null },
    };
    const kind = f.variant ?? "arm";
    return html`<label class="fp3d-field fp3d-wide"
        >${this.t("awning_kind")}
        <select
          ?disabled=${!admin}
          @change=${(e: Event) => {
            const k = (e.target as HTMLSelectElement).value;
            const d = KINDS[k];
            this.updateFurniture({ variant: k === "arm" ? null : k, w: d.w, d: d.d, mount_y: d.y, awning_pitch: d.pitch });
          }}
        >
          ${Object.keys(KINDS).map((k) => html`<option value=${k} ?selected=${kind === k}>${this.t(`awning_kind_${k}` as I18nKey)}</option>`)}
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${this.t(`awning_kind_${kind}_hint` as I18nKey)}</p>
      ${kind === "vertical" || kind === "side" ? nothing : this.num(this.t("awning_pitch"), f.awning_pitch ?? 12, (v) => this.updateFurniture({ awning_pitch: Math.max(0, Math.min(80, Math.round(v))) }), 1)}
      ${this.num(this.t("awning_time"), f.awning_time ?? 20, (v) => this.updateFurniture({ awning_time: Math.max(2, Math.min(300, Math.round(v))) }), 1)}
      ${this.entitySelect(this.t("awning_position"), f.awning_position ?? null, undefined, sensors, (v) => this.updateFurniture({ awning_position: v === "none" ? null : v }))}
      <label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${f.awning_valance !== false} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ awning_valance: (ev.target as HTMLInputElement).checked })} />
        ${this.t("awning_valance")}</label
      >
      <label class="fp3d-check fp3d-wide" title=${this.t("awning_invert_hint")}
        ><input type="checkbox" .checked=${!!f.awning_invert} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ awning_invert: (ev.target as HTMLInputElement).checked })} />
        ${this.t("awning_invert")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("awning_hint")}</p>`;
  }

  /** A motorised curtain or roll-down screen from a pack (#511): run time, a live position sensor, the other direction. */
  renderMotionFields(f: Furniture) {
    const admin = this.isEditor;
    const sensors = this.entityOptions((id) => id.startsWith("sensor.") || id.startsWith("input_number.") || id.startsWith("number."));
    const side = f.variant === "left" || f.variant === "right" ? f.variant : "both";
    return html`${packMotion(f.type) === "curtain"
        ? html`<label class="fp3d-field fp3d-wide"
            >${this.t("curtain_side")}
            <select ?disabled=${!admin} @change=${(e: Event) => {
              const v = (e.target as HTMLSelectElement).value;
              this.updateFurniture({ variant: v === "both" ? null : v });
            }}>
              ${(["both", "left", "right"] as const).map((k) => html`<option value=${k} ?selected=${side === k}>${this.t(`curtain_side_${k}`)}</option>`)}
            </select></label
          >`
        : nothing}
      ${this.num(this.t("motor_time"), f.awning_time ?? 20, (v) => this.updateFurniture({ awning_time: Math.max(2, Math.min(300, Math.round(v))) }), 1)}
      ${this.entitySelect(this.t("awning_position"), f.awning_position ?? null, undefined, sensors, (v) => this.updateFurniture({ awning_position: v === "none" ? null : v }))}
      <label class="fp3d-check fp3d-wide" title=${this.t("motor_invert_hint")}
        ><input type="checkbox" .checked=${!!f.awning_invert} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ awning_invert: (ev.target as HTMLInputElement).checked })} />
        ${this.t("awning_invert")}</label
      >`;
  }

  /** Wi-Fi access point (D582) and water heater: how it is mounted and its entities. */
  renderTechForm(f: Furniture) {
    if (!this.hass) return nothing;
    const admin = this.isEditor;
    const ap = f.type === "wifi_ap";
    const mounts = ["", "wall"] as const;
    const setMount = (v: string) => {
      const [w, d, h] = TECH_SIZE[`${f.type}:${v}`];
      this.updateFurniture({ variant: v || null, w, d, h, mount_y: null });
    };
    const sensors = this.entityOptions((id) => id.startsWith("sensor."));
    // an access point's entities are often diagnostic (UniFi): every entity of the kinds that tell a state is offered
    const main = this.entityOptions((id) => (ap ? /^(binary_sensor|sensor|device_tracker|switch|button|update)\./ : /^(water_heater|climate|switch|input_boolean|sensor)\./).test(id), ap);
    return html`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t("tech_mount")}
        <select ?disabled=${!admin} @change=${(e: Event) => setMount((e.target as HTMLSelectElement).value)}>
          ${mounts.map((v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(`${f.type}_${v || "std"}` as I18nKey)}</option>`)}
        </select></label
      >
      ${this.entitySelect(this.t(ap ? "ap_status" : "heater_entity"), typeof f.entity === "string" && f.entity !== "none" ? f.entity : null, undefined, main, (v) => this.updateFurniture({ entity: v && v !== "none" ? v : "none" }))}
      ${ap
        ? this.entitySelect(this.t("ap_clients_sensor"), f.clients ?? null, undefined, sensors, (v) => this.updateFurniture({ clients: v && v !== "none" ? v : null }))
        : html`${this.entitySelect(this.t("heater_temp"), f.water_temp ?? null, undefined, sensors, (v) => this.updateFurniture({ water_temp: v && v !== "none" ? v : null }))}
            ${this.entitySelect(this.t("furn_power"), typeof f.power === "string" && f.power !== "none" ? f.power : null, undefined, this.entityOptions((id) => this.isPowerSensor(id)), (v) => this.updateFurniture({ power: v && v !== "none" ? v : "none" }))}`}
      <p class="fp3d-sub fp3d-wide">${this.t(ap ? "ap_hint" : "heater_hint")}</p>
      <div class="fp3d-form">${this.markerSelect(f.marker ?? null, (v) => this.updateFurniture({ marker: v }))}${this.iconInput(f.icon, (v) => this.updateFurniture({ icon: v }))}</div>
    </div>`;
  }

  /** Wall switch or socket (D523, #593): its gangs, and per gang what it switches (a socket also its power sensor). */
  renderGangsForm(f: Furniture) {
    if (!this.hass) return nothing;
    const admin = this.isEditor;
    const gangs = gangsOf(f);
    const socket = f.type === "wall_socket";
    const switches = this.entityOptions((id) => /^(light|switch|input_boolean|fan)\./.test(id));
    const power = this.entityOptions((id) => this.isPowerSensor(id));
    const save = (next: Gang[]) => this.updateFurniture({ gangs: next.length > 1 || next[0]?.entity || next[0]?.power ? next : null });
    const setGang = (i: number, patch: Partial<Gang>) => save(gangs.map((g, k) => (k === i ? { ...g, ...patch } : g)));
    // more gangs make the frame wider (a frame turned by hand keeps its own size otherwise)
    const count = (n: number) => {
      const next = Array.from({ length: n }, (_, i) => gangs[i] ?? { entity: null });
      this.updateFurniture({ gangs: n > 1 || next[0].entity || next[0].power ? next : null, w: gangPlateWidth(n) });
    };
    return html`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t(socket ? "gang_count_socket" : "gang_count_switch")}
        <select ?disabled=${!admin} @change=${(e: Event) => count(Number((e.target as HTMLSelectElement).value))}>
          ${Array.from({ length: MAX_GANGS }, (_, i) => i + 1).map((n) => html`<option value=${n} ?selected=${gangs.length === n}>${n}</option>`)}
        </select></label
      >
      ${socket
        ? html`<label class="fp3d-field"
            >${this.t("socket_kind")}
            <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ variant: (e.target as HTMLSelectElement).value || null })}>
              ${(["", "outdoor"] as const).map((v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(v ? "socket_outdoor" : "socket_indoor")}</option>`)}
            </select></label
          >`
        : nothing}
      ${gangs.map(
        (g, i) => html`${this.entitySelect(`${this.t(socket ? "gang_socket" : "gang_switch")}${gangs.length > 1 ? ` ${i + 1}` : ""}`, g.entity, undefined, switches, (v) => setGang(i, { entity: v && v !== "none" ? v : null }))}
        ${socket ? this.entitySelect(`${this.t("furn_power")}${gangs.length > 1 ? ` ${i + 1}` : ""}`, g.power ?? null, undefined, power, (v) => setGang(i, { power: v && v !== "none" ? v : null })) : nothing}`,
      )}
      <p class="fp3d-sub fp3d-wide">${this.t(socket ? "gang_socket_hint" : "gang_switch_hint")}</p>
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!f.confirm} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ confirm: (ev.target as HTMLInputElement).checked })} />
        ${this.t("device_confirm")}</label
      >
      <div class="fp3d-form">${this.markerSelect(f.marker ?? null, (v) => this.updateFurniture({ marker: v }))}${this.iconInput(f.icon, (v) => this.updateFurniture({ icon: v }))}</div>
    </div>`;
  }

  renderFurnitureLinks(f: Furniture) {
    if (!this.hass) return nothing;
    const hass = this.hass;
    // what "automatic" would choose: resolve with this item's own links cleared
    const autoPick = (key: "entity" | "power") =>
      this.keptForPlan(`furniture|${f.id}|${key}`, () => {
        const probe = structuredClone(this._doc.floors);
        for (const fl of probe) for (const x of fl.furniture) if (x.id === f.id) x[key] = null;
        return furnitureEntities(hass, probe).get(f.id)?.[key] ?? null;
      });
    const media = isMediaFurniture(f.type);
    const lamp = isLamp(f.type);
    const heating = isThermostatItem(f.type);
    // the field's label and likely domains from the item's kind, family and tags (#132)
    const field = linkField(f.type);
    const entities = this.entityOptions(linkFilter(hass, f.type), f.type);
    const power = this.entityOptions((id) => this.isPowerSensor(id));
    const doorSensors = f.type === "fridge_smart" ? this.entityOptions((id) => id.startsWith("binary_sensor.")) : [];
    return html`<div class="fp3d-form fp3d-links">
        ${f.type === "grid_point"
          ? html`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`
          : this.entitySelect(this.t(field.label), f.entity ?? null, autoPick("entity"), entities, (v) => this.updateFurniture({ entity: v }), field.domains)}
        ${f.type === "lamp_fan"
          ? html`${this.entitySelect(this.t("fan_entity"), f.fan ?? null, undefined, this.entityOptions((id) => id.startsWith("fan.")), (v) => this.updateFurniture({ fan: v && v !== "none" ? v : null }))}
              <p class="fp3d-sub fp3d-wide">${this.t("fan_hint")}</p>`
          : nothing}
        ${heating
          ? html`${this.entitySelect(this.t("heat_sensor"), f.heat_sensor ?? null, undefined, this.entityOptions((id) => /^(binary_sensor|sensor|switch|input_boolean|number)\./.test(id)), (v) => this.updateFurniture({ heat_sensor: v && v !== "none" ? v : null }))}
              <p class="fp3d-sub fp3d-wide">${this.t("heat_sensor_hint")}</p>`
          : nothing}
        ${shadeKind(f.type)
          ? html`${this.entitySelect(
                this.t("temp_sensor"),
                f.temp_sensor ?? null,
                itemTempSource(hass, { ...f, temp_sensor: null }),
                this.entityOptions((id) => (id.startsWith("sensor.") && hass.states[id]?.attributes.device_class === "temperature") || /^(climate|water_heater)\./.test(id)),
                (v) => this.updateFurniture({ temp_sensor: v }),
              )}
              <p class="fp3d-sub fp3d-wide">${this.t("temp_sensor_hint")}</p>`
          : nothing}
        ${f.type === "awning" ? this.renderAwningFields(f) : packMotion(f.type) ? this.renderMotionFields(f) : nothing}
        ${!lamp && !isEnergyDevice(f.type) && !hasScreen(f.type) ? this.renderStateLinks(f) : nothing}
        ${lamp && f.entity && f.entity !== "none"
          ? html`${this.entitySelect(this.t("furn_color_entity"), f.color_entity ?? null, undefined, this.entityOptions((id) => id.startsWith("light.") && id !== f.entity, f.entity), (v) => this.updateFurniture({ color_entity: v === "none" ? null : v }))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`
          : nothing}
        ${lamp ? this.glowScaleField(f.glow_scale, (v) => this.updateFurniture({ glow_scale: v })) : nothing}
        ${lamp && f.entity && f.entity !== "none"
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("furn_only_color_hint")}
                ><input type="checkbox" .checked=${!!f.only_color} ?disabled=${!this.isEditor} @change=${(ev: Event) => this.updateFurniture({ only_color: (ev.target as HTMLInputElement).checked ? "#ffd400" : null })} />
                ${this.t("furn_only_color")}</label
              >
              ${f.only_color
                ? html`<label class="fp3d-field"
                      >${this.t("furn_only_color_pick")}
                      <input type="color" .value=${f.only_color} ?disabled=${!this.isEditor} @change=${(ev: Event) => this.updateFurniture({ only_color: (ev.target as HTMLInputElement).value })} /></label>
                    <p class="fp3d-sub fp3d-wide">${this.t("furn_only_color_hint")}</p>`
                : nothing}`
          : nothing}
        ${volumeMeter(f.type)
          ? // a gas or water meter (#730): its reading in m³ or litres stands at the symbol, it draws no power
            html`${this.entitySelect(
                this.t("furn_meter_reading"),
                f.extra ?? null,
                undefined,
                this.entityOptions(
                  (id) =>
                    id.startsWith("sensor.") &&
                    (["gas", "water", "volume"].includes(String(hass.states[id]?.attributes.device_class ?? "")) || /^(m³|m3|L|l|ft³|gal|CCF)$/.test(String(hass.states[id]?.attributes.unit_of_measurement ?? ""))),
                ),
                (v) => this.updateFurniture({ extra: v === "none" ? null : v }),
              )}`
          : nothing}
        ${lamp || f.type === "grid_point" || volumeMeter(f.type)
          ? nothing
          : this.entitySelect(
              this.t(energyRole(f.type) === "meter" ? "energy_grid" : energyRole(f.type) === "inverter" ? "energy_solar_sensor" : energyRole(f.type) === "home_battery" ? "energy_battery_sensor" : "furn_power"),
              f.power ?? null,
              autoPick("power"),
              power,
              (v) => this.updateFurniture({ power: v }),
            )}
        ${!lamp && f.power && f.power !== "none" && !isEnergyDevice(f.type)
          ? html`<label class="fp3d-field" title=${this.t("furn_run_w_hint")}
              >${this.t("furn_run_w")}
              <input
                type="number"
                min="1"
                max="5000"
                step="5"
                placeholder="10"
                .value=${f.run_w ? String(f.run_w) : ""}
                ?disabled=${!this.isEditor}
                @change=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this.updateFurniture({ run_w: v > 0 ? Math.min(5000, Math.round(v)) : null });
                }}
            /></label>`
          : nothing}
        ${!lamp && f.power && f.power !== "none" && !isEnergyDevice(f.type) ? this.circuitSelect(f.circuit ?? null, f.power, (v) => this.updateFurniture({ circuit: v })) : nothing}
        ${!lamp && f.power && f.power !== "none" && !isEnergyDevice(f.type) ? this.wireEnergySelect(f.energy ?? null, f.power, (v) => this.updateFurniture({ energy: v })) : nothing}
        ${!lamp && !["grid_point", "meter", "inverter", "home_battery"].includes(energyRole(f.type) ?? f.type)
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!f.holo} ?disabled=${!this.isEditor} @change=${(ev: Event) => this.updateFurniture({ holo: (ev.target as HTMLInputElement).checked })} />
              ${this.t("furn_holo")}</label
            >`
          : energyRole(f.type) === "inverter"
            ? html`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${f.plant_card !== false} ?disabled=${!this.isEditor} @change=${(ev: Event) => this.updateFurniture({ plant_card: (ev.target as HTMLInputElement).checked ? undefined : false })} />
                ${this.t("furn_plant_card")}</label
              >
              ${f.plant_card !== false
                ? html`${this.len(this.t("holo_right"), f.plant_right ?? 0, (v) => this.updateFurniture({ plant_right: Math.min(30, Math.max(-30, round(v))) || undefined }), 0.25)}
                  ${this.len(this.t("holo_up"), f.plant_up ?? 0, (v) => this.updateFurniture({ plant_up: Math.min(30, Math.max(-30, round(v))) || undefined }), 0.25)}`
                : nothing}`
            : nothing}
      </div>
      ${energyRole(f.type) === "meter"
        ? html`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"), f.export ?? null, undefined, power, (v) => this.updateFurniture({ export: v === "none" ? null : v }))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`
        : nothing}
      ${energyRole(f.type) === "inverter" && (this._doc.settings.roof.solar ?? []).length
        ? (() => {
            // which strings feed this inverter, so it can be told apart from the others (#213)
            const strings = (this._doc.settings.roof.strings ?? []).filter((st) => st.inverter === f.id).map((st) => st.name);
            return html`<p class="fp3d-sub fp3d-wide">${strings.length ? this.t("inverter_strings", { names: strings.join(", ") }) : this.t("inverter_strings_none")}</p>`;
          })()
        : nothing}
      ${energyRole(f.type) === "home_battery"
        ? html`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(
              this.t("furn_soc"),
              f.soc ?? null,
              undefined,
              this.entityOptions((id) => numberish(id) && (hass.states[id]?.attributes.device_class === "battery" || hass.states[id]?.attributes.unit_of_measurement === "%")),
              (v) => this.updateFurniture({ soc: v === "none" ? null : v }),
            )}
            ${this.entitySelect(this.t("furn_charge"), f.charge ?? null, undefined, power, (v) => this.updateFurniture({ charge: v === "none" ? null : v }))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`
        : nothing}
      ${energyRole(f.type) === "wallbox"
        ? html`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(
              this.t("furn_wallbox_status"),
              f.status ?? null,
              undefined,
              this.entityOptions((id) => binaryish(id) || numberish(id)),
              (v) => this.updateFurniture({ status: v === "none" ? null : v }),
            )}
          </div>`
        : nothing}
      ${!lamp && !volumeMeter(f.type)
        ? this.entitySelect(this.t("furn_extra"), f.extra ?? null, undefined, this.entityOptions((id) => id.startsWith("sensor.")), (v) => this.updateFurniture({ extra: v === "none" ? null : v }))
        : nothing}
      ${!lamp || f.entity
        ? html`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!f.confirm} ?disabled=${!this.isEditor} @change=${(ev: Event) => this.updateFurniture({ confirm: (ev.target as HTMLInputElement).checked })} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(f.marker ?? null, (v) => this.updateFurniture({ marker: v }))}${this.iconInput(f.icon, (v) => this.updateFurniture({ icon: v }))}</div>`
        : nothing}
      ${isRobotVacuum(f.type)
        ? html`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(
              this.t("furn_robot_room"),
              f.room_sensor ?? null,
              robotRoomSensor(hass, furnitureEntities(hass, this._doc.floors).get(f.id)?.entity ?? null, null),
              this.entityOptions((id) => numberish(id)),
              (v) => this.updateFurniture({ room_sensor: v }),
            )}
          </div>`
        : nothing}
      ${f.type === "fridge_smart"
        ? html`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"), f.door_left ?? null, undefined, doorSensors, (v) => this.updateFurniture({ door_left: v }))}
              ${this.entitySelect(this.t("furn_door_right"), f.door_right ?? null, undefined, doorSensors, (v) => this.updateFurniture({ door_right: v }))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`
        : nothing}
      ${hasScreen(f.type) ? this.renderPictureRules(f) : nothing}
      <p class="fp3d-sub">${this.t(lamp ? (f.type === "lamp_pendant" ? "lamp_hint_pendant" : "lamp_hint") : media ? "furn_links_hint_tv" : isRobotVacuum(f.type) ? "robot_hint" : "furn_links_hint")}</p>`;
  }

  /** Parking spot: presence sensor, the vehicle shown, its size, and an optional vehicle type sensor. */
  renderParkingForm(f: Furniture) {
    const admin = this.isEditor;
    const lang = this.hass?.language ?? "en";
    const vehicles = (this.packs ?? []).flatMap((p) => p.items.filter((it) => it.vehicle).map((it) => ({ id: packType(p.id, it.id), label: `${packItemName(it, lang)} · ${packName(p, lang)}` })));
    // presence: GPS trackers (a car's own integration, a phone) before the many network trackers of a router (#227)
    const rank = (id: string) => {
      if (!id.startsWith("device_tracker.")) return 1;
      return this.hass?.states[id]?.attributes.source_type === "router" ? 2 : 0;
    };
    const presence = [...this.entityOptions((id) => /^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(id))].sort((a, b) => rank(a.id) - rank(b.id));
    const typeSensors = this.entityOptions((id) => /^(sensor|input_select|select|input_text)\./.test(id));
    const typeState = f.type_entity ? this.hass?.states[f.type_entity] : undefined;
    const options = Array.isArray(typeState?.attributes.options) ? (typeState.attributes.options as string[]) : [];
    const types = f.types ?? [];
    const setTypes = (next: { state: string; vehicle: string }[]) => this.updateFurniture({ types: next });
    const vehicleSelect = (value: string | null, onChange: (v: string | null) => void) =>
      html`<select ?disabled=${!admin} @change=${(e: Event) => onChange((e.target as HTMLSelectElement).value || null)}>
        <option value="" ?selected=${!value}>${this.t("parking_vehicle_none")}</option>
        ${vehicles.map((v) => html`<option value=${v.id} ?selected=${v.id === value}>${v.label}</option>`)}
      </select>`;
    // the room's height against the vehicle's: a hint when it would not fit
    const floor = this.floor;
    const room = floor?.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
    const item = f.vehicle ? packInfo(f.vehicle) : undefined;
    const carH = item ? item.size[2] * (f.scale ?? 1) : 0;
    const tooTall = !!room && !!floor && carH > floor.height + 1e-6;
    return html`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"), f.entity ?? null, undefined, presence, (v) => this.updateFurniture({ entity: v === "none" ? null : v }))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${vehicleSelect(f.vehicle ?? null, (v) => this.updateFurniture({ vehicle: v }))}</label>
        ${vehicles.length ? nothing : html`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"), Math.round((f.scale ?? 1) * 100), (v) => this.updateFurniture({ scale: Math.min(150, Math.max(30, v)) / 100 }), 5, 30)}
        ${this.entitySelect(this.t("parking_type_entity"), f.type_entity ?? null, undefined, typeSensors, (v) => this.updateFurniture({ type_entity: v === "none" ? null : v }))}
        ${f.type_entity
          ? html`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${types.map(
                (t, i) => html`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${t.state}
                    ?disabled=${!admin}
                    @change=${(e: Event) => setTypes(types.map((x, j) => (j === i ? { ...x, state: (e.target as HTMLInputElement).value } : x)))}
                  />
                  ${vehicleSelect(t.vehicle, (v) => setTypes(types.map((x, j) => (j === i ? { ...x, vehicle: v ?? "" } : x))))}
                  <button class="fp3d-btn" ?disabled=${!admin} title=${this.t("delete")} @click=${() => setTypes(types.filter((_, j) => j !== i))}>✕</button>
                </div>`,
              )}
              <datalist id="fp3d-parking-states">${options.map((o) => html`<option value=${o}></option>`)}</datalist>
              ${admin
                ? html`<button class="fp3d-btn" @click=${() => setTypes([...types, { state: options[types.length] ?? "", vehicle: vehicles[0]?.id ?? "" }])}>${this.t("parking_add_type")}</button>`
                : nothing}
            </div>`
          : nothing}
      </div>
      ${tooTall ? html`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall", { car: formatNumber(this.hass, carH, 2), room: formatNumber(this.hass, floor!.height, 2) })}</p>` : nothing}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(f)}`;
  }

  /** Auto Pro: the car's entities – one entity of the car's device is enough, the roles are found beside it. */
  renderCarForm(f: Furniture) {
    if (!this.hass) return nothing;
    const hass = this.hass;
    const car = f.car ?? {};
    const auto = carEntities(hass, { entity: f.entity, car: { device: car.device } });
    const set = (patch: Partial<CarLinks>) => this.updateFurniture({ car: { ...car, ...patch } });
    const any = this.entityOptions((id) => /^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(id));
    const role = (key: keyof CarLinks & keyof CarEntities, label: I18nKey, options: { id: string; label: string }[]) =>
      this.entitySelect(this.t(label), car[key] ?? null, auto[key], options, (v) => set({ [key]: v === "none" ? "none" : v }));
    return html`<section>
      <h3>🚗 ${this.t("section_car")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"), car.device ?? null, undefined, any, (v) => set({ device: v === "none" ? null : v }))}
        ${role("soc", "car_soc", this.entityOptions((id) => numberish(id)))}
        ${role("range", "car_range", this.entityOptions((id) => numberish(id)))}
        ${role("charging", "car_charging", this.entityOptions((id) => /^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(id)))}
        ${role("plugged", "car_plugged", this.entityOptions((id) => binaryish(id)))}
        ${role("lock", "car_lock", this.entityOptions((id) => /^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(id)))}
        ${role("climate", "car_climate", this.entityOptions((id) => /^(climate|switch|binary_sensor|input_boolean)\./.test(id)))}
        ${role("tracker", "car_tracker", this.entityOptions((id) => id.startsWith("device_tracker.")))}
      </div>
    </section>`;
  }

  /** Ids of the stored pictures any screen of the plan uses (in order of first use). */
  storedPictures(): string[] {
    const ids: string[] = [];
    for (const floor of this._doc.floors) {
      for (const m of floor.furniture) {
        for (const r of m.pictures ?? []) if (r.image && !/^https?:\/\//.test(r.image) && !r.image.startsWith("camera:") && !ids.includes(r.image)) ids.push(r.image);
      }
    }
    return ids;
  }

  /**
   * Pictures a screen shows by an entity's state: the rules are grouped by entity (and attribute), each
   * group lists its values with a picture; in order, the first matching rule wins.
   */
  renderPictureRules(f: Furniture) {
    const admin = this.isEditor;
    const rules = f.pictures ?? [];
    const set = (next: ScreenPicture[]) => this.updateFurniture({ pictures: next });
    const entities = this.entityOptions(() => true);
    const scalar = (v: unknown) => ["string", "number", "boolean"].includes(typeof v);
    const attributes = (id: string) =>
      Object.entries(this.hass?.states[id]?.attributes ?? {})
        .filter(([k, v]) => scalar(v) && k !== "friendly_name" && k !== "icon")
        .map(([k]) => k);
    const current = (entity: string, attribute: string | null) => {
      const st = this.hass?.states[entity];
      if (!st) return "";
      return String((attribute ? st.attributes[attribute] : st.state) ?? "");
    };
    const suggestions = (entity: string, attribute: string | null) => {
      const st = this.hass?.states[entity];
      const options = !attribute && Array.isArray(st?.attributes.options) ? (st.attributes.options as string[]) : [];
      return options.length ? options : [current(entity, attribute)];
    };
    // groups in order of first appearance: one per entity + attribute
    const keyOf = (r: { entity: string; attribute?: string | null }) => `${r.entity}\u0000${r.attribute ?? ""}`;
    const groups: { entity: string; attribute: string | null; rows: number[] }[] = [];
    rules.forEach((r, i) => {
      const g = groups.find((x) => keyOf(x) === keyOf(r));
      if (g) g.rows.push(i);
      else groups.push({ entity: r.entity, attribute: r.attribute ?? null, rows: [i] });
    });
    const patchGroup = (g: (typeof groups)[number], change: Partial<ScreenPicture>) => set(rules.map((x, i) => (g.rows.includes(i) ? { ...x, ...change } : x)));
    const patchRow = (i: number, change: Partial<ScreenPicture>) => set(rules.map((x, j) => (j === i ? { ...x, ...change } : x)));
    const stored = this.storedPictures();
    const cameras = this.entityOptions((id) => id.startsWith("camera."));
    const cameraOf = (r: ScreenPicture) => (r.image.startsWith("camera:") ? r.image.slice(7) : null);
    return html`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${rules.length
        ? html`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ screen_bg: (e.target as HTMLSelectElement).value as "black" | "white" })}>
              <option value="black" ?selected=${(f.screen_bg ?? "black") === "black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${f.screen_bg === "white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`
        : nothing}
      ${groups.map(
        (g) => html`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${entities}
            .value=${g.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!admin}
            @change=${(e: CustomEvent<{ value: string }>) => {
              e.stopPropagation();
              patchGroup(g, { entity: e.detail.value });
            }}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!admin}
            title=${this.t("picture_attribute")}
            @change=${(e: Event) => {
              const attribute = (e.target as HTMLSelectElement).value || null;
              // the values of the group start over with what the entity reports now
              const now = current(g.entity, attribute);
              set(rules.map((x, i) => (g.rows.includes(i) ? { ...x, attribute, state: g.rows[0] === i ? now : x.state } : x)));
            }}
          >
            <option value="" ?selected=${!g.attribute}>${this.t("picture_state_of")}</option>
            ${attributes(g.entity).map((a) => html`<option value=${a} ?selected=${a === g.attribute}>${a}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current", { value: current(g.entity, g.attribute) || "–" })}</span>
          ${g.rows.map((i) => {
            const r = rules[i];
            const hit = !!this.hass && pictureRuleMatches(this.hass, r);
            return html`<div class="fp3d-picture-row ${hit ? "fp3d-rule-hit" : ""}">
              <input
                type="text"
                list="fp3d-picture-states-${i}"
                placeholder=${this.t("picture_state")}
                .value=${r.state}
                ?disabled=${!admin}
                @change=${(e: Event) => patchRow(i, { state: (e.target as HTMLInputElement).value })}
              />
              <datalist id="fp3d-picture-states-${i}"><option value="*"></option>${suggestions(g.entity, g.attribute).map((v) => html`<option value=${v}></option>`)}</datalist>
              ${this._images[r.image] ? html`<img class="fp3d-picture-thumb" src=${this._images[r.image].url} alt="" /> ` : nothing}
              ${cameraOf(r) && this.hass?.states[cameraOf(r)!]?.attributes.entity_picture
                ? html`<img class="fp3d-picture-thumb" src=${String(this.hass.states[cameraOf(r)!].attributes.entity_picture)} alt="" />`
                : nothing}
              <label class="fp3d-btn fp3d-picture-pick">
                ${r.image ? this.t("picture_change") : this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!admin} @change=${(e: Event) => void this.uploadPicture(e, f, i)} />
              </label>
              ${stored.filter((id) => id !== r.image).length
                ? html`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${stored
                      .filter((id) => id !== r.image && this._images[id])
                      .map((id) => html`<button class="fp3d-picture-reuse-btn" ?disabled=${!admin} @click=${() => patchRow(i, { image: id })}><img src=${this._images[id].url} alt="" /></button>`)}
                  </div>`
                : nothing}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(r.image) ? r.image : ""}
                ?disabled=${!admin}
                @change=${(e: Event) => {
                  const v = (e.target as HTMLInputElement).value.trim();
                  if (v) patchRow(i, { image: v });
                }}
              />
              ${cameras.length
                ? html`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${cameras}
                    .fixed=${[{ id: "none", label: this.t("picture_camera_none") }]}
                    .value=${cameraOf(r) ?? "none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!admin}
                    @change=${(e: CustomEvent<{ value: string }>) => {
                      e.stopPropagation();
                      if (e.detail.value !== "none") patchRow(i, { image: `camera:${e.detail.value}` });
                      else if (cameraOf(r)) patchRow(i, { image: "" });
                    }}
                  ></fp3d-entity-picker>`
                : nothing}
              <span class="fp3d-sub">${hit ? this.t("picture_matches") : ""}</span>
              <button class="fp3d-btn" ?disabled=${!admin} title=${this.t("delete")} @click=${() => set(rules.filter((_, j) => j !== i))}>✕</button>
            </div>`;
          })}
          ${admin
            ? html`<button class="fp3d-btn" @click=${() => set([...rules, { entity: g.entity, attribute: g.attribute, state: current(g.entity, g.attribute), image: "" }])}>
                ${this.t("picture_add_value")}
              </button>`
            : nothing}
        </div>`,
      )}
      ${admin
        ? html`<button class="fp3d-btn" @click=${() => set([...rules, { entity: entities[0]?.id ?? "", attribute: null, state: "on", image: "" }])}>${this.t("picture_add_entity")}</button>`
        : nothing}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`;
  }

  /** Stores a picture for a rule, scaled down to what a screen in 3D needs. */
  async uploadPicture(e: Event, f: Furniture, index: number): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file) return;
    const bitmap = await createImageBitmap(file);
    const k = Math.min(1, 512 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * k);
    canvas.height = Math.round(bitmap.height * k);
    canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const data = canvas.toDataURL(file.type === "image/png" ? "image/png" : "image/jpeg", 0.85);
    const imageId = uid("pic");
    await storeImage(this.hass, imageId, data, this.home);
    this._images = { ...this._images, [imageId]: { url: data, aspect: canvas.height / canvas.width } };
    const rules = this.furnitureItem?.id === f.id ? (this.furnitureItem.pictures ?? []) : (f.pictures ?? []);
    this.updateFurniture({ pictures: rules.map((x, j) => (j === index ? { ...x, image: imageId } : x)) });
  }

  libIndex: { key: string; entries: LibraryEntry[] } | null = null;

  /** The library's index, built once per language and pack state. */
  libraryEntries(lang: string): LibraryEntry[] {
    // the smart fridge is exclusive: an installed pack with the feature "fridge_smart", or Haushalt Pro, offers it
    const extra = ["fridge_smart"];
    const key = `${lang}|${libPacksVersion()}|${this.packs?.length ?? 0}|${extra.length}`;
    if (this.libIndex?.key === key) return this.libIndex.entries;
    const entries = buildIndex({
      packs: this.packs ?? [],
      basics: basicTypes(extra),
      language: lang,
      basicName: (t) => this.t(`furn_${t}` as I18nKey),
      basicNameEn: (t) => translate(EN_HASS, `furn_${t}` as I18nKey),
      kindName: (k) => this.t(`lib_kind_${k}` as I18nKey),
      size: furnitureSize,
    });
    this.libIndex = { key, entries };
    return entries;
  }

  /** A card's picture: drawn by the 3D bundle like the hover preview, smaller. */
  libraryThumb = async (entry: LibraryEntry): Promise<string | null> => {
    const [mod] = await Promise.all([load3d(), this.hass ? ensureRecipes(this.hass, [entry.type]) : undefined]);
    // no recipe (offline, the pack just went): no picture, so none is kept that shows a plain box
    if (isPackType(entry.type) && !packItem(entry.type)) return null;
    const [w, d, h] = entry.size;
    return mod.furniturePreview({ type: entry.type, w, d, h, variant: null, lamp: LAMP_MODEL[entry.type] ?? null }, 96, this.packs ?? []);
  };

  libUpdatesAsked = false;

  /** Ask which placed items have an update (#48); a request already under way is asked again once it is back. */
  refreshLibUpdates(): void {
    if (!this.hass) return;
    if (this.libUpdatesAsking) {
      this.libUpdatesAsked = true;
      return;
    }
    this.libUpdatesAsking = true;
    void fetchPackUpdates(this.hass)
      .then((status) => (this._libUpdates = libraryUpdates(status)))
      .catch(() => (this._libUpdates = new Set()))
      .finally(() => {
        this.libUpdatesAsking = false;
        if (this.libUpdatesAsked) {
          this.libUpdatesAsked = false;
          this.refreshLibUpdates();
        }
      });
  }

  libUpdatesAsking = false;

  /** Update the placed items of a library card to the installed release (#48); the plan comes back with a new revision. */
  async updateFromLibrary(types: string[]): Promise<void> {
    if (!this.hass) return;
    try {
      await updatePlacedItems(this.hass, types);
    } catch (err) {
      this._notice = String((err as { message?: string })?.message ?? err);
    }
    this.refreshLibUpdates();
  }

  renderFurnitureLibrary() {
    const room = this.room;
    const lang = this.hass?.language ?? "en";
    return html`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${room ? this.t("furniture_into", { room: room.name }) : this.t("furniture_pick_room")}</p>
      ${this._placing
        ? html`<div class="fp3d-placing" role="status">
            <span>${this.t("place_armed", { name: furnitureName(this.hass, this._placing.type) })}</span>
            <button class="fp3d-btn fp3d-primary" @click=${() => this.placeArmedInMiddle()}>${room ? this.t("place_middle_room", { room: room.name }) : this.t("place_middle")}</button>
            <button class="fp3d-btn" @click=${() => this.cancelPlacing()}>${this.t("cancel")}</button>
          </div>`
        : nothing}
      <fp3d-library
        .entries=${this.libraryEntries(lang)}
        .language=${lang}
        .roomHint=${room ? roomKindOf(room.name) : null}
        .admin=${this.isEditor}
        .t=${(k: string, v?: Record<string, string | number>) => this.t(k as I18nKey, v)}
        .thumb=${this.libraryThumb}
        .updates=${this._libUpdates}
        @library-update=${(e: CustomEvent<{ types: string[] }>) => void this.updateFromLibrary(e.detail.types)}
        @library-add=${(e: CustomEvent<{ type: string; mirror?: boolean }>) => this.addFurniture(e.detail.type, !!e.detail.mirror)}
        @library-preview=${(e: CustomEvent<{ type: string | null; element: HTMLElement | null }>) => {
          if (e.detail.type && e.detail.element) void this.showPreview(e.detail.type, e.detail.element);
          else this._preview = null;
        }}
      ></fp3d-library>
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${() => this.dispatchEvent(new CustomEvent("open-extensions", { bubbles: true, composed: true }))}>${this.t("ext_open")}</button>
    </div>`;
  }

  /** Picture of an item, drawn by the 3D bundle and shown left of its button. */
  async showPreview(type: string, button: HTMLElement): Promise<void> {
    const r = button.getBoundingClientRect();
    const place = { left: Math.max(8, r.left - 196), top: Math.max(8, Math.min(window.innerHeight - 200, r.top + r.height / 2 - 95)) };
    this._preview = { type, url: null, ...place };
    try {
      const [mod] = await Promise.all([load3d(), this.hass ? ensureRecipes(this.hass, [type]) : undefined]);
      const [w, d, h] = furnitureSize(type);
      const url = mod.furniturePreview({ type, w, d, h, variant: null, lamp: LAMP_MODEL[type] ?? null }, 180, this.packs ?? []);
      if (this._preview?.type === type) this._preview = { type, url, ...place };
    } catch {
      this._preview = null;
    }
  }

  renderPreview() {
    const p = this._preview;
    if (!p) return nothing;
    return html`<div class="fp3d-preview" style="left:${p.left}px;top:${p.top}px" aria-hidden="true">
      ${p.url ? html`<img src=${p.url} alt="" />` : html`<span class="fp3d-preview-wait"></span>`}
      <b>${furnitureName(this.hass, p.type)}</b>
    </div>`;
  }

  renderDeviceForm(pl: Placement) {
    const admin = this.isEditor;
    const kind = kindOf(pl.entity_id);
    const light = kind === "light";
    const mount = pl.mount ?? "ceiling";
    const auto = kind ? defaultHeight(kind, this.floor?.height ?? 2.5, light ? mount : null) : 1;
    return html`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device", pl.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${kind ? iconPath(kind) : ""} />
        </svg>
        ${entityName(this.hass, pl.entity_id)}
      </p>
      <div class="fp3d-form">
        ${light
          ? html`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateDevice({ mount: (e.target as HTMLSelectElement).value as LampMount, y: null })}>
                ${(["ceiling", "floor", "table", "wall"] as const).map((m) => html`<option value=${m} ?selected=${m === mount}>${this.t(`lamp_${m}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(pl.glow_scale, (v) => this.updateDevice({ glow_scale: v }))}`
          : kind === "camera"
            ? html`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!admin} @change=${(e: Event) => this.updateDevice({ mount: (e.target as HTMLSelectElement).value as LampMount, y: null })}>
                  <option value="wall" ?selected=${(pl.mount ?? "wall") === "wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${pl.mount === "ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >${this.renderCameraModel(pl)}`
            : nothing}
        ${this.len(this.t("x"), pl.x, (v) => this.updateDevice({ x: v }))} ${this.len(this.t("z"), pl.z, (v) => this.updateDevice({ z: v }))}
        ${this.len(this.t("marker_height"), pl.y ?? auto, (v) => this.updateDevice({ y: Math.max(0, v) }), 0.05, 0)}
        ${this.num(this.t("rotation"), pl.rotation ?? 0, (v) => this.updateDevice({ rotation: ((v % 360) + 360) % 360 }), 1)}
        ${kind === "camera"
          ? html`${this.num(this.t("camera_fov"), pl.fov ?? (pl.mount === "ceiling" ? 360 : 90), (v) => this.updateDevice({ fov: Math.min(360, Math.max(10, v)) }), 5, 10)}
            ${this.len(this.t("camera_reach"), pl.reach ?? (pl.mount === "ceiling" ? 3 : 4.5), (v) => this.updateDevice({ reach: Math.min(50, Math.max(0.5, v)) }), 0.5, 0.5)}
            ${this.num(this.t("camera_tilt"), pl.tilt ?? (pl.mount === "ceiling" ? 65 : 20), (v) => this.updateDevice({ tilt: Math.min(90, Math.max(0, v)) }), 5, 0)}
            <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_pins_hint")}
              ><input type="checkbox" .checked=${pl.detect_pins !== false} ?disabled=${!admin} @change=${(ev: Event) => this.updateDevice({ detect_pins: (ev.target as HTMLInputElement).checked ? null : false })} />
              ${this.t("camera_detect_pins")}</label
            >
            ${this.renderCameraDetections(pl.entity_id)}`
          : nothing}
        ${kind && TOGGLE_KINDS.has(kind)
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!pl.confirm} ?disabled=${!admin} @change=${(ev: Event) => this.updateDevice({ confirm: (ev.target as HTMLInputElement).checked })} />
              ${this.t("device_confirm")}</label
            >`
          : nothing}
        ${powerSensorFor(this.hass!, pl.entity_id)
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!pl.holo} ?disabled=${!admin} @change=${(ev: Event) => this.updateDevice({ holo: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("furn_holo")}</label
            >`
          : nothing}
        ${powerSensorFor(this.hass!, pl.entity_id) ? this.circuitSelect(pl.circuit ?? null, powerSensorFor(this.hass!, pl.entity_id), (v) => this.updateDevice({ circuit: v })) : nothing}
        ${powerSensorFor(this.hass!, pl.entity_id) ? this.wireEnergySelect(pl.energy ?? null, powerSensorFor(this.hass!, pl.entity_id)!, (v) => this.updateDevice({ energy: v })) : nothing}
        ${this.markerSelect(pl.marker ?? null, (v) => this.updateDevice({ marker: v }))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${pl.name ?? ""} ?disabled=${!admin} maxlength="60" placeholder=${entityName(this.hass!, pl.entity_id)} @change=${(e: Event) => this.updateDevice({ name: (e.target as HTMLInputElement).value.trim() || null })}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(pl.aliases ?? []).join(", ")} ?disabled=${!admin} placeholder=${this.t("aliases_placeholder")} @change=${(e: Event) => this.updateDevice({ aliases: splitAliases((e.target as HTMLInputElement).value) })}
        /></label>
        ${pl.name
          ? html`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!pl.show_name} ?disabled=${!admin} @change=${(ev: Event) => this.updateDevice({ show_name: (ev.target as HTMLInputElement).checked || undefined })} />
              ${this.t("show_name")}</label
            >`
          : nothing}
        ${this.iconInput(pl.icon, (v) => this.updateDevice({ icon: v }))}
      </div>
      ${this.renderItemActions(pl.actions, pl.entity_id, (a) => this.updateDevice({ actions: a }))}
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${() => this.centreDevice()}>${this.t("device_centre")}</button>
            ${pl.y !== null ? html`<button class="fp3d-btn" @click=${() => this.updateDevice({ y: null })}>${this.t("height_auto")}</button>` : nothing}
            ${this.renderAsFurniture(pl)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${() => {
                this.removeDevice(pl.entity_id);
                this._deviceId = null;
              }}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`
        : nothing}
    </section>`;
  }

  renderDeviceList(room: Room) {
    const admin = this.isEditor;
    const hass = this.hass;
    const areaName = room.area_id ? hass?.areas?.[room.area_id]?.name : undefined;
    const area = hass ? areaEntities(hass, room.area_id).filter((id) => isPlaceable(kindOf(id))) : [];
    // placed as a device, or as a lamp with this light
    const placedHere = new Set([
      ...(this.floor?.placements.filter((pl) => pointInPolygon([pl.x, pl.z], room.points)).map((pl) => pl.entity_id) ?? []),
      ...(this.floor?.furniture.filter((m) => isLamp(m.type) && m.entity && pointInPolygon([m.x, m.z], room.points)).map((m) => m.entity!) ?? []),
    ]);
    // placed before it was hidden in Home Assistant: it stays in 3D, so it stays in the list too – to remove or hide it (#645)
    const ids = hass ? [...area, ...[...placedHere].filter((id) => !area.includes(id) && hiddenInHa(hass, id) && isPlaceable(kindOf(id)))] : area;
    const groups = hass ? groupByDevice(hass, ids) : [];
    // the automatic placement only takes each device's main entity
    const unplacedMain = groups.map((g) => g.primary).filter((id) => !placedHere.has(id));
    const q = this._deviceQuery.trim().toLowerCase();
    const matches = (id: string) => !q || entityName(hass, id, areaName).toLowerCase().includes(q) || id.includes(q);
    const ceilingLights = this.floor?.placements.filter(
      (p) => kindOf(p.entity_id) === "light" && (p.mount ?? "ceiling") === "ceiling" && pointInPolygon([p.x, p.z], room.points),
    ).length;
    const pinned = new Set(room.panel ?? []);
    const hidden = new Set(room.hidden ?? []);
    const noState = new Set(room.no_state ?? []);
    // where an entity from elsewhere is placed already (placing it here moves it)
    const placedIn = new Map<string, string>();
    for (const f of this._doc.floors)
      for (const id of [...f.placements.map((p) => [p.entity_id, p.x, p.z] as const), ...f.furniture.filter((m) => isLamp(m.type) && m.entity).map((m) => [m.entity!, m.x, m.z] as const)]) {
        const r = f.rooms.find((x) => pointInPolygon([id[1], id[2]], x.points));
        if (r && r.id !== room.id) placedIn.set(id[0], r.name);
      }
    // extra: an entity from another area (shown only to place it); sub: a further entity of a device, with the same
    // buttons as its main one – hidden or without state on its own (D484)
    const row = (id: string, extra = false, nameArea = areaName, sub = false) => {
      const placed = placedHere.has(id);
      const elsewhere = placed ? undefined : placedIn.get(id);
      return html`<div class="fp3d-row fp3d-dev-row ${extra || sub ? "fp3d-dev-extra" : ""} ${hidden.has(id) ? "fp3d-dev-hidden" : ""}">
        <button class="fp3d-dev-name ${placed ? "" : "fp3d-muted"}" ?disabled=${!placed} @click=${() => this.selectItem("device", id)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${iconPath(kindOf(id)!)} />
          </svg>
          <span>${entityName(hass, id, nameArea)}${elsewhere ? html`<small class="fp3d-muted"> · ${this.t("devices_placed_in", { room: elsewhere })}</small>` : nothing}</span>
        </button>
        ${admin && !extra
          ? html`<button
              class="fp3d-pin ${hidden.has(id) ? "fp3d-pin-on" : ""}"
              aria-pressed=${hidden.has(id)}
              title=${this.t(hidden.has(id) ? "panel_unhide" : "panel_hide")}
              @click=${() => this.updateRoom({ hidden: hidden.has(id) ? [...hidden].filter((x) => x !== id) : [...hidden, id] })}
            >
              ${hidden.has(id) ? "🙈" : "👁"}
            </button>`
          : nothing}
        ${admin && !extra && !hidden.has(id)
          ? html`<button
              class="fp3d-pin ${noState.has(id) ? "fp3d-pin-on" : ""}"
              aria-pressed=${noState.has(id)}
              title=${this.t(noState.has(id) ? "panel_state_show" : "panel_state_hide")}
              @click=${() => this.updateRoom({ no_state: noState.has(id) ? [...noState].filter((x) => x !== id) : [...noState, id] })}
            >
              ${noState.has(id) ? "∅" : "Aa"}
            </button>`
          : nothing}
        ${admin && !placed
          ? html`<button
              class="fp3d-pin ${pinned.has(id) ? "fp3d-pin-on" : ""}"
              aria-pressed=${pinned.has(id)}
              title=${this.t(pinned.has(id) ? "panel_unpin" : "panel_pin")}
              @click=${() => this.updateRoom({ panel: pinned.has(id) ? [...pinned].filter((x) => x !== id) : [...pinned, id] })}
            >
              ${pinned.has(id) ? "★" : "☆"}
            </button>`
          : nothing}
        ${admin
          ? placed
            ? html`<button class="fp3d-link" @click=${() => this.removeDevice(id)}>${this.t("devices_remove")}</button>`
            : html`<button class="fp3d-link" @click=${() => this.placeDevices([id])}>${this.t("devices_place")}</button>`
          : nothing}
      </div>`;
    };
    const source = admin ? this._devSource : "area";
    const setSource = (v: "area" | "other" | "none") => {
      this._devSource = v;
      this._deviceQuery = "";
    };
    const searchField = html`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${(e: Event) => (this._deviceQuery = (e.target as HTMLInputElement).value)}
    />`;
    const placeAll = async () => {
      if (await this.ask(this.t("devices_place_all_confirm", { n: unplacedMain.length }), this.t("ask_ok"), false)) this.placeDevices(unplacedMain);
    };
    return html`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${admin
        ? html`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${source === "area"} @click=${() => setSource("area")}>${this.t("devices_src_area")}${ids.length ? ` (${groups.length})` : ""}</button>
            <button aria-pressed=${source === "other"} @click=${() => setSource("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${source === "none"} @click=${() => setSource("none")}>${this.t("devices_src_none")}</button>
          </div>`
        : nothing}
      ${source !== "area"
        ? html`${searchField}${this.renderDeviceExtras(room, row, source)}`
        : !room.area_id
        ? html`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`
        : !ids.length
          ? html`<p class="fp3d-sub">${this.t("devices_none")}</p>`
          : html`${admin && (ceilingLights ?? 0) >= 2
                ? html`<button class="fp3d-btn fp3d-wide-btn" @click=${() => this.spreadCeilingLights(room)}>${this.t("lights_spread")}</button>`
                : nothing}
              ${ids.length > 8 ? searchField : nothing}
              <div class="fp3d-room-list">
                ${groups.map((g) => {
                  const others = g.others.filter(matches);
                  const open = this._expanded.has(g.primary) || (!!q && others.length > 0);
                  if (!matches(g.primary) && !others.length) return nothing;
                  return html`${row(g.primary)}
                  ${g.others.length
                    ? html`<button
                        class="fp3d-more"
                        @click=${() => {
                          const next = new Set(this._expanded);
                          if (next.has(g.primary)) next.delete(g.primary);
                          else next.add(g.primary);
                          this._expanded = next;
                        }}
                      >
                        ${open ? this.t("devices_less") : this.t("devices_more", { n: g.others.length })}
                      </button>`
                    : nothing}
                  ${open ? this.renderDeviceOthers(q ? others : g.others, (id) => row(id, false, areaName, true), hidden, admin) : nothing}`;
                })}
              </div>
              ${admin && unplacedMain.length > 1
                ? html`<button class="fp3d-link fp3d-place-all" @click=${placeAll}>${this.t("devices_place_all_n", { n: unplacedMain.length })}</button>`
                : nothing}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`}
    </section>`;
  }

  /**
   * The further entities of an unfolded device: an LED strip from Govee2MQTT brings hundreds of segment lights
   * (#645), so the list stops after a few dozen (the search narrows it) and one button hides or shows them all.
   */
  renderDeviceOthers(ids: string[], row: (id: string) => unknown, hidden: Set<string>, admin: boolean) {
    const LIMIT = 40;
    const allHidden = ids.every((id) => hidden.has(id));
    const toggleAll = () => {
      const set = new Set(hidden);
      for (const id of ids) {
        if (allHidden) set.delete(id);
        else set.add(id);
      }
      this.updateRoom({ hidden: [...set] });
    };
    return html`${admin && ids.length >= 5
        ? html`<button class="fp3d-link fp3d-dev-all" @click=${toggleAll}>
            ${this.t(allHidden ? "devices_show_all" : "devices_hide_all", { n: ids.length })}
          </button>`
        : nothing}
      ${ids.slice(0, LIMIT).map(row)}
      ${ids.length > LIMIT ? html`<p class="fp3d-sub">${this.t("devices_narrow", { n: ids.length - LIMIT })}</p>` : nothing}`;
  }

  /** Devices from other areas or without an area, for the chosen source (computed only when shown). */
  renderDeviceExtras(room: Room, row: (id: string, extra?: boolean, nameArea?: string) => unknown, source: "other" | "none") {
    const hass = this.hass;
    if (!hass) return nothing;
    const LIMIT = 50;
    const q = this._deviceQuery.trim().toLowerCase();
    const match = (id: string, area?: string) => !q || `${entityName(hass, id, area)} ${id} ${area ?? ""}`.toLowerCase().includes(q);
    const more = (n: number) => (n > 0 ? html`<p class="fp3d-sub">${this.t("devices_narrow", { n })}</p>` : nothing);
    if (source === "other") {
      let shown = 0;
      let hidden = 0;
      const blocks = otherAreaEntities(hass, room.area_id).map((a) => {
        const ids = a.ids.filter((id) => match(id, a.name));
        const take = ids.slice(0, Math.max(0, LIMIT - shown));
        shown += take.length;
        hidden += ids.length - take.length;
        return take.length ? html`<div class="fp3d-dev-area">${a.name}</div>${take.map((id) => row(id, false, a.name))}` : nothing;
      });
      return shown ? html`<div class="fp3d-room-list">${blocks}</div>${more(hidden)}` : html`<p class="fp3d-sub">${this.t("devices_none")}</p>`;
    }
    const ids = unassignedEntities(hass).filter((id) => match(id));
    return ids.length
      ? html`<div class="fp3d-room-list">${ids.slice(0, LIMIT).map((id) => row(id))}</div>${more(ids.length - Math.min(ids.length, LIMIT))}`
      : html`<p class="fp3d-sub">${this.t("devices_none")}</p>`;
  }

  /** A room's leak and motion sensors for the live effects (#10): chosen ones, or every one of the room. */
  renderRoomLive(room: Room) {
    const hass = this.hass;
    if (!hass) return nothing;
    const set = (key: LiveKind, v: string | null) => {
      const next = { ...(room.live ?? {}), [key]: v };
      const empty = Object.values(next).every((x) => x == null);
      this.updateRoom({ live: empty ? null : next });
    };
    const chosen = !!room.live && Object.values(room.live).some((x) => x != null);
    const field = (key: LiveKind, label: string) => {
      const auto = roomLiveSensors(hass, this.floor ?? null, { ...room, live: null }, key);
      const classes = key === "leak" ? ["moisture"] : ["motion", "occupancy", "presence"];
      const options = this.entityOptions((id) => id.startsWith("binary_sensor.") && classes.includes(String(hass.states[id]?.attributes.device_class ?? "")), classes.join(","))
        .map((o) => ({ ...o, rank: entityAreaId(hass, o.id) === room.area_id ? 0 : 1 }))
        .sort((a, b) => a.rank - b.rank)
        .map(({ id, label }) => ({ id, label }));
      return this.entitySelect(label, room.live?.[key] ?? null, auto[0] ?? null, options, (v) => set(key, v));
    };
    return html`<details class="fp3d-points" ?open=${chosen}>
      <summary>${this.t("room_live")}</summary>
      <div class="fp3d-form">${field("leak", this.t("room_live_leak"))} ${field("motion", this.t("room_live_motion"))}</div>
      <p class="fp3d-sub">${this.t("room_live_hint")}</p>
    </details>`;
  }

  /** Room climate: temperature, humidity and CO2 from chosen sensors, or picked automatically. */
  renderRoomClimate(room: Room) {
    const hass = this.hass;
    if (!hass) return nothing;
    const set = (key: ClimateKey, v: string | null) => {
      const next = { ...(room.climate ?? {}), [key]: v };
      const empty = Object.values(next).every((x) => x == null);
      this.updateRoom({ climate: empty ? null : next });
    };
    const chosen = !!room.climate && Object.values(room.climate).some((x) => x != null);
    const field = (key: ClimateKey, label: string) => {
      const dc = CLIMATE_CLASSES[key];
      const auto = roomClimateSensors(hass, this.floor ?? null, { ...room, climate: null }, key);
      // the room's own sensors first, then all others; device temperatures (printer, heat pump) last
      // sensors of the kind, and thermostats that report it (#478)
      const attr = CLIMATE_ATTRS[key];
      const options = this.entityOptions((id) => (numberish(id) && hass.states[id]?.attributes.device_class === dc) || (!!attr && id.startsWith("climate.") && typeof hass.states[id]?.attributes[attr] === "number"), dc, attr)
        .map((o) => ({ ...o, rank: (entityAreaId(hass, o.id) === room.area_id ? 0 : 1) + (isRoomClimateSensor(hass, o.id) ? 0 : 2) }))
        .sort((a, b) => a.rank - b.rank)
        .map(({ id, label }) => ({ id, label }));
      return this.entitySelect(label, room.climate?.[key] ?? null, auto[0] ?? null, options, (v) => set(key, v));
    };
    return html`<details class="fp3d-points" ?open=${chosen}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${field("temperature", this.t("climate_temperature"))} ${field("humidity", this.t("climate_humidity"))} ${field("co2", this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`;
  }

  renderBackgroundForm(floor: Floor) {
    const bg = floor.background;
    return html`<details class="fp3d-section" ?open=${this._bgOpen} @toggle=${(e: Event) => (this._bgOpen = (e.target as HTMLDetailsElement).open)}>
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${bg
          ? html`${this.len(this.t("x"), bg.x, (v) => this.updateFloor({ background: { ...bg, x: v } }))}
              ${this.len(this.t("z"), bg.z, (v) => this.updateFloor({ background: { ...bg, z: v } }))}
              ${this.len(this.t("background_width"), bg.width, (v) => this.updateFloor({ background: { ...bg, width: Math.max(0.1, v) } }), 0.01, 0.1)}
              ${this.num(this.t("background_rotation"), bg.rotation ?? 0, (v) => this.updateFloor({ background: { ...bg, rotation: Math.round(v * 10) / 10 } }), 0.5)}
              ${this.isEditor
                ? html`<button
                      class="fp3d-btn fp3d-wide ${this._bgEdit ? "fp3d-primary" : ""}"
                      aria-pressed=${this._bgEdit}
                      @click=${() => {
                        this._bgEdit = !this._bgEdit;
                        // the handles need the select tool
                        if (this._bgEdit) this._tool = "select";
                      }}
                    >
                      ${this.t(this._bgEdit ? "background_edit_done" : "background_edit")}
                    </button>
                    <p class="fp3d-sub fp3d-wide">${this.t(this._bgEdit ? "background_handles_hint" : "background_fixed_hint")}</p>
                  <button class="fp3d-btn fp3d-wide ${this._bgLevel ? "fp3d-primary" : ""}" aria-pressed=${!!this._bgLevel} @click=${() => {
                    this._bgLevel = this._bgLevel ? null : [];
                    this._bgRuler = null;
                    this._bgEdit = false;
                  }}>📐 ${this.t(this._bgLevel ? "bg_level_cancel" : "bg_level")}</button>
                  ${this._bgLevel ? html`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length ? "bg_level_second" : "bg_level_first")}</p>` : nothing}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler ? "fp3d-primary" : ""}" aria-pressed=${!!this._bgRuler} @click=${() => {
                    this._bgRuler = this._bgRuler ? null : [];
                    this._bgLevel = null;
                    this._bgEdit = false;
                  }}>📏 ${this.t(this._bgRuler ? "bg_ruler_cancel" : "bg_ruler")}</button>
                  ${this._bgRuler
                    ? this._bgRuler.length < 2
                      ? html`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length ? "bg_ruler_second" : "bg_ruler_first")}</p>`
                      : html`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint", { m: this.m(Math.hypot(this._bgRuler[1][0] - this._bgRuler[0][0], this._bgRuler[1][1] - this._bgRuler[0][1])) })}</p>
                          <label class="fp3d-field"
                            >${unitLabel(this.t("bg_ruler_length"), this.unit)}
                            <input type=${this.unit === "imperial" ? "text" : "number"} min="0.01" step="0.01" .value=${this._bgRulerLen ? this.lenValue(this._bgRulerLen) : ""} @input=${(e: Event) => (this._bgRulerLen = this.readLen((e.target as HTMLInputElement).value) ?? 0)} @keydown=${(e: KeyboardEvent) => e.key === "Enter" && this.applyBgRuler(this._bgRulerLen)}
                          /></label>
                          <button class="fp3d-btn fp3d-primary" ?disabled=${!(this._bgRulerLen > 0)} @click=${() => this.applyBgRuler(this._bgRulerLen)}>${this.t("bg_ruler_apply")}</button>`
                    : nothing}`
                : nothing}
              <label class="fp3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(bg.opacity)}
                  @change=${(e: Event) => this.updateFloor({ background: { ...bg, opacity: parseFloat((e.target as HTMLInputElement).value) } })}
              /></label>
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${() => this.updateFloor({ background: null })}>${this.t("background_remove")}</button>`
          : nothing}
      </div>
    </details>`;
  }

  async loadHistory(): Promise<void> {
    if (!this.hass) return;
    try {
      this._history = await listHistory(this.hass, this.home);
    } catch {
      this._history = [];
    }
  }

  async restoreFromHistory(snap: Snapshot): Promise<void> {
    // a picture it names may be gone (kept only so many days, #154): it restores without it, and says so
    const lacks = snap.missing_pictures ? ` ${this.t("backup_restore_missing", { n: snap.missing_pictures })}` : "";
    if (!this.hass || !(await this.ask(this.t("backup_restore_confirm", { time: this.snapshotTime(snap) }) + lacks, this.t("backup_restore")))) return;
    const res = await restoreSnapshot(this.hass, snap.id, this.home);
    this._notice = res.missing_pictures ? this.t("backup_restored_missing", { n: res.missing_pictures }) : this.t("backup_restored");
    await this.loadHistory();
  }

  /** The stored pictures a plan uses, fetched one by one (a missing one is left out). */
  async storedImages(building: Building, home?: string): Promise<Record<string, string>> {
    const images: Record<string, string> = {};
    for (const id of storedImageIds(building)) {
      try {
        images[id] = await fetchImage(this.hass, id, home);
      } catch {
        /* a missing picture is left out */
      }
    }
    return images;
  }

  /** Everything in one file: every home's plan and pictures (#53) and the packs (with their sources). The active
   * home's pictures sit at the top (`images`), as before several homes; every other home carries its own. */
  async exportBackup(): Promise<void> {
    if (!this.hass) return;
    this._backupBusy = true;
    try {
      const base = await fetchBackup(this.hass);
      const images = await this.storedImages(base.building, base.active);
      const homes = [];
      for (const home of base.homes ?? []) {
        homes.push(home.id === base.active ? home : { ...home, images: await this.storedImages(home.building, home.id) });
      }
      const day = new Date().toISOString().slice(0, 10);
      const file = { ...base, ...(base.homes ? { homes } : {}), exported_at: new Date().toISOString(), images };
      download(`home-3d-${this.t("export_name_full")}-${day}.json`, JSON.stringify(file));
    } catch (err) {
      await this.tell(this.t("backup_import_error", { error: String((err as { message?: string })?.message ?? err) }));
    } finally {
      this._backupBusy = false;
    }
  }

  async importBackup(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file || !this.hass) return;
    let data: BackupFile;
    try {
      data = JSON.parse(await file.text()) as BackupFile;
    } catch {
      await this.tell(this.t("import_error_not_json"));
      return;
    }
    if (data?.format !== "home3d-backup" || !data.building) {
      await this.tell(this.t("backup_full_not_backup"));
      return;
    }
    if (!(await this.ask(this.t("backup_full_confirm"), this.t("backup_restore")))) return;
    this._backupBusy = true;
    try {
      // several homes (#53): one restore per home keeps each message small (a plan can be megabytes); a file from
      // before them restores its one plan onto the home being edited
      const homes = data.homes?.length ? data.homes : null;
      const parts: { images: Record<string, string>; home?: BackupHome }[] = homes
        ? homes.map((h) => ({ home: h, images: h.images ?? (h.id === data.active ? (data.images ?? {}) : {}) }))
        : [{ images: data.images ?? {} }];
      // the whole file is checked first, so a broken last home stops it before the first is restored (#153); the
      // packs and custom items come with the last part, after every plan (left out of the file: they stay)
      const message = (part: (typeof parts)[number], i: number) => {
        const last = i === parts.length - 1;
        const one = part.home ? { homes: [{ id: part.home.id, name: part.home.name, building: part.home.building }], ...(last && data.active ? { active: data.active } : {}) } : undefined;
        return [part.home ? null : data.building, last ? data.packs : undefined, last ? data.items : undefined, one, part.home ? undefined : this.home] as const;
      };
      for (const [i, part] of parts.entries()) await checkBackup(this.hass, ...message(part, i));
      let res: Awaited<ReturnType<typeof restoreBackup>> | null = null;
      let pictures = 0;
      const done: string[] = [];
      for (const [i, part] of parts.entries()) {
        try {
          res = await restoreBackup(this.hass, ...message(part, i));
        } catch (err) {
          // the part that failed was undone; the homes before it stay restored, each with a restore point of before
          if (!done.length) throw err;
          const e = (err ?? {}) as { message?: string };
          await this.tell(this.t("backup_import_partial", { home: part.home?.name ?? "", done: done.join(", "), error: String(e.message ?? err) }));
          return;
        }
        if (part.home) done.push(part.home.name);
        for (const [id, picture] of Object.entries(part.images)) {
          try {
            await storeImage(this.hass, id, picture, part.home?.id ?? res.home_id ?? this.home);
            pictures++;
          } catch {
            /* an unreadable picture is skipped */
          }
        }
      }
      if (!res) return;
      // the editor shows its own home again; another one made active by the backup comes with the panel's reload
      if (!res.home_id || !this.home || res.home_id === this.home) {
        this.setDoc(normalizeBuilding(res.building));
        this._floorId = res.building.floors[0]?.id ?? null;
        this.selectItem("room", null);
        this.fit();
      }
      this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
      const skipped = res.skipped.length ? ` ${this.t("backup_full_skipped", { packs: res.skipped.map((s) => s.id).join(", ") })}` : "";
      this._notice = this.t("backup_full_restored", { packs: res.packs, pictures }) + skipped;
    } catch (err) {
      // a lost connection comes as the whole result message ({ error: { code, message } }), e.g. when the backup is
      // larger than Home Assistant takes in one message
      const e = (err ?? {}) as { code?: string | number; message?: string; error?: { code?: string | number; message?: string } };
      await this.tell(this.t("backup_import_error", { error: String(e.message ?? e.error?.message ?? e.code ?? e.error?.code ?? err) }));
    } finally {
      this._backupBusy = false;
    }
  }

  exportPlan(shareable: boolean): void {
    const day = new Date().toISOString().slice(0, 10);
    download(`home-3d-${this.t(shareable ? "export_name_template" : "export_name_backup")}-${day}.json`, JSON.stringify(exportFile(this._doc, shareable), null, 2));
  }

  async importPlan(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file || !this.hass) return;
    let building: Building;
    try {
      // a plan exported before items moved between packs takes their new ids (#110)
      building = migratePlanTypes(parseExport(await file.text()));
    } catch (err) {
      const code = (err as Error).message;
      await this.tell(code === "not_json" ? this.t("import_error_not_json") : code === "not_plan" ? this.t("import_error_not_plan") : this.t("backup_import_error", { error: code }));
      return;
    }
    if (!(await this.ask(this.t("backup_import_confirm"), this.t("ask_ok")))) return;
    // the current plan stays available as a restore point
    await takeSnapshot(this.hass, this.home).catch(() => undefined);
    this.setDoc(building);
    this._floorId = building.floors[0]?.id ?? null;
    this.selectItem("room", null);
    this.fit();
    this._notice = this.t("backup_imported");
  }

  snapshotTime(snap: Snapshot): string {
    return new Date(snap.saved_at * 1000).toLocaleString(this.hass?.language, { dateStyle: "short", timeStyle: "short" });
  }

  renderBackup() {
    return html`<details
      class="fp3d-section"
      @toggle=${(e: Event) => {
        if ((e.target as HTMLDetailsElement).open) void this.loadHistory();
      }}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history === null
        ? html`<p class="fp3d-sub">${this.t("loading")}</p>`
        : this._history.length
          ? html`<div class="fp3d-room-list">
              ${this._history.map(
                (h) => html`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(h)} <span class="fp3d-muted">· ${this.t("backup_summary", { rooms: h.rooms, furniture: h.furniture })}</span></span>
                  <button class="fp3d-link" ?disabled=${!this.isHaAdmin} title=${this.isHaAdmin ? "" : this.t("backup_admin_only")} @click=${() => this.restoreFromHistory(h)}>${this.t("backup_restore")}</button>
                </div>`,
              )}
            </div>`
          : html`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("backup_file")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${() => this.exportPlan(false)}>${this.t("backup_export")}</button>
        <button class="fp3d-btn" title=${this.t("backup_export_share_hint")} @click=${() => this.exportPlan(true)}>${this.t("backup_export_share")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_hint")}</p>
      <h4 class="fp3d-lib-head">${this.t("backup_full")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${this._backupBusy} @click=${() => this.exportBackup()}>${this._backupBusy ? "…" : this.t("backup_full_export")}</button>
        ${this.isHaAdmin
          ? html`<label class="fp3d-btn fp3d-upload"
              >${this.t("backup_full_import")}<input type="file" accept="application/json,.json" @change=${this.importBackup}
            /></label>`
          : html`<button class="fp3d-btn" disabled title=${this.t("backup_admin_only")}>${this.t("backup_full_import")}</button>`}
      </div>
      <p class="fp3d-sub">${this.t("backup_full_hint")}</p>
      ${this.isHaAdmin ? nothing : html`<p class="fp3d-sub">${this.t("backup_admin_only")}</p>`}
    </details>`;
  }

  setSettings(patch: Partial<Building["settings"]>): void {
    const next = structuredClone(this._doc);
    Object.assign(next.settings, patch);
    this.setDoc(next);
  }

  /** The roof's basics – its kind, ridge, pitch and overhang – in the roof tool (sections and windows live there too). */
  renderRoofBasics() {
    const s = this._doc.settings;
    const set = (patch: Partial<Building["settings"]>) => this.setSettings(patch);
    return html`<section>
      <h3>${this.t("roof_whole")}</h3>
      <p class="fp3d-sub">${this.t("roof_whole_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_basics")}
          <select
            @change=${(e: Event) => {
              const type = (e.target as HTMLSelectElement).value as RoofType;
              // roof sections: propose them from the rooms and open the roof tool
              if (type === "custom") {
                this.useRoofSections();
                this._tool = "roof";
              } else set({ roof: { ...s.roof, type } });
            }}
          >
            ${(["none", "flat", "gable", "custom"] as const).map((t) => html`<option value=${t} ?selected=${t === s.roof.type}>${this.t(`roof_${t}`)}</option>`)}
          </select></label
        >
        ${s.roof.type === "gable"
          ? html`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${(e: Event) => set({ roof: { ...s.roof, ridge: (e.target as HTMLSelectElement).value === "short" ? "short" : null } })}>
                <option value="long" ?selected=${s.roof.ridge !== "short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${s.roof.ridge === "short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`
          : nothing}
        ${s.roof.type === "gable" ? this.num(this.t("roof_pitch"), s.roof.pitch, (v) => set({ roof: { ...s.roof, pitch: Math.min(60, Math.max(5, v)) } }), 1, 5) : nothing}
        ${s.roof.type !== "none" ? this.len(this.t("roof_overhang"), s.roof.overhang, (v) => set({ roof: { ...s.roof, overhang: Math.min(2, Math.max(0, v)) } }), 0.05, 0) : nothing}
      </div>
    </section>`;
  }

  static styles = [
    tokens,
    controls,
    shellStyles,
    planStyles,
    sideStyles,
    wallViewStyles,
    menuStyles,
    wallsRoofStyles,
    formStyles,
  ];
}

/** The area modules' methods (#202): one class per editor area under editor/, all on this element. */
export interface Fp3dEditor extends RacksPart, WallViewPart, WallKitPart, PipesPart, PoolPart {}
mixParts(Fp3dEditor, [RacksPart, WallViewPart, WallKitPart, PipesPart, PoolPart]);

if (!customElements.get("fp3d-editor")) customElements.define("fp3d-editor", Fp3dEditor);

// the extensions page is part of this bundle: the panel loads it the same way as the editor
import "./extensions.ts";
