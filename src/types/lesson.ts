export type SectionId =
  | 'welcome'
  | 'collaborator'
  | 'whodidwhat'
  | 'humantouch'
  | 'airights'
  | 'detective'
  | 'complete'
  | 'storybook'
  | 'makingof'
  | 'quiz'
  | 'teachback'
  | 'completion';

export interface TeacherNote {
  say: string;
  ask: string;
  lookFor: string;
}

export interface MultipleChoiceOption {
  id: string;
  label: string;
}

export interface MultipleChoiceQuestion {
  id: string;
  prompt: string;
  options: MultipleChoiceOption[];
  correctOptionId: string;
  explanation: string;
}

export interface ClassificationItem {
  id: string;
  label: string;
  categories: ('ME' | 'AI' | 'BOTH')[];
  followUp: string;
}

export interface DetectiveCase {
  id: string;
  title: string;
  description: string;
  visualLabel: string;
  choices: { id: string; label: string; emoji: string }[];
  correctThinking: string[];
  explanation: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
}

export interface ReflectionPrompt {
  id: string;
  label: string;
  prompt: string;
  placeholder: string;
  expectedAnswer?: string;
}

export interface LessonSection {
  id: SectionId;
  title: string;
  subtitle: string;
  emoji: string;
}
