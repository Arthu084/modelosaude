"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  CheckCircle2,
  Coffee,
  Sparkles,
  ParkingCircle,
  Wifi,
  Stethoscope,
  Instagram,
  Youtube,
  Linkedin,
  Menu,
  Star,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { LinkCard } from '@/components/link-card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from '@/components/ui/badge';
import { TestimonialCarousel } from '@/components/testimonial-carousel';
import { Card } from '@/components/ui/card';


const profileData = {
  nome: 'Dra. Fernanda Costa',
  especialidade: 'Dermatologista',
  crm: 'CRM-SP 98765',
  atendimento: 'Atendimento presencial e online',
  frase: 'Cuidando da sua saúde com atenção, empatia e ciência.',
  headline: 'Dermatologia Clínica e Estética',
  fotoPerfilId: 'doctor-profile',
  fotoHeroId: 'doctor-hero',
  whatsapp: 'https://wa.me/5511999999999',
  telefone: 'tel:+5511999999999',
  endereco: {
    rua: 'Rua das Flores, 123, Bairro Jardim',
    cidade: 'São Paulo, SP',
    linkMapa: 'https://maps.app.goo.gl/uXy5fJq2k3zXv8wY9',
    nomeClinica: 'Clínica Dermacare',
  },
  atendimentoOnline: 'https://www.doctoralia.com.br/',
};

const benefits = [
  { text: 'Consultas personalizadas com foco no seu histórico e rotina' },
  { text: 'Acompanhamento contínuo para garantir resultados reais' },
  { text: 'Atendimento humanizado, sem pressa' },
];

const clinicFeatures = [
    { icon: Coffee, text: "Ambiente climatizado e confortável com café e água à disposição." },
    { icon: Sparkles, text: "Equipamentos modernos para diagnósticos e tratamentos precisos." },
    { icon: Wifi, text: "Wi-Fi cortesia para pacientes e acompanhantes em nossa sala de espera." },
    { icon: ParkingCircle, text: "Localização privilegiada com estacionamento conveniado próximo." },
]

const treatmentItems = [
    { icon: Stethoscope, text: "Controle da acne e manchas" },
    { icon: Stethoscope, text: "Preenchimento facial e toxina botulínica" },
    { icon: Stethoscope, text: "Rejuvenescimento a laser" },
    { icon: Stethoscope, text: "Cuidados com Melasma" },
]

const socialLinks = [
    {
        href: "https://instagram.com",
        icon: Instagram,
        title: "Siga-me no Instagram"
    },
    {
        href: "https://youtube.com",
        icon: Youtube,
        title: "Acompanhe no YouTube"
    },
    {
        href: "https://linkedin.com",
        icon: Linkedin,
        title: "Conecte-se no LinkedIn"
    }
]

const faqItems = [
    {
        question: "Quais convênios vocês aceitam?",
        answer: "No momento, atendo apenas consultas particulares para oferecer um atendimento mais completo e individualizado. Você pode solicitar um recibo para pedir reembolso ao seu plano de saúde, se aplicável."
    },
    {
        question: "Como funciona a primeira consulta?",
        answer: "Na primeira consulta, faremos uma avaliação completa da sua pele, histórico de saúde e rotina. Conversaremos sobre suas queixas e objetivos para, juntos, definirmos o melhor plano de tratamento para você."
    },
    {
        question: "Quais são as formas de pagamento?",
        answer: "Aceitamos pagamentos via Pix, transferência bancária e cartões de crédito. O pagamento pode ser feito no dia da consulta."
    }
]

