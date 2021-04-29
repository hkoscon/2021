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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "hkoscon-2020"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/2021//04e97e46b51c52d01d81.js",
    "revision": "71f5b2e31272db6b79494f0ad02a1b0b"
  },
  {
    "url": "/2021//07f7fc59dae2cca72d12.js",
    "revision": "c80d0a56fd20bad85b39d6a05a93d5bd"
  },
  {
    "url": "/2021//0b72d65e50ac5eb1528d.css",
    "revision": "e3a18a19d075d60d1f1e4d5835d434f0"
  },
  {
    "url": "/2021//0ffa03a4b3325198b765.css",
    "revision": "0e3190a3834ba99bd57316a7842095fd"
  },
  {
    "url": "/2021//17a14ff07f0ef654c910.js",
    "revision": "09d8548799f07adedb9a8c7f3507e00d"
  },
  {
    "url": "/2021//17ca20c340b930b30b13.css",
    "revision": "5060781f96b359aaad62ccacf5c5e926"
  },
  {
    "url": "/2021//200.html",
    "revision": "5318e3197455b4c55b395bc5d2868772"
  },
  {
    "url": "/2021//2612f001abba7ff2c51d.css",
    "revision": "bbeafe734fe483a531602de7ec484b18"
  },
  {
    "url": "/2021//2972ab5e296557ae6785.js",
    "revision": "616eabf6f1315dd017d9a933255c48fe"
  },
  {
    "url": "/2021//2a959d773251d93111e8.css",
    "revision": "f52be865dfa469658249d4550bab557b"
  },
  {
    "url": "/2021//2e41e664e8b688d743fd.js",
    "revision": "d7eed02a789114fe80d2337d23c740a5"
  },
  {
    "url": "/2021//3feed2dd76b52a7965d1.js",
    "revision": "81cb40bf9f8e799f83fc74911d0f8cf5"
  },
  {
    "url": "/2021//40242238dc385dabfa62.js",
    "revision": "ec907009dce05b066ffe4a9691be1c46"
  },
  {
    "url": "/2021//4a87435b93e368b6d9bb.js",
    "revision": "bd7cf24ec0ff47a7513e0d353f8f1bdb"
  },
  {
    "url": "/2021//4cabc10304e8d80875eb.css",
    "revision": "e796e4f7f653e713a97e1643a791b2e4"
  },
  {
    "url": "/2021//4e0bc989114675262fca.js",
    "revision": "0701091bce44b9e220b31966ade5db1d"
  },
  {
    "url": "/2021//544c52d2e1604b56e665.js",
    "revision": "2df376024d34d053431d6d774f8d6888"
  },
  {
    "url": "/2021//5d0f711a673f3bb3021f.css",
    "revision": "33c5ac4647794a2b2151cedbc8697921"
  },
  {
    "url": "/2021//6277ce7683aaa1dfa77d.css",
    "revision": "772136ef1541b21d75838289f65e1ea6"
  },
  {
    "url": "/2021//69e44a403d4473575b30.js",
    "revision": "87117fc314ce21273f040244ff99190b"
  },
  {
    "url": "/2021//6bcbe5205aec99664bbc.css",
    "revision": "7fbf42c8240a9221b921fcfa5be1c28a"
  },
  {
    "url": "/2021//6e209497d7002f153e19.js",
    "revision": "4f52358af749d458fc5dcf8d1aebe91b"
  },
  {
    "url": "/2021//6e915d6e3fba6204084b.js",
    "revision": "bce3080b3ebdae0ddbe1ba119da40874"
  },
  {
    "url": "/2021//753c2815285adca0a356.js",
    "revision": "4b186dce9b023929cba87fe15b11cd86"
  },
  {
    "url": "/2021//7fe8416c942040f56f57.js",
    "revision": "83b9c1dc980eb23903ceea3e9c8411ba"
  },
  {
    "url": "/2021//884aef19c7edaf5b65c7.js",
    "revision": "bb4be4ff9360112867443041d348787d"
  },
  {
    "url": "/2021//891dbadc4539d6acf7d8.css",
    "revision": "89ee1381dc18ed5e54bdb19d4c8e6c8e"
  },
  {
    "url": "/2021//95a01a59d93d914476ca.js",
    "revision": "f5edcc5f3011133eab90be1c34f0c05c"
  },
  {
    "url": "/2021//9a4adddb0c30776f952d.js",
    "revision": "1a029d3da47131445ea6d89a39cbbee4"
  },
  {
    "url": "/2021//a135fdcb4e6d1ea140a7.css",
    "revision": "ab84e9c80ac424f2dd483c85db085029"
  },
  {
    "url": "/2021//abb6db261820b06c41ac.css",
    "revision": "c35e1be9bc4f533def90ec507f6ac9de"
  },
  {
    "url": "/2021//about/organizers/index.html",
    "revision": "1da78ddfb802e701813dd4f10752155f"
  },
  {
    "url": "/2021//about/volunteers/index.html",
    "revision": "1b0095c3b79e6cc48e3247a570320e92"
  },
  {
    "url": "/2021//bbda7013d57c480a8f01.css",
    "revision": "56a413c7db34468fee0e33c47e4717a2"
  },
  {
    "url": "/2021//bc49fd8c2eba1046561f.js",
    "revision": "cf7c0eb2efe29e38d13350cf4f89421b"
  },
  {
    "url": "/2021//c440b7cb01eccb4aa698.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/2021//cdbde5368b9d25c2e13c.js",
    "revision": "3b062cfae5f54b9c052393bba118352f"
  },
  {
    "url": "/2021//cfc/index.html",
    "revision": "d0536a6258274a690c8bf513adeb26d1"
  },
  {
    "url": "/2021//cfp/index.html",
    "revision": "9a3055b1638d0e7436a0c8f93c5e0279"
  },
  {
    "url": "/2021//dd7551bf613aa09f8026.js",
    "revision": "d2d530e635eeb44d2a977234ca91593b"
  },
  {
    "url": "/2021//de7b9cc1ae5e58d752e7.js",
    "revision": "13d860836a4f8061b47914ce4ad61540"
  },
  {
    "url": "/2021//f066876c5418094bc350.js",
    "revision": "b61130771ee3a7f91fc9327dac54c74c"
  },
  {
    "url": "/2021//f2c70353d71f662552c8.js",
    "revision": "01a84f02d336d8b39419203a1b7593b6"
  },
  {
    "url": "/2021//f3ea1d89cf35e19b56b7.css",
    "revision": "2c1a9c4649e2b515d483c71b83883754"
  },
  {
    "url": "/2021//f62d141e41f6eacad3df.css",
    "revision": "a7a7bcc5069a2d30051021536ca5ee96"
  },
  {
    "url": "/2021//f8b9d62fd5605a2be979.css",
    "revision": "668bec8ed029aa41e4edfd130c04467e"
  },
  {
    "url": "/2021//images/banner.jpg",
    "revision": "376ac4802d3c925b223330562ff4654e"
  },
  {
    "url": "/2021//images/bg.jpg",
    "revision": "953d2aab6980005e12cecd0808d12597"
  },
  {
    "url": "/2021//images/volunteer/0355e6c99e405f2d650a048f93849e0a.jpg",
    "revision": "f2b53740fd1d3af56ae27da3a98f1f8b"
  },
  {
    "url": "/2021//images/volunteer/318824b7d24aa53a1550c3fdcc3cdaad.jpg",
    "revision": "718f2353e9a4a2fc0f69966ff9c3f00e"
  },
  {
    "url": "/2021//images/volunteer/36cc4b80c152f962ea08477ad3d92182.jpg",
    "revision": "36cc4b80c152f962ea08477ad3d92182"
  },
  {
    "url": "/2021//images/volunteer/441a4f7b4e3fc43c174c9018a8fe88f3.jpg",
    "revision": "559c8ad17d71fcc1a17855be0ede9e22"
  },
  {
    "url": "/2021//images/volunteer/5af7cdeb38835c964eeadcb6c8f2c32c.jpg",
    "revision": "ddf79060560d8a397533f628e4ea9031"
  },
  {
    "url": "/2021//images/volunteer/7871c0482c9d274d68fe1d056a7cce8b.jpg",
    "revision": "81670649ca0068b39c53d2e42b90545c"
  },
  {
    "url": "/2021//images/volunteer/824010d0d7fcf80d2f629309de68becb.jpg",
    "revision": "3c8dcde9b5dead1c6b9f242d762ea194"
  },
  {
    "url": "/2021//images/volunteer/ac09c01ecec26e63726faa64ca59fa30.jpg",
    "revision": "52910f14529df88f419b1ff33be78533"
  },
  {
    "url": "/2021//images/volunteer/b402043e9d8202b0b252eca0a9e5639e.jpg",
    "revision": "0d09e273188248b025e5863d54621aa0"
  },
  {
    "url": "/2021//images/volunteer/c63e3dcf23114e4769ac00c16617d1e9.jpg",
    "revision": "8ed0d10320039ed20e70de248003c340"
  },
  {
    "url": "/2021//images/volunteer/cc93adf96a1b6d795983ede8cb3d111b.jpg",
    "revision": "59b8d98dc974c797f7ddefba6943b2b6"
  },
  {
    "url": "/2021//images/volunteer/d22e8f6bf9c2ce9b185c270a442e288a.jpg",
    "revision": "be8f9bae79059fff2c7d6989509de383"
  },
  {
    "url": "/2021//images/volunteer/e11966ad5e195fef25bf0bd163fb7a98.jpg",
    "revision": "d663ee0d529cbd942b4e1a7e674cf68f"
  },
  {
    "url": "/2021//images/volunteer/fa29d4359d8c420eec9b84532765dfec.jpg",
    "revision": "7c31719da41196175814289839bd8a57"
  },
  {
    "url": "/2021//img/eb90f7f.png",
    "revision": "eb90f7fbc71ca73d9d3ab9d57657bbc2"
  },
  {
    "url": "/2021//index.html",
    "revision": "7f45eeab9ddae460caef34482b912972"
  },
  {
    "url": "/2021//sponsors/index.html",
    "revision": "9fee0e794ca1b40aa56fce1b4e428603"
  },
  {
    "url": "/2021//timetable/index.html",
    "revision": "c132c04e98f1a684f456a3e31404522e"
  },
  {
    "url": "/2021//topics/index.html",
    "revision": "2906ecd54e3914e29e2a145176e9a033"
  },
  {
    "url": "/2021//about/organizers/",
    "revision": "1da78ddfb802e701813dd4f10752155f"
  },
  {
    "url": "/2021//about/volunteers/",
    "revision": "1b0095c3b79e6cc48e3247a570320e92"
  },
  {
    "url": "/2021//cfc/",
    "revision": "d0536a6258274a690c8bf513adeb26d1"
  },
  {
    "url": "/2021//cfp/",
    "revision": "9a3055b1638d0e7436a0c8f93c5e0279"
  },
  {
    "url": "/2021//",
    "revision": "7f45eeab9ddae460caef34482b912972"
  },
  {
    "url": "/2021//sponsors/",
    "revision": "9fee0e794ca1b40aa56fce1b4e428603"
  },
  {
    "url": "/2021//timetable/",
    "revision": "c132c04e98f1a684f456a3e31404522e"
  },
  {
    "url": "/2021//topics/",
    "revision": "2906ecd54e3914e29e2a145176e9a033"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2021//", new workbox.strategies.NetworkFirst(), 'GET');
