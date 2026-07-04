export type QuestionType = 'multiple-choice' | 'fill-blank' | 'translation';

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface VocabItem {
  french: string;
  english: string;
  pronunciation?: string;
  gender?: 'm' | 'f';
  note?: string;
}

export type SectionType =
  | 'intro'
  | 'vocabulary'
  | 'grammar'
  | 'examples'
  | 'pronunciation'
  | 'mistakes'
  | 'culture'
  | 'summary';

export interface LessonSection {
  type: SectionType;
  title: string;
  content: string;
}

export interface Lesson {
  id: string;
  levelId: string;
  order: number;
  title: string;
  subtitle: string;
  duration: string;
  objectives: string[];
  sections: LessonSection[];
  vocabulary: VocabItem[];
  quiz: Question[];
}

export interface Level {
  id: string;
  name: string;
  cefr: string;
  description: string;
  color: string;
  icon: string;
  lessonIds: string[];
  finalTestId: string;
}

export interface FinalTest {
  id: string;
  levelId: string;
  title: string;
  description: string;
  passingScore: number;
  questions: Question[];
}

export interface LessonProgress {
  completed: boolean;
  quizScore: number | null;
  quizPassed: boolean;
  completedAt: string | null;
}

export interface LevelProgress {
  lessonsCompleted: number;
  finalTestPassed: boolean;
  finalTestScore: number | null;
}

export interface UserProgress {
  lessons: Record<string, LessonProgress>;
  levels: Record<string, LevelProgress>;
}
