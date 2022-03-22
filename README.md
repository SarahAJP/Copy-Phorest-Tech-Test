# Phorest-Tech-Assessment
 
Hi! Thank you for taking the time to evaluate my tech test. In this file I will go through how I worked through the assessment and explain all the choices I have made along the way.

When I first approached the problem I broke the core elements down into 3 main functions:

1. Generating 4 random colours in the 4 slots
This was carried out in the chooseColour() method which is called upon when the player clicks the "Spin" button. I did this by having an array contain 4 images of the colours in the machine and using the Math.random() method I generated a random images for each of the 4 slots. The Math.floor() method was needed so then it would generate a whole number which corresponded with an index in the array.

2. Letting the user know if they won or lost
This function generates a message whether the user had won or lost on that spin of the slot machine. There was ony 1 case in which they could win, if all 4 slots matched, so every other combination would mean they lost. It took the randomly generated colour from the chooseColour() function to check if the condition had been met. 

3. Increasing/ Decreasing the money for both the player and the jackpot
Outside of the function I made 2 global variables, the purse and the jackpot. The purse is the amount of money that player has to play the game and the jackpot is the money they can win. I initialised the purse to €100 and the jackpot to €5000. While I was testing the functionality it often took a long time for the player to win so I thought €100 was a good amount for the player to have starting off. This meant they had the chance to win but also the chance for them to run out of money too.  
I then created the money Counter() function. This function takes the result of the randomly generated colour and has the same conditions to be met as the chooseColour() function for the player to win. If the payer loses their turn €1 is taken from their purse and added to the jackpot. If all 4 slots are the same the player's purse now contains all of the jackpot, which is a combination of the initial jackpot and the money the user has spent playing the game so far. 