const CURRENT_CACHE = 'earthbook-cache-v4.2';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CURRENT_CACHE).then(cache => {
      return cache.addAll([
        
'/',

//FONTS

'/fonts/Mulish-Light.ttf',
'/fonts/CooperMediumBT.ttf',
'/fonts/CooperLtBTLightItalic.ttf',
'/fonts/CooperLightBT.ttf',


      ]);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CURRENT_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      return fetch(event.request).then(response => {
        const clonedResponse = response.clone();
        caches.open(CURRENT_CACHE).then(cache => {
          cache.put(event.request, clonedResponse);
        });
        return response;
      }).catch(() => {
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          throw new Error('Offline: Page not found in cache.');
        });
      });
    })
  );
});





