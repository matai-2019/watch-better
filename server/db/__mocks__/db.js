const getAllMovies = async id => {
  const results = [
    {
      id: 1,
      title: 'Bad Moms',
      recommended: 'true',
      apiMovieId: 376659,
      movieTests: [
        {
          testType: 'Bechdel Test',
          result: 1
        },
        {
          testType: 'Rees Davies Test',
          result: 0
        },
        {
          testType: 'Ko Test',
          result: 1
        },
        {
          testType: 'Landau Test',
          result: 1
        },
        {
          testType: 'Feldman Test',
          result: 0
        }
      ]
    },
    {
      id: 2,
      title: 'Hiden Figures',
      recommended: 'true',
      apiMovieId: 381284,
      movieTests: [
        {
          testType: 'Bechdel Test',
          result: 1
        },
        {
          testType: 'Rees Davies Test',
          result: 0
        },
        {
          testType: 'Ko Test',
          result: 1
        },
        {
          testType: 'Landau Test',
          result: 1
        },
        {
          testType: 'Feldman Test',
          result: 1
        }
      ]
    }
  ]
  return Promise.resolve(results)
}

const getMovieById = id => {
  const results = {
    id: 1,
    title: 'Bad Moms',
    recommended: 'true',
    apiMovieId: 376659,
    movieTests: [
      {
        testType: 'Bechdel Test',
        result: 1
      },
      {
        testType: 'Rees Davies Test',
        result: 0
      },
      {
        testType: 'Ko Test',
        result: 1
      },
      {
        testType: 'Landau Test',
        result: 1
      },
      {
        testType: 'Feldman Test',
        result: 0
      }
    ]
  }
  return Promise.resolve(results)
}

const close = (db = database) => {
  db.destroy()
}

module.exports = {
  close,
  getMovieById,
  getAllMovies
}
