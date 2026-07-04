# Académie Française 🇫🇷

A complete French learning website — from absolute basics to advanced level (CEFR A1 through C1).

## Features

- **30 detailed lessons** across 4 levels (Beginner, Elementary, Intermediate, Advanced)
- **Practice tests** after every lesson with explanations
- **4 final exams** (one per level) — pass with 70% to demonstrate mastery
- **Progress tracking** saved automatically in your browser
- **Rich content**: grammar, vocabulary, pronunciation, cultural notes, common mistakes

## Getting Started

```bash
cd french-academy
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Course Structure

| Level | CEFR | Lessons | Topics |
|-------|------|---------|--------|
| Beginner | A1 | 8 | Alphabet, greetings, numbers, colors, articles, être/avoir, gender, questions |
| Elementary | A2 | 8 | -ER/-IR/-RE verbs, family, food, time, prepositions, negation, partitive articles |
| Intermediate | B1–B2 | 8 | Passé composé, imparfait, future, conditional, pronouns, subjunctive, comparatives, relative pronouns |
| Advanced | C1 | 6 | Plus-que-parfait, advanced subjunctive, passive voice, conditionals, idioms, literary tenses |

## Build for Production

```bash
npm run build
npm run preview
```

## Tech Stack

- React 19 + TypeScript
- Vite
- React Router
- LocalStorage for progress persistence
