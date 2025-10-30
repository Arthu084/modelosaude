
import Image from 'next/image';
import Link from 'next/link';
import {
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
              <p className="text-xs text-muted-foreground">{profileData.especialidade}</p>
            </div>
          </div>
          <Button
            asChild
            size="sm"
            className="hidden sm:flex rounded-full shadow-md transition-transform transform hover:scale-105 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold"
          >
            <Link
              href={profileData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="mr-2 h-4 w-4" />
              Agendar consulta
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="py-8 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-4">
              <p className="font-semibold text-primary">{profileData.atendimento}</p>
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tighter">
                {profileData.headline}
              </h1>
              <p className="text-md text-foreground/80 max-w-2xl">
                {profileData.frase}
              </p>
              
              <div className="w-full max-w-sm pt-4">
                {profileImage && (
                  <Image
                    src={profileImage.imageUrl}
                    alt={profileData.nome}
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-xl object-cover aspect-square w-full"
                    data-ai-hint={profileImage.imageHint}
                  />
                )}
              </div>

              <Button
                asChild
                size="lg"
                className="mt-4 w-full max-w-sm text-lg font-bold py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
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
              <p className="text-sm text-muted-foreground pt-1">{profileData.especialidade} | {profileData.crm}</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="pt-2 pb-12 bg-primary/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-center mb-8">Como posso te ajudar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start p-3 rounded-lg hover:bg-card/50">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-1" />
                      <p className="text-md text-foreground/80">{benefit.text}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-xl font-bold text-center mb-6">Depoimentos de Pacientes</h2>
                <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 border-0 bg-card">
                        <CardContent className="pt-6">
                            <Quote className="h-6 w-6 text-primary/20 mb-3 mx-auto" />
                            <p className="text-muted-foreground text-sm italic">"{testimonial.quote}"</p>
                            <p className="font-bold text-sm mt-3">- {testimonial.author}</p>
                        </CardContent>
                    </Card>
                ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-12 bg-primary/5">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <h2 className="text-xl font-bold mb-3">Agende sua Consulta</h2>
                <p className="text-md text-foreground/80 mb-6">Escolha a melhor forma de entrar em contato. Clique no botão abaixo e fale diretamente comigo ou com minha equipe para agendar sua consulta.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-left">
                  <Link href={profileData.whatsapp} target='_blank' rel="noopener noreferrer" className="bg-card p-4 rounded-lg flex items-center hover:bg-muted transition-colors">
                    <WhatsAppIcon className="h-6 w-6 text-green-500 mr-3"/>
                    <div>
                      <h4 className="font-bold text-sm">WhatsApp</h4>
                      <p className="text-xs text-muted-foreground">Agendamento rápido</p>
                    </div>
                  </Link>
                   <Link href={profileData.telefone} className="bg-card p-4 rounded-lg flex items-center hover:bg-muted transition-colors">
                    <Phone className="h-6 w-6 text-primary mr-3"/>
                    <div>
                      <h4 className="font-bold text-sm">Telefone</h4>
                      <p className="text-xs text-muted-foreground">Fale com a recepção</p>
                    </div>
                  </Link>
                  <Link href={profileData.endereco.linkMapa} target='_blank' rel="noopener noreferrer" className="bg-card p-4 rounded-lg flex items-center hover:bg-muted transition-colors">
                    <MapPin className="h-6 w-6 text-primary mr-3"/>
                    <div>
                      <h4 className="font-bold text-sm">Endereço</h4>
                      <p className="text-xs text-muted-foreground">{profileData.endereco.rua}</p>
                    </div>
                  </Link>
                  <Link href={profileData.atendimentoOnline} target='_blank' rel="noopener noreferrer" className="bg-card p-4 rounded-lg flex items-center hover:bg-muted transition-colors">
                    <Video className="h-6 w-6 text-primary mr-3"/>
                    <div>
                      <h4 className="font-bold text-sm">Atendimento Online</h4>
                      <p className="text-xs text-muted-foreground">Consulte de onde estiver</p>
                    </div>
                  </Link>
                </div>
                 <Button
                  asChild
                  size="lg"
                  className="w-full max-w-md text-lg font-bold py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
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
        <section id="location" className="py-12">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-xl font-bold mb-3">Localização</h2>
                <p className="text-md text-muted-foreground mb-6">
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

      <footer className="py-8 bg-muted/50 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p className="font-semibold text-sm">{profileData.nome} – {profileData.especialidade}</p>
            <p className="text-sm">{profileData.crm}</p>
            <p className="text-xs mt-4">Todos os atendimentos seguem as normas do CFM.</p>
        </div>
      </footer>
    </div>
  );
}
