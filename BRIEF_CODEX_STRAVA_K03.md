# BRIEF CHO CODEX — WEBSITE HƯỚNG DẪN STRAVA
## Hành trình 21 ngày đọc sách K03 — Hoạt động rèn thân Run / Walk

**Phiên bản:** 1.0  
**Mục tiêu:** Xây một website tĩnh, đẹp, dễ dùng trên điện thoại, giúp một học viên chưa từng biết Strava vẫn có thể tự cài đặt, tham gia Club và ghi hoạt động chạy bộ / đi bộ đúng cách.  
**Thư mục làm việc trên máy Windows:** `G:\My Drive\1_BKE\1_Projects\05_21NDSCH\K03`  
**GitHub repository:** `https://github.com/hktruc/21ndsch`  
**Nhánh chính:** `main`  
**Strava Club:** `https://www.strava.com/clubs/21ngaydocsach_k03`  
**Cách phát hành ưu tiên:** GitHub Pages.  
**Netlify:** Chỉ đề xuất nếu sau này GitHub Pages không còn đủ nhu cầu.

---

# 1. Nhiệm vụ của Codex

Hãy xây dựng hoàn chỉnh một website hướng dẫn sử dụng Strava dành cho học viên của lớp **21 ngày đọc sách K03**.

Đối tượng sử dụng bao gồm cả người:

- chưa từng dùng Strava;
- ít am hiểu công nghệ;
- không biết GPS / activity / Club là gì;
- không có đồng hồ thể thao;
- chỉ có điện thoại Android hoặc iPhone;
- có thể nhầm rằng phải mua Strava Subscription mới sử dụng được.

Website phải giúp họ đi từ **0 → tự ghi được một buổi Run hoặc Walk đúng cách**, đồng thời tham gia đúng Strava Club của chương trình.

Không xây web app phức tạp. Không cần backend. Không cần database.

Ưu tiên:

> **HTML + CSS + JavaScript thuần, chạy trực tiếp trên GitHub Pages.**

---

# 2. Mục tiêu cuối cùng của học viên

Sau khi đọc / làm theo website, một học viên phải tự thực hiện được:

1. Cài Strava trên Android hoặc iPhone.
2. Tạo / đăng nhập tài khoản.
3. Hiểu rằng **không cần mua Subscription** cho chương trình này.
4. Không vô tình đăng ký gói trả phí / trial không cần thiết.
5. Đặt tên tài khoản dễ nhận diện.
6. Join đúng Strava Club K03.
7. Cấp quyền GPS / Location cần thiết.
8. Cài để Strava tiếp tục ghi hoạt động khi màn hình điện thoại tắt.
9. Chọn đúng **Run** hoặc **Walk**.
10. Bấm Start đúng cách.
11. Khóa màn hình và bỏ điện thoại vào túi mà Strava vẫn ghi GPS.
12. Finish và Save hoạt động.
13. Kiểm tra lại quãng đường đã được ghi nhận.
14. Biết cách xử lý một số lỗi thường gặp.

---

# 3. Nguyên tắc UX quan trọng nhất

Website không được trình bày giống tài liệu kỹ thuật.

Hãy thiết kế theo hành trình thao tác:

```text
CÀI STRAVA
    ↓
TẠO TÀI KHOẢN MIỄN PHÍ
    ↓
CÀI GPS + CHẠY NỀN
    ↓
JOIN CLUB
    ↓
CHỌN RUN / WALK
    ↓
START
    ↓
VẬN ĐỘNG
    ↓
FINISH + SAVE
    ↓
KIỂM TRA KẾT QUẢ
```

Mỗi section chỉ nên yêu cầu người học thực hiện một nhóm thao tác rõ ràng.

---

# 4. Định hướng UI / Visual

## Phong cách

- Hiện đại.
- Sạch.
- Thân thiện.
- Không mang cảm giác tài liệu IT.
- Không quá nhiều chữ trong một khối.
- Dễ dùng với người từ khoảng 35–60 tuổi.
- Font tiếng Việt rõ.
- Tương phản cao.
- Khoảng trắng thoáng.
- Card lớn.
- Nút bấm lớn, dễ chạm bằng ngón tay.

