// Define a function calculateArea that takes the radius of a circle as input and returns the area of the circle. The formula for calculating the area of a circle is 

function calculateArea(number){

// formula = r r2

const radiusOfCircleToAreaOfCircle=(Math.PI)*(Math.pow(number,2));
const tofixed=radiusOfCircleToAreaOfCircle.toFixed(2)
return tofixed;


}
// takes radius of circle
const ans=calculateArea(2);
console.log(ans)