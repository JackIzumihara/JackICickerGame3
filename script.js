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

let ppsDisplay = document.getElementById('scorePerSec');

let scoreDisplay = document.getElementById('scoreDisplay');
console.log(scoreDisplay);

let furnaceCostDisplay = document.getElementById('upgrade1');
let furnaceAmountDisplay = document.getElementById('upgrade1Amount');

let pickaxeCostDisplay = document.getElementById('upgrade2');
let pickaxeAmountDisplay = document.getElementById('upgrade2Amount');

function clickedButton(){
    score = score + multi + 1;
    scoreDisplay.innerHTML = "Score = " + score;
    if(devModeActive == 1){
    console.log(score);
    }
};

setInterval(pointPerSecAdder, 1000);

function pointPerSecAdder(){
    score = score + pointsPerSec;
    scoreDisplay.innerHTML = "Score = " + score;
}

let devModeActive = 0;

function devMode(){
    let inputPasscode = prompt("Enable dev mode? (enter password first): ");
    if(inputPasscode == "orbital strike cannon"){
    inputPasscode = "scrambled";
    alert("dev mode active, all upgrades are free and console displays are active");
    }else{
        alert("Wrong passcode");
    }
    devModeActive = 1;
}

function upgrade1(){
    if(score >= (furnaceUpgCost) || devModeActive == 1){
        if(devModeActive != 1){
        score = score - furnaceUpgCost;
        }
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
        if(devModeActive == 1){
        console.log("Score is now " + score);
        console.log("You now have " + furnaceUpgAmount + " Furnace upgrade(s)");
        console.log("Upgrade 1 now costs " + furnaceUpgCost);
        }
        multiDisplay.innerHTML = "Points Per Click: " + (multi + 1);
    }else{
        if(devModeActive == 1){
        console.log("not enough money or issue in code for upgrade 1");
        }
    }
}

function upgrade2(){
    if(score >= (pickaxeUpgCost) || devModeActive == 1){
        pointsPerSec = pointsPerSec + 1;
        if(devModeActive != 1){
        score = score - pickaxeUpgCost;
        }
        pickaxeUpgAmount++;
        if (pickaxeUpgCost < 2000){
            pickaxeUpgCost = pickaxeUpgCost * 1.05;
        } else if (pickaxeUpgCost >= 2000 && pickaxeUpgCost < 10000){
            pickaxeUpgCost = pickaxeUpgCost * 1.01;
        } else if (pickaxeUpgCost >= 10000){
            pickaxeUpgCost = pickaxeUpgCost * 1.0005;
        }
        pickaxeUpgCost = Math.floor(pickaxeUpgCost);
        scoreDisplay.innerHTML = "Score = " + score;
        ppsDisplay.innerHTML = "Points Per Second: " + pointsPerSec;
        pickaxeCostDisplay.innerHTML = "+1 point per second - $" + pickaxeUpgCost;
        pickaxeAmountDisplay.innerHTML = pickaxeUpgAmount + " Pickaxes owned";
        if(devModeActive == 1){
        console.log("pps is now: " + pointsPerSec);
        console.log("pickUpg now costs: " + pickaxeUpgCost);
        }
    }else{
        if(devModeActive == 1){
            console.log("Not enough money for upgrade 2");
        }
    }
}