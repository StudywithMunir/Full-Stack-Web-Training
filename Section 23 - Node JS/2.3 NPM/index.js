// using common JS
// var generateName = require('sillyname');
// var sillyName = generateName();

// using ECS import approach
// import generateName from "sillyname";
// var sillyName = generateName();

// console.log(sillyName);


// Printing random superhero using superheroes npm module
import { randomSuperhero } from "superheroes";
let randomHero = randomSuperhero();
console.log(`My name is ${randomHero}!`);