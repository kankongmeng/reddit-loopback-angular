var async = require('async');

module.exports = function(app) {
  
  app.dataSources.db.automigrate('Post', function(err) {
    if (err) throw err;

    app.models.Post.create([{
      title: 'Cute Dog',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 22, 2017 12:50 PM',
      points: 20,
    }, {
      title: 'Cute Dog 2',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 20, 2017 8:50 PM',
      points: 2,
    }, {
      title: 'Cute Dog 3',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 21, 2017 9:50 PM',
      points: 3,
    }, {
      title: 'Cute Dog 4',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 19, 2017 12:50 PM',
      points: 4,
    }, {
      title: 'Cute Dog 5',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 18, 2017 12:50 PM',
      points: 5,
    }, {
      title: 'Cute Dog 6',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 17, 2017 12:50 PM',
      points: 6,
    }, {
      title: 'Cute Dog 7',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 16, 2017 12:50 PM',
      points: 7,
    }, {
      title: 'Cute Dog 8',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 18, 2017 12:50 PM',
      points: 8,
    }, {
      title: 'Cute Dog 9',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 9, 2017 12:50 PM',
      points: 9,
    }, {
      title: 'Cute Dog 10',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 10, 2017 12:50 PM',
      points: 10,
    }, {
      title: 'Cute Dog 11',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 11, 2017 12:50 PM',
      points: 11,
    }, {
      title: 'Cute Dog 12',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 12, 2017 12:50 PM',
      points: 12,
    }, {
      title: 'Cute Dog 13',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 13, 2017 12:50 PM',
      points: 13,
    }, {
      title: 'Cute Dog 14',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 14, 2017 12:50 PM',
      points: 14,
    }, {
      title: 'Cute Dog 15',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 15, 2017 12:50 PM',
      points: 15,
    }, {
      title: 'Cute Dog 16',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 16, 2017 12:50 PM',
      points: 16,
    }, {
      title: 'Cute Dog 17',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 17, 2017 12:50 PM',
      points: 17,
    }, {
      title: 'Cute Dog 18',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 18, 2017 12:50 PM',
      points: 18,
    }, {
      title: 'Cute Dog 19',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 19, 2017 12:50 PM',
      points: 19,
    }, {
      title: 'Cute Dog 20',
      author: 'Brian',
      imageURL: 'https://mbtimetraveler.files.wordpress.com/2016/04/339463-dogs-cute-dog.jpg',
      topic: 'The domestic dog is a wolf-like canid in the genus Canis, and is the most widely abundant terrestrial carnivore, The Komondor is a powerful looking dog and one that has an imposing presence.',
      timestamp: 'Wed, Jul 20, 2017 12:50 PM',
      points: 20,
    }, ], function(err, posts) {
      if (err) throw err;
      console.log('Models created: \n', posts);
    });
  });
 
};