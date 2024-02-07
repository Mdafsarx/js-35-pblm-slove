/* Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/
const array=[10.9,20,30,40,50]

const make_avg=(array)=>{

const L=array.length;
let i=0;
let sum=0
while(i<array.length){
    const pureNumber=parseInt(array[i])
     sum=pureNumber+sum
    i++
}

const average=sum / L;
return average;
}
const answer=make_avg(array);
console.log(answer)
