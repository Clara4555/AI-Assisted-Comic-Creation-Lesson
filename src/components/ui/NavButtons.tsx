import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Button } from './Button';

interface NavButtonsProps {
  onPrev?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  canProceed?: boolean;
  isLastSection?: boolean;
}

export function NavButtons({
  onPrev,
  onNext,
  nextLabel = 'Continue',
  canProceed = true,
  isLastSection = false,
}: NavButtonsProps) {
  return (
    <div className="flex items-center justify-between mt-10 pt-6 border-t border-ink-200">
      <div>
        {onPrev && (
          <Button variant="ghost" onClick={onPrev}>
            <ArrowLeft size={18} />
            Back
          </Button>
        )}
      </div>
      <div>
        {onNext && (
          <Button
            variant={isLastSection ? 'success' : 'primary'}
            onClick={onNext}
            disabled={false}
            size="lg"
          >
            {nextLabel}
            {isLastSection ? <Check size={20} /> : <ArrowRight size={20} />}
          </Button>
        )}
      </div>
    </div>
  );
}
