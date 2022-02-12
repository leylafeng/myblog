/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "972f22bd512946560d667b8cffe42316"
  },
  {
    "url": "about.html",
    "revision": "21a144f3e8259168ec76c4fe88e00b1c"
  },
  {
    "url": "assets/css/0.styles.7fafdda3.css",
    "revision": "6fa091659b38c349bfcf319f36084e48"
  },
  {
    "url": "assets/img/16.jpg",
    "revision": "d4cea633d345f3ed8b2400532d4f113e"
  },
  {
    "url": "assets/img/2.jpeg",
    "revision": "fe607b4c0fd45125612d694d94efcc6f"
  },
  {
    "url": "assets/img/3.jpeg",
    "revision": "2e7db8b59e9bc52e80d592d8b7761774"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1faaf130.js",
    "revision": "412faac8c967aa11f9470ba3f5e4de84"
  },
  {
    "url": "assets/js/11.c0aa4ca9.js",
    "revision": "72f1e7685c0ae4bb5068d914649f1ded"
  },
  {
    "url": "assets/js/12.a5cff427.js",
    "revision": "9e45a2dad129945f6fbe7fbb504cdf67"
  },
  {
    "url": "assets/js/13.c61a1f81.js",
    "revision": "1b740b85acb5ab5bca5c48c9f7c33aec"
  },
  {
    "url": "assets/js/14.32ed3394.js",
    "revision": "c787d8cf4000b9e622b0d395df2fb43f"
  },
  {
    "url": "assets/js/15.182a32e4.js",
    "revision": "3d2633c4149e31d332f1a19816dc4ea0"
  },
  {
    "url": "assets/js/16.4ef18442.js",
    "revision": "9504704d7de8410548b152d0d232b71f"
  },
  {
    "url": "assets/js/17.93988cd6.js",
    "revision": "1b283be58ecd5251c638a7ee63cac3fb"
  },
  {
    "url": "assets/js/18.19b45c66.js",
    "revision": "3819b81dc4a681624aa2ffdbcca751c3"
  },
  {
    "url": "assets/js/19.db782080.js",
    "revision": "d75241caca2c8e2cde1a0de3c3b43244"
  },
  {
    "url": "assets/js/2.d2e969fc.js",
    "revision": "7f318b3ff993f88232a9c737c7eed0ce"
  },
  {
    "url": "assets/js/20.d9870da9.js",
    "revision": "a07edb1e1ec13f060594e2e8b276017d"
  },
  {
    "url": "assets/js/21.887f88bc.js",
    "revision": "a6f77e04108f77255d35b014df48d61b"
  },
  {
    "url": "assets/js/22.abab942a.js",
    "revision": "904e5f54c383bdbc0275faafd385254d"
  },
  {
    "url": "assets/js/3.177891ec.js",
    "revision": "90fe50ddec94025be9a4fd5f1eb7c242"
  },
  {
    "url": "assets/js/4.6e26d22d.js",
    "revision": "3df553f55d19f14b9bed2491535e6543"
  },
  {
    "url": "assets/js/5.f7223432.js",
    "revision": "0dc4ff650516cfa70dd7be13aebbdc2e"
  },
  {
    "url": "assets/js/6.b5fcec75.js",
    "revision": "53fa54bc212624440c09d03e6fae5958"
  },
  {
    "url": "assets/js/7.653371d2.js",
    "revision": "2d1c2c03d3ec83cb7a1bab765fa6daf9"
  },
  {
    "url": "assets/js/8.bc85e5d4.js",
    "revision": "d1eda0e4d09ce8af21b50c5d1c0f2b58"
  },
  {
    "url": "assets/js/9.b4b967ba.js",
    "revision": "53a702025500e67d4e0c827b01d3a941"
  },
  {
    "url": "assets/js/app.a66308fa.js",
    "revision": "01a4c004a8b83921e9b72f4058222bdb"
  },
  {
    "url": "graduateschool/computer.html",
    "revision": "7c1fb76c4751e2ba991cf56bc844a445"
  },
  {
    "url": "graduateschool/english.html",
    "revision": "1b31e35a5659dce31be2e061300647aa"
  },
  {
    "url": "graduateschool/index.html",
    "revision": "6be7888e5084ae880ed94735bc1721a5"
  },
  {
    "url": "graduateschool/math.html",
    "revision": "d999575c8dfd8d3c2aa8cdbd074eae08"
  },
  {
    "url": "graduateschool/politics.html",
    "revision": "994f68f5d34277f927af628052153f12"
  },
  {
    "url": "icons/16.jpg",
    "revision": "d4cea633d345f3ed8b2400532d4f113e"
  },
  {
    "url": "icons/welcome.jpg",
    "revision": "349783efffcc06e7970ab68104840626"
  },
  {
    "url": "index.html",
    "revision": "6be699e12479922642272c2dd896fbe9"
  },
  {
    "url": "learnweb.html",
    "revision": "1950ce0b03a4efe0607a1e897115a227"
  },
  {
    "url": "line/backend.html",
    "revision": "bc96e1ac0d35b24d7d6dd29d32862109"
  },
  {
    "url": "line/C.html",
    "revision": "edf17a21076f2e42b4587a9f5e2de135"
  },
  {
    "url": "line/frontend.html",
    "revision": "91b860d7af82a154c392eac5e66f1a83"
  },
  {
    "url": "line/index.html",
    "revision": "08f43912e0c455415d4a6cbd075dcce5"
  },
  {
    "url": "line/others.html",
    "revision": "d79754659d97fc5e2f2aa2d88acf55aa"
  },
  {
    "url": "line/VBA.html",
    "revision": "9ef7e2d9286a5ef1455afebe6f21ed84"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
