const CATEGORIES = [
  "MÁY TIỆN REN ỐNG","MÁY CẮT ỐNG THỦY LỰC - MÁY LĂN RÃNH ỐNG","MÁY THỦY BÌNH",
  "MÁY ĐỘT THỦY LỰC","BƠM THỬ ÁP ASADA - NHẬT","MÁY UỐN ỐNG THỦY LỰC",
  "MÁY KHOAN TỪ - MAGTRON","KÌM CẮT CÁP","THIẾT BỊ ĐO BẰNG LAZER","THƯỚC ĐO BÁNH XE",
  "THIẾT BỊ CÂN BẰNG TỰ ĐỘNG BẰNG TIA LAZER","MÁY TOÀN ĐẠC","KÍNH VĨ","MŨI KHOAN NACHI",
  "KÌM ÉP COS THỦY LỰC","DỤNG CỤ ĐO-MITUTOYO","MÁY HÀN ỐNG HDPE","THIẾT BỊ ĐO & KIỂM TRA KL",
  "DỤNG CỤ ĐIỆN METABO-BOSCH","MÁY GIA CÔNG THANH CÁI","MÁY CHÀ TƯỜNG","KÌM XIẾT ĐAI",
  "KÍCH THỦY LỰC","CƯA CẦN","THIẾT BỊ ĐO KYORITSU","BỘ ĐÀM",
  "TIỆN ÍCH - PHỤ KIỆN Ô TÔ","MÁY RỬA XE MINI","HÀNG GIA DỤNG","LOA - TAI NGHE"
];

