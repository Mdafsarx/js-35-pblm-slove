// Count the number of properties.

// Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let sum=0;
for(const stu in student){
sum++;

};
console.log(sum)