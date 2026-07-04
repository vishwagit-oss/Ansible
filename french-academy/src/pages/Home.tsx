import { Link } from 'react-router-dom';
import { levels } from '../data/levels';
import { useProgress } from '../hooks/useProgress';
import { getLessonsByLevel } from '../data/lessons';

export default function Home() {
  const { progress } = useProgress();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🇫🇷 Complete French Course</span>
          <h1>Learn French from<br /><span className="highlight">Zero to Fluency</span></h1>
          <p className="hero-subtitle">
            30 detailed lessons from absolute basics to advanced level. Every lesson includes
            comprehensive explanations, vocabulary, practice tests, and level final exams.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <strong>30</strong>
              <span>Lessons</span>
            </div>
            <div className="stat">
              <strong>4</strong>
              <span>Levels</span>
            </div>
            <div className="stat">
              <strong>4</strong>
              <span>Final Exams</span>
            </div>
            <div className="stat">
              <strong>150+</strong>
              <span>Quiz Questions</span>
            </div>
          </div>
          <div className="hero-actions">
            <Link to="/level/a1" className="btn btn-primary btn-lg">
              Start Learning →
            </Link>
            <Link to="/dashboard" className="btn btn-secondary btn-lg">
              View Progress
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="french-card">
            <p className="card-greeting">Bonjour!</p>
            <p className="card-phrase">Je m'appelle...</p>
            <p className="card-phrase">Comment allez-vous?</p>
            <p className="card-phrase">Merci beaucoup!</p>
            <div className="card-flag">🇫🇷</div>
          </div>
        </div>
      </section>

      <section className="levels-section">
        <h2>Your Learning Path</h2>
        <p className="section-desc">
          Progress through four CEFR-aligned levels. Complete all lessons and pass the final exam to unlock the next level.
        </p>
        <div className="levels-grid">
          {levels.map((level, index) => {
            const lessons = getLessonsByLevel(level.id);
            const completed = lessons.filter(
              (l) => progress.lessons[l.id]?.completed,
            ).length;
            const percent = Math.round((completed / lessons.length) * 100);
            const levelProgress = progress.levels[level.id];
            const finalPassed = levelProgress?.finalTestPassed ?? false;

            return (
              <Link to={`/level/${level.id}`} key={level.id} className="level-card">
                <div className="level-card-header" style={{ borderColor: level.color }}>
                  <span className="level-icon">{level.icon}</span>
                  <div>
                    <span className="level-cefr" style={{ color: level.color }}>{level.cefr}</span>
                    <h3>{level.name}</h3>
                  </div>
                  <span className="level-number">{index + 1}</span>
                </div>
                <p className="level-desc">{level.description}</p>
                <div className="level-meta">
                  <span>{lessons.length} lessons</span>
                  <span>•</span>
                  <span>Final exam</span>
                </div>
                <div className="level-progress">
                  <div className="level-bar">
                    <div className="level-bar-fill" style={{ width: `${percent}%`, background: level.color }} />
                  </div>
                  <span>{completed}/{lessons.length} lessons</span>
                </div>
                {finalPassed && <span className="level-badge passed">✓ Final Passed</span>}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="features-section">
        <h2>What's Included</h2>
        <div className="features-grid">
          <div className="feature">
            <span className="feature-icon">📖</span>
            <h3>Detailed Lessons</h3>
            <p>Grammar explanations, vocabulary tables, pronunciation guides, cultural notes, and common mistake warnings in every lesson.</p>
          </div>
          <div className="feature">
            <span className="feature-icon">✍️</span>
            <h3>Practice Tests</h3>
            <p>After each lesson, test your knowledge with multiple-choice, fill-in-the-blank, and translation questions with detailed explanations.</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🎓</span>
            <h3>Final Exams</h3>
            <p>Comprehensive level exams covering all topics. Score 70% or higher to demonstrate mastery and move to the next level.</p>
          </div>
          <div className="feature">
            <span className="feature-icon">📊</span>
            <h3>Progress Tracking</h3>
            <p>Your progress is saved automatically. Track completed lessons, quiz scores, and final exam results on your dashboard.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
