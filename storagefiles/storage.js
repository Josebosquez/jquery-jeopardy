// Define a global count variable
let count = 0;

// Check local storage for a previous count
const storedCount = localStorage.getItem('count');
if (storedCount !== null) {
    count = parseInt(storedCount);   
}

// Add one to count
count++;

// Store the new count
localStorage.setItem('count', count);

// Display count on the DOM
document.querySelector('h1').innerText = count;