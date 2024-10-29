// 1. Library კლასი
class Library {
    constructor() {
        this.books = new Map();
    }
    addBook(title, author) {
        this.books.set(title, author);
    }
}
const library = new Library();
library.addBook("1984", "George Orwell");

// 2. Store კლასი
class Store {
    constructor() {
        this.products = new Map();
    }
    getPrice(product) {
        return this.products.get(product);
    }
}
const store = new Store();
store.products.set("Laptop", 1500);
console.log(store.getPrice("Laptop"));

// 3. PhoneBook კლასი
class PhoneBook {
    constructor() {
        this.contacts = new Map();
    }
    addContact(name, phone) {
        this.contacts.set(phone, name);
    }
    getContact(phone) {
        return this.contacts.get(phone);
    }
}
const phoneBook = new PhoneBook();
phoneBook.addContact("Alice", "123456");
console.log(phoneBook.getContact("123456"));

// 4. Zoo კლასი
class Zoo {
    constructor() {
        this.animals = new Map();
    }
    listAnimals() {
        return Array.from(this.animals.keys());
    }
}
const zoo = new Zoo();
zoo.animals.set("Lion", 3);
console.log(zoo.listAnimals());

// 5. Inventory და მემკვიდრეობა
class Inventory {
    constructor() {
        this.items = new Map();
    }
}
class StoreInventory extends Inventory {
    getStock(item) {
        return this.items.get(item);
    }
}
const inventory = new StoreInventory();
inventory.items.set("Apple", 50);
console.log(inventory.getStock("Apple"));

// 6. Classroom კლასი
class Classroom {
    constructor() {
        this.students = new Map();
    }
    addStudent(id, score) {
        this.students.set(id, score);
    }
    getAverageScore() {
        const total = Array.from(this.students.values()).reduce((a, b) => a + b, 0);
        return total / this.students.size;
    }
}
const classroom = new Classroom();
classroom.addStudent("S1", 85);
console.log(classroom.getAverageScore());

// 7. CountryDirectory კლასი
class CountryDirectory {
    constructor(countries) {
        this.countries = new Map(countries);
    }
    getCapital(country) {
        return this.countries.get(country);
    }
}
const directory = new CountryDirectory([["Georgia", "Tbilisi"]]);
console.log(directory.getCapital("Georgia"));

// 8. ShoppingCart კლასი
class ShoppingCart {
    constructor() {
        this.items = new Map();
    }
    addItem(product, quantity) {
        this.items.set(product, quantity);
    }
    getTotalItems() {
        return Array.from(this.items.values()).reduce((a, b) => a + b, 0);
    }
}
const cart = new ShoppingCart();
cart.addItem("Apple", 3);
console.log(cart.getTotalItems());

// 9. RestaurantMenu კლასი
class RestaurantMenu {
    constructor(items) {
        this.menu = new Map(items);
    }
    getItemPrice(item) {
        return this.menu.get(item);
    }
}
const menu = new RestaurantMenu([["Pizza", 12]]);
console.log(menu.getItemPrice("Pizza"));

// 10. StudentGrades კლასი
class StudentGrades {
    constructor(grades) {
        this.grades = new Map(grades);
    }
    getTopStudent() {
        let topStudent = "";
        let maxScore = -Infinity;
        this.grades.forEach((score, student) => {
            if (score > maxScore) {
                maxScore = score;
                topStudent = student;
            }
        });
        return topStudent;
    }
}
class Grades {
    constructor() {
        this.grades = [];
    }

    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
        } else {
            throw new Error("Grade must be between 0 and 100.");
        }
    }

    getTopGrade() {
        if (this.grades.length === 0) {
            throw new Error("No grades available.");
        }
        return Math.max(...this.grades);
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            throw new Error("No grades available.");
        }
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return (sum / this.grades.length).toFixed(2);
    }
}

// Grades კლასის გამოყენება
const grades = new Grades();
grades.addGrade(85);
grades.addGrade(92);
grades.addGrade(78);
grades.addGrade(96);

console.log("Top Grade:", grades.getTopGrade());
console.log("Average Grade:", grades.getAverageGrade());
