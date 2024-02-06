// avd type of discount

function discount(quantity){

    const book=50;
    const upto100To200=40;
    const abovePrice=25;

    if(quantity<=100){
        const MainPrice=book * quantity;
        return MainPrice;
    }
    else if(quantity<=200){
        const MainPrice=book * 100;
        const upto100To200Num=quantity -100;
        const upto100To200Price=upto100To200Num * upto100To200 ;
        const total=MainPrice + upto100To200Price;
        return total;
    }
    else{
        const MainPrice=book * 100
        const upto100To200Price=upto100To200 * 100;
        const aboveNumber= quantity - 200;
        const totalAbovePrice=aboveNumber * abovePrice;
        const total=MainPrice+ upto100To200Price +totalAbovePrice;
        return total;
    }


}
const ans=discount(201);
console.log(ans)