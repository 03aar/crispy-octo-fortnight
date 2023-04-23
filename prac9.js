// Get user input for the two numbers and the operator
const num1 = Number(prompt('Enter the first number'));
const num2 = Number(prompt('Enter the second number'));
const operator = prompt('Enter the operator (+, -, *, /)');

// Perform the calculation based on the operator
let result;
switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    console.error('Invalid operator');
}

// Display the result on the page
document.querySelector('.result').innerHTML = result;
