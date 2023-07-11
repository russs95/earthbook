self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('earthbook-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/service-worker.js',
        '/favicons/apple-touch-icon.png',
        '/favicons/favicon-32x32.png',
        '/favicons/favicon-16x16.png',
        '/favicons/site.webmanifest',
        '/covers/earth-book-cover-1000px.jpg',
        '/fonts/',
        '/fonts/',
        'https://fonts.googleapis.com/css2?family=Mulish:wght@300;500&display=swap',
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

        '/en/preamble.php',
        '/en/preface.php',
        '/en/epigraph.php',
        '/en/imagine.php',

        '/lang.php',

'/header.php',
'/summaries.php',
'/includes/eco-curtain.php',
'/includes/comments.php',
'/includes/chapTER-footer.php',
'/includes/tour-curtain.js',
'/svgs/tractatus-mandala-full-grey.svg',
'/icons/reader.svg',
'/icons/pdf.svg',
'/icons/buy.svg',
'/svgs/tractatus-mandala-full-white.svg',
'/svgs/my-book-header-logo-night.svg',
'/svgs/my-book-header-logo-day.svg'


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