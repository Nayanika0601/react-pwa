importScripts("https://progressier.app/LEuZMZ8JzbLoWR6Z5IBg/sw.js");

// ---- Offline fallback for navigations (add below) ----
const APP_CACHE = "react-pwa-shell-v1";
const OFFLINE_URL = "/react-pwa/offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(APP_CACHE).then(c => c.add(OFFLINE_URL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    if (self.registration.navigationPreload) {
      await self.registration.navigationPreload.enable();
    }
    await self.clients.claim();
  })());
});

// Serve offline.html when a top-level navigation fails (offline)
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const preload = await event.preloadResponse;
        if (preload) return preload;        // use preloaded page if available
        return await fetch(event.request);   // network first
      } catch (err) {
        const cache = await caches.open(APP_CACHE);
        const cached = await cache.match(OFFLINE_URL);
        return cached || new Response("Offline", { status: 200, headers: { "Content-Type": "text/plain" }});
      }
    })());
  }
});
