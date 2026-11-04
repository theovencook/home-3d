// home-3d.js, the start file (#357, see boot-core.ts): imports the current build's app. The import is awaited, so a
// dashboard or the panel that waits for this module waits for the app's elements as before.

import { appUrl, bootBase, currentBuild } from "./boot-core.ts";

const base = bootBase(import.meta.url);
await import(appUrl(base, await currentBuild(base)));
