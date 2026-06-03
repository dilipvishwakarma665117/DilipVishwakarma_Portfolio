const CACHE_NAME = 'dilip-portfolio-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/favicon.png',
  '/icon.png',
  '/logo.png',
  '/sarthak_institute.png',
  '/Dilip_Resume_3.pdf'
];

// Installation: Pre-cache core shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Use cache.addAll but catch individual failures to avoid failing the entire install
      return Promise.allSettled(
        ASSETS_TO_CACHE.map((asset) =>
          cache.add(asset).catch((err) => {
            console.warn(`Failed to pre-cache asset: ${asset}`, err);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

// Activation: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetching: Serve cached resources when offline, using Stale-While-Revalidate
self.addEventListener('fetch', (event) => {
  // Only handle GET requests from http or https
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip webpack dev server, HMR, chrome extensions, etc.
  if (
    url.pathname.includes('/_next/webpack-hmr') ||
    url.pathname.includes('webpack') ||
    (url.protocol !== 'http:' && url.protocol !== 'https:')
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached resource, then fetch fresh one in background to update cache
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse);
              });
            }
          })
          .catch(() => {
            // Ignore background fetch errors (offline state)
          });
        return cachedResponse;
      }

      // If not in cache, fetch from network
      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // Cache the newly fetched asset
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => {
          // If network fails and request is a navigation, show cached home page
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
        });
    })
  );
});
