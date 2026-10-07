import { useState } from 'react';
import { SectionShell, SectionHeader, Card } from '@/components/ui/Card';
import { TeacherPanel } from '@/components/ui/TeacherPanel';
import { NavButtons } from '@/components/ui/NavButtons';
import { ASSIGNMENT_SECTIONS } from '@/data/lessonData';
import { FileText, Send } from 'lucide-react';

interface TeachBackProps {
  onPrev: () => void;
  onNext: () => void;
}

export function TeachBackSection({ onPrev, onNext }: TeachBackProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [teachBack1, setTeachBack1] = useState('');
  const [teachBack2, setTeachBack2] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const allFilled = ASSIGNMENT_SECTIONS.every((s) => answers[s.id]?.trim().length >= 5)
    && teachBack1.trim().length >= 5
    && teachBack2.trim().length >= 5;

  return (
    <SectionShell>
      <SectionHeader
        emoji="🎤"
        title="Final Teach-Back & Assignment"
        subtitle="Explain what you did — and complete your Making Of reflection"
      />

      <Card className="p-6 mb-6 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <span className="text-2xl">🎤</span>
          </div>
          <div>
            <p className="font-display font-bold text-xl mb-1">Teach-Back Time!</p>
            <p className="text-primary-100 leading-relaxed">
              Imagine your friend asks: <em>"Did AI make your comic?"</em>
              <br />How would you explain what <strong>YOU</strong> did and what AI did?
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-5 mb-6">
        <p className="text-sm font-bold text-ink-700 mb-2">Write your answer here:</p>
        <textarea
          value={teachBack1}
          onChange={(e) => setTeachBack1(e.target.value)}
          placeholder="If my friend asked me, I would say..."
          rows={3}
          className="w-full px-4 py-3 rounded-xl border-2 border-ink-200 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 text-ink-800 text-sm resize-none transition-all"
        />
      </Card>

      <Card className="p-5 mb-6">
        <p className="text-sm font-bold text-ink-700 mb-2">
          What is one thing you now know about using AI for creative work?
        </p>
        <textarea
          value={teachBack2}
          onChange={(e) => setTeachBack2(e.target.value)}
          placeholder="One thing I now know is..."
          rows={2}
          className="w-full px-4 py-3 rounded-xl border-2 border-ink-200 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 text-ink-800 text-sm resize-none transition-all"
        />
      </Card>

      <div className="h-px bg-ink-200 my-8" />

      <div className="flex items-center gap-3 mb-6">
        <FileText className="text-primary-600" size={28} />
        <div>
          <p className="font-display font-bold text-xl text-ink-900">The Making of My AI-Assisted Comic</p>
          <p className="text-sm text-ink-500">Final Assignment — reflect on your creative journey</p>
        </div>
      </div>

      <Card className="p-5 mb-6 bg-warning-50 border-warning-200">
        <p className="text-sm text-ink-700">
          This is <strong>NOT</strong> a new comic project. Use the comic you completed today.
          Answer in your own words. Your teacher can help clarify questions, but should not
          provide your answers. AI should not write the reflection for you!
        </p>
      </Card>

      <div className="space-y-4">
        {ASSIGNMENT_SECTIONS.map((section) => (
          <Card key={section.id} className="p-5">
            <p className="font-display font-bold text-lg text-ink-900 mb-1">{section.title}</p>
            <p className="text-ink-800 mb-1">{section.prompt}</p>
            {section.instruction && (
              <p className="text-xs text-ink-500 mb-2">{section.instruction}</p>
            )}
            {section.subPrompts && (
              <ul className="mb-3 space-y-1">
                {section.subPrompts.map((sp) => (
                  <li key={sp} className="text-sm text-primary-600 flex items-center gap-2">
                    <span className="text-primary-400">•</span> {sp}
                  </li>
                ))}
              </ul>
            )}
            <textarea
              value={answers[section.id] || ''}
              onChange={(e) => handleChange(section.id, e.target.value)}
              placeholder={section.placeholder}
              rows={section.isStatement ? 2 : 4}
              className="w-full px-4 py-3 rounded-xl border-2 border-ink-200 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 text-ink-800 text-sm resize-none transition-all"
            />
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card className="p-6 bg-ink-50 border-ink-200">
          <p className="font-display font-bold text-lg text-ink-800 mb-3">Assessment Rubric (10 points total)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {[
              { item: 'Story understanding', pts: 1 },
              { item: 'Human contribution', pts: 2 },
              { item: 'AI contribution', pts: 2 },
              { item: 'Critical reflection', pts: 2 },
              { item: 'Human touch example', pts: 2 },
              { item: 'Creator statement', pts: 1 },
            ].map((r) => (
              <div key={r.item} className="flex items-center justify-between px-3 py-2 bg-white rounded-lg border border-ink-200">
                <span className="text-ink-700">{r.item}</span>
                <span className="font-bold text-primary-600">{r.pts} pt{r.pts > 1 ? 's' : ''}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setSubmitted(true)}
          disabled={!allFilled || submitted}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-success-500 text-white font-bold text-lg hover:bg-success-600 transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Send size={20} />
          {submitted ? 'Submitted!' : 'Submit Final Assignment'}
        </button>
      </div>

      {submitted && (
        <Card className="p-6 mt-6 bg-gradient-to-br from-success-50 to-primary-50 border-success-300 animate-pop">
          <p className="text-center font-display font-bold text-xl text-ink-900 mb-2">
            Your AI-assisted comic is complete!
          </p>
          <p className="text-center text-ink-600 leading-relaxed">
            You didn't just use AI to make pictures. You created the idea, made decisions,
            checked the results, and shaped the final story.
          </p>
          <p className="text-center font-display font-bold text-lg text-primary-700 mt-3">
            YOU ARE THE CREATOR.
            <br />
            AI IS YOUR CREATIVE HELPER.
          </p>
        </Card>
      )}

      <TeacherPanel
        say="Imagine your friend asks: 'Did AI make your comic?' How would you explain what YOU did and what AI did?"
        ask="What is one thing you now know about using AI for creative work?"
        lookFor="Tiwatope should clearly distinguish his creative decisions from AI's help. He should take ownership. For the assignment, check that answers are in his own words with specific examples from his actual comic."
      />

      <NavButtons onPrev={onPrev} onNext={onNext} canProceed={submitted} nextLabel="See Your Achievement" />
    </SectionShell>
  );
}
