"use client"
import { useState, useEffect } from "react"
import type { QuizQuestion } from "../types/quiz"

interface QuestionDisplayProps {
  question: QuizQuestion
  currentIndex: number
  selectedAnswer: string
  isChecked: boolean
  isCorrect: boolean
  onAnswerSelect: (answer: string) => void
  onSubmit: () => void
  onNext: () => void
  onPrev: () => void
}

const QuestionDisplay = ({
  question,
  currentIndex,
  selectedAnswer,
  isChecked,
  isCorrect,
  onAnswerSelect,
  onSubmit,
  onNext,
  onPrev,
}: QuestionDisplayProps) => {
  // Handle multiple answers
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])
  const hasMultipleAnswers = question.correctAnswer.length > 1

  // Initialize or update selected answers when question changes
  useEffect(() => {
    if (hasMultipleAnswers) {
      setSelectedAnswers(selectedAnswer ? selectedAnswer.split("") : [])
    }
  }, [selectedAnswer, question.id, hasMultipleAnswers])

  // Handle checkbox selection for multiple answers
  const handleCheckboxChange = (value: string) => {
    if (!isChecked) {
      const newSelectedAnswers = selectedAnswers.includes(value)
        ? selectedAnswers.filter((a) => a !== value)
        : [...selectedAnswers, value].sort() // Sort to match the expected order of correct answers

      setSelectedAnswers(newSelectedAnswers)
      onAnswerSelect(newSelectedAnswers.join(""))
    }
  }

  // Handle radio button selection for single answer
  const handleRadioSelect = (value: string) => {
    if (!isChecked) {
      onAnswerSelect(value)
    }
  }

  // Get correct answer options for display
  const getCorrectAnswerOptions = () => {
    if (hasMultipleAnswers) {
      return question.correctAnswer
        .split("")
        .map((value) => {
          const option = question.options.find((opt) => opt.value === value)
          return option ? `${option.label}: ${option.text}` : ""
        })
        .filter(Boolean)
        .join(", ")
    } else {
      const correctOption = question.options.find((opt) => opt.value === question.correctAnswer)
      return correctOption ? correctOption.text : ""
    }
  }

  return (
    <div className="question-display">
      <div className="question-header">
        <h2>Question {currentIndex + 1}</h2>
        {hasMultipleAnswers && <p className="multiple-answer-note">This question has multiple correct answers</p>}
      </div>

      <div className="question-content">
        <p dangerouslySetInnerHTML={{ __html: question.questionText }} />

        <div className="answer-options">
          {question.options.map((option, index) => {
            const isSelected = hasMultipleAnswers
              ? selectedAnswers.includes(option.value)
              : selectedAnswer === option.value

            const isCorrectOption = question.correctAnswer.includes(option.value)

            return (
              <div
                key={index}
                className={`answer-option ${isSelected ? "selected" : ""} ${
                  isChecked && isSelected ? (isCorrectOption ? "correct" : "incorrect") : ""
                } ${isChecked && !isSelected && isCorrectOption ? "missed-correct" : ""}`}
                onClick={() =>
                  hasMultipleAnswers ? handleCheckboxChange(option.value) : handleRadioSelect(option.value)
                }
              >
                <span className="option-input">
                  {hasMultipleAnswers ? (
                    <input type="checkbox" checked={isSelected} onChange={() => {}} disabled={isChecked} />
                  ) : (
                    <input
                      type="radio"
                      checked={isSelected}
                      onChange={() => {}}
                      disabled={isChecked}
                      name={`question-${currentIndex}`}
                    />
                  )}
                </span>
                <span className="option-label">{option.label}</span>
                <span className="option-text" dangerouslySetInnerHTML={{ __html: option.text }} />
              </div>
            )
          })}
        </div>

        {isChecked && !isCorrect && (
          <div className="correct-answer">
            <p>The correct answer{hasMultipleAnswers ? "s are" : " is"}: </p>
            <ul>
              {question.correctAnswer.split("").map((value, index) => {
                const option = question.options.find((opt) => opt.value === value)
                return option ? (
                  <li key={index}>
                    <strong>{option.label}:</strong> {option.text}
                  </li>
                ) : null
              })}
            </ul>
          </div>
        )}

        <div className="question-actions">
          <button className="btn btn-secondary" onClick={onPrev} disabled={currentIndex === 0}>
            Previous
          </button>

          {!isChecked ? (
            <button
              className="btn btn-primary"
              onClick={onSubmit}
              disabled={hasMultipleAnswers ? selectedAnswers.length === 0 : !selectedAnswer}
            >
              Submit
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={onNext}
              disabled={currentIndex === 79} // Total questions - 1
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuestionDisplay
