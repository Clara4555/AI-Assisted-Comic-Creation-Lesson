import type { LessonSection } from '@/types/lesson';

export const LESSON_TITLE = 'From Comic to AI-Assisted Storybook: You Are the Creator';

export const LESSON_SECTIONS: LessonSection[] = [
  { id: 'welcome', title: 'Welcome Back', subtitle: 'Your comic becomes a finished storybook', emoji: '🚀' },
  { id: 'collaborator', title: 'AI as a Creative Collaborator', subtitle: 'The brush, not the artist', emoji: '🎨' },
  { id: 'whodidwhat', title: 'Who Did What?', subtitle: 'Sort the parts of your comic', emoji: '🔍' },
  { id: 'humantouch', title: 'The Human Touch', subtitle: 'Your ideas make AI work better', emoji: '✨' },
  { id: 'airights', title: "When AI Doesn't Get It Right", subtitle: 'Review, change, and choose', emoji: '🔄' },
  { id: 'detective', title: 'Mini AI Detective', subtitle: 'Keep, Edit, or Try Again?', emoji: '🔎' },
  { id: 'complete', title: 'Complete Your Comic', subtitle: 'Final comic check', emoji: '✅' },
  { id: 'storybook', title: 'Your AI-Assisted Storybook', subtitle: 'What does AI-assisted mean?', emoji: '📖' },
  { id: 'makingof', title: 'The Making of My Story', subtitle: 'Reflect on your creative journey', emoji: '📝' },
  { id: 'quiz', title: 'Quick Quiz', subtitle: '5 questions about what you learned', emoji: '❓' },
  { id: 'teachback', title: 'Final Teach-Back', subtitle: 'Explain it in your own words', emoji: '🎤' },
  { id: 'completion', title: 'You Did It!', subtitle: 'Your storybook is complete', emoji: '🎉' },
];

export const COMIC_STAGES = [
  { label: 'IDEA', emoji: '💡' },
  { label: 'CHARACTERS', emoji: '🦸' },
  { label: 'SCENES', emoji: '🏞️' },
  { label: 'IMAGES', emoji: '🖼️' },
  { label: 'DIALOGUE', emoji: '💬' },
  { label: 'FINAL COMIC', emoji: '📚' },
];

export const CREATIVE_CYCLE = [
  { step: 'CREATE', desc: 'AI gives you an output.', emoji: '🤖' },
  { step: 'CHECK', desc: 'You look carefully at it.', emoji: '👀' },
  { step: 'CHANGE', desc: 'You improve or ask for something different.', emoji: '🔧' },
  { step: 'CHOOSE', desc: 'You decide what belongs in your final project.', emoji: '✅' },
];

export const DETECTIVE_CASES = [
  {
    id: 'case1',
    title: 'Case 1: The Perfect Scene',
    description:
      'AI generated an image of Emma standing in the mysterious forest with the treasure map in her hand. The trees look exactly how you described them. The lighting is perfect. This is exactly the scene you imagined!',
    visualLabel: '🌲 Perfect forest scene with Emma holding a map',
    choices: [
      { id: 'keep', label: 'KEEP', emoji: '✅' },
      { id: 'edit', label: 'EDIT', emoji: '✏️' },
      { id: 'tryagain', label: 'TRY AGAIN', emoji: '🔄' },
    ],
    correctThinking: ['keep'],
    explanation:
      'KEEP is a great choice here! When AI gives you exactly what you imagined, you can keep it. Remember — you still made the decision to keep it. That is your creative choice!',
  },
  {
    id: 'case2',
    title: 'Case 2: Right Character, Wrong Place',
    description:
      'AI generated Emma perfectly — her hair, her outfit, her expression all look right. But the background shows a busy city street instead of the mysterious forest you asked for!',
    visualLabel: '🏙️ Emma looks perfect, but wrong city background',
    choices: [
      { id: 'keep', label: 'KEEP', emoji: '✅' },
      { id: 'edit', label: 'EDIT', emoji: '✏️' },
      { id: 'tryagain', label: 'TRY AGAIN', emoji: '🔄' },
    ],
    correctThinking: ['edit', 'tryagain'],
    explanation:
      'EDIT or TRY AGAIN! The character looks great, but the background is wrong. You could edit the background, or try asking AI again with clearer instructions about the forest. You decide what to fix!',
  },
  {
    id: 'case3',
    title: "Case 3: Words That Don't Fit",
    description:
      'AI suggested this dialogue for Emma: "I am proceeding through the forest area." The grammar is correct, but it sounds like a robot — not like a brave adventurer girl talking to her friend!',
    visualLabel: '🤖 "I am proceeding through the forest area."',
    choices: [
      { id: 'keep', label: 'KEEP', emoji: '✅' },
      { id: 'edit', label: 'EDIT', emoji: '✏️' },
      { id: 'tryagain', label: 'TRY AGAIN', emoji: '🔄' },
    ],
    correctThinking: ['edit', 'tryagain'],
    explanation:
      'EDIT or TRY AGAIN! The words are correct but they do not sound like YOUR character. You know Emma better than AI does. You could rewrite the dialogue yourself or ask AI to try again with more personality!',
  },
];

