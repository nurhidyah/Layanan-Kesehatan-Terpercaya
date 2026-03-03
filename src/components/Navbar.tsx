"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Stethoscope, Menu, X, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang Kami' },
  { href: '/services', label: 'Layanan' },
  { href: '/doctors', label: 'Dokter' },
  { href: '/patient-info', label: 'Informasi Pasien' },
  { href: '/contact', label: 'Kontak' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="glass-header">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-primary">PrimaCare</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-accent hover:bg-accent/90">
              <PhoneCall className="mr-2 h-4 w-4" />
              Gawat Darurat
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "lg:hidden absolute top-20 left-0 w-full bg-background border-b transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="flex flex-col gap-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-foreground py-2 border-b border-border/50"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button className="w-full bg-accent mt-4">Gawat Darurat</Button>
        </div>
      </div>
    </header>
  );
}
