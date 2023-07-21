console.warn("Service Worker from Public folder");

let cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "/index.html",
        "/logo192.png",
        "/manifest.json",
        "/users",
      ]);
    })
  );
});

this.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl);
            })
        )
    }
})

// this.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches
//       .match(event.request)
//       .then((resp) => {
//         if (resp) {
//           // Use the response if it's in the cache.
//           return resp;
//         }
//         return fetch(event.request).then((response) => {
//           // Must clone the response as it's a stream.
//           // Because we want to return it and put it into a cache.
//           let responseClone = response.clone();
//           caches.open(cacheData).then((cache) => {
//             cache.put(event.request, responseClone);
//           });
//           return response;
//         });
//       })
//       .catch(() => caches.match("/index.html"))
//   );
// });
