"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, X, Bot, User, ExternalLink } from 'lucide-react';
import { patientFaqChatbot, type PatientFaqChatbotOutput } from '@/ai/flows/patient-faq-chatbot';
import { cn } from '@/lib/utils';

type Message = {
  role: 'bot' | 'user';
  content: string;
  link?: {
    url: string;
    text: string;
  };
};

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Halo! Saya asisten PrimaCare. Ada yang bisa saya bantu terkait layanan rumah sakit kami?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response: PatientFaqChatbotOutput = await patientFaqChatbot({ question: userMsg });
      setMessages(prev => [...prev, {
        role: 'bot',
        content: response.answer,
        link: response.suggestedLink ? { url: response.suggestedLink, text: response.linkText || 'Info Lebih Lanjut' } : undefined
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: 'Maaf, terjadi kesalahan. Silakan coba lagi nanti.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-xl bg-primary hover:bg-primary/90"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      ) : (
        <Card className="w-[350px] sm:w-[400px] h-[500px] flex flex-col shadow-2xl overflow-hidden border-primary/20">
          <CardHeader className="bg-primary text-white py-4 flex flex-row items-center justify-between">
            <CardTitle className="text-base flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Asisten PrimaCare
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>

          <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={cn("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
                <div className={cn(
                  "max-w-[85%] p-3 rounded-2xl text-sm shadow-sm",
                  msg.role === 'user' ? "bg-primary text-white rounded-br-none" : "bg-muted text-foreground rounded-bl-none"
                )}>
                  <p>{msg.content}</p>
                  {msg.link && (
                    <a
                      href={msg.link.url}
                      className="mt-2 flex items-center gap-1 font-semibold text-accent underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {msg.link.text} <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-2xl animate-pulse text-sm">Sedang mengetik...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <CardFooter className="p-3 border-t">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                placeholder="Tanyakan sesuatu..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" size="icon" disabled={isLoading} className="bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
