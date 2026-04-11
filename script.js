let score = 0;
let multi = 0;
let furnaceUpgAmount = 0;
let furnaceUpgCost = 30;
let furnaceUpgPPC = 1;
let pickaxeUpgAmount = 0;
let pickaxeUpgCost = 20;
let axeAmount = 0;
let axeCost = 2000;
let tripwireDuperAmount = 0;
let tripwireDuperCost = 200;
let pickaxeUpgDPS = 1;
let tripwireDuperDPS = 10;
let axeDPS = 3;
let pointsPerSec = 0;
let adv1Bought = 0;
let adv2Bought = 0;
let adv3Bought = 0;

let multiDisplay = document.getElementById('scoreMulti');
console.log(multiDisplay);

let ppsDisplay = document.getElementById('scorePerSec');

let scoreDisplay = document.getElementById('scoreDisplay');
console.log(scoreDisplay);

let furnaceCostDisplay = document.getElementById('upgrade1');
let furnaceAmountDisplay = document.getElementById('upgrade1Amount');

let pickaxeCostDisplay = document.getElementById('upgrade2');
let pickaxeAmountDisplay = document.getElementById('upgrade2Amount');

let axeCostDisplay = document.getElementById('upgrade3');
let axeAmountDisplay = document.getElementById('upgrade3Amount');

let tripwireDuperCostDisplay = document.getElementById('upgrade4');
let tripwireDuperAmountDisplay = document.getElementById('upgrade4Amount');

let adv1Div = document.getElementById('advancement1');
let adv2Div = document.getElementById('advancement2');
let adv3Div = document.getElementById('advancement3');

function clickedButton(){
    score = score + multi + 1;
    scoreDisplay.innerHTML = "Score = " + score;
    multi = (furnaceUpgAmount * furnaceUpgPPC);
    if(devModeActive == 1){
    console.log(score);
    }
};

setInterval(pointPerSecAdder, 1000);

function pointPerSecAdder(){
    pointsPerSec = (pickaxeUpgAmount * pickaxeUpgDPS) + (tripwireDuperAmount * tripwireDuperDPS) + (axeAmount * axeDPS);
    score = score + pointsPerSec;
    scoreDisplay.innerHTML = "Score = " + score;
    ppsDisplay.innerHTML = "Points Per Second: " + pointsPerSec;
    multiDisplay.innerHTML = "Extra Points Per Click: " + (multi + furnaceUpgPPC);
    multi = (furnaceUpgAmount * furnaceUpgPPC);
    Math.floor(pointsPerSec);

    if(pickaxeUpgAmount >= 8 && furnaceUpgAmount >= 3 && adv1Bought == 1){
        adv2Visible()
    }
    if(furnaceUpgAmount >= 10){
        adv3Visible()
    }

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
        multi = (furnaceUpgAmount * furnaceUpgPPC);
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
        furnaceCostDisplay.innerHTML = "+ " + furnaceUpgPPC + " per click - $" + furnaceUpgCost;
        furnaceAmountDisplay.innerHTML = furnaceUpgAmount + " Furnace upgrade(s) owned";
        if(devModeActive == 1){
        console.log("Score is now " + score);
        console.log("You now have " + furnaceUpgAmount + " Furnace upgrade(s)");
        console.log("Upgrade 1 now costs " + furnaceUpgCost);
        console.log("Multi is now: " + multi);
        }
        multiDisplay.innerHTML = "Extra Points Per Click: " + (multi + furnaceUpgPPC);
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
        if(pickaxeUpgAmount >= 3){
            Adv1Visible();
        }
        if (pickaxeUpgCost <= 200){
            pickaxeUpgCost = pickaxeUpgCost * 1.5;
        } else if (pickaxeUpgCost >= 200 && pickaxeUpgCost < 2000){
            pickaxeUpgCost = pickaxeUpgCost * 1.25;
        } else if (pickaxeUpgCost >= 2000){
            pickaxeUpgCost = (pickaxeUpgCost + 100) * 1.01;
        }
        pickaxeUpgCost = Math.floor(pickaxeUpgCost);
        pointsPerSec = (pickaxeUpgAmount * pickaxeUpgDPS) + (tripwireDuperAmount * tripwireDuperDPS) + (axeAmount * axeDPS);
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
    if(score >= axeCost || devModeActive == 1){
        pointsPerSec = pointsPerSec + axeDPS;
        if(devModeActive != 1){
            score = score - axeCost;
        }
        axeAmount++;
        if(axeCost <=2500){
            axeCost = axeCost * 1.4;
        }else if(axeCost >= 2500 && axeCost < 12500){
            axeCost = axeCost * 1.15;
        }else if(axeCost >= 12500){
            axeCost = (axeCost + axeAmount) * 1.01;
        }
        axeCost = Math.floor(axeCost);
        pointsPerSec = (pickaxeUpgAmount * pickaxeUpgDPS) + (tripwireDuperAmount * tripwireDuperDPS) + (axeAmount * axeDPS);
        scoreDisplay.innerHTML = "Score = " + score;
        ppsDisplay.innerHTML = "Points Per Second: " + pointsPerSec;
        axeCostDisplay.innerHTML = "+ " + axeDPS + " points per second - $" + axeCost;
        axeAmountDisplay.innerHTML = axeAmount + " Axes owned";
        if(devModeActive == 1){
            console.log("pps is now " + pointsPerSec);
            console.log("Axe upgrade now costs + " + axeCost);
        }
    }else{
        if(devModeActive == 1){
            console.log("Not enough points or issue in code for upgrade 3");
        }
    }
}

