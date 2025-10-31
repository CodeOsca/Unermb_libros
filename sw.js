// sw.js
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('mi-cache').then(cache => {
        return cache.addAll([
            './index.html',
            './css/accordion.css',
            './css/button_material.css',
            './css/index.css',
            './css/input_material.css',
            './css/page.css',
            './js/flashy.js',
            './js/search.js'
        ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
        return response || fetch(event.request);
        })
    );
});
