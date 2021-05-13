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

workbox.core.setCacheNameDetails({prefix: "hkoscon-2021"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/2021//019758fc2792240e5b4b.js",
    "revision": "2a5d7400ad015d8b31aa2871228721e8"
  },
  {
    "url": "/2021//01bda049eadf1b7b1e9e.js",
    "revision": "7ede7263ea12348168082e1f84a1d33d"
  },
  {
    "url": "/2021//0b72d65e50ac5eb1528d.css",
    "revision": "e3a18a19d075d60d1f1e4d5835d434f0"
  },
  {
    "url": "/2021//0ed60120e771b94bb2e1.js",
    "revision": "fcb5df63e152f0e659b9d573bb5b816b"
  },
  {
    "url": "/2021//0ffa03a4b3325198b765.css",
    "revision": "0e3190a3834ba99bd57316a7842095fd"
  },
  {
    "url": "/2021//10b977b2d0e49bf6f815.js",
    "revision": "676efa72929c2bf8b55e497746fb9872"
  },
  {
    "url": "/2021//17ca20c340b930b30b13.css",
    "revision": "5060781f96b359aaad62ccacf5c5e926"
  },
  {
    "url": "/2021//1aceb630b045f07eb69c.js",
    "revision": "95712dc3626e92d5249ae4e64bba5130"
  },
  {
    "url": "/2021//200.html",
    "revision": "388ba2e7dc937872befb736f7e81ea9f"
  },
  {
    "url": "/2021//210829964719489282a5.js",
    "revision": "227c467a550f2842f8648a1b1b08a5a4"
  },
  {
    "url": "/2021//2612f001abba7ff2c51d.css",
    "revision": "bbeafe734fe483a531602de7ec484b18"
  },
  {
    "url": "/2021//2a959d773251d93111e8.css",
    "revision": "f52be865dfa469658249d4550bab557b"
  },
  {
    "url": "/2021//2b78c996e28b016845cc.js",
    "revision": "89dc4e8ae838d7afada8ac0bacbf6fb2"
  },
  {
    "url": "/2021//3c494eec49e16976f278.js",
    "revision": "cfea50a692636560f79f88d2ac6c1c8e"
  },
  {
    "url": "/2021//4baff002740150d54cf8.js",
    "revision": "4474d5725a91bb00de3aa828f4785944"
  },
  {
    "url": "/2021//4cabc10304e8d80875eb.css",
    "revision": "e796e4f7f653e713a97e1643a791b2e4"
  },
  {
    "url": "/2021//4d3f107aec95bd90b8c0.js",
    "revision": "364cc40f5edd9b0e5f037c0e64aea65d"
  },
  {
    "url": "/2021//5088443a69c87e7edf1d.css",
    "revision": "a251281cc542dc2aff7f4df4e9db56b0"
  },
  {
    "url": "/2021//58ad12e810a48d9bec4b.js",
    "revision": "bd8836dcb5b968d1ccd9868d24868289"
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
    "url": "/2021//62e4aa1e084a7b374c50.js",
    "revision": "af5310d780495d12c6bd897c564c3905"
  },
  {
    "url": "/2021//6bcbe5205aec99664bbc.css",
    "revision": "7fbf42c8240a9221b921fcfa5be1c28a"
  },
  {
    "url": "/2021//746c8b6304ed47154edc.js",
    "revision": "f43ed85d7b04677b0976fab9c90b6872"
  },
  {
    "url": "/2021//7cfb136c3eb07a1fdf2c.js",
    "revision": "fc616e51feeb269104da67c54d30a370"
  },
  {
    "url": "/2021//7d907818c46378b1e5f9.js",
    "revision": "cc4a4ebef12c27d9af91beb108d0fdcb"
  },
  {
    "url": "/2021//8825ba241e01f92433ea.js",
    "revision": "7616c438c55354ee5a59394356b0c752"
  },
  {
    "url": "/2021//891dbadc4539d6acf7d8.css",
    "revision": "89ee1381dc18ed5e54bdb19d4c8e6c8e"
  },
  {
    "url": "/2021//8eb3cde416c55e1e6933.js",
    "revision": "8b7918962682dea4b0b1bb25dc7d867a"
  },
  {
    "url": "/2021//a0f4ccff7195fa3a67a3.js",
    "revision": "2dabdeeb3d009670cb0024d9aa1ad970"
  },
  {
    "url": "/2021//a135fdcb4e6d1ea140a7.css",
    "revision": "ab84e9c80ac424f2dd483c85db085029"
  },
  {
    "url": "/2021//about/organizers/index.html",
    "revision": "b112c6be29ec90632246ae0b33cb45f4"
  },
  {
    "url": "/2021//about/volunteers/index.html",
    "revision": "978d24bba587323abc66c22a50021049"
  },
  {
    "url": "/2021//bbda7013d57c480a8f01.css",
    "revision": "56a413c7db34468fee0e33c47e4717a2"
  },
  {
    "url": "/2021//bee89a62a1f364ae45b3.js",
    "revision": "def628fabf7dbc1ca9d47a144b8df744"
  },
  {
    "url": "/2021//c17c70b60600acfb1e4d.js",
    "revision": "877a99f4cabd573d7d2f847d228b2cf9"
  },
  {
    "url": "/2021//c39c71655d3bf0172623.js",
    "revision": "d062c2838c2b72edd696f8fe2b61694a"
  },
  {
    "url": "/2021//c440b7cb01eccb4aa698.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/2021//cfc/index.html",
    "revision": "770304658b2282ad4050857ba0e38291"
  },
  {
    "url": "/2021//cfp/index.html",
    "revision": "42fe95df1cac55f0d0d6728a75404c6c"
  },
  {
    "url": "/2021//dce40f8eb0b07b874705.js",
    "revision": "7c73b396a4df426d11e5ecbe54e3cdbf"
  },
  {
    "url": "/2021//dd9c5b86d5731b3ce17b.js",
    "revision": "2690f78949171ea53155ae3bd0ac0fb0"
  },
  {
    "url": "/2021//f3e9bb7a43182cb409cc.js",
    "revision": "e9c62905d848d2d3ea1ceeea180523d7"
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
    "url": "/2021//img/00c3c20.jpg",
    "revision": "00c3c206b0e3bca35cd572fa724accc1"
  },
  {
    "url": "/2021//img/953d2aa.jpg",
    "revision": "953d2aab6980005e12cecd0808d12597"
  },
  {
    "url": "/2021//img/eb90f7f.png",
    "revision": "eb90f7fbc71ca73d9d3ab9d57657bbc2"
  },
  {
    "url": "/2021//index.html",
    "revision": "0ae7a1be059bc19b82f1eb752ced9240"
  },
  {
    "url": "/2021//sponsors/index.html",
    "revision": "0331476557b369589aba31554ee0933e"
  },
  {
    "url": "/2021//timetable/index.html",
    "revision": "bfd52cb30db3039e98531c03d93251ef"
  },
  {
    "url": "/2021//topics/index.html",
    "revision": "4929e0963ece722811fab6eb78353414"
  },
  {
    "url": "/2021//about/organizers/",
    "revision": "b112c6be29ec90632246ae0b33cb45f4"
  },
  {
    "url": "/2021//about/volunteers/",
    "revision": "978d24bba587323abc66c22a50021049"
  },
  {
    "url": "/2021//cfc/",
    "revision": "770304658b2282ad4050857ba0e38291"
  },
  {
    "url": "/2021//cfp/",
    "revision": "42fe95df1cac55f0d0d6728a75404c6c"
  },
  {
    "url": "/2021//",
    "revision": "0ae7a1be059bc19b82f1eb752ced9240"
  },
  {
    "url": "/2021//sponsors/",
    "revision": "0331476557b369589aba31554ee0933e"
  },
  {
    "url": "/2021//timetable/",
    "revision": "bfd52cb30db3039e98531c03d93251ef"
  },
  {
    "url": "/2021//topics/",
    "revision": "4929e0963ece722811fab6eb78353414"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2021//", new workbox.strategies.NetworkFirst(), 'GET');
