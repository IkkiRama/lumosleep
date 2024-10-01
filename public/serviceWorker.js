const lumosleep = "LUMOSLEEP";
const assets = [
  "/",
  "/index.html",
  "/icon-192x192.png",
  "/icon-256x256.png",
  "/icon-384x384.png",
  "/icon-512x512.png",
  "/assets/icon-lumosleep.png",
  "/assets/icon-lumosleep.svg",
  "/assets/**/*.{js,css,png}",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(lumosleep).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return (
        res ||
        fetch(fetchEvent.request).catch(() => {
          return caches.match("/offline.html");
        })
      );
    })
  );
});