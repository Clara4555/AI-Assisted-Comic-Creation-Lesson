import { useState } from 'react';
import { SectionShell, SectionHeader, Card } from '@/components/ui/Card';
import { TeacherPanel } from '@/components/ui/TeacherPanel';
import { NavButtons } from '@/components/ui/NavButtons';
import { COMIC_STAGES } from '@/data/lessonData';
import { ArrowDown } from 'lucide-react';
import { Feedback } from '@/components/ui/Feedback';

interface WelcomeProps {
  onNext: () => void;
}

export function WelcomeSection({ onNext }: WelcomeProps) {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [showProud, setShowProud] = useState(false);

  const handleAnswer = (opt: string) => {
    if (answered) return;
    setSelected(opt);
    setAnswered(true);
  };

  return (
    <SectionShell>
      <SectionHeader
        emoji="🚀"
        title="Welcome Back to the Comic!"
        subtitle="Today your comic becomes a finished AI-assisted storybook!"
      />

      <div className="flex flex-col items-center gap-2 mb-10">
        {COMIC_STAGES.map((stage, i) => (
          <div key={stage.label} className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border-2 border-ink-200 shadow-sm">
              <span className="text-xl">{stage.emoji}</span>
              <span className="font-display font-bold text-ink-700 tracking-wide text-sm">{stage.label}</span>
              {i === COMIC_STAGES.length - 1 && (
                <span className="ml-1 text-xs font-bold text-success-600 bg-success-50 px-2 py-0.5 rounded-full">TODAY</span>
              )}
            </div>
            {i < COMIC_STAGES.length - 1 && <ArrowDown size={18} className="text-ink-300" />}
          </div>
        ))}
      </div>

      <Card className="p-6">
        <p className="text-lg font-semibold text-ink-800 mb-4 text-center">
          You have used AI to help with different parts of your comic.
          <br />
          <span className="text-primary-700">But who is actually the creator?</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => handleAnswer('a')}
            disabled={answered}
            className={`px-5 py-4 rounded-xl border-2 font-bold text-lg transition-all duration-200
              ${answered && selected === 'a' ? 'border-error-400 bg-error-50 text-error-700' : ''}
              ${answered && selected !== 'a' ? 'border-ink-200 opacity-50' : ''}
              ${!answered ? 'border-ink-200 hover:border-primary-400 hover:bg-primary-50' : ''}
            `}
          >
            A. The AI
          </button>
          <button
            onClick={() => handleAnswer('b')}
            disabled={answered}
            className={`px-5 py-4 rounded-xl border-2 font-bold text-lg transition-all duration-200
              ${answered && selected === 'b' ? 'border-success-500 bg-success-50 text-success-800' : ''}
              ${answered && selected !== 'b' ? 'border-ink-200 opacity-50' : ''}
              ${!answered ? 'border-ink-200 hover:border-primary-400 hover:bg-primary-50' : ''}
            `}
          >
            B. Me — AI helped me
          </button>
        </div>

        {answered && (
          <div className="mt-4 animate-slide-up">
            <Feedback type="correct">
              Exactly! AI helped you create parts of the project, but <strong>YOU</strong> made the creative decisions.
            </Feedback>
          </div>
        )}
      </Card>

      {answered && !showProud && (
        <div className="mt-6 text-center animate-fade-in">
          <button
            onClick={() => setShowProud(true)}
            className="px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
          >
            Let's talk about your comic
          </button>
        </div>
      )}

      {showProud && (
        <Card className="p-6 mt-6 animate-slide-up">
          <p className="text-lg font-semibold text-ink-800 mb-2">
            What part of your comic are you most proud of?
          </p>
          <p className="text-sm text-ink-500">
            Take a moment to share with your teacher. There is no wrong answer — this is YOUR work!
          </p>
        </Card>
      )}

      <TeacherPanel
        say="Today your comic becomes a finished AI-assisted storybook! You have already done so much — let's look at how far you have come."
        ask="Who is actually the creator — you or the AI? What part of your comic are you most proud of?"
        lookFor="Tiwatope should identify himself as the creator. Listen for specific things he is proud of — his characters, his story idea, or a particular image he chose."
      />

      <NavButtons onNext={onNext} canProceed={answered} />
    </SectionShell>
  );
}
