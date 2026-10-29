// The loader of a bundle that is fetched only when it is needed (the editor, time travel, voice …). The bundles sit
// next to the main one; the content hash in the URL means a new build is never taken from the browser cache.

/**
 * A function that loads the bundle `name` (the file `<name>.js`, `hash` its content hash from the build) once and
 * returns the same promise afterwards. A failed download (a short network hiccup) is forgotten, so the next call tries
 * again.
 */
export function lazyBundle<T = unknown>(name: string, hash: string): () => Promise<T> {
  let loading: Promise<T> | undefined;
  return () => {
    if (!loading) {
      const url = new URL(`./${name}.js?v=${hash}`, new URL(import.meta.url)).href;
      loading = (import(/* @vite-ignore */ url) as Promise<T>).catch((err) => {
        loading = undefined;
        throw err;
      });
    }
    return loading;
  };
}
