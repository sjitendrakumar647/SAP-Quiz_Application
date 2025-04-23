"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import QuestionDisplay from "./QuestionDisplay"
import QuestionNavigation from "./QuestionNavigation"
import Timer from "./Timer"
import { quizData } from "../data/quizData"
import { additionalQuizData } from "../data/additionalQuizData"
import type { QuizQuestion } from "../types/quiz"

// Function to shuffle an array using Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

interface QuizPageProps {
  isAdditionalQuiz?: boolean
}

const QuizPage = ({ isAdditionalQuiz = false }: QuizPageProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({})
  const [checkedAnswers, setCheckedAnswers] = useState<Record<number, boolean>>({})
  const [timeRemaining, setTimeRemaining] = useState(3 * 60 * 60) // 3 hours in seconds
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([])

  const quizType = isAdditionalQuiz ? "additional" : "original"
  const storagePrefix = `sap-quiz-${quizType}-`

  // Initialize shuffled questions on component mount
  useEffect(() => {
    const sourceData = isAdditionalQuiz ? additionalQuizData : quizData

    // Check if we have shuffled questions in session storage
    const storedQuestions = sessionStorage.getItem(`${storagePrefix}shuffledQuestions`)

    if (storedQuestions) {
      // If we have stored questions, use them
      setShuffledQuestions(JSON.parse(storedQuestions))
    } else {
      // Otherwise, shuffle the options for each question
      const shuffled = sourceData.map((question) => {
        // Create a copy of the question
        const shuffledQuestion = { ...question }

        // Shuffle the options
        shuffledQuestion.options = shuffleArray(question.options)

        return shuffledQuestion
      })

      // Store the shuffled questions in session storage
      sessionStorage.setItem(`${storagePrefix}shuffledQuestions`, JSON.stringify(shuffled))
      setShuffledQuestions(shuffled)
    }

    // Restore user progress from session storage if available
    const storedAnswers = sessionStorage.getItem(`${storagePrefix}userAnswers`)
    const storedCheckedAnswers = sessionStorage.getItem(`${storagePrefix}checkedAnswers`)
    const storedTimeRemaining = sessionStorage.getItem(`${storagePrefix}timeRemaining`)
    const storedQuestionIndex = sessionStorage.getItem(`${storagePrefix}currentQuestionIndex`)

    if (storedAnswers) {
      setUserAnswers(JSON.parse(storedAnswers))
    }

    if (storedCheckedAnswers) {
      setCheckedAnswers(JSON.parse(storedCheckedAnswers))
    }

    if (storedTimeRemaining) {
      setTimeRemaining(Number.parseInt(storedTimeRemaining))
    }

    if (storedQuestionIndex) {
      setCurrentQuestionIndex(Number.parseInt(storedQuestionIndex))
    }
  }, [isAdditionalQuiz, storagePrefix])

  // Save progress to session storage whenever it changes
  useEffect(() => {
    if (Object.keys(userAnswers).length > 0) {
      sessionStorage.setItem(`${storagePrefix}userAnswers`, JSON.stringify(userAnswers))
    }

    if (Object.keys(checkedAnswers).length > 0) {
      sessionStorage.setItem(`${storagePrefix}checkedAnswers`, JSON.stringify(checkedAnswers))
    }

    sessionStorage.setItem(`${storagePrefix}timeRemaining`, timeRemaining.toString())
    sessionStorage.setItem(`${storagePrefix}currentQuestionIndex`, currentQuestionIndex.toString())
  }, [userAnswers, checkedAnswers, timeRemaining, currentQuestionIndex, storagePrefix])

  // If questions haven't been shuffled yet, show loading
  if (shuffledQuestions.length === 0) {
    return <div>Loading quiz...</div>
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex]

  const handleAnswerSelect = (answer: string) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: answer,
    })
  }

  const handleSubmitAnswer = () => {
    const userAnswer = userAnswers[currentQuestionIndex]
    if (!userAnswer) return

    const isCorrect = userAnswer === currentQuestion.correctAnswer
    setCheckedAnswers({
      ...checkedAnswers,
      [currentQuestionIndex]: isCorrect,
    })
  }

  const navigateToQuestion = (index: number) => {
    setCurrentQuestionIndex(index)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-title">
          <h1>SAP Quiz {isAdditionalQuiz ? "- Additional Questions" : ""}</h1>
          <Link to="/" className="back-to-selector">
            Back to Quiz Selection
          </Link>
        </div>
        <Timer
          timeRemaining={timeRemaining}
          setTimeRemaining={setTimeRemaining}
          storageKey={`${storagePrefix}timeRemaining`}
        />
      </div>

      <div className="quiz-content">
        <div className="question-section">
          <QuestionDisplay
            question={currentQuestion}
            currentIndex={currentQuestionIndex}
            selectedAnswer={userAnswers[currentQuestionIndex] || ""}
            isChecked={checkedAnswers[currentQuestionIndex] !== undefined}
            isCorrect={checkedAnswers[currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelect}
            onSubmit={handleSubmitAnswer}
            onNext={handleNextQuestion}
            onPrev={handlePrevQuestion}
          />
        </div>

        <div className="navigation-section">
          <QuestionNavigation
            totalQuestions={shuffledQuestions.length}
            currentQuestion={currentQuestionIndex}
            answeredQuestions={Object.keys(userAnswers).map(Number)}
            checkedQuestions={Object.keys(checkedAnswers).map(Number)}
            onQuestionSelect={navigateToQuestion}
          />
        </div>
      </div>
    </div>
  )
}

export default QuizPage
