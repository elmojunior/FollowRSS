// FollowRSS Service Worker - Offline PWA Support
const CACHE_NAME = 'followrss-v1';
const CORE_ASSETS = [
  './',
  'followrss.html',
  'index.html',
  'manifest.json',
  'icon.svg'
];

// Install: Cache core application assets safely
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const asset of CORE_ASSETS) {
        try {
          await cache.add(asset);
        } catch (err) {
          // Non-critical if one variant (e.g. index.html vs followrss.html) is absent
          console.debug('SW pre-cache asset skipped:', asset);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

// Activate: Clean up previous cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Stale-while-revalidate for app shell, Network-first for dynamic feeds & audio
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle HTTP/HTTPS GET requests
  if (req.method !== 'GET' || !url.protocol.startsWith('http')) {
    return;
  }

  // Audio streams / range requests: allow direct network stream
  if (req.headers.has('range') || req.destination === 'audio') {
    return;
  }

  // External RSS and CORS proxy requests: Network-first
  const isExternal = url.origin !== self.location.origin;
  if (isExternal) {
    event.respondWith(
      fetch(req).catch(() => caches.match(req))
    );
    return;
  }

  // Local app assets: Stale-while-revalidate
  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      const fetchPromise = fetch(req).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, responseClone));
        }
        return networkResponse;
      }).catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
