const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
  };
  
  const putInCache = async (request, response) => {
    const cache = await caches.open("v1");
    await cache.put(request, response);
  };
  
  const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
    // First try to get the resource from the cache
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
      return responseFromCache;
    }
  
    // Next try to use (and cache) the preloaded response, if it's there
    const preloadResponse = await preloadResponsePromise;
    if (preloadResponse) {
      console.info("using preload response", preloadResponse);
      putInCache(request, preloadResponse.clone());
      return preloadResponse;
    }
  
    // Next try to get the resource from the network
    try {
      const responseFromNetwork = await fetch(request);
      // response may be used only once
      // we need to save clone to put one copy in cache
      // and serve second one
      putInCache(request, responseFromNetwork.clone());
      return responseFromNetwork;
    } catch (error) {
      const fallbackResponse = await caches.match(fallbackUrl);
      if (fallbackResponse) {
        return fallbackResponse;
      }
      // when even the fallback response is not available,
      // there is nothing we can do, but we must always
      // return a Response object
      return new Response("Network error happened", {
        status: 408,
        headers: { "Content-Type": "text/plain" },
      });
    }
  };
  
  // Enable navigation preload
  const enableNavigationPreload = async () => {
    if (self.registration.navigationPreload) {
      await self.registration.navigationPreload.enable();
    }
  };
  
  self.addEventListener("activate", (event) => {
    event.waitUntil(enableNavigationPreload());
  });
  
  self.addEventListener("install", (event) => {
    event.waitUntil(
      addResourcesToCache([
          
        
'/',
'/index.html',
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
'/light.css?v1.7',
'/dark.css?v1.9',
'/slider.css?v1.1',
'/universal-javascript.js',
'/clip/dist/clipboard.min.js',
'/dark-mode-toggle.mjs.js',

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

'en/includes/header-component.js',
'en/includes/settings-curtain.js',
'en/includes/content-curtain.js',
'en/includes/share-curtain.js',
'en/includes/buy-curtain.js',
'en/includes/bookplate-curtain.js',
'en/includes/earthbook-curtain.js',
'en/includes/footer-component.js',
'en/includes/read-curtain.js',
'en/includes/tour-curtain.js',
'en/includes/search-curtain.js',
'en/includes/eco-curtain.js',
'en/includes/booknotes-curtain.js',
'en/includes/footer-settings.js',
'en/index.html',
'en/preamble.html',
'en/preface.html',
'en/epigraph-1.html',
'en/imagine.html',
'en/plastic1.html',
'en/stellar.html',
'en/patterns.html',
'en/kincentric.html',
'en/nature.html',
'en/earthen.html',
'en/epigraph-2.html',
'en/spirals.html',
'en/energy.html',
'en/unpublished.html',

'en/summaries.html',
'en/dedication.html',
'en/for-earth.html',
'en/acknowledgements.html',
'en/publishing.html',
'en/authors.html',
'en/declarations.html',
'en/bibliography.html',
'en/glossary.html',
      ]),
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      cacheFirst({
        request: event.request,
        preloadResponsePromise: event.preloadResponse,
        fallbackUrl: "/gallery/myLittleVader.jpg",
      }),
    );
  });