export const CLASSIFICATION_ITEMS = [
  { id: 'story', label: 'Story Idea', categories: ['ME', 'AI', 'BOTH'] as const, followUp: 'What was your original story idea?' },
  { id: 'charideas', label: 'Character Ideas', categories: ['ME', 'AI', 'BOTH'] as const, followUp: 'Who came up with your characters?' },
  { id: 'chardetails', label: 'Character Details', categories: ['ME', 'AI', 'BOTH'] as const, followUp: 'What details did you decide about your characters?' },
  { id: 'sceneideas', label: 'Scene Ideas', categories: ['ME', 'AI', 'BOTH'] as const, followUp: 'What scenes did you imagine?' },
  { id: 'imgen', label: 'Image Generation', categories: ['ME', 'AI', 'BOTH'] as const, followUp: 'Who actually created the images?' },
  { id: 'imgchoose', label: 'Choosing Images', categories: ['ME', 'AI', 'BOTH'] as const, followUp: 'Who decided which images to use?' },
  { id: 'dlgideas', label: 'Dialogue Ideas', categories: ['ME', 'AI', 'BOTH'] as const, followUp: 'Where did the dialogue ideas come from?' },
  { id: 'dlgfinal', label: 'Final Dialogue', categories: ['ME', 'AI', 'BOTH'] as const, followUp: 'Who decided on the final words?' },
  { id: 'arrange', label: 'Comic Arrangement', categories: ['ME', 'AI', 'BOTH'] as const, followUp: 'Who decided how to arrange the panels?' },
];

export const COMIC_CHECKLIST = [
  { id: 'q1', text: 'Does the story make sense from beginning to end?' },
  { id: 'q2', text: 'Does every panel belong to the story?' },
  { id: 'q3', text: 'Does each character look consistent?' },
  { id: 'q4', text: 'Does the dialogue match what is happening?' },
  { id: 'q5', text: 'Is the dialogue short enough for the speech bubble?' },
  { id: 'q6', text: 'Did you choose the images you actually wanted?' },
  { id: 'q7', text: 'Did you make any changes to AI-generated ideas?' },
  { id: 'q8', text: 'Does the finished comic feel like YOUR story?' },
];

export const REFLECTION_PROMPTS = [
  { id: 'story_idea', label: 'MY STORY IDEA', prompt: 'What was my comic about?', placeholder: 'My comic was about...', expectedAnswer: undefined },
  { id: 'created', label: 'I CREATED', prompt: 'What parts did I create myself?', placeholder: 'I created...', expectedAnswer: undefined },
  { id: 'ai_helped', label: 'AI HELPED ME WITH', prompt: 'What did AI help me create or improve?', placeholder: 'AI helped me with...', expectedAnswer: undefined },
  { id: 'ai_wrong', label: "AI DIDN'T GET RIGHT", prompt: 'What was something AI got wrong or needed to improve?', placeholder: "AI didn't get...", expectedAnswer: undefined },
  { id: 'changed', label: 'I CHANGED', prompt: 'What did I change or decide myself?', placeholder: 'I changed...', expectedAnswer: undefined },
  { id: 'learned', label: 'I LEARNED', prompt: 'What did I learn about using AI creatively?', placeholder: 'I learned...', expectedAnswer: undefined },
  { id: 'creator', label: 'MY CREATOR STATEMENT', prompt: 'AI helped me, but I was the ______.', placeholder: 'Type your answer...', expectedAnswer: 'creator' },
];

