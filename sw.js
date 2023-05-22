// Cache name
const CACHE_NAME = "pwa-sample-caches-v2.1.6";
// Cache targets
const urlsToCache = ["/", "/index.html", "/css/index.css", "/js/index.js"];

self.addEventListener("install", function (event) {
  return install(event);
});

self.addEventListener("message", function (event) {
  return install(event);
});

const install = (event) => {
  return event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        urlsToCache.map((url) => {
          return fetch(new Request(url)).then((response) => {
            return cache.put(url, response);
          });
        });
      })
      .catch(function (err) {
        console.log(err);
      })
  );
};

self.addEventListener("activate", function (event) {
  // waitUntil()でイベントの完了を処理が成功するまで遅延させる
  event.waitUntil(
    // cacheStorageの中の全てのcacheを確認する
    caches.keys().then(function (cacheKeys) {
      return Promise.all(
        cacheKeys
          .filter(function (cacheKey) {
            // キー名を確認してキャッシュ名とバージョンを確認する
            const [cacheName, cacheVersion] = cacheKey.split(":");
            // 同じキャッシュ名でバージョンが異なるものを削除対象とする
            return cacheName == CACHE_NAME && cacheVersion != CACHE_VERSION;
          })
          .map(function (cacheKey) {
            // 削除対象としたキーのcacheを全てcacheStorageから削除する
            return caches.delete(cacheKey);
          })
      );
    })
  );
});
