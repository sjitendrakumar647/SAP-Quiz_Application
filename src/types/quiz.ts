export interface QuizOption {
  label: string
  value: string
  text: string
}

export interface QuizQuestion {
  id: number
  questionText: string
  options: QuizOption[]
  correctAnswer: string // For multiple answers, this will be a string like "BD" for options B and D
  explanation?: string
}
