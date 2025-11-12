self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('pexeso-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/sw.js',
        '/icons/icon-192.png',
        '/icons/icon-512.png',
        // přidej další soubory jako obrázky, CSS, JS
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});