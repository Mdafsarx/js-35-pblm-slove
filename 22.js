// Problem:
// Write a JavaScript function calculateAverage that takes an array of numbers as input and returns the average of all the numbers in the array.

const array=[100,200,300,400,500]

function calculateAverage(numbers){
let total=0;
let l=0;
    numbers.forEach(number => {
        total=total+number;
l+=1;
    });

const average=total / l;
console.log(average)


}
calculateAverage(array)