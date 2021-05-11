const nums = [1, 2, 3, 4, 5];

function print(ele) {
  console.log(ele);
}
nums.forEach(print);
// this is an odd way of using it
// it is more common to define the function in the forEach

nums.forEach(function (el) {
  console.log(el);
});
// these are going to be replaced by for of.

// Now if we work with objects

let movies = [
  {
    name: "star wars",
    score: 40,
  },
  {
    name: "shrek",
    score: 100,
  },
  {
    name: "shark tales",
    score: 100,
  },
  {
    name: "nemo",
    score: 100,
  },
];
// Now how would we call them?

movies.forEach(function (movie) {
  console.log(`${movie.name}: ${movie.score}/100`);
});
// shortening this with arrow fucntions
const newMovies = movies.map((movie) => `${movie.name}: ${movie.score}/100`);
// this will implicitly return the string we have created.
setTimeout(() => {
  console.log("Hello!");
}, 3000);
// setTime out wait the alloted amount of time defined by the second arg and then exectutes.
// setInterval will execute the passed in function every interval of the second arg.
setInterval(() => {
  console.log("Hello!");
}, 3000);

// Every and SOME
const exams = [80, 90, 88, 77, 66, 77, 44];
exams.every((score) => score >= 60);
