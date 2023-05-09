//Murder Mystery - DO NOT RUN FIRST

// Episode 1 - My prediction = Miss Scarlet is the murderer because the declareMurderer function doesn't change the object scenario at all!
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};

const declareMurderer = function () {
    return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
