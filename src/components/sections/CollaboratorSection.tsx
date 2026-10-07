import { useState } from 'react';
import { SectionShell, SectionHeader, Card } from '@/components/ui/Card';
import { TeacherPanel, RevealCard } from '@/components/ui/TeacherPanel';
import { NavButtons } from '@/components/ui/NavButtons';
import { Feedback } from '@/components/ui/Feedback';
import { Paintbrush, Sparkles } from 'lucide-react';

interface CollaboratorProps {
  onPrev: () => void;
  onNext: () => void;
}

export function CollaboratorSection({ onPrev, onNext }: CollaboratorProps) {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (opt: string) => {
    if (answered) return;
    setSelected(opt);
    setAnswered(true);
  };

  return (
    <SectionShell>
      <SectionHeader
        emoji="🎨"
        title="AI as a Creative Collaborator"
        subtitle="AI can help — but it does not replace your imagination"
      />

      <Card className="p-6 mb-6">
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center">
            <Sparkles className="text-primary-600" size={28} />
          </div>
          <div>
            <p className="text-lg text-ink-800 leading-relaxed">
              AI can be a <strong className="text-primary-700">creative collaborator</strong>.
              That means it can help you develop ideas, words, or images — but it does
              <strong> not</strong> replace your imagination.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 mb-6 bg-gradient-to-br from-primary-50 to-white">
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent-100 flex items-center justify-center">
            <Paintbrush className="text-accent-600" size={28} />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-accent-600 mb-1">An Analogy</p>
            <p className="text-lg text-ink-800 leading-relaxed">
              Imagine you are painting a picture. AI is like a special brush that can help
              you make marks — but <strong>the brush does not decide</strong> what picture
              you want to paint.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 mb-6">
        <p className="text-lg font-semibold text-ink-800 mb-4 text-center">
          If the brush suddenly paints something you don't like,
          should you keep it just because the brush made it?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
          <button
            onClick={() => handleSelect('yes')}
            disabled={answered}
            className={`px-5 py-3.5 rounded-xl border-2 font-bold text-lg transition-all
              ${answered && selected === 'yes' ? 'border-error-400 bg-error-50 text-error-700' : ''}
              ${answered && selected !== 'yes' ? 'border-ink-200 opacity-50' : ''}
              ${!answered ? 'border-ink-200 hover:border-primary-400 hover:bg-primary-50' : ''}
            `}
          >
            Yes, keep it
          </button>
          <button
            onClick={() => handleSelect('no')}
            disabled={answered}
            className={`px-5 py-3.5 rounded-xl border-2 font-bold text-lg transition-all
              ${answered && selected === 'no' ? 'border-success-500 bg-success-50 text-success-800' : ''}
              ${answered && selected !== 'no' ? 'border-ink-200 opacity-50' : ''}
              ${!answered ? 'border-ink-200 hover:border-primary-400 hover:bg-primary-50' : ''}
            `}
          >
            No, I decide
          </button>
        </div>
        {answered && (
          <div className="mt-4 animate-slide-up">
            <Feedback type={selected === 'no' ? 'correct' : 'incorrect'}>
              That is right! The same thing happens with AI. AI can give you an image,
              sentence, or idea — but <strong>you decide</strong> whether it belongs in your project.
            </Feedback>
          </div>
        )}
      </Card>

      {answered && (
        <div className="animate-fade-in">
          <Card className="p-6 mb-6">
            <p className="text-lg font-semibold text-ink-800 mb-4">
              Which one shows a human working <em>WITH</em> AI?
            </p>
            <InteractiveCollabQuestion />
          </Card>
        </div>
      )}

      <TeacherPanel
        say="AI is like a special brush — it helps you make marks, but you decide what picture to paint."
        ask="If the brush paints something you don't like, should you keep it? Which option shows a human working WITH AI?"
        lookFor="Tiwatope should say no — he decides what stays. He should pick option B: the student gives ideas, AI helps, and the student chooses and edits."
      />

      <NavButtons onPrev={onPrev} onNext={onNext} canProceed={answered} />
    </SectionShell>
  );
}

function InteractiveCollabQuestion() {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const options = [
    { id: 'a', label: 'AI creates everything and the student accepts it.' },
    { id: 'b', label: 'The student gives ideas, AI helps, and the student chooses and edits the result.' },
    { id: 'c', label: 'The student does nothing.' },
  ];

  return (
    <div className="space-y-2.5">
      {options.map((opt) => {
        const isSelected = selected === opt.id;
        const showCorrect = answered && opt.id === 'b';
        const showWrong = answered && isSelected && opt.id !== 'b';
        return (
          <button
            key={opt.id}
            onClick={() => {
              if (answered) return;
              setSelected(opt.id);
              setAnswered(true);
            }}
            disabled={answered}
            className={`w-full text-left px-5 py-3.5 rounded-xl border-2 font-medium transition-all flex items-center gap-3
              ${showCorrect ? 'border-success-500 bg-success-50 text-success-800' : ''}
              ${showWrong ? 'border-error-400 bg-error-50 text-error-700' : ''}
              ${!answered && isSelected ? 'border-primary-500 bg-primary-50' : ''}
              ${!answered && !isSelected ? 'border-ink-200 hover:border-primary-300 hover:bg-primary-50/50' : ''}
              ${answered && !isSelected && !showCorrect ? 'opacity-50' : ''}
            `}
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-bold">
              {opt.id.toUpperCase()}
            </span>
            <span className="text-ink-700">{opt.label}</span>
          </button>
        );
      })}
      {answered && (
        <div className="mt-3 animate-slide-up">
          <Feedback type={selected === 'b' ? 'correct' : 'incorrect'}>
            Option B is correct! When you work WITH AI, <strong>you</strong> give the ideas,
            AI helps, and <strong>you</strong> choose and edit the result. That is what
            being a creative collaborator means.
          </Feedback>
        </div>
      )}
    </div>
  );
}
