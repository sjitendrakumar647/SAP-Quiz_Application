"use client"

interface QuestionNavigationProps {
  totalQuestions: number
  currentQuestion: number
  answeredQuestions: number[]
  checkedQuestions: number[]
  onQuestionSelect: (index: number) => void
}

const QuestionNavigation = ({
  totalQuestions,
  currentQuestion,
  answeredQuestions,
  checkedQuestions,
  onQuestionSelect,
}: QuestionNavigationProps) => {
  return (
    <div className="question-navigation">
      <h3>Question Navigation</h3>
      <div className="question-buttons">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <button
            key={i}
            className={`nav-button ${i === currentQuestion ? "current" : ""} ${
              answeredQuestions.includes(i) ? "answered" : ""
            } ${checkedQuestions.includes(i) ? "checked" : ""}`}
            onClick={() => onQuestionSelect(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuestionNavigation
