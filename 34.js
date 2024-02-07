// Capitalize Every first Letter of each word in a String

const sentence='the quick brown fox jumps over the lazy dog';
const sentence2='my name is afsar mahmud';
let UpperCaseSentence=[];

function Capitalize(sentence){
    
    const words=sentence.split(' ');

for(const word of words){
const wordFirstChar=word[0];
const CapitalizeWord=wordFirstChar.toUpperCase();
// console.log(CapitalizeWord)

const charSplit=word.split('');
charSplit.shift();
charSplit.unshift(CapitalizeWord)
const charSplitJoin=charSplit.join('')
UpperCaseSentence.push(charSplitJoin)
}

const answer= UpperCaseSentence.join(' ')
return answer;
}
// console.log(Capitalize(sentence))
console.log(Capitalize(sentence2))