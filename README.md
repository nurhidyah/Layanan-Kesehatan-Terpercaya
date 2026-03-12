# PrimaCare Hospital Web App

Ini adalah prototipe aplikasi web Rumah Sakit PrimaCare yang dibangun menggunakan Next.js, Tailwind CSS, ShadCN UI, dan Firebase.

## Fitur Utama

- **Pendaftaran Online**: Formulir janji temu dokter yang terintegrasi dengan Firebase Firestore.
- **Chatbot AI**: Asisten virtual untuk menjawab pertanyaan umum pasien (Powered by Genkit).
- **Informasi Layanan**: Daftar departemen medis dan tim dokter ahli.
- **Responsif**: Tampilan optimal di perangkat mobile maupun desktop.

## Cara Mengunggah ke GitHub

Buka terminal Anda di folder proyek ini dan jalankan perintah berikut secara berurutan:

1. **Inisialisasi ulang Git**:
   ```bash
   git init
   ```

2. **Hapus remote lama (PENTING jika muncul error 'remote origin already exists')**:
   ```bash
   git remote remove origin 2>/dev/null || true
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

6. **Unggah ke GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Solusi Error (Troubleshooting)

- **Error: `fatal: remote origin already exists`**:
  Jalankan `git remote remove origin`, lalu ulangi langkah `git remote add origin ...`.
- **Error: `fatal: repository '...' not found`**:
  Pastikan Anda sudah membuat repositori bernama **Layanan-Kesehatan-Terpercaya** secara manual di akun GitHub Anda (github.com/new).
- **Error: `Permission denied`**:
  Pastikan Anda sudah login ke GitHub di terminal menggunakan GitHub CLI (`gh auth login`) atau memasukkan Personal Access Token (PAT) jika diminta.

## Teknologi yang Digunakan

- **Next.js 15** (App Router)
- **Firebase** (Firestore & Auth)
- **Genkit** (AI Framework)
- **Tailwind CSS** (Styling)
- **Lucide React** (Icons)
- **ShadCN UI** (Components)