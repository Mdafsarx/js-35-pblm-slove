// find the array object all price;

const arrObj=[
    {name:'pen' ,price:5000},   
    {name:'book' ,price:6000},   
    {name:'notepad' ,price:7000}   
]

const sumOfAllPrice=(arrObj)=>{

let sum=0;
for(let i=0;i<arrObj.length;i++){
    const price=arrObj[i].price;
    sum=sum+price;
}

return sum;
}
const output=sumOfAllPrice(arrObj);
console.log(output)