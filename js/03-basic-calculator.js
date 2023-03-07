// IMPORT THE MODULE
import {add, subtract, multiply, divide} from './modules/calculator.js'

let x, y, operation;

do {
// COLLECT FIRST NUMBER FROM USER
    x = parseFloat(prompt("Enter a number"));

// COLLECT SECOND NUMBER FROM USER
    y = parseFloat(prompt("Enter a second number"));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    operation = prompt("What operation do you want to perform? (+, -, * or /)");

} while (operation != "+" && operation != "-" && operation != "*" && operation != "/");

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
switch (operation) {
    case "+":
        add(x, y);
        break;
    case "-":
        subtract(x, y);
        break;
    case "*":
        multiply(x, y);
        break;
    default:
        divide(x, y);
}