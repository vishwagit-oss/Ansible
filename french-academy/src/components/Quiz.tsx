import { useState, useCallback } from 'react';
import type { Question } from '../types';

interface QuizProps {
  questions: Question[];
  title: string;
  passingScore?: number;
  onComplete: (score: number, passed: boolean) => void;
}

export default function Quiz({ questions, title, passingScore = 70, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const current = questions[currentIndex];
  const total = questions.length;

  const handleAnswer = (answer: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [current.id]: answer }));
  };

  const normalize = (s: string) => s.trim().toLowerCase().replace(/['']/g, "'");

  const isCorrect = useCallback(
    (q: Question) => {
      const userAnswer = answers[q.id];
      if (!userAnswer) return false;
      const correct = normalize(q.correctAnswer);
      const user = normalize(userAnswer);
      return user === correct || correct.includes(user) && user.length > 2;
    },
    [answers],
  );

  const score = questions.filter((q) => isCorrect(q)).length;
  const percent = Math.round((score / total) * 100);
  const passed = percent >= passingScore;

  const handleSubmit = () => {
    setSubmitted(true);
    setShowResults(true);
    onComplete(percent, passed);
  };

  const allAnswered = questions.every((q) => answers[q.id]);

  if (showResults) {
    return (
      <div className="quiz-results">
        <div className={`results-header ${passed ? 'passed' : 'failed'}`}>
          <div className="results-icon">{passed ? '🎉' : '📖'}</div>
          <h2>{passed ? 'Excellent!' : 'Keep Practicing!'}</h2>
          <p className="results-score">
            You scored <strong>{score}/{total}</strong> ({percent}%)
          </p>
          <p className="results-message">
            {passed
              ? `You passed! ${passingScore}% required.`
              : `You need ${passingScore}% to pass. Review the lesson and try again.`}
          </p>
        </div>
        <div className="results-breakdown">
          {questions.map((q, i) => {
            const correct = isCorrect(q);
            return (
              <div key={q.id} className={`result-item ${correct ? 'correct' : 'incorrect'}`}>
                <div className="result-q">
                  <span className="result-num">{i + 1}.</span>
                  {q.question}
                </div>
                <div className="result-answers">
                  <span className="your-answer">
                    Your answer: <strong>{answers[q.id] ?? '(no answer)'}</strong>
                  </span>
                  {!correct && (
                    <span className="correct-answer">
                      Correct: <strong>{q.correctAnswer}</strong>
                    </span>
                  )}
                </div>
                <p className="result-explanation">{q.explanation}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <h2>{title}</h2>
        <div className="quiz-progress">
          Question {currentIndex + 1} of {total}
          <div className="quiz-bar">
            <div
              className="quiz-bar-fill"
              style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="quiz-question">
        <p className="question-text">{current.question}</p>

        {current.type === 'multiple-choice' && current.options && (
          <div className="options">
            {current.options.map((opt) => (
              <button
                key={opt}
                className={`option-btn ${answers[current.id] === opt ? 'selected' : ''}`}
                onClick={() => handleAnswer(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {(current.type === 'fill-blank' || current.type === 'translation') && (
          <div className="fill-blank">
            <input
              type="text"
              className="answer-input"
              placeholder="Type your answer..."
              value={answers[current.id] ?? ''}
              onChange={(e) => handleAnswer(e.target.value)}
            />
            <p className="input-hint">Press Enter or click Next when ready</p>
          </div>
        )}
      </div>

      <div className="quiz-nav">
        <button
          className="btn btn-secondary"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => i - 1)}
        >
          ← Previous
        </button>

        {currentIndex < total - 1 ? (
          <button
            className="btn btn-primary"
            disabled={!answers[current.id]}
            onClick={() => setCurrentIndex((i) => i + 1)}
          >
            Next →
          </button>
        ) : (
          <button
            className="btn btn-primary btn-submit"
            disabled={!allAnswered}
            onClick={handleSubmit}
          >
            Submit Quiz ✓
          </button>
        )}
      </div>

      <div className="question-dots">
        {questions.map((q, i) => (
          <button
            key={q.id}
            className={`dot ${i === currentIndex ? 'active' : ''} ${answers[q.id] ? 'answered' : ''}`}
            onClick={() => setCurrentIndex(i)}
            title={`Question ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
