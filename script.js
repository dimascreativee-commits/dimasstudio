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
    price: "Mulai Rp250.000",
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
const productSelect = document.getElementById("product");// Paket Feed Instagram
const feedPackages = [
  {
    id: "feed-basic",
    category: "PAKET — SEKOLAH & ORGANISASI",
    name: "Paket Basic — Sekolah & Organisasi",
    price: "Rp70.000",
    description: "Paket 12 Feed Instagram untuk sekolah dan organisasi.",
    features: [
      "12 Feed Instagram",
      "Free potong jadi Puzzle",
      "Siap upload",
      "Free revisi 2×",
      "HD, tidak blur/buram",
      "Desain custom, bukan template"
    ]
  },
  {
    id: "feed-standar",
    category: "PAKET — SEKOLAH & ORGANISASI",
    name: "Paket Standar — Sekolah & Organisasi",
    price: "Rp90.000",
    description: "Paket 18 Feed Instagram untuk sekolah dan organisasi.",
    features: [
      "18 Feed Instagram",
      "Free potong jadi Puzzle",
      "Siap upload",
      "Free revisi 2×",
      "HD, tidak blur/buram",
      "Desain custom, bukan template"
    ]
  },
  {
    id: "feed-premium",
    category: "PAKET — SEKOLAH & ORGANISASI",
    name: "Paket Premium — Sekolah & Organisasi",
    price: "Rp145.000",
    description: "Paket 24 Grid Instagram dengan bonus tambahan.",
    features: [
      "24 Grid Instagram",
      "Free potong, siap upload",
      "Free Live Report Story / Photobooth",
      "Free Twibbon",
      "Free revisi 3×",
      "HD, tidak blur/buram",
      "Desain custom, bukan template"
    ]
  },
  {
    id: "company-starter",
    category: "PAKET — PERUSAHAAN & BRAND",
    name: "Paket Starter — Perusahaan & Brand",
    price: "Rp450.000/bulan",
    description: "Paket konten bulanan untuk perusahaan dan brand.",
    features: [
      "6 konten Feed Instagram",
      "Konten bebas request",
      "Bonus 1 template",
      "Caption & hashtag",
      "File desain HD"
    ]
  },
  {
    id: "company-growth",
    category: "PAKET — PERUSAHAAN & BRAND",
    name: "Paket Growth — Perusahaan & Brand",
    price: "Rp890.000/bulan",
    description: "Paket konten bulanan dengan jadwal posting rutin.",
    features: [
      "Durasi 1 bulan",
      "3× posting per minggu",
      "Total 12 Feed Instagram",
      "Bonus 2 Instagram Story",
      "Caption & hashtag",
      "File desain HD"
    ]
  },
  {
    id: "company-autopilot",
    category: "PAKET — PERUSAHAAN & BRAND",
    name: "Paket Auto Pilot — Perusahaan & Brand",
    price: "Rp1.500.000/bulan",
    description: "Paket konten bulanan dengan jumlah konten lebih banyak.",
    features: [
      "Durasi 1 bulan",
      "6 Feed Instagram per minggu",
      "Total 24 Feed Instagram",
      "Bonus 2 Instagram Story",
      "Caption & hashtag relevan",
      "File desain HD"
    ]
  }
];

function renderProducts() {
  // Render jasa biasa ke section Products
  productGrid.innerHTML = products.map((p, i) => `
    <article class="product">
      <span class="product-tag">
        ${String(i + 1).padStart(2, "0")} / ${p.category}
      </span>

      <h3>${p.name}</h3>

      <div class="price">${p.price}</div>

      <p>${p.description}</p>

      <ul class="features">
        ${p.features.map(f => `<li>${f}</li>`).join("")}
      </ul>

      <button
        class="btn ghost detail-btn"
        data-id="${p.id}"
      >
        Lihat Detail
      </button>
    </article>
  `).join("");

  // Render pilihan produk untuk Order
  productSelect.innerHTML = `
    <option value="">Pilih jasa / paket</option>

    <optgroup label="Jasa">
      ${products.map(p => `
        <option value="${p.id}">
          ${p.name} — ${p.price}
        </option>
      `).join("")}
    </optgroup>

    <optgroup label="Paket Feed — Sekolah & Organisasi">
      ${feedPackages
        .filter(p => p.category === "PAKET — SEKOLAH & ORGANISASI")
        .map(p => `
          <option value="${p.id}">
            ${p.name} — ${p.price}
          </option>
        `).join("")}
    </optgroup>

    <optgroup label="Paket Feed — Perusahaan & Brand">
      ${feedPackages
        .filter(p => p.category === "PAKET — PERUSAHAAN & BRAND")
        .map(p => `
          <option value="${p.id}">
            ${p.name} — ${p.price}
          </option>
        `).join("")}
    </optgroup>
  `;
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
    const reference = document.getElementById("reference").value.trim();
    const brief = document.getElementById("brief").value.trim();

    // Gabungkan jasa biasa + paket
    const allOrderProducts = [
      ...products,
      ...feedPackages
    ];

    const product = allOrderProducts.find(
      p => p.id === productId
    );

    if (!name || !product || !brief) return;

    const message =
`Halo Dimas Creative 👋

Saya ingin memesan:

• Nama: ${name}
• Produk/Jasa: ${product.name}
• Harga: ${product.price}
• Deadline: ${deadline || "-"}
• Referensi: ${reference || "-"}

Brief:
${brief}

Mohon info selanjutnya untuk proses pemesanan. Terima kasih!`;

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.location.href = url;
  });
}
// Paket Feed → pilih paket dan masuk ke Order
document.querySelectorAll(".package-btn").forEach(button => {
  button.addEventListener("click", () => {
    const packageName = button.dataset.package;

    const productSelect = document.getElementById("product");
    const orderSection = document.getElementById("order");

    if (productSelect) {
      // Kalau ada opsi Custom Project, gunakan itu.
      const customOption = [...productSelect.options].find(
        option => option.textContent.toLowerCase().includes("custom")
      );

      if (customOption) {
        productSelect.value = customOption.value;
      }
    }

    if (orderSection) {
      orderSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    // Simpan paket yang dipilih untuk digunakan saat submit
    window.selectedPackage = packageName;
  });
});
// Loader
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hide"), 450);
});

// Disable pinch zoom
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
    (
      e.key === "+" ||
      e.key === "-" ||
      e.key === "=" ||
      e.key === "0"
    )
  ) {
    e.preventDefault();
  }
});