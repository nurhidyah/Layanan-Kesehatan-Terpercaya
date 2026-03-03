import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Award, Users, Heart, Activity } from 'lucide-react';

export default function AboutPage() {
  const aboutImg = PlaceHolderImages.find(img => img.id === 'about-hospital');

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-xl text-white/80 max-w-2xl">Mengenal lebih jauh PrimaCare Hospital, sejarah kami, dan dedikasi kami untuk kesehatan masyarakat.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-6">Sejarah & Filosofi Kami</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  PrimaCare Hospital didirikan atas dasar keprihatinan terhadap kebutuhan masyarakat akan layanan kesehatan yang berkualitas namun tetap manusiawi. Dimulai dari klinik kecil di pinggiran Jakarta, kami terus bertransformasi hingga menjadi rumah sakit tipe-B yang lengkap.
                </p>
                <p>
                  Filosofi kami adalah "Pasien sebagai Keluarga". Setiap pasien yang datang bukan sekadar nomor antrean, melainkan tamu kehormatan yang kami layani dengan penuh integritas dan empati.
                </p>
                <p>
                  Saat ini, PrimaCare telah memiliki lebih dari 15 poliklinik spesialis dan didukung oleh infrastruktur teknologi medis yang selalu diperbarui setiap tahunnya untuk menjamin akurasi diagnosa.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2">
                <Image
                  src={aboutImg?.imageUrl || 'https://picsum.photos/seed/about/800/600'}
                  alt="Interior PrimaCare"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-accent rounded-3xl -rotate-2 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-background/30 border-none shadow-sm p-8">
              <CardContent className="p-0 space-y-6">
                <div className="bg-primary h-14 w-14 rounded-2xl flex items-center justify-center text-white">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Visi Kami</h3>
                <p className="text-lg text-muted-foreground">
                  Menjadi penyedia layanan kesehatan terpadu pilihan utama masyarakat yang berbasis pada keunggulan layanan medis dan keselamatan pasien yang berkelanjutan di tingkat nasional.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/30 border-none shadow-sm p-8">
              <CardContent className="p-0 space-y-6">
                <div className="bg-accent h-14 w-14 rounded-2xl flex items-center justify-center text-white">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Misi Kami</h3>
                <ul className="space-y-4 text-muted-foreground text-lg list-disc pl-5">
                  <li>Memberikan pelayanan kesehatan secara profesional dengan penuh kasih sayang.</li>
                  <li>Menerapkan sistem manajemen rumah sakit yang akuntabel dan transparan.</li>
                  <li>Meningkatkan kompetensi SDM secara berkelanjutan melalui pelatihan medis.</li>
                  <li>Mengembangkan fasilitas medis sesuai dengan perkembangan teknologi kesehatan modern.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-16">Nilai Utama Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="mx-auto bg-white shadow-md h-20 w-20 rounded-full flex items-center justify-center text-primary">
                <Award className="h-10 w-10" />
              </div>
              <h4 className="text-xl font-bold">Kualitas</h4>
              <p className="text-muted-foreground">Menghasilkan diagnosa dan perawatan medis berstandar tinggi.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto bg-white shadow-md h-20 w-20 rounded-full flex items-center justify-center text-primary">
                <Users className="h-10 w-10" />
              </div>
              <h4 className="text-xl font-bold">Integritas</h4>
              <p className="text-muted-foreground">Bertindak jujur, etis, dan bertanggung jawab kepada semua pasien.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto bg-white shadow-md h-20 w-20 rounded-full flex items-center justify-center text-primary">
                <Heart className="h-10 w-10 text-destructive" />
              </div>
              <h4 className="text-xl font-bold">Empati</h4>
              <p className="text-muted-foreground">Memahami dan merespons kebutuhan fisik dan emosional pasien.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto bg-white shadow-md h-20 w-20 rounded-full flex items-center justify-center text-primary">
                <Activity className="h-10 w-10 text-accent" />
              </div>
              <h4 className="text-xl font-bold">Inovasi</h4>
              <p className="text-muted-foreground">Selalu mencari cara baru untuk meningkatkan efektivitas pengobatan.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
