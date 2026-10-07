import { useState } from 'react';
import { SectionShell, SectionHeader, Card } from '@/components/ui/Card';
import { TeacherPanel } from '@/components/ui/TeacherPanel';
import { NavButtons } from '@/components/ui/NavButtons';
import { Feedback } from '@/components/ui/Feedback';
import { Plus, Lightbulb } from 'lucide-react';

interface StorybookProps {
  onPrev: () => void;
  onNext: () => void;
}

export function StorybookSection({ onPrev, onNext }: StorybookProps) {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const equation = [
    { label: 'YOUR IDEA', emoji: '💡', color: 'bg-primary-100 text-primary-700 border-primary-200' },
    { label: 'YOUR DECISIONS', emoji: '🧠', color: 'bg-accent-100 text-accent-700 border-accent-200' },
    { label: 'AI HELP', emoji: '🤖', color: 'bg-ink-100 text-ink-700 border-ink-200' },
    { label: 'YOUR EDITING', emoji: '✏️', color: 'bg-success-100 text-success-700 border-success-200' },
  ];

  return (
    <SectionShell>
      <SectionHeader
        emoji="📖"
        title="Your AI-Assisted Storybook"
        subtitle="Your comic is more than a collection of pictures"
      />

      <Card className="p-6 mb-6">
        <p className="text-lg text-ink-800 leading-relaxed">
          Your comic is more than a collection of pictures.
          It is an <strong className="text-primary-700">AI-assisted storybook.</strong>
        </p>
      </Card>

      <Card className="p-6 mb-6 bg-gradient-to-br from-primary-50 to-white">
        <p className="text-sm font-bold uppercase tracking-wide text-primary-600 mb-2">
          What does "AI-assisted" mean?
        </p>
        <p className="text-lg text-ink-800 leading-relaxed">
          A <strong>human</strong> creates and makes the important creative decisions,
          while <strong>AI helps</strong> with parts of the process.
        </p>
      </Card>

      <Card className="p-6 mb-6">
        <p className="text-sm font-bold uppercase tracking-wide text-ink-500 mb-4 text-center">
          The AI-Assisted Creation Equation
        </p>
        <div className="flex flex-col items-center gap-3">
          {equation.map((item, i) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div className={`flex items-center gap-3 px-5 py-3 rounded-2xl border-2 font-display font-bold ${item.color}`}>
                <span className="text-2xl">{item.emoji}</span>
                <span>{item.label}</span>
              </div>
              {i < equation.length - 1 && <Plus className="text-ink-300" size={20} />}
            </div>
          ))}
          <div className="text-ink-300 text-2xl">=</div>
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border-2 border-primary-500 bg-primary-600 text-white font-display font-bold text-lg shadow-md">
            <span className="text-2xl">🎬</span>
            <span>AI-ASSISTED CREATION</span>
          </div>
        </div>
      </Card>

      <Card className="p-6 mb-6">
        <p className="text-lg font-semibold text-ink-800 mb-4 text-center">
          Would you call your comic AI-created or AI-assisted?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
          <button
            onClick={() => { setSelected('created'); setAnswered(true); }}
            disabled={answered}
            className={`px-5 py-4 rounded-xl border-2 font-bold text-lg transition-all
              ${answered && selected === 'created' ? 'border-error-400 bg-error-50 text-error-700' : ''}
              ${answered && selected !== 'created' ? 'border-ink-200 opacity-50' : ''}
              ${!answered ? 'border-ink-200 hover:border-primary-400 hover:bg-primary-50' : ''}
            `}
          >
            AI-created
          </button>
          <button
            onClick={() => { setSelected('assisted'); setAnswered(true); }}
            disabled={answered}
            className={`px-5 py-4 rounded-xl border-2 font-bold text-lg transition-all
              ${answered && selected === 'assisted' ? 'border-success-500 bg-success-50 text-success-800' : ''}
              ${answered && selected !== 'assisted' ? 'border-ink-200 opacity-50' : ''}
              ${!answered ? 'border-ink-200 hover:border-primary-400 hover:bg-primary-50' : ''}
            `}
          >
            AI-assisted
          </button>
        </div>
        {answered && (
          <div className="mt-4 animate-slide-up">
            <Feedback type={selected === 'assisted' ? 'correct' : 'incorrect'}>
              <strong>AI-assisted</strong> is the right way to think about it!
              You came up with the idea, you made the decisions, AI helped with parts,
              and you edited everything. That is AI-assisted creation!
            </Feedback>
          </div>
        )}
      </Card>

      {answered && (
        <Card className="p-5 mt-6 bg-warning-50 border-warning-200 animate-fade-in">
          <div className="flex gap-3">
            <Lightbulb className="text-warning-600 flex-shrink-0 mt-0.5" size={22} />
            <p className="text-sm text-ink-700">
              <strong>Teacher asks:</strong> Can you explain <em>why</em> you chose AI-assisted?
              What parts did you do, and what parts did AI help with?
            </p>
          </div>
        </Card>
      )}

      <TeacherPanel
        say="Your comic is an AI-assisted storybook. That means a human creates and makes the important decisions while AI helps with parts."
        ask="Would you call your comic AI-created or AI-assisted? Why?"
        lookFor="Tiwatope should choose AI-assisted and explain that he made the creative decisions while AI helped generate images or suggest dialogue. He should distinguish between the two terms."
      />

      <NavButtons onPrev={onPrev} onNext={onNext} canProceed={answered} />
    </SectionShell>
  );
}
