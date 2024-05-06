"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//titlecase
let Sentence = "Naveed Ahmed";
//lowercase
let lowerCase = Sentence.toLowerCase();
console.log(lowerCase);
//uppercase
let upperCaseName = Sentence.toUpperCase();
console.log(upperCaseName);
//titlecase
//step 1
let words = Sentence.split(" ");
//step 2 
let titleCaseName = '';
//step 3
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titleCaseName);
