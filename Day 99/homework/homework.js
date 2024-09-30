// 1. Create a Class with Public Properties
class Car {
    constructor(make, model) {
        this.make = make; // Public property
        this.model = model; // Public property
    }
}

const myCar = new Car('Toyota', 'Corolla');
console.log("Car Make:", myCar.make);
console.log("Car Model:", myCar.model);

// 2. Use Private Properties
class BankAccount {
    #balance; // Private property

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}, New Balance: ${this.#balance}`);
        } else {
            console.log("Insufficient funds.");
        }
    }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
myAccount.withdraw(150); // Should show insufficient funds.

// 3. Static Methods and Properties
class MathOperations {
    static PI = 3.14159; // Static property

    static add(a, b) {
        return a + b; // Static method
    }
}

console.log("Sum:", MathOperations.add(5, 10));
console.log("Value of PI:", MathOperations.PI);

// 4. Use Getters and Setters
class Rectangle {
    constructor(width, height) {
        this.width = width; // Public property
        this.height = height; // Public property
    }

    get area() {
        return this.width * this.height; // Getter for area
    }

    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.error("Width must be positive.");
        }
    }

    set height(value) {
        if (value > 0) {
            this._height = value;
        } else {
            console.error("Height must be positive.");
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }
}

const rect = new Rectangle(10, 5);
console.log("Rectangle Area:", rect.area);

// 5. Private Methods
class User {
    #validatePassword(password) { // Private method
        return password.length >= 8; // Simple validation
    }

    set password(value) {
        if (this.#validatePassword(value)) {
            this._password = value;
            console.log("Password set successfully.");
        } else {
            console.log("Password is too weak.");
        }
    }

    get password() {
        return this._password;
    }
}

const user = new User();
user.password = "mypassword"; // Valid password
user.password = "short"; // Invalid password

// 6. Private Properties with Getters and Setters
class Book {
    constructor(title, pages) {
        this.title = title; // Public property
        this._pages = pages; // Private property
    }

    get pages() {
        return this._pages; // Getter for pages
    }

    set pages(value) {
        if (value > 0) {
            this._pages = value;
        } else {
            console.error("Number of pages must be positive.");
        }
    }
}

const myBook = new Book("The Great Gatsby", 180);
console.log("Book Title:", myBook.title);
console.log("Book Pages:", myBook.pages);
myBook.pages = 200; // Update pages
console.log("Updated Book Pages:", myBook.pages);

// 7. Static Method for Instance Counting
class Player {
    static playerCount = 0; // Static property

    constructor(name) {
        this.name = name;
        Player.playerCount++; // Increment count on new instance
    }

    static getPlayerCount() {
        return Player.playerCount; // Static method to get count
    }
}

const player1 = new Player("Alice");
const player2 = new Player("Bob");
console.log("Total Players:", Player.getPlayerCount());

// 8. Class Inheritance with Private Properties
class Vehicle {
    #speed; // Private property

    constructor(speed) {
        this.#speed = speed; // Set speed
    }

    get speed() {
        return this.#speed; // Public method to get speed
    }

    set speed(value) {
        this.#speed = value; // Public method to set speed
    }
}

class Bike extends Vehicle {
    constructor(speed) {
        super(speed); // Call parent constructor
    }

    accelerate(increment) {
        this.speed += increment; // Modify speed
        console.log("Bike Speed:", this.speed);
    }
}

const myBike = new Bike(20);
myBike.accelerate(10); // Should show new speed

// 9. Static Method for Comparison
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    static compareGrades(student1, student2) {
        if (student1.grade > student2.grade) {
            return `${student1.name} has a higher grade.`;
        } else if (student1.grade < student2.grade) {
            return `${student2.name} has a higher grade.`;
        } else {
            return "Both students have the same grade.";
        }
    }
}

const studentA = new Student("John", 85);
const studentB = new Student("Jane", 90);
console.log(Student.compareGrades(studentA, studentB));