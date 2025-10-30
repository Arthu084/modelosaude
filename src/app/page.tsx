
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  CheckCircle2,
  Coffee,
  Sparkles,
  ParkingCircle,
  Wifi,
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
import { TestimonialCarousel } from '@/components/testimonial-carousel';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

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
  { text: 'Suporte via WhatsApp para dúvidas entre consultas' },
  { text: 'Opção de atendimento online (telemedicina)' },
];

const clinicFeatures = [
    { icon: Coffee, text: "Ambiente climatizado e confortável com café e água à disposição." },
    { icon: Sparkles, text: "Equipamentos modernos para diagnósticos e tratamentos precisos." },
    { icon: Wifi, text: "Wi-Fi cortesia para pacientes e acompanhantes em nossa sala de espera." },
    { icon: ParkingCircle, text: "Localização privilegiada com estacionamento conveniado próximo." },
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


export default function Home() {
  const profileImage = PlaceHolderImages.find(
    (p) => p.id === profileData.fotoPerfilId
  );
  const heroImage = PlaceHolderImages.find(
    (p) => p.id === profileData.fotoHeroId
  );

  return (
    <div className="flex flex-col min-h-dvh bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              {profileImage && (
                <AvatarImage
                  src={profileImage.imageUrl}
                  alt={profileData.nome}
                  data-ai-hint={profileImage.imageHint}
                />
              )}
              <AvatarFallback className="bg-primary/10">
                {profileData.nome.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold text-base">{profileData.nome}</p>
              <p className="text-xs text-muted-foreground">{profileData.especialidade} | {profileData.crm}</p>
            </div>
          </div>
          <Button
            asChild
            size="sm"
            className="hidden sm:flex rounded-md shadow-md transition-transform transform hover:scale-105 text-xs"
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
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="py-8 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-4">
               <p className="font-semibold text-primary pt-2">{profileData.headline}</p>
              <h1 className="text-2xl font-bold tracking-tight lg:text-3xl max-w-2xl">
                {profileData.frase}
              </h1>
               <div className="w-full max-w-xs pt-2">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={profileData.nome}
                    width={320}
                    height={320}
                    className="rounded-2xl shadow-xl object-cover aspect-square w-full mx-auto"
                    data-ai-hint={heroImage.imageHint}
                  />
                )}
              </div>
             
              <Button
                asChild
                size="lg"
                className="w-full max-w-xs font-bold py-6 text-xs rounded-md shadow-lg transition-transform transform hover:scale-105 animate-pulse-glow"
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
        <section id="benefits" className="pt-8 pb-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-center mb-4">Como posso te ajudar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg">
                      <CheckCircle2 className="h-7 w-7 text-primary mr-4 flex-shrink-0" />
                      <p className="text-md text-foreground/80">{benefit.text}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-8 bg-primary/5">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-xl font-bold text-center mb-4">O que minhas pacientes dizem</h2>
                <TestimonialCarousel />
            </div>
        </section>

        {/* Clinic Features Section */}
        <section id="clinic-features" className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-center mb-6">Diferenciais da clínica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {clinicFeatures.map((feature, index) => (
                <div key={index} className="flex items-center p-3 rounded-lg">
                  <feature.icon className="h-7 w-7 text-primary mr-4 flex-shrink-0" />
                  <p className="text-md text-foreground/80">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-8 bg-muted/40">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <h2 className="text-xl font-bold mb-6">Perguntas Frequentes</h2>
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
                <Button
                  asChild
                  size="lg"
                  className="mt-8 w-full max-w-xs font-bold py-6 text-xs rounded-md shadow-lg transition-transform transform hover:scale-105 animate-pulse-glow"
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
        </section>

         {/* Location Section */}
        <section id="location" className="py-8 bg-muted/50">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-xl font-bold mb-4">Onde me encontrar</h2>
                <p className="text-md text-muted-foreground mb-6">
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
            <p className="text-xs mt-4">Todos os direitos reservados. © {new Date().getFullYear()}</p>
        </div>
      </footer>

      <Link
        href={profileData.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Agendar consulta pelo WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </Link>
    </div>
  );
}
