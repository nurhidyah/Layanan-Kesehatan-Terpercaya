import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Heart, 
  Baby, 
  Brain, 
  Bone, 
  Eye, 
  Stethoscope, 
  Microscope, 
  Activity,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const departments = [
  { 
    id: 'service-cardio', 
    title: 'Kardiologi & Pembuluh Darah', 
    icon: Heart, 
    desc: 'Melayani konsultasi, diagnosa, hingga tindakan intervensi jantung oleh tim spesialis berpengalaman.',
    features: ['Echocardiography', 'Stress Test', 'Catheterization Lab']
  },
  { 
    id: 'service-pediatric', 
    title: 'Kesehatan Ibu & Anak (KIA)', 
    icon: Baby, 
    desc: 'Perawatan komprehensif mulai dari masa kehamilan, persalinan, hingga pemantauan tumbuh kembang anak.',
    features: ['Persalinan Normal/Sesar', 'Vaksinasi Anak', 'Laktasi Center']
  },
  { 
    id: 'service-surgery', 
    title: 'Bedah Umum & Spesialis', 
    icon: Stethoscope, 
    desc: 'Tindakan bedah dengan teknik minimal invasif (Laparoskopi) untuk pemulihan yang lebih cepat.',
    features: ['Bedah Digestive', 'Bedah Onkologi', 'Laparoskopi']
  },
  { 
    id: 'neuro', 
    title: 'Neurologi (Saraf)', 
    icon: Brain, 
    desc: 'Penanganan gangguan sistem saraf termasuk stroke, epilepsi, dan manajemen nyeri kronis.',
    features: ['EEG', 'EMG', 'Neuro Rehabilitasi']
  },
  { 
    id: 'ortho', 
    title: 'Ortopedi (Tulang & Sendi)', 
    icon: Bone, 
    desc: 'Spesialisasi dalam penanganan cedera olahraga, trauma tulang, dan penggantian sendi.',
    features: ['Joint Replacement', 'Sports Medicine', 'Fisioterapi']
  },
  { 
    id: 'eye', 
    title: 'Oftalmologi (Mata)', 
    icon: Eye, 
    desc: 'Layanan pemeriksaan kesehatan mata rutin hingga tindakan operasi katarak modern.',
    features: ['Operasi Katarak', 'Pemeriksaan Refraksi', 'Glaukoma Center']
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      <section className="bg-accent py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Layanan Medis & Departemen</h1>
          <p className="text-xl text-white/80 max-w-2xl">Menyediakan berbagai departemen spesialis dengan dukungan fasilitas medis tercanggih.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, i) => {
              const img = PlaceHolderImages.find(p => p.id === dept.id);
              return (
                <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-none bg-white overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={img?.imageUrl || 'https://picsum.photos/seed/pc-service/600/400'}
                      alt={dept.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                      <dept.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary">{dept.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{dept.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {dept.features.map((f, j) => (
                        <span key={j} className="text-xs font-semibold bg-secondary text-primary px-3 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                    <Button variant="ghost" className="p-0 text-accent hover:text-accent/80 hover:bg-transparent flex items-center gap-2 group">
                      Selengkapnya <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Banner */}
      <section className="bg-primary py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Fasilitas Penunjang Medis</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Activity className="h-12 w-12 mx-auto text-white/70" />
                <p className="font-semibold">Unit Gawat Darurat 24 Jam</p>
              </div>
              <div className="space-y-4">
                <Microscope className="h-12 w-12 mx-auto text-white/70" />
                <p className="font-semibold">Laboratorium Klinik</p>
              </div>
              <div className="space-y-4">
                <Heart className="h-12 w-12 mx-auto text-white/70" />
                <p className="font-semibold">Intensive Care (ICU/NICU)</p>
              </div>
              <div className="space-y-4">
                <Stethoscope className="h-12 w-12 mx-auto text-white/70" />
                <p className="font-semibold">Farmasi Lengkap 24 Jam</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
