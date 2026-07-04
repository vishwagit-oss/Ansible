import type { Level } from '../types';

export const levels: Level[] = [
  {
    id: 'a1',
    name: 'Beginner',
    cefr: 'A1',
    description:
      'Start from absolute zero. Learn the alphabet, pronunciation, greetings, numbers, basic grammar, and essential everyday vocabulary.',
    color: '#2ecc71',
    icon: '🌱',
    lessonIds: [
      'a1-l1',
      'a1-l2',
      'a1-l3',
      'a1-l4',
      'a1-l5',
      'a1-l6',
      'a1-l7',
      'a1-l8',
    ],
    finalTestId: 'a1-final',
  },
  {
    id: 'a2',
    name: 'Elementary',
    cefr: 'A2',
    description:
      'Build on the basics with verb conjugations, family, food, time expressions, prepositions, negation, and partitive articles.',
    color: '#3498db',
    icon: '📘',
    lessonIds: [
      'a2-l1',
      'a2-l2',
      'a2-l3',
      'a2-l4',
      'a2-l5',
      'a2-l6',
      'a2-l7',
      'a2-l8',
    ],
    finalTestId: 'a2-final',
  },
  {
    id: 'b1b2',
    name: 'Intermediate',
    cefr: 'B1–B2',
    description:
      'Master past tenses, future, conditional mood, object pronouns, subjunctive introduction, comparatives, and relative pronouns.',
    color: '#9b59b6',
    icon: '🎯',
    lessonIds: [
      'b1-l1',
      'b1-l2',
      'b1-l3',
      'b1-l4',
      'b1-l5',
      'b1-l6',
      'b1-l7',
      'b1-l8',
    ],
    finalTestId: 'b1-final',
  },
  {
    id: 'c1',
    name: 'Advanced',
    cefr: 'C1',
    description:
      'Refine your French with complex tenses, advanced subjunctive, passive voice, idiomatic expressions, and formal literary register.',
    color: '#e74c3c',
    icon: '🏆',
    lessonIds: ['c1-l1', 'c1-l2', 'c1-l3', 'c1-l4', 'c1-l5', 'c1-l6'],
    finalTestId: 'c1-final',
  },
];

export function getLevelById(id: string): Level | undefined {
  return levels.find((l) => l.id === id);
}
