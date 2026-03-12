# PrimaCare Hospital Web App

Ini adalah prototipe aplikasi web Rumah Sakit PrimaCare yang dibangun menggunakan Next.js, Tailwind CSS, ShadCN UI, dan Firebase.

## Fitur Utama

- **Pendaftaran Online**: Formulir janji temu dokter yang terintegrasi dengan Firebase Firestore.
- **Chatbot AI**: Asisten virtual untuk menjawab pertanyaan umum pasien (Powered by Genkit).
- **Informasi Layanan**: Daftar departemen medis dan tim dokter ahli.
- **Responsif**: Tampilan optimal di perangkat mobile maupun desktop.

## Cara Mengunggah ke GitHub (Solusi Error Fatal)

Jika Anda menemui error "fatal: remote origin already exists" atau "fatal: repository", jalankan perintah berikut secara berurutan di terminal Anda:

1. **Inisialisasi ulang Git**:
   ```bash
   git init
   ```

2. **Hapus remote lama yang bermasalah**:
   ```bash
   git remote remove origin
   ```

3. **Hubungkan ke repositori GitHub Anda**:
   ```bash
   git remote add origin https://github.com/nurhidyah/Layanan-Kesehatan-Terpercaya.git
   ```

4. **Tambahkan semua file**:
   ```bash
   git add .
   ```

5. **Lakukan commit**:
   ```bash
   git commit -m "Initial commit: PrimaCare Hospital App"
   ```

6. **Atur branch dan Unggah**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Solusi Error Umum

- **Error: `Permission denied`**: Pastikan Anda sudah login ke GitHub di terminal atau menggunakan GitHub CLI (`gh auth login`).
- **Error: `repository not found`**: Pastikan Anda sudah membuat repositori bernama **Layanan-Kesehatan-Terpercaya** secara manual di akun GitHub Anda sebelum menjalankan perintah di atas.

## Teknologi yang Digunakan

- **Next.js 15** (App Router)
- **Firebase** (Firestore & Auth)
- **Genkit** (AI Framework)
- **Tailwind CSS** (Styling)
- **Lucide React** (Icons)
- **ShadCN UI** (Components)