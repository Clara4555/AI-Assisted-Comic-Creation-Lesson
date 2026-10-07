import { useState } from 'react';
import { SectionShell, SectionHeader, Card } from '@/components/ui/Card';
import { TeacherPanel } from '@/components/ui/TeacherPanel';
import { NavButtons } from '@/components/ui/NavButtons';
import { DETECTIVE_CASES } from '@/data/lessonData';
import { Feedback } from '@/components/ui/Feedback';

interface DetectiveProps {
  onPrev: () => void;
  onNext: () => void;
}

export function DetectiveSection({ onPrev, onNext }: DetectiveProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [explained, setExplained] = useState<Record<string, boolean>>({});

  const handleChoose = (caseId: string, choiceId: string) => {
    if (explained[caseId]) return;
    setAnswers((prev) => ({ ...prev, [caseId]: choiceId }));
    setExplained((prev) => ({ ...prev, [caseId]: true }));
  };

  const allDone = DETECTIVE_CASES.every((c) => explained[c.id]);

  return (
    <SectionShell>
      <SectionHeader
        emoji="🔎"
        title="Mini AI Detective"
        subtitle="Keep, Edit, or Try Again? You decide!"
      />

      <Card className="p-5 mb-6 bg-primary-50 border-primary-200">
        <p className="text-center text-ink-700">
          Look at each case from <strong>Tiwatope's comic</strong>.
          Choose: <strong>KEEP</strong>, <strong>EDIT</strong>, or <strong>TRY AGAIN</strong>.
          Then explain <em>why</em> — the explanation is the most important part!
        </p>
      </Card>

      <div className="space-y-6">
        {DETECTIVE_CASES.map((c) => {
          const isExplained = explained[c.id];
          const selectedAnswer = answers[c.id];
          const isCorrect = selectedAnswer && c.correctThinking.includes(selectedAnswer);

          return (
            <Card key={c.id} className="p-6">
              <p className="font-display font-bold text-xl text-ink-900 mb-2">{c.title}</p>

              <div className="rounded-xl bg-ink-50 border-2 border-ink-200 p-4 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🖼️</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-ink-400">Demo AI Output</p>
                    <p className="text-sm text-ink-600">{c.visualLabel}</p>
                  </div>
                </div>
                <p className="text-ink-700 text-sm leading-relaxed">{c.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-2.5 mb-4">
                {c.choices.map((choice) => {
                  const isSel = selectedAnswer === choice.id;
                  const showCorrect = isExplained && c.correctThinking.includes(choice.id);
                  const showWrong = isExplained && isSel && !c.correctThinking.includes(choice.id);
                  return (
                    <button
                      key={choice.id}
                      onClick={() => handleChoose(c.id, choice.id)}
                      disabled={isExplained}
                      className={`flex flex-col items-center gap-1 px-3 py-4 rounded-xl border-2 font-bold transition-all
                        ${showCorrect ? 'border-success-500 bg-success-50 text-success-700' : ''}
                        ${showWrong ? 'border-error-400 bg-error-50 text-error-600' : ''}
                        ${!isExplained && isSel ? 'border-primary-500 bg-primary-50 text-primary-700' : ''}
                        ${!isExplained && !isSel ? 'border-ink-200 text-ink-600 hover:border-primary-300 hover:bg-primary-50/50' : ''}
                        ${isExplained && !isSel && !showCorrect ? 'opacity-40' : ''}
                      `}
                    >
                      <span className="text-2xl">{choice.emoji}</span>
                      <span className="text-sm">{choice.label}</span>
                    </button>
                  );
                })}
              </div>

              {isExplained && (
                <div className="animate-slide-up space-y-3">
                  <Feedback type={isCorrect ? 'correct' : 'info'}>
                    {c.explanation}
                  </Feedback>
                  <div className="pl-4 border-l-4 border-primary-300">
                    <p className="text-sm text-ink-600">
                      <span className="font-semibold text-primary-600">Teacher asks:</span> Why did you choose that answer?
                    </p>
                    <p className="text-xs text-ink-400 mt-1">
                      Take a moment to explain your thinking out loud.
                    </p>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {allDone && (
        <Card className="p-5 mt-6 bg-success-50 border-success-200 animate-pop">
          <p className="text-center text-success-800 font-semibold">
            Excellent detective work! Remember: you always decide what happens
            with AI's output. You are the creator!
          </p>
        </Card>
      )}

      <TeacherPanel
        say="For each case, decide: should you keep it, edit it, or try again? Then explain why."
        ask="Why did you choose that answer?"
        lookFor="The important part is Tiwatope's reasoning, not just the button. He should explain what was wrong or right and what he would do about it. Even a 'wrong' choice is fine if his reasoning makes sense."
      />

      <NavButtons onPrev={onPrev} onNext={onNext} canProceed={allDone} />
    </SectionShell>
  );
}
