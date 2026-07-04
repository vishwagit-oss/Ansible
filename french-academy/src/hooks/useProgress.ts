import { useCallback, useEffect, useState } from 'react';
import { getLessonsByLevel } from '../data/lessons';
import type { UserProgress, LessonProgress } from '../types';

const STORAGE_KEY = 'french-academy-progress';

const defaultLessonProgress = (): LessonProgress => ({
  completed: false,
  quizScore: null,
  quizPassed: false,
  completedAt: null,
});

const defaultProgress = (): UserProgress => ({
  lessons: {},
  levels: {},
});

function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as UserProgress;
  } catch {
    /* ignore */
  }
  return defaultProgress();
}

function saveProgress(progress: UserProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const getLessonProgress = useCallback(
    (lessonId: string): LessonProgress =>
      progress.lessons[lessonId] ?? defaultLessonProgress(),
    [progress.lessons],
  );

  const markQuizComplete = useCallback(
    (lessonId: string, score: number, passed: boolean, levelId: string) => {
      setProgress((prev) => {
        const lessonEntry: LessonProgress = {
          completed: passed,
          quizScore: score,
          quizPassed: passed,
          completedAt: passed ? new Date().toISOString() : null,
        };
        const lessons = { ...prev.lessons, [lessonId]: lessonEntry };
        const levelLessonIds = new Set(getLessonsByLevel(levelId).map((l) => l.id));
        const lessonsCompleted = Object.entries(lessons).filter(
          ([id, p]) => levelLessonIds.has(id) && p.completed,
        ).length;

        return {
          ...prev,
          lessons,
          levels: {
            ...prev.levels,
            [levelId]: {
              ...prev.levels[levelId],
              lessonsCompleted,
              finalTestPassed: prev.levels[levelId]?.finalTestPassed ?? false,
              finalTestScore: prev.levels[levelId]?.finalTestScore ?? null,
            },
          },
        };
      });
    },
    [],
  );

  const markFinalTestComplete = useCallback(
    (levelId: string, score: number, passed: boolean) => {
      setProgress((prev) => ({
        ...prev,
        levels: {
          ...prev.levels,
          [levelId]: {
            ...prev.levels[levelId],
            lessonsCompleted: prev.levels[levelId]?.lessonsCompleted ?? 0,
            finalTestPassed: passed,
            finalTestScore: score,
          },
        },
      }));
    },
    [],
  );

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress());
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    progress,
    getLessonProgress,
    markQuizComplete,
    markFinalTestComplete,
    resetProgress,
  };
}
