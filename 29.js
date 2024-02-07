/*
Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

Output:


key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean

*/


let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

    for(const obj in myObject){
const key=`key: ${obj}`
const type=`type: ${typeof myObject[obj]}`

const output=key.concat(' | ').concat(type)
console.log(output)

}