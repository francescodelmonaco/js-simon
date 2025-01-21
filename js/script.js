// - genera 5 numeri e fai partire timer di 30 sec
// - allo scadere dei 30 sec fai scomparire i 5 numeri e fai comparire 5 input type=number
// - verifica numeri inseriti e quanti di essi sono corretti


// timer
const clock = setInterval (timer, 1000);
let timerNumber = document.getElementById("countdown");
let numbers = document.getElementById("numbers-list");
let instructions = document.getElementById("instructions");
let form = document.getElementById("answers-form");
let counter = 3;

function timer() {
    if ( counter === 0) {
        clearInterval(clock);
        numbers.classList.add("d-none");
        timerNumber.classList.add("d-none");
        instructions.innerHTML = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)...";
        form.classList.remove("d-none");
    } else {
        timerNumber.innerHTML = counter--;
        console.log(counter)
    }
    return counter;
}


// 5 numeri random
function randomNumber(min, max) {
    let random = Math.floor(Math.random()*max)+min;
    return random;    
};

let randomNumberArray = [];

for (let i=0; i<5; i++) {
    let number = randomNumber(1, 50);
    randomNumberArray.push(number);
    console.log(randomNumberArray);
}

numbers.innerHTML = randomNumberArray.join(" - ");

// verifica
let btn = document.getElementsByClassName("btn")[0];

btn.addEventListener("click", function(event) {
    event.preventDefault();
    
    let userNumbers = document.querySelectorAll(".form-control");
    let correctCount = 0;
    let correctNumbers = [];

    for (let i=0; i<randomNumberArray.length; i++) {
        let numbersValue = parseInt(userNumbers[i].value);
        console.log(numbersValue);
        if (randomNumberArray.includes(numbersValue)) {
            correctCount++;
            correctNumbers.push(numbersValue);
            console.log(`${numbersValue} è giusto!`)
        } else {
            console.log(`${numbersValue} è sbagliato!`)
        }
    }

    let message = document.getElementById("message");
    message.innerHTML = `Hai indovinato ${correctCount} numeri! (${correctNumbers.join(" - ")})`
})