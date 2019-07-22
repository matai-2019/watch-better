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
          image: '/9PaIkUnfOcU1wi5cFbamnmAkjEs.jpg',
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
          API_movie_id: 329865,
          recommended: false,
          image: '/xGgg2UI20qtEh7mura3RRwP8d3I.jpg',
          rating: 7.4
        },
        {
          id: 8,
          title: 'Ice Age: Collision Course',
          API_movie_id: 278154,
          recommended: false,
          image: '/gRi7lTBBiRBhn9aJID5MdldcJEJ.jpg',
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
          API_movie_id: 335797,
          recommended: false,
          image: '/eSVtBB2PVFbQiFWC7CQi3EjIZnn.jpg',
          rating: 6.9
        },
        {
          id: 12,
          title: 'The Boss',
          API_movie_id: 323676,
          recommended: false,
          image: '/w8smnnIVlEeFwD4Z0pKPC3RN2xT.jpg',
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
          API_movie_id: 380124,
          recommended: false,
          image: '/dpSWKKBtXOu8hDNJRCIAYfcRtdD.jpg',
          rating: 5.4
        },
        {
          id: 15,
          title: 'Alice Through the Looking Glass',
          API_movie_id: 241259,
          recommended: false,
          image: '/hrweIZ34Z3MCPNfRT4tGC2CXyrH.jpg',
          rating: 6.5
        },
        {
          id: 16,
          title: 'Fantastic Beasts and Where to Find Them',
          API_movie_id: 259316,
          recommended: true,
          image: '/1M91Bt3oGspda75H9eLqYZkJzgO.jpg',
          rating: 7.4
        },
        {
          id: 17,
          title: 'La La Land',
          API_movie_id: 313369,
          recommended: false,
          image: '/ylXCdC106IKiarftHkcacasaAcb.jpg',
          rating: 7.9
        },
        {
          id: 18,
          title: 'Now You See Me 2',
          API_movie_id: 291805,
          recommended: false,
          image: '/hU0E130tsGdsYa4K9lc3Xrn5Wyt.jpg',
          rating: 6.8
        },
        {
          id: 19,
          title: 'Passengers',
          API_movie_id: 274870,
          recommended: false,
          image: '/5gJkVIVU7FDp7AfRAbPSvvdbre2.jpg',
          rating: 6.9
        },
        {
          id: 20,
          title: "Pete's Dragon",
          API_movie_id: 294272,
          recommended: false,
          image: '/vxi7yxz41OUQH7ECEfQjYyLR6J1.jpg',
          rating: 6.3
        },
        {
          id: 21,
          title: 'Storks',
          API_movie_id: 332210,
          recommended: false,
          image: '/5qVD5TD1CiALR5vUsMzh2BschVU.jpg',
          rating: 6.6
        },
        {
          id: 22,
          title: 'Suicide Squad',
          API_movie_id: 297761,
          recommended: false,
          image: '/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg',
          rating: 5.9
        },
        {
          id: 23,
          title: 'Sausage Party',
          API_movie_id: 223702,
          recommended: false,
          image: '/w90cORtNWQAd2k93aFlIBbpQYTC.jpg',
          rating: 5.6
        },
        {
          id: 24,
          title: 'The Conjuring 2',
          API_movie_id: 259693,
          recommended: false,
          image: '/pUwdglql8cbztEink0JCgG1TY28.jpg',
          rating: 7.2
        },
        {
          id: 25,
          title: 'The Purge: Election Year',
          API_movie_id: 316727,
          recommended: false,
          image: '/sm7p6NvWOBSDywdIPhmiX3SLSH8.jpg',
          rating: 6.3
        },
        {
          id: 26,
          title: 'X-Men: Apocalypse',
          API_movie_id: 246655,
          recommended: false,
          image: '/zSouWWrySXshPCT4t3UKCQGayyo.jpg',
          rating: 6.5
        },
        {
          id: 27,
          title: '10 Cloverfield Lane',
          API_movie_id: 333371,
          recommended: false,
          image: '/84Dhwz93vCin6T1PX6ctSvWEuNE.jpg',
          rating: 6.9
        },
        {
          id: 28,
          title: 'Batman v Superman: Dawn of Justice',
          API_movie_id: 209112,
          recommended: false,
          image: '/cGOPbv9wA5gEejkUN892JrveARt.jpg',
          rating: 5.8
        },
        {
          id: 29,
          title: 'Captain America: Civil War',
          API_movie_id: 271110,
          recommended: false,
          image: '/kSBXou5Ac7vEqKd97wotJumyJvU.jpg',
          rating: 7.4
        },
        {
          id: 30,
          title: 'Central Intelligence',
          API_movie_id: 302699,
          recommended: false,
          image: '/9M5ibpQUjoVFjjnP2AdLcof4hAk.jpg',
          rating: 6.3
        },
        {
          id: 31,
          title: "Don't Breathe",
          API_movie_id: 300669,
          recommended: false,
          image: '/lw0IqOSMsQcy1QnVIEIDppLmNwk.jpg',
          rating: 6.9
        },
        {
          id: 32,
          title: 'Hacksaw Ridge',
          API_movie_id: 324786,
          recommended: false,
          image: '/bndiUFfJxNd2fYx8XO610L9a07m.jpg',
          rating: 8.1
        },
        {
          id: 33,
          title: 'Lights Out',
          API_movie_id: 345911,
          recommended: false,
          image: '/sXqrTXcBf9TdIv5rfgeFNu9Iwu7.jpg',
          rating: 6.3
        },
        {
          id: 34,
          title: 'Moana',
          API_movie_id: 277834,
          recommended: false,
          image: '/z4x0Bp48ar3Mda8KiPD1vwSY3D8.jpg',
          rating: 7.5
        },
        {
          id: 35,
          title: 'Ride Along 2',
          API_movie_id: 323675,
          recommended: false,
          image: '/A739odgY2FjoLvYLYdypUc6GpaY.jpg',
          rating: 6.2
        },
        {
          id: 36,
          title: 'Star Trek Beyond',
          API_movie_id: 188927,
          recommended: false,
          image: '/mLrQMqyZgLeP8FrT5LCobKAiqmK.jpg',
          rating: 6.7
        },
        {
          id: 37,
          title: 'Sully',
          API_movie_id: 363676,
          recommended: false,
          image: '/h6O5OE3ueRVdCc7V7cwTiQocI7D.jpg',
          rating: 7.1
        },
        {
          id: 38,
          title: 'Teenage Mutant Ninja Turtles: Out of the Shadows',
          API_movie_id: 308531,
          recommended: false,
          image: '/u3M0HzkQR1pYNaadJWuxe84B34r.jpg',
          rating: 5.9
        },
        {
          id: 39,
          title: 'The Angry Birds Movie',
          API_movie_id: 153518,
          recommended: false,
          image: '/t2mZzQXjpQxmqtJOPpe8Dr2YpMl.jpg',
          rating: 6.0
        },
        {
          id: 40,
          title: 'The Magnificent Seven',
          API_movie_id: 333484,
          recommended: false,
          image: '/cparcxTFuHdlSOP3MJOpN7Ec9NB.jpg',
          rating: 6.2
        },
        {
          id: 41,
          title: 'Trolls',
          API_movie_id: 136799,
          recommended: false,
          image: '/zKu5MNy9QW1a5ZHgv7iAp3kRZpE.jpg',
          rating: 6.6
        },
        {
          id: 42,
          title: 'Zootopia',
          API_movie_id: 269149,
          recommended: false,
          image: '/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
          rating: 7.7
        },
        {
          id: 43,
          title: 'Jason Bourne',
          API_movie_id: 324668,
          recommended: false,
          image: '/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg',
          rating: 6.1
        },
        {
          id: 44,
          title: 'Rogue One: A Star Wars Story',
          API_movie_id: 330459,
          recommended: false,
          image: '/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg',
          rating: 7.5
        },
        {
          id: 45,
          title: 'The Accountant',
          API_movie_id: 302946,
          recommended: false,
          image: '/afhAUuWVB7k7PjJUd4lwO3rzhSq.jpg',
          rating: 6.9
        },
        {
          id: 46,
          title: 'The Jungle Book',
          API_movie_id: 278927,
          recommended: false,
          image: '/vOipe2myi26UDwP978hsYOrnUWC.jpg',
          rating: 6.8
        },
        {
          id: 47,
          title: 'The Legend of Tarzan',
          API_movie_id: 258489,
          recommended: false,
          image: '/6FxOPJ9Ysilpq0IgkrMJ7PubFhq.jpg',
          rating: 5.8
        },
        {
          id: 49,
          title: 'Doctor Strange',
          API_movie_id: 284052,
          recommended: false,
          image: '/4PiiNGXj1KENTmCBHeN6Mskj2Fq.jpg',
          rating: 7.4
        },
        {
          id: 50,
          title: 'The Secret Life of Pets',
          API_movie_id: 328111,
          recommended: false,
          image: '/WLQN5aiQG8wc9SeKwixW7pAR8K.jpg',
          rating: 6.1
        }
      ])
    })
}
