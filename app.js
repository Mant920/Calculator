// Get references to the display elements
const content = document.createElement("data");
const answer = document.createElement("data");
const output1 = document.querySelector(".top");
const output2 = document.querySelector(".bottom");
const buttons = document.querySelectorAll("button");

// Variables to store the current input and result
let num1 = "";
let operator = "";
let num2 = "";
let ans = "";

// Operator symbols map
const operatorSymbols = {
    "add": "+",
    "subtract": "−",
    "multiply": "×",
    "divide": "÷"
};

// Append the initial content to the screen
content.textContent = num1 + operator + num2;
answer.textContent = ans;

output1.appendChild(content);
output2.appendChild(answer);

// Functions for basic operations using strings
function add(a, b) {
    return (parseFloat(a) + parseFloat(b)).toString();
}

function subtract(a, b) {
    return (parseFloat(a) - parseFloat(b)).toString();
}

function multiply(a, b) {
    return (parseFloat(a) * parseFloat(b)).toString();
}

function divide(a, b) {
    if (b === "0") return "Error";  // Prevent division by zero
    return (parseFloat(a) / parseFloat(b)).toString();
}

// Function to perform the operation based on the operator symbol
function operate(a, op, b) {
    switch (op) {
        case "+":
            return add(a, b);
        case "−":
            return subtract(a, b);
        case "×":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
        default:
            return "Error";
    }
}

// Clear function to reset the input and output
function clear() {
    num1 = "";
    operator = "";
    num2 = "";
    ans = "";
    content.textContent = "";  // Clear the top display
    answer.textContent = "";  // Clear the bottom display
}

// Update the display content
function updateDisplay() {
    content.textContent = num1 + operator + num2;  // Update the expression at the top
    answer.textContent = ans;  // Update the result at the bottom
}

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("clearbtn")) {
            // Clear button clicked
            clear();
        } else if (button.classList.contains("undobtn")) {
            // Undo button clicked
            if (num2) {
                num2 = num2.slice(0, -1);  // Undo last character from num2
            } else if (operator) {
                operator = "";  // Remove the operator
            } else if (num1) {
                num1 = num1.slice(0, -1);  // Undo last character from num1
            }
            updateDisplay();
        } else if (button.classList.contains("equal")) {
            // Equal button clicked
            if (num1 && operator && num2) {
                ans = operate(num1, operator, num2); // Perform calculation
                updateDisplay(); // Keep the expression at the top and show the answer at the bottom
            }
        } else if (button.classList.contains("float")) {
            // Decimal point button clicked
            if (operator && !num2.includes(".")) {
                // Allow decimal point only in num2
                num2 += ".";
            } else if (!operator && !num1.includes(".")) {
                // Allow decimal point only in num1
                num1 += ".";
            }
            updateDisplay();
        } else if (["add", "subtract", "multiply", "divide"].includes(button.id)) {
            // Operator button clicked
            if (num1 && num2) {
                ans = operate(num1, operator, num2);
                num1 = ans; // Update num1 with result
                num2 = "";
            }
            operator = operatorSymbols[button.id]; // Update operator symbol
            updateDisplay();
        } else {
            // Number button clicked
            if (operator) {
                num2 += button.textContent;
            } else {
                num1 += button.textContent;
            }
            updateDisplay();
        }
    });
});
