exports.seed = function (knex, Promise) {
  return knex('comments').del()
    .then(function () {
      return knex('comments').insert([
        { id: 1, movie_id: 2, user_id: 1, comment: 'This movie is awesome!', user_rating: 4 },
        { id: 2, movie_id: 2, user_id: 2, comment: 'This movie is alright.', user_rating: 3 },
        { id: 3, movie_id: 2, user_id: 3, comment: 'This movie sucks!', user_rating: 2 }
      ])
    })
}
