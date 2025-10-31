import type { ElementType } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface LinkCardProps {
  href: string;
  icon?: ElementType;
  title: string;
}

export function LinkCard({ href, icon: Icon, title }: LinkCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex items-center justify-between w-full p-3 rounded-lg shadow-sm transition-all duration-300 border',
        'bg-card hover:bg-card/95 hover:shadow-md transform hover:-translate-y-1'
      )}
    >
      <div className="flex items-center">
        {Icon && <Icon className="mr-3 h-6 w-6 text-primary" />}
        <span className="font-semibold text-base text-card-foreground">{title}</span>
      </div>
      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
    </Link>
  );
}
