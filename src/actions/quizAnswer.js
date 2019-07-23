export const QUIZ_ANSWER = 'QUIZ_ANSWER'
export const CLEAR_ANSWERS = 'CLEAR_ANSWERS'

export const setAnswer = obj => {
  return {
    type: QUIZ_ANSWER,
    questions: {
      id: obj.id,
      answer: obj.answer
    }
  }
}

export const clearAnswers = () => {
  return {
    type: CLEAR_ANSWERS
  }
}
