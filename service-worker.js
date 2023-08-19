const CURRENT_CACHE = 'earthbook-cache-v4.3';

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


'/photos/cover-500px.webp',
'/icons/reader.svg',
'/icons/pdf.svg',
'/icons/buy.svg',
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
'/svgs/tractatus-mandala-full-grey.svg',
'/svgs/content-arrow-night.svg',
'/svgs/content-arrow-45-night.svg',
'/svgs/00-dark.svg',
'/svgs/00-preamble-dark.svg',
'/svgs/01-imagine-dark.svg',
'/svgs/01-plastic1-dark.svg',
'/svgs/03-stellar-dark.svg',
'/svgs/04-patterns-dark.svg',
'/svgs/05-kincentric-dark.svg',
'/svgs/06-nature-dark.svg',
'/svgs/07-earthen-dark.svg',
'/svgs/08-cycles-dark.svg',
'/svgs/09-energy-dark.svg',
'/svgs/10-matter-dark.svg',

//Light Scheme

'/svgs/tractatus-mandala-full-white.svg',
'/svgs/my-book-header-logo-day.svg',
'/svgs/tractatus-mandala-full-light-grey.svg',
'/svgs/content-arrow.svg',
'/svgs/content-arrow-45.svg',
'/svgs/00-white.svg',
'/svgs/tractatus-mandala-full-grey-grey.svg',
'/svgs/00-preamble-white.svg',
'/svgs/01-imagine-white.svg',
'/svgs/02-plastic1-white.svg',
'/svgs/03-stellar-white.svg',
'/svgs/04-patterns-white.svg',
'/svgs/05-kincentric-white.svg',
'/svgs/06-nature-white.svg',
'/svgs/07-earthen-white.svg',
'/svgs/08-cycles-white.svg',
'/svgs/09-energy-white.svg',
'/svgs/10-matter-white.svg',

//INCLUDES


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


//MAIN PAGES
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


//APPENDIX  

'/en/summaries.html',
'/en/dedication.html',
'/en/for-earth.html',
'/en/acknowledgements.html',
'/en/publishing.html',
'/en/authors.html',
'/en/declaration.html',
'/en/bibliography.html',
'/en/glossary.html',

//APENDIX ICONS

'/icons/eco.svg',
'/webp/impact-report-100px.webp',
'/icons/icon-for-earth.svg',
'/banners/forearth-dark-350px.png',
'/icons/thankyou.svg',
'/icons/publishing.svg',
'/icons/authoring.svg',



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





