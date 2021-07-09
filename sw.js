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
    "url": "/2021//057bdaa52445730a03d5.js",
    "revision": "facbc49c58a77e83402b453a00424333"
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
    "url": "/2021//17ca20c340b930b30b13.css",
    "revision": "5060781f96b359aaad62ccacf5c5e926"
  },
  {
    "url": "/2021//200.html",
    "revision": "73df30b229069964af49417411fa5d59"
  },
  {
    "url": "/2021//213f51eea819817d67e6.js",
    "revision": "58b88f1949f573bb5a63c3f04e394d38"
  },
  {
    "url": "/2021//2612f001abba7ff2c51d.css",
    "revision": "bbeafe734fe483a531602de7ec484b18"
  },
  {
    "url": "/2021//2a3aa55f31324fbba0e6.js",
    "revision": "c7ba16ccbf7aa710b9a7e8244c412dbf"
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
    "url": "/2021//3897228cb743ff603a2e.js",
    "revision": "6d362d0896395ac01d5374c619f95697"
  },
  {
    "url": "/2021//4cabc10304e8d80875eb.css",
    "revision": "e796e4f7f653e713a97e1643a791b2e4"
  },
  {
    "url": "/2021//5971ef3339c556f49e8e.js",
    "revision": "a60f9cbb16c70e6909a2e95604ae43da"
  },
  {
    "url": "/2021//5d0f711a673f3bb3021f.css",
    "revision": "33c5ac4647794a2b2151cedbc8697921"
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
    "url": "/2021//727adba88cfae18e2f14.js",
    "revision": "b056a67bdc734511fba78ec8c6a831d1"
  },
  {
    "url": "/2021//8518241740dc060a4f95.js",
    "revision": "b6769c2b43907cee98b5be09d343a316"
  },
  {
    "url": "/2021//891dbadc4539d6acf7d8.css",
    "revision": "89ee1381dc18ed5e54bdb19d4c8e6c8e"
  },
  {
    "url": "/2021//973d51c0ac6f1ea91475.js",
    "revision": "42b6b8ba0c5ae7c6e997eccd455e074f"
  },
  {
    "url": "/2021//9f0e8f1d03e220063753.js",
    "revision": "cc7ee9dd2d223354c59249d0e67327cb"
  },
  {
    "url": "/2021//a06405ea27deed606aa3.js",
    "revision": "e87ae8012d0dbbc2fe150ca401731086"
  },
  {
    "url": "/2021//a135fdcb4e6d1ea140a7.css",
    "revision": "ab84e9c80ac424f2dd483c85db085029"
  },
  {
    "url": "/2021//about/organizers/index.html",
    "revision": "1010a719042c71c8d8f0ea6d54804986"
  },
  {
    "url": "/2021//about/volunteers/index.html",
    "revision": "2f07746349e7f8147534aee3615d6f9a"
  },
  {
    "url": "/2021//b8eb6a2382e8eea43ba5.js",
    "revision": "a66d1bb07557f4cd8f13855db0e06bc7"
  },
  {
    "url": "/2021//bbda7013d57c480a8f01.css",
    "revision": "56a413c7db34468fee0e33c47e4717a2"
  },
  {
    "url": "/2021//c08d11a8066825f1d946.js",
    "revision": "3e2e28533f238f64b4ef68f77d8aa987"
  },
  {
    "url": "/2021//c39c71655d3bf0172623.js",
    "revision": "d062c2838c2b72edd696f8fe2b61694a"
  },
  {
    "url": "/2021//c41c4db39d151ced7b34.js",
    "revision": "b5fc65bc08bcc03c8e5b1bb20016dddb"
  },
  {
    "url": "/2021//c440b7cb01eccb4aa698.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/2021//c9d86d331ce0f248d2cc.js",
    "revision": "5dcebf587ce395c3481566309e528bd3"
  },
  {
    "url": "/2021//cf65955f0b3eec8bd93f.js",
    "revision": "a45f60069883f6e29079315788452211"
  },
  {
    "url": "/2021//cfc/index.html",
    "revision": "69473b82010a615b1e63430d1a154499"
  },
  {
    "url": "/2021//cfp/index.html",
    "revision": "6de7eea04fc5d38121e415461564d7b3"
  },
  {
    "url": "/2021//d459b1a17ce278b55a66.css",
    "revision": "5515809e660f12275b2fcc3509624ede"
  },
  {
    "url": "/2021//dbdad405eb6bf6e11f9f.js",
    "revision": "780173ff8d1a42074be458e332ecca1c"
  },
  {
    "url": "/2021//dcdbf4ed270cfee4317b.js",
    "revision": "6a5cd77f9d8911803a498cdf73fa2f3d"
  },
  {
    "url": "/2021//e0f3e61dfe94c9a093c7.css",
    "revision": "4833d4b2629aa7eaff9f7b9fa7bba362"
  },
  {
    "url": "/2021//e2c75d198140057dfa8c.js",
    "revision": "2fb3a187ce5b7320e36e209c4a99edf3"
  },
  {
    "url": "/2021//e65bd1e50056f289f6c9.js",
    "revision": "da66e015401440ab180b3dd530d3e9dd"
  },
  {
    "url": "/2021//ef4065912aeb135a94e2.js",
    "revision": "9e0960a24a10193324eb41f792931d21"
  },
  {
    "url": "/2021//f3ea1d89cf35e19b56b7.css",
    "revision": "2c1a9c4649e2b515d483c71b83883754"
  },
  {
    "url": "/2021//f4706acd98409741e620.js",
    "revision": "c0f5dcbd065508cffd3a4f15e5132c49"
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
    "url": "/2021//images/kottis-avatar.jpg",
    "revision": "c9fe8f8ab68cfca8c513fcb6ae8df41e"
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
    "url": "/2021//images/volunteer/71595c7e137e7975a347a627c17cfc88.jpg",
    "revision": "71595c7e137e7975a347a627c17cfc88"
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
    "url": "/2021//img/953d2aa.jpg",
    "revision": "953d2aab6980005e12cecd0808d12597"
  },
  {
    "url": "/2021//img/eb90f7f.png",
    "revision": "eb90f7fbc71ca73d9d3ab9d57657bbc2"
  },
  {
    "url": "/2021//index.html",
    "revision": "cd9c647ead27210eb47ee52aa1381adf"
  },
  {
    "url": "/2021//sponsors/index.html",
    "revision": "33bdc965c94e4d02a6414f3d1fc9f2b0"
  },
  {
    "url": "/2021//timetable/index.html",
    "revision": "1126c102572e90ea5ac3ea753c610bba"
  },
  {
    "url": "/2021//topics/beifenxianggangjilulishiqukuailiancundangjishudeyingyong/index.html",
    "revision": "3faa4444767794461f75ae260e003b70"
  },
  {
    "url": "/2021//topics/beyond-cuda-gpu-accelerated-python-cross-vendor-graphics-cards-vulkan-kompute/index.html",
    "revision": "e8fc85f6d50ceabbc00970ecea45e989"
  },
  {
    "url": "/2021//topics/bof-raspberry-pi-400-compute-module-4-raspberry-pi-pico-and-more-lets-discuss-how-make-your/index.html",
    "revision": "cf9fdc315123857942da45bec92d5615"
  },
  {
    "url": "/2021//topics/building-online-technical-community-era-covid-19/index.html",
    "revision": "1e7c99825eff978dc8011237b881b1e7"
  },
  {
    "url": "/2021//topics/drug-icon-ccyaowutubiao-creative-commons/index.html",
    "revision": "82f5e1bbc22d40a23436a8ad0001b75e"
  },
  {
    "url": "/2021//topics/embedded-linux-risc-v-beaglev-yocto-and-openembedded/index.html",
    "revision": "d62098e090c4072f3cd8bb4ff0607213"
  },
  {
    "url": "/2021//topics/enhance-grafana-performance-mysql-database-service-and-heatwave/index.html",
    "revision": "a716d66cc2df193f24675121c3dead4a"
  },
  {
    "url": "/2021//topics/flutterkaifalinux-desktop-application/index.html",
    "revision": "9a5d26e6c784912e33d6917943011c89"
  },
  {
    "url": "/2021//topics/hk-independent-bus-eta-ad-free-app-bus-estimated-time-arrival/index.html",
    "revision": "6cdca409490d744ae5d96cbdb7ebce6a"
  },
  {
    "url": "/2021//topics/how-rt-thread-iot-os-begins-and-grows/index.html",
    "revision": "22766d3713769c4e77136ed1f61a3751"
  },
  {
    "url": "/2021//topics/i-write-my-own-web-desktop-os-3-years-and-what-it-looks-now/index.html",
    "revision": "6191702627f8b801d0f913cb01f3bb43"
  },
  {
    "url": "/2021//topics/index.html",
    "revision": "e851c7a11531188e35d5868d421f8fcb"
  },
  {
    "url": "/2021//topics/integrating-ansible-automation-and-chatops/index.html",
    "revision": "84f9e63e2268c7ea764952d404b826ea"
  },
  {
    "url": "/2021//topics/introducing-quarkus-supersonic-subatomic-java-framework/index.html",
    "revision": "5c814783cce3dffc493bbbf6b5cfacb2"
  },
  {
    "url": "/2021//topics/open-core-open-opportunities/index.html",
    "revision": "ab88832df57744e771ce52d9c68dfa98"
  },
  {
    "url": "/2021//topics/open-source-movement-hollywood-impacting-motion-picture-industry-hong-kongs-digital-ink/index.html",
    "revision": "c4856de9547d2be6f2c81b53214408a9"
  },
  {
    "url": "/2021//topics/sneak-preview-mysql-operator-kubernetes/index.html",
    "revision": "f2eeb6a7b207ed9acb1c2f2a3965af32"
  },
  {
    "url": "/2021//topics/speed-your-analytics-projects-using-delta-lake-azure/index.html",
    "revision": "d82ac8849208e000a43e89e53960218d"
  },
  {
    "url": "/2021//topics/your-mysql-genuine-mysql/index.html",
    "revision": "ca45c5f79925c07070bbafdbed1ae306"
  },
  {
    "url": "/2021//about/organizers/",
    "revision": "1010a719042c71c8d8f0ea6d54804986"
  },
  {
    "url": "/2021//about/volunteers/",
    "revision": "2f07746349e7f8147534aee3615d6f9a"
  },
  {
    "url": "/2021//cfc/",
    "revision": "69473b82010a615b1e63430d1a154499"
  },
  {
    "url": "/2021//cfp/",
    "revision": "6de7eea04fc5d38121e415461564d7b3"
  },
  {
    "url": "/2021//",
    "revision": "cd9c647ead27210eb47ee52aa1381adf"
  },
  {
    "url": "/2021//sponsors/",
    "revision": "33bdc965c94e4d02a6414f3d1fc9f2b0"
  },
  {
    "url": "/2021//timetable/",
    "revision": "1126c102572e90ea5ac3ea753c610bba"
  },
  {
    "url": "/2021//topics/beifenxianggangjilulishiqukuailiancundangjishudeyingyong/",
    "revision": "3faa4444767794461f75ae260e003b70"
  },
  {
    "url": "/2021//topics/beyond-cuda-gpu-accelerated-python-cross-vendor-graphics-cards-vulkan-kompute/",
    "revision": "e8fc85f6d50ceabbc00970ecea45e989"
  },
  {
    "url": "/2021//topics/bof-raspberry-pi-400-compute-module-4-raspberry-pi-pico-and-more-lets-discuss-how-make-your/",
    "revision": "cf9fdc315123857942da45bec92d5615"
  },
  {
    "url": "/2021//topics/building-online-technical-community-era-covid-19/",
    "revision": "1e7c99825eff978dc8011237b881b1e7"
  },
  {
    "url": "/2021//topics/drug-icon-ccyaowutubiao-creative-commons/",
    "revision": "82f5e1bbc22d40a23436a8ad0001b75e"
  },
  {
    "url": "/2021//topics/embedded-linux-risc-v-beaglev-yocto-and-openembedded/",
    "revision": "d62098e090c4072f3cd8bb4ff0607213"
  },
  {
    "url": "/2021//topics/enhance-grafana-performance-mysql-database-service-and-heatwave/",
    "revision": "a716d66cc2df193f24675121c3dead4a"
  },
  {
    "url": "/2021//topics/flutterkaifalinux-desktop-application/",
    "revision": "9a5d26e6c784912e33d6917943011c89"
  },
  {
    "url": "/2021//topics/hk-independent-bus-eta-ad-free-app-bus-estimated-time-arrival/",
    "revision": "6cdca409490d744ae5d96cbdb7ebce6a"
  },
  {
    "url": "/2021//topics/how-rt-thread-iot-os-begins-and-grows/",
    "revision": "22766d3713769c4e77136ed1f61a3751"
  },
  {
    "url": "/2021//topics/i-write-my-own-web-desktop-os-3-years-and-what-it-looks-now/",
    "revision": "6191702627f8b801d0f913cb01f3bb43"
  },
  {
    "url": "/2021//topics/",
    "revision": "e851c7a11531188e35d5868d421f8fcb"
  },
  {
    "url": "/2021//topics/integrating-ansible-automation-and-chatops/",
    "revision": "84f9e63e2268c7ea764952d404b826ea"
  },
  {
    "url": "/2021//topics/introducing-quarkus-supersonic-subatomic-java-framework/",
    "revision": "5c814783cce3dffc493bbbf6b5cfacb2"
  },
  {
    "url": "/2021//topics/open-core-open-opportunities/",
    "revision": "ab88832df57744e771ce52d9c68dfa98"
  },
  {
    "url": "/2021//topics/open-source-movement-hollywood-impacting-motion-picture-industry-hong-kongs-digital-ink/",
    "revision": "c4856de9547d2be6f2c81b53214408a9"
  },
  {
    "url": "/2021//topics/sneak-preview-mysql-operator-kubernetes/",
    "revision": "f2eeb6a7b207ed9acb1c2f2a3965af32"
  },
  {
    "url": "/2021//topics/speed-your-analytics-projects-using-delta-lake-azure/",
    "revision": "d82ac8849208e000a43e89e53960218d"
  },
  {
    "url": "/2021//topics/your-mysql-genuine-mysql/",
    "revision": "ca45c5f79925c07070bbafdbed1ae306"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2021//", new workbox.strategies.NetworkFirst(), 'GET');
