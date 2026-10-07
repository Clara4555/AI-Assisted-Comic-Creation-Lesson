import { useState } from 'react';
import { SectionShell, SectionHeader, Card } from '@/components/ui/Card';
import { TeacherPanel } from '@/components/ui/TeacherPanel';
import { NavButtons } from '@/components/ui/NavButtons';
import { CLASSIFICATION_ITEMS } from '@/data/lessonData';
import { User, Bot, Users } from 'lucide-react';

interface WhoDidWhatProps {
  onPrev: () => void;
  onNext: () => void;
}

type Category = 'ME' | 'AI' | 'BOTH';

const categoryConfig: Record<Category, { icon: typeof User; color: string; bg: string; border: string }> = {
  ME: { icon: User, color: 'text-primary-600', bg: 'bg-primary-50', border: 'border-primary-300' },
  AI: { icon: Bot, color: 'text-accent-600', bg: 'bg-accent-50', border: 'border-accent-300' },
  BOTH: { icon: Users, color: 'text-success-600', bg: 'bg-success-50', border: 'border-success-300' },
};

export function WhoDidWhatSection({ onPrev, onNext }: WhoDidWhatProps) {
  const [answers, setAnswers] = useState<Record<string, Category | null>>({});
  const [followUpShown, setFollowUpShown] = useState<Record<string, boolean>>({});

  const handleClassify = (itemId: string, category: Category) => {
    setAnswers((prev) => ({ ...prev, [itemId]: category }));
    setFollowUpShown((prev) => ({ ...prev, [itemId]: true }));
  };

  const allAnswered = CLASSIFICATION_ITEMS.every((item) => answers[item.id]);

  return (
    <SectionShell>
      <SectionHeader
        emoji="🔍"
        title="Who Did What?"
        subtitle="Sort the parts of your comic — did YOU do it, did AI do it, or did you BOTH work on it?"
      />

      <p className="text-center text-ink-500 mb-6 max-w-lg mx-auto">
        There are no wrong answers here — this is about <strong>your</strong> comic and
        how <strong>you</strong> created it. Think carefully about each part!
      </p>

      <div className="space-y-3">
        {CLASSIFICATION_ITEMS.map((item) => {
          const answer = answers[item.id];
          const showFollowUp = followUpShown[item.id];
          return (
            <Card key={item.id} className="p-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1">
                  <p className="font-display font-bold text-ink-800 text-lg">{item.label}</p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {(['ME', 'AI', 'BOTH'] as Category[]).map((cat) => {
                    const cfg = categoryConfig[cat];
                    const Icon = cfg.icon;
                    const isSel = answer === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => handleClassify(item.id, cat)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border-2 font-bold text-sm transition-all
                          ${isSel ? `${cfg.border} ${cfg.bg} ${cfg.color}` : 'border-ink-200 text-ink-400 hover:border-ink-300'}
                        `}
                      >
                        <Icon size={16} />
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {showFollowUp && answer && (
                <div className="mt-3 pl-4 border-l-4 border-primary-300 animate-slide-up">
                  <p className="text-sm text-ink-600 italic">
                    <span className="font-semibold text-primary-600">Teacher asks:</span> {item.followUp}
                  </p>
                  <p className="text-xs text-ink-400 mt-1">
                    Take a moment to answer out loud or discuss with your teacher.
                  </p>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {allAnswered && (
        <Card className="p-5 mt-6 bg-success-50 border-success-200 animate-pop">
          <p className="text-center text-success-800 font-semibold">
            Great job thinking through your creative choices!
            You can see that even when AI helped, YOU were the one making decisions.
          </p>
        </Card>
      )}

      <TeacherPanel
        say="Look at each part of your comic and decide: did I do this, did AI do this, or did we both work on it?"
        ask="What did you decide yourself? What did AI help with?"
        lookFor="Tiwatope should recognize his own creative contributions. He may say AI generated images but he chose which to use, or AI suggested dialogue but he edited it. The goal is ownership awareness."
      />

      <NavButtons onPrev={onPrev} onNext={onNext} canProceed={allAnswered} />
    </SectionShell>
  );
}
