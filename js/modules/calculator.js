// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calculate = (x, y, z, calc) => alert(`${x} ${calc} ${y} = ${z}`);

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
const add = (x, y) => calculate(x, y, x + y, "+");

// SUBTRACT FUNCTION
const subtract = (x, y) => calculate(x, y, x - y, "-");

// MULTIPLY FUNCTION
const multiply = (x, y) => calculate(x, y, x * y, "*");

// DIVIDE FUNCTION
const divide = (x, y) => calculate(x, y, x / y, "/");

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, subtract, multiply, divide}