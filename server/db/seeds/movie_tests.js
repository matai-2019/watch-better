
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie_tests').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie_tests').insert([
        {id: 1, test_type: 'Bechdel Test', movie_id: 1, pass_or_fail: true },
        {id: 2, test_type: 'Bechdel Test', movie_id: 2, pass_or_fail: true },
        {id: 3, test_type: 'Bechdel Test', movie_id: 3, pass_or_fail: true },
        {id: 4, test_type: 'Duvernay Test', movie_id: 4, pass_or_fail: true },
        {id: 5, test_type: 'Duvernay Test', movie_id: 5, pass_or_fail: true },
        {id: 6, test_type: 'Duvernay Test', movie_id: 6, pass_or_fail: true },
        {id: 7, test_type: 'Bechdel Test', movie_id: 7, pass_or_fail: true },
        {id: 8, test_type: 'Bechdel Test', movie_id: 8, pass_or_fail: true },
        {id: 9, test_type: 'Bechdel Test', movie_id: 9, pass_or_fail: true },
        {id: 10, test_type: 'Bechdel Test', movie_id: 10, pass_or_fail: true },
      ]);
    });
};

//     {id: 1, name: 'The Bechdel Test', description: 'The Bechdel Test, sometimes called the Mo Movie Measure or Bechdel Rule is a simple test which names the following three criteria: (1) it has to have at least two women in it, who (2) who talk to each other, about (3) something besides a man. \n Founded by Alison Bechdel.'},
// {id: 2, name: 'The Duvernay Test', description: 'Coined as the Bechdel Test for race, to pass the DuVernay Test, an African American character — or a character of another minority — must have ‘fully realised’ lives, with their own desires, rather than serving as background characters (see: the black friend) for white plotlines. \n Founded by Manohla Dargis (named after Ava Duvernay).'},
// {id: 3, name: 'The Ko Test', description: 'Ko’s criteria opens up a broader conversation around intersectionality and gender equality in film. To pass, the movie must feature a non-white, female-identifying person who has lines in at least five scenes, and speaks English. \n Founded by Naomi Ko.'},
// {id: 3, name: 'The Landau Test', description: 'The criteria for the Landau Test focuses more on what a film shouldn’t have. A film fails if: a main female character ends up dead, pregnant, or if she causes a plot problem for a male protagonist. \n Founded by Noga Landau'}