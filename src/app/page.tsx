import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  BookOpen,
  Instagram,
  Youtube,
  FileText,
  Mail,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { LinkCard } from '@/components/link-card';

// Mock data based on Firestore model
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
      titulo: 'Agendar Consulta',
      icone: 'calendar',
      url: 'https://wa.me/5511999999999',
    },
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
  sobre: 'Sou médica dermatologista com foco em tratamentos clínicos e estéticos. Acredito em uma medicina baseada na confiança, na tecnologia e em resultados naturais.',
};

const iconMap: { [key: string]: React.ElementType } = {
  calendar: Calendar,
  book: BookOpen,
  instagram: Instagram,
  youtube: Youtube,
  filetext: FileText,
};

export default function Home() {
  const profileImage = PlaceHolderImages.find(p => p.id === profileData.fotoPerfilId);

  return (
    <div className="flex flex-col min-h-dvh bg-background font-body text-foreground">
      <main className="flex-grow">
        <div className="container mx-auto max-w-2xl px-4 py-8 md:py-12">
          
          <section id="hero" className="flex flex-col items-center text-center space-y-4">
            <Avatar className="w-28 h-28 border-4 border-background ring-2 ring-primary/50 shadow-lg">
              {profileImage && (
                <AvatarImage src={profileImage.imageUrl} alt={profileData.nome} data-ai-hint={profileImage.imageHint} />
              )}
              <AvatarFallback className="text-3xl bg-primary/10">{profileData.nome.split(' ').map(n => n[0]).slice(0, 2).join('')}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{profileData.nome}</h1>
                <p className="text-md text-muted-foreground">
                {profileData.especialidade} | {profileData.crm}
                </p>
            </div>
            <p className="text-lg text-foreground/80 max-w-lg pt-2">{profileData.frase}</p>
            <Button
              asChild
              className="mt-4 w-full max-w-sm text-lg font-semibold py-6 rounded-full shadow-lg transition-transform transform hover:scale-105 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
            >
              <Link href={profileData.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-3 h-6 w-6" />
                Agendar consulta
              </Link>
            </Button>
          </section>

          <section id="links" className="mt-12">
            <div className="grid grid-cols-1 gap-4">
              {profileData.links.map((link, index) => {
                const iconKey = link.icone.toLowerCase().replace('-', '');
                const Icon = iconMap[iconKey];
                return (
                  <LinkCard key={index} href={link.url} icon={Icon} title={link.titulo} />
                );
              })}
            </div>
          </section>

          <section id="about" className="mt-12 text-center">
            <div className="bg-card p-6 sm:p-8 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold mb-4">Sobre mim</h2>
                <p className="text-card-foreground/80 leading-relaxed max-w-xl mx-auto">{profileData.sobre}</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="pb-8 pt-4 bg-background">
        <div className="container mx-auto max-w-2xl px-4">
            <Separator className="mb-6" />
            <div className="flex flex-col items-center text-center text-muted-foreground">
                <div className="flex space-x-6 mb-4">
                    <Link href={profileData.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <WhatsAppIcon className="h-6 w-6" />
                    </Link>
                    <Link href={profileData.socials.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Instagram className="h-6 w-6" />
                    </Link>
                     <Link href={profileData.socials.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <Youtube className="h-6 w-6" />
                    </Link>
                    <Link href={profileData.email} aria-label="Email" className="hover:text-primary transition-colors">
                        <Mail className="h-6 w-6" />
                    </Link>
                </div>
                <p className="text-sm font-medium">{profileData.crm}</p>
                <p className="mt-6 text-xs">
                    Desenvolvido por{' '}
                    <Link href="https://firebase.google.com/docs/studio" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                        Studio Fire
                    </Link>
                </p>
            </div>
        </div>
      </footer>
    </div>
  );
}
