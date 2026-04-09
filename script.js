let score = 0;
let multi = 0;
let furnaceUpgAmount = 0;
let furnaceUpgCost = 30;
let pickaxeUpgAmount = 0;
let pickaxeUpgCost = 20;
let enchantmentAmount = 0;
let enchantmentCost = 2000;
let tripwireDuperAmount = 0;
let tripwireDuperCost = 200;
let pickaxeUpgDPS = 1;
let tripwireDuperDPS = 5;
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

let enchantmentCostDisplay = document.getElementById('upgrade3');
let enchantmentAmountDisplay = document.getElementById('upgrade3Amount');

let tripwireDuperCostDisplay = document.getElementById('upgrade4');
let tripwireDuperAmountDisplay = document.getElementById('upgrade4Amount');

let adv1Div = document.getElementById('advancement1');

function clickedButton(){
    score = score + multi + 1;
    scoreDisplay.innerHTML = "Score = " + score;
    multi = (furnaceUpgAmount * 1);
    if(devModeActive == 1){
    console.log(score);
    }
};

setInterval(pointPerSecAdder, 1000);

function pointPerSecAdder(){
    pointsPerSec = (pickaxeUpgAmount * pickaxeUpgDPS) + (tripwireDuperAmount * tripwireDuperDPS);
    score = score + pointsPerSec;
    scoreDisplay.innerHTML = "Score = " + score;
    ppsDisplay.innerHTML = "Points Per Second: " + pointsPerSec;
    Math.floor(pointsPerSec);
}

let devModeActive = 0;

function devMode(){
    let inputPasscode = prompt("Enable dev mode? (enter password first): ");
    if(inputPasscode == "orbital strike cannon" || inputPasscode == "osc"){
    inputPasscode = "scrambled";
    alert("dev mode active, all upgrades are free and console displays are active");
    }else{
        alert("Wrong passcode");
        inputPasscode = "hahhaha wrong password";
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
        if (furnaceUpgCost <=400){
            furnaceUpgCost = (furnaceUpgCost * 1.5);
        }else if(furnaceUpgCost >=400 && furnaceUpgCost <=1000){
            furnaceUpgCost = (furnaceUpgCost * 1.25);
        }else if(furnaceUpgCost >=1000 && furnaceUpgCost <=4000){
            furnaceUpgCost = (furnaceUpgCost * 1.3);
        }else if(furnaceUpgCost >=4000){
            furnaceUpgCost = (furnaceUpgCost + 200) * 1.01;
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
        multiDisplay.innerHTML = "Extra Points Per Click: " + multi;
    }else{
        if(devModeActive == 1){
        console.log("not enough money or issue in code for upgrade 1");
        }
    }
}

function upgrade2(){
    if(score >= (pickaxeUpgCost) || devModeActive == 1){
        if(devModeActive != 1){
        score = score - pickaxeUpgCost;
        }
        pickaxeUpgAmount++;
        if (pickaxeUpgCost <= 200){
            pickaxeUpgCost = pickaxeUpgCost * 1.5;
        } else if (pickaxeUpgCost >= 200 && pickaxeUpgCost < 2000){
            pickaxeUpgCost = pickaxeUpgCost * 1.25;
        } else if (pickaxeUpgCost >= 2000){
            pickaxeUpgCost = (pickaxeUpgCost + 100) * 1.01;
        }
        pickaxeUpgCost = Math.floor(pickaxeUpgCost);
        pointsPerSec = (pickaxeUpgAmount * pickaxeUpgDPS) + (tripwireDuperAmount * tripwireDuperDPS);
        scoreDisplay.innerHTML = "Score = " + score;
        ppsDisplay.innerHTML = "Points Per Second: " + pointsPerSec;
        pickaxeCostDisplay.innerHTML = "+" + pickaxeUpgDPS + " point per second - $" + pickaxeUpgCost;
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

function upgrade3(){
    if(score == enchantmentCost || devModeActive == 1){
        pointsPerSec = pointsPerSec * 1.5;
        multi = multi * 1.5;
        multi = Math.floor(multi);
        pointsPerSec = Math.floor(pointsPerSec);
        if(devModeActive != 1){
            score = score - enchantmentCost;
        }
        enchantmentAmount++;
        if (enchantmentCost >= 2000 && enchantmentCost <=18000){
            enchantmentCost = enchantmentCost * 3;
        } else if (enchantmentCost >= 18000 && enchantmentCost <= 180000000){
            enchantmentCost = enchantmentCost * 10;
        }else if(enchantmentCost >= 180000000){
            enchantmentCost = enchantmentCost * 100;
        }
        scoreDisplay.innerHTML = "Score = " + score;
        ppsDisplay.innerHTML = "Points Per Second: " + pointsPerSec;
        multiDisplay.innerHTML = "Extra Points Per Click: " + multi;
        enchantmentCostDisplay.innerHTML = "Increases PPS & PPC by 1.5x - $" + enchantmentCost;
        enchantmentAmountDisplay.innerHTML = enchantmentAmount + " Enchantments owned";
        if(devModeActive == 1){
        console.log("pps is now: " + pointsPerSec);
        console.log("points per click is now: " + multi);
        console.log("enchanting now costs: " + enchantmentCost);
        }
    }else{
        if(devModeActive == 1){
            console.log("Not enough points or issue in code!");
        }
    }
}

function upgrade4(){
    if(score >= (tripwireDuperCost) || devModeActive == 1){
        pointsPerSec = pointsPerSec + 5;
        if(devModeActive != 1){
        score = score - tripwireDuperCost;
        }
        tripwireDuperAmount++;
        if (tripwireDuperCost <= 5000){
            tripwireDuperCost = tripwireDuperCost * 1.4;
        } else if (tripwireDuperCost >= 5000 && tripwireDuperCost < 20000){
            tripwireDuperCost = tripwireDuperCost * 1.2;
        } else if (tripwireDuperCost >= 20000){
            tripwireDuperCost = (tripwireDuperCost + 100) * 1.01;
        }
        tripwireDuperCost = Math.floor(tripwireDuperCost);
        pointsPerSec = (pickaxeUpgAmount * pickaxeUpgDPS) + (tripwireDuperAmount * tripwireDuperDPS);
        scoreDisplay.innerHTML = "Score = " + score;
        ppsDisplay.innerHTML = "Points Per Second: " + pointsPerSec;
        tripwireDuperCostDisplay.innerHTML = "+5 point per second - $" + tripwireDuperCost;
        tripwireDuperAmountDisplay.innerHTML = tripwireDuperAmount + " Tripwire Dupers owned";
        if(devModeActive == 1){
        console.log("pps is now: " + pointsPerSec);
        console.log("pickUpg now costs: " + pickaxeUpgCost);
        }
    }else{
        if(devModeActive == 1){
            console.log("Not enough money for upgrade 4");
        }
    }
}

function adv1(){
    if(score >= 300 && pickaxeUpgAmount >=3 || devModeActive != 1){
        pickaxeUpgDPS = 2;
        score = score - 300;
        adv1Div.remove();
    }else if(devModeActive == 1){
        pickaxeUpgDPS = 2;
        adv1Div.remove();
    }
}