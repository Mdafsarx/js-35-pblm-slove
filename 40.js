// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


function odd_even(numbers){

if(typeof numbers!=='number'){
    return `only allowing number`
}
else if(numbers<0){
return `only positive number allowed`
}
else if(numbers===0){
    return ` 0 is not a even and odd number`
}


    const parseIntNumber=parseInt(numbers);

    if(parseIntNumber % 2 !==1){
        return ` ${parseIntNumber} number is Even number`
    }
    else{
        return ` ${parseIntNumber} is odd number`
    }


}
const answer=odd_even(0.9);
console.log(answer)