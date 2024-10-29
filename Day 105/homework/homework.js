// 1. Create a basic Promise that resolves immediately
const promise1 = new Promise((resolve) => {
    resolve("Hello, Promise!");
});
promise1.then((message) => console.log(message));

// 2. Create a Promise that rejects with an error
const promise2 = new Promise((_, reject) => {
    reject("Something went wrong!");
});
promise2.catch((error) => console.error(error));

// 3. Use setTimeout to resolve a Promise after 2 seconds
const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("2 seconds have passed"), 2000);
});
promise3.then((message) => console.log(message));

// 4. Handle both resolve and reject outcomes
const promise4 = new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("Success!") : reject("Failed!");
});
promise4
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

// 5. Create a chain of promises using .then()
const promise5 = new Promise((resolve) => {
    resolve(5);
});
promise5
    .then((num) => num * 2)
    .then((num) => num * 2)
    .then((num) => console.log(`Final result: ${num}`));

// 6. Simulate a network request using Promises
const promise6 = new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 1000);
});
promise6.then((message) => console.log(message));
