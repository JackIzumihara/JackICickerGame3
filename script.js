let score = 0;
let multi = 0;
let freeUpgrades = 0;
let furnaceUpgAmount = 0;
let furnaceUpgCost = 30;
let furnaceUpgPPC = 1;
let pickaxeUpgAmount = 0;
let pickaxeUpgCost = 20;
let axeAmount = 0;
let axeCost = 100;
let tripwireDuperAmount = 0;
let tripwireDuperCost = 400;
let villagerAmount = 0;
let villagerCost = 5000;
let ironFarmAmount = 0;
let ironFarmCost = 50000;
let goldFarmAmount = 0;
let goldFarmCost = 100000;
let wSkeleFarmAmount = 0;
let wSkeleFarmCost = 250000;
let beaconAmount = 0;
let beaconCost = 1000000;
let pickaxeUpgDPS = 1;
let tripwireDuperDPS = 10;
let axeDPS = 3;
let villagerDPS = 30;
let ironFarmDPS = 500;
let goldFarmDPS = 2500;
let wSkeleFarmDPS = 10000;
let beaconDPS = 50000;
let pointsPerSec = 0;
let pickAdv1Bought = 0;
let pickAdv2Bought = 0;
let furnaceAdv1Bought = 0;
let pickAdv3Bought = 0;
let pickAdv4Bought = 0;
let pickAdv5Bought = 0;
let freeAutoClickerAdv1Bought = 0;
let freeAutoClickerAdv2Bought = 0;
let freeAutoClickerAdv3Bought = 0;
let freeAutoClicker = 0;
let freeAutoClickerID = 0;
var freeAutoClickerInterval = 500;
let totalClicks = 0;
let totalAutoClickerClicks = 0;

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

let villagerCostDisplay = document.getElementById('upgrade5');
let villagerAmountDisplay = document.getElementById('upgrade5Amount');

let ironFarmCostDisplay = document.getElementById('upgrade6');
let ironFarmAmountDisplay = document.getElementById('upgrade6Amount');

let goldFarmCostDisplay = document.getElementById('upgrade7');
let goldFarmAmountDisplay = document.getElementById('upgrade7Amount');

let wSkeleFarmCostDisplay = document.getElementById('upgrade8');
let wSkeleFarmAmountDisplay = document.getElementById('upgrade8Amount');

let beaconCostDisplay = document.getElementById('upgrade9');
let beaconAmountDisplay = document.getElementById('upgrade9Amount');

let pickAdv1Div = document.getElementById('pickAdv1');
let pickAdv2Div = document.getElementById('pickAdv2');
let furnaceAdv1Div = document.getElementById('furnaceAdv1');
let pickAdv3Div = document.getElementById('pickAdv3');
let pickAdv4Div = document.getElementById('pickAdv4');
let pickAdv5Div = document.getElementById('pickAdv5');
let freeAutoClickerAdv1Div = document.getElementById('freeAutoClickerAdv1');
let freeAutoClickerAdv2Div = document.getElementById('freeAutoClickerAdv2');
let freeAutoClickerAdv3Div = document.getElementById('freeAutoClickerAdv3');
let ironFarmDiv = document.getElementById('ironFarmDiv');
let goldFarmDiv = document.getElementById('goldFarmDiv');
let witherSkeleFarmDiv = document.getElementById('witherSkeletonFarmDiv');
let beaconDiv = document.getElementById('beaconDiv');

let freeAutoClickerToggledDisplay = document.getElementById('freeAutoClickerToggleDisplay');
let freeAutoClickerIntervalDisplay = document.getElementById('freeAutoclickerIntervalDisplay');

function clickedButton(){
    score = score + multi + 1;
    scoreDisplay.innerHTML = "Blocks = " + score;
    multi = (furnaceUpgAmount * furnaceUpgPPC);
    if(devModeActive == 1){
    console.log(score);
    }
    if(freeAutoClicker == 1){
        totalAutoClickerClicks++;
    }else if(freeAutoClicker != 1){
        totalClicks++;
    }
};

function devFreeAutoClickerSpeedChanger(){
    if(devModeActive == 1){
        let AutoClickerSpeed = prompt("What do you want to set the autoclicker interval to?");
        let ACSStore = AutoClickerSpeed;
        if(AutoClickerSpeed = ""){
            alert("Action Cancelled");
        }else{
            freeAutoClickerInterval = ACSStore;
            freeAutoClickerIntervalDisplay.innerHTML = "Autoclicker interval is now: " + freeAutoClickerInterval;
        }
    }
}

