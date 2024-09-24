let memory = 0;

// Load memory from localStorage when the page loads
window.onload = function () {
    displayMemory();
};


document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (!isNaN(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLastChar();
    }
});

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === '.' && display.value.includes('.')) return;
    if (display.value.length >= 12) return; // Limit to 12 characters
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Invalid Operation';
    }
}






function calculatePercentage() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function storeMemory() {
    const display = document.getElementById('display');
    try {
        memory = eval(display.value);
        localStorage.setItem('memory', memory);
        clearDisplay();
        displayMemory();
    } catch (error) {
        display.value = 'Error';
    }
}
//  Display the memory value in the memory list
function displayMemory() {
    const memoryList = document.getElementById('memory-list');
    memoryList.innerHTML = '';  // Clear the list
    const storedMemory = localStorage.getItem('memory');
    if (storedMemory) {
        const li = document.createElement('li');
        li.textContent = storedMemory;
        memoryList.appendChild(li);
        alert("Successfully added")
    }
    else {
        const li = document.createElement('li');
        li.textContent = 0;
        memoryList.appendChild(li);
    }
}
function recallMemory() {
    const display = document.getElementById('display');
    const storedMemory = localStorage.getItem('memory');
    if (storedMemory) {
        display.value += storedMemory;
    }
}

function clearMemory() {
    localStorage.removeItem('memory');
    memory = 0;
    displayMemory();
}


function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}


function calculateSin() {
    const display = document.getElementById('display');
    try {
        display.value = Math.sin(toRadians(eval(display.value)));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateCos() {
    const display = document.getElementById('display');
    try {
        display.value = Math.cos(toRadians(eval(display.value)));
    } catch (error) {
        display.value = 'Error';
    }
}