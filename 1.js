// // find the max price  array in object


const mobile=[
    {name:'samsung', price:'5000'},
    {name:'oppo', price:'8000'},
    {name:'iphone', price:'4000'}
]

const maxPrice=(mobile)=>{

    let max=mobile[0];
mobile.forEach(mbl => {
    
if(mbl.price>max.price){
    max=mbl;
}
});

return max;
}
const output=maxPrice(mobile);
console.log(output);