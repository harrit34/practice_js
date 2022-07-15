let maximum = parseInt(prompt("Enter maximum number !"));

while(!maximum){
    maximum = parseInt(prompt("Enter a valid no."));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("Enter your first guess !!"));
let attempt = 1;

while(parseInt(guess) !== targetNum){
    if(guess === "q") break;
    
    attempt++;
    if(guess > targetNum){
        guess = prompt("Too high ! enter new guess):");
    }
    else{
        guess = prompt("Too low! Enter new guess:");
    }
}

if(guess === 'q'){
    console.log('Okay! Quitting.')
}
else{
    console.log(`You got it ! It took you ${attempt} guesses`);
}
