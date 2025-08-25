// Service Worker for Edificio Farfalle
const CACHE_NAME = 'farfalle-v1.0.0';
const STATIC_CACHE = 'farfalle-static-v1.0.0';
const DYNAMIC_CACHE = 'farfalle-dynamic-v1.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/images/services.webp',
  '/images/services2.webp', 
  '/images/services3.webp',
  '/images/services4.webp'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (!url.origin.includes(self.location.origin) && !url.origin.includes('fonts.googleapis.com')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Cache strategy based on resource type
          const responseToCache = response.clone();
          
          if (url.pathname.includes('/images/') || 
              url.pathname.endsWith('.webp') || 
              url.pathname.endsWith('.jpg') || 
              url.pathname.endsWith('.png') ||
              url.pathname.endsWith('.mp4')) {
            // Cache images and videos for longer
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseToCache);
            });
          } else if (url.pathname.endsWith('.js') || 
                     url.pathname.endsWith('.css') ||
                     url.origin.includes('fonts.googleapis.com')) {
            // Cache JS, CSS and fonts
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(request, responseToCache);
            });
          }

          return response;
        });
      })
      .catch(() => {
        // Offline fallback
        if (request.destination === 'document') {
          return caches.match('/index.html');
        }
        
        if (request.destination === 'image') {
          return new Response('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f3f4f6"/><text x="100" y="100" text-anchor="middle" fill="#9ca3af">Sin conexión</text></svg>', {
            headers: { 'Content-Type': 'image/svg+xml' }
          });
        }
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Background sync triggered');
    // Handle offline form submissions, etc.
  }
});

// Push notifications (future feature)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png',
      vibrate: [100, 50, 100],
      data: data.data
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    self.clients.openWindow('/')
  );
});