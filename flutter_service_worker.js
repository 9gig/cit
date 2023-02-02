'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d4b752d3647bc65c63819a25388c1caf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1412db2e61c904e64444589d46fd4b6f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b6f04862e31c8c481a38209ebbe2b490",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3d8e9671d43efe2c369a75ba2fe67873",
".git/logs/refs/heads/main": "9d45585b3c669b515fd58d83fd4b41a5",
".git/logs/refs/remotes/origin/main": "9c6a3a3c1d03602a52144c503db0239f",
".git/objects/04/ba96b6e6110260311d461ab7f09d511cab6b1f": "48ca3e7ace66e8b5fefb2b571224d42d",
".git/objects/08/88e45bbd884da5d1f6267a26a4898ea0b91a87": "f68d1d09df791b5637d0a3b838c33817",
".git/objects/09/d0d0e18e1650f1dbda3a6e2c42f9ac12a8026a": "1bf892a1677e32e5142a029e87cda865",
".git/objects/0a/352bc36e1cf2717e0bee86a64c8bf993f7e3c0": "998d65a6ec57c73cf9264fabbd6fcf3e",
".git/objects/0d/9baf7b85a0b02acaa5c3356bdd2205d862131f": "373b4ac33388ad18009571b3f0d800d9",
".git/objects/11/af7fbf98c7e6f5ae077a0f0bdfe58a97bb1391": "6e68fbc446b1e03b19e0e212aebaecca",
".git/objects/12/b117716b018b202fdced300b725818f164e496": "2c4399ad4da7b2d4cfade3a5f62bddc0",
".git/objects/17/d69f90ccb8dd4dcc1488d8e3777a2dc5090902": "bbee07c622b19cba0f356ab7cf9f7a2b",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/25509638f17fe71c8b4272d5b9ca0fda6b8bfe": "0d8e0e7440c777c3433f6593713ce6c9",
".git/objects/1e/02cee7ee852c56c42bfe68ca2f8f2a32ec77ae": "ba44c2ad340c58e046b3cd4da7fbd727",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/3478c1e6e59e31573057c94a4220b63ca36e38": "828b059148e1a66d6508af8469d7a619",
".git/objects/2e/0bd2cd34b1b08bae13ec81e478ffc7183f1421": "38f67b70190800cb195afc7510577d3a",
".git/objects/33/c8d5ac040127e3efa9051703200506c23df92b": "7c15f2c8a7d555dcf25670507c54f3c6",
".git/objects/39/c5319cdcb93dbd42b0d19f4dce3edd29cee2aa": "bc7ebee12c891da27a0e7d12aa01e144",
".git/objects/39/ed1f6c6ef851377e6bb17ad1c823c74503e01c": "f06c5eb2ea2821f0bdf16589fdf4e738",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/a77a5c27ebe6c28cc285415820bb6892e932af": "9f4e4d795589e8406873aface701885a",
".git/objects/41/603a1254772b066b056eb4356e1ecb67ff013f": "39fe137a46da280e99faaa6cf23124fb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/064ac7f5432a6e4304e03523ec430a3d99bd7e": "7e74e26fe73fec7c8fa84786f8da0303",
".git/objects/53/f8d8447445a216fc05b61a6842f4b0f1c84333": "53b87348187951cf790d107cadef4cc9",
".git/objects/5e/9e3fdebca72f58988254bae0dca1fed7b59b56": "efc93d9673b51e3b1641edbedd3ed2d4",
".git/objects/5e/bb5b07ad350caff2ad6224d2bf56457f04e2bf": "b65b14633c21948279e0ca261f149d38",
".git/objects/5e/c718abf83ba52aed907f494bde2d9c66828eae": "ff47553b742310af265ee70931497997",
".git/objects/5e/db651701ca6310b4af4ca5805b9920f305ebb9": "70afe5bc2907feb82422990b5e4cac15",
".git/objects/61/b866d1243b3b1abb08c7bded8467a9d79b4281": "c3ef48f1a9830166593c28a648854021",
".git/objects/62/4603ce801fd7a4050e51d72ef9f8762bf2de9e": "5c4e263dc1404ac63e3c98e2e53f5f6e",
".git/objects/62/b27c0b4bfdbad30f80d2ffaebdb32897072f80": "f1de874bebccbcbcbbb5c7ae7288e481",
".git/objects/65/674bc6db4407b23b8ea4e527544db585da6d6d": "dc873eafb3e46dcfe87e1aa8f7fb8b1a",
".git/objects/67/265c49c64fe195671ba607850ca066ae1a8f09": "340878b1f87c82e7e01794d966413d0c",
".git/objects/69/db3b2bd585806c6297971532cc1163adb681f6": "a4474d5a96baac2d2f169d00a0f06767",
".git/objects/6e/96095f6968da5137cb3958606b7e7712434fe1": "dedea4c1f0c832d3c309379a8f1be807",
".git/objects/70/2c2a540dbec51b9caad8879d1a00a0e5ea572a": "8e5c42e6da9b77c44f9a2169c9957f76",
".git/objects/70/44003207d83b094d4d789eaf575356715183fc": "d354e016ac67fd3e7bf1ecb0733042cf",
".git/objects/71/122d7704909cdc0e0b10dff47d38646225e2b6": "bc0136c54a924ece0bc031e267d971d1",
".git/objects/71/44ea4d81161fda9e4d12f5a3260ac8feb42630": "832b34abc86fe1e9afe6ab4a4113413f",
".git/objects/72/16aa6cf5f20441ceec1ae96a12206cec4e1941": "4e25095d0301512596d8a2d037a6fbcc",
".git/objects/79/90ad483f7fbf0789e636b485b3e9704fe64d66": "1f81172a3825509bb4fb120a5d22b5bb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7f/20e758e739ddc123dacddfa380857ea19c7ed0": "545fe007b1ded0ee41a1027448366b0f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/7c725317cba6bb7fa263cea1fc9034085ef351": "5d433cf75ed139da62ab326df35cbe06",
".git/objects/8f/27cff642e4420fd8204048bb72c23f7830ee1d": "7c406dcd41db980bb6376f94a704cfb7",
".git/objects/90/4746cb17db9fb1e03462cc609fdffbb48c7810": "644748499a3e82f5f65c51d4e81f4010",
".git/objects/95/eae8b11cc0df701f224f3acbfd2bcf37a4a0aa": "e1be854f1b4514a85b77e9caca623259",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/de32943af590bfef2d3e39ef3b2d7e71481ca7": "9e5be791ac18425a912090b91debbf7e",
".git/objects/9a/7314e6c58714f5dc2c98dd19a27a973a57638d": "0a4e712263d8e77e0791fc67bc4c8ae0",
".git/objects/9b/87182a70df63291da613ec1c7477a57e12ebfa": "c79c921556a23cd64c5f9c0484c0137d",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/ce3c4c8bd3694d62240bf2ae38b4be15d1b8b5": "ccdfdde658ebafd51f703b743fce6c6f",
".git/objects/a7/2b830679c8fc0957135ca36e02b7735d1c0fde": "67a30b4082d94055b8a0fc9e5a496bfd",
".git/objects/aa/2df349a65514d9c0fc637b080ef8bd7de4d57f": "af55e6e76015ef536dd284e232bc9fb0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/15baf9325d5e4aac781562210731e356be8354": "875d2bc51b39def65e2012d8257d29ed",
".git/objects/ae/929269f6800ae3d57cd51fdcc9a58616c380a6": "299e673ca08b94942fab7b00c32d36bc",
".git/objects/b2/51d676f0cffa2ef7114c78dd98ead07d1d9486": "4e0d5b8d874f7b7e75d440158b02d0e3",
".git/objects/b2/ec2970731e21de176531b4da9a1209df9aa347": "661937cd00e5bea4d38c38101dceaa3c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/76790770033cb4cc37bcf40d5a1a37456e9c18": "1d7aa331c6281ba458c090c788c77811",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/82f9b052f2a319849af2df5dc660bcb27c201d": "adb02f3d097cd2beafc65192b224953f",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c1/03dd5436aed7d45a71fd14da7f2e8215e0a856": "fe9d5d9865b3ffa78ad541fbcbd410d7",
".git/objects/c1/607f0b4e77e1d0a3a4a815c819932ec9cbb55c": "35bb571b0ec5bebd77f4100009151e30",
".git/objects/c2/dda0a356144a486b8df5857565a8dc37017949": "4d7a2590e76566d4f13de4ce04e60029",
".git/objects/c7/ae0b88a6165e2ef2ef3e1d9fc09af4234d122d": "62d453a7fa9c687c509b4eded43169be",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/c72303d03091bfaf2022609232c13a507a302d": "613114d3084e993fba116ad021adfbb4",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/e96ba6f74fa460ff5d731e2347fa63fdb61963": "66f02571ba009da227e898642cef69e6",
".git/objects/cf/554b884760ddef522f4ef5b561f3f4924b525a": "cc28d7ffede8d144176568d665b00128",
".git/objects/d0/73ec35c2e4110b7558bceede797b081883ecf2": "f2c4b358fc112e0d2d67bd41760faf8a",
".git/objects/d2/b7abf17dec8120c23ff55d9248b4d04d07732f": "4eb69aea3cb7f952656786cf64e1d262",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/fddd107dba688ff8129e39b625bfb1dcbd58c3": "983a2a96f663c0d5bba5c4e34b2d7cd4",
".git/objects/d9/16bb1e06e23dc715f830e11cec649714c5f657": "82cb696f987cd6ff7c0fda3ef6524a8d",
".git/objects/d9/c2f62efc651e49a7b5e3d39055c999e31179e2": "beb47b02ce3edc198636f80858b48327",
".git/objects/dd/bc82894cb78f44be4743a34cc7ebe9a52ca2f0": "bcf74cf3d1e20fa67716886186c732fb",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/823157c1c14d56d21bf1a9c8fcf1bcb788cf47": "94f0b8ef21a959d30cbd6ee8156a8aee",
".git/objects/e4/b7b1e0b407bc65cbaac7dda6b0781d1c563bbc": "dc64832f39f272eb0ee38f6028d8030e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/658458b32563717ca908a5379cc242400d07c1": "4139771acc0ca78803f5686ae1fa070e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/92de2b2e073b75ae85d52050778d7010fe9d45": "8bd4b083239308171b355fd79cb6a55d",
".git/ORIG_HEAD": "7e513006aa3de69bb88835a05892a77c",
".git/refs/heads/main": "7e513006aa3de69bb88835a05892a77c",
".git/refs/remotes/origin/main": "7e513006aa3de69bb88835a05892a77c",
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
"index.html": "2b033e2a16a2b013f6e765610d36637d",
"/": "2b033e2a16a2b013f6e765610d36637d",
"main.dart.js": "7e4c022ad93ed1060bf16d5c5a318d4d",
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
