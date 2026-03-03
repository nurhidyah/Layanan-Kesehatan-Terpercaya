import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Calendar, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';

const doctors = [
  {
    id: 'doctor-1',
    name: 'dr. Andi Pratama, Sp.JP',
    specialization: 'Spesialis Jantung & Pembuluh Darah',
    experience: '12 Tahun',
    education: 'Universitas Indonesia'
  },
  {
    id: 'doctor-2',
    name: 'dr. Maya Sari, Sp.A',
    specialization: 'Spesialis Anak',
    experience: '8 Tahun',
    education: 'Universitas Gadjah Mada'
  },
  {
    id: 'doctor-3',
    name: 'dr. Budi Santoso, Sp.B',
    specialization: 'Spesialis Bedah Umum',
    experience: '15 Tahun',
    education: 'Universitas Airlangga'
  },
  {
    id: 'dr4',
    name: 'dr. Rina Wijaya, Sp.OG',
    specialization: 'Spesialis Kandungan & Kebidanan',
    experience: '10 Tahun',
    education: 'Universitas Indonesia',
    imgId: 'doctor-2'
  },
  {
    id: 'dr5',
    name: 'dr. Hendra Kurniawan, Sp.S',
    specialization: 'Spesialis Saraf',
    experience: '11 Tahun',
    education: 'Universitas Diponegoro',
    imgId: 'doctor-1'
  },
  {
    id: 'dr6',
    name: 'dr. Sarah Quinn, Sp.M',
    specialization: 'Spesialis Mata',
    experience: '7 Tahun',
    education: 'Universitas Indonesia',
    imgId: 'doctor-3'
  }
];

export default function DoctorsPage() {
  return (
    <div className="w-full">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dokter & Tim Medis</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">Tim dokter ahli kami siap memberikan penanganan medis terbaik untuk kesembuhan Anda.</p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="Cari dokter atau spesialisasi..." 
              className="bg-white text-foreground pl-12 h-14 rounded-full border-none shadow-xl focus-visible:ring-accent"
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {doctors.map((doctor) => {
              const img = PlaceHolderImages.find(p => p.id === (doctor.imgId || doctor.id));
              return (
                <Card key={doctor.id} className="group overflow-hidden border-none bg-white shadow-md hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-[350px] overflow-hidden">
                    <Image
                      src={img?.imageUrl || 'https://picsum.photos/seed/doctor/400/500'}
                      alt={doctor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <Button className="w-full bg-accent hover:bg-accent/90 rounded-full">Lihat Profil Lengkap</Button>
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-primary mb-2">{doctor.name}</h3>
                    <p className="text-accent font-semibold mb-4 text-sm uppercase tracking-wider">{doctor.specialization}</p>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground border-t pt-4">
                      <div className="flex items-center justify-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Poliklinik PrimaCare</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Tersedia: Sen - Sab</span>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-6 w-full border-primary text-primary hover:bg-primary hover:text-white rounded-full">Buat Janji Temu</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
