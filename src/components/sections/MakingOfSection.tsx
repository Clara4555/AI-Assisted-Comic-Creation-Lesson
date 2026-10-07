import { useState } from 'react';
import { SectionShell, SectionHeader, Card } from '@/components/ui/Card';
import { TeacherPanel } from '@/components/ui/TeacherPanel';
import { NavButtons } from '@/components/ui/NavButtons';
import { REFLECTION_PROMPTS } from '@/data/lessonData';
import { Check } from 'lucide-react';

interface MakingOfProps {
  onPrev: () => void;
  onNext: () => void;
}

export function MakingOfSection({ onPrev, onNext }: MakingOfProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const allFilled = REFLECTION_PROMPTS.every((p) => {
    const val = answers[p.id]?.trim();
    if (!val) return false;
    if (p.expectedAnswer) {
      return val.toLowerCase().includes(p.expectedAnswer.toLowerCase());
    }
    return val.length >= 3;
  });

  return (
    <SectionShell>
      <SectionHeader
        emoji="📝"
        title="The Making of My Story"
        subtitle="Reflect on your creative journey"
      />

      <Card className="p-5 mb-6 bg-accent-50 border-accent-200">
        <p className="text-center text-ink-700">
          Artists sometimes explain how they made their work.
          You are going to create a short <strong>"Making Of"</strong> note for your storybook.
        </p>
        <p className="text-center text-sm text-ink-500 mt-2">
          Answer each prompt in your own words. Your teacher can help clarify — but these are YOUR answers!
        </p>
      </Card>

      <div className="space-y-4">
        {REFLECTION_PROMPTS.map((p) => {
          const val = answers[p.id] || '';
          const isFilled = val.trim().length >= 3;
          const isCorrect = p.expectedAnswer
            ? val.toLowerCase().includes(p.expectedAnswer.toLowerCase())
            : isFilled;

          return (
            <Card key={p.id} className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5
                  ${isCorrect ? 'bg-success-500' : 'bg-ink-200'}`}>
                  {isCorrect && <Check className="text-white" size={14} />}
                </div>
                <div className="flex-1">
                  <p className="font-display font-bold text-sm uppercase tracking-wide text-primary-700">{p.label}</p>
                  <p className="text-ink-800 font-medium">{p.prompt}</p>
                </div>
              </div>
              <textarea
                value={val}
                onChange={(e) => handleChange(p.id, e.target.value)}
                placeholder={p.placeholder}
                rows={p.expectedAnswer ? 1 : 3}
                className="w-full px-4 py-3 rounded-xl border-2 border-ink-200 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 text-ink-800 text-sm resize-none transition-all"
              />
              {p.expectedAnswer && isFilled && !isCorrect && (
                <p className="text-xs text-ink-500 mt-1.5 ml-1">
                  Hint: Think about who is in charge of the creative decisions.
                </p>
              )}
            </Card>
          );
        })}
      </div>

      {allFilled && (
        <Card className="p-5 mt-6 bg-success-50 border-success-200 animate-pop">
          <p className="text-center text-success-800 font-semibold">
            Your "Making Of" note is taking shape! You can see exactly where your creativity
            and AI's help came together.
          </p>
        </Card>
      )}

      <TeacherPanel
        say="Artists explain how they made their work. Let's create a short Making Of note for your storybook."
        ask="What parts did you create yourself? What did AI help with? What did AI get wrong?"
        lookFor="Tiwatope should answer in his own words with specific examples. The tutor may clarify questions but should NOT provide answers. The creator statement should include the word 'creator.'"
      />

      <NavButtons onPrev={onPrev} onNext={onNext} canProceed={allFilled} />
    </SectionShell>
  );
}
