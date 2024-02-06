// normal discount function

function discount(howMuch){

    const mobile=5000;
    if(howMuch<=100){
        return mobile * howMuch;
    }
    else if(howMuch<=200){
        return (mobile -1000) * howMuch;
    }
    else {
        return (((mobile  * 50) / 100 ) * howMuch);
    }


}
// console.log(discount(201))



const student1={
    name:'afsar',
    age:20,
    isStudent:true,
}
const array=[20]

function find(student){

if(typeof student !=="object" || Array.isArray(student)===false){
    return `please enter a object`
}


    const isStudent=student.isStudent;
    return isStudent


}

const output=find()
console.log(output)

