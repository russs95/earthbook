const CURRENT_CACHE = 'earthbook-cache-v7.4';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CURRENT_CACHE).then(cache => {
      return cache.addAll([

'/',

//FONTS

'/assets/fonts/Mulish-Light.ttf',
'/assets/fonts/CooperMediumBT.ttf',
'/assets/fonts/CooperLtBTLightItalic.ttf',
'/assets/fonts/CooperLightBT.ttf',

//Landing Images

'/assets/photos/cover-500px.webp',
'/assets/icons/reader.svg',
'/assets/icons/pdf.svg',
'/assets/icons/buy.svg',
'/assets/favicons/apple-touch-icon.png',
'/assets/favicons/favicon-32x32.png',
'/assets/favicons/favicon-16x16.png',
'/covers/earth-book-cover-1000px.jpg',
'/assets/svgs/footer-settings-button.svg',
'/assets/svgs/footer-settings-button-over.svg',
'/assets/svgs/footer-settings-button-up.svg',
'/assets/svgs/up-arrow-dark.svg',
'/assets/svgs/up-arrow-light.svg',
'/assets/svgs/left-menu.svg',
'/assets/icons/booknotes-topmenu.svg',


//Curtain Images

'/assets/photos/print-preview-01-400px.webp',
'/assets/photos/print-preview-02-400px.webp',
'/assets/photos/print-preview-04-400px.webp',

'/assets/icons/up-arrow.svg',
'/assets/icons/code.svg',
'/assets/icons/down-arrow.svg',
'/assets/icons/plus.svg',
'/assets/icons/comments.svg',
'/assets/icons/settings.svg',


//Javascript

'/js/dark-mode-toggle.mjs.js',
'/js/universal-javascript.js',
'/js/content-javascript.js',
'/js/clipboard.min.js',
'/js/index-javascripts.js',

//CSS

'/css/style-sheet.css',
'/css/light.css',
'/css/dark.css',
'/css/slider.css',
'/css/stylesheet-chapter.css',


//Dark Scheme

'/assets/svgs/tractatus-mandala-full-black.svg',
'/assets/svgs/my-book-header-logo-night.svg',
'/assets/svgs/tractatus-mandala-full-grey.svg',
'/assets/svgs/content-arrow-night.svg',
'/assets/svgs/content-arrow-45-night.svg',
'/assets/svgs/00-dark.svg',
'/assets/svgs/00-preamble-dark.svg',
'/assets/svgs/01-imagine-dark.svg',
'/assets/svgs/01-plastic1-dark.svg',
'/assets/svgs/03-stellar-dark.svg',
'/assets/svgs/04-patterns-dark.svg',
'/assets/svgs/05-kincentric-dark.svg',
'/assets/svgs/06-nature-dark.svg',
'/assets/svgs/07-earthen-dark.svg',
'/assets/svgs/08-cycles-dark.svg',
'/assets/svgs/09-energy-dark.svg',
'/assets/svgs/10-matter-dark.svg',

//Light Scheme

'/assets/svgs/tractatus-mandala-full-white.svg',
'/assets/svgs/my-book-header-logo-day.svg',
'/assets/svgs/tractatus-mandala-full-light-grey.svg',
'/assets/svgs/content-arrow.svg',
'/assets/svgs/content-arrow-45.svg',
'/assets/svgs/00-white.svg',
'/assets/svgs/tractatus-mandala-full-grey-grey.svg',
'/assets/svgs/00-preamble-white.svg',
'/assets/svgs/01-imagine-white.svg',
'/assets/svgs/02-plastic1-white.svg',
'/assets/svgs/03-stellar-white.svg',
'/assets/svgs/04-patterns-white.svg',
'/assets/svgs/05-kincentric-white.svg',
'/assets/svgs/06-nature-white.svg',
'/assets/svgs/07-earthen-white.svg',
'/assets/svgs/08-cycles-white.svg',
'/assets/svgs/09-energy-white.svg',
'/assets/svgs/10-matter-white.svg',

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

'/fr/includes/header-component.js',
'/fr/includes/settings-curtain.js',
'/fr/includes/content-curtain.js',
'/fr/includes/share-curtain.js',
'/fr/includes/buy-curtain.js',
'/fr/includes/bookplate-curtain.js',
'/fr/includes/earthbook-curtain.js',
'/fr/includes/footer-component.js',
'/fr/includes/read-curtain.js',
'/fr/includes/tour-curtain.js',
'/fr/includes/search-curtain.js',
'/fr/includes/eco-curtain.js',
'/fr/includes/booknotes-curtain.js',
'/fr/includes/footer-settings.js',
'/fr/includes/chap-foot.js',


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

'/fr/index.html',
'/fr/preambule.html',
'/fr/lepreface.html',
'/fr/epigraphe-1.html',
'/fr/imaginer.html',
'/fr/plastique1.html',
'/fr/stellaire.html',
'/fr/caractere.html',
'/fr/cyclocentrique.html',
'/fr/la-nature.html',
'/fr/terrestre.html',
'/fr/epigraphe-2.html',
'/fr/inedit.html',


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

'/fr/resumes.html',
'/fr/dedicace.html',
'/fr/pour-terre.html',
'/fr/gratitude.html',
'/fr/publication.html',
'/fr/auteurs.html',
'/fr/declarations.html',
'/fr/biblio.html',
'/fr/glossaire.html',

//APPENDIX ICONS

'/assets/icons/eco.svg',
'/webp/impact-report-100px.webp',
'/assets/icons/icon-for-earth.svg',
'/assets/banners/forearth-dark-350px.png',
'/assets/icons/thankyou.svg',
'/assets/icons/publishing.svg',
'/assets/icons/authoring.svg',
'/assets/icons/glossary.svg',


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
