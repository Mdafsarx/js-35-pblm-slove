// // Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestWord(words){
let smallestWord;
    let Length=words[0].length;
for(const word of words ){

    if(word.length<Length){
        smallestWord=word;
    }

}
return smallestWord;


}
const ans=smallestWord(heights2)
console.log(ans)

