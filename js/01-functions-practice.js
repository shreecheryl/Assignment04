//STEP 1

function halfNumber(num) {
    console.log(`Half of ${num} is ${(num / 2).toFixed(2)}.`);
}
halfNumber(parseFloat(prompt("Enter a number")));

//STEP 2

function squareNumber(num) {
    console.log(`The result of squaring the number ${num} is ${num * num}.`);
}
squareNumber(parseInt(prompt("Enter a number")));

//STEP 3

function percentOf() {
    let x = parseInt(prompt("Enter a number"));
    let y = parseInt(prompt("Enter a second number"));
    let percentage = ((x / y) * 100).toFixed(2);
    console.log(`${x} is ${percentage}% of ${y}.`);
}
percentOf();

//STEP 4

function findModulus() {
    let x = parseInt(prompt("Enter a number"));
    let y;
    do {
        y = parseInt(prompt("Enter a second number smaller than the first"));
    } while (y > x);
    let modulus = x % y;
    console.log(`${modulus} is the modulus of ${x} and ${y}.`);
}
findModulus();

//STEP 5