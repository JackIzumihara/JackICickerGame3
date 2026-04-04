let score = 0;
let multi = 0;
let upgrade1Amount = 0;
let upgrade1Cost = 50;
let upgrade2Amount = 0;
let upgrade3Amount = 0;

let multiDisplay = document.getElementById('scoreMulti');
console.log(multiDisplay);

let scoreDisplay = document.getElementById('scoreDisplay');
console.log(scoreDisplay);

let upg1CostDisplay = document.getElementById('upgrade1');
let upg1AmountDisplay = document.getElementById('upgrade1Amount');

function clickedButton(){
    score = score + multi + 1;
    scoreDisplay.innerHTML = "Score = " + score;
    console.log(score);
};

function upgrade1(){
    if(score >= (upgrade1Cost)){
        score = score - upgrade1Cost;
        multi = multi + 1;
        upgrade1Amount++;
        if (upgrade1Cost <=1000){
            upgrade1Cost = (upgrade1Cost * 1.25);
        }else if(upgrade1Cost >=1000 && upgrade1Cost <=5000){
            upgrade1Cost = (upgrade1Cost * 1.1);
        }else if(upgrade1Cost >=5000){
            upgrade1Cost = (upgrade1Cost * 1.005 * (upgrade1Amount * 0.001));
        }
        upgrade1Cost = Math.floor(upgrade1Cost);
        scoreDisplay.innerHTML = "Score = " + score;
        upg1CostDisplay.innerHTML = "+ 1 per upgrade - $" + upgrade1Cost;
        upg1AmountDisplay.innerHTML = upgrade1Amount + " [upgradename] owned";
        console.log("upgrade1 was used successfully");
        console.log("Score is now " + score);
        console.log("You now have " + upgrade1Amount + " upgrade1s");
        console.log("Upgrade 1 now costs " + upgrade1Cost);
    }else{
        console.log("not enough money or issue in code");
    }
}