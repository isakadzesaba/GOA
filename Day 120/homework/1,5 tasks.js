// Task 1: CommonJS - mathUtils.js & main.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
module.exports = { add, subtract };
const { add, subtract } = require('./mathUtils');

console.log('Task 1 - Add:', add(5, 3));    
console.log('Task 1 - Subtract:', subtract(5, 3)); 


// Task 2: CommonJS Default Export - message.js & display.js
const greeting = {
    text: "Hello",
    language: "English"
};

module.exports = greeting;


const greeting = require('./message');

console.log('Task 2 - Greeting Text:', greeting.text);     
console.log('Task 2 - Greeting Language:', greeting.language); 


// Task 3: ES Modules with Named Exports - greetings.js & main.js
export function sayHello() {
    return "Hello, World!";
}

export function sayGoodbye() {
    return "Goodbye, everyone!";
}

// main.js

console.log('Task 3 - sayHello:', sayHello());   
console.log('Task 3 - sayGoodbye:', sayGoodbye());  


// Task 4: ES Modules with Default Export - animals.js & zoo.js


console.log('Species:', animal.species);
console.log('Sound:', animal.sound);    


// zoo.js

console.log('Task 4 - Species:', animal.species); 
console.log('Task 4 - Sound:', animal.sound);     


// Task 5: Mixed Exports in ES Modules - mathOperations.js & calculator.js
export default function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// calculator.js
import add, { subtract } from './mathOperations.js';

console.log('Task 5 - Add:', add(10, 5));       
console.log('Task 5 - Subtract:', subtract(10, 5));
