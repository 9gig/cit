'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "74b81c7ce5a5a16c0627d1351aa5cea2",
"assets/assets/icons/chart.png": "cb96fb4b0b2879e0edfb4c0817804c5c",
"assets/assets/icons/contact.png": "fd43c33a751d7f0b11f10440d8c62ac8",
"assets/assets/icons/dash.png": "cd90465562b3a8ead04381c40ea1488a",
"assets/assets/icons/email.png": "d5a3a0289b705662f01cba996f5192be",
"assets/assets/icons/facebook.png": "748fce0a029b9aa221b028a416995f91",
"assets/assets/icons/gmail.png": "582751df401f3fefb344cc709df76055",
"assets/assets/icons/group.png": "7cc4e920df01c81a1109ee19734250e2",
"assets/assets/icons/hiw.png": "97d4c42b0d3494007e343cec97ec158a",
"assets/assets/icons/home1.png": "7c1e4936c7db95f18475c6f387f4b175",
"assets/assets/icons/home2.png": "1fd72a0b4ab396a013402e6f5a5bccd6",
"assets/assets/icons/home3.png": "f57db47d10f091d8444fcc4295956854",
"assets/assets/icons/home4.png": "56f8205850dc6a2e92c791a67e91da6f",
"assets/assets/icons/home6.png": "4cd42c58d998bb1bcfa8bb7e1ed2668e",
"assets/assets/icons/homebtn.png": "e81371f8f0ea5efc516a7b60aae30a04",
"assets/assets/icons/house.png": "937faaa435863f636803923376324c90",
"assets/assets/icons/house5.png": "10d1cce28caca2ac818887044ab42054",
"assets/assets/icons/htt.png": "dc0a049cce34bcfc8ce6b7ffe2de5c8c",
"assets/assets/icons/info.png": "e54bbfdd8b4a7dd1945b135ed91d7d1f",
"assets/assets/icons/instagram.png": "581b9a2dd5e29e20e952d5e7b408d80b",
"assets/assets/icons/license.pdf": "714c6719db990ba57ec0e49076ca4e0b",
"assets/assets/icons/line-up.png": "458692ea49c88114ca0c593e5bb015d7",
"assets/assets/icons/menu.png": "99310aca6c4bae9472ef8eabfe4bf80e",
"assets/assets/icons/menu2.png": "433ff10aac49f09a5dbe1693db1d36db",
"assets/assets/icons/ref.png": "0563c4e13bb09cc5a6b2fcdba910f0b2",
"assets/assets/icons/team.png": "ec25d6698a058bc384989007b1003c02",
"assets/assets/icons/telephone-call.png": "0ae06bd296ca80588ccc004308cb5708",
"assets/assets/icons/user.png": "3e19d9eae5a5ab5b58acdf75a62f5b9b",
"assets/assets/icons/whatsapp.png": "e524580fc90901839b3c6f543dbb560a",
"assets/assets/icons/withy.png": "0edac637d2f5993ff761bb115220de61",
"assets/assets/images/12.png": "7b00807454ca61dd846d2cda88fa32f8",
"assets/assets/images/22%2520(1).png": "6e70bc38dc420dc18d61f19d219b5904",
"assets/assets/images/22-removebg-preview.png": "b4ced2c41c13d06b68ff173a90d4c320",
"assets/assets/images/22.png": "6e70bc38dc420dc18d61f19d219b5904",
"assets/assets/images/citlogo.png": "8ebbed8fad45054f5a936c311d08cf88",
"assets/assets/images/citlogonew.png": "783e24018ed40857e0173b6719c16682",
"assets/assets/images/intro.png": "a310aecf12f2bb080bcfa427515690e1",
"assets/assets/images/pat.png": "2c4b6612a9c4851cc66a3a3f08809f27",
"assets/assets/images/px.jpg": "ce3a567d4ed78c0543793c6da8e437ce",
"assets/assets/images/Vector.png": "ec79b69de09ce855d7e63e4332c7a088",
"assets/assets/images/ypb.png": "13d74b208ba64b9b371e632f6ab1b595",
"assets/assets/json/ArrowUp.json": "cc409562b95ad75e1bd7e42c4b591787",
"assets/assets/json/newScene.json": "c12590e10efff0df70fece8b09f8baff",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "26ab4ba8451a847e73e0c96b8caa1377",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "31c9c46db22e888a4240e6ef04483c72",
"/": "31c9c46db22e888a4240e6ef04483c72",
"main.dart.js": "4cdc61220a1c104735d475d503b884e3",
"manifest.json": "ff2c4d8bd5fdbce67103dea79182db2f",
"version.json": "598acc4e5330155cad54436be8d7e7d9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
