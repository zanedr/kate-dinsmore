"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/kate-dinsmore/index.html","f6ffc86e4d08bcbd1dcda7adad865ae0"],["/kate-dinsmore/static/css/main.c93fbf8a.css","7e1c3d53d2d58445c731841aaf1338c5"],["/kate-dinsmore/static/js/main.bf58a2ae.js","281bc995d54950209ecbd87a97251aca"],["/kate-dinsmore/static/media/facebook.aa19a890.svg","aa19a890ed532e96ae14a9f43c47fd5f"],["/kate-dinsmore/static/media/facebookwhite.dedc0190.svg","dedc01909ab78ddbfc76ef108a668fa8"],["/kate-dinsmore/static/media/instagram.39a26959.svg","39a26959b8c252f24f9af31d2e05c1db"],["/kate-dinsmore/static/media/instagramwhite.1c0000aa.svg","1c0000aa2364d2d547ff8c664be72488"],["/kate-dinsmore/static/media/kate2.90869b81.png","90869b819e950011807839d8e9b876c9"],["/kate-dinsmore/static/media/katekatekate.a03e691b.jpg","a03e691b3ffa12c7029447cbdb15e1cc"],["/kate-dinsmore/static/media/kieldrum.373bbea1.jpg","373bbea13e1d9697b9104fe7c1e5323f"],["/kate-dinsmore/static/media/kielflask.33e25998.jpg","33e2599881069a9b57e3bcb6ccf29b4e"],["/kate-dinsmore/static/media/mail.e481ac64.svg","e481ac64566077803105cabb0edf3aaf"],["/kate-dinsmore/static/media/twitter.0f03fe97.svg","0f03fe97195c85196a98015d615d63cb"],["/kate-dinsmore/static/media/twitterwhite.447540e1.svg","447540e107267c8406e68fcd09c780ec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/kate-dinsmore/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});