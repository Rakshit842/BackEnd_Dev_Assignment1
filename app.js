// Custom Module Creation & Reusability

const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger.log("Application started");

console.log("10 is even:", isEven(10));
console.log("7 is even:", isEven(7));
console.log("24 is even:", isEven(24));

logger.log("Application finished");
