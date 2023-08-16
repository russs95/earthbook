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

//Landing Images

'/svgs/tractatus-mandala-full-grey.svg',
'/svgs/tractatus-mandala-full-white.svg',
'/photos/cover-500px.webp',
'/icons/reader.svg',
'/icons/pdf.svg',
'/icons/buy.svg',
'/svgs/my-book-header-logo-night.svg',
'/svgs/my-book-header-logo-day.svg',
'/favicons/apple-touch-icon.png',
'/favicons/favicon-32x32.png',
'/favicons/favicon-16x16.png',
'/covers/earth-book-cover-1000px.jpg',
'/svgs/footer-settings-button.svg',
'/svgs/footer-settings-button-over.svg',
'/svgs/footer-settings-button-up.svg',
'/svgs/up-arrow-dark.svg',
'/svgs/up-arrow-light.svg',

//Curtain IMages

'/photos/cover-epub-400px.webp',
'/photos/cover-print-400px.webp',
'/photos/cover-grattitude-600px.webp',
'/svgs/bottom-x.svg',

'/icons/up-arrow.svg',
'/icons/code.svg',
'/icons/down-arrow.svg',
'/icons/plus.svg',
'/icons/comments.svg',
'/icons/settings.svg',


//Javascript

'/dark-mode-toggle.mjs.js',
'/universal-javascript.js',
'/content-javascript.js',
'/clip/dist/clipboard.min.js',
'/index-javascripts.js',

//CSS

'/style-sheet.css',
'/light.css',
'/dark.css',
'/slider.css',
'/stylesheet-chapter.css',



//Dark Scheme

'/svgs/tractatus-mandala-full-black.svg',
'/svgs/my-book-header-logo-night.svg',
'/svgs/tractatus-mandala-full-white.svg',
'/svgs/tractatus-mandala-full-grey.svg',
'/svgs/content-arrow-night.svg',
'/svgs/content-arrow-45-night.svg',
'/svgs/00-dark.svg',
'/svgs/tractatus-mandala-full-grey-grey.svg',
'/svgs/00-preamble-dark.svg',
'/svgs/01-imagine-dark.svg',
'/svgs/01-plastic1-dark.svg',





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





