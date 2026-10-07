import { useState, useCallback } from 'react';
import { LESSON_SECTIONS, LESSON_TITLE } from '@/data/lessonData';
import type { SectionId } from '@/types/lesson';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { WelcomeSection } from '@/components/sections/WelcomeSection';
import { CollaboratorSection } from '@/components/sections/CollaboratorSection';
import { WhoDidWhatSection } from '@/components/sections/WhoDidWhatSection';
import { HumanTouchSection } from '@/components/sections/HumanTouchSection';
import { AIRightsSection } from '@/components/sections/AIRightsSection';
import { DetectiveSection } from '@/components/sections/DetectiveSection';
import { CompleteSection } from '@/components/sections/CompleteSection';
import { StorybookSection } from '@/components/sections/StorybookSection';
import { MakingOfSection } from '@/components/sections/MakingOfSection';
import { QuizSection } from '@/components/sections/QuizSection';
import { TeachBackSection } from '@/components/sections/TeachBackSection';
import { CompletionSection } from '@/components/sections/CompletionSection';
import { Sparkles, GraduationCap, ChevronRight } from 'lucide-react';

const TOTAL_SECTIONS = LESSON_SECTIONS.length;

function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const goTo = useCallback((idx: number) => {
    setCurrentIdx(Math.max(0, Math.min(idx, TOTAL_SECTIONS - 1)));
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const next = useCallback(() => goTo(currentIdx + 1), [currentIdx, goTo]);
  const prev = useCallback(() => goTo(currentIdx - 1), [currentIdx, goTo]);

  const currentSection = LESSON_SECTIONS[currentIdx];
  const sectionId: SectionId = currentSection.id;

  const renderSection = () => {
    switch (sectionId) {
      case 'welcome': return <WelcomeSection onNext={next} />;
      case 'collaborator': return <CollaboratorSection onPrev={prev} onNext={next} />;
      case 'whodidwhat': return <WhoDidWhatSection onPrev={prev} onNext={next} />;
      case 'humantouch': return <HumanTouchSection onPrev={prev} onNext={next} />;
      case 'airights': return <AIRightsSection onPrev={prev} onNext={next} />;
      case 'detective': return <DetectiveSection onPrev={prev} onNext={next} />;
      case 'complete': return <CompleteSection onPrev={prev} onNext={next} />;
      case 'storybook': return <StorybookSection onPrev={prev} onNext={next} />;
      case 'makingof': return <MakingOfSection onPrev={prev} onNext={next} />;
      case 'quiz': return <QuizSection onPrev={prev} onNext={next} />;
      case 'teachback': return <TeachBackSection onPrev={prev} onNext={next} />;
      case 'completion': return <CompletionSection onPrev={prev} onNext={next} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-ink-50">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-ink-200">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-sm">
                <GraduationCap className="text-white" size={22} />
              </div>
              <div className="min-w-0">
                <p className="font-display font-bold text-sm text-ink-900 truncate">AI Explorers — Junior Explorers</p>
                <p className="text-xs text-ink-400 truncate">Module 3: AI as Your Creative Studio</p>
              </div>
            </div>

            <div className="hidden sm:block flex-1 max-w-xs">
              <ProgressBar
                current={currentIdx + 1}
                total={TOTAL_SECTIONS}
                label="Lesson Progress"
              />
            </div>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-ink-100 hover:bg-ink-200 transition-colors text-sm font-medium text-ink-600"
            >
              <span className="hidden sm:inline">{currentIdx + 1}/{TOTAL_SECTIONS}</span>
              <Sparkles size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile progress */}
      <div className="sm:hidden px-4 pt-3">
        <ProgressBar current={currentIdx + 1} total={TOTAL_SECTIONS} label="Lesson Progress" />
      </div>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink-900/30 animate-fade-in"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Section navigator sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl border-l border-ink-200 transition-transform duration-300 overflow-y-auto ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="font-display font-bold text-ink-900">Lesson Map</p>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-ink-400 hover:text-ink-600 text-sm"
            >
              Close
            </button>
          </div>
          <div className="space-y-1">
            {LESSON_SECTIONS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all text-sm
                  ${i === currentIdx ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-ink-600 hover:bg-ink-50'}
                  ${i < currentIdx ? 'text-success-600' : ''}
                `}
              >
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                  ${i < currentIdx ? 'bg-success-100 text-success-700' : ''}
                  ${i === currentIdx ? 'bg-primary-600 text-white' : ''}
                  ${i > currentIdx ? 'bg-ink-100 text-ink-400' : ''}
                `}>
                  {i < currentIdx ? '✓' : i + 1}
                </span>
                <span className="flex-1 truncate">{s.emoji} {s.title}</span>
                {i === currentIdx && <ChevronRight size={14} className="text-primary-400" />}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="py-6">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="border-t border-ink-200 bg-white">
        <div className="max-w-3xl mx-auto px-5 py-6 text-center">
          <p className="text-sm text-ink-400">
            AI Explorers — Module 3 · AI as Your Creative Studio
          </p>
          <p className="text-xs text-ink-300 mt-1">
            {LESSON_TITLE}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
