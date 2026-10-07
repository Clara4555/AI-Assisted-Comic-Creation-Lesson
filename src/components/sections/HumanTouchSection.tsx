import { useState } from 'react';
import { SectionShell, SectionHeader, Card } from '@/components/ui/Card';
import { TeacherPanel, RevealCard } from '@/components/ui/TeacherPanel';
import { NavButtons } from '@/components/ui/NavButtons';
import { Feedback } from '@/components/ui/Feedback';
import { PenLine, Sparkles, ArrowRight } from 'lucide-react';

interface HumanTouchProps {
  onPrev: () => void;
  onNext: () => void;
}

export function HumanTouchSection({ onPrev, onNext }: HumanTouchProps) {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const changes = [
    'More detail',
    'More emotion',
    'More information about the scene',
    'It feels more connected to the story',
  ];

  return (
    <SectionShell>
      <SectionHeader
        emoji="✨"
        title="The Human Touch"
        subtitle="Your ideas make AI work better"
      />

      <Card className="p-6 mb-6">
        <p className="text-lg text-ink-800 leading-relaxed">
          The <strong className="text-primary-700">human touch</strong> is the part of a
          creative project that comes from <strong>your own ideas, choices, feelings,
          imagination, and decisions.</strong>
        </p>
      </Card>

      <Card className="p-6 mb-6">
        <p className="text-sm font-bold uppercase tracking-wide text-accent-600 mb-3">
          AI suggests this sentence:
        </p>
        <div className="rounded-xl bg-ink-50 border-2 border-ink-200 p-4 mb-4">
          <p className="text-lg text-ink-600 italic">
            "Emma walked through the forest."
          </p>
        </div>

        <p className="text-lg font-semibold text-ink-800 mb-4 text-center">
          Is this bad?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto mb-4">
          <button
            onClick={() => { setSelected('yes'); setAnswered(true); }}
            disabled={answered}
            className={`px-5 py-3.5 rounded-xl border-2 font-bold transition-all
              ${answered && selected === 'yes' ? 'border-warning-400 bg-warning-50 text-warning-700' : ''}
              ${answered && selected !== 'yes' ? 'border-ink-200 opacity-50' : ''}
              ${!answered ? 'border-ink-200 hover:border-primary-400 hover:bg-primary-50' : ''}
            `}
          >
            Yes, it's bad
          </button>
          <button
            onClick={() => { setSelected('no'); setAnswered(true); }}
            disabled={answered}
            className={`px-5 py-3.5 rounded-xl border-2 font-bold transition-all
              ${answered && selected === 'no' ? 'border-success-500 bg-success-50 text-success-800' : ''}
              ${answered && selected !== 'no' ? 'border-ink-200 opacity-50' : ''}
              ${!answered ? 'border-ink-200 hover:border-primary-400 hover:bg-primary-50' : ''}
            `}
          >
            Not necessarily bad
          </button>
        </div>

        {answered && (
          <div className="animate-slide-up">
            <Feedback type="info" title="It isn't necessarily bad — but it might be too simple for your story.">
              The sentence is not wrong, but it does not tell us much. It does not show Emma's
              feelings or what is happening. Let's see how <em>you</em> could improve it!
            </Feedback>
          </div>
        )}
      </Card>

      {answered && (
        <div className="animate-fade-in space-y-6">
          <Card className="p-6 bg-gradient-to-br from-primary-50 to-white">
            <p className="text-sm font-bold uppercase tracking-wide text-primary-600 mb-3 flex items-center gap-2">
              <PenLine size={18} /> With the human touch, Tiwatope could write:
            </p>
            <div className="rounded-xl bg-white border-2 border-primary-200 p-4">
              <p className="text-lg text-ink-800 font-medium">
                "Emma tightened her grip on the old treasure map as she stepped
                deeper into the mysterious forest."
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <p className="text-lg font-semibold text-ink-800 mb-4 text-center">
              What changed? <span className="text-ink-400 text-base font-normal">(Pick all that apply)</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {changes.map((change) => (
                <div
                  key={change}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-success-50 border-2 border-success-200"
                >
                  <Sparkles className="text-success-600 flex-shrink-0" size={18} />
                  <span className="text-ink-700 font-medium">{change}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-ink-500 mt-3 text-center">
              All of these are examples of the human touch!
            </p>
          </Card>

          <Card className="p-6 bg-primary-50 border-primary-200">
            <div className="flex items-center gap-3">
              <ArrowRight className="text-primary-600 flex-shrink-0" size={24} />
              <p className="text-lg text-ink-800">
                <strong className="text-primary-700">This is the human touch.</strong> AI can
                give you a starting point, but <strong>your ideas</strong> make the work yours.
              </p>
            </div>
          </Card>
        </div>
      )}

      <TeacherPanel
        say="The human touch is the part that comes from your own ideas, choices, feelings, and imagination."
        ask="Is the AI sentence bad? What changed when we improved it?"
        lookFor="Tiwatope should recognize the sentence is not bad, just too simple. He should notice the added detail, emotion, and connection to the story. He should see that HIS ideas made it better."
      />

      <NavButtons onPrev={onPrev} onNext={onNext} canProceed={answered} />
    </SectionShell>
  );
}
