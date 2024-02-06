// Write a function to count the number of vowels in a string.

const sentence='aeiou';

function vowels(sentence){

    if(typeof sentence!=='string'){
        return `please enter a string `
    }



    const pureSentence=sentence.toLowerCase();
    let count=0
for(const word of pureSentence){

if(word==="a"||word==="e"||word==='i'||word==='o'||word==='u'){
count+=1
}
}

return count;

};
const result=vowels(sentence);
console.log(result)