import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="w-full">
      <section className="bg-accent py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Kami siap mendengar saran, kritik, atau membantu menjawab pertanyaan Anda terkait layanan PrimaCare.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info & Details */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">Informasi Kontak</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Telepon & WhatsApp</h4>
                      <p className="text-muted-foreground">(021) 123-4567</p>
                      <p className="text-muted-foreground">0812-3456-7890 (WA)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Email Resmi</h4>
                      <p className="text-muted-foreground">info@primacare.com</p>
                      <p className="text-muted-foreground">rekrutmen@primacare.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Alamat Kami</h4>
                      <p className="text-muted-foreground">Jl. Kesehatan No. 123, Menteng</p>
                      <p className="text-muted-foreground">Jakarta Pusat, DKI Jakarta</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Waktu Layanan</h4>
                      <p className="text-muted-foreground">UGD: 24 Jam</p>
                      <p className="text-muted-foreground">Admin: 08:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-3xl overflow-hidden shadow-xl h-80 bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground flex-col gap-4">
                  <MapPin className="h-12 w-12 text-primary/50" />
                  <p className="font-medium text-lg">Peta Lokasi Interaktif (Embedded Map)</p>
                  <p className="text-sm px-12 text-center">PrimaCare Hospital, Jl. Kesehatan No. 123, Menteng, Jakarta Pusat</p>
                </div>
                {/* Integration would go here: <iframe src="..." /> */}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-2xl p-8 rounded-3xl bg-white">
                <CardContent className="p-0 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                      <MessageSquare className="h-6 w-6 text-accent" />
                      Kirim Pesan
                    </h3>
                    <p className="text-muted-foreground">Silakan lengkapi formulir di bawah ini, tim kami akan merespons dalam 1x24 jam.</p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input id="name" placeholder="Masukkan nama Anda" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="nama@email.com" className="h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subjek / Perihal</Label>
                      <Input id="subject" placeholder="Contoh: Pertanyaan Biaya Rawat Inap" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan Anda</Label>
                      <Textarea id="message" placeholder="Tuliskan pesan Anda secara detail..." className="min-h-[150px]" />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 py-6 text-lg rounded-full font-bold">
                      <Send className="mr-2 h-5 w-5" /> Kirim Pesan Sekarang
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
