function calculateAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    return average;
}
let numberArray = [10, 20, 30, 40, 50];
let average = calculateAverage(numberArray);

console.log("The average is:", average);