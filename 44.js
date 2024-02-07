
function matchFinder(str1,str2){

if(typeof str1!=='string' || typeof str2 !=='string'){
return `please enter a string`
}
else if(!isNaN(str1) || !isNaN(str2)){
    return 'only letter can allowed'
}


else{
    if(str1.includes(str2)){
        return true;
    }
    else{
        return false;
    }
}
}
const output=matchFinder('javascript','Code');
console.log(output)