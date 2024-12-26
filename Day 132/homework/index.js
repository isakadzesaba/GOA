// JavaScript Basics and ECMAScript 6 Methods

// 1. map example:
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log('map example:', doubled);  // Output: [2, 4, 6, 8]

// 2. filter example:
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('filter example:', evenNumbers);  // Output: [2, 4]

// 3. reduce example:
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('reduce example:', sum);  // Output: 10

// 4. forEach example:
numbers.forEach(num => console.log('forEach example:', num));  // Output: 1, 2, 3, 4


// Arrow Functions

// Example of Arrow Function
const greet = name => `Hello, ${name}!`;
console.log(greet("Alice"));  // Output: "Hello, Alice!"