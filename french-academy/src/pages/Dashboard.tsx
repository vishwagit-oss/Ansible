import { Link } from 'react-router-dom';
import { levels } from '../data/levels';
import { getLessonsByLevel } from '../data/lessons';
import { getFinalTestByLevel } from '../data/finalTests';
import { useProgress } from '../hooks/useProgress';
import { allLessons } from '../data/lessons';

export default function Dashboard() {
  const { progress, resetProgress, getLessonProgress } = useProgress();

  const totalCompleted = Object.values(progress.lessons).filter((l) => l.completed).length;
  const totalLessons = allLessons.length;
  const overallPercent = Math.round((totalCompleted / totalLessons) * 100);
  const finalsPassed = Object.values(progress.levels).filter((l) => l.finalTestPassed).length;

  return (
    <div className="dashboard">
      <h1>Your Progress</h1>
      <p className="dashboard-subtitle">Track your French learning journey</p>

      <div className="dashboard-overview">
        <div className="overview-card">
          <span className="overview-num">{totalCompleted}</span>
          <span className="overview-label">Lessons Completed</span>
        </div>
        <div className="overview-card">
          <span className="overview-num">{overallPercent}%</span>
          <span className="overview-label">Overall Progress</span>
        </div>
        <div className="overview-card">
          <span className="overview-num">{finalsPassed}/4</span>
          <span className="overview-label">Final Exams Passed</span>
        </div>
        <div className="overview-card">
          <span className="overview-num">{totalLessons - totalCompleted}</span>
          <span className="overview-label">Lessons Remaining</span>
        </div>
      </div>

      <div className="overall-progress-bar">
        <div className="overall-fill" style={{ width: `${overallPercent}%` }} />
      </div>

      {levels.map((level) => {
        const lessons = getLessonsByLevel(level.id);
        const completed = lessons.filter((l) => getLessonProgress(l.id).completed).length;
        const percent = Math.round((completed / lessons.length) * 100);
        const levelProgress = progress.levels[level.id];
        const finalTest = getFinalTestByLevel(level.id);

        return (
          <div key={level.id} className="dashboard-level">
            <div className="dashboard-level-header">
              <span className="level-icon">{level.icon}</span>
              <div>
                <h2>{level.name} ({level.cefr})</h2>
                <span>{completed}/{lessons.length} lessons • {percent}% complete</span>
              </div>
              <Link to={`/level/${level.id}`} className="btn btn-sm btn-secondary">
                Go to Level
              </Link>
            </div>
            <div className="dashboard-bar">
              <div className="dashboard-bar-fill" style={{ width: `${percent}%`, background: level.color }} />
            </div>
            <div className="dashboard-lessons">
              {lessons.map((lesson) => {
                const lp = getLessonProgress(lesson.id);
                return (
                  <div key={lesson.id} className={`dash-lesson ${lp.completed ? 'done' : ''}`}>
                    <span className="dash-lesson-num">{lesson.order}</span>
                    <span className="dash-lesson-title">{lesson.title}</span>
                    {lp.quizScore !== null ? (
                      <span className={`dash-score ${lp.quizPassed ? 'pass' : 'fail'}`}>
                        {lp.quizScore}%
                      </span>
                    ) : (
                      <span className="dash-score pending">—</span>
                    )}
                    <Link to={`/lesson/${lesson.id}`} className="dash-link">
                      {lp.completed ? 'Review' : 'Start'}
                    </Link>
                  </div>
                );
              })}
            </div>
            {finalTest && (
              <div className="dashboard-final">
                <span>🎓 {finalTest.title}</span>
                {levelProgress?.finalTestPassed ? (
                  <span className="final-pass">✓ Passed ({levelProgress.finalTestScore}%)</span>
                ) : levelProgress?.finalTestScore != null ? (
                  <span className="final-fail">Failed ({levelProgress.finalTestScore}%) — <Link to={`/final-test/${finalTest.id}`}>Retry</Link></span>
                ) : completed === lessons.length ? (
                  <Link to={`/final-test/${finalTest.id}`} className="btn btn-sm btn-primary">Take Exam</Link>
                ) : (
                  <span className="final-locked">🔒 Complete all lessons first</span>
                )}
              </div>
            )}
          </div>
        );
      })}

      <div className="dashboard-actions">
        <button className="btn btn-secondary" onClick={() => {
          if (confirm('Reset all progress? This cannot be undone.')) {
            resetProgress();
          }
        }}>
          Reset All Progress
        </button>
      </div>
    </div>
  );
}
