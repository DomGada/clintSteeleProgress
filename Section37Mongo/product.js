const mongoose = require("mongoose");
const {
    Schema
} = mongoose;
mongoose
    .connect("mongodb://localhost:27017/shopApp", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connection Open");
    })
    .catch((err) => {
        console.log("You got an error!");
        console.log(err);
    });

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ya dodo!'] // this comment throws a specific message error. which can be tacked onto any 
        // default validator.
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L'],
    }
});
productSchema.methods.greet = function () {
    console.log('Hello!')
    console.log(`- from ${this.name}`)
}
productSchema.methods.toggleOnSale = function () { // this is really important. we are able to call methods on individual items
    // in our database which allows use to not have to make specified functions for certain objects.
    this.onSale = !this.onSale;
    return this.save(); // returns a thisable object, therefore await it in your async 
}
productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}
productSchema.static.fireSale = function () {
    return this.updateMany({}, {
        onSale: true,
        price: 0
    });
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({
        name: 'Cycling Jersey'
    });
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);
}
findProduct()
Product.fireSale().then(res => console.log(res));
// const bike = new Product({
//     name: 'Cycling Jersey',
//     price: 28.50,
//     categories: ['Cycling'],
//     size: 'S',

// });
// bike.save()
//     .then(data => {
//         console.log("It worked")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Oh no! It failed');
//         console.log(err);
//     })