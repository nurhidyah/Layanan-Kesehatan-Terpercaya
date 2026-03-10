'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, Loader2, CheckCircle2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useFirestore, errorEmitter, FirestorePermissionError } from '@/firebase';

const formSchema = z.object({
  patientName: z.string().min(2, { message: 'Nama harus minimal 2 karakter.' }),
  patientEmail: z.string().email({ message: 'Email tidak valid.' }),
  patientPhone: z.string().min(10, { message: 'Nomor telepon minimal 10 digit.' }),
  appointmentDate: z.date({ required_error: 'Tanggal harus dipilih.' }),
  doctorName: z.string().min(1, { message: 'Silakan pilih dokter.' }),
  complaint: z.string().min(5, { message: 'Mohon jelaskan keluhan Anda.' }),
});

const doctors = [
  'dr. Andi Pratama, Sp.JP (Jantung)',
  'dr. Maya Sari, Sp.A (Anak)',
  'dr. Budi Santoso, Sp.B (Bedah)',
  'dr. Rina Wijaya, Sp.OG (Kandungan)',
  'dr. Hendra Kurniawan, Sp.S (Saraf)',
  'dr. Sarah Quinn, Sp.M (Mata)',
];

interface AppointmentDialogProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function AppointmentDialog({ children, open, onOpenChange }: AppointmentDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const db = useFirestore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientName: '',
      patientEmail: '',
      patientPhone: '',
      doctorName: '',
      complaint: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const appointmentData = {
      ...values,
      appointmentDate: values.appointmentDate.toISOString(),
      status: 'pending',
      createdAt: serverTimestamp(),
    };

    const appointmentsRef = collection(db, 'appointments');
    addDoc(appointmentsRef, appointmentData)
      .then(() => {
        setIsSuccess(true);
        form.reset();
        setIsSubmitting(false);
      })
      .catch(async (error) => {
        const permissionError = new FirestorePermissionError({
          path: 'appointments',
          operation: 'create',
          requestResourceData: appointmentData,
        });
        errorEmitter.emit('permission-error', permissionError);
        setIsSubmitting(false);
      });
  }

  return (
    <Dialog open={open} onOpenChange={(val) => {
      onOpenChange?.(val);
      if (!val) setIsSuccess(false);
    }}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="py-12 flex flex-col items-center text-center space-y-4">
            <CheckCircle2 className="h-16 w-16 text-green-500 animate-bounce" />
            <h2 className="text-2xl font-bold text-primary">Pendaftaran Berhasil!</h2>
            <p className="text-muted-foreground px-8">
              Terima kasih telah melakukan pendaftaran. Tim kami akan menghubungi Anda melalui WhatsApp atau Email untuk konfirmasi jadwal.
            </p>
            <Button onClick={() => onOpenChange?.(false)} className="rounded-full px-8">Tutup</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">Buat Janji Temu Online</DialogTitle>
              <DialogDescription>
                Isi formulir di bawah ini untuk memesan jadwal konsultasi dengan dokter kami.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
                <FormField
                  control={form.control}
                  name="patientName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap Pasien</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan nama sesuai KTP" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="patientEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="contoh@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="patientPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nomor WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="0812xxxxxxxx" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="appointmentDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Tanggal Janji Temu</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pilih tanggal</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="doctorName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pilih Dokter</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih Dokter Spesialis" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {doctors.map((doc) => (
                              <SelectItem key={doc} value={doc}>{doc}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="complaint"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Keluhan / Alasan Kunjungan</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Jelaskan secara singkat gejala atau keluhan yang dirasakan..." 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 rounded-full h-12 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Memproses...
                    </>
                  ) : (
                    'Kirim Pendaftaran'
                  )}
                </Button>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