## Mobile-first

Ưu tiên màn hình:

```text
360px
375px
390px
412px
430px
```

Sau đó mới tối ưu tablet / desktop.

## Desktop

Trên desktop:

- chiều rộng nội dung tối đa khoảng 1100–1200px;
- không kéo text dài toàn màn hình;
- ảnh điện thoại có kích thước hợp lý;
- có thể hiển thị Android / iPhone song song ở một số section nếu không gây rối.

---

# 5. Cấu trúc project đề xuất

```text
K03/
│
├── index.html
├── README.md
├── AGENTS.md
├── .gitignore
├── .nojekyll
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
└── assets/
    ├── screenshots/
    │   ├── android/
    │   └── ios/
    │
    ├── icons/
    └── images/
```

Không dùng framework nếu không thực sự cần.

Không dùng React/Vue/Next/Vite chỉ để tạo một trang hướng dẫn tĩnh.

Mục tiêu là:

```text
git clone
→ mở index.html
→ chạy được
```

và:

```text
push lên GitHub
→ GitHub Pages phát hành được
```

---

# 6. Yêu cầu GitHub Pages

Website phải tương thích với dạng Project Pages:

```text
https://hktruc.github.io/21ndsch/
```

Do đó:

- không hard-code asset path bắt đầu bằng `/`;
- sử dụng path tương đối.

Ví dụ tốt:

```html
<img src="./assets/screenshots/android/01-install.webp">
<link rel="stylesheet" href="./css/style.css">
<script src="./js/app.js"></script>
```

Không dùng:

```html
<img src="/assets/...">
```

nếu việc đó làm hỏng asset trên Project Pages.

Thêm file:

```text
.nojekyll
```

để GitHub Pages phục vụ static files trực tiếp.

---

# 7. Header / Hero

Hero phải giải thích ngay trong vài giây:

### Tiêu đề gợi ý

**HƯỚNG DẪN STRAVA — 21 NGÀY ĐỌC SÁCH K03**

### Subheading

> Chỉ cần điện thoại. Không cần đồng hồ chạy bộ. Không cần mua Strava Subscription.

### Hai CTA chính

```text
[ Tôi dùng Android ]
[ Tôi dùng iPhone ]
```

### CTA Club

```text
[ THAM GIA STRAVA CLUB K03 ]
```

Link:

```text
https://www.strava.com/clubs/21ngaydocsach_k03
```

---

# 8. OS Selector — Android / iPhone

Website phải có bộ chuyển:

```text
Android | iPhone
```

Người dùng chọn một lần.

Sau đó:

- ưu tiên hiển thị nội dung đúng hệ điều hành;
- ẩn / thu gọn nội dung hệ điều hành còn lại;
- có nút đổi hệ điều hành bất cứ lúc nào.

Có thể dùng `localStorage` để ghi nhớ lựa chọn.

---

# 9. Thanh tiến trình

Tạo progress/navigation dễ hiểu:

```text
1. Cài app
2. Tài khoản
3. GPS & chạy nền
4. Vào Club
5. Run / Walk
6. Start
7. Finish
8. Kiểm tra
```

Trên mobile có thể sticky top, horizontal scroll hoặc progress compact.

---

# 10. Section — Strava là gì?

Giải thích ngắn, không kỹ thuật:

> Strava là ứng dụng dùng GPS của điện thoại hoặc đồng hồ để ghi lại hoạt động vận động như chạy bộ và đi bộ. Trong hành trình này, Strava chỉ được dùng để giúp lớp ghi nhận hoạt động rèn thân và tạo thêm tương tác.

Nhấn mạnh:

- Đọc sách vẫn là hành trình chính.
- Chạy bộ / đi bộ là hoạt động cộng thêm.

---

# 11. Section — KHÔNG CẦN MUA STRAVA

Phải là một warning/info card rất rõ.

Nội dung chính:

**Bạn KHÔNG cần mua Strava Subscription để tham gia hoạt động này.**

Nếu Strava hiển thị các màn hình như:

