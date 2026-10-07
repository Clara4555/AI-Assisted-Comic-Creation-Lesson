import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl shadow-sm border border-ink-200 ${onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

interface SectionShellProps {
  children: ReactNode;
  className?: string;
}

export function SectionShell({ children, className = '' }: SectionShellProps) {
  return (
    <div className={`max-w-3xl mx-auto px-5 py-8 animate-fade-in ${className}`}>
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  emoji: string;
  title: string;
  subtitle: string;
}

export function SectionHeader({ emoji, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-8">
      <div className="text-5xl mb-3">{emoji}</div>
      <h2 className="font-display text-3xl font-bold text-ink-900 mb-2 text-balance">{title}</h2>
      <p className="text-lg text-ink-500 text-balance">{subtitle}</p>
    </div>
  );
}
