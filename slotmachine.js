//randomizes the 4 colours in each of the slots
function chooseColour() {
    //array contains 4 images which are the 4 possible colours in the slot machine
    var slotColours = new Array("images/black.jpg","images/white.jpg","images/yellow.png","images/green.png");

    var randomColour1 = Math.floor(Math.random() * slotColours.length);
    var randomColour2 = Math.floor(Math.random() * slotColours.length);
    var randomColour3 = Math.floor(Math.random() * slotColours.length);
    var randomColour4 = Math.floor(Math.random() * slotColours.length);

    document.getElementById("slot1").src = slotColours[randomColour1];
    document.getElementById("slot2").src = slotColours[randomColour2];
    document.getElementById("slot3").src = slotColours[randomColour3];
    document.getElementById("slot4").src = slotColours[randomColour4];

    winLoseMessage();
}

//lets the player know if they won or lost the spin
function winLoseMessage() {

    var item1 = document.getElementById("slot1").src;
    var item2 = document.getElementById("slot2").src;
    var item3 = document.getElementById("slot3").src;
    var item4 = document.getElementById("slot4").src;

    var win = "You won!";
    var lose = "You lost!";

    if (item1 == item2 && item1 == item3 && item1 == item4 && item2 == item3 && item2 == item4 && item3 == item4) {
        document.getElementById("winLose").innerHTML = win;
    }else {
        document.getElementById("winLose").innerHTML = lose;
    }

    moneyCounter(item1, item2, item3, item4);
}


//initialise the player's purse and the jackpot
let purse = 100;
let jackpot = 5000;

//evaluates whether the player has won the jackpot or can keep playing
//also has counters for amounts in the players purse and the jackpot
function moneyCounter(item1, item2, item3, item4) {
    if (item1 == item2 && item1 == item3 && item1 == item4 && item2 == item3 && item2 == item4 && item3 == item4){
        purse = jackpot;
        jackpot = 0;
    } else {
        jackpot += 1;
        purse -= 1;
    }
    document.getElementById("jackpotAmount").innerHTML = jackpot;
    document.getElementById("moneyAmount").innerHTML = purse;

    playAgainMessage(jackpot, purse)
}


function playAgainMessage(jackpot, purse){
    var spinButton = document.getElementById("spinButton");
    if (jackpot == 0){
        spinButton.disabled = true;
        document.getElementById("playAgainButton").style.display = "inline";
        document.getElementById("playAgain").innerHTML = "You have won the jackpot! Click here to play again";
    }
    if (purse == 0){
        spinButton.disabled = true;
        document.getElementById("playAgainButton").style.display = "inline";
        document.getElementById("playAgain").innerHTML = "You have run out of money. Click here to play again";
    }
    
}

//function refreshPage(){
//    window.location.reload();
//}
