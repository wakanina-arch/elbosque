// Archivo básico de service worker para PWA
const CACHE_NAME = 'pizza-casera-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch(() => {
        // Si hay error al cachear, continuar sin cachear
        console.warn('Error cacheando recursos iniciales');
      });
    })
  );
});

self.addEventListener('fetch', (event) => {
  // No interceptar requests de desarrollo (Vite)
  if (event.request.url.includes('@vite') || 
      event.request.url.includes('@react-refresh') ||
      event.request.url.includes('node_modules')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request).catch(() => {
        // Si falla el fetch y no está en cache, devolver offline
        return new Response('Offline', { status: 503 });
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});
