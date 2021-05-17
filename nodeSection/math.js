const add = (x, y) => x + y;
const PI = 3.14
const square = x => x * x;

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

//Bad clunky way of doing it


const math = {
    add: add,
    PI: PI,
    square: square
}

module.exports = math;

// this is a much better and cleaner way of doing it

// or
// module.exports.add = (x,y) => x+y;
// to skip the whole delcaration process.