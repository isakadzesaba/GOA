// 1. Filter Prime Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primeNumbers = numbers.filter(isPrime);
console.log("Prime Numbers:", primeNumbers);

// 2. Map to Object Conversion
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const userNames = users.map(user => user.name);
console.log("User Names:", userNames);

// 3. Filter Objects by Property
const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 70 }
];

const affordableProducts = products.filter(product => product.price < 100);
console.log("Affordable Products:", affordableProducts);

// 4. Map Complex Transformations
const books = [
    { title: '1984', author: 'George Orwell' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

const bookStrings = books.map(book => `${book.title} by ${book.author}`);
console.log("Books:", bookStrings);

// 5. Filter Numbers Based on Multiple Conditions
const nums = [5, 12, 18, 21, 30, 33, 10];

const filteredNums = nums.filter(num => num > 10 && num % 3 === 0);
console.log("Filtered Numbers:", filteredNums);

// 6. Modify Array of Objects (map)
const usersWithAge = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 }
];

const updatedUsers = usersWithAge.map(user => ({
    ...user,
    isAdult: user.age >= 18
}));
console.log("Updated Users:", updatedUsers);

// 7. Chaining map and filter
const numbersForChaining = [30, 60, 20, 80, 10];

const filteredChained = numbersForChaining.filter(num => num > 50).map(num => num / 2);
console.log("Chained Filter and Map Result:", filteredChained);

// 8. Log Word Frequencies (forEach)
const words = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];
const wordFrequencies = {};

words.forEach(word => {
    wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
});
console.log("Word Frequencies:", wordFrequencies);

// 9. Filter Objects by Nested Property
const cars = [
    { brand: { name: 'Toyota' }, model: 'Camry' },
    { brand: { name: 'Honda' }, model: 'Civic' },
    { brand: { name: 'Toyota' }, model: 'Corolla' }
];

const toyotaCars = cars.filter(car => car.brand.name === 'Toyota');
console.log("Toyota Cars:", toyotaCars);
