import { QUIZ_ANSWER } from '../actions/quizAnswer'

export default function setAnswer (state = [], action) {
  switch (action.type) {
    case QUIZ_ANSWER:
      return newAnswer(state, action)
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
