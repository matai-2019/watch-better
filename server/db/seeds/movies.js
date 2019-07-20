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
          image: '/lbfuba6LomsBy52bYyKsH2exmQY.jpg',
          rating: 6.5
        },
        {
          id: 2,
          title: 'Hidden Figures',
          API_movie_id: 381284,
          recommended: true,
          image: '/6cbIDZLfwUTmttXTmNi8Mp3Rnmg.jpg',
          rating: 8
        },
        {
          id: 3,
          title: 'Independence Day: Resurgence',
          API_movie_id: 47933,
          recommended: true,
          image: '/5CHJs479xWnm3zMDOl94VkKS7MZ.jpg',
          rating: 5.1
        },
        {
          id: 4,
          title: 'Finding Dory',
          API_movie_id: 127380,
          recommended: true,
          image: '/z09QAf8WbZncbitewNk6lKYMZsh.jpg',
          rating: 7
        },
        {
          id: 5,
          title: 'Ghostbusters',
          API_movie_id: 43074,
          recommended: true,
          image: '/4qnJ1hsMADxzwnOmnwjZTNp0rKT.jpg',
          rating: 5.4
        },
        {
          id: 6,
          title: 'Allegiant',
          API_movie_id: 262504,
          recommended: true,
          image: '/tSFBh9Ayn5uiwbUK9HvD2lrRgaQ.jpg',
          rating: 6
        },
        {
          id: 7,
          title: 'Arrival',
          API_movie_id: 329864,
          recommended: false,
          rating: 6.5
        },
        {
          id: 8,
          title: 'Ice Age: Collision Course',
          API_movie_id: 278154,
          recommended: false,
          rating: 5.9
        },
        {
          id: 9,
          title: 'Kung Fu Panda 3',
          API_movie_id: 140300,
          recommended: true,
          image: '/MZFPacfKzgisnPoJIPEFZUXBBT.jpg',
          rating: 6.7
        },
        {
          id: 10,
          title: "Miss Peregrine's Home for Peculiar Children",
          API_movie_id: 283366,
          recommended: true,
          image: '/zhd7A4Wg18F8iTCVYBnqhnm9Od0.jpg',
          rating: 6.7
        },
        {
          id: 11,
          title: 'Sing',
          API_movie_id: 38575,
          recommended: false,
          rating: 6.3
        },
        {
          id: 12,
          title: 'The Boss',
          API_movie_id: 323676,
          recommended: false,
          rating: 5.8
        },
        {
          id: 13,
          title: 'The Girl on the Train',
          API_movie_id: 346685,
          recommended: true,
          image: '/AhTO2QWG0tug7yDoh0XoaMhPt3J.jpg',
          rating: 6.3
        },
        {
          id: 14,
          title: 'Boo! A Madea Halloween',
          API_movie_id: 376659,
          recommended: false,
          rating: 6.5
        },
        {
          id: 15,
          title: 'Alice Through the Looking Glass',
          API_movie_id: 381284,
          recommended: false,
          rating: 8
        },
        {
          id: 16,
          title: 'Fantastic Beasts and Where to Find Them',
          API_movie_id: 300668,
          recommended: true,
          image: '/1M91Bt3oGspda75H9eLqYZkJzgO.jpg',
          rating: 6.3
        },
        {
          id: 17,
          title: 'La La Land',
          API_movie_id: 114750,
          recommended: false,
          rating: 6.1
        },
        {
          id: 18,
          title: 'Now You See Me 2',
          API_movie_id: 88583,
          recommended: false,
          rating: 5.5
        },
        {
          id: 19,
          title: 'Passengers',
          API_movie_id: 274870,
          recommended: false,
          rating: 6.9
        },
        {
          id: 20,
          title: "Pete's Dragon",
          API_movie_id: 294272,
          recommended: false,
          rating: 6.3
        },
        {
          id: 21,
          title: 'Storks',
          API_movie_id: 332210,
          recommended: false,
          rating: 6.5
        },
        {
          id: 22,
          title: 'Suicide Squad',
          API_movie_id: 6977,
          recommended: false,
          rating: 6.5
        },
        {
          id: 23,
          title: 'Sing',
          API_movie_id: 38575,
          recommended: false,
          rating: 6.5
        },
        {
          id: 24,
          title: 'The Conjuring 2',
          API_movie_id: 38575,
          recommended: false,
          rating: 6.5
        },
        {
          id: 25,
          title: 'The Purge: Election Year',
          API_movie_id: 38575,
          recommended: false,
          rating: 6.5
        },
        {
          id: 26,
          title: 'X-Men: Apocalypse',
          API_movie_id: 38575,
          recommended: false,
          rating: 6.5
        },
        {
          id: 27,
          title: '10 Cloverfield Lane',
          API_movie_id: 376659,
          recommended: false,
          rating: 6.5
        },
        {
          id: 28,
          title: 'Batman v Superman: Dawn of Justice',
          API_movie_id: 381284,
          recommended: false,
          rating: 6.5
        },
        {
          id: 29,
          title: 'Captain America: Civil War',
          API_movie_id: 300668,
          recommended: false,
          rating: 6.5
        },
        {
          id: 30,
          title: 'Central Intelligence',
          API_movie_id: 114750,
          recommended: false,
          rating: 6.5
        },
        {
          id: 31,
          title: "Don't Breathe",
          API_movie_id: 88583,
          recommended: false,
          rating: 6.5
        },
        {
          id: 32,
          title: 'Hacksaw Ridge',
          API_movie_id: 345940,
          recommended: false,
          rating: 6.5
        },
        {
          id: 33,
          title: 'Lights Out',
          API_movie_id: 426426,
          recommended: false,
          rating: 6.5
        },
        {
          id: 34,
          title: 'Moana',
          API_movie_id: 118340,
          recommended: false,
          rating: 6.5
        },
        {
          id: 35,
          title: 'Ride Along 2',
          API_movie_id: 6977,
          recommended: false,
          rating: 6.5
        },
        {
          id: 36,
          title: 'Star Trek Beyond',
          API_movie_id: 38575,
          recommended: false,
          rating: 6.5
        },
        {
          id: 37,
          title: 'Sully',
          API_movie_id: 38575,
          recommended: false,
          rating: 6.5
        },
        {
          id: 38,
          title: 'Teenage Mutant Ninja Turtles: Out of the Shadows',
          API_movie_id: 38575,
          recommended: false,
          rating: 6.5
        },
        {
          id: 39,
          title: 'The Angry Birds Movie',
          API_movie_id: 38575,
          recommended: false,
          rating: 6.5
        },
        {
          id: 40,
          title: 'The Magnificent Seven',
          API_movie_id: 376659,
          recommended: false,
          rating: 6.5
        },
        {
          id: 41,
          title: 'Trolls',
          API_movie_id: 381284,
          recommended: false,
          rating: 6.5
        },
        {
          id: 42,
          title: 'Zootopia',
          API_movie_id: 300668,
          recommended: false,
          rating: 6.5
        },
        {
          id: 43,
          title: 'Jason Bourne',
          API_movie_id: 114750,
          recommended: false,
          rating: 6.5
        },
        {
          id: 44,
          title: 'Rogue One',
          API_movie_id: 88583,
          recommended: false,
          rating: 6.5
        },
        {
          id: 45,
          title: 'The Accountant',
          API_movie_id: 345940,
          recommended: false,
          rating: 6.5
        },
        {
          id: 46,
          title: 'The Jungle Book',
          API_movie_id: 426426,
          recommended: false,
          rating: 6.5
        },
        {
          id: 47,
          title: 'The Legend of Tarzan',
          API_movie_id: 118340,
          recommended: false,
          rating: 6.5
        },
        {
          id: 48,
          title: 'Deadpool',
          API_movie_id: 6977,
          recommended: false,
          rating: 6.5
        },
        {
          id: 49,
          title: 'Doctor Strange',
          API_movie_id: 38575,
          recommended: false,
          rating: 6.5
        },
        {
          id: 50,
          title: 'The Secret Life of Pets',
          API_movie_id: 38575,
          recommended: false,
          rating: 6.5
        }
      ])
    })
}
