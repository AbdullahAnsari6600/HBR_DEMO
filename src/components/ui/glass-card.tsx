import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
}

export const GlassCard = ({ children, className, hover = true, id }: GlassCardProps) => {
  return (
    <div
      id={id}
      className={cn(
        'rounded-2xl bg-card/70 backdrop-blur-xl border border-border/50 shadow-glass',
        hover && 'transition-all duration-300 hover:shadow-glow hover:scale-[1.02] hover:bg-card/90',
        className
      )}
    >
      {children}
    </div>
  );
};

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'dark' | 'light';
}

export const GradientCard = ({ children, className, variant = 'primary' }: GradientCardProps) => {
  const variants = {
    primary: 'bg-gradient-to-br from-sky-medium/20 to-navy-light/20',
    dark: 'bg-gradient-to-br from-navy-medium to-navy-dark text-primary-foreground',
    light: 'bg-gradient-to-br from-secondary to-muted',
  };

  return (
    <div
      className={cn(
        'rounded-2xl border border-border/50 backdrop-blur-sm',
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
};