setInterval(pointPerSecAdder, 1000);
let fastUpdaterID = setInterval(fastUpdater, 1);

function freeAutoClickerToggle(){
    if(freeAutoClicker == 1){
        freeAutoClicker = 0;
        freeAutoClickerToggledDisplay.innerHTML = "Autoclicker currently disabled";
        clearInterval(freeAutoClickerID);
    }else if(freeAutoClicker != 1){
        freeAutoClicker = 1;
        freeAutoClickerToggledDisplay.innerHTML = "Autoclicker currently enabled";
        freeAutoClickerID = setInterval(clickedButton, freeAutoClickerInterval);
    }
}

function fastUpdater(){
    pointsPerSec = (pickaxeUpgAmount * pickaxeUpgDPS) + (tripwireDuperAmount * tripwireDuperDPS) + (axeAmount * axeDPS) + (villagerAmount * villagerDPS) + (ironFarmAmount * ironFarmDPS);
    scoreDisplay.innerHTML = "Blocks = " + score;
    ppsDisplay.innerHTML = "Blocks Per Second: " + pointsPerSec;
    multiDisplay.innerHTML = "Blocks Per Click: " + (multi + furnaceUpgAmount * furnaceUpgPPC);
    freeAutoClickerIntervalDisplay.innerHTML = "Current Autoclicker Interval: " + freeAutoClickerInterval;
    multi = (furnaceUpgAmount * furnaceUpgPPC);
    Math.floor(pointsPerSec);

    if(pickaxeUpgAmount >= 8 && furnaceUpgAmount >= 3 && pickAdv1Bought == 1){
        pickAdv2Visible();
    }
    if(furnaceUpgAmount >= 10){
        furnaceAdv1Visible();
    }
    if(furnaceUpgAmount >= 10 && pickaxeUpgAmount >= 10 && pickAdv2Bought == 1){
        pickAdv3Visible();
    }
    if(pickAdv3Bought == 1 && pickaxeUpgAmount >= 25){
        pickAdv4Visible();
    }
    if(pickAdv4Bought == 1 && pickaxeUpgAmount >= 35 && villagerAmount >= 1){
        pickAdv5Visible();
    }
    if(totalAutoClickerClicks >= 100){
        freeAutoClickerAdv1Visible();
    }
    if(totalAutoClickerClicks >= 750 && freeAutoClickerAdv1Bought == 1){
        freeAutoClickerAdv2Visible();
    }
    if(totalAutoClickerClicks >= 2500 && freeAutoClickerAdv2Bought == 1){
        freeAutoClickerAdv3Visible();
    }
    if(villagerAmount >= 7){
        ironFarmVisible();
    }
}

function pointPerSecAdder(){
    score = score + pointsPerSec;
}

let devModeActive = 0;

function devMode(){
    if(devModeActive != 1){
    let inputPasscode = prompt("Enable dev mode? (enter password first): ");
    if(inputPasscode == "orbital strike cannon" || inputPasscode == "osc"){
    inputPasscode = "scrambled";
    alert("dev mode active, all upgrades are free and console displays are active");
    freeUpgrades = 1;
    devModeActive = 1;
    }else{
        alert("Wrong passcode");
        inputPasscode = "L wrong password";
    }
    }else if(devModeActive == 1){
        let freeEverything = prompt("Do you want to enable or disable free upgrades and advancements?");
        if(freeEverything == "Enable" || freeEverything == "enable"){
            freeUpgrades = 1;
        }else if(freeEverything == "Disable" || freeEverything == "disable"){
            freeUpgrades = 0;
        }else{
            console.log("Action Cancelled");
        }
        let infMoney = prompt("Do you want to enable or disable unlimited money?");
        if(infMoney == "Enable" || infMoney == "enable"){
            score = Infinity;
        }else if(infMoney == "Disable" || infMoney == "disable"){
            score = 0;
        }else{
            console.log("Action Cancelled")
        }
        let devAutoClicker = prompt("Do you want to enable or disable the dev autoclicker?");
        if(devAutoClicker == "Enable" || devAutoClicker == "enable"){
            let devACID = setInterval(clickedButton, 50);
        }else if (devAutoClicker == "Disable" || devAutoClicker == "disable"){
            clearInterval(devACID);
        }else{
            console.log("Action cancelled");
            clearInterval(devACID);
        }
    }
}

