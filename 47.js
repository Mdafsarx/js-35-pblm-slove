const canPay=(array,number)=>{

if(array.length===0){
    return ` your array is empty`
}
else if(!Array.isArray(array) || typeof number!=="number"){
    return ' invalid input'
}
else if(number<0){
    return ` ${number} negative number can't allowed`
}

    let sum=0;
for(const arr of array){
sum=arr+sum;
}
if(sum>=number){
    return true;
}
else{
    return false;
}





}
const array=[10,70,20];   //taka
const number=100;        //price
const output=canPay(array,number);
console.log(output)
