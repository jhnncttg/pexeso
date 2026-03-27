const CACHE_NAME = 'pexeso-cache-v2';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/butterfly.css',
  '/butterfly.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/images/meadow.png',
  
  // Externí knihovny
  'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.5/babel.min.js',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js',
  'https://unpkg.com/@capacitor/core@latest/dist/capacitor.js',
  
  // Google Fonts
  'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap',
  
  // Obrázky zvířat
  '/images/animals/amstaf.png',
  '/images/animals/bear.png',
  '/images/animals/bengal.png',
  '/images/animals/bird.png',
  '/images/animals/bonemouth.png',
  '/images/animals/butterfly.png',
  '/images/animals/cat.png',
  '/images/animals/chicken.png',
  '/images/animals/cobra.png',
  '/images/animals/dog.png',
  '/images/animals/dolphin.png',
  '/images/animals/elephant.png',
  '/images/animals/fenix.png',
  '/images/animals/fish.png',
  '/images/animals/frog.png',
  '/images/animals/girafe.png',
  '/images/animals/goat.png',
  '/images/animals/gorila.png',
  '/images/animals/hamster.png',
  '/images/animals/horse.png',
  '/images/animals/kokr.png',
  '/images/animals/labrador.png',
  '/images/animals/labut.png',
  '/images/animals/leguan.png',
  '/images/animals/levhart.png',
  '/images/animals/lion.png',
  '/images/animals/monkey.png',
  '/images/animals/motyl.png',
  '/images/animals/neon.png',
  '/images/animals/parrot.png',
  '/images/animals/pav.png',
  '/images/animals/pelikan.png',
  '/images/animals/pinguin.png',
  '/images/animals/retrivr.png',
  '/images/animals/rotvik.png',
  '/images/animals/skalar.png',
  '/images/animals/star.png',
  '/images/animals/sykora.png',
  '/images/animals/tiger.png',
  '/images/animals/turtle.png',
  '/images/animals/vlcak.png',
  '/images/animals/wolf.png',
  '/images/animals/bluecat.png',
  '/images/animals/catty.png',
  '/images/animals/duck.png',
  '/images/animals/holub.png',
  '/images/animals/jelen.png',
  '/images/animals/jezek.png',
  '/images/animals/klaun.png',
  '/images/animals/krocan.png',
  '/images/animals/lasice.png',
  '/images/animals/liska.png',
  '/images/animals/lvhart.png',
  '/images/animals/makak.png',
  '/images/animals/mlok.png',
  '/images/animals/myval.png',
  '/images/animals/pelikan2.png',
  '/images/animals/pitbull.png',
  '/images/animals/pomci.png',
  '/images/animals/puma.png',
  '/images/animals/redpanda.png',
  '/images/animals/shark.png',
  '/images/animals/slune.png',
  '/images/animals/snek.png',
  '/images/animals/srnce.png',
  '/images/animals/treska.png',
  '/images/animals/zajic.png',
  '/images/animals/zebra.png',
  '/images/animals/zluva.png',
  
  // Biblické obrázky
  '/images/biblical/aron.png',
  '/images/biblical/baptizo.png',
  '/images/biblical/Dorkas.png',
  '/images/biblical/farizeus.png',
  '/images/biblical/fish.png',
  '/images/biblical/fisherman.png',
  '/images/biblical/grave.png',
  '/images/biblical/herodes.png',
  '/images/biblical/jericho.png',
  '/images/biblical/jesus.png',
  '/images/biblical/jesuscloud.png',
  '/images/biblical/jesuszjeveni.png',
  '/images/biblical/jidas.png',
  '/images/biblical/john.png',
  '/images/biblical/Josef.png',
  '/images/biblical/jozue2.png',
  '/images/biblical/lazar.png',
  '/images/biblical/maria.png',
  '/images/biblical/moses.png',
  '/images/biblical/natanael.png',
  '/images/biblical/onezim.png',
  '/images/biblical/oslatko.png',
  '/images/biblical/ovce.png',
  '/images/biblical/palm.png',
  '/images/biblical/paul.png',
  '/images/biblical/sea.png',
  '/images/biblical/snake.png',
  '/images/biblical/sun.png',
  '/images/biblical/wine.png',
  '/images/biblical/zebedej.png',
  '/images/biblical/arch.png',
  '/images/biblical/bloud.png',
  '/images/biblical/JESUSrisen.png',
  '/images/biblical/krize.png',
  '/images/biblical/net.png',
  '/images/biblical/perla.png',
  '/images/biblical/prayer.png',
  '/images/biblical/roman.png',
  '/images/biblical/seastorm.png',
  '/images/biblical/angels.png',
  '/images/biblical/bread.png',
  '/images/biblical/jerusalem.png',
  '/images/biblical/jesuspilat.png',
  '/images/biblical/koruna.png',
  '/images/biblical/stone.png',
  '/images/biblical/ucho.png',
  '/images/biblical/uzdraveni.png',
  '/images/biblical/shalom.png',
  '/images/biblical/stanek.png',
  '/images/biblical/svitek.png'
];

// Instalace s progress reportingem
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async (cache) => {
        console.log('[SW] Caching files...');
        
        const totalFiles = urlsToCache.length;
        let cachedFiles = 0;
        
        // Stahujeme soubory jeden po druhém a reportujeme progress
        for (const url of urlsToCache) {
          try {
            await cache.add(url);
            cachedFiles++;
            
            // Vypočítáme progress
            const progress = Math.round((cachedFiles / totalFiles) * 100);
            
            // Pošleme progress všem klientům
            const clients = await self.clients.matchAll();
            clients.forEach(client => {
              client.postMessage({ 
                type: 'CACHE_PROGRESS', 
                progress: progress,
                current: cachedFiles,
                total: totalFiles
              });
            });
            
            console.log(`[SW] Cached ${cachedFiles}/${totalFiles}: ${url}`);
          } catch (err) {
            console.error(`[SW] Failed to cache: ${url}`, err);
            // Pokračujeme i při chybě
          }
        }
        
        console.log('[SW] All files cached!');
        
        // Pošle zprávu, že je vše hotovo
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
          client.postMessage({ type: 'CACHE_READY' });
        });
        
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('[SW] Cache error:', err);
      })
  );
});

// Aktivace
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  if (url.protocol === 'chrome-extension:') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.error('[SW] Fetch failed:', error);
            throw error;
          });
      })
  );
});