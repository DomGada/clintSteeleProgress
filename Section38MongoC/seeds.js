const mongoose = require("mongoose");

const Product = require("./models/product.js");

mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
  });

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => {
//         console.log(p);
//     })
//     .catch(e => {
//         console.log(e)
//     })
// const seedProducts = [
//   {
//     name: "Whole Milk",
//     price: 2.99,
//     category: "dairy",
//   },
//   {
//     name: "Organic Watermelon",
//     price: 4.99,
//     category: "fruit",
//   },
//   {
//     name: "Celery",
//     price: 0.99,
//     category: "vegetable",
//   },
//   {
//     name: "Eggplant",
//     price: 1.49,
//     category: "vegetable",
//   },
//   {
//     name: "Green Apple",
//     price: 1.29,
//     category: "fruit",
//   },
// ];

// Product.insertMany(seedProducts)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