const PRODUCTS = [
  {name:"Máy GPS RTK GeoMate SG7", cat:"MÁY TOÀN ĐẠC", code:"Máy GPS RTK SG7", price:83000000, desc:"Máy GPS RTK GeoMate SG7 phục vụ đo đạc và định vị công trình. Liên hệ để được tư vấn cấu hình phù hợp và báo giá chi tiết theo thời điểm."},
  {name:"Máy đo khoảng cách laser Leica DISTO D8", cat:"THIẾT BỊ ĐO BẰNG LAZER", code:"Leica DISTO D8", price:null, desc:"Máy đo khoảng cách bằng laser Leica DISTO D8 cho đo đạc nhanh trong thi công và lắp đặt. Liên hệ để báo giá theo model."},
  {name:"Máy đo khoảng cách laser Leica DISTO DXT", cat:"THIẾT BỊ ĐO BẰNG LAZER", code:"Leica DISTO DXT", price:null, desc:"Máy đo laser Leica DISTO DXT dùng đo khoảng cách, diện tích trong công trình. Liên hệ để được tư vấn chọn model phù hợp."},
  {name:"Máy đo khoảng cách laser Bosch GLM 250VF", cat:"THIẾT BỊ ĐO BẰNG LAZER", code:"Bosch GLM 250VF", price:null, desc:"Máy đo laser Bosch GLM 250VF phục vụ đo đạc thi công. Liên hệ để báo giá và xác nhận hàng trước khi mua."},
  {name:"Máy đo khoảng cách laser Bosch GLM 80", cat:"THIẾT BỊ ĐO BẰNG LAZER", code:"Bosch GLM 80", price:null, desc:"Máy đo laser Bosch GLM 80 nhỏ gọn, dùng đo khoảng cách trong nhà và công trình. Liên hệ để báo giá."},
  {name:"Máy đo khoảng cách laser Bosch DLE 40", cat:"THIẾT BỊ ĐO BẰNG LAZER", code:"Bosch DLE 40", price:null, desc:"Máy đo laser Bosch DLE 40 cho công việc đo đạc cơ bản. Liên hệ để được tư vấn và báo giá."},
  {name:"Máy tiện ren ống", cat:"MÁY TIỆN REN ỐNG", code:"Máy tiện ren ống", price:null, desc:"Máy tiện ren ống dùng gia công ren cho ống thi công cơ điện và cấp thoát nước. Liên hệ để chọn máy theo cỡ ống và báo giá."},
  {name:"Máy cắt ống thủy lực", cat:"MÁY CẮT ỐNG THỦY LỰC - MÁY LĂN RÃNH ỐNG", code:"Máy cắt ống thủy lực", price:null, desc:"Máy cắt ống thủy lực phục vụ cắt ống trong thi công. Liên hệ để tư vấn máy theo vật liệu và đường kính ống."},
  {name:"Máy uốn ống thủy lực", cat:"MÁY UỐN ỐNG THỦY LỰC", code:"Máy uốn ống thủy lực", price:null, desc:"Máy uốn ống thủy lực dùng uốn ống theo góc thi công yêu cầu. Liên hệ để báo giá theo model và cỡ ống."},
  {name:"Máy khoan từ Magtron", cat:"MÁY KHOAN TỪ - MAGTRON", code:"Máy khoan từ Magtron", price:null, desc:"Máy khoan từ Magtron dùng khoan trên bề mặt thép trong kết cấu và lắp đặt. Liên hệ để chọn máy theo mũi khoan và công suất."},
  {name:"Kìm ép cos thủy lực", cat:"KÌM ÉP COS THỦY LỰC", code:"Kìm ép cos thủy lực", price:null, desc:"Kìm ép cos thủy lực dùng ép đầu cos cáp điện trong thi công điện. Liên hệ để báo giá theo lực ép và cỡ cos."},
  {name:"Kích thủy lực", cat:"KÍCH THỦY LỰC", code:"Kích thủy lực", price:null, desc:"Kích thủy lực dùng nâng, kê và hỗ trợ thi công. Liên hệ để chọn tải trọng phù hợp và báo giá."},
  {name:"Máy hàn ống HDPE", cat:"MÁY HÀN ỐNG HDPE", code:"Máy hàn ống HDPE", price:null, desc:"Máy hàn ống HDPE phục vụ hàn nối ống nhựa trong cấp thoát nước. Liên hệ để tư vấn máy theo đường kính ống."},
  {name:"Máy chà tường", cat:"MÁY CHÀ TƯỜNG", code:"Máy chà tường", price:null, desc:"Máy chà tường dùng làm phẳng bề mặt tường trước khi sơn bả. Liên hệ để báo giá theo model."},
  {name:"Mũi khoan Nachi", cat:"MŨI KHOAN NACHI", code:"Mũi khoan Nachi", price:null, desc:"Mũi khoan Nachi dùng khoan kim loại trong gia công và lắp đặt. Liên hệ để chọn cỡ mũi và báo giá."},
  {name:"Dụng cụ đo Mitutoyo", cat:"DỤNG CỤ ĐO-MITUTOYO", code:"Dụng cụ đo Mitutoyo", price:null, desc:"Dụng cụ đo Mitutoyo phục vụ đo kiểm kích thước trong gia công cơ khí. Liên hệ để chọn loại thước, panme theo nhu cầu."},
  {name:"Máy thủy bình", cat:"MÁY THỦY BÌNH", code:"Máy thủy bình", price:null, desc:"Máy thủy bình dùng đo cao độ và san mặt bằng trong trắc địa, thi công. Liên hệ để báo giá theo model."},
  {name:"Bộ đàm", cat:"BỘ ĐÀM", code:"Bộ đàm", price:null, desc:"Bộ đàm dùng liên lạc tại công trường và nhà xưởng. Liên hệ để chọn cự ly và số lượng phù hợp."}
];

const fmt = (n) => n ? n.toLocaleString("vi-VN") + " đ" : "Liên hệ";
const initials = (name) => name.replace(/^(Máy|Kìm|Kích|Mũi|Bộ|Dụng cụ|Thiết bị)\s+/i, "").split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();

let activeCat = null, cart = [], modalProduct = null;

const catGrid = document.getElementById("catGrid");
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");
const resultCount = document.getElementById("resultCount");
const emptyMsg = document.getElementById("emptyMsg");

function renderCats() {
  catGrid.innerHTML = CATEGORIES.map(c => {
    const active = activeCat === c ? " active" : "";
    return `<button class="cat-btn${active}" type="button" data-cat="${c.replace(/"/g, "")}"><strong>${c}</strong><span>Xem sản phẩm →</span></button>`;
  }).join("");
  catGrid.querySelectorAll(".cat-btn").forEach(b => b.addEventListener("click", () => {
    activeCat = activeCat === b.dataset.cat ? null : b.dataset.cat;
    renderCats(); renderProducts();
    document.getElementById("san-pham").scrollIntoView({behavior: "smooth"});
  }));
}

