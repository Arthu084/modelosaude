import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  BookOpen,
  Instagram,
  Youtube,
  FileText,
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
import { LinkCard } from '@/components/link-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const profileData = {
  nome: 'Dra. Fernanda Costa',
  especialidade: 'Dermatologista',
  crm: 'CRM-SP 98765',
  frase: 'Cuidando da sua pele com ciência e estética.',
  fotoPerfilId: 'doctor-profile',
  whatsapp: 'https://wa.me/5511999999999',
  email: 'mailto:contato@drafernandacosta.com',
  socials: {
    instagram: 'https://instagram.com/drafernandacosta',
    youtube: 'https://youtube.com/@drafernandacosta',
  },
  links: [
    {
      titulo: 'Cursos e E-books',
      icone: 'book',
      url: '#',
    },
    {
      titulo: 'Instagram Profissional',
      icone: 'instagram',
      url: 'https://instagram.com/drafernandacosta',
    },
    {
      titulo: 'Canal no YouTube',
      icone: 'youtube',
      url: 'https://youtube.com/@drafernandacosta',
    },
    {
      titulo: 'Currículo Lattes',
      icone: 'file-text',
      url: '#',
    },
  ],
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

const iconMap: { [key: string]: React.ElementType } = {
  calendar: Calendar,
  book: BookOpen,
  instagram: Instagram,
  youtube: Youtube,
  filetext: FileText,
};

export default function Home() {
  const profileImage = PlaceHolderImages.find(
    (p) => p.id === profileData.fotoPerfilId
  );

  return (
    <div className="flex flex-col min-h-dvh bg-background font-body text-foreground">
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="bg-primary/5 py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <Avatar className="w-32 h-32 border-4 border-background ring-4 ring-primary/50 shadow-lg">
                  {profileImage && (
                    <AvatarImage
                      src={profileImage.imageUrl}
                      alt={profileData.nome}
                      data-ai-hint={profileImage.imageHint}
                    />
                  )}
                  <AvatarFallback className="text-4xl bg-primary/10">
                    {profileData.nome
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {profileData.nome}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {profileData.especialidade} | {profileData.crm}
                  </p>
                </div>
                <p className="text-xl text-foreground/80 max-w-lg pt-2">
                  {profileData.frase}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-4 w-full max-w-xs text-lg font-semibold py-7 rounded-full shadow-lg transition-transform transform hover:scale-105 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                >
                  <Link
                    href={profileData.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="mr-3 h-6 w-6" />
                    Agendar consulta
                  </Link>
                </Button>
              </div>
              <div className="hidden md:flex justify-center">
                 {profileImage && (
                    <Image
                      src={profileImage.imageUrl}
                      alt={profileData.nome}
                      width={400}
                      height={400}
                      className="rounded-xl shadow-2xl object-cover"
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
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2">
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

        {/* Links Section */}
        <section id="links" className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Outros Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profileData.links.map((link, index) => {
                const iconKey = link.icone.toLowerCase().replace('-', '');
                const Icon = iconMap[iconKey];
                return (
                  <LinkCard key={index} href={link.url} icon={Icon} title={link.titulo} />
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="pb-8 pt-4 bg-background border-t">
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