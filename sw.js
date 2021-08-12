const cacheTime = "v1";

const cacheAssets = ["index.html", "style.css", "script.js"];

// console.log('hello from sw.js!');
self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");
  e.waitUntil(
    caches
      .open(cacheTime)
      .then((cache) => {
        console.log("Service Worker: Caching Files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");
  //remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheTimes) => {
      return Promise.all(
        cacheTimes.map((cache) => {
          if (cache !== cacheTime) {
            console.log("service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

//if you want to cache the whole site

// self.addEventListener("fetch", (e) => {
//   console.log("Service Worker: Fetching");
//   e.respondWith(
//     fetch(e.request)
//       .then((res) => {
//         //make a clone of the response
//         let resClone = res.clone();
//         //open cache
//         caches.open(cacheTime).then((cache) => {
//           //add response to caceh
//           cache.put(e.request, resClone);
//         });
//         return res;
//       })
//       .catch((err) => caches.match(e.request).then((res) => res))
//   );
// });
