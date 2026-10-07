import { CheckCircle2, HelpCircle, XCircle } from 'lucide-react';

interface FeedbackProps {
  type: 'correct' | 'incorrect' | 'info';
  title?: string;
  children: React.ReactNode;
}

const config = {
  correct: {
    icon: CheckCircle2,
    bg: 'bg-success-50',
    border: 'border-success-200',
    iconColor: 'text-success-600',
    titleColor: 'text-success-800',
    defaultTitle: 'That is right!',
  },
  incorrect: {
    icon: XCircle,
    bg: 'bg-error-50',
    border: 'border-error-200',
    iconColor: 'text-error-500',
    titleColor: 'text-error-700',
    defaultTitle: 'Not quite — think again!',
  },
  info: {
    icon: HelpCircle,
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    iconColor: 'text-primary-600',
    titleColor: 'text-primary-800',
    defaultTitle: 'Think about it',
  },
};

export function Feedback({ type, title, children }: FeedbackProps) {
  const c = config[type];
  const Icon = c.icon;
  return (
    <div className={`rounded-xl border-2 ${c.bg} ${c.border} p-4 animate-slide-up`}>
      <div className="flex gap-3">
        <Icon className={`${c.iconColor} flex-shrink-0 mt-0.5`} size={22} />
        <div>
          {title && <p className={`font-bold ${c.titleColor} mb-1`}>{title}</p>}
          {!title && <p className={`font-bold ${c.titleColor} mb-1`}>{c.defaultTitle}</p>}
          <div className="text-ink-700 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
