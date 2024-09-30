function manualFilter(callback, array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
function isGreaterThanTen(num) {
    return num > 10;
}

const numbers = [5, 12, 8, 20, 3, 15];
const filteredNumbers = manualFilter(isGreaterThanTen, numbers);

console.log(filteredNumbers);