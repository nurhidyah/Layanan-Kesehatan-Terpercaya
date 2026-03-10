
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Baby, 
  Activity, 
  Microscope, 
  Ambulance, 
  Clock, 
  CalendarCheck,
  ArrowRight
} from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { AppointmentDialog } from '@/components/AppointmentDialog';

const featuredServices = [
  { icon: Heart, title: 'Kardiologi', desc: 'Layanan kesehatan jantung komprehensif dengan teknologi terkini.' },
  { icon: Baby, title: 'Pediatri', desc: 'Perawatan penuh kasih sayang untuk tumbuh kembang buah hati Anda.' },
  { icon: Activity, title: 'Radiologi', desc: 'Diagnosa akurat dengan peralatan pencitraan medis modern.' },
  { icon: Microscope, title: 'Laboratorium', desc: 'Hasil uji klinis cepat dan terpercaya untuk diagnosa tepat.' },
];

export default function Home() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-hospital');

  return (
    <div className="flex flex-col w-full">
      <AppointmentDialog open={appointmentOpen} onOpenChange={setAppointmentOpen} />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <Image
          src={heroImg?.imageUrl || ''}
          alt="PrimaCare Hospital"
          fill
          className="object-cover"
          priority
          data-ai-hint="hospital building"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Kesehatan Anda, <br /> Prioritas Kami.
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              PrimaCare Hospital menghadirkan standar medis internasional dengan layanan yang ramah dan profesional.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => setAppointmentOpen(true)}
                className="bg-accent hover:bg-accent/90 text-lg px-8 py-6 rounded-full"
              >
                Janji Temu
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full">
                <Link href="/services">Lihat Layanan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Info */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-xl border-none">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Ambulance className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Gawat Darurat</h3>
                  <p className="text-muted-foreground mb-4">Tim medis siaga 24/7 untuk kondisi darurat.</p>
                  <p className="font-bold text-primary text-lg">Hotline: (021) 123-4567</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-xl border-none">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="bg-accent/10 p-4 rounded-xl">
                  <CalendarCheck className="h-10 w-10 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Janji Temu</h3>
                  <p className="text-muted-foreground mb-4">Pesan jadwal konsultasi dengan dokter spesialis.</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-accent font-bold hover:no-underline"
                    onClick={() => setAppointmentOpen(true)}
                  >
                    Daftar Online <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-xl border-none">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="bg-secondary p-4 rounded-xl">
                  <Clock className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Jam Layanan</h3>
                  <p className="text-muted-foreground">Poliklinik: 08:00 - 21:00</p>
                  <p className="text-muted-foreground">UGD: Buka 24 Jam</p>
                  <p className="text-muted-foreground">Admin: 08:00 - 16:00</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Layanan Medis Unggulan</h2>
            <p className="text-lg text-muted-foreground">
              Kami menyediakan berbagai spesialisasi medis yang didukung oleh tenaga ahli dan fasilitas terkini.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, idx) => (
              <Card key={idx} className="group hover:shadow-2xl transition-all duration-300 border-none bg-white p-8">
                <div className="mb-6 inline-block p-4 bg-background rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="h-10 w-10 text-primary group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full">
              <Link href="/services">Lihat Semua Layanan</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="bg-white section-padding overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={PlaceHolderImages.find(img => img.id === 'about-hospital')?.imageUrl || ''}
                  alt="About PrimaCare"
                  width={800}
                  height={600}
                  className="object-cover"
                  data-ai-hint="hospital lobby"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent rounded-2xl -z-10 hidden md:block" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary rounded-full -z-10 hidden md:block" />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-primary">Melayani dengan Sepenuh Hati</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Berdiri sejak tahun 2005, PrimaCare Hospital telah menjadi mitra terpercaya bagi ribuan keluarga dalam menjaga kesehatan. Kami berkomitmen memberikan pelayanan medis yang berorientasi pada keselamatan pasien.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h5 className="text-3xl font-bold text-accent">50+</h5>
                  <p className="text-muted-foreground font-medium">Dokter Spesialis</p>
                </div>
                <div>
                  <h5 className="text-3xl font-bold text-accent">200+</h5>
                  <p className="text-muted-foreground font-medium">Kapasitas Tempat Tidur</p>
                </div>
                <div>
                  <h5 className="text-3xl font-bold text-accent">24 Jam</h5>
                  <p className="text-muted-foreground font-medium">Layanan IGD & Farmasi</p>
                </div>
                <div>
                  <h5 className="text-3xl font-bold text-accent">A+</h5>
                  <p className="text-muted-foreground font-medium">Akreditasi Nasional</p>
                </div>
              </div>
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                <Link href="/about">Pelajari Lebih Lanjut</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