function upgrade4(){
    if(score >= (tripwireDuperCost) || devModeActive == 1){
        pointsPerSec = pointsPerSec + tripwireDuperDPS;
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
        pointsPerSec = (pickaxeUpgAmount * pickaxeUpgDPS) + (tripwireDuperAmount * tripwireDuperDPS) + (axeAmount * axeDPS);
        scoreDisplay.innerHTML = "Score = " + score;
        ppsDisplay.innerHTML = "Points Per Second: " + pointsPerSec;
        tripwireDuperCostDisplay.innerHTML = "+5 point per second - $" + tripwireDuperCost;
        tripwireDuperAmountDisplay.innerHTML = tripwireDuperAmount + " Tripwire Dupers owned";
        if(devModeActive == 1){
        console.log("pps is now: " + pointsPerSec);
        console.log("Tripwire dupers now cost: " + tripwireDuperCost);
        }
    }else{
        if(devModeActive == 1){
            console.log("Not enough money for upgrade 4");
        }
    }
}

function Adv1Visible(){
    if(pickaxeUpgAmount >= 3){
        adv1Div.style.display = "unset";
    }
}

function adv2Visible(){
    if(pickaxeUpgAmount >= 8 && furnaceUpgAmount >= 3){
        adv2Div.style.display = "unset";
    }
}

function adv3Visible(){
    if(furnaceUpgAmount >= 10){
        adv3Div.style.display = "unset";
    }
}


function adv1(){
    if(score >= 300 && pickaxeUpgAmount >=3 || devModeActive != 1){
        pickaxeUpgDPS = 2;
        score = score - 300;
        adv1Bought++;
        pickaxeCostDisplay.innerHTML = "+" + pickaxeUpgDPS + " point per second - $" + pickaxeUpgCost;
        document.getElementById('pickUpgImg').src = "https://minecraft.wiki/images/Stone_Pickaxe_JE2_BE2.png?650b0";
        adv1Div.remove();
    }else if(devModeActive == 1){
        pickaxeUpgDPS = 2;
        pickaxeCostDisplay.innerHTML = "+" + pickaxeUpgDPS + " point per second - $" + pickaxeUpgCost;
        document.getElementById('pickUpgImg').src = "https://minecraft.wiki/images/Stone_Pickaxe_JE2_BE2.png?650b0";
        adv1Bought++;
        adv1Div.remove();
    }
}

function adv2(){
    if(score >= 800 && pickaxeUpgAmount >=8 && furnaceUpgAmount >= 3 && adv1Bought == 1 || devModeActive != 1){
        pickaxeUpgDPS = 4;
        adv2Bought++;
        score = score - 800;
        pickaxeCostDisplay.innerHTML = "+" + pickaxeUpgDPS + " point per second - $" + pickaxeUpgCost;
        document.getElementById('pickUpgImg').src = "https://minecraft.wiki/images/Copper_Pickaxe_JE1_BE1.png?3b91b";
        adv2Div.remove();
    }else if(devModeActive == 1){
        pickaxeUpgDPS = 4;
        pickaxeCostDisplay.innerHTML = "+" + pickaxeUpgDPS + " point per second - $" + pickaxeUpgCost;
        document.getElementById('pickUpgImg').src = "https://minecraft.wiki/images/Copper_Pickaxe_JE1_BE1.png?3b91b";
        adv2Bought++;
        adv2Div.remove();
    }
}

function adv3(){
    if(score >= 500 && furnaceUpgAmount >= 10 || devModeActive != 1){
        furnaceUpgPPC = 2;
        adv3Bought++;
        score = score - 500;
        furnaceCostDisplay.innerHTML = "+ " + furnaceUpgPPC + " per click - $" + furnaceUpgCost;
        adv3Div.remove();
    }else if(devModeActive == 1){
        furnaceUpgPPC = 2;
        furnaceCostDisplay.innerHTML = "+ " + furnaceUpgPPC + " per click - $" + furnaceUpgCost;
        adv3Bought++;
        adv3Div.remove();
    }
}