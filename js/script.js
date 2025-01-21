// - genera 5 numeri e fai partire timer di 30 sec
// - allo scadere dei 30 sec fai scomparire i 5 numeri e fai comparire 5 input type=number
// - verifica numeri inseriti e quanti di essi sono corretti

const clock = setInterval (timer, 1000);
let timerNumber = document.getElementById("countdown");
let counter = 0;

function timer() {
    if ( counter === 30+1) {
        clearInterval(clock);
    } else {
        timerNumber.innerHTML = counter++;
    }
    return counter;
}