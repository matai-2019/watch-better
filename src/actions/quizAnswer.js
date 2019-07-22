export const QUIZ_ANSWER = 'QUIZ_ANSWER'

export const setAnswer = obj => {
  return {
    type: QUIZ_ANSWER,
    questions: {
      id: obj.id,
      answer: obj.answer
    }
  }
}
