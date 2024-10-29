class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }

    static compareUsers(user1, user2) {
        return user1 && user2 && user1.email === user2.email;
    }
}

const user1 = new User("Alice", "alice@example.com");
const user2 = new User("Bob", "bob@example.com");

user1.displayInfo();
console.log(User.compareUsers(user1, user2));

class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Price must be a positive number');
        }
        this._price = value;
    }
}

const product = new Product("Laptop", 1000);
product.price = 1200;
console.log(product.price);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }

    getDetails() {
        super.getDetails();
        console.log(`ID: ${this.studentID}`);
    }
}

const student = new Student("John", 20, "S123");
student.getDetails();

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(100);
account.withdraw(50);
console.log(account.getBalance());

class Appliance {
    constructor(power) {
        this._power = power;
    }
}

class WashingMachine extends Appliance {
    constructor(power, brand) {
        super(power);
        this.brand = brand;
    }
}

const wm = new WashingMachine(2000, "LG");

class Counter {
    static count = 0;

    static increment() {
        this.count++;
    }
}

Counter.increment();
Counter.increment();
console.log(Counter.count);

class Book {
    constructor(title) {
        this.title = title;
    }
}

const books = [new Book("Book 1"), new Book("Book 2"), new Book("Book 3")];
books.forEach(book => {
    if (book.title) {
        console.log(book.title);
    } else {
        console.log('Untitled Book');
    }
});
