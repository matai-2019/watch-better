exports.seed = (knex, Promise) => {
  return knex('movies').del()
    .then(() => {
      return knex('movies').insert([
        {
          'id': 1,
          'title': 'A star is born',
          'API_movie_id': 'null',
          'recommended': 'true'
        },
        {
          'id': 2,
          'title': 'Black Panther',
          'API_movie_id': 'null',
          'recommended': 'true'
        },
        {
          'id': 3,
          'title': 'Annihilation',
          'API_movie_id': 'null',
          'recommended': 'true'
        },
        {
          'id': 4,
          'title': 'Dear White People',
          'API_movie_id': 'null',
          'recommended': 'true'
        },
        {
          'id': 5,
          'title': 'The Pursuit of Happyness',
          'API_movie_id': 'null',
          'recommended': 'true'
        },
        {
          'id': 6,
          'title': 'The Meg',
          'API_movie_id': 'null',
          'recommended': 'true'
        },
        {
          'id': 7,
          'title': 'Roma',
          'API_movie_id': 'null',
          'recommended': 'true'
        },
        {
          'id': 8,
          'title': 'Guardians of the Galaxy',
          'API_movie_id': 'null',
          'recommended': 'true'
        },
        {
          'id': 9,
          'title': 'No country for Old Man',
          'API_movie_id': 'null',
          'recommended': 'true'
        },
        {
          'id': 10,
          'title': 'The Karate Kid',
          'API_movie_id': 'null',
          'recommended': 'true'
        }
      ])
    })
}
