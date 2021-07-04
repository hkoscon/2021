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
    "url": "/2021//09afc8b55b0a0b198705.js",
    "revision": "126b8a25c38c4fb7a01e37a95d00d7ee"
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
    "revision": "cd2c35e697961570b9fe997cb32b4b69"
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
    "url": "/2021//385e5029d579baba8cb2.js",
    "revision": "6ed5a595e2400c77e43bdac73c2cb0fd"
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
    "url": "/2021//54e41e47003f2ceaaf1e.js",
    "revision": "be8d1fb2f76a8aab661169d6c487294f"
  },
  {
    "url": "/2021//5d0f711a673f3bb3021f.css",
    "revision": "33c5ac4647794a2b2151cedbc8697921"
  },
  {
    "url": "/2021//5fbf8ba68c8acfae6234.js",
    "revision": "53ce4ffd1c8971f84528f9fa278c09ac"
  },
  {
    "url": "/2021//62e4aa1e084a7b374c50.js",
    "revision": "af5310d780495d12c6bd897c564c3905"
  },
  {
    "url": "/2021//6b45955bbae5ae8152dc.js",
    "revision": "36eb333869c454ea4b99e98c7a6d2bc8"
  },
  {
    "url": "/2021//6bcbe5205aec99664bbc.css",
    "revision": "7fbf42c8240a9221b921fcfa5be1c28a"
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
    "url": "/2021//9bc75cc0789d28248192.js",
    "revision": "19392d2c1d127ac856106341da5f20f5"
  },
  {
    "url": "/2021//9f0e8f1d03e220063753.js",
    "revision": "cc7ee9dd2d223354c59249d0e67327cb"
  },
  {
    "url": "/2021//a135fdcb4e6d1ea140a7.css",
    "revision": "ab84e9c80ac424f2dd483c85db085029"
  },
  {
    "url": "/2021//about/organizers/index.html",
    "revision": "5dcd63452c6d71f154e172ed5b786430"
  },
  {
    "url": "/2021//about/volunteers/index.html",
    "revision": "6dfc0135753cfe2b7c272863288854f2"
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
    "revision": "305a919c18fb18314a2177da0406dabe"
  },
  {
    "url": "/2021//cfp/index.html",
    "revision": "bacb7f82cec8975d8877869a053af851"
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
    "url": "/2021//ea2f1e9ad37cc24fd937.js",
    "revision": "b7b428b07d2c0334e39a61a014b3ae80"
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
    "revision": "84132da9b65c45a05f5ccc4d415d2d87"
  },
  {
    "url": "/2021//sponsors/index.html",
    "revision": "b7750adb460dc2dbccae3a45fbcc2a07"
  },
  {
    "url": "/2021//timetable/index.html",
    "revision": "6d6543bbfddc30267828d45e72be1dc5"
  },
  {
    "url": "/2021//topics/beifenxianggangjilulishiqukuailiancundangjishudeyingyong/index.html",
    "revision": "87ba9ae8eee941860eb48d5650e1ace2"
  },
  {
    "url": "/2021//topics/beyond-cuda-gpu-accelerated-python-cross-vendor-graphics-cards-vulkan-kompute/index.html",
    "revision": "ec0b498817e9858e2d2f9969c0f49c4e"
  },
  {
    "url": "/2021//topics/bof-raspberry-pi-400-compute-module-4-raspberry-pi-pico-and-more-lets-discuss-how-make-your/index.html",
    "revision": "f444476308a67ec14ed539e6ba6b76e7"
  },
  {
    "url": "/2021//topics/build-online-technical-community-pandemic-era/index.html",
    "revision": "fcf34ebbcef4a1463ea4cff9f15d1a23"
  },
  {
    "url": "/2021//topics/drug-icon-ccyaowutubiao-creative-commons/index.html",
    "revision": "c0312693720eb0c10f2e09895cdcad8c"
  },
  {
    "url": "/2021//topics/embedded-linux-risc-v-beaglev-yocto-and-openembedded/index.html",
    "revision": "6e38ecd0ccb2bf22558cd1d818c5dff1"
  },
  {
    "url": "/2021//topics/enhance-grafana-performance-mysql-database-service-and-heatwave/index.html",
    "revision": "3eabe6402209cc91ec614b3996f7db6d"
  },
  {
    "url": "/2021//topics/flutterkaifalinux-desktop-application/index.html",
    "revision": "5e1f85f6025626ae07cd2841fb3aca42"
  },
  {
    "url": "/2021//topics/hk-independent-bus-eta-ad-free-app-bus-estimated-time-arrival/index.html",
    "revision": "c6bcf3d787435cbc08a928d9bc6879b6"
  },
  {
    "url": "/2021//topics/how-rt-thread-iot-os-begins-and-grows/index.html",
    "revision": "1f5d2cb2a2a46784549b57efecdee30b"
  },
  {
    "url": "/2021//topics/i-write-my-own-web-desktop-os-3-years-and-what-it-looks-now/index.html",
    "revision": "193dc3782ad7b76d52f5128680e1356b"
  },
  {
    "url": "/2021//topics/index.html",
    "revision": "30922ed38bc956d241c162c172d189b3"
  },
  {
    "url": "/2021//topics/integrating-ansible-automation-and-chatops/index.html",
    "revision": "b86282469feec4a5588b069c4671709a"
  },
  {
    "url": "/2021//topics/introducing-quarkus-supersonic-subatomic-java-framework/index.html",
    "revision": "9a44e354ced8fcd77c40fb074ab11e49"
  },
  {
    "url": "/2021//topics/open-core-open-opportunities/index.html",
    "revision": "f634159b4ad6ff2ec2166b160336941a"
  },
  {
    "url": "/2021//topics/open-source-movement-hollywood-impacting-motion-picture-industry-hong-kongs-digital-ink/index.html",
    "revision": "92c75440a8c78a4502fb8029277a66e5"
  },
  {
    "url": "/2021//topics/sneak-preview-mysql-operator-kubernetes/index.html",
    "revision": "a4dc6300568ccb1d05768fbb3dc74ea3"
  },
  {
    "url": "/2021//topics/your-mysql-genuine-mysql/index.html",
    "revision": "17dfdb7a0ca1332c66fa972a440bd310"
  },
  {
    "url": "/2021//about/organizers/",
    "revision": "5dcd63452c6d71f154e172ed5b786430"
  },
  {
    "url": "/2021//about/volunteers/",
    "revision": "6dfc0135753cfe2b7c272863288854f2"
  },
  {
    "url": "/2021//cfc/",
    "revision": "305a919c18fb18314a2177da0406dabe"
  },
  {
    "url": "/2021//cfp/",
    "revision": "bacb7f82cec8975d8877869a053af851"
  },
  {
    "url": "/2021//",
    "revision": "84132da9b65c45a05f5ccc4d415d2d87"
  },
  {
    "url": "/2021//sponsors/",
    "revision": "b7750adb460dc2dbccae3a45fbcc2a07"
  },
  {
    "url": "/2021//timetable/",
    "revision": "6d6543bbfddc30267828d45e72be1dc5"
  },
  {
    "url": "/2021//topics/beifenxianggangjilulishiqukuailiancundangjishudeyingyong/",
    "revision": "87ba9ae8eee941860eb48d5650e1ace2"
  },
  {
    "url": "/2021//topics/beyond-cuda-gpu-accelerated-python-cross-vendor-graphics-cards-vulkan-kompute/",
    "revision": "ec0b498817e9858e2d2f9969c0f49c4e"
  },
  {
    "url": "/2021//topics/bof-raspberry-pi-400-compute-module-4-raspberry-pi-pico-and-more-lets-discuss-how-make-your/",
    "revision": "f444476308a67ec14ed539e6ba6b76e7"
  },
  {
    "url": "/2021//topics/build-online-technical-community-pandemic-era/",
    "revision": "fcf34ebbcef4a1463ea4cff9f15d1a23"
  },
  {
    "url": "/2021//topics/drug-icon-ccyaowutubiao-creative-commons/",
    "revision": "c0312693720eb0c10f2e09895cdcad8c"
  },
  {
    "url": "/2021//topics/embedded-linux-risc-v-beaglev-yocto-and-openembedded/",
    "revision": "6e38ecd0ccb2bf22558cd1d818c5dff1"
  },
  {
    "url": "/2021//topics/enhance-grafana-performance-mysql-database-service-and-heatwave/",
    "revision": "3eabe6402209cc91ec614b3996f7db6d"
  },
  {
    "url": "/2021//topics/flutterkaifalinux-desktop-application/",
    "revision": "5e1f85f6025626ae07cd2841fb3aca42"
  },
  {
    "url": "/2021//topics/hk-independent-bus-eta-ad-free-app-bus-estimated-time-arrival/",
    "revision": "c6bcf3d787435cbc08a928d9bc6879b6"
  },
  {
    "url": "/2021//topics/how-rt-thread-iot-os-begins-and-grows/",
    "revision": "1f5d2cb2a2a46784549b57efecdee30b"
  },
  {
    "url": "/2021//topics/i-write-my-own-web-desktop-os-3-years-and-what-it-looks-now/",
    "revision": "193dc3782ad7b76d52f5128680e1356b"
  },
  {
    "url": "/2021//topics/",
    "revision": "30922ed38bc956d241c162c172d189b3"
  },
  {
    "url": "/2021//topics/integrating-ansible-automation-and-chatops/",
    "revision": "b86282469feec4a5588b069c4671709a"
  },
  {
    "url": "/2021//topics/introducing-quarkus-supersonic-subatomic-java-framework/",
    "revision": "9a44e354ced8fcd77c40fb074ab11e49"
  },
  {
    "url": "/2021//topics/open-core-open-opportunities/",
    "revision": "f634159b4ad6ff2ec2166b160336941a"
  },
  {
    "url": "/2021//topics/open-source-movement-hollywood-impacting-motion-picture-industry-hong-kongs-digital-ink/",
    "revision": "92c75440a8c78a4502fb8029277a66e5"
  },
  {
    "url": "/2021//topics/sneak-preview-mysql-operator-kubernetes/",
    "revision": "a4dc6300568ccb1d05768fbb3dc74ea3"
  },
  {
    "url": "/2021//topics/your-mysql-genuine-mysql/",
    "revision": "17dfdb7a0ca1332c66fa972a440bd310"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2021//", new workbox.strategies.NetworkFirst(), 'GET');
