// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming


const sentence='i am learning programming to become a programmer';
let sentence2;

const longGestWord = (sentence) => {

    const words=sentence.split(' ')
let maxLength=words[0].length;
    for(const word of words ){
const Length=word.length;

if(Length>maxLength){
    maxLength=Length;
     sentence2=word;
}
    }
    return ` longest word is= (${sentence2})`


}
const ans=longGestWord(sentence);
console.log(ans)