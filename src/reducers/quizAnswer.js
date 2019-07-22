import { QUIZ_ANSWER, CLEAR_ANSWERS } from '../actions/quizAnswer'

export default function setAnswer (state = [], action) {
  switch (action.type) {
    case QUIZ_ANSWER:
      return newAnswer(state, action)
    case CLEAR_ANSWERS:
      return resetAnswers(state, action)
    default:
      return state
  }
}

function newAnswer (arr, action) {
  const exists = arr.find(el => el.id === action.questions.id)

  if (exists) {
    const newArr = arr.map(el => {
      if (el.id === action.questions.id) {
        el.answer = action.questions.answer
        console.log(el)
        return el
      } else return el
    })
    return newArr
  } else if (!exists) {
    arr.push(action.questions)
    const newAnswers = arr
    return newAnswers
  }
}

function resetAnswers (arr, action) {
  const clear = []
  return clear
}
