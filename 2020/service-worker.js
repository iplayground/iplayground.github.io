"use strict";var precacheConfig=[["/2020/index.html","5e9fcf7736d49696aa032a3f5809dfcd"],["/2020/static/css/main.6699e57b.css","f5b8b78fb2133e94ca0ee5419591fc56"],["/2020/static/js/main.0fb58168.js","cbc2e166ec0426e21865e9c84193bb55"],["/2020/static/media/2019Day1.b31c370e.JPG","b31c370ef5b51c047bd84baf61e96bf4"],["/2020/static/media/2019Day2.0e213121.JPG","0e213121692cb03ad1ee76d7ea4bf431"],["/2020/static/media/Li-Heng-Hsu.e056a383.png","e056a383e00b0fe3c942f6f5d516d293"],["/2020/static/media/MarkFly.66caf2da.png","66caf2da7acd620bc7a6bd57b11b12e1"],["/2020/static/media/Mars.176fed79.png","176fed7912dd112533b5f65e92b7eb38"],["/2020/static/media/chiaoteNi.c00fdd34.png","c00fdd3442dc6e0d98acda80f85dab89"],["/2020/static/media/fan.cd5b2acf.png","cd5b2acfb3190dbd2d2b53d1ac1920b9"],["/2020/static/media/iplayground_logo_ball.ccd551ba.png","ccd551ba78045b51e1036b40438e6023"],["/2020/static/media/iplayground_logo_diamond.d0715efd.png","d0715efd55ba4724419c20fd89027cf2"],["/2020/static/media/iplayground_logo_stairs.12f19c32.png","12f19c325f5ff2c32c13791bd0f35ae7"],["/2020/static/media/jeffLin_avatar.816ba05d.png","816ba05dc7a68146bdf2b2904b009e15"],["/2020/static/media/kishikawakatsumi.e50fb0aa.png","e50fb0aa95115f1fdbf1a3595f9d9c71"],["/2020/static/media/logo_5xruby.tw.d31ab51a.png","d31ab51ae93801c15b2b569ef1e11cb6"],["/2020/static/media/logo_KKCO.5029e270.png","5029e27038ecab6c06bfa72983b1162f"],["/2020/static/media/logo_catchplay.53864291.png","5386429112444c5ab108c85316db5c95"],["/2020/static/media/logo_cocoaheads_taipei.04bde3ff.png","04bde3ff74c544e0a126cfa3a94307a5"],["/2020/static/media/logo_coss_system.4728192d.png","4728192da16fdf2eb1b70932b0282454"],["/2020/static/media/logo_dcard.dd5423a9.png","dd5423a94b0b99c472b985a2c14c18c8"],["/2020/static/media/logo_esun.412fc611.png","412fc611329bdfbd60da1f6938b64a59"],["/2020/static/media/logo_grindr.507c8db5.png","507c8db5be285c904d27b1ddcf858717"],["/2020/static/media/logo_iplayground.da8f6e68.png","da8f6e688df7c831e213e0c5390416b4"],["/2020/static/media/logo_keyxentic.185b57fe.png","185b57fe147194909ef03782e8d8c302"],["/2020/static/media/logo_pic-collage.060d67d7.png","060d67d71ebcbdbf25fb588f5a748ec7"],["/2020/static/media/logo_swift_girls.e221c42c.png","e221c42c05790a392b97ad4ee8fd66aa"],["/2020/static/media/logo_twdc.2fc9fe32.png","2fc9fe327d44695dc4ee76fe76317823"],["/2020/static/media/meme.705091af.png","705091af9edca50f6a3cfb145762a758"],["/2020/static/media/superbil.3ddef241.png","3ddef241854ac7383bd927aadaffbe9c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/2020/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});