function filtered() {
  const q = (searchInput.value || "").toLowerCase().trim();
  const pf = priceFilter.value;
  return PRODUCTS.filter(p => {
    const okCat = !activeCat || p.cat === activeCat;
    const okQ = !q || (p.name + " " + p.code + " " + p.cat).toLowerCase().includes(q);
    const okP = pf === "all" || (pf === "priced" ? p.price : !p.price);
    return okCat && okQ && okP;
  });
}

function renderProducts() {
  const list = filtered();
  resultCount.textContent = (activeCat ? `Danh mục: ${activeCat} · ` : "") + `${list.length} sản phẩm tiêu biểu trong bản nháp.`;
  emptyMsg.hidden = list.length > 0;
  productGrid.innerHTML = list.map((p, i) => `
    <article class="card">
      <div class="card-visual" aria-hidden="true"><div><strong>${initials(p.name)}</strong><span>ẢNH MINH HỌA · BẢN NHÁP</span></div></div>
      <div class="card-body">
        <p class="card-cat">${p.cat}</p>
        <h3><button type="button" data-open="${i}">${p.name}</button></h3>
        <p class="card-desc">${p.desc}</p>
        <p class="card-code">Mã: ${p.code}</p>
        <p class="card-price ${p.price ? "" : "contact"}">${fmt(p.price)}</p>
        <div class="card-actions">
          <button class="btn btn-ghost" type="button" data-add="${i}">+ Quan tâm</button>
          <a class="btn btn-primary" href="tel:0932077059">Gọi báo giá</a>
        </div>
      </div>
    </article>`).join("");
  productGrid.querySelectorAll("[data-open]").forEach(b => b.addEventListener("click", () => openModal(list[+b.dataset.open])));
  productGrid.querySelectorAll("[data-add]").forEach(b => b.addEventListener("click", () => addToCart(list[+b.dataset.add])));
}

function updateCart() {
  document.getElementById("cartCount").textContent = cart.length;
  document.getElementById("stickyCartCount").textContent = cart.length;
  const listEl = document.getElementById("drawerList");
  listEl.innerHTML = cart.length ? cart.map((p, i) => `<li><span><strong>${p.name}</strong><br><small>Mã: ${p.code} · ${fmt(p.price)}</small></span><button type="button" data-remove="${i}">Xóa</button></li>`).join("")
    : `<li>Chưa có sản phẩm nào. Bấm “+ Quan tâm” ở một sản phẩm để gom mã cần hỏi giá.</li>`;
  listEl.querySelectorAll("[data-remove]").forEach(b => b.addEventListener("click", () => { cart.splice(+b.dataset.remove, 1); updateCart(); }));
}

function addToCart(p) {
  if (!cart.some(x => x.code === p.code)) cart.push(p);
  updateCart(); openDrawer();
}

function openDrawer() {
  document.getElementById("cartDrawer").hidden = false;
  document.getElementById("drawerBackdrop").hidden = false;
}
function closeDrawer() {
  document.getElementById("cartDrawer").hidden = true;
  document.getElementById("drawerBackdrop").hidden = true;
}

function openModal(p) {
  modalProduct = p;
  document.getElementById("modalCat").textContent = p.cat;
  document.getElementById("modalCat2").textContent = p.cat;
  document.getElementById("modalName").textContent = p.name;
  const priceEl = document.getElementById("modalPrice");
  priceEl.textContent = fmt(p.price);
  priceEl.className = "modal-price" + (p.price ? "" : " contact");
  document.getElementById("modalDesc").textContent = p.desc;
  document.getElementById("modalCode").textContent = p.code;
  document.getElementById("productModal").showModal();
}

document.getElementById("cartBtn").addEventListener("click", openDrawer);
document.getElementById("stickyCartBtn").addEventListener("click", openDrawer);
document.getElementById("closeDrawer").addEventListener("click", closeDrawer);
document.getElementById("drawerBackdrop").addEventListener("click", closeDrawer);
document.getElementById("clearFilter").addEventListener("click", () => { activeCat = null; searchInput.value = ""; priceFilter.value = "all"; renderCats(); renderProducts(); });
document.getElementById("modalAdd").addEventListener("click", () => { if (modalProduct) { addToCart(modalProduct); document.getElementById("productModal").close(); } });
searchInput.addEventListener("input", renderProducts);
priceFilter.addEventListener("change", renderProducts);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });

renderCats(); renderProducts(); updateCart();
