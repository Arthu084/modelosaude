
import Image from 'next/image';
import Link from 'next/link';
import {
  HeartPulse,
  MapPin,
  Phone,
  Video,
  CheckCircle2,
  Quote,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { Card, CardContent } from '@/components/ui/card';

const profileData = {
  nome: 'Dra. Fernanda Costa',
  especialidade: 'Dermatologista',
  crm: 'CRM-SP 98765',
  atendimento: 'Atendimento presencial e online',
  frase: 'Cuidando da sua saúde com atenção, empatia e ciência.',
  headline: 'Cuidando da sua saúde com atenção, empatia e ciência.',
  fotoPerfilId: 'doctor-profile',
  whatsapp: 'https://wa.me/5511999999999',
  telefone: 'tel:+5511999999999',
  endereco: {
    rua: 'Rua das Flores, 123, Bairro Jardim',
    cidade: 'São Paulo, SP',
    linkMapa: 'https://maps.app.goo.gl/uXy5fJq2k3zXv8wY9',
    nomeClinica: 'Clínica Dermacare',
  },
  atendimentoOnline: 'https://www.doctoralia.com.br/',
  sobre: {
    texto:
      'Olá, sou a Dra. Fernanda Costa, especialista em dermatologia, com mais de 10 anos de experiência ajudando pacientes a terem uma pele mais saudável e radiante. Minha missão é oferecer um atendimento humanizado, com base em tecnologia, empatia e diagnóstico preciso, para que você se sinta seguro(a) e bem cuidado(a) em cada etapa do tratamento.',
    formacao: 'Medicina pela USP, Especialização em Dermatologia pelo Hospital das Clínicas',
    atuacao: 'Tratamentos clínicos, procedimentos estéticos e cosmiatria',
  },
};

const benefits = [
  { text: 'Consultas personalizadas com foco no seu histórico e rotina' },
  { text: 'Acompanhamento contínuo para garantir resultados reais' },
  { text: 'Atendimento humanizado, sem pressa' },
  { text: 'Suporte via WhatsApp para dúvidas entre consultas' },
  { text: 'Opção de atendimento online (telemedicina)' },
];

const testimonials = [
    {
        quote: "A Dra. Fernanda me explicou tudo com paciência e clareza. Saí da consulta tranquila e confiante!",
        author: "Maria S."
    },
    {
        quote: "Um atendimento impecável do início ao fim. Recomendo de olhos fechados.",
        author: "André P."
    },
    {
        quote: "Finalmente encontrei uma profissional que realmente se importa. Resultados incríveis!",
        author: "Joana L."
    }
];


export default function Home() {
  const profileImage = PlaceHolderImages.find(
    (p) => p.id === profileData.fotoPerfilId
  );

  return (
    <div className="flex flex-col min-h-dvh bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
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
              <p className="font-bold text-lg">{profileData.nome}</p>
              <p className="text-sm text-muted-foreground">{profileData.especialidade}</p>
            </div>
          </div>
          <Button
            asChild
            className="hidden sm:flex rounded-full shadow-md transition-transform transform hover:scale-105 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold"
          >
            <Link
              href={profileData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              Agendar consulta
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="py-20 md:py-32 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                <p className="font-semibold text-primary">{profileData.atendimento}</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight">
                  {profileData.headline}
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
                  {profileData.frase}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 w-full max-w-sm text-lg font-bold py-8 rounded-full shadow-lg transition-transform transform hover:scale-105 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                >
                  <Link
                    href={profileData.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="mr-3 h-6 w-6" />
                    Agende sua avaliação
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground pt-2">{profileData.especialidade} | {profileData.crm}</p>
              </div>
              <div className="flex justify-center">
                 {profileImage && (
                    <Image
                      src={profileImage.imageUrl}
                      alt={profileData.nome}
                      width={500}
                      height={500}
                      className="rounded-2xl shadow-2xl object-cover aspect-square"
                       data-ai-hint={profileImage.imageHint}
                    />
                  )}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a Profissional</h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">{profileData.sobre.texto}</p>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2 text-primary flex items-center"><HeartPulse className="mr-2 h-5 w-5"/> Formação</h3>
                    <p className="text-foreground/80">{profileData.sobre.formacao}</p>
                  </div>
                   <div className="bg-primary/5 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2 text-primary flex items-center"><HeartPulse className="mr-2 h-5 w-5"/> Atuação</h3>
                    <p className="text-foreground/80">{profileData.sobre.atuacao}</p>
                  </div>
                </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Como posso te ajudar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-lg text-foreground/80">{benefit.text}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Depoimentos de Pacientes</h2>
                <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border-0 bg-card">
                        <CardContent className="pt-6">
                            <Quote className="h-8 w-8 text-primary/20 mb-4 mx-auto" />
                            <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                            <p className="font-bold mt-4">- {testimonial.author}</p>
                        </CardContent>
                    </Card>
                ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 md:py-24 bg-primary/5">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Agende sua Consulta</h2>
                <p className="text-lg text-foreground/80 mb-8">Escolha a melhor forma de entrar em contato. Clique no botão abaixo e fale diretamente comigo ou com minha equipe para agendar sua consulta.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
                  <Link href={profileData.whatsapp} target='_blank' rel="noopener noreferrer" className="bg-card p-4 rounded-lg flex items-center hover:bg-muted transition-colors">
                    <WhatsAppIcon className="h-7 w-7 text-green-500 mr-4"/>
                    <div>
                      <h4 className="font-bold">WhatsApp</h4>
                      <p className="text-sm text-muted-foreground">Agendamento rápido</p>
                    </div>
                  </Link>
                   <Link href={profileData.telefone} className="bg-card p-4 rounded-lg flex items-center hover:bg-muted transition-colors">
                    <Phone className="h-7 w-7 text-primary mr-4"/>
                    <div>
                      <h4 className="font-bold">Telefone</h4>
                      <p className="text-sm text-muted-foreground">Fale com a recepção</p>
                    </div>
                  </Link>
                  <Link href={profileData.endereco.linkMapa} target='_blank' rel="noopener noreferrer" className="bg-card p-4 rounded-lg flex items-center hover:bg-muted transition-colors">
                    <MapPin className="h-7 w-7 text-primary mr-4"/>
                    <div>
                      <h4 className="font-bold">Endereço</h4>
                      <p className="text-sm text-muted-foreground">{profileData.endereco.rua}</p>
                    </div>
                  </Link>
                  <Link href={profileData.atendimentoOnline} target='_blank' rel="noopener noreferrer" className="bg-card p-4 rounded-lg flex items-center hover:bg-muted transition-colors">
                    <Video className="h-7 w-7 text-primary mr-4"/>
                    <div>
                      <h4 className="font-bold">Atendimento Online</h4>
                      <p className="text-sm text-muted-foreground">Consulte de onde estiver</p>
                    </div>
                  </Link>
                </div>
                 <Button
                  asChild
                  size="lg"
                  className="mt-6 w-full max-w-md text-lg font-bold py-8 rounded-full shadow-lg transition-transform transform hover:scale-105 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                >
                  <Link
                    href={profileData.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar Consulta Agora
                  </Link>
                </Button>
            </div>
        </section>

         {/* Location Section */}
        <section id="location" className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Localização</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    📍 {profileData.endereco.nomeClinica} - {profileData.endereco.rua}, {profileData.endereco.cidade}
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

      <footer className="pb-8 pt-12 bg-muted/50 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p className="font-semibold text-sm">{profileData.nome} – {profileData.especialidade}</p>
            <p className="text-sm">{profileData.crm}</p>
            <p className="text-xs mt-4">Todos os atendimentos seguem as normas do CFM.</p>
        </div>
      </footer>
    </div>
  );
}
