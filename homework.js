//Murder Mystery - DO NOT RUN FIRST

// Episode 1 - My prediction = Miss Scarlet is the murderer because the declareMurderer function doesn't change the object scenario at all!
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


// //Episode 2 - I predict the Murderer is 

// const murderer = 'Professor Plum'; // this sets the murderer to Prof Plum
// // const changeMurderer = function () {
// //     murderer = 'Mrs. Peacock';  //this only changes the murderer in this function, also not returning anything.
// // }
// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }
// //changeMurderer();   //does nothing meaningful
// const verdict = declareMurderer();  //calls function that returns ${murderer} ie Prof Plum.
// console.log(verdict);   //prints Prof Plum to the console!

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

// //Episode 6 - I predict Col Mustard 
// let murderer = 'Colonel Mustard';

// const changeMurderer = function () {
//     murderer = 'Mr. Green';

//     const plotTwist = function () {
//         murderer = 'Mrs. White';
//     }

//     plotTwist();
// } // doesn't return anything

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// } // returns the original murderer if called

// changeMurderer(); //does nothing meaningful
// const verdict = declareMurderer(); //returns Col Mustard.
// console.log(verdict);
// //will print Col Mustard to the console.
// // WRONG :-0

// //Episode 7 - I predict Miss Scarlet but I don't understand why! WRONG
// let murderer = 'Professor Plum'; //mutable 

// const changeMurderer = function () {
//     murderer = 'Mr. Green';

//     const plotTwist = function () {
//         let murderer = 'Colonel Mustard';

//         const unexpectedOutcome = function () {
//             murderer = 'Miss Scarlet';
//         }

//         unexpectedOutcome();
//     }

//     plotTwist();
// }
// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

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

//Episode 9 - I predict Mrs Peacock is the murderer.
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict); //Mrs Peacock.
//WRONG and I don't know why?!