import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LevelPage from './pages/LevelPage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import FinalTestPage from './pages/FinalTestPage';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/level/:levelId" element={<LevelPage />} />
          <Route path="/lesson/:lessonId" element={<LessonPage />} />
          <Route path="/quiz/:lessonId" element={<QuizPage />} />
          <Route path="/final-test/:testId" element={<FinalTestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
