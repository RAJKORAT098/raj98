// Click Counter
let count = 0;
document.getElementById("clickButton").addEventListener("click", function() {
    count++;
    document.getElementById("counter").textContent = count;
});

document.getElementById("resetButton").addEventListener("click", function() {
    count = 0;
    document.getElementById("counter").textContent = count;
});

// Calculator
function performCalculation(operator) {
    let num1 = parseFloat(document.getElementById("firstNumber").value);
    let num2 = parseFloat(document.getElementById("secondNumber").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("calcResult").textContent = "Please enter numbers";
        return;
    }

    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
        default: result = "Invalid Operation";
    }

    document.getElementById("calcResult").textContent = "Result: " + result;
}

// Image Slider
const images = ["back004.jpg", "back002.jpg", "back003.jpg", "back004.jpg", "back005.jpg"];
let currentIndex = 0;

const sliderImage = document.getElementById("img1");  
document.getElementById("btn3").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length; 
    sliderImage.src = images[currentIndex];
});
