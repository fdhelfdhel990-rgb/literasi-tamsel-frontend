# Literasi Tamsel — Frontend Slicing

Versi ini dibuat dari project Laravel kosong berdasarkan screenshot Figma Home dan About Us yang diberikan.

## Yang sudah dibuat

- Navbar desktop + mobile
- Home:
  - Hero
  - Data komunitas
  - Media Partner
  - Publikasi & Kabar Kegiatan
  - Koleksi Buku Terkini
  - Footer
- About Us:
  - Hero/profil
  - Visi & Misi
  - Perjalanan Komunitas
  - Footer
- Responsive layout
- Struktur Blade sederhana
- Vite tetap digunakan

## Asset yang masih placeholder

Karena asset asli tidak ikut dalam ZIP, file berikut adalah placeholder dan perlu diganti dengan asset asli:

- `public/assets/images/logo/logo.svg`
- `public/assets/images/home/hero.jpg.svg`
- `public/assets/images/about/hero.jpg.svg`
- `public/assets/images/about/journey-1.svg`
- `public/assets/images/about/journey-2.svg`
- `public/assets/images/publications/publication-1.svg`
- `public/assets/images/publications/publication-2.svg`
- `public/assets/images/publications/publication-3.svg`
- `public/assets/images/books/book-1.svg`
- `public/assets/images/books/book-2.svg`
- `public/assets/images/books/book-3.svg`
- `public/assets/images/books/book-4.svg`
- `public/assets/images/partners/kai.svg`
- `public/assets/images/partners/garuda-indonesia.svg`
- `public/assets/images/partners/telkom.svg`
- `public/assets/images/partners/pertamina.svg`

### Cara mengganti asset

Kamu bisa mengganti placeholder dengan gambar asli sambil mempertahankan nama file, atau mengubah path `asset(...)` di Blade.

Untuk foto:
- hero Home: landscape, ideal sekitar 1600×900 atau lebih
- hero About: landscape, ideal sekitar 1600×700 atau lebih
- journey/publication: landscape
- buku: portrait
- logo: PNG transparan/SVG
- partner: PNG transparan/SVG

## Menjalankan

```bash
npm install
npm run dev
php artisan serve
```

Buka:
- `/`
- `/about`

Catatan: halaman ini sengaja belum dihubungkan ke backend/API. Data masih statis agar proses slicing visual dapat diselesaikan dahulu.
