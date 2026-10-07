import { type ReactNode, useState } from 'react';
import { ChevronDown, Lightbulb, MessageCircleQuestion, Eye } from 'lucide-react';

interface TeacherPanelProps {
  say: string;
  ask: string;
  lookFor: string;
}

export function TeacherPanel({ say, ask, lookFor }: TeacherPanelProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-6 rounded-xl border-2 border-dashed border-ink-300 bg-ink-50/50 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-ink-600">
          <Lightbulb size={18} className="text-warning-400" />
          Teacher Guide
        </span>
        <ChevronDown
          size={18}
          className={`text-ink-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3 animate-slide-up">
          <div className="flex gap-3">
            <MessageCircleQuestion size={18} className="text-primary-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-primary-600">Say</p>
              <p className="text-sm text-ink-700">{say}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <MessageCircleQuestion size={18} className="text-accent-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-accent-600">Ask</p>
              <p className="text-sm text-ink-700">{ask}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Eye size={18} className="text-success-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-success-700">Look For</p>
              <p className="text-sm text-ink-700">{lookFor}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface RevealCardProps {
  label: string;
  children: ReactNode;
}

export function RevealCard({ label, children }: RevealCardProps) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="rounded-xl border-2 border-primary-200 bg-primary-50/30 overflow-hidden">
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="w-full px-4 py-3 flex items-center justify-center gap-2 text-primary-700 font-semibold hover:bg-primary-50 transition-colors"
        >
          <Lightbulb size={18} />
          {label}
        </button>
      ) : (
        <div className="px-4 py-3 animate-fade-in">
          <p className="text-xs font-bold uppercase tracking-wide text-primary-500 mb-1">{label}</p>
          <div className="text-ink-700">{children}</div>
        </div>
      )}
    </div>
  );
}
