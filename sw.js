importScripts('/population-transition/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/population-transition/_nuxt/21b7418c28f44054add9.js",
    "revision": "78b242e3f6f3783b71bf01e526315b42"
  },
  {
    "url": "/population-transition/_nuxt/69fa00df715d6d12ca26.js",
    "revision": "ea83eb61f5d8b9ffd44d8df8fa2f58bf"
  },
  {
    "url": "/population-transition/_nuxt/761760af9f1f7d2f7027.js",
    "revision": "70e35852484e770ce35dda9f4bde651f"
  },
  {
    "url": "/population-transition/_nuxt/bdbf2361fa71e2b20703.js",
    "revision": "f70e4a2aad5f3dabac05823e1e5dfcec"
  },
  {
    "url": "/population-transition/_nuxt/e290e69d6d5e09f570af.js",
    "revision": "7ea695afe918ac250be26e13e86b1380"
  }
], {
  "cacheId": "population-transition",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/population-transition/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/population-transition/.*'), workbox.strategies.networkFirst({}), 'GET')
