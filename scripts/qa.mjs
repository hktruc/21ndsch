import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const checks = [];

function check(condition, message) {
  checks.push({ condition, message });
  if (!condition) errors.push(message);
}

const requiredFiles = [
  "index.html", "css/style.css", "js/app.js", "README.md", "AGENTS.md", ".nojekyll"
];

requiredFiles.forEach((file) => check(existsSync(resolve(root, file)), `Có file ${file}`));

const html = readFileSync(resolve(root, "index.html"), "utf8");
const css = readFileSync(resolve(root, "css/style.css"), "utf8");
const js = readFileSync(resolve(root, "js/app.js"), "utf8");

check(html.includes('name="viewport"'), "Có viewport meta cho mobile");
check(html.includes('lang="vi"'), "Ngôn ngữ trang là tiếng Việt");
check(html.includes("https://www.strava.com/clubs/21ngaydocsach_k03"), "Đúng link Strava Club K03");
check(!/(?:src|href)=["']\/(?!\/)/.test(html), "Không có asset path bắt đầu bằng /");
check(!/url\(\s*["']?\/(?!\/)/.test(css), "CSS không có asset path bắt đầu bằng /");
check(html.includes("Không cần mua Strava Subscription"), "Module Strava nêu rõ không cần Subscription");
check(html.includes("Khóa màn hình khác với đóng ứng dụng"), "Phân biệt khóa màn hình và force-close");
check(html.includes("Đi bộ thử 5–10 phút"), "Có bài test 5–10 phút");
check(html.includes("RÈN TRÍ <span>·</span> RÈN THÂN <span>·</span> RÈN NGHỊ LỰC"), "Có Hero V2 Rèn Trí · Rèn Thân · Rèn Nghị Lực");
check(html.includes('id="dung-du-deu"'), "Có section Đúng–Đủ–Đều");
check(html.includes('id="chung-nhan"'), "Có section Giấy chứng nhận");
check(html.includes("03 phần quà dành cho những người đã hoàn thành"), "Có section 03 phần quà");
check(html.includes('id="strava"'), "Có module Hướng dẫn Strava");
check(!html.includes("Danh sách ảnh hướng dẫn cần bổ sung") && !html.includes("Dành cho đội nội dung"), "Không có nội dung developer trên public UI");
check(js.includes("localStorage"), "OS selector ghi nhớ bằng localStorage");
check(css.includes("@media (min-width: 600px)") && css.includes("@media (min-width: 900px)"), "Có breakpoint responsive mobile-first");

const ids = [...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
check(duplicateIds.length === 0, `Không có ID trùng${duplicateIds.length ? `: ${duplicateIds.join(", ")}` : ""}`);

const localRefs = [...html.matchAll(/(?:src|href)=["'](\.\/[^"'#?]+)["']/g)].map((match) => match[1]);
localRefs.forEach((ref) => check(existsSync(resolve(root, ref)), `Đường dẫn tồn tại: ${ref}`));

const anchorRefs = [...html.matchAll(/href=["']#([^"']+)["']/g)].map((match) => match[1]);
anchorRefs.forEach((id) => check(ids.includes(id), "Anchor tồn tại: #" + id));

const screenshotSlots = [...html.matchAll(/class="screenshot-slot"\s+data-platform="([^"]+)"\s+data-file="([^"]+)"/g)];
check(screenshotSlots.length === 24, `Có đúng 24 screenshot-slot đang dùng (${screenshotSlots.length})`);
screenshotSlots.forEach((match) => {
  const [, platform, file] = match;
  const asset = resolve(root, "assets", "screenshots", platform, file);
  check(existsSync(asset), `Slot có file: ${platform}/${file}`);
  if (existsSync(asset)) {
    const bytes = readFileSync(asset);
    check(bytes.length > 10000, `Ảnh đủ dữ liệu: ${platform}/${file}`);
    check(bytes.subarray(8, 12).toString("ascii") === "WEBP", `Đúng WebP: ${platform}/${file}`);
  }
});


for (const item of checks) {
  console.log(`${item.condition ? "PASS" : "FAIL"}  ${item.message}`);
}

console.log(`\n${checks.length - errors.length}/${checks.length} kiểm tra đạt.`);
if (errors.length) process.exitCode = 1;
