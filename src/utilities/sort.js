export function sortAlphabeticalAscending (arr) {
  arr.sort((a, b) => {
    if (a.title < b.title) return -1
    else if (a.title > b.title) return 1
    else return 0
  })
  return [
    ...arr
  ]
}

export function sortHighToLow (arr) {
  arr.sort((a, b) => {
    if (a.rating > b.rating) return -1
    else if (a.rating < b.rating) return 1
    else return 0
  })
  return [
    ...arr
  ]
}

export function sortLowToHigh (arr) {
  arr.sort((a, b) => {
    if (a.rating < b.rating) return -1
    else if (a.rating > b.rating) return 1
    else return 0
  })
  return [
    ...arr
  ]
}
