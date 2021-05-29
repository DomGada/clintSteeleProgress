const express = require('express');
const cities = require('./cities')
const path = require('path')
const {
    places,
    descriptors
} = require('./seedHelpers')
const mongoose = require('mongoose')

const Campground = require('../models/campground')



mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connect error:'));
db.once('open', () => {
    console.log('Database Connected')
});
const sample = (array) => array[Math.floor(Math.random() * array.length)]


const seedDB = async () => {
    await Campground.deleteMany({})
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 20) + 10
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quae laudantium, necessitatibus est sequi culpa laboriosam deleniti magnam voluptate debitis, commodi consectetur fugiat pariatur consequuntur impedit ad distinctio veritatis temporibus.Asperiores nostrum voluptatum modi, vel repellendus, sed enim mollitia inventore ipsa optio voluptatibus architecto dolorem eius fuga alias rem ducimus distinctio corporis commodi nobis! Reprehenderit adipisci molestiae accusantium ipsum explicabo.',
            price
        })
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
});