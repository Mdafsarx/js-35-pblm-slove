// // find the array object all price; and multi

const products=[
    {name:'laptop', price:20000, quantity:3 },
    {name:'dekstop', price:40000, quantity:4 },
    {name:'pc', price:30000, quantity:1 },
    {name:'mac', price:22000, quantity:2 }
]

const totalCost=function (products){

    let total=0;
    for(const product of products){
        const totalTaka=product.price * product.quantity;
total=total+totalTaka;
    }
return total;

}
const output=totalCost(products);
console.log(output)