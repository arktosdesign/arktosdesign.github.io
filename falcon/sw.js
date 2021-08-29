self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('sw-cache').then(function(cache) {
      return cache.addAll(
        [
          'index.html',
          'styles.4201f784.css',
          'falcon-madness.976106f8.js',
          'falcon-explode.mp3',
          'laser.mp3',
          'object-explode-1.mp3',
          'object-explode-2.mp3'
        ]
      );
    })
  );
})

self.addEventListener('fetch', function(event) {
  event.respondWidth(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);  
    })
  );
});