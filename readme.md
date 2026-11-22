# KJA Enoh Hamidin — Redesign & Refactor

## 🔧 Refactor

- Pemisahan file: HTML, CSS, dan JavaScript dipisah ke file terpisah (`index.html`, `style.css`, `main.js`).
- `main.js` diperkuat: guard `dataset.bound` + flag `window.__KJA_MAIN_LOADED__` mencegah event listener terpasang dua kali.
- Hapus duplikasi: script inline di HTML dihapus, diganti `<script src="main.js">`.
- CSS digabung: semua selector dari `style.txt` digabung ke `style.css` tanpa duplikasi.

---

## 🎨 Section yang Di redesign

### About / Tentang Kami
- Kartu statement dengan gradient 3-stop, ornamen lingkaran konsentris, seal mini, watermark logo KJA.
- Paragraf pertama jadi *lead* dengan border kiri emas.
- Values jadi kartu kecil dengan ikon SVG + hover naik.
- Animasi masuk bertingkat saat scroll.

### Process / Alur Kerja
- Kartu putih rounded dengan ikon SVG, nomor besar transparan di pojok.
- Hover: naik, glow emas, garis aksen atas, ikon rotasi.
- Garis penghubung horizontal antar kartu (desktop).

### Industries / Sektor
- Kartu gradient dengan ikon sektor, nomor besar transparan, panah pojok muncul saat hover.
- Background navy + radial emas + ornamen lingkaran.
- Animasi masuk bertingkat.

### Pricing / Paket Penugasan
- Kartu unggulan dengan gradient krem, glow emas, badge "★ Recommended".
- Checkmark bulat emas kustom untuk daftar fitur.
- Garis harga memudar di kanan amount.
- Kartu unggulan tampil paling atas di mobile (`order: -1`).

### Insights / Artikel
- Banner gradient 3-stop + ornamen lingkaran yang berputar saat hover.
- Panah tautan dalam lingkaran emas + garis bawah animasi.
- Judul berubah warna emas saat hover.
- Background section tetap `var(--paper)` (tidak diubah).

### Contact / Hubungi Kami
- Kartu kontak dengan watermark `logo-kja.png`, ornamen lingkaran, gradient navy.
- Ikon SVG menggantikan emoji `⌖ ✉ ◉`.
- Hover baris bergeser + ikon berubah emas.
- Input form: focus ring emas `0 0 0 4px`, background krem saat fokus.
- Peta: shadow lembut, hover shadow membesar.
- Background section tetap (tidak diubah).

### CTA Solo
- Class baru `.cta-solo` / `.cta-solo-btn` — tidak bertabrakan dengan `.services-cta` di halaman Layanan.
- Gradient emas 3-stop, kilau melintas saat hover, panah bergerak, feedback klik.

---

## ✨ Fitur Baru

- Animasi masuk bertingkat via `IntersectionObserver` (About, Process, Industries, Pricing, Insights, Contact).
- Hover interaktif: naik, shadow, border emas, ikon rotasi, panah bergeser.
- Dark mode (`prefers-color-scheme`) untuk semua section yang di-redesign.
- `prefers-reduced-motion`: animasi dimatikan otomatis untuk pengguna yang memilih.
- `:focus-within` / `:focus-visible`: outline emas untuk aksesibilitas keyboard.
- Ornamen logo KJA: watermark `logo-kja.png` di kartu statement & contactbox.
- Ikon SVG menggantikan emoji di sektor & kontak.
- Badge "Recommended" di paket unggulan.
- Fallback HTML lama: CSS tetap bekerja meski struktur HTML belum diperbarui.

---

## 📱 Responsive

- Semua section diuji di breakpoint 980px, 760px, 430px.
- Kartu unggulan pricing tampil paling atas di mobile.
- Values about jadi layout horizontal di <520px.
- Grid menyesuaikan: 4 → 2 → 1 kolom (Process, Industries), 3 → 1 kolom (Pricing, Insights).

---

## ⚠️ Catatan

- Ganti `logo.png` / `logo-kja.png` dengan path logo Anda yang sebenarnya.
- `filter: brightness(0) invert(1)` membuat logo jadi putih — hapus jika logo sudah putih.
- File tidak memakai framework eksternal (CSS/JS murni).