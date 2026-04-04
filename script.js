let score = "0";
let multi = "0";
let upgrade1Amount = "0";
let upgrade2Amount = "0";
let upgrade3Amount = "0";

let multiDisplay = document.getElementById('scoreMulti');
console.log(multiDisplay);

let scoreDisplay = document.getElementById('scoreDisplay');
console.log(scoreDisplay);

function clickedButton(){
    score = (score + multi);
    console.log(score);
};