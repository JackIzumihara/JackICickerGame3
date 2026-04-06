let score = 0;
let multi = 0;
let furnaceUpgAmount = 0;
let furnaceUpgCost = 50;
let pickaxeUpgAmount = 0;
let pickaxeUpgCost = 250;
let upgrade3Amount = 0;
let pointsPerSec = 0;

let multiDisplay = document.getElementById('scoreMulti');
console.log(multiDisplay);

let ppsDisplay = document.getElementById('pointsPerSec');

let scoreDisplay = document.getElementById('scoreDisplay');
console.log(scoreDisplay);

let furnaceCostDisplay = document.getElementById('upgrade1');
let furnaceAmountDisplay = document.getElementById('upgrade1Amount');

let pickaxeCostDisplay = document.getElementById('upgrade2');
let pickaxeAmountDisplay = document.getElementById('upgrade2Amount');

function clickedButton(){
    score = score + multi + 1;
    scoreDisplay.innerHTML = "Score = " + score;
    console.log(score);
};

setInterval(pointPerSecAdder(), 1000)

function pointPerSecAdder(){
    score = score + pointsPerSec;
    scoreDisplay.innerHTML = "Score = " + score;
}

function devMode(){
    score = score + 1000000000000;
    scoreDisplay.innerHTML = "Score = " + 1000000000000;
}

function upgrade1(){
    if(score >= (furnaceUpgCost)){
        score = score - furnaceUpgCost;
        multi = multi + 1;
        furnaceUpgAmount++;
        if (furnaceUpgCost <=1000){
            furnaceUpgCost = (furnaceUpgCost * 1.25);
        }else if(furnaceUpgCost >=1000 && furnaceUpgCost <=5000){
            furnaceUpgCost = (furnaceUpgCost * 1.1);
        }else if(furnaceUpgCost >=5000){
            furnaceUpgCost = (furnaceUpgCost * 1.005 * (furnaceUpgAmount * 0.001));
        }
        furnaceUpgCost = Math.floor(furnaceUpgCost);
        scoreDisplay.innerHTML = "Score = " + score;
        furnaceCostDisplay.innerHTML = "+ 1 per click - $" + furnaceUpgCost;
        furnaceAmountDisplay.innerHTML = furnaceUpgAmount + " Furnace upgrade(s) owned";
        console.log("Score is now " + score);
        console.log("You now have " + furnaceUpgAmount + " Furnace upgrade(s)");
        console.log("Upgrade 1 now costs " + furnaceUpgCost);
        multiDisplay.innerHTML = "Points Per Click: " + (multi + 1);
    }else{
        console.log("not enough money or issue in code");
    }
}

function upgrade2(){
    if(score >= (pickaxeUpgCost)){
        pointsPerSec++;
        score = score - pickaxeUpgCost;
        alert(pointsPerSec);
    }else{
        alert("Not enough money!");
    }
}