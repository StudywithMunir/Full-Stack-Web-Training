// Getting random dice number
const randomNumber1 = Math.floor(Math.random() * 6) + 1;

const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// setting the random dice variable to change image dynamically using literal template and setAttribute to change
// src
let leftImg = document.getElementsByTagName("img")[0].setAttribute("src",`./images/dice${randomNumber1}.png`);

let rightImg = document.getElementsByTagName("img")[1].setAttribute("src",`./images/dice${randomNumber2}.png`);

// Changing the H1 tag based on who wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<em>🚩Player 1 Wins!</em>";
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "<em>Player 2 Wins! 🚩</em>";
}else if (randomNumber1 === randomNumber2 || randomNumber2 === randomNumber1) {
    document.querySelector("h1").innerHTML = "<em>Draw!</em>";
}else{
    document.querySelector("h1").innerHTML = "<em>Refresh Me!</em>";
}