const franc = require("franc");
const langs = require("langs");
console.log(langs.where("3", franc("Alle menslike wesens word vry")).name); // => 'afr'
console.log(langs.where("3", franc("এটি একটি ভাষা একক IBM স্ক্রিপ্ট")).name); // => 'afr'
console.log(langs.where("3", franc("Alle menneske er fødde til fridom")).name); // => 'afr'