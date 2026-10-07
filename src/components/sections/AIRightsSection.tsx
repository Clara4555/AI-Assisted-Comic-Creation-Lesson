import { useState } from 'react';
import { SectionShell, SectionHeader, Card } from '@/components/ui/Card';
import { TeacherPanel } from '@/components/ui/TeacherPanel';
import { NavButtons } from '@/components/ui/NavButtons';
import { CREATIVE_CYCLE } from '@/data/lessonData';
import { AlertTriangle, Check, RefreshCw, Search, Bot } from 'lucide-react';

interface AIRightsProps {
  onPrev: () => void;
  onNext: () => void;
}

const mismatchCategories = [
  { label: 'Character looks different', emoji: '🧑' },
  { label: 'Object is missing', emoji: '❓' },
  { label: 'Wrong emotion', emoji: '😶' },
  { label: 'Wrong background', emoji: '🏞️' },
  { label: 'Wrong action', emoji: '🏃' },
  { label: "Dialogue doesn't fit", emoji: '💬' },
];

const cycleIcons = [Bot, Search, RefreshCw, Check];
const cycleColors = ['text-primary-600 bg-primary-100', 'text-accent-600 bg-accent-100', 'text-warning-600 bg-warning-100', 'text-success-600 bg-success-100'];

export function AIRightsSection({ onPrev, onNext }: AIRightsProps) {
  const [answered, setAnswered] = useState(false);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);

  const toggleCat = (label: string) => {
    setSelectedCats((prev) =>
      prev.includes(label) ? prev.filter((c) => c !== label) : [...prev, label]
    );
  };

  return (
    <SectionShell>
      <SectionHeader
        emoji="🔄"
        title="When AI Doesn't Get It Right"
        subtitle="AI can make mistakes — and that is okay"
      />

      <Card className="p-6 mb-6">
        <p className="text-lg text-ink-800 leading-relaxed">
          Sometimes AI does not create exactly what you imagined. That is completely normal!
          Let's look at some things that might be different from what you wanted.
        </p>
      </Card>

      <Card className="p-6 mb-6">
        <p className="text-lg font-semibold text-ink-800 mb-2 text-center">
          Did AI create exactly what you imagined?
        </p>
        <p className="text-sm text-ink-500 mb-4 text-center">
          Think about your own comic images. What was different?
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
          {mismatchCategories.map((cat) => {
            const isSel = selectedCats.includes(cat.label);
            return (
              <button
                key={cat.label}
                onClick={() => toggleCat(cat.label)}
                className={`flex items-center gap-2 px-3 py-3 rounded-xl border-2 text-sm font-medium transition-all text-left
                  ${isSel ? 'border-primary-500 bg-primary-50 text-primary-800' : 'border-ink-200 bg-white text-ink-600 hover:border-primary-300'}
                `}
              >
                <span className="text-xl flex-shrink-0">{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setAnswered(true)}
          disabled={answered || selectedCats.length === 0}
          className="w-full px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {answered ? 'Thanks for sharing!' : 'Share what was different'}
        </button>

        {answered && (
          <div className="mt-4 p-4 rounded-xl bg-warning-50 border-2 border-warning-200 animate-slide-up flex gap-3">
            <AlertTriangle className="text-warning-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-ink-700 text-sm leading-relaxed">
              <strong className="text-warning-700">AI can make mistakes or misunderstand creative instructions.</strong>
              {' '}That doesn't mean we stop. We review the result and decide what to change.
            </p>
          </div>
        )}
      </Card>

      {answered && (
        <div className="animate-fade-in">
          <Card className="p-6 mb-6">
            <p className="text-lg font-bold text-ink-800 mb-1 text-center">
              The Creative Cycle
            </p>
            <p className="text-sm text-ink-500 mb-6 text-center">
              Whenever you use AI, you go through this cycle
            </p>

            <div className="flex flex-col items-center gap-3">
              {CREATIVE_CYCLE.map((step, i) => {
                const Icon = cycleIcons[i];
                return (
                  <div key={step.step} className="flex flex-col items-center gap-3 w-full">
                    <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl border-2 border-ink-200 bg-white w-full max-w-md`}>
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${cycleColors[i]}`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <p className="font-display font-bold text-lg text-ink-800">{step.step}</p>
                        <p className="text-sm text-ink-500">{step.desc}</p>
                      </div>
                    </div>
                    {i < CREATIVE_CYCLE.length - 1 && (
                      <div className="text-ink-300 text-2xl">↓</div>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      )}

      <TeacherPanel
        say="AI can make mistakes or misunderstand creative instructions. We don't stop — we review the result and decide what to change."
        ask="Did AI create exactly what you imagined? What was different? What step of the creative cycle do you use first?"
        lookFor="Tiwatope should identify specific differences in his AI images. He should understand the CREATE-CHECK-CHANGE-CHOOSE cycle and be able to apply it to his own comic."
      />

      <NavButtons onPrev={onPrev} onNext={onNext} canProceed={answered} />
    </SectionShell>
  );
}
