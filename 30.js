// Count how many times a string has the letter a

const sentence='the quick lazy fox jumps over the lazy dog';
 
let Count=0;
for(const Alp of sentence){

if(Alp.includes('a')){
Count++
}
}
console.log(Count);