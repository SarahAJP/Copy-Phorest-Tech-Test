# Phorest Technical Assessment

Hi! Thank you for taking the time to evaluate my tech test. In this file I will go through how I worked through the assessment and explain all the choices I have made along the way.

The way I approached this assessment was to first get the required functionality working in Vanilla JavaScript along with some simple but clean UI. I then had enough time to add Ember as my framework. I know Phorest uses Ember as their frontend framework and I wanted to take on the challenge and try using it. I also knew from my research that it would be useful for writing tests and deploying my application easily. This change from Vanilla JavaScript to using Ember meant that my functions became methods in the SlotMachineComponent class and index.html became the slot-machine.hbs component.

When I first approached the problem I broke the core elements down into 4 main methods:

#### Generating 4 random colours in the 4 slots
This was carried out in the chooseColour() method which is called upon when the player clicks the "Spin" button. I did this by having an array contain 4 images of the colours in the machine and using the Math.random() method I generated a random images for each of the 4 slots.

#### Letting the user know if they won or lost
This function generates a message whether the user had won or lost on that spin of the slot machine. There was only 1 case in which they could win, if all 4 slots matched, so every other combination would mean they lost. It took the randomly generated colour from the chooseColour() method to check if the condition had been met.

#### Increasing/ Decreasing the money for both the player and the jackpot
Outside of the function I had 2 tracked properties, the purse and the jackpot. The purse is the amount of money that player has to play the game and the jackpot is the money they can win. I then created the moneyCounter() method. This function takes the result of the randomly generated colours and has the same conditions to be met as the chooseColour() method for the player to win. This increases/decreases the purse and jackpot depending on the outcome.

#### Propmting the user to play again
The final main method was the playAaginMessage() method that contains a button that appears when the player has either won the jackpot or ran out of money. This disables the Spin button and prompts the user to restart the game. When clicked this button calls upon the restartGame() method which reloads the page and the game starts again.

### Deploying

Specify what it takes to deploy your app.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/SarahAJP/Phorest-Tech-Test` this repository
* `cd Phorest-Tech-Test`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200/slot-machine).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* I added some Integration tests to test out functionality in the Components
* `ember test`
* `ember test --server`
