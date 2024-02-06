// Problem:
// Create a JavaScript function that takes an object representing a car, containing properties for its make, model, and year. The function should return a string in the format "Make: [make], Model: [model], Year: [year]".

// Feel free to tackle any of these problems, and let me know if you need any assistance!

const details={
    make:'bangladesh',
    model:2020,
    year:2024
}

function car(details){

if(typeof details !=='object' || Array.isArray(details)===true){
    return ` enter a object`
}
else if(!details.make||!details.model||!details.year){
return `please send the make: model: year:`
}


    const ans=`make:${details.make}, model:${details.model},year:${details.year}`
return ans;
}
const result=car(details);
console.log(result)