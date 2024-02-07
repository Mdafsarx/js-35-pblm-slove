

// //////////////////////////////////////////////////// important
const array=[5,9]

function sortMaker(numbers){

if(!Array.isArray(numbers)){
    return ` only array can allow`
}
    let [x,y]=numbers

if(x<0 || y<0 ){
    return `invalid input`
}
else if(x>0 && y>0){

if(x>y){
    return [x,y]
}
else if(y>x){return [y,x]}
else if(x===y){
    return `equal`
}

}


}
const output=sortMaker(array);
console.log(output)