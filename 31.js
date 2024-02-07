// Check whether a string contains all the vowels a, e, i, o, u


const sentence='eiou';
const sentence2=' the quick brown fox jumps over the lazy dog';
 function vowels(sentence){

const vowels=['a','e','i','o','u'];

if(sentence.includes('a') && sentence.includes('e') && sentence.includes('u') && sentence.includes('i') && sentence.includes('o')){
    console.log(true)
}
else{
    console.log(false)
}






 }

 const output=vowels(sentence)
 vowels(sentence2)
