/*
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/


const array= [5,6,11,12,98, 5];

const numbers=(array,number)=>{
let count=0;
for(const arr of array )
{
if(arr===number){
count+=1
}

}
return count;
}
const find=11;
const output=numbers(array,find);
console.log(output)