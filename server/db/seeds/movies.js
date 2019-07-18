exports.seed = (knex, Promise) => {
  return knex('movies').del()
    .then(() => {
      return knex('movies').insert([
        {
          'title': 'A star is born',
          'external_movie_key': 'null',
          'recommended': 'true'
        },
        {
          'title': 'Black Panther',
          'external_movie_key': 'null',
          'recommended': 'true'
        },
        {
          'title': 'Annihilation',
          'external_movie_key': 'null',
          'recommended': 'true'
        },
        {
          'title': 'Dear White People',
          'external_movie_key': 'null',
          'recommended': 'true'
        },
        {
          'title': 'The Pursuit of Happyness',
          'external_movie_key': 'null',
          'recommended': 'true'
        },
        {
          'title': 'The Meg',
          'external_movie_key': 'null',
          'recommended': 'true'
        },
        {
          'title': 'Roma',
          'external_movie_key': 'null',
          'recommended': 'true'
        },
        {
          'title': 'Guardians of the Galaxy',
          'external_movie_key': 'null',
          'recommended': 'true'
        },
        {
          'title': 'No country for Old Man',
          'external_movie_key': 'null',
          'recommended': 'true'
        },
        {
          'title': 'The Karate Kid',
          'external_movie_key': 'null',
          'recommended': 'true'
        }
      ])
    })
}
