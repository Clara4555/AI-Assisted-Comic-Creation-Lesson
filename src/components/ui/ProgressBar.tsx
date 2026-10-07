interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export function ProgressBar({ current, total, label }: ProgressBarProps) {
  const percent = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs font-semibold text-ink-500 uppercase tracking-wide">{label}</span>
          <span className="text-xs font-bold text-primary-600">{percent}%</span>
        </div>
      )}
      <div className="h-2.5 bg-ink-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
