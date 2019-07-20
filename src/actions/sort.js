export const SORT_RAITING_HIGH_LOW = 'SORT_RAITING_HIGH_LOW'
export const SORT_RAITING_LOW_HIGH = 'SORT_RAITING_LOW_HIGH'
export const SORT_ALPHABETICAL_ASCENDING = 'SORT_ALPHABETICAL_ASCENDING'

export function sortBy (sortType) {
  return {
    type: sortType
  }
}
