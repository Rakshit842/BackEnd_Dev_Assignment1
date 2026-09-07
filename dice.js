// Random Dice Generator using Node.js crypto module

const crypto = require("crypto");

const numberOfRolls = Number(process.argv[2]) || 1;

if (!Number.isInteger(numberOfRolls) || numberOfRolls < 1) {
    console.log("Usage: node dice.js <number-of-rolls>");
    process.exit(1);
}

console.log(`Rolling ${numberOfRolls} dice...`);

for (let i = 1; i <= numberOfRolls; i++) {
    const dice = crypto.randomInt(1, 7);
    console.log(`Dice ${i}: ${dice}`);
}
