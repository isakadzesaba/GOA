// 1. Map ინიციალიზაცია
const cities = new Map([
    ["Tbilisi", 1200000],
    ["Batumi", 160000],
    ["Kutaisi", 200000]
]);

// 2. ელემენტის განახლება
cities.set("Tbilisi", 1300000);

// 3. for...of ციკლი
const currencies = new Map([
    ["USD", "Dollar"],
    ["EUR", "Euro"],
    ["GEL", "Lari"]
]);
for (const [code, name] of currencies) {
    console.log(`${code}: ${name}`);
}

// 4. ორი Map-ის გაერთიანება
const prices = new Map([["Apple", 2], ["Banana", 1]]);
const quantities = new Map([["Apple", 5], ["Banana", 10]]);
const totalPrices = new Map();
prices.forEach((price, product) => {
    const quantity = quantities.get(product) || 0;
    totalPrices.set(product, price * quantity);
});
console.log(totalPrices);

// 5. Map-ის კლონი
const countries = new Map([["Georgia", "Tbilisi"], ["France", "Paris"]]);
const clonedCountries = new Map(countries);

// 6. ელემენტების დათვლა
const games = new Map([["Game 1", 9.2], ["Game 2", 8.5]]);
console.log(games.size);

// 7. ელემენტის წაშლა
const products = new Map([["Milk", 1.5], ["Bread", 1.0]]);
products.forEach((_, product) => {
    products.delete(product);
    console.log(`${product} removed`);
});

// 8. Map გარდაქმნა მასივად
const sports = new Map([["Soccer", 11], ["Basketball", 5]]);
const sportsArray = Array.from(sports);
console.log(sportsArray);

// 9. ძიება მნიშვნელობებით
const animals = new Map([["Lion", "Savannah"], ["Whale", "Ocean"]]);
const savannahAnimals = Array.from(animals).filter(([_, habitat]) => habitat === "Savannah");
console.log(savannahAnimals);

// 10. Reduce-ით დაგროვება
const students = new Map([["Alice", 90], ["Bob", 80]]);
const average = Array.from(students.values()).reduce((a, b) => a + b, 0) / students.size;
console.log(average);
