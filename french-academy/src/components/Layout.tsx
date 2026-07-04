import { Link, Outlet, useLocation } from 'react-router-dom';
import { levels } from '../data/levels';
import { useProgress } from '../hooks/useProgress';
import { allLessons } from '../data/lessons';

export default function Layout() {
  const location = useLocation();
  const { progress } = useProgress();

  const completedCount = Object.values(progress.lessons).filter((l) => l.completed).length;
  const totalLessons = allLessons.length;
  const overallPercent = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo">
            <span className="logo-flag">🇫🇷</span>
            <span className="logo-text">
              <strong>Académie</strong> Française
            </span>
          </Link>
          <nav className="nav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
              Progress
            </Link>
            {levels.map((level) => (
              <Link
                key={level.id}
                to={`/level/${level.id}`}
                className={location.pathname.startsWith(`/level/${level.id}`) ? 'active' : ''}
              >
                {level.cefr}
              </Link>
            ))}
          </nav>
          <div className="header-progress">
            <div className="mini-bar">
              <div className="mini-bar-fill" style={{ width: `${overallPercent}%` }} />
            </div>
            <span className="mini-bar-label">{completedCount}/{totalLessons}</span>
          </div>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>Académie Française — Learn French from zero to fluency</p>
      </footer>
    </div>
  );
}
