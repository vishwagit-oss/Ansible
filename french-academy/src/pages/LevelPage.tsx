import { Link, useParams } from 'react-router-dom';
import { getLevelById } from '../data/levels';
import { getLessonsByLevel } from '../data/lessons';
import { getFinalTestByLevel } from '../data/finalTests';
import { useProgress } from '../hooks/useProgress';

export default function LevelPage() {
  const { levelId } = useParams<{ levelId: string }>();
  const level = getLevelById(levelId ?? '');
  const { getLessonProgress, progress } = useProgress();

  if (!level) {
    return (
      <div className="not-found">
        <h2>Level not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  const lessons = getLessonsByLevel(level.id);
  const finalTest = getFinalTestByLevel(level.id);
  const levelProgress = progress.levels[level.id];
  const completedCount = lessons.filter((l) => getLessonProgress(l.id).completed).length;
  const allLessonsComplete = completedCount === lessons.length;
  const finalPassed = levelProgress?.finalTestPassed ?? false;

  return (
    <div className="level-page">
      <div className="level-banner" style={{ background: `linear-gradient(135deg, ${level.color}22, ${level.color}44)` }}>
        <div className="level-banner-inner">
          <span className="level-banner-icon">{level.icon}</span>
          <div>
            <span className="level-banner-cefr" style={{ color: level.color }}>{level.cefr} — {level.name}</span>
            <h1>{level.name} French</h1>
            <p>{level.description}</p>
          </div>
          <div className="level-banner-stats">
            <div className="banner-stat">
              <strong>{completedCount}/{lessons.length}</strong>
              <span>Lessons Done</span>
            </div>
            {finalPassed && (
              <div className="banner-stat passed">
                <strong>✓</strong>
                <span>Final Passed</span>
              </div>
            )}
          </div>
        </div>
        <div className="level-overall-bar">
          <div className="level-overall-fill" style={{ width: `${(completedCount / lessons.length) * 100}%`, background: level.color }} />
        </div>
      </div>

      <div className="lessons-list">
        <h2>Lessons</h2>
        {lessons.map((lesson) => {
          const lp = getLessonProgress(lesson.id);
          return (
            <div key={lesson.id} className={`lesson-row ${lp.completed ? 'completed' : ''}`}>
              <div className="lesson-row-num">{lesson.order}</div>
              <div className="lesson-row-content">
                <h3>{lesson.title}</h3>
                <p>{lesson.subtitle}</p>
                <div className="lesson-row-meta">
                  <span>⏱ {lesson.duration}</span>
                  <span>📝 {lesson.quiz.length} quiz questions</span>
                  {lp.quizScore !== null && (
                    <span className={lp.quizPassed ? 'score-pass' : 'score-fail'}>
                      Quiz: {lp.quizScore}%
                    </span>
                  )}
                </div>
              </div>
              <div className="lesson-row-actions">
                {lp.completed && <span className="check-mark">✓</span>}
                <Link to={`/lesson/${lesson.id}`} className="btn btn-primary btn-sm">
                  {lp.completed ? 'Review' : 'Start'}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {finalTest && (
        <div className={`final-test-card ${allLessonsComplete ? 'unlocked' : 'locked'}`}>
          <div className="final-test-icon">🎓</div>
          <div className="final-test-content">
            <h2>{finalTest.title}</h2>
            <p>{finalTest.description}</p>
            <p className="final-test-meta">
              {finalTest.questions.length} questions • {finalTest.passingScore}% to pass
            </p>
            {levelProgress?.finalTestScore !== null && levelProgress?.finalTestScore !== undefined && (
              <p className={`final-score ${finalPassed ? 'passed' : 'failed'}`}>
                Last score: {levelProgress.finalTestScore}%
                {finalPassed ? ' ✓ Passed' : ' — Try again'}
              </p>
            )}
          </div>
          {allLessonsComplete ? (
            <Link to={`/final-test/${finalTest.id}`} className="btn btn-primary">
              {finalPassed ? 'Retake Exam' : 'Take Final Exam'}
            </Link>
          ) : (
            <div className="locked-msg">
              🔒 Complete all {lessons.length} lessons to unlock
            </div>
          )}
        </div>
      )}

      <div className="level-nav">
        {levelsNav(level.id)}
      </div>
    </div>
  );
}

function levelsNav(currentId: string) {
  const order = ['a1', 'a2', 'b1b2', 'c1'];
  const idx = order.indexOf(currentId);
  const prev = idx > 0 ? order[idx - 1] : null;
  const next = idx < order.length - 1 ? order[idx + 1] : null;

  return (
    <div className="level-nav-buttons">
      {prev && (
        <Link to={`/level/${prev}`} className="btn btn-secondary">
          ← Previous Level
        </Link>
      )}
      {next && (
        <Link to={`/level/${next}`} className="btn btn-secondary">
          Next Level →
        </Link>
      )}
    </div>
  );
}
