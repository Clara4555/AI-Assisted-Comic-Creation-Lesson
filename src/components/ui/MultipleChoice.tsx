import { type MultipleChoiceQuestion } from '@/types/lesson';
import { useState } from 'react';
import { Feedback } from './Feedback';

interface MultipleChoiceProps {
  question: MultipleChoiceQuestion;
  onAnswered?: () => void;
}

export function MultipleChoice({ question, onAnswered }: MultipleChoiceProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (optionId: string) => {
    if (answered) return;
    setSelected(optionId);
  };

  const handleSubmit = () => {
    if (!selected) return;
    setAnswered(true);
    onAnswered?.();
  };

  const handleReset = () => {
    setSelected(null);
    setAnswered(false);
  };

  const isCorrect = selected === question.correctOptionId;

  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold text-ink-800 text-balance">{question.prompt}</p>
      <div className="space-y-2.5">
        {question.options.map((opt) => {
          const isSelected = selected === opt.id;
          const isCorrectOpt = opt.id === question.correctOptionId;
          const showCorrect = answered && isCorrectOpt;
          const showWrong = answered && isSelected && !isCorrectOpt;

          const buttonClass = [
            'w-full text-left px-5 py-3.5 rounded-xl border-2 font-medium transition-all duration-200 flex items-center gap-3',
            showCorrect ? 'border-success-500 bg-success-50 text-success-800' : '',
            showWrong ? 'border-error-400 bg-error-50 text-error-700' : '',
            !answered && isSelected ? 'border-primary-500 bg-primary-50 text-primary-800' : '',
            !answered && !isSelected ? 'border-ink-200 bg-white text-ink-700 hover:border-primary-300 hover:bg-primary-50/50' : '',
            answered && !isSelected && !isCorrectOpt ? 'border-ink-200 bg-white text-ink-400 opacity-60' : '',
          ].join(' ');

          const badgeClass = [
            'flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-bold',
            showCorrect ? 'border-success-500 bg-success-500 text-white' : '',
            showWrong ? 'border-error-400 bg-error-400 text-white' : '',
            !answered && isSelected ? 'border-primary-500 bg-primary-500 text-white' : '',
            !answered && !isSelected ? 'border-ink-300 text-ink-500' : '',
            answered && !isSelected && !isCorrectOpt ? 'border-ink-200 text-ink-300' : '',
          ].join(' ');

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={answered}
              className={buttonClass}
            >
              <span className={badgeClass}>
                {opt.id.toUpperCase()}
              </span>
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>

      {!answered && (
        <button
          onClick={handleSubmit}
          disabled={!selected}
          className="px-6 py-2.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Check My Answer
        </button>
      )}

      {answered && (
        <>
          <Feedback type={isCorrect ? 'correct' : 'incorrect'}>
            {question.explanation}
          </Feedback>
          <button
            onClick={handleReset}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium underline"
          >
            Try again
          </button>
        </>
      )}
    </div>
  );
}