```text
Subscribe
Try free
Start free trial
Upgrade
Strava + Runna
```

người học không cần mua chỉ để tham gia chương trình.

Không hướng dẫn người dùng nhập thẻ / phương thức thanh toán chỉ để hoàn thành chương trình.

Nếu lỡ đăng ký, tạo accordion:
- Android: kiểm tra Subscription trong Google Play.
- iPhone: kiểm tra Subscriptions trong Apple ID / App Store.

---

# 12. Section — Cài Strava

## Android

```text
CH Play / Google Play
→ tìm "Strava"
→ Install / Cài đặt
→ Open / Mở
```

## iPhone

```text
App Store
→ tìm "Strava"
→ Get / Tải
→ Open / Mở
```

Có screenshot tương ứng.

---

# 13. Section — Tạo tài khoản

Hướng dẫn tối giản.

Yêu cầu tên:
- nên dùng tên thật / tên dễ nhận diện;
- tránh nickname khó đối chiếu.

Giải thích:

> BTC cần nhận ra bạn khi tổng hợp hoạt động của lớp.

---

# 14. Section — CỰC KỲ QUAN TRỌNG: GPS + CHẠY NỀN

Không nói:

> “Tắt màn hình chắc chắn làm Strava ngừng ghi.”

Thay vào đó:

> Khi chạy bộ, bạn có thể khóa màn hình và bỏ điện thoại vào túi. Tuy nhiên điện thoại phải cho phép Strava tiếp tục sử dụng GPS / hoạt động nền. Nếu hệ thống tiết kiệm pin hoặc chặn vị trí nền, quãng đường có thể bị thiếu hoặc đứt đoạn.

---

# 15. Android — GPS / Location

Hướng dẫn chung:

```text
Cài đặt
→ Ứng dụng
→ Strava
→ Quyền
→ Vị trí
```

Tên menu có thể khác tùy Samsung, OPPO, Xiaomi, vivo, Pixel.

---

# 16. Android — Pin / chạy nền

Hướng dẫn chung:

```text
Cài đặt
→ Ứng dụng
→ Strava
→ Pin / Battery
```

Tìm lựa chọn tương đương:

```text
Không hạn chế
Unrestricted
Allow background activity
Không tối ưu
```

Tạo helper cards:
- Samsung
- Xiaomi / Redmi
- OPPO / realme
- vivo
- Pixel / Android gốc
- Khác

Nếu chưa có screenshot thật, dùng placeholder, không bịa menu.

---

# 17. iPhone — GPS / Location

Hướng dẫn chung:

```text
Settings / Cài đặt
→ Privacy & Security / Quyền riêng tư & Bảo mật
→ Location Services / Dịch vụ định vị
→ Strava
```

Bật `Precise Location / Vị trí chính xác` nếu tùy chọn này xuất hiện.

---

# 18. iPhone — Background App Refresh

Hướng dẫn kiểm tra:

```text
Settings
→ General
→ Background App Refresh
```

Phân biệt rõ:

```text
Khóa màn hình = OK
Vuốt đóng hẳn Strava trong App Switcher khi đang ghi = KHÔNG NÊN
```

---

# 19. Bài test 5–10 phút trước ngày 1

Tạo checkpoint:

1. Mở Strava.
2. Chọn Walk.
3. Start.
4. Đi bộ khoảng 5–10 phút.
5. Khóa màn hình trong phần lớn thời gian.
6. Mở lại điện thoại.
7. Finish.
8. Save.
9. Kiểm tra quãng đường và đường GPS.

Nếu bình thường:

```text
✓ Điện thoại đã sẵn sàng
```

---

# 20. Section — Join Strava Club

Link:

```text
https://www.strava.com/clubs/21ngaydocsach_k03
```

CTA lớn:

```text
THAM GIA CLUB 21 NGÀY ĐỌC SÁCH K03
```

Workflow:

```text
Bấm link
→ đăng nhập nếu được hỏi
→ mở Club
→ Join / Tham gia
```

---

# 21. Section — RUN hay WALK?

## RUN — Chạy bộ

