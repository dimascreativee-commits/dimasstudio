// ===============================
// Dimas Creative — Main JavaScript
// ===============================

// GANTI dengan nomor WhatsApp kamu.
// Format: 628xxxxxxxxxx (tanpa +, spasi, atau 0 di depan)
const WHATSAPP_NUMBER = "6285183142397";

const products = [
  {
    id: "social-media",
    category: "DESIGN",
    name: "Instagram Feed",
    price: "Mulai Rp30.000",
    description: "Desain feed Instagram untuk konten personal, organisasi, event, atau bisnis.",
    features: ["1 desain", "JPG/PNG", "1× revisi", "Brief sesuai kebutuhan"]
  },
  {
    id: "logo",
    category: "BRANDING",
    name: "Logo Design",
    price: "Mulai Rp100.000",
    description: "Logo custom yang disesuaikan dengan karakter dan kebutuhan brand.",
    features: ["Konsep custom", "PNG/JPG", "2× revisi", "File final"]
  },
  {
    id: "reels",
    category: "VIDEO",
    name: "Video Reels",
    price: "Mulai Rp35.000/menit",
    description: "Editing video pendek untuk Instagram Reels, TikTok, dan konten digital.",
    features: ["Cut & transition", "Text/caption", "Music", "2× revisi"]
  },
  {
    id: "vlog",
    category: "VIDEO",
    name: "Video Vlog",
    price: "Mulai Rp50.000/menit",
    description: "Editing vlog dengan alur yang lebih dinamis dan nyaman ditonton.",
    features: ["Cutting", "Color adjustment", "Music", "2× revisi"]
  },
  {
    id: "thumbnail",
    category: "CONTENT",
    name: "Thumbnail Design",
    price: "Mulai Rp50.000",
    description: "Thumbnail untuk YouTube, video,dan kebutuhan konten digital",
    features: ["Design custom", "Isi berdasarkan brief", "2× revisi", "File final"]
  },
  {
    id: "custom",
    category: "CUSTOM",
    name: "Custom Project",
    price: "Diskusikan",
    description: "Punya kebutuhan yang tidak ada di daftar? Kirim brief dan kita bahas bersama.",
    features: ["Brief custom", "Harga menyesuaikan", "Scope project", "Timeline disepakati"]
  }
];

const productGrid = document.getElementById("productGrid");
const productSelect = document.getElementById("product");

function renderProducts() {
  productGrid.innerHTML = products.map((p, i) => `
    <article class="product">
      <span class="product-tag">${String(i + 1).padStart(2, "0")} / ${p.category}</span>
      <h3>${p.name}</h3>
      <div class="price">${p.price}</div>
      <p>${p.description}</p>
      <ul class="features">${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
      <button class="btn ghost detail-btn" data-id="${p.id}">Lihat Detail</button>
    </article>
  `).join("");

  productSelect.innerHTML += products.map(p => `<option value="${p.id}">${p.name} — ${p.price}</option>`).join("");
}

renderProducts();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

// Product modal
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
let selectedProduct = null;

function openProduct(id) {
  selectedProduct = products.find(p => p.id === id);
  if (!selectedProduct) return;

  document.getElementById("modalTitle").textContent = selectedProduct.name;
  document.getElementById("modalPrice").textContent = selectedProduct.price;
  document.getElementById("modalDescription").textContent = selectedProduct.description;
  document.getElementById("modalFeatures").innerHTML = selectedProduct.features.map(f => `<li>${f}</li>`).join("");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

document.addEventListener("click", e => {
  const btn = e.target.closest(".detail-btn");
  if (btn) openProduct(btn.dataset.id);
});

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

document.getElementById("modalOrder").addEventListener("click", () => {
  closeModal();
  document.getElementById("product").value = selectedProduct?.id || "";
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
});

// Order form → WhatsApp
const orderForm = document.getElementById("orderForm");

if (orderForm) {
  orderForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const productId = document.getElementById("product").value;
    const deadline = document.getElementById("deadline").value.trim();
    const brief = document.getElementById("brief").value.trim();

    const product = products.find(p => p.id === productId);

    if (!name || !product || !brief) return;

    const message =
`Halo Dimas Creative 👋

Saya ingin memesan:

• Nama: ${name}
• Produk/Jasa: ${product.name}
• Harga mulai: ${product.price}
• Deadline: ${deadline || "-"}

Brief:
${brief}

Mohon info selanjutnya untuk proses pemesanan. Terima kasih!`;

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.location.href = url;
  });
}
// Loader
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hide"), 450);
});/* =================================
 

}// Disable pinch zoom
document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});

document.addEventListener("gesturechange", function (e) {
  e.preventDefault();
});

document.addEventListener("gestureend", function (e) {
  e.preventDefault();
});

// Disable Ctrl + mouse wheel zoom
document.addEventListener("wheel", function (e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

// Disable Ctrl + +/- zoom
document.addEventListener("keydown", function (e) {
  if (
    (e.ctrlKey || e.metaKey) &&
    (e.key === "+" ||
     e.key === "-" ||
     e.key === "=" ||
     e.key === "0")
  ) {
    e.preventDefault();
  }
});