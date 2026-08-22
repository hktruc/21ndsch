# Rèn Thân — Hành trình 21 ngày đọc sách chuyển hóa K03

Landing page chương trình Rèn Thân K03, trình bày tinh thần Đúng–Đủ–Đều, cơ chế ghi nhận, Giấy chứng nhận, 03 phần quà và module hướng dẫn Strava cho người mới.

## Mở trên máy

Không cần cài dependency hay chạy build.

1. Clone repository.
2. Mở `index.html` trực tiếp bằng trình duyệt; hoặc dùng một static server bất kỳ nếu muốn kiểm tra gần giống GitHub Pages.

## Cấu trúc

```text
index.html                     Nội dung và cấu trúc trang
css/style.css                  Giao diện mobile-first
js/app.js                      OS selector, ảnh, lightbox, progress
assets/screenshots/android/    Screenshot Android đã xử lý riêng tư
assets/screenshots/ios/        Screenshot iPhone đã xử lý riêng tư
assets/icons/                  Icon nếu cần bổ sung
assets/images/                 Ảnh chung nếu cần bổ sung
BRIEF_CODEX_STRAVA_K03.md      Yêu cầu gốc của dự án
```

## Bộ minh họa và screenshot

Website hiện dùng 24 minh họa AI mô phỏng thao tác: 12 Android và 12 iPhone. Đây không phải screenshot Strava hoặc bản sao giao diện thật. JavaScript tự dùng ảnh đúng filename và chỉ hiện placeholder dự phòng khi file thiếu hoặc không tải được.

Nếu thay một minh họa bằng screenshot thật:

1. Dùng ảnh chụp thật từ Strava/điện thoại; không dựng hoặc tạo màn hình Strava giả.
2. Crop phần không cần thiết và che/làm mờ dữ liệu cá nhân: tên, avatar, email, số điện thoại, thông báo riêng, dữ liệu sức khỏe, vị trí nhà hoặc bản đồ nhạy cảm.
3. Xuất WebP và giữ đúng filename đang khai báo trong screenshot-slot của index.html.
4. Copy vào `assets/screenshots/android/` hoặc `assets/screenshots/ios/` để thay file tương ứng.
5. Tải lại trang và kiểm tra ảnh phóng to.

Quy ước tên: hai chữ số thứ tự, dấu gạch ngang, mô tả tiếng Anh viết thường, đuôi `.webp`; ví dụ `07-battery-background.webp`.

## Kiểm tra responsive

Trong DevTools của trình duyệt, kiểm tra tối thiểu:

- Mobile: 360×800, 375×812, 390×844, 412×915, 430×932.
- Desktop: 1366×768, 1440×900, 1920×1080.
- Android/iPhone selector, thanh bước, link Club, FAQ, placeholder/ảnh, lightbox, focus bàn phím và tràn ngang.

## Git workflow

```bash
git status
git add index.html css js assets README.md AGENTS.md .nojekyll .gitignore
git commit -m "feat: redesign K03 site around Ren Than challenge"
git push origin main
```

Luôn đọc `git status` trước khi add để không vô tình commit ảnh gốc hoặc file chứa dữ liệu riêng tư.

## Phát hành GitHub Pages

Trong repository `hktruc/21ndsch`:

1. Mở **Settings → Pages**.
2. Chọn **Deploy from a branch**.
3. Chọn branch **main** và folder **/(root)**.
4. Lưu và chờ GitHub Pages phát hành.

URL dự kiến: <https://hktruc.github.io/21ndsch/>

Mọi asset dùng đường dẫn tương đối và project có `.nojekyll`, vì vậy website tương thích GitHub Project Pages.
