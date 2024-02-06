// Generate a random number between 10 to 20.

function game(ans,x,y){
    if(typeof ans!=='number'||typeof x!=='number'|| typeof y!=='number'){
        return ' enter only number'
    }

    const Random=Math.ceil((Math.random()*x + y));

    if(Random===ans){
        console.log('win the mach');
    }
    else {
        console.log(`the correct answer was ${Random}`)
    }

}
const ans=game(20,10,'');
console.log(ans);