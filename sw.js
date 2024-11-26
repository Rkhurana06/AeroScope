const CACHE_NAME = `temperature-converter-v1`;

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      '/',
      '/converter.js',
      '/converter.css'
    ]);
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Get the resource from the cache.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    } else {
        try {
          // If the resource was not in the cache, try the network.
          const fetchResponse = await fetch(event.request);

          // Save the resource in the cache and return it.
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // The network failed.
        }
    }
  })());
});

// Change this to your repository name
var GHPATH = '/github-AeroScope-pwa';
 
// Choose a different app prefix name
var APP_PREFIX = 'Aero Scope_';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_01';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/css/convertor.css`,
  `${GHPATH}/Aircrafts.html`
  `${GHPATH}/css/Aircrafts.css`
  `${GHPATH}/Speed.html`
  `${GHPATH}/css/Speed.css`
  `${GHPATH}/Add.html`
  `${GHPATH}/css/Add.css`
  `${GHPATH}/js/sw.js`
  `${GHPATH}/js/convertor.js`
  `${GHPATH}/json/manifest.json`
  `${GHPATH}/json/manifest.json`
  `${GHPATH}/432487.jpg`
  `${GHPATH}/Concorde-IMG.jpg`
  `${GHPATH}/F-22-IMG.jpg`
  `${GHPATH}/F-35 Logo - NOBG (1).png`
  `${GHPATH}/F-35 Logo - NOBG.png`
  `${GHPATH}/F-35 Logo-modified.png`
  `${GHPATH}/F-35 Logo.png`
  `${GHPATH}/F-35-IMG.jpg`
  `${GHPATH}/F-18-IMG.jpg`
  `${GHPATH}/Su-27-IMG.webp`
]
