import { useState } from 'react';
import { SectionShell, SectionHeader, Card } from '@/components/ui/Card';
import { TeacherPanel } from '@/components/ui/TeacherPanel';
import { NavButtons } from '@/components/ui/NavButtons';
import { COMIC_CHECKLIST } from '@/data/lessonData';
import { CheckSquare, Square } from 'lucide-react';

interface CompleteProps {
  onPrev: () => void;
  onNext: () => void;
}

export function CompleteSection({ onPrev, onNext }: CompleteProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = Object.values(checked).filter(Boolean).length;
  const allChecked = checkedCount === COMIC_CHECKLIST.length;

  return (
    <SectionShell>
      <SectionHeader
        emoji="✅"
        title="Complete Your Comic"
        subtitle="Final comic check — let's make your comic the best it can be"
      />

      <Card className="p-5 mb-6 bg-primary-50 border-primary-200">
        <p className="text-center text-ink-700">
          Work through each question with <strong>your actual comic</strong>.
          Your teacher will guide you with questions — but <strong>you</strong> make the decisions!
        </p>
      </Card>

      <div className="space-y-2.5">
        {COMIC_CHECKLIST.map((item, i) => {
          const isChecked = checked[item.id];
          return (
            <button
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 transition-all text-left
                ${isChecked ? 'border-success-300 bg-success-50' : 'border-ink-200 bg-white hover:border-primary-300'}
              `}
            >
              <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center">
                {isChecked ? (
                  <CheckSquare className="text-success-600" size={26} />
                ) : (
                  <Square className="text-ink-300" size={26} />
                )}
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-ink-400 mr-2">{i + 1}.</span>
                <span className={`text-ink-800 ${isChecked ? 'text-success-800' : ''}`}>{item.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <div className="h-2.5 bg-ink-200 rounded-full w-48 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-success-400 to-success-600 rounded-full transition-all duration-500"
            style={{ width: `${(checkedCount / COMIC_CHECKLIST.length) * 100}%` }}
          />
        </div>
        <span className="text-sm font-bold text-ink-600">{checkedCount}/{COMIC_CHECKLIST.length}</span>
      </div>

      {allChecked && (
        <Card className="p-5 mt-6 bg-success-50 border-success-200 animate-pop">
          <p className="text-center text-success-800 font-bold text-lg">
            Your comic is looking great!
          </p>
          <p className="text-center text-success-700 text-sm mt-1">
            You checked every part — and you made the decisions. That is what being a creator means.
          </p>
        </Card>
      )}

      <TeacherPanel
        say="Let's go through the final comic check together. Look at your actual comic for each question."
        ask="Does the story make sense from beginning to end? Does the dialogue match what is happening?"
        lookFor="Guide with questions, not decisions. Do not overwhelm Tiwatope with editing. If he says something is fine, accept it — this is his comic. Only flag real issues."
      />

      <NavButtons onPrev={onPrev} onNext={onNext} canProceed={allChecked} />
    </SectionShell>
  );
}
