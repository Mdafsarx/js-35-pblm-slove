// Problem:
// Write a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers in the array.


const numbers=[1,2,3,4,5,6,7,8,9];

function input(numbers){
let total=0;
    numbers.forEach(number => {
        total+=number;
    });
return total;

}
const output=input(numbers);
console.log(output)