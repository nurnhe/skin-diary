// Offline support. The page itself is fetched fresh when online (so updates show on the next open)
// and falls back to the cache when offline; other files come from the cache and refresh in the background.
const CACHE = "skin-diary-v13";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  if (e.request.mode === "navigate") {
    e.respondWith(caches.open(CACHE).then(async cache => {
      const fresh = fetch(e.request, { cache: "no-cache" }).then(res => { if (res.ok) cache.put(e.request, res.clone()); return res });
      const fallback = new Promise(ok => setTimeout(ok, 4000)).then(() => cache.match(e.request, { ignoreSearch: true }));
      try { return await Promise.race([fresh, fallback.then(r => r || fresh)]) }
      catch (err) { return (await cache.match(e.request, { ignoreSearch: true })) || (await cache.match("./index.html")) || Response.error() }
    }));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async cache => {
    const cached = await cache.match(e.request, { ignoreSearch: true });
    const fresh = fetch(e.request).then(res => {
      if (res.ok || res.type === "opaque") cache.put(e.request, res.clone());
      return res;
    }).catch(() => cached);
    return cached || fresh;
  }));
});
