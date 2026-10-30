// Sổ Ship – cho phép mở ứng dụng khi mất sóng.
// Khi sửa index.html, tăng số phiên bản dưới đây để máy người dùng nhận bản mới.
const PHIEN_BAN = 'so-ship-v5';
const TEP_CAN_LUU = [
  './', './index.html', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './apple-touch-icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(PHIEN_BAN).then(c => Promise.all(TEP_CAN_LUU.map(u => c.add(u).catch(() => {})))));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== PHIEN_BAN).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const laTrang = e.request.mode === 'navigate';
  if (laTrang) {
    // Trang chính: lấy bản mới trên mạng, mất sóng thì dùng bản đã lưu
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(PHIEN_BAN).then(x => x.put('./index.html', c)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
    if (r.ok && (e.request.url.startsWith(self.location.origin) || e.request.url.includes('cdnjs') || e.request.url.includes('fonts.g') || e.request.url.includes('cdn.jsdelivr.net') || e.request.url.includes('unpkg.com'))) {
      const c = r.clone(); caches.open(PHIEN_BAN).then(x => x.put(e.request, c));
    }
    return r;
  }).catch(() => hit)));
});
