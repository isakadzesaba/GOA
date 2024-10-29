// 1. Create an Object
const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};
console.log("Person Object:", person);

// 2. Access Object Properties
console.log("Name:", person.name);
console.log("City:", person.city);

// 3. Destructuring an Object
const { name, age } = person;
console.log("Destructured Name:", name);
console.log("Destructured Age:", age);

// 4. Nested Object Destructuring
const student = {
    name: 'Jane Doe',
    age: 22,
    address: {
        city: 'Los Angeles',
        country: 'USA'
    }
};

const { city, country } = student.address;
console.log("City from Address:", city);
console.log("Country from Address:", country);

// 5. Default Values in Destructuring
const product = {
    name: 'Laptop',
    price: 1200
};

const { name: productName, category = 'general' } = product;
console.log("Product Name:", productName);
console.log("Product Category:", category);

// 6. Destructure from Function Parameters
function displayCar({ brand, model, year }) {
    console.log(`Car Brand: ${brand}, Model: ${model}, Year: ${year}`);
}

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
};

displayCar(car);

// 7. Rest Operator with Objects
const book = {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    publisher: 'Secker & Warburg'
};

const { year: bookYear, publisher, ...rest } = book;
console.log("Rest Object:", rest);
console.log("Book Year:", bookYear);
console.log("Book Publisher:", publisher);

// 8. Spread Operator with Objects
const user = {
    name: 'Alice',
    age: 28
};

const location = {
    city: 'Seattle',
    country: 'USA'
};

const mergedObject = { ...user, ...location };
console.log("Merged Object:", mergedObject);

// 9. Rest Operator with Function Arguments
function sumNumbers(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log("Sum of Numbers:", sumNumbers(1, 2, 3, 4, 5));

// 10. Spread Operator with Arrays
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combinedNumbers = [...numbers1, ...numbers2];
console.log("Combined Array:", combinedNumbers);
