function Car(model, year, color, manufacturer) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.manufacturer = manufacturer;

    this.getCarInfo = function() {
        return `Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Manufacturer: ${this.manufacturer}`;
    };
}


const car1 = new Car('Model S', 2020, 'Red', 'Tesla');
const car2 = new Car('Mustang', 2018, 'Blue', 'Ford');

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());