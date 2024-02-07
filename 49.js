// string revers with revers method;

const sentence='bangladesh';

function input(sentence){

    const backWord=sentence.split('').reverse().join('');

    return backWord;


}
const output=input(sentence);
console.log(output);