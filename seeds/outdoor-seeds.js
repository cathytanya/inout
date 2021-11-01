const { Outdoor } = require('../models')
// const { Outdoor } = require('../images/')
const outdoorData = [
    // the following will be the artistic events that occur outside
    {
        category_id: 1,
        activity_name: 'Museum trip',
        image: "/images/museum.jpg",
    },
    {
        category_id: 1,
        activity_name: 'Pottery Class',
        image: "/images/pot.jpg",
    },
    {
        category_id: 1,
        activity_name: 'Painting Class',
        image: "/images/paintclass.jpg",
    },
    {
        category_id: 1,
        activity_name: 'Photography',
        image: "/images/photography.jpg",
    },
    {
        category_id: 1,
        activity_name: 'Watch a Play',
        image: "/images/play.jpg",
    },
    {
        category_id: 1,
        activity_name: 'Historical Tour',
        image: "/images/tour.jpg",
    },
    // the following will be the health/wellness events that occur outside
    {
        category_id: 2,
        activity_name: 'Yoga',
        image: "/images/yogaoutside.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Aerial Yoga',
        image: "/images/aerialyoga.jpeg",
    },
    {
        category_id: 2,
        activity_name: 'Dance Class',
        image: "/images/dance.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Hiking',
        image: "/images/hiking.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Biking',
        image: "/images/biking.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Manicure & Pedicure',
        image: "/images/manipedioutside.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Massage',
        image: "/images/massage.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Running',
        image: "/images/health.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Indoor Skydiving',
        image: "/images/diving.jpeg",
    },
    {
        category_id: 2,
        activity_name: 'Zumba',
        image: "/images/zumba.jpg",
    },
    // the following will be the artistic events that occur outside
    {
        category_id: 3,
        activity_name: 'Pizza Making Class',
        image: "/images/pizza.jpg",
    },
    {
        category_id: 3,
        activity_name: 'Cooking Class',
        image: "/images/cookingclass.jpg",
    },
    {
        category_id: 3,
        activity_name: 'Cocktail Making Class',
        image: "/images/cocktail.jpg",
    },
    {
        category_id: 3,
        activity_name: 'Wine Tasting',
        image: "/images/wine.jpg",
    },
    {
        category_id: 3,
        activity_name: 'Bar Hopping',
        image: "/images/bar.jpg",
    },
    {
        category_id: 3,
        activity_name: 'Resturant',
        image: "/images/restaurant.jpg",
    },
    {
        category_id: 3,
        activity_name: 'Sushi Making Class',
        image: "/images/sushi.jpg",
    },
    {
        category_id: 3,
        activity_name: 'Korean Barbaque',
        image: "/images/korean.jpg",
    },
    // the following will be the entertainment events that occur outside
    {
        category_id: 4,
        activity_name: 'Drive-in Movie',
        image: "/images/drivemovie.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Movie Theatre',
        image: "/images/movietheatre.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Rollerskating',
        image: "/images/rollerskate.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Laser Tag',
        image: "/images/laser.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Bowling',
        image: "/images/bowling.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Arcade',
        image: "/images/arcade.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Horse Racing',
        image: "/images/horse.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Go-Kart',
        image: "/images/kart.jpg",
    }
]
const seedOutdoor = () => Outdoor.bulkCreate(outdoorData);
module.exports = seedOutdoor;