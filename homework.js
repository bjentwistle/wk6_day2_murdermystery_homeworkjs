// Murder Mystery - DO NOT RUN FIRST

//SOLUTIONS ADDED NOW

// // Episode 1 - My prediction = Miss Scarlet is the murderer because the declareMurderer function doesn't change the object scenario at all!
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function () {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//-------------------------------------------

// //Episode 2 - I predict the Murderer is Prof Plum

// const murderer = 'Professor Plum'; // this sets the murderer to Prof Plum
// const changeMurderer = function () {
//     murderer = 'Mrs. Peacock';  //this only changes the murderer in this function, also not returning anything.
// }
// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }
// changeMurderer();   //does nothing meaningful
// const verdict = declareMurderer();  //calls function that returns ${murderer} ie Prof Plum.
// console.log(verdict);   //prints Prof Plum to the console!

//-------------------------------------------

//Exercise 3 - missed out initally
// let murderer = 'Professor Plum';

// const declareMurderer = function () {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// };

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict); //Mrs Peacock

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict); //Prof Plum

//-------------------------------------------

// //Episode 4 - suspectThree is Mrs Peacock in the last line.
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function () {
//     let suspectThree = 'Colonel Mustard'; //changes suspect3 to Col Mustard
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects(); //assigns suspects to the return of declare all suspects function where Col Mustard became suspect 3
// console.log(suspects); //prints out Miss Scarlet, Prof Plum & Col Mustard
// console.log(`Suspect three is ${suspectThree}.`);  //Ths will be Mrs Peacock.

//-------------------------------------------

// //Episode 5 - I predict the weapon will be the Revolver.
// const scenario = { //sets scenario with mmurderer Miss Scarlet
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function (newWeapon) {
//     scenario.weapon = newWeapon; //changes the weapon used in scenario if called.
// }

// const declareWeapon = function () {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver'); //calls change weapon func so scenario.weapon = Revolver
// const verdict = declareWeapon();
// console.log(verdict); //Will print to the console: 'The weapon is the Revolver'

//-------------------------------------------

// //Episode 6 - I predicted Col Mustard - I was wrong
// let murderer = 'Colonel Mustard'; //let allows murderer to be changed!

// const changeMurderer = function () {
//     murderer = 'Mr. Green';

//     const plotTwist = function () {
//         murderer = 'Mrs. White';
//     }

//     plotTwist();
// } // doesn't return anything but changes the murderer when changeMurderer is called.

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// } // returns the changedMurderer now

// changeMurderer(); //now calls the function assigned to changeMurderer
// //so murderer is changed toMr Green then plot twist it changes to Mrs White!
// const verdict = declareMurderer(); //returns Mrs White.
// console.log(verdict);

//-------------------------------------------

// //Episode 7 - I predict Miss Scarlet but I don't understand why! WRONG
// let murderer = 'Professor Plum'; //mutable 

// const changeMurderer = function () {
//     murderer = 'Mr. Green'; // changes murderer to Mr Green

//     const plotTwist = function () {
//         let murderer = 'Colonel Mustard'; // sets a new murderer

//         const unexpectedOutcome = function () {
//             murderer = 'Miss Scarlet';  //changes new murderer
//             //but this doesn't come out of plotTwist
//         }

//         unexpectedOutcome();
//     }

//     plotTwist();
// }
// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`; 
// }
// changeMurderer(); // murderer is changed to Mr Green
// const verdict = declareMurderer(); 
// console.log(verdict);// prints to console

//-------------------------------------------

// //Episode 8 - I predict the weapon is the candle stick because it's changed after the Colonel becomes the murderer.
// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function () {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function (room) {
//         if (scenario.room === room) {
//             scenario.murderer = 'Colonel Mustard';
//         }

//         const unexpectedOutcome = function (murderer) {
//             if (scenario.murderer === murderer) {
//                 scenario.weapon = 'Candle Stick';
//             }
//         }

//         unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function () {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict); //candle stick

//-------------------------------------------

// //Episode 9 - I predict Mrs Peacock is the murderer.
// WRONG and I don't know why?!
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//     let murderer = 'Mrs. Peacock'; // this declares a new murderer to Mrs Peacock within the code block (local variable) - doesn;t come out ofo the IF statement!
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict); // Prof Plum