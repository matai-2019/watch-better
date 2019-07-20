exports.seed = (knex, Promise) => {
  return knex('movies')
    .del()
    .then(() => {
      return knex('movies').insert([
        {
          id: 1,
          title: 'Bad Moms',
          API_movie_id: 376659,
          recommended: true,
          image: '/9PaIkUnfOcU1wi5cFbamnmAkjEs.jpg'
        },
        {
          id: 2,
          title: 'Hidden Figures',
          API_movie_id: 381284,
          recommended: true,
          image: '/6cbIDZLfwUTmttXTmNi8Mp3Rnmg.jpg'
        },
        {
          id: 3,
          title: 'Independence Day: Resurgence',
          API_movie_id: 47933,
          recommended: true,
          image: '/5CHJs479xWnm3zMDOl94VkKS7MZ.jpg'
        },
        {
          id: 4,
          title: 'Finding Dory',
          API_movie_id: 127380,
          recommended: true,
          image: '/z09QAf8WbZncbitewNk6lKYMZsh.jpg'
        },
        {
          id: 5,
          title: 'Ghostbusters',
          API_movie_id: 43074,
          recommended: true,
          image: '/4qnJ1hsMADxzwnOmnwjZTNp0rKT.jpg'
        },
        {
          id: 6,
          title: 'Allegiant',
          API_movie_id: 262504,
          recommended: true,
          image: '/tSFBh9Ayn5uiwbUK9HvD2lrRgaQ.jpg'
        },
        {
          id: 7,
          title: 'Arrival',
          API_movie_id: 329865,
          recommended: false
        },
        {
          id: 8,
          title: 'Ice Age: Collision Course',
          API_movie_id: 278154,
          recommended: false
        },
        {
          id: 9,
          title: 'Kung Fu Panda 3',
          API_movie_id: 140300,
          recommended: true,
          image: '/MZFPacfKzgisnPoJIPEFZUXBBT.jpg'
        },
        {
          id: 10,
          title: "Miss Peregrine's Home for Peculiar Children",
          API_movie_id: 283366,
          recommended: true,
          image: '/zhd7A4Wg18F8iTCVYBnqhnm9Od0.jpg'
        },
        {
          id: 11,
          title: 'Sing',
          API_movie_id: 38575,
          recommended: false
        },
        {
          id: 12,
          title: 'The Boss',
          API_movie_id: 38575,
          recommended: false
        },
        {
          id: 13,
          title: 'The Girl on the Train',
          API_movie_id: 346685,
          recommended: true,
          image: '/AhTO2QWG0tug7yDoh0XoaMhPt3J.jpg'
        },
        {
          id: 14,
          title: 'Boo! A Madea Halloween',
          API_movie_id: 376659,
          recommended: false
        },
        {
          id: 15,
          title: 'Alice Through the Looking Glass',
          API_movie_id: 381284,
          recommended: false
        },
        {
          id: 16,
          title: 'Fantastic Beasts and Where to Find Them',
          API_movie_id: 259316,
          recommended: true,
          image: '/1M91Bt3oGspda75H9eLqYZkJzgO.jpg'
        },
        {
          id: 17,
          title: 'La La Land',
          API_movie_id: 114750,
          recommended: false
        },
        {
          id: 18,
          title: 'Now You See Me 2',
          API_movie_id: 88583,
          recommended: false
        },
        {
          id: 19,
          title: 'Passengers',
          API_movie_id: 345940,
          recommended: false
        },
        {
          id: 20,
          title: "Pete's Dragon",
          API_movie_id: 426426,
          recommended: false
        },
        {
          id: 21,
          title: 'Storks',
          API_movie_id: 118340,
          recommended: false
        },
        {
          id: 22,
          title: 'Suicide Squad',
          API_movie_id: 6977,
          recommended: false
        },
        {
          id: 23,
          title: 'Sing',
          API_movie_id: 38575,
          recommended: false
        },
        {
          id: 24,
          title: 'The Conjuring 2',
          API_movie_id: 38575,
          recommended: false
        },
        {
          id: 25,
          title: 'The Purge: Election Year',
          API_movie_id: 38575,
          recommended: false
        },
        {
          id: 26,
          title: 'X-Men: Apocalypse',
          API_movie_id: 38575,
          recommended: false
        },
        {
          id: 27,
          title: '10 Cloverfield Lane',
          API_movie_id: 376659,
          recommended: false
        },
        {
          id: 28,
          title: 'Batman v Superman: Dawn of Justice',
          API_movie_id: 381284,
          recommended: false
        },
        {
          id: 29,
          title: 'Captain America: Civil War',
          API_movie_id: 300668,
          recommended: false
        },
        {
          id: 30,
          title: 'Central Intelligence',
          API_movie_id: 114750,
          recommended: false
        },
        {
          id: 31,
          title: "Don't Breathe",
          API_movie_id: 88583,
          recommended: false
        },
        {
          id: 32,
          title: 'Hacksaw Ridge',
          API_movie_id: 345940,
          recommended: false
        },
        {
          id: 33,
          title: 'Lights Out',
          API_movie_id: 426426,
          recommended: false
        },
        {
          id: 34,
          title: 'Moana',
          API_movie_id: 118340,
          recommended: false
        },
        {
          id: 35,
          title: 'Ride Along 2',
          API_movie_id: 6977,
          recommended: false
        },
        {
          id: 36,
          title: 'Star Trek Beyond',
          API_movie_id: 38575,
          recommended: false
        },
        {
          id: 37,
          title: 'Sully',
          API_movie_id: 38575,
          recommended: false
        },
        {
          id: 38,
          title: 'Teenage Mutant Ninja Turtles: Out of the Shadows',
          API_movie_id: 38575,
          recommended: false
        },
        {
          id: 39,
          title: 'The Angry Birds Movie',
          API_movie_id: 38575,
          recommended: false
        },
        {
          id: 40,
          title: 'The Magnificent Seven',
          API_movie_id: 376659,
          recommended: false
        },
        {
          id: 41,
          title: 'Trolls',
          API_movie_id: 381284,
          recommended: false
        },
        {
          id: 42,
          title: 'Zootopia',
          API_movie_id: 300668,
          recommended: false
        },
        {
          id: 43,
          title: 'Jason Bourne',
          API_movie_id: 114750,
          recommended: false
        },
        {
          id: 44,
          title: 'Rogue One',
          API_movie_id: 88583,
          recommended: false
        },
        {
          id: 45,
          title: 'The Accountant',
          API_movie_id: 345940,
          recommended: false
        },
        {
          id: 46,
          title: 'The Jungle Book',
          API_movie_id: 426426,
          recommended: false
        },
        {
          id: 47,
          title: 'The Legend of Tarzan',
          API_movie_id: 118340,
          recommended: false
        },
        {
          id: 48,
          title: 'Deadpool',
          API_movie_id: 6977,
          recommended: false
        },
        {
          id: 49,
          title: 'Doctor Strange',
          API_movie_id: 38575,
          recommended: false
        },
        {
          id: 50,
          title: 'The Secret Life of Pets',
          API_movie_id: 38575,
          recommended: false
        }
      ])
    })
}
