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
    "revision": "1dff3f5ea37ef3aeb49cb479aa80564f"
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
    "url": "/2021//55236a4e41f192425191.js",
    "revision": "b2fb2cdc45b2672993ee95f8d528c6c5"
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
    "url": "/2021//6055b25f10a496cca9b0.js",
    "revision": "c7dce8798417e69fd3ca740d1424338d"
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
    "url": "/2021//a135fdcb4e6d1ea140a7.css",
    "revision": "ab84e9c80ac424f2dd483c85db085029"
  },
  {
    "url": "/2021//about/organizers/index.html",
    "revision": "310500f331a47a15988c5d47f2d50ba6"
  },
  {
    "url": "/2021//about/volunteers/index.html",
    "revision": "466f238163c264b75e8e253847cd23c6"
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
    "url": "/2021//bf8dac443ce985f372eb.js",
    "revision": "22b2c41b14842cb697d21f36437ab7d3"
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
    "revision": "f4853b57abe1be0d4ee90f202c859eab"
  },
  {
    "url": "/2021//cfp/index.html",
    "revision": "eb93ca882d71a62b9b33f6ab8b6833f6"
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
    "url": "/2021//img/953d2aa.jpg",
    "revision": "953d2aab6980005e12cecd0808d12597"
  },
  {
    "url": "/2021//img/eb90f7f.png",
    "revision": "eb90f7fbc71ca73d9d3ab9d57657bbc2"
  },
  {
    "url": "/2021//index.html",
    "revision": "11178092cc82c550412953e2bbf472dd"
  },
  {
    "url": "/2021//sponsors/index.html",
    "revision": "cabdcee9c4fe267328b89a1fd02e5c68"
  },
  {
    "url": "/2021//timetable/index.html",
    "revision": "5d974192eb16808bc0d16d68a7402afa"
  },
  {
    "url": "/2021//topics/beifenxianggangjilulishiqukuailiancundangjishudeyingyong/index.html",
    "revision": "2d8868d01bc4104d64d153ed6a1c1a51"
  },
  {
    "url": "/2021//topics/beyond-cuda-gpu-accelerated-python-cross-vendor-graphics-cards-vulkan-kompute/index.html",
    "revision": "3e64085418a963b4d536cee6dd9a004b"
  },
  {
    "url": "/2021//topics/bof-raspberry-pi-400-compute-module-4-raspberry-pi-pico-and-more-lets-discuss-how-make-your/index.html",
    "revision": "20854f40f62bfdb91f5b267bdba93334"
  },
  {
    "url": "/2021//topics/build-online-technical-community-pandemic-era/index.html",
    "revision": "f9f5d8bf1a4bda15e46451dda5fe913f"
  },
  {
    "url": "/2021//topics/drug-icon-ccyaowutubiao-creative-commons/index.html",
    "revision": "65cdfc8d0cd3662bd238a32608d4c000"
  },
  {
    "url": "/2021//topics/embedded-linux-risc-v-beaglev-yocto-and-openembedded/index.html",
    "revision": "011661e9262292ebf65d5647ee2fc149"
  },
  {
    "url": "/2021//topics/enhance-grafana-performance-mysql-database-service-and-heatwave/index.html",
    "revision": "14b6d272333308b4f25c829d163ca57d"
  },
  {
    "url": "/2021//topics/flutterkaifalinux-desktop-application/index.html",
    "revision": "34d8bd2e6099d47ba21d40ad5ba87404"
  },
  {
    "url": "/2021//topics/hk-independent-bus-eta-ad-free-app-bus-estimated-time-arrival/index.html",
    "revision": "05d4b794c84cb935e5fb80733cf568a6"
  },
  {
    "url": "/2021//topics/how-rt-thread-iot-os-begins-and-grows/index.html",
    "revision": "f1b4d92c4125180aa42dcc22601019b7"
  },
  {
    "url": "/2021//topics/i-write-my-own-web-desktop-os-3-years-and-what-it-looks-now/index.html",
    "revision": "22d23033df8b31bf3c1227139c325b4b"
  },
  {
    "url": "/2021//topics/index.html",
    "revision": "0c0912e91fdcf3bbfafa2c7814162661"
  },
  {
    "url": "/2021//topics/introducing-quarkus-supersonic-subatomic-java-framework/index.html",
    "revision": "02944bcd52a63367fa8840467b26fa11"
  },
  {
    "url": "/2021//topics/open-core-open-opportunities/index.html",
    "revision": "e15f73224c4c805632a3771158a006fe"
  },
  {
    "url": "/2021//topics/open-source-movement-hollywood-impacting-motion-picture-industry-hong-kongs-digital-ink/index.html",
    "revision": "b0866fc4eda28e5d0584e97b90497784"
  },
  {
    "url": "/2021//topics/sneak-preview-mysql-operator-kubernetes/index.html",
    "revision": "1997f8b33abee313a9b9d95176efed14"
  },
  {
    "url": "/2021//topics/your-mysql-genuine-mysql/index.html",
    "revision": "0c4bbb631282dfbad7a5e505b18f54ed"
  },
  {
    "url": "/2021//about/organizers/",
    "revision": "310500f331a47a15988c5d47f2d50ba6"
  },
  {
    "url": "/2021//about/volunteers/",
    "revision": "466f238163c264b75e8e253847cd23c6"
  },
  {
    "url": "/2021//cfc/",
    "revision": "f4853b57abe1be0d4ee90f202c859eab"
  },
  {
    "url": "/2021//cfp/",
    "revision": "eb93ca882d71a62b9b33f6ab8b6833f6"
  },
  {
    "url": "/2021//",
    "revision": "11178092cc82c550412953e2bbf472dd"
  },
  {
    "url": "/2021//sponsors/",
    "revision": "cabdcee9c4fe267328b89a1fd02e5c68"
  },
  {
    "url": "/2021//timetable/",
    "revision": "5d974192eb16808bc0d16d68a7402afa"
  },
  {
    "url": "/2021//topics/beifenxianggangjilulishiqukuailiancundangjishudeyingyong/",
    "revision": "2d8868d01bc4104d64d153ed6a1c1a51"
  },
  {
    "url": "/2021//topics/beyond-cuda-gpu-accelerated-python-cross-vendor-graphics-cards-vulkan-kompute/",
    "revision": "3e64085418a963b4d536cee6dd9a004b"
  },
  {
    "url": "/2021//topics/bof-raspberry-pi-400-compute-module-4-raspberry-pi-pico-and-more-lets-discuss-how-make-your/",
    "revision": "20854f40f62bfdb91f5b267bdba93334"
  },
  {
    "url": "/2021//topics/build-online-technical-community-pandemic-era/",
    "revision": "f9f5d8bf1a4bda15e46451dda5fe913f"
  },
  {
    "url": "/2021//topics/drug-icon-ccyaowutubiao-creative-commons/",
    "revision": "65cdfc8d0cd3662bd238a32608d4c000"
  },
  {
    "url": "/2021//topics/embedded-linux-risc-v-beaglev-yocto-and-openembedded/",
    "revision": "011661e9262292ebf65d5647ee2fc149"
  },
  {
    "url": "/2021//topics/enhance-grafana-performance-mysql-database-service-and-heatwave/",
    "revision": "14b6d272333308b4f25c829d163ca57d"
  },
  {
    "url": "/2021//topics/flutterkaifalinux-desktop-application/",
    "revision": "34d8bd2e6099d47ba21d40ad5ba87404"
  },
  {
    "url": "/2021//topics/hk-independent-bus-eta-ad-free-app-bus-estimated-time-arrival/",
    "revision": "05d4b794c84cb935e5fb80733cf568a6"
  },
  {
    "url": "/2021//topics/how-rt-thread-iot-os-begins-and-grows/",
    "revision": "f1b4d92c4125180aa42dcc22601019b7"
  },
  {
    "url": "/2021//topics/i-write-my-own-web-desktop-os-3-years-and-what-it-looks-now/",
    "revision": "22d23033df8b31bf3c1227139c325b4b"
  },
  {
    "url": "/2021//topics/",
    "revision": "0c0912e91fdcf3bbfafa2c7814162661"
  },
  {
    "url": "/2021//topics/introducing-quarkus-supersonic-subatomic-java-framework/",
    "revision": "02944bcd52a63367fa8840467b26fa11"
  },
  {
    "url": "/2021//topics/open-core-open-opportunities/",
    "revision": "e15f73224c4c805632a3771158a006fe"
  },
  {
    "url": "/2021//topics/open-source-movement-hollywood-impacting-motion-picture-industry-hong-kongs-digital-ink/",
    "revision": "b0866fc4eda28e5d0584e97b90497784"
  },
  {
    "url": "/2021//topics/sneak-preview-mysql-operator-kubernetes/",
    "revision": "1997f8b33abee313a9b9d95176efed14"
  },
  {
    "url": "/2021//topics/your-mysql-genuine-mysql/",
    "revision": "0c4bbb631282dfbad7a5e505b18f54ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/2021//", new workbox.strategies.NetworkFirst(), 'GET');
