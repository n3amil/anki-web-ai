const CACHE_NAME = 'ankiki-v1769804438';
const ASSETS = [
  './',
  './index.html',
  './style.css?v=1769804438',
  './main.js?v=1769804438',
  './manifest.json',
  './vendor/pdf.min.js',
  './vendor/pdf.worker.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
