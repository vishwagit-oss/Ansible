import { Link, useParams, useNavigate } from 'react-router-dom';
import { getFinalTestById } from '../data/finalTests';
import { getLevelById, levels } from '../data/levels';
import Quiz from '../components/Quiz';
import { useProgress } from '../hooks/useProgress';

export default function FinalTestPage() {
  const { testId } = useParams<{ testId: string }>();
  const navigate = useNavigate();
  const test = getFinalTestById(testId ?? '');
  const { markFinalTestComplete, progress } = useProgress();

  if (!test) {
    return (
      <div className="not-found">
        <h2>Test not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  const level = getLevelById(test.levelId);
  const finalPassed = progress.levels[test.levelId]?.finalTestPassed ?? false;

  const handleComplete = (score: number, passed: boolean) => {
    markFinalTestComplete(test.levelId, score, passed);
  };

  const nextLevel = levels.find((_level, i) => levels[i - 1]?.id === test.levelId);

  return (
    <div className="quiz-page final-test-page">
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to={`/level/${test.levelId}`}>{level?.cefr}</Link>
        <span>/</span>
        <span>Final Exam</span>
      </nav>

      <div className="final-test-header">
        <span className="final-badge">🎓 Final Examination</span>
        <h1>{test.title}</h1>
        <p>{test.description}</p>
        {finalPassed && (
          <div className="already-passed">
            ✓ You previously passed this exam with {progress.levels[test.levelId]?.finalTestScore}%
          </div>
        )}
      </div>

      <Quiz
        questions={test.questions}
        title={test.title}
        passingScore={test.passingScore}
        onComplete={handleComplete}
      />

      <div className="quiz-page-footer">
        <Link to={`/level/${test.levelId}`} className="btn btn-secondary">
          ← Back to Level
        </Link>
        {finalPassed && nextLevel && (
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/level/${nextLevel.id}`)}
          >
            Continue to {nextLevel.name} →
          </button>
        )}
      </div>
    </div>
  );
}