const menuLinks = [
  { href: "#benefits", label: "Como posso te ajudar" },
  { href: "#treatments", label: "Tratamentos" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#clinic-features", label: "Diferenciais da Clínica" },
  { href: "#faq", label: "Perguntas Frequentes" },
  { href: "#connect", label: "Conecte-se Comigo" },
  { href: "#location", label: "Onde me encontrar" },
];

const testimonials = [
  {
    quote:
      "A Dra. Fernanda me explicou tudo com paciência e clareza. Saí da consulta tranquila e confiante!",
    author: "Maria S.",
    avatarUrl: "https://picsum.photos/seed/patient1/100/100",
    avatarHint: "woman smiling",
  },
  {
    quote:
      "Um atendimento exemplar. A Dra. Fernanda é muito atenciosa e competente. Estou muito satisfeita com o tratamento.",
    author: "Joana L.",
    avatarUrl: "https://picsum.photos/seed/patient2/100/100",
    avatarHint: "woman happy",
  },
  {
    quote:
      "Profissional excelente! Me senti muito à vontade durante a consulta e o tratamento superou minhas expectativas.",
    author: "Carlos M.",
    avatarUrl: "https://picsum.photos/seed/patient3/100/100",
    avatarHint: "man portrait",
  },
  {
    quote:
      "A melhor dermatologista que já consultei. Atendimento humanizado e resultados visíveis em pouco tempo.",
    author: "Beatriz R.",
    avatarUrl: "https://picsum.photos/seed/patient4/100/100",
    avatarHint: "woman content",
  },
];


export default function Home() {
  const profileImage = PlaceHolderImages.find(
    (p) => p.id === profileData.fotoPerfilId
  );
  const heroImage = PlaceHolderImages.find(
    (p) => p.id === profileData.fotoHeroId
  );

  return (
    <div className="flex flex-col min-h-dvh bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 transition-all duration-300 bg-primary/80 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              {heroImage && (
                <AvatarImage
                  src={heroImage.imageUrl}
                  alt={profileData.endereco.nomeClinica}
                  data-ai-hint={heroImage.imageHint}
                />
              )}
              <AvatarFallback className="bg-primary/10 text-primary-foreground">
                {profileData.endereco.nomeClinica.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold text-sm text-primary-foreground">{profileData.endereco.nomeClinica}</p>
              <p className="text-[11px] text-background/80">Consulta Presencial | Consulta Online</p>
            </div>
          </div>
          <div className="hidden sm:flex">
             <Button
                asChild
                size="sm"
                variant="secondary"
                className="rounded-md shadow-md transition-transform transform hover:scale-105 text-sm"
              >
                <Link
                  href={profileData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AGENDAR MINHA CONSULTA
                </Link>
              </Button>
          </div>
          <div className="sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-primary/80 text-primary-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {menuLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="py-6 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex flex-col items-center space-y-2">
                <Avatar className="w-20 h-20 shadow-lg">
                  {profileImage && (
                    <AvatarImage
                      src={profileImage.imageUrl}
                      alt={profileData.nome}
                      data-ai-hint={profileImage.imageHint}
                      className="shadow-lg"
                    />
                  )}
                  <AvatarFallback className="bg-primary/10 text-3xl">
                    {profileData.nome.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-sm">{profileData.nome}</p>
                  <p className="text-xs text-muted-foreground">{profileData.especialidade} | {profileData.crm}</p>
                </div>
              </div>
              <Badge variant="secondary" className="text-primary-foreground bg-primary/10 text-primary font-semibold">Consulta Presencial | Consulta Online</Badge>
              <h1 className="text-2xl font-bold tracking-tight lg:text-3xl max-w-2xl">
                {profileData.frase}
              </h1>
              <p className="text-sm text-muted-foreground max-w-3xl">
                Nossa equipe está preparada para oferecer um atendimento ágil, humano e com total privacidade.
              </p>
             
              <Button
                asChild
                size="lg"
                className="w-full max-w-md font-bold py-6 text-sm rounded-md shadow-lg transition-transform transform hover:scale-105 animate-pulse-glow"
              >
                <Link
                  href={profileData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AGENDAR MINHA CONSULTA
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-center mb-4">Como posso te ajudar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center p-2 rounded-lg">
                      <CheckCircle2 className="h-7 w-7 text-primary mr-4 flex-shrink-0" />
                      <p className="text-md text-foreground/80">{benefit.text}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section id="treatments" className="py-8 bg-primary/5">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-xl font-bold mb-4">Tratamentos e Procedimentos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0 text-left">
                    {treatmentItems.map((item, index) => (
                        <div key={index} className="flex items-center p-2 rounded-lg">
                            <item.icon className="h-7 w-7 text-primary mr-4 flex-shrink-0" />
                            <p className="text-md text-foreground/80">{item.text}</p>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic max-w-2xl mx-auto">
                    “Cada tratamento é personalizado de acordo com a necessidade e o tipo de pele do paciente.”
                </p>
            </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-8 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-xl font-bold text-center mb-6">
              O que minhas
              <br />
              pacientes dizem:
            </h2>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>
        
        {/* Clinic Features Section */}
        <section id="clinic-features" className="py-8 bg-primary/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-center mb-4">Diferenciais da clínica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
              {clinicFeatures.map((feature, index) => (
                <div key={index} className="flex items-center p-2 rounded-lg">
                  <feature.icon className="h-7 w-7 text-primary mr-4 flex-shrink-0" />
                  <p className="text-md text-foreground/80">{feature.text}</p>
                </div>
              ))}
            </div>
            {heroImage && (
              <div className="mt-6">
                <Image
                  src={heroImage.imageUrl}
                  alt={profileData.endereco.nomeClinica}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover w-full mx-auto"
                  data-ai-hint={heroImage.imageHint}
                />
              </div>
            )}
             <div className="text-center pt-4">
                 <Button
                    asChild
                    size="lg"
                    className="w-full max-w-xs font-bold py-6 text-sm rounded-md shadow-lg transition-transform transform hover:scale-105 animate-pulse-glow"
                    >
                    <Link
                        href={profileData.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        AGENDAR MINHA CONSULTA
                    </Link>
                 </Button>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section id="connect" className="pt-4 pb-4 bg-muted/40">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <h2 className="text-xl font-bold mb-4">Conecte-se Comigo</h2>
                <div className="flex flex-col gap-1">
                    {socialLinks.map((link) => (
                        <LinkCard key={link.href} {...link} />
                    ))}
                </div>
            </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-8">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-xl font-bold mb-4 text-center">Perguntas Frequentes</h2>
                <Accordion type="single" collapsible className="w-full text-left">
                    {faqItems.map((item, index) => (
                         <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="font-semibold text-md hover:no-underline">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-md text-foreground/80">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

         {/* Location Section */}
        <section id="location" className="pt-4 pb-8 bg-muted/50">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-xl font-bold mb-4">Onde me encontrar</h2>
                <p className="text-md text-muted-foreground mb-4">
                    <MapPin className="inline-block h-5 w-5 mr-2 text-primary" />
                    {profileData.endereco.nomeClinica} - {profileData.endereco.rua}, {profileData.endereco.cidade}
                </p>
                <div className="aspect-video rounded-lg overflow-hidden border shadow-md">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197574028107!2d-46.65870422474938!3d-23.5613461788002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700243292450!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>

      </main>

      <footer className="py-8 bg-muted border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p className="text-xs">Todos os direitos reservados. © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
