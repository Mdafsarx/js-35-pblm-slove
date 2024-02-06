// Write a function to convert temperature from Celsius to Fahrenheit.

function temperatureToCelsius(temp){

    // Formula	
    // (1°C × 9/5) + 32 = 33.8°F
    const ans=(temp * 9/5)+32;
    return ans;


}

const output=temperatureToCelsius(4);
console.log(output)