import { Link, useParams } from 'react-router-dom';
import { getLessonById } from '../data/lessons';
import { getLevelById } from '../data/levels';
import ContentRenderer from '../components/ContentRenderer';
import VocabTable from '../components/VocabTable';
import { useProgress } from '../hooks/useProgress';

const sectionIcons: Record<string, string> = {
  intro: '👋',
  vocabulary: '📚',
  grammar: '📐',
  examples: '💬',
  pronunciation: '🗣️',
  mistakes: '⚠️',
  culture: '🌍',
  summary: '✅',
};

export default function LessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = getLessonById(lessonId ?? '');
  const { getLessonProgress } = useProgress();

  if (!lesson) {
    return (
      <div className="not-found">
        <h2>Lesson not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  const level = getLevelById(lesson.levelId);
  const lp = getLessonProgress(lesson.id);

  return (
    <div className="lesson-page">
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to={`/level/${lesson.levelId}`}>{level?.cefr ?? lesson.levelId}</Link>
        <span>/</span>
        <span>Lesson {lesson.order}</span>
      </nav>

      <header className="lesson-header">
        <span className="lesson-label">Lesson {lesson.order} • {lesson.duration}</span>
        <h1>{lesson.title}</h1>
        <p className="lesson-subtitle">{lesson.subtitle}</p>
        {lp.completed && (
          <span className="lesson-complete-badge">✓ Completed — Quiz: {lp.quizScore}%</span>
        )}
      </header>

      <div className="objectives-box">
        <h3>🎯 Learning Objectives</h3>
        <ul>
          {lesson.objectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>

      <div className="lesson-sections">
        {lesson.sections.map((section, i) => (
          <section key={i} className={`lesson-section section-${section.type}`}>
            <h2>
              <span className="section-icon">{sectionIcons[section.type] ?? '📄'}</span>
              {section.title}
            </h2>
            <ContentRenderer content={section.content} />
          </section>
        ))}
      </div>

      <VocabTable items={lesson.vocabulary} />

      <div className="lesson-footer">
        <Link to={`/level/${lesson.levelId}`} className="btn btn-secondary">
          ← Back to Level
        </Link>
        <Link to={`/quiz/${lesson.id}`} className="btn btn-primary btn-lg">
          {lp.completed ? 'Retake Practice Test →' : 'Take Practice Test →'}
        </Link>
      </div>
    </div>
  );
}