Chọn khi hoạt động chính là:
- chạy;
- jogging;
- chạy chậm;
- chạy xen kẽ đi bộ nhưng mục tiêu chính là chạy.

## WALK — Đi bộ

Chọn khi:
- chủ yếu đi bộ;
- đi bộ nhanh;
- đi bộ thư giãn.

Thông điệp:

> Hãy chọn theo loại vận động thực tế.

---

# 22. Cách chọn Run / Walk

```text
Mở Strava
→ Record / Ghi
→ chạm loại hoạt động
→ chọn Run hoặc Walk
```

Dùng screenshot thật nếu có; không bịa màn hình.

---

# 23. Trước khi bấm START

Tạo card vàng:

```text
✓ GPS / Vị trí đã bật
✓ Strava đã được phép hoạt động nền
✓ Không bị chế độ tiết kiệm pin chặn
✓ Đã chọn đúng RUN hoặc WALK
✓ Đã bấm START
```

Sau đó:

> Bạn có thể khóa màn hình bình thường và bỏ điện thoại vào túi.

---

# 24. Trong lúc chạy / đi bộ

- Không cần giữ màn hình sáng.
- Không cần nhìn Strava liên tục.
- Có thể khóa màn hình.
- Không Force Close / vuốt đóng app khi đang ghi.
- Nếu dừng lâu, có thể dùng Pause nếu cần.

---

# 25. FINISH + SAVE

```text
Mở lại Strava
→ Finish / Kết thúc
→ kiểm tra hoạt động
→ Save / Lưu
```

Cảnh báo:

```text
Không bấm Discard / Xóa nếu bạn muốn giữ hoạt động.
```

---

# 26. Kiểm tra ghi thành công

Thành công:

```text
✓ Có activity
✓ Có km
✓ Có thời gian
```

Cần kiểm tra:

```text
! 0 km hoặc km quá thấp
! đường GPS bị đứt
! activity không được Save
```

---

# 27. Kiểm tra Club

Hướng dẫn vào Club để xem:
- đã Join chưa;
- feed Club;
- leaderboard nếu Strava đang hiển thị.

Không hứa rằng mọi học viên luôn nhìn thấy cùng một danh sách.

---

# 28. FAQ

Ít nhất gồm:

- Có phải mua Strava không?
- Tôi không có đồng hồ chạy bộ?
- Tôi đi bộ được không?
- Tôi chạy rất chậm thì chọn Run hay Walk?
- Tắt màn hình có sao không?
- Tại sao tôi chạy 5 km nhưng Strava chỉ ghi 2 km?
- Tôi không có mạng 4G lúc chạy?
- Tôi lỡ chọn nhầm Run / Walk?
- Tôi lỡ mua Subscription?
- Tôi không thấy mình trong Club?

---

# 29. Quick Guide cuối trang

```text
MỞ STRAVA
   ↓
CHỌN RUN / WALK
   ↓
START
   ↓
KHÓA MÀN HÌNH & VẬN ĐỘNG
   ↓
FINISH
   ↓
SAVE
```

---

# 30. Screenshot Strategy

Website bắt buộc hỗ trợ screenshot riêng cho Android và iPhone.

## Android

Thư mục:

```text
assets/screenshots/android/
```

Tên file mục tiêu:

```text
01-google-play-strava.webp
02-open-strava.webp
03-signup-login.webp
04-subscription-skip.webp
05-profile-name.webp
06-location-permission.webp
07-battery-background.webp
08-power-saving.webp
09-club-link.webp
10-club-join.webp
11-record-screen.webp
12-choose-activity.webp
13-run-selected.webp
14-walk-selected.webp
15-start.webp
16-locked-screen-test.webp
17-finish.webp
18-save.webp
19-activity-result.webp
20-club-check.webp
```

## iOS

```text
assets/screenshots/ios/
```

