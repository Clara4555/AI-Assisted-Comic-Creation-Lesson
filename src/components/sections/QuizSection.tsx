import { useState } from 'react';
import { SectionShell, SectionHeader, Card } from '@/components/ui/Card';
import { TeacherPanel } from '@/components/ui/TeacherPanel';
import { NavButtons } from '@/components/ui/NavButtons';
import { MultipleChoice } from '@/components/ui/MultipleChoice';
import { QUIZ_QUESTIONS } from '@/data/lessonData';
import { Award } from 'lucide-react';

interface QuizProps {
  onPrev: () => void;
  onNext: () => void;
}

export function QuizSection({ onPrev, onNext }: QuizProps) {
  const [completedCount, setCompletedCount] = useState(0);

  const allDone = completedCount >= QUIZ_QUESTIONS.length;

  return (
    <SectionShell>
      <SectionHeader
        emoji="❓"
        title="Quick Quiz"
        subtitle="5 questions about what you learned"
      />

      <div className="flex items-center justify-center gap-2 mb-6">
        {QUIZ_QUESTIONS.map((_, i) => (
          <div
            key={i}
            className={`w-8 h-2 rounded-full transition-all duration-300 ${
              i < completedCount ? 'bg-success-500' : 'bg-ink-200'
            }`}
          />
        ))}
      </div>

      <div className="space-y-6">
        {QUIZ_QUESTIONS.map((q, i) => (
          <Card key={q.id} className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white font-bold text-sm flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-xs font-bold uppercase tracking-wide text-ink-400">Question {i + 1} of {QUIZ_QUESTIONS.length}</span>
            </div>
            <MultipleChoice
              question={q}
              onAnswered={() => setCompletedCount((prev) => Math.max(prev, i + 1))}
            />
          </Card>
        ))}
      </div>

      {allDone && (
        <Card className="p-6 mt-6 bg-gradient-to-br from-success-50 to-primary-50 border-success-300 animate-pop">
          <div className="flex items-center gap-4">
            <Award className="text-success-600 flex-shrink-0" size={40} />
            <div>
              <p className="font-display font-bold text-xl text-ink-800">Quiz Complete!</p>
              <p className="text-sm text-ink-600">
                You answered all 5 questions. You can try any question again by tapping "Try again."
              </p>
            </div>
          </div>
        </Card>
      )}

      <TeacherPanel
        say="Let's check what you learned with 5 quick questions. Take your time and think about each one."
        ask="Read each question carefully. Which answer feels right to you?"
        lookFor="Each answer includes a short explanation. If Tiwatope gets one wrong, read the explanation together and discuss. The goal is understanding, not just getting the right letter."
      />

      <NavButtons onPrev={onPrev} onNext={onNext} canProceed={allDone} />
    </SectionShell>
  );
}
