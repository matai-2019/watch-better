export const SORT_RATING_HIGH_LOW = 'SORT_RATING_HIGH_LOW'
export const SORT_RATING_LOW_HIGH = 'SORT_RATING_LOW_HIGH'
export const SORT_ALPHABETICAL_ASCENDING = 'SORT_ALPHABETICAL_ASCENDING'

export function sortBy (sortType) {
  return {
    type: sortType
  }
}
