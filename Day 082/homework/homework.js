// 1
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// 2
let num = 2;
while (num <= 10) {
    console.log(num);
    num += 2;
}

// 3
let sum = 0;
let n = 1;
while (n <= 10) {
    sum += n;
    n++;
}
console.log(sum);

// 4
let word = "hello";
let index = 0;
while (index < word.length) {
    console.log(word[index]);
    index++;
}

// 5
let negative = -5;
while (negative <= -1) {
    console.log(negative);
    negative++;
}

// 6
let a = 0, b = 1, temp;
let count = 0;
while (count < 5) {
    console.log(a);
    temp = a + b;
    a = b;
    b = temp;
    count++;
}

// 7
let j = 10;
while (j > 0) {
    console.log(j);
    j--;
}

// 8
let randomNum;
do {
    randomNum = Math.floor(Math.random() * 10);
    console.log(randomNum);
} while (randomNum !== 5);

// 9
let charLine = "";
let k = 1;
while (k <= 5) {
    charLine += "*";
    console.log(charLine);
    k++;
}

// 10
let product = 1;
let numProduct = 1;
while (numProduct <= 5) {
    product *= numProduct;
    numProduct++;
}
console.log(product);

// 11
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 12
let sumFor = 0;
for (let j = 1; j <= 10; j++) {
    sumFor += j;
}
console.log(sumFor);

// 13
for (let k = 1; k <= 5; k++) {
    console.log("Hello " + k);
}

// 14
for (let l = 5; l >= 1; l--) {
    console.log(l);
}

// 15
for (let m = 0; m < 10; m++) {
    if (m % 2 === 0) {
        console.log(m + " is even");
    } else {
        console.log(m + " is odd");
    }
}

// 16
let sumOdd = 0;
for (let n = 1; n <= 10; n++) {
    if (n % 2 !== 0) {
        sumOdd += n;
    }
}
console.log(sumOdd);

// 17
for (let o = 1; o <= 5; o++) {
    console.log("*".repeat(o));
}

// 18
let factorial = 1;
for (let p = 1; p <= 5; p++) {
    factorial *= p;
}
console.log(factorial);

// 19
for (let q = 1; q <= 10; q++) {
    console.log("Square of " + q + " is " + (q * q));
}

// 20
let countA = 0;
for (let r = 0; r < 5; r++) {
    countA++;
}
console.log("Count is: " + countA);
