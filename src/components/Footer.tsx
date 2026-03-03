import Link from 'next/link';
import { Stethoscope, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Stethoscope className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">PrimaCare</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Memberikan pelayanan kesehatan bermutu tinggi dengan sentuhan kasih sayang untuk kesembuhan optimal Anda.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tautan Penting</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Layanan Medis</Link></li>
              <li><Link href="/doctors" className="text-muted-foreground hover:text-primary transition-colors">Jadwal Dokter</Link></li>
              <li><Link href="/patient-info" className="text-muted-foreground hover:text-primary transition-colors">Informasi Pasien</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan Unggulan</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground">Instalasi Gawat Darurat</li>
              <li className="text-muted-foreground">Poli Spesialis Jantung</li>
              <li className="text-muted-foreground">Kesehatan Ibu & Anak</li>
              <li className="text-muted-foreground">Radiologi & Laboratorium</li>
              <li className="text-muted-foreground">Rehabilitasi Medik</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Jl. Kesehatan No. 123, Jakarta Pusat, DKI Jakarta</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">(021) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">info@primacare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PrimaCare Hospital. Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
      </div>
    </footer>
  );
}
