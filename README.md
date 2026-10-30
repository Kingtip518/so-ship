# Sổ Ship

Sổ ghi đơn, tiền thu hộ và đối soát cuối ngày cho shipper tự do.
Miễn phí, không cần đăng ký, không có máy chủ: dữ liệu nằm ngay trên điện thoại người dùng.

## Các tệp trong thư mục

| Tệp | Dùng để làm gì |
|---|---|
| `index.html` | Toàn bộ ứng dụng |
| `manifest.webmanifest` | Cho phép cài lên màn hình điện thoại như ứng dụng |
| `sw.js` | Lưu ứng dụng vào máy để mở được cả khi mất sóng |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` | Biểu tượng ứng dụng |

## Đưa lên GitHub Pages (làm một lần)

1. Vào github.com, đăng nhập tài khoản `Kingtip518`, bấm **New repository**, đặt tên `so-ship`, chọn **Public**, bấm **Create repository**.
2. Trong kho vừa tạo, bấm **uploading an existing file**, kéo thả tất cả các tệp trong thư mục này vào (không cần tệp README nếu không muốn), bấm **Commit changes**.
3. Vào **Settings → Pages**. Ở mục **Branch** chọn `main`, thư mục `/ (root)`, bấm **Save**.
4. Đợi 1–2 phút, web chạy ở địa chỉ: **https://kingtip518.github.io/so-ship/**

## Khi sửa và đưa bản mới lên

Mở `sw.js`, tăng số phiên bản ở dòng `const PHIEN_BAN = 'so-ship-v1';` (ví dụ thành `so-ship-v2`), rồi tải lên cùng `index.html`.
Nếu không tăng số này, điện thoại đã cài có thể vẫn chạy bản cũ thêm một lần mở.

## Lưu ý cho người dùng

- Dữ liệu chỉ nằm trên điện thoại đang dùng. Đổi máy hoặc xóa dữ liệu trình duyệt là mất, nên thỉnh thoảng vào **Thống kê → Sao chép bản sao lưu** rồi dán vào Zalo "Cloud của tôi".
- Cài lên màn hình: Android bấm **Cài ngay** trên dải thông báo đầu trang; iPhone bấm nút **Chia sẻ** trong Safari rồi chọn **Thêm vào MH chính**.
