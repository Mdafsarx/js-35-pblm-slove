// Create a JavaScript function createPerson that takes parameters for the name, age, and gender of a person and returns an object representing the person with those properties.


function createPerson(name,age,gender){

if(typeof name !=='string' || typeof age !=='number' || typeof gender !=='string'){
    return ` please enter name: , age: , gender`
}


const object={

    name:name,
    age:age,
    gender:gender,

}
return object;






}
const ans=createPerson('afsar',20,'male');
console.log(ans)