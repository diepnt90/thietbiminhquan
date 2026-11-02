# Thiết bị Minh Quân — Bản nháp test (site tĩnh)

Bản nháp giao diện mới cho thietbiminhquan.com, làm theo phạm vi đã chốt:
- Chỉ giới thiệu sản phẩm, không đăng nhập, đăng ký, tin tức, video, không thanh toán online.
- Giá và giỏ hàng chỉ để xem / gom sản phẩm quan tâm; khách đặt hàng bằng cách gọi điện hoặc Zalo.
- Banner, danh mục, tên và ảnh sản phẩm; mô tả ngắn gọn theo khung SEO/Adwords.
- Footer nhấn mạnh địa chỉ và liên hệ Hà Nội, TP.HCM.
- Có mục Giới thiệu, Chính sách & Hỗ trợ. Chat trực tiếp gác lại, chưa gắn widget chat.

## Đây là bản nháp, chưa phải toàn bộ catalogue

- Danh mục lấy từ sidebar site cũ.
- Sản phẩm trong bản này là các sản phẩm tiêu biểu, trong đó chỉ có Máy GPS RTK GeoMate SG7 là có giá đã kiểm chứng từ trang sản phẩm mẫu (83.000.000 đ); các sản phẩm còn lại để “Liên hệ”.
- Ảnh sản phẩm hiện là minh họa (ô màu + chữ viết tắt), chưa phải ảnh thật. Khi lấy đủ catalogue cần thay ảnh, giá, mã và mô tả thật cho từng sản phẩm.
- Chính sách bảo hành, vận chuyển, đổi trả trong bản này là khung chung, chưa điền số liệu cụ thể — cần xác nhận với cửa hàng trước khi chạy chính thức.
- Nhãn “BẢN NHÁP TEST” ở đầu trang cần gỡ trước khi chạy chính thức.

## Chạy thử local

Mở `public/index.html` bằng trình duyệt, hoặc chạy server tĩnh trỏ vào thư mục `public`.

## Deploy test lên Cloudflare Pages

1. Tạo project Pages mới, chọn Connect to Git, repo `diepnt90/thietbiminhquan`, nhánh `main`.
2. Framework preset: None. Build command: để trống. Build output directory: `public`.
3. Deploy xong, test trên domain Pages trước. Chưa trỏ domain `thietbiminhquan.com` sang bản này cho tới khi duyệt xong.

## Liên hệ trên site

- Hà Nội: Số 230 Đường Tam Trinh, P. Yên Sở, Q. Hoàng Mai — 0932.077.059
- TP.HCM: Số 43/1 Đường Ngô Bệ, P.13, Q. Tân Bình — 0982.797.860
- Zalo: https://zalo.me/0982797860
