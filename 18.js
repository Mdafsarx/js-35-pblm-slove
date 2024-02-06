// Problem:
// Write a JavaScript function that takes a number as input and returns "Positive" if the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.

function number(number){

    if(typeof number!=='number'){
        return `enter valid number`
    }
    else{

if(number>0){
    return ` ${number} is positive`
}
else if(number<0){
    return ` negative number`;
}
else if(number===0){
    return`zero`
}



    }




}
const ans=number();
console.log(ans)