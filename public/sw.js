const CACHE_NAME = 'social-dots-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/hero-ai-background.jpg',
  '/hero-ai-customer-service.jpg',
  '/hero-digital-agency.jpg',
  '/business-automation-ai.jpg',
  '/digital-marketing-ai.jpg',
  '/web-development-ai.jpg',
  '/social-media-ai.jpg',
  '/ai-call-center-automation.jpg'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle offline form submissions
      syncContactForm()
    );
  }
});

async function syncContactForm() {
  try {
    // Get stored form data from IndexedDB or localStorage
    const formData = await getStoredFormData();
    if (formData) {
      await submitContactForm(formData);
      await clearStoredFormData();
    }
  } catch (error) {
    console.error('Sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data?.text() || 'New notification from Social Dots',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/favicon.ico'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/favicon.ico'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Social Dots', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message handling for app updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Helper functions (would typically be imported)
async function getStoredFormData() {
  // Implementation for getting stored form data
  return null;
}

async function submitContactForm(formData) {
  // Implementation for submitting form data
}

async function clearStoredFormData() {
  // Implementation for clearing stored form data
}