```text
01-app-store-strava.webp
02-open-strava.webp
03-signup-login.webp
04-subscription-skip.webp
05-profile-name.webp
06-location-services.webp
07-strava-location.webp
08-precise-location.webp
09-background-refresh.webp
10-club-link.webp
11-club-join.webp
12-record-screen.webp
13-choose-activity.webp
14-run-selected.webp
15-walk-selected.webp
16-start.webp
17-lock-screen-note.webp
18-finish.webp
19-save.webp
20-activity-result.webp
21-club-check.webp
```

---

# 31. Khi chưa có screenshot

KHÔNG tạo screenshot Strava giả.

Render placeholder đẹp, ví dụ:

```text
ẢNH HƯỚNG DẪN ANDROID SẼ ĐƯỢC BỔ SUNG
Tên file: 07-battery-background.webp
```

Khi ảnh thật được copy vào đúng thư mục, giao diện phải dễ thay thế.

---

# 32. Screenshot component

Mỗi ảnh nên có:
- tiêu đề bước;
- ảnh;
- số thứ tự;
- caption;
- zoom/lightbox;
- alt text.

---

# 33. Nội dung tiếng Việt

Toàn bộ website bằng tiếng Việt.

Có thể ghi song ngữ label:

```text
Start / Bắt đầu
Finish / Kết thúc
Save / Lưu
Run / Chạy bộ
Walk / Đi bộ
```

---

# 34. Accessibility

- font tối thiểu khoảng 16px;
- body 17–18px nếu phù hợp;
- nút đủ lớn;
- tương phản tốt;
- ảnh có alt;
- focus state rõ;
- không chỉ dùng màu để truyền tải thông tin.

---

# 35. Performance

- ưu tiên WebP;
- lazy-load ảnh;
- set width/height;
- tránh thư viện JS nặng;
- tải tốt trên 4G.

---

# 36. Không thu thập dữ liệu

Website:
- không login;
- không thu email;
- không dùng Strava API;
- không có database;
- không lưu thông tin học viên.

`localStorage` chỉ dùng cho Android/iPhone selector nếu cần.

---

# 37. Không làm trong MVP

Không làm:
- Strava API;
- Google Sheets;
- dashboard;
- leaderboard riêng;
- server;
- CMS;
- payment;
- React/Next;
- tracking người dùng.

---

# 38. Footer

```text
Hành trình 21 ngày đọc sách K03
Hướng dẫn sử dụng Strava cho hoạt động Rèn Thân
```

---

# 39. README.md

Codex phải tạo README gồm:
1. Mục đích project.
2. Cách mở local.
3. Cấu trúc thư mục.
4. Cách thêm screenshot.
5. Naming convention.
6. Cách test responsive.
7. Cách commit Git.
8. Cách publish GitHub Pages.
9. URL dự kiến.

---

# 40. AGENTS.md

Tạo `AGENTS.md` với các quy tắc:

```text
- Website hướng dẫn cho người mới dùng Strava.
- Ưu tiên mobile-first.
- Không đổi sang framework nếu chưa được yêu cầu.
- Không dùng Strava API.
- Không tạo screenshot Strava giả.
- Nếu thiếu ảnh thật, dùng placeholder.
- Không làm sai ý “không cần subscription cho chương trình”.
- Không làm người dùng hiểu rằng phải giữ màn hình sáng khi chạy.
- Luôn phân biệt khóa màn hình với force-close app.
- Asset path phải tương thích GitHub Project Pages.
- Không phá nội dung tiếng Việt khi refactor.
```

---

# 41. Git workflow

Repo:

```text
https://github.com/hktruc/21ndsch
```

Branch:

```text
main
```

Có thể commit trực tiếp `main` để đơn giản.

Commit message gợi ý:

```text
chore: initialize static site
feat: add mobile navigation and OS selector
feat: add Android Strava guide
feat: add iOS Strava guide
feat: add GPS background guide
docs: add screenshot manifest
```

---

# 42. GitHub Pages

Sau khi project ổn:

```text
Repository
→ Settings
→ Pages
→ Source: Deploy from a branch
→ Branch: main
→ Folder: /(root)
```

URL dự kiến:

```text
https://hktruc.github.io/21ndsch/
```

`index.html` phải ở project root.

---

# 43. Netlify

Không dùng trong MVP.

