//  simple calc


function add (a,b){  return a+b; }
function minus(a,b){  return Math.abs(a-b)       }
function multi(a,b){  return a * b  }
function pow(a,b){  return Math.pow(a,b)}
function division(a,b){ return a/b }



function calculator(Num1,num2,command){

if(command==='+'){
    return add( Num1,num2)
}
else if(command==='-'){
    return minus(Num1,num2)
}
else if(command==='*'){
    return multi(Num1,num2);
}
else if(command==='**'){
    const result=pow(Num1,num2);
    return result;
}
else if( command==='/'){
    return division(Num1,num2)
}
else{
    return ` only +,*,-,/,** allowing`
}
}
const output=calculator(10,2,"-")
console.log(output);