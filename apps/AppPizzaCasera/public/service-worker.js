// Desregistrar el service worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => client.postMessage({ type: 'SKIP_WAITING' }));
  });
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // No hacer nada, dejar que el navegador maneje los requests
  return;
});
