import { Link, useParams, useNavigate } from 'react-router-dom';
import { getLessonById, getNextLesson } from '../data/lessons';
import { getLevelById } from '../data/levels';
import Quiz from '../components/Quiz';
import { useProgress } from '../hooks/useProgress';

export default function QuizPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const lesson = getLessonById(lessonId ?? '');
  const { markQuizComplete } = useProgress();

  if (!lesson) {
    return (
      <div className="not-found">
        <h2>Quiz not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  const level = getLevelById(lesson.levelId);
  const nextLesson = getNextLesson(lesson.id);

  const handleComplete = (score: number, passed: boolean) => {
    if (passed) {
      markQuizComplete(lesson.id, score, true, lesson.levelId);
    } else {
      markQuizComplete(lesson.id, score, false, lesson.levelId);
    }
  };

  return (
    <div className="quiz-page">
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to={`/level/${lesson.levelId}`}>{level?.cefr}</Link>
        <span>/</span>
        <Link to={`/lesson/${lesson.id}`}>Lesson {lesson.order}</Link>
        <span>/</span>
        <span>Practice Test</span>
      </nav>

      <div className="quiz-page-header">
        <h1>Practice Test</h1>
        <p>
          Lesson {lesson.order}: {lesson.title} — Score 70% or higher to mark this lesson complete.
        </p>
      </div>

      <Quiz
        questions={lesson.quiz}
        title={`Lesson ${lesson.order} Practice Test`}
        passingScore={70}
        onComplete={handleComplete}
      />

      <div className="quiz-page-footer">
        <Link to={`/lesson/${lesson.id}`} className="btn btn-secondary">
          ← Review Lesson
        </Link>
        {nextLesson && (
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/lesson/${nextLesson.id}`)}
          >
            Next Lesson →
          </button>
        )}
      </div>
    </div>
  );
}
