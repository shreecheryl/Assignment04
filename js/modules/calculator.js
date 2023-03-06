// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(x, y, z, calc) {
    alert(`${x} ${calc} ${y} = ${z}`)
}

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
function add(x,y) {
    let z = x + y;
    calculate(x,y,z,"+");
}
// SUBTRACT FUNCTION
function subtract(x,y) {
    let z = x - y;
    calculate(x,y,z,"-");
}
// MULTIPLY FUNCTION
function multiply(x,y) {
    let z = x * y;
    calculate(x,y,z,"*");
}

// DIVIDE FUNCTION
function divide(x,y) {
    let z = x / y;
    calculate(x,y,z,"/");
}

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, subtract, multiply, divide}