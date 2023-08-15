const CURRENT_CACHE = 'earthbook-cache-v4.2';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CURRENT_CACHE).then(cache => {
      return cache.addAll([
        
'/',
'/fonts/Mulish-Light.ttf',
'/fonts/CooperMediumBT.ttf',
'/fonts/CooperLtBTLightItalic.ttf',
'/fonts/CooperLightBT.ttf',

'/favicons/apple-touch-icon.png',
'/favicons/favicon-32x32.png',
'/favicons/favicon-16x16.png',
'/covers/earth-book-cover-1000px.jpg',
'/svgs/footer-settings-button.svg',
'/svgs/footer-settings-button-over.svg',
'/svgs/footer-settings-button-up.svg',
'/svgs/up-arrow-dark.svg',
'/svgs/up-arrow-light.svg',
'/style-sheet.css',
'/light.css',
'/dark.css',
'/slider.css',
'/universal-javascript.js',
'/clip/dist/clipboard.min.js',
'/dark-mode-toggle.mjs.js',

'/index-javascripts.js',
'/photos/cover-500px.webp',
'/svgs/tractatus-mandala-full-grey.svg',
'/icons/reader.svg',
'/icons/pdf.svg',
'/icons/buy.svg',
'/svgs/tractatus-mandala-full-white.svg',
'/svgs/my-book-header-logo-night.svg',
'/svgs/my-book-header-logo-day.svg',


'/en/includes/header-component.js',
'/en/includes/settings-curtain.js',
'/en/includes/content-curtain.js',
'/en/includes/share-curtain.js',
'/en/includes/buy-curtain.js',
'/en/includes/bookplate-curtain.js',
'/en/includes/earthbook-curtain.js',
'/en/includes/footer-component.js',
'/en/includes/read-curtain.js',
'/en/includes/tour-curtain.js',
'/en/includes/search-curtain.js',
'/en/includes/eco-curtain.js',
'/en/includes/booknotes-curtain.js',
'/en/includes/footer-settings.js',
'/en/includes/chap-foot.js',

'/en/index.html',
'/en/preamble.html',
'/en/preface.html',
'/en/epigraph-1.html',
'/en/imagine.html',
'/en/plastic1.html',
'/en/stellar.html',
'/en/patterns.html',
'/en/kincentric.html',
'/en/nature.html',
'/en/earthen.html',
'/en/epigraph-2.html',
'/en/spirals.html',
'/en/energy.html',
'/en/unpublished.html',


'/en/summaries.html',
'/en/dedication.html',
'/en/for-earth.html',
'/en/acknowledgements.html',
'/en/publishing.html',
'/en/authors.html',
'/en/declaration.html',
'/en/bibliography.html',
'/en/glossary.html',


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





