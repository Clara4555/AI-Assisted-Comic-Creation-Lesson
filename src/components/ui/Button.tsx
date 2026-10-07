import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'success' | 'warning';
type Size = 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm',
  secondary: 'bg-white text-primary-700 border-2 border-primary-200 hover:border-primary-400 hover:bg-primary-50',
  ghost: 'text-ink-600 hover:bg-ink-100',
  success: 'bg-success-500 text-white hover:bg-success-600 shadow-sm',
  warning: 'bg-warning-400 text-ink-900 hover:bg-warning-500 shadow-sm',
};

const sizeClasses: Record<Size, string> = {
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg',
};

export function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
