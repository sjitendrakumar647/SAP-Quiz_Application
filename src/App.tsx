'use client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./components/QuizPage";
import QuizSelector from "./components/QuizSelector";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<QuizPage />} /> */}
          <Route path="/" element={<QuizSelector />} />
          <Route path="/original-quiz" element={<QuizPage />} />
          <Route path="/additional-quiz" element={<QuizPage isAdditionalQuiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
