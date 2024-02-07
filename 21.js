// Problem:
// Write a JavaScript function countVowels that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string.

const message='the quick brown fox jumps over the lazy dog'
let message2='';

function countVowels(message){

let count=0;
for(let i=0;i<=message.length-1;i++){
    
if(message[i].includes('a') || message[i].includes('e') || message[i].includes('o') || message[i].includes('i') || message[i].includes('u')){

    count++
message2=message2+message[i];


}

}
return `total vowels: ${count}  

vowels: ${message2}

`;


};
const ans=countVowels(message);
console.log(ans)