/*
Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming*/


const letter='the quick brown fox jumps over the lazy dog in bangladesh';
let letter2;

function find(letter){

const words=letter.split(' ');
let minLength=words[0].length;
for(const word of words ){
const L=word.length;

if(L<minLength){
letter2=word;
}
}


return letter2;



}
const output=find(letter);
console.log(output)