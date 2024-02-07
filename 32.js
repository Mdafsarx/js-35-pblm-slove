// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let string='xxxxYYYXXXyyy';
const lowercase=string.toLowerCase();
let string2='';

for(const str of lowercase){

    if(str==='x'){
        string2=string2+'y';
    }
    else{
        string2=string2+'Y'
    }


}
console.log(string2)