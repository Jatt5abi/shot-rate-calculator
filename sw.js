const CACHE = "src-v3.1";
const urlsToCache = [
 "/",
 "/index.html",
 "/manifest.json",
 "/icon.png",
];

self.addEventListener("install", (event) => {
 event.waitUntil(
 caches.open(CACHE).then((cache) => {
 return cache.addAll(urlsToCache).catch((err) => console.log("Cache add error:", err));
 })
 );
 self.skipWaiting();
});

self.addEventListener("activate", (event) => {
 event.waitUntil(
 caches.keys().then((cacheNames) => {
 return Promise.all(
 cacheNames.map((cacheName) => {
 if (cacheName !== CACHE) return caches.delete(cacheName);
 })
 );
 })
 );
 self.clients.claim();
});

self.addEventListener("fetch", (event) => {
 if (event.request.method !== "GET") return;
 event.respondWith(
 caches.match(event.request).then((response) => {
 if (response) return response;
 return fetch(event.request).then((response) => {
 if (!response || response.status !== 200 || response.type === "error") return response;
 const resp = response.clone();
 caches.open(CACHE).then((cache) => {
 cache.put(event.request, resp);
 });
 return response;
 }).catch(() => {
 return caches.match("/index.html");
 });
 })
 );
});