function upgrade1(){
    if(score >= (furnaceUpgCost) || freeUpgrades == 1){
        if(freeUpgrades != 1){
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
        scoreDisplay.innerHTML = "Blocks = " + score;
        furnaceCostDisplay.innerHTML = "+ " + furnaceUpgPPC + " Block(s) per click - $" + furnaceUpgCost;
        furnaceAmountDisplay.innerHTML = furnaceUpgAmount + " Furnace upgrade(s) owned";
        if(devModeActive == 1){
        console.log("Score is now " + score);
        console.log("You now have " + furnaceUpgAmount + " Furnace upgrade(s)");
        console.log("Upgrade 1 now costs " + furnaceUpgCost);
        console.log("Multi is now: " + multi);
        }
        multiDisplay.innerHTML = "Blocks Per Click: " + (multi + furnaceUpgPPC);
    }else{
        if(devModeActive == 1){
        console.log("not enough money or issue in code for upgrade 1");
        }
    }
}

function upgrade2(){
    if(score >= (pickaxeUpgCost) || freeUpgrades == 1){
        if(freeUpgrades != 1){
        score = score - pickaxeUpgCost;
        }
        pickaxeUpgAmount++;
        if(pickaxeUpgAmount >= 3){
            pickAdv1Visible();
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
        scoreDisplay.innerHTML = "Blocks = " + score;
        ppsDisplay.innerHTML = "Blocks Per Second: " + pointsPerSec;
        pickaxeCostDisplay.innerHTML = "+" + pickaxeUpgDPS + " Block(s) per second - $" + pickaxeUpgCost;
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
    if(score >= axeCost || freeUpgrades == 1){
        pointsPerSec = pointsPerSec + axeDPS;
        if(freeUpgrades != 1){
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
        scoreDisplay.innerHTML = "Blocks = " + score;
        ppsDisplay.innerHTML = "Blocks Per Second: " + pointsPerSec;
        axeCostDisplay.innerHTML = "+ " + axeDPS + " Blocks per second - $" + axeCost;
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
    if(score >= (tripwireDuperCost) || freeUpgrades == 1){
        pointsPerSec = pointsPerSec + tripwireDuperDPS;
        if(freeUpgrades != 1){
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
        scoreDisplay.innerHTML = "Blocks = " + score;
        ppsDisplay.innerHTML = "Blocks Per Second: " + pointsPerSec;
        tripwireDuperCostDisplay.innerHTML = "+" + tripwireDuperDPS + " Blocks per second - $" + tripwireDuperCost;
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

function upgrade5(){
    if(score >= villagerCost || freeUpgrades == 1){
        pointsPerSec = pointsPerSec + villagerDPS;
        if(freeUpgrades != 1){
            score = score - villagerCost;
        }
        villagerAmount++;
        if(villagerCost <= 30000){
            villagerCost = villagerCost * 1.5;
        }else if(villagerCost > 30000 && villagerCost <= 300000){
            villagerCost = villagerCost * 1.2;
        }else if(villagerCost > 300000){
            villagerCost = (villagerCost + 100) * 1.01;
        }
        villagerCost = Math.floor(villagerCost);
        pointsPerSec = (pickaxeUpgAmount * pickaxeUpgDPS) + (tripwireDuperAmount * tripwireDuperDPS) + (axeAmount * axeDPS) + (villagerAmount * villagerDPS);
        scoreDisplay.innerHTML = "Blocks = " + score;
        ppsDisplay.innerHTML = "Blocks Per Second: " + pointsPerSec;
        villagerCostDisplay.innerHTML = "+" + villagerDPS + " Blocks per second - $" + villagerCost;
        villagerAmountDisplay.innerHTML = villagerAmount + " villagers owned";
        if(devModeActive == 1){
            console.log("pps is now" + pointsPerSec);
            console.log("villagers now cost" + villagerCost);
        }
    }else{
        if(devModeActive == 1){
            console.log("not enough money for upgrade 5");
        }
    }
}

function upgrade6(){
    if(score >= ironFarmCost || freeUpgrades == 1 && ironFarmAmount != 20){
        pointsPerSec = pointsPerSec + ironFarmDPS;
        if(freeUpgrades != 1){
            score = score - ironFarmCost;
        }
        ironFarmAmount++;
        if(ironFarmCost <= 200000 && ironFarmAmount <= 20){
            ironFarmCost = ironFarmCost * 1.5;
        }else if(ironFarmCost > 200000 && ironFarmCost <= 1000000 && ironFarmAmount <= 20){
            ironFarmCost = ironFarmCost * 1.8;
        }else if(ironFarmCost > 1000000 && ironFarmAmount <= 20){
            ironFarmCost = (ironFarmCost + 100) * 1.01;

        }else{
            ironFarmCost = Infinity;
        }
        ironFarmCost = Math.floor(ironFarmCost);
        pointsPerSec = (pickaxeUpgAmount * pickaxeUpgDPS) + (tripwireDuperAmount * tripwireDuperDPS) + (axeAmount * axeDPS) + (villagerAmount * villagerDPS) + (ironFarmAmount * ironFarmDPS);
        scoreDisplay.innerHTML = "Blocks = " + score;
        ppsDisplay.innerHTML = "Blocks per second: " + pointsPerSec;
        ironFarmAmountDisplay.innerHTML = ironFarmAmount + " Iron farm modules owned (Max 20)";
        if(ironFarmAmount < 20){
        ironFarmCostDisplay.innerHTML = "+" + ironFarmDPS + " Blocks per second - $" + ironFarmCost;
        
        }else if(ironFarmAmount >= 20){
            ironFarmCostDisplay.innerHTML = "Max Iron farms owned! Iron farm DPS: " + ironFarmDPS;
        }
    }else{
        if(devModeActive == 1){
            console.log("not enough money, or max amount of iron farms!");
        }
    }
}

function pickAdv1Visible(){
    if(pickaxeUpgAmount >= 3){
        pickAdv1Div.style.display = "unset";
    }
}

function pickAdv2Visible(){
    if(pickaxeUpgAmount >= 8 && furnaceUpgAmount >= 3){
        pickAdv2Div.style.display = "unset";
    }
}

function furnaceAdv1Visible(){
    if(furnaceUpgAmount >= 10 && pickAdv3Bought == 1){
        furnaceAdv1Div.style.display = "unset";
    }
}

function pickAdv3Visible(){
    if(furnaceUpgAmount >= 10 && pickaxeUpgAmount >= 10 && pickAdv2Bought == 1){
        pickAdv3Div.style.display = "unset";
    }
}

function pickAdv4Visible(){
    if(pickaxeUpgAmount >= 25 && pickAdv3Bought == 1){
        pickAdv4Div.style.display = "unset";
    }
}

function pickAdv5Visible(){
    if(pickaxeUpgAmount >= 30 && pickAdv4Bought == 1 && villagerAmount >= 1){
        pickAdv5Div.style.display = "unset";
    }
}

function freeAutoClickerAdv1Visible(){
    if(totalAutoClickerClicks >= 100){
        freeAutoClickerAdv1Div.style.display = "unset";
    }
}

function freeAutoClickerAdv2Visible(){
    if(totalAutoClickerClicks >= 750 && freeAutoClickerAdv1Bought == 1){
        freeAutoClickerAdv2Div.style.display = "unset";
    }
}

function freeAutoClickerAdv3Visible(){
    if(totalAutoClickerClicks >= 1500 && freeAutoClickerAdv2Bought == 1){
        freeAutoClickerAdv3Div.style.display = "unset";
    }
}

function ironFarmVisible(){
    if(villagerAmount >= 7){
        ironFarmDiv.style.display = "unset";
    }
}

function goldFarmVisible(){
}

function pickAdv1(){
    if(score >= 300 && pickaxeUpgAmount >=3 && freeUpgrades != 1){
        pickaxeUpgDPS = 2;
        score = score - 300;
        pickAdv1Bought = 1;
        pickaxeCostDisplay.innerHTML = "+" + pickaxeUpgDPS + " blocks per second - $" + pickaxeUpgCost;
        document.getElementById('pickUpgImg').src = "https://minecraft.wiki/images/Stone_Pickaxe_JE2_BE2.png?650b0";
        document.getElementById('clicker').src = "https://minecraft.wiki/images/thumb/Stone_JE5_BE3.png/150px-Stone_JE5_BE3.png?5780c";
        document.body.style.backgroundImage = "url('https://minecraft.wiki/images/thumb/Winding_spaghetti_cave.png/1024px-Winding_spaghetti_cave.png?28a67')";
        pickAdv1Div.remove();
    }else if(freeUpgrades == 1){
        pickaxeUpgDPS = 2;
        pickaxeCostDisplay.innerHTML = "+" + pickaxeUpgDPS + " blocks per second - $" + pickaxeUpgCost;
        document.getElementById('pickUpgImg').src = "https://minecraft.wiki/images/Stone_Pickaxe_JE2_BE2.png?650b0";
        document.getElementById('clicker').src = "https://minecraft.wiki/images/thumb/Stone_JE5_BE3.png/150px-Stone_JE5_BE3.png?5780c";
        pickAdv1Bought = 1;
        document.body.style.backgroundImage = "url('https://minecraft.wiki/images/thumb/Winding_spaghetti_cave.png/1024px-Winding_spaghetti_cave.png?28a67')";
        pickAdv1Div.remove();
    }
}

function pickAdv2(){
    if(score >= 700 && pickaxeUpgAmount >=8 && furnaceUpgAmount >= 3 && pickAdv1Bought == 1 && freeUpgrades != 1){
        pickaxeUpgDPS = 3;
        pickAdv2Bought = 1;
        score = score - 700;
        pickaxeCostDisplay.innerHTML = "+" + pickaxeUpgDPS + " blocks per second - $" + pickaxeUpgCost;
        document.getElementById('pickUpgImg').src = "https://minecraft.wiki/images/Copper_Pickaxe_JE1_BE1.png?3b91b";
        document.getElementById('clicker').src = "https://minecraft.wiki/images/thumb/Copper_Ore_JE2_BE2.png/150px-Copper_Ore_JE2_BE2.png?073cd";
        pickAdv2Div.remove();
    }else if(freeUpgrades == 1){
        pickaxeUpgDPS = 3;
        pickaxeCostDisplay.innerHTML = "+" + pickaxeUpgDPS + " blocks per second - $" + pickaxeUpgCost;
        document.getElementById('pickUpgImg').src = "https://minecraft.wiki/images/Copper_Pickaxe_JE1_BE1.png?3b91b";
        document.getElementById('clicker').src = "https://minecraft.wiki/images/thumb/Copper_Ore_JE2_BE2.png/150px-Copper_Ore_JE2_BE2.png?073cd";
        pickAdv2Bought = 1;
        pickAdv2Div.remove();
    }
}

function furnaceAdv1(){
    if(score >= 500 && furnaceUpgAmount >= 10 && pickAdv3Bought == 1 && freeUpgrades != 1){
        furnaceUpgPPC = 2;
        furnaceAdv1Bought = 1;
        score = score - 500;
        furnaceCostDisplay.innerHTML = "+ " + furnaceUpgPPC + " blocks per click - $" + furnaceUpgCost;
        document.getElementById('furnaceUpgImg').src = "https://minecraft.wiki/images/thumb/Lit_Blast_Furnace_%28S%29_JE1.gif/150px-Lit_Blast_Furnace_%28S%29_JE1.gif?dc6a7";
        furnaceAdv1Div.remove();
    }else if(freeUpgrades == 1){
        furnaceUpgPPC = 2;
        furnaceCostDisplay.innerHTML = "+ " + furnaceUpgPPC + " blocks per click - $" + furnaceUpgCost;
        document.getElementById('furnaceUpgImg').src = "https://minecraft.wiki/images/thumb/Lit_Blast_Furnace_%28S%29_JE1.gif/150px-Lit_Blast_Furnace_%28S%29_JE1.gif?dc6a7";
        furnaceAdv1Bought = 1;
        furnaceAdv1Div.remove();
    }
}

function pickAdv3(){
    if(score >= 1400 && pickaxeUpgAmount >= 10 && furnaceUpgAmount >= 10 && pickAdv2Bought == 1 && freeUpgrades != 1){
        pickaxeUpgDPS = 4;
        pickAdv3Bought = 1;
        score = score - 1400;
        pickaxeCostDisplay.innerHTML = "+ " + pickaxeUpgDPS + " blocks per click - $" + pickaxeUpgCost;
        document.getElementById('pickUpgImg').src = "https://minecraft.wiki/images/Iron_Pickaxe_JE3_BE2.png?8a6ea";
        document.getElementById('clicker').src = "https://minecraft.wiki/images/Iron_Ore_JE6_BE4.png?b1fb3";
        pickAdv3Div.remove();
    }else if(freeUpgrades == 1){
        pickaxeUpgDPS = 4;
        pickAdv3Bought = 1;
        pickaxeCostDisplay.innerHTML = "+ " + pickaxeUpgDPS + " blocks per click - $" + pickaxeUpgCost;
        document.getElementById('pickUpgImg').src = "https://minecraft.wiki/images/Iron_Pickaxe_JE3_BE2.png?8a6ea";
        document.getElementById('clicker').src = "https://minecraft.wiki/images/Iron_Ore_JE6_BE4.png?b1fb3";
        pickAdv3Div.remove();
    }
}

function pickAdv4(){
    if(score >= 1750 && pickaxeUpgAmount >= 25 && pickAdv3Bought == 1 && freeUpgrades != 1){
        pickaxeUpgDPS = 5;
        pickAdv4Bought = 1;
        score = score - 1750;
        pickaxeCostDisplay.innerHTML = "+ " + pickaxeUpgDPS + " blocks per click - $" + pickaxeUpgCost;
        document.getElementById('clicker').src = "https://minecraft.wiki/images/Deepslate_Iron_Ore_JE2_BE1.png?f4fb9";
        pickAdv4Div.remove();
    }else if(freeUpgrades == 1){
        pickaxeUpgDPS = 5;
        pickAdv4Bought = 1;
        pickaxeCostDisplay.innerHTML = "+ " + pickaxeUpgDPS + " blocks per click - $" + pickaxeUpgCost;
        document.getElementById('clicker').src = "https://minecraft.wiki/images/Deepslate_Iron_Ore_JE2_BE1.png?f4fb9";
        pickAdv4Div.remove();
    }
}

function pickAdv5(){
    if(score >= 3000 && pickaxeUpgAmount >= 35 && pickAdv4Bought == 1 || freeUpgrades == 1){
        pickaxeUpgDPS = 6;
        pickAdv5Bought = 1;
        if(freeUpgrades != 1){
        score = score - 40000;
        }
        pickaxeCostDisplay.innerHTML = "+ " + pickaxeUpgDPS + " blocks per click - $" + pickaxeUpgCost;
        document.getElementById('pickUpgImg').src = "https://minecraft.wiki/images/Diamond_Pickaxe_JE3_BE3.png?7409d";
        document.getElementById('clicker').src = "https://minecraft.wiki/images/thumb/Deepslate_Diamond_Ore_JE2_BE1.png/150px-Deepslate_Diamond_Ore_JE2_BE1.png?ce0d8";
        pickAdv5Div.remove();
        if(devModeActive == 1){
            console.log("pick dps is now " + pickaxeUpgDPS);
        }
    }
}

function freeAutoClickerAdv1(){
    if(score >= 300 || freeUpgrades == 1){
        freeAutoClickerInterval = 450;
        freeAutoClickerAdv1Bought = 1;
        if(freeUpgrades != 1){
        score = score - 300;
        }
        freeAutoClickerAdv1Div.remove();
        if(devModeActive == 1){
            console.log("Autoclicker interval is now " + freeAutoClickerInterval);
        }
    }
}

function freeAutoClickerAdv2(){
    if(score >= 1000 || freeUpgrades == 1){
        freeAutoClickerInterval = 405;
        freeAutoClickerAdv2Bought = 1;
        if(freeUpgrades != 1){
            score = score - 1000;
        }
        freeAutoClickerAdv2Div.remove();
        if(devModeActive == 1){
            console.log("Autoclicker interval is now " + freeAutoClickerInterval);
        }

    }
}

function freeAutoClickerAdv3(){
    if(score >= 2500 || freeUpgrades == 1){
        freeAutoClickerInterval = 382;
        freeAutoClickerAdv3Bought = 1;
        if(freeUpgrades != 1){
            score = score - 2500
        }
        freeAutoClickerAdv3Div.remove();
        if(devModeActive == 1){
            console.log("Autoclicker interval is now " + freeAutoClickerInterval);
        }
    }
}