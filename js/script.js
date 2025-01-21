// - genera 5 numeri e fai partire timer di 30 sec
// - allo scadere dei 30 sec fai scomparire i 5 numeri e fai comparire 5 input type=number
// - verifica numeri inseriti e quanti di essi sono corretti


// timer
const clock = setInterval (timer, 1000);
let timerNumber = document.getElementById("countdown");
let counter = 30;

function timer() {
    if ( counter === 0) {
        clearInterval(clock);
    } else {
        timerNumber.innerHTML = counter--;
        console.log(counter)
    }
    return counter;
}


// 5 numeri random
let numbers = document.getElementById("numbers-list");

function randomNumber(min, max) {
    let random = Math.floor(Math.random()*max)+min;
    return random;    
};

let randomNumberArray = [];

for (let i=0; i<5; i++) {
    let number = randomNumber(1, 100);
    randomNumberArray.push(number);
}

numbers.innerHTML = randomNumberArray;