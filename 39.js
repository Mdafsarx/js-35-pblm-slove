// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

const binaryString='01';

function count_zero(binaryString){

if(typeof binaryString!=='string'){
    return ` please enter a string`
}
else if(isNaN(binaryString)){
    return ` please enter a number`
}
let count=0;
for(const str of binaryString){

if(!str.includes('0') && !str.includes('1')){
    return ` only 0 and 1 can allowed`
}

else{

if(str.includes('0')){

count+=1
}

}

}
return count;
}
const ans=count_zero(binaryString);
console.log(ans)