Chỉ cân nhắc nếu sau này cần deploy preview, form, redirects, staging hoặc workflow nâng cao.

---

# 44. Cách Codex bắt đầu

1. Kiểm tra project root:
   `G:\My Drive\1_BKE\1_Projects\05_21NDSCH\K03`
2. Chạy:
   `git status`
3. Chạy:
   `git remote -v`
4. Liệt kê file.
5. Không xóa file hiện hữu nếu chưa hiểu.
6. Lập kế hoạch ngắn.
7. Xây skeleton.
8. Xây UI hoàn chỉnh với placeholder.
9. Test responsive.
10. Test relative paths.
11. Chỉ push khi người dùng yêu cầu hoặc đã thống nhất.

---

# 45. QA

Mobile:
- 360×800
- 375×812
- 390×844
- 412×915
- 430×932

Desktop:
- 1366×768
- 1440×900
- 1920×1080

Kiểm tra:
- menu;
- Android/iPhone selector;
- CTA Club;
- screenshot placeholders;
- lightbox;
- FAQ;
- asset path;
- tiếng Việt;
- overflow;
- font;
- nút bấm.

---

# 46. Acceptance Criteria

- [ ] `index.html` mở trực tiếp được.
- [ ] Chạy tốt trên GitHub Pages.
- [ ] Mobile-first.
- [ ] Android/iPhone selector.
- [ ] Không cần Subscription.
- [ ] GPS/chạy nền.
- [ ] Run/Walk.
- [ ] Join Club.
- [ ] Start → Finish → Save.
- [ ] Test 5–10 phút.
- [ ] FAQ.
- [ ] Screenshot manifest.
- [ ] Placeholder khi thiếu ảnh.
- [ ] Không broken image.
- [ ] Không backend.
- [ ] Không Strava API.
- [ ] Không dữ liệu cá nhân.
- [ ] README.
- [ ] AGENTS.md.

---

# 47. Kết quả mong muốn

Một học viên nhận link trên Zalo → mở bằng điện thoại → chọn Android hoặc iPhone → làm từng bước → cài Strava → bỏ qua Subscription → cấp GPS/chạy nền → Join Club → test 5–10 phút → từ ngày 1 chỉ cần mở Strava, chọn Run/Walk, Start, khóa màn hình, Finish và Save.

---

# 48. Prompt khởi động cho Codex

> Đọc toàn bộ file BRIEF_CODEX_STRAVA_K03.md và coi đây là yêu cầu gốc của dự án. Trước tiên hãy kiểm tra cấu trúc thư mục và trạng thái Git. Sau đó lập kế hoạch ngắn và xây phiên bản MVP website hoàn chỉnh bằng HTML/CSS/JS thuần. Chưa có screenshot nào thì dùng placeholder đúng filename theo brief, tuyệt đối không tạo screenshot Strava giả. Website phải mobile-first và tương thích GitHub Pages tại repository hktruc/21ndsch. Hãy chạy kiểm tra các đường dẫn, responsive và các lỗi cơ bản trước khi báo hoàn thành.

---

# 49. Quy tắc riêng tư cho screenshot

Repository và GitHub Pages có thể được phát hành công khai, vì vậy screenshot đưa vào website phải được kiểm tra trước khi commit.

Không đưa lên GitHub nếu ảnh còn chứa dữ liệu cá nhân không cần thiết như:

- tên đầy đủ của học viên không liên quan đến hướng dẫn;
- avatar cá nhân;
- email / số điện thoại;
- vị trí nhà ở;
- bản đồ GPS chi tiết có thể tiết lộ nơi ở;
- thông báo riêng tư trên màn hình;
- dữ liệu sức khỏe / nhịp tim không cần thiết.

Ưu tiên:

```text
crop → che / làm mờ dữ liệu riêng tư → lưu bản dùng cho website
```

Ảnh dùng để hướng dẫn chỉ nên giữ lại phần UI cần thao tác.

Không commit ảnh gốc chứa dữ liệu nhạy cảm vào repository public, kể cả sau đó có xóa khỏi trang HTML.

