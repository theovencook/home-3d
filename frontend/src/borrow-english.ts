// Build plugin (#196): every bundle but the main one (the editor, the card editor, the 3D bundle …) loads only from the
// main bundle, which holds the English table (i18n.ts) and registers it on the page. For them every import of i18n.ts is
// swapped for i18n-borrowed.ts, the same functions without the table, so none carries a copy of it (about 125 KB).

import { fileURLToPath } from "node:url";
import type { Plugin } from "esbuild";

export const BORROWED = fileURLToPath(new URL("./i18n-borrowed.ts", import.meta.url));

export const borrowEnglish: Plugin = {
  name: "borrow-english",
  setup(b) {
    b.onResolve({ filter: /(?:^|[\/])i18n\.ts$/ }, (args) => (args.importer === BORROWED ? undefined : { path: BORROWED }));
  },
};
