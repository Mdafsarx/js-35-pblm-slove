// /////////////////// important

function findAddress(object){

    if(typeof object!=="object" || Array.isArray(object)){
        return ` only object can allow`
    }

const street=object.street || "__";
const house=object.house || "__";
const society=object.society|| "__";

return house.concat(",").concat(society)



};
const object={street:10,}

const output=findAddress(object);
console.log(output);