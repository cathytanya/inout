const { Indoor } = require('../models')

const indoorData = [
    // list of all the art activites (category_id: 1)
    {
        category_id: 1,
        activity_name: 'Paint By Number',
        image: "/images/paint.jpg",
    },
    {
        category_id: 1,
        activity_name: 'Knitting',
        image: "/images/knit.jpg",
    },
    {
        category_id: 1,
        activity_name: 'Crochet',
        image: "/images/crotchet.jpg",
    },
    {
        category_id: 1,
        activity_name: 'Sculpt a Ceramic Tile',
        image: "/images/tile.jpg",
    },
    {
        category_id: 1,
        activity_name: 'Decorate a Wall',
        image: "/images/wall.jpg",
    },
    {
        category_id: 1,
        activity_name: 'Paint a River of Rocks',
        image: "/images/stone.jpg",
    },
    {
        category_id: 1,
        activity_name: 'Assemble an Altered Puzzle',
        image: "/images/puzzle.jpg",
    },{
        category_id: 1,
        activity_name: 'String Art',
        image: "/images/string.jpg",
    },{
        category_id: 1,
        activity_name: 'Plastic Bottle Cap Mosaic',
        image: "/images/cap.jpg",
    },{
        category_id: 1,
        activity_name: 'Doudle',
        image: "/images/doudle.jpg",
    },
    // list of all the Health/Wellness activites (category_id: 2)
    {
        category_id: 2,
        activity_name: 'Yoga',
        image: "/images/yoga.jpeg",
    },
    {
        category_id: 2,
        activity_name: 'Manicure & Pedicure',
        image: "/images/manipedi.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Home Workout',
        image: "/images/workout.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Spa',
        image: "/images/spa.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Meditation',
        image: "/images/meditation.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Journal',
        image: "/images/journal.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Take Bath',
        image: "/images/bath.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Sleep',
        image: "/images/sleep.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Reconnect with Friends',
        image: "/images/callpeople.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Take a Walk',
        image: "/images/walk.jpg",
    },
    // list of all the Food activites (category_id: 3)
    {
        category_id: 3,
        activity_name: 'Cinnamon French Toast',
        image: "/images/toast.jpeg",
    },
    {
        category_id: 3,
        activity_name: 'Southern Red Velvet Cake',
        image: "/images/cakev.jpeg",
    },
    {
        category_id: 3,
        activity_name: 'Stuffed Bell Peppers',
        image: "/images/pepper.jpeg",
    },
    {
        category_id: 3,
        activity_name: 'Oven-Baked Salmon',
        image: "/images/fish.jpeg",
    },
    {
        category_id: 3,
        activity_name: 'Scrambled Tofu',
        image: "/images/tofu.jpg",
    },
    {
        category_id: 3,
        activity_name: 'Cheesy Orzo With Marinara',
        image: "/images/cass.jpg",
    },
    {
        category_id: 3,
        activity_name: 'The Big Lasagna',
        image: "/images/lasagna.jpg",
    },
    {
        category_id: 3,
        activity_name: 'Open Chicken Pies',
        image: "/images/pie.jpeg",
    },
    {
        category_id: 3,
        activity_name: 'Pasta with Chicken and Chorizo Meatballs',
        image: "/images/pasta.jpg",
    },
    {
        category_id: 3,
        activity_name: 'Roast Pumpkin with Red Onion',
        image: "/images/pumpkin.jpeg",
    },
    // list of all the Entertainment activites (category_id: 4)
    {
        category_id: 4,
        activity_name: 'Watch a TV Series',
        image: "/images/netflix.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Listen to Music',
        image: "/images/headphones.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Watch a Movie',
        image: "/images/movies.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Learn a New Language',
        image: "/images/language.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Play a Card Game',
        image: "/images/cardgame.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Play Billiards',
        image: "/images/pool.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Play a Board Game',
        image: "/images/boardgame.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Play Video Game',
        image: "/images/videogame.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Read a Book',
        image: "/images/bookread.jpg",
    }
]

const seedIndoor = () => Indoor.bulkCreate(indoorData);
module.exports = seedIndoor;