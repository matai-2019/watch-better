exports.seed = function (knex, Promise) {
  return knex('movie_tests').del()
    .then(function () {
      return knex('movie_tests').insert([
        { id: 1, test_type: 'Bechdel Test', movie_id: 1, result: true },
        { id: 2, test_type: 'Rees Davies Test', movie_id: 1, result: false },
        { id: 3, test_type: 'Ko Test', movie_id: 1, result: true },
        { id: 4, test_type: 'Landau Test', movie_id: 1, result: true },
        { id: 5, test_type: 'Feldman Test', movie_id: 1, result: false },
        { id: 6, test_type: 'Bechdel Test', movie_id: 2, result: true },
        { id: 7, test_type: 'Rees Davies Test', movie_id: 2, result: false },
        { id: 8, test_type: 'Ko Test', movie_id: 2, result: true },
        { id: 9, test_type: 'Landau Test', movie_id: 2, result: true },
        { id: 10, test_type: 'Feldman Test', movie_id: 2, result: true },
        { id: 11, test_type: 'Bechdel Test', movie_id: 3, result: true },
        { id: 12, test_type: 'Rees Davies Test', movie_id: 3, result: false },
        { id: 13, test_type: 'Ko Test', movie_id: 3, result: true },
        { id: 14, test_type: 'Landau Test', movie_id: 3, result: false },
        { id: 15, test_type: 'Feldman Test', movie_id: 3, result: true },
        { id: 16, test_type: 'Bechdel Test', movie_id: 4, result: true },
        { id: 17, test_type: 'Rees Davies Test', movie_id: 4, result: true },
        { id: 18, test_type: 'Ko Test', movie_id: 4, result: false },
        { id: 19, test_type: 'Landau Test', movie_id: 4, result: false },
        { id: 20, test_type: 'Feldman Test', movie_id: 4, result: true },
        { id: 21, test_type: 'Bechdel Test', movie_id: 5, result: true },
        { id: 22, test_type: 'Rees Davies Test', movie_id: 5, result: false },
        { id: 23, test_type: 'Ko Test', movie_id: 5, result: true },
        { id: 24, test_type: 'Landau Test', movie_id: 5, result: true },
        { id: 25, test_type: 'Feldman Test', movie_id: 5, result: true },
        { id: 26, test_type: 'Bechdel Test', movie_id: 6, result: true },
        { id: 27, test_type: 'Rees Davies Test', movie_id: 6, result: false },
        { id: 28, test_type: 'Ko Test', movie_id: 6, result: true },
        { id: 29, test_type: 'Landau Test', movie_id: 6, result: false },
        { id: 30, test_type: 'Feldman Test', movie_id: 6, result: true },
        { id: 31, test_type: 'Bechdel Test', movie_id: 7, result: true },
        { id: 32, test_type: 'Rees Davies Test', movie_id: 7, result: false },
        { id: 33, test_type: 'Ko Test', movie_id: 7, result: false },
        { id: 34, test_type: 'Landau Test', movie_id: 7, result: false },
        { id: 35, test_type: 'Feldman Test', movie_id: 7, result: true },
        { id: 36, test_type: 'Bechdel Test', movie_id: 8, result: true },
        { id: 37, test_type: 'Rees Davies Test', movie_id: 8, result: true },
        { id: 38, test_type: 'Ko Test', movie_id: 8, result: true },
        { id: 39, test_type: 'Landau Test', movie_id: 8, result: true },
        { id: 40, test_type: 'Feldman Test', movie_id: 8, result: false },
        { id: 41, test_type: 'Bechdel Test', movie_id: 9, result: true },
        { id: 42, test_type: 'Rees Davies Test', movie_id: 9, result: true },
        { id: 43, test_type: 'Ko Test', movie_id: 9, result: true },
        { id: 44, test_type: 'Landau Test', movie_id: 9, result: true },
        { id: 45, test_type: 'Feldman Test', movie_id: 9, result: true },
        { id: 46, test_type: 'Bechdel Test', movie_id: 10, result: true },
        { id: 47, test_type: 'Rees Davies Test', movie_id: 10, result: false },
        { id: 48, test_type: 'Ko Test', movie_id: 10, result: false },
        { id: 49, test_type: 'Landau Test', movie_id: 10, result: true },
        { id: 50, test_type: 'Feldman Test', movie_id: 10, result: true }
      ])
    })
}
