import { Link } from "react-router-dom"

const QuizSelector = () => {
  return (
    <div className="quiz-selector">
      <h1>SAP Quiz Selection</h1>
      <p>Choose which quiz you would like to take:</p>

      <div className="quiz-options">
        <Link to="/original-quiz" className="quiz-option">
          <div className="quiz-card">
            <h2>Original Quiz</h2>
            <p>80 questions covering core SAP ABAP concepts</p>
            <span className="quiz-count">80 Questions</span>
          </div>
        </Link>

        <Link to="/additional-quiz" className="quiz-option">
          <div className="quiz-card">
            <h2>Additional Quiz</h2>
            <p>177 additional questions on advanced SAP topics</p>
            <span className="quiz-count">177 Questions</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default QuizSelector
