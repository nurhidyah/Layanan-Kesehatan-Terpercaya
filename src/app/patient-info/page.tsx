import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Info, ShieldCheck, FileText, ClipboardList } from 'lucide-react';

const faqs = [
  { q: "Bagaimana cara mendaftar sebagai pasien baru?", a: "Pasien baru dapat mendaftar langsung di loket pendaftaran (Admisi) dengan membawa kartu identitas (KTP/SIM/Paspor) atau melalui aplikasi pendaftaran online kami." },
  { q: "Apakah PrimaCare menerima asuransi atau BPJS?", a: "Ya, PrimaCare Hospital bekerja sama dengan berbagai penyedia asuransi kesehatan nasional dan swasta, termasuk BPJS Kesehatan dengan sistem rujukan." },
  { q: "Kapan hasil laboratorium bisa diambil?", a: "Umumnya hasil laboratorium rutin dapat diambil dalam waktu 2-4 jam. Untuk pemeriksaan khusus, petugas kami akan menginformasikan estimasi waktu pengambilan." },
  { q: "Apakah tersedia layanan ambulans jemput pasien?", a: "Ya, kami menyediakan layanan ambulans 24 jam untuk penjemputan gawat darurat atau pemindahan pasien." },
];

export default function PatientInfoPage() {
  return (
    <div className="w-full">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Informasi Pasien</h1>
          <p className="text-xl text-white/80 max-w-2xl">Panduan lengkap mengenai pendaftaran, jam kunjungan, dan hal-hal yang perlu Anda ketahui selama berada di PrimaCare.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content: Procedures */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                  <ClipboardList className="h-8 w-8 text-accent" />
                  Prosedur Rawat Inap
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="border-none bg-white shadow-sm hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center text-xs">1</span>
                        Admisi & Pendaftaran
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Membawa surat rujukan dokter atau masuk melalui IGD, melengkapi berkas administrasi dan jaminan asuransi.
                    </CardContent>
                  </Card>
                  <Card className="border-none bg-white shadow-sm hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center text-xs">2</span>
                        Pemeriksaan Awal
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Melakukan pemeriksaan tanda vital dan laboratorium/radiologi yang diperlukan sebelum masuk ke bangsal perawatan.
                    </CardContent>
                  </Card>
                  <Card className="border-none bg-white shadow-sm hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center text-xs">3</span>
                        Penempatan Kamar
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Memilih tipe kamar sesuai kelas yang tersedia dan persetujuan penanggung jawab pasien.
                    </CardContent>
                  </Card>
                  <Card className="border-none bg-white shadow-sm hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center text-xs">4</span>
                        Proses Pemulangan
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Dokter memberikan izin pulang, penyelesaian administrasi kasir, dan pengambilan obat pulang di farmasi.
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                  <Info className="h-8 w-8 text-accent" />
                  Pertanyaan Sering Diajukan (FAQ)
                </h2>
                <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm p-4">
                  {faqs.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b last:border-none">
                      <AccordionTrigger className="text-left font-semibold py-6 hover:text-primary">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Right Sidebar: Rules & Hours */}
            <div className="space-y-8">
              <Card className="bg-accent text-white border-none p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Clock className="h-6 w-6" />
                    Jam Besuk Pasien
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="border-b border-white/20 pb-3">
                    <p className="font-semibold text-lg">Pagi</p>
                    <p className="text-white/80">11.00 - 13.00 WIB</p>
                  </div>
                  <div className="pb-3">
                    <p className="font-semibold text-lg">Sore</p>
                    <p className="text-white/80">17.00 - 19.00 WIB</p>
                  </div>
                  <p className="text-xs italic bg-white/10 p-3 rounded-lg">
                    *Harap tenang dan menjaga kebersihan selama berkunjung. Maksimal 2 orang per kamar secara bergantian.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm p-6 bg-white">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-3 text-xl text-primary">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                    Tata Tertib
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-sm space-y-3 text-muted-foreground">
                  <p>• Dilarang merokok di area rumah sakit.</p>
                  <p>• Anak di bawah usia 12 tahun tidak diperkenankan masuk area perawatan.</p>
                  <p>• Dilarang membawa makanan berbau tajam.</p>
                  <p>• Harap menjaga ketenangan dan privasi pasien lain.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm p-6 bg-white">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center gap-3 text-xl text-primary">
                    <FileText className="h-6 w-6 text-accent" />
                    Hak Pasien
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-sm space-y-3 text-muted-foreground">
                  <p>Setiap pasien berhak mendapatkan informasi yang jelas mengenai kondisi kesehatan dan rencana pengobatan mereka.</p>
                  <Button variant="link" className="p-0 h-auto text-accent font-semibold">Unduh Panduan Hak & Kewajiban</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