export const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    prompt: 'Who should make the final creative decisions?',
    options: [
      { id: 'a', label: 'AI' },
      { id: 'b', label: 'The human creator' },
      { id: 'c', label: 'Nobody' },
    ],
    correctOptionId: 'b',
    explanation: 'That is right! The human creator makes the final decisions. AI is a helper, not the boss of your project.',
  },
  {
    id: 'q2',
    prompt: 'What should you do when an AI image is not what you expected?',
    options: [
      { id: 'a', label: 'Accept it automatically' },
      { id: 'b', label: 'Check it and decide whether to edit, regenerate, or use it' },
      { id: 'c', label: 'Delete the whole project' },
    ],
    correctOptionId: 'b',
    explanation: 'Yes! When AI does not give you what you expected, you CHECK the result, then decide: edit it, try again, or use it if it still works. You are in charge.',
  },
  {
    id: 'q3',
    prompt: 'What does "AI-assisted" mean?',
    options: [
      { id: 'a', label: 'AI did everything' },
      { id: 'b', label: 'A human used AI to help with parts of the creative process' },
      { id: 'c', label: 'AI owns the project' },
    ],
    correctOptionId: 'b',
    explanation: 'Correct! AI-assisted means a human creates and makes the important decisions, while AI helps with parts of the process. The human is still the creator.',
  },
  {
    id: 'q4',
    prompt: 'Which shows the human touch?',
    options: [
      { id: 'a', label: 'Accepting every AI result' },
      { id: 'b', label: 'Choosing, editing, improving, and adding your own ideas' },
      { id: 'c', label: 'Letting AI decide the story' },
    ],
    correctOptionId: 'b',
    explanation: 'Exactly! The human touch is when you choose, edit, improve, and add your own ideas. That is what makes the project truly yours.',
  },
  {
    id: 'q5',
    prompt: "Who is the creator of Tiwatope's comic?",
    options: [
      { id: 'a', label: 'AI' },
      { id: 'b', label: 'The person who made the AI tool' },
      { id: 'c', label: 'Tiwatope' },
    ],
    correctOptionId: 'c',
    explanation: 'That is right! Tiwatope is the creator. He came up with the ideas, made the decisions, chose the images, and shaped the story. AI was his creative helper.',
  },
];

export const ASSIGNMENT_SECTIONS = [
  {
    id: 'my_story',
    title: '1. MY STORY',
    prompt: 'What is my comic about?',
    instruction: 'Write 2–3 sentences.',
    placeholder: 'My comic is about...',
  },
  {
    id: 'my_contribution',
    title: '2. MY CONTRIBUTION',
    prompt: 'What did I create myself?',
    instruction: 'Use these prompts to help you:',
    subPrompts: ['I came up with...', 'I decided...', 'I chose...', 'I changed...'],
    placeholder: 'I came up with... I decided... I chose... I changed...',
  },
  {
    id: 'how_ai_helped',
    title: '3. HOW AI HELPED',
    prompt: 'What did AI help me with?',
    instruction: 'Think about: generating images, suggesting dialogue, developing ideas, improving wording.',
    placeholder: 'AI helped me by...',
  },
  {
    id: 'ai_wrong',
    title: '4. WHEN AI GOT IT WRONG',
    prompt: 'Describe one time AI did not give you exactly what you wanted.',
    instruction: 'Answer these questions: What did AI give me? What did I expect? What was different?',
    placeholder: 'AI gave me... I expected... It was different because...',
  },
  {
    id: 'human_touch',
    title: '5. MY HUMAN TOUCH',
    prompt: 'What did I change, choose, or improve?',
    instruction: 'Give at least ONE specific example.',
    placeholder: 'I changed... I chose... I improved...',
  },
  {
    id: 'creator_statement',
    title: '6. MY CREATOR STATEMENT',
    prompt: 'Complete this sentence:',
    instruction: '"AI helped me with __________, but I was the creator because I __________."',
    placeholder: 'AI helped me with ____, but I was the creator because I ____.',
    isStatement: true,
  },
  {
    id: 'final_reflection',
    title: '7. FINAL REFLECTION',
    prompt: 'What is one thing you learned about using AI for creative work?',
    instruction: '',
    placeholder: 'One thing I learned is...',
  },
];

export const COMPLETION_CHECKLIST = [
  { label: 'Story', emoji: '📖' },
  { label: 'Characters', emoji: '🦸' },
  { label: 'Scenes', emoji: '🏞️' },
  { label: 'AI Images', emoji: '🖼️' },
  { label: 'Dialogue', emoji: '💬' },
  { label: 'Comic', emoji: '📚' },
  { label: 'Human Touch', emoji: '✨' },
  { label: 'Making Of', emoji: '📝' },
];
