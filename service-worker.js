self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('earthbook-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/service-worker.js',
        '/fonts/Mulish-Light.ttf',
        '/fonts/CooperMediumBT.ttf',
        '/fonts/CooperLtBTLightItalic.ttf',
        '/fonts/CooperLightBT.ttf',
        '/favicons/apple-touch-icon.png',
        '/favicons/favicon-32x32.png',
        '/favicons/favicon-16x16.png',
        '/favicons/site.webmanifest',
        '/covers/earth-book-cover-1000px.jpg',
        '/fonts/',
        '/fonts/',
        '/svgs/footer-settings-button.svg',
        '/svgs/footer-settings-button-over.svg',
        '/svgs/footer-settings-button-up.svg',
        '/svgs/up-arrow-dark.svg',
        '/svgs/up-arrow-light.svg',
        '/style-sheet.css?v1.8',
        '/light.css?v1.7',
        '/dark.css?v1.9',
        '/slider.css?v1.1',
        '/universal-javascript.js',
        '/clip/dist/clipboard.min.js',
        '/dark-mode-toggle.mjs.js',
        '/includes/header-component.js',
        '/includes/settings-curtain.js',
        '/includes/content-curtain.js',
        '/includes/share-curtain.js',
        '/includes/buy-curtain.js',
        '/includes/bookplate-curtain.js',
        '/includes/earthbook-curtain.js',
        '/includes/footer-component.js',
        '/includes/read-curtain.js',
        '/includes/tour-curtain.js',
        '/includes/search-curtain.js',
        '/index-javascripts.js',
        '/includes/footer-chapter.js',
        '/photos/cover-500px.webp',
        '/svgs/tractatus-mandala-full-grey.svg',
        '/icons/reader.svg',
        '/icons/pdf.svg',
        '/icons/buy.svg',
        '/svgs/tractatus-mandala-full-white.svg',
        '/svgs/my-book-header-logo-night.svg',
        '/svgs/my-book-header-logo-day.svg',

        '/en/preamble.html',
        '/en/preface.html',
        '/en/epigraph-1.html',
        '/en/imagine.html',
        '/en/plastic-1.html',
        '/en/stellar.html',
        '/en/patterns.html',
        '/en/kincentric.html',
        '/en/nature.html',
        '/en/earthen.html',
        '/en/epigraph-2.html',
        '/en/cycles.html',
        '/en/energy.html',
        '/en/unpublished.html',

        '/en/summaries.html',
        '/en/dedicatin.html',
        '/en/accounting.html',
       
       


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

/*
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // If the requested URL is in the cache, return the cached response this
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
      }).catch(() => {
        // If fetching from network fails, try fetching from cache using the request URL
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
*/