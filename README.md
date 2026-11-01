# Website BIGSEN INDONESIA

Website statis (HTML, CSS, JavaScript tanpa framework).

## Struktur
- index.html : halaman utama
- css/style.css : gaya (responsif, mendukung mode terang dan gelap)
- js/main.js : menu mobile, filter dan galeri proyek, form kontak, tombol WhatsApp
- assets/ : foto proyek dan produk yang sudah dioptimasi, favicon

## Menjalankan lokal
Buka index.html di browser, atau jalankan `python3 -m http.server` lalu buka http://localhost:8000

## Deploy (paling mudah: Netlify)
1. Buka app.netlify.com/drop lalu seret folder ini.
2. Form kontak otomatis aktif di Netlify (pesan masuk ke dashboard Netlify). Di hosting lain, form membuka aplikasi email sebagai cadangan.
3. Setelah punya domain, ubah `og:image` di index.html menjadi alamat lengkap (https://domainanda/assets/img/og.jpg).

## Yang perlu diisi
- Nomor WhatsApp: isi `whatsapp` di CONFIG pada js/main.js, tombol muncul otomatis.
- Teks misi (di compro isinya sama dengan visi), angka pencapaian, sertifikat, dan profil tim bila klien ingin menampilkannya.
- Pastikan klien punya izin memakai foto bertuliskan "Support Profindo Karya Utama".
