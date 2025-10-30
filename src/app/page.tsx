import Image from 'next/image';
import Link from 'next/link';
import {
  Instagram,
  Youtube,
  Mail,
  HeartPulse,
  Stethoscope,
  GraduationCap,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const profileData = {
  nome: 'Dra. Fernanda Costa',
  especialidade: 'Dermatologista',
  crm: 'CRM-SP 98765',
  frase: 'Cuidando da sua pele com ciência e estética, para resultados que realçam sua beleza natural.',
  headline: 'Transforme sua pele, renove sua confiança.',
  fotoPerfilId: 'doctor-profile',
  whatsapp: 'https://wa.me/5511999999999',
  email: 'mailto:contato@drafernandacosta.com',
  socials: {
    instagram: 'https://instagram.com/drafernandacosta',
    youtube: 'https://youtube.com/@drafernandacosta',
  },
  sobre:
    'Sou médica dermatologista com foco em tratamentos clínicos e estéticos. Acredito em uma medicina baseada na confiança, na tecnologia e em resultados naturais. Minha missão é ajudar você a se sentir bem na sua própria pele, oferecendo cuidados personalizados e eficazes. Com anos de experiência e constante atualização, estou preparada para tratar desde as condições de pele mais comuns até os desafios dermatológicos mais complexos.',
};

const services = [
  {
    icon: HeartPulse,
    title: "Dermatologia Clínica",
    description: "Tratamento de doenças da pele, cabelos e unhas, como acne, rosácea, psoríase e queda de cabelo."
  },
  {
    icon: Stethoscope,
    title: "Procedimentos Estéticos",
    description: "Realização de procedimentos como toxina botulínica, preenchimento, bioestimuladores e lasers."
  },
  {
    icon: GraduationCap,
    title: "Cosmiatria",
    description: "Orientação personalizada para uma rotina de cuidados com a pele (skincare) e uso de dermocosméticos."
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mim</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">{profileData.sobre}</p>
            </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meus Serviços</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 border-0 bg-card">
                   <CardHeader className="items-center">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="pt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="pb-8 pt-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center text-muted-foreground">
            <p className="font-semibold text-lg text-foreground mb-4">Entre em Contato</p>
            <div className="flex space-x-6 mb-4">
              <Link
                href={profileData.whatsapp}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <WhatsAppIcon className="h-7 w-7" />
              </Link>
              <Link
                href={profileData.socials.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="h-7 w-7" />
              </Link>
              <Link
                href={profileData.socials.youtube}
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Youtube className="h-7 w-7" />
              </Link>
              <Link
                href={profileData.email}
                aria-label="Email"
                className="hover:text-primary transition-colors"
              >
                <Mail className="h-7 w-7" />
              </Link>
            </div>
            <Separator className="my-6 w-1/2" />
            <p className="text-sm font-medium">{profileData.nome} | {profileData.crm}</p>
             <p className="mt-6 text-xs">
              Desenvolvido por{' '}
              <Link
                href="https://firebase.google.com/docs/studio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Studio Fire
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
