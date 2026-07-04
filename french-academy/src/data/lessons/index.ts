import { a1Lessons } from './a1-part1';
import { a1LessonsPart2 } from './a1-part2';
import { a1LessonsPart3 } from './a1-part3';
import { a2Lessons } from './a2';
import { b1Lessons } from './b1';
import { c1Lessons } from './c1';
import type { Lesson } from '../../types';

export const allLessons: Lesson[] = [
  ...a1Lessons,
  ...a1LessonsPart2,
  ...a1LessonsPart3,
  ...a2Lessons,
  ...b1Lessons,
  ...c1Lessons,
];

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}

export function getLessonsByLevel(levelId: string): Lesson[] {
  return allLessons.filter((l) => l.levelId === levelId).sort((a, b) => a.order - b.order);
}

export function getNextLesson(currentId: string): Lesson | undefined {
  const current = getLessonById(currentId);
  if (!current) return undefined;
  return getLessonsByLevel(current.levelId).find((l) => l.order === current.order + 1);
}

export function getTotalLessonCount(): number {
  return allLessons.length;
}
