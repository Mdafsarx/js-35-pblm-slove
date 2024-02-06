// // Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.


const calculateElectronicsBudget=(laptop,tablet,mobile)=>{

const mobilePrice=10000;
const laptopPrice=30000;
const tabletPrice=40000;

const totalLaptopPrice=laptopPrice * laptop;
const totalTabletPrice=tabletPrice * tablet;
const totalMobilePrice=mobilePrice * mobile;
 const totalPrice=totalLaptopPrice + totalTabletPrice +totalMobilePrice;
 return totalPrice;




};
const output=calculateElectronicsBudget(1,0,1);
console.log(output)