self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('earthbook-cache').then(cache => {
      return cache.addAll([
        '/',


      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // If the requested URL is in the cache, return the cached response
      if (response) {
        return response;
      }

      // If the requested URL is not in the cache, fetch it from the network
      return fetch(event.request).then(response => {
        // Clone the response to cache it and then return the response
        const clonedResponse = response.clone();
        caches.open('my-cache').then(cache => {
          cache.put(event.request, clonedResponse);
        });
        return response;
      });
    })
  );
});