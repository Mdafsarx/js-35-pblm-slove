

function cubeNumber(number){
if(typeof number !=='number'){
    return ` only enter number`
}
else if(number<0){
    return `nagative number can't allowed`
}
else if(number===0){
    return ` 0 is invalid number for cube`
}



    return Math.pow(parseInt(number),3)


}
const output=cubeNumber();
console.log(output)