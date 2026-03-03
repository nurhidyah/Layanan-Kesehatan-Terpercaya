'use server';
/**
 * @fileOverview A Genkit flow for an AI-powered chatbot that answers common patient questions and guides them to relevant information on the hospital website.
 *
 * - patientFaqChatbot - A function that handles the patient FAQ chatbot interaction.
 * - PatientFaqChatbotInput - The input type for the patientFaqChatbot function.
 * - PatientFaqChatbotOutput - The return type for the patientFaqChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const PatientFaqChatbotInputSchema = z.object({
  question: z.string().describe('The user\'s question about hospital services, schedules, or patient information.'),
});
export type PatientFaqChatbotInput = z.infer<typeof PatientFaqChatbotInputSchema>;

// Output Schema
const PatientFaqChatbotOutputSchema = z.object({
  answer: z.string().describe('A concise and helpful answer to the user\'s question.'),
  suggestedLink: z.string().url().optional().describe('An optional full URL to a relevant page on the hospital website, if applicable.'),
  linkText: z.string().optional().describe('The display text for the suggested link, if a link is provided.'),
});
export type PatientFaqChatbotOutput = z.infer<typeof PatientFaqChatbotOutputSchema>;

// Wrapper function
export async function patientFaqChatbot(input: PatientFaqChatbotInput): Promise<PatientFaqChatbotOutput> {
  return patientFaqChatbotFlow(input);
}

// Genkit Prompt Definition
const patientFaqChatbotPrompt = ai.definePrompt({
  name: 'patientFaqChatbotPrompt',
  input: {schema: PatientFaqChatbotInputSchema},
  output: {schema: PatientFaqChatbotOutputSchema},
  prompt: `Anda adalah asisten AI yang ramah dan profesional untuk Rumah Sakit PrimaCare.
Tugas Anda adalah menjawab pertanyaan umum pasien atau pengunjung tentang layanan rumah sakit, jadwal, atau informasi pasien secara singkat dan jelas.
Jika relevan, sarankan tautan *lengkap* ke halaman yang sesuai di situs web rumah sakit untuk informasi lebih lanjut. Contoh: "https://www.primacare.com/services".
Pastikan jawaban Anda akurat, singkat, dan mudah dipahami.
Jangan memberikan informasi medis atau saran diagnosis.

Berikut adalah beberapa contoh tautan relevan yang bisa Anda gunakan (gunakan 'https://www.primacare.com' sebagai domain dasar):
- Untuk pertanyaan tentang layanan: https://www.primacare.com/services
- Untuk pertanyaan tentang dokter: https://www.primacare.com/doctors
- Untuk pertanyaan tentang informasi pasien (jam besuk, pendaftaran): https://www.primacare.com/patient-info
- Untuk pertanyaan tentang kontak atau lokasi: https://www.primacare.com/contact
- Untuk pertanyaan umum atau tentang kami: https://www.primacare.com/about

Pertanyaan pengguna: {{{question}}}

Berikan jawaban Anda dalam format JSON seperti ini:
{
  "answer": "Jawaban Anda di sini.",
  "suggestedLink": "URL lengkap opsional ke halaman relevan.",
  "linkText": "Teks tampilan untuk tautan opsional."
}`
});

// Genkit Flow Definition
const patientFaqChatbotFlow = ai.defineFlow(
  {
    name: 'patientFaqChatbotFlow',
    inputSchema: PatientFaqChatbotInputSchema,
    outputSchema: PatientFaqChatbotOutputSchema,
  },
  async (input) => {
    const {output} = await patientFaqChatbotPrompt(input);
    return output!;
  }
);
