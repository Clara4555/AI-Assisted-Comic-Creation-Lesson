import { SectionShell, SectionHeader, Card } from '@/components/ui/Card';
import { NavButtons } from '@/components/ui/NavButtons';
import { COMPLETION_CHECKLIST } from '@/data/lessonData';
import { Check } from 'lucide-react';

interface CompletionProps {
  onPrev: () => void;
  onNext: () => void;
}

export function CompletionSection({ onPrev, onNext }: CompletionProps) {
  return (
    <SectionShell>
      <SectionHeader
        emoji="🎉"
        title="You Did It!"
        subtitle="Your AI-assisted storybook is complete"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {[
          { emoji: '🎨', label: 'STORY CREATED', color: 'bg-primary-50 border-primary-200' },
          { emoji: '💡', label: 'IDEAS CREATED BY YOU', color: 'bg-accent-50 border-accent-200' },
          { emoji: '🤖', label: 'AI USED AS A HELPER', color: 'bg-ink-50 border-ink-200' },
          { emoji: '✏️', label: 'YOUR DECISIONS', color: 'bg-warning-50 border-warning-200' },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 px-5 py-4 rounded-2xl border-2 ${item.color} animate-slide-up`}
          >
            <span className="text-3xl">{item.emoji}</span>
            <span className="font-display font-bold text-ink-800">{item.label}</span>
          </div>
        ))}
      </div>

      <Card className="p-8 mb-8 bg-gradient-to-br from-primary-600 to-primary-800 text-white text-center">
        <p className="font-display text-3xl font-bold mb-2">You are the creator.</p>
        <p className="font-display text-2xl text-primary-100">AI is your creative helper.</p>
      </Card>

      <Card className="p-6">
        <p className="font-display font-bold text-lg text-ink-800 mb-4 text-center">
          Module 3 Creative Project
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {COMPLETION_CHECKLIST.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-1.5 px-3 py-4 rounded-xl bg-success-50 border-2 border-success-200"
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-sm font-semibold text-success-800">{item.label}</span>
              <Check className="text-success-600" size={18} />
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-ink-500 text-sm">
          Module 3: AI as Your Creative Studio — Complete
        </p>
      </div>

      <NavButtons onPrev={onPrev} nextLabel="" />
    </SectionShell>
  );
}
