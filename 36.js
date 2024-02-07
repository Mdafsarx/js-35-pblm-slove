/*
 Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'

*/

const numbers=['Tom', 'Tim', 'Tin', 'Tik'];
let letter="";

for(const num of numbers){

    letter=letter+num;

}
console.log(letter)