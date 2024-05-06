//titlecase
let Sentence:string="Naveed Ahmed";

//lowercase
let lowerCase:string=Sentence.toLowerCase();
console.log(lowerCase);

//uppercase
let upperCaseName:string= Sentence.toUpperCase();
console.log(upperCaseName);

//titlecase
//step 1
let words:string[]= Sentence.split(" ");
//step 2 
let titleCaseName:string= '';
//step 3
for(let i=0;i<words.length;i++)
{
    titleCaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase() + " ";
}
console.log(titleCaseName);




