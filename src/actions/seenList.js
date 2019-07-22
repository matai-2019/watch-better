export const SEEN = 'SEEN'
export const UNSEEN = 'UNSEEN'

export const seen = id => {
  return {
    type: SEEN,
    id
  }
}

export const unseen = id => {
  return {
    type: UNSEEN,
    id
  }
}
