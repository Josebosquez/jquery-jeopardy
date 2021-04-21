// Get the input element
const input = $('input');

// Retreive a value from local storage
const prevInputText = window.localStorage.getItem('inputText');

// Set the text input to that value 
if (prevInputText !== null) {
    input.val(prevInputText);
}

// When the value of the input changes
input.change(function () {

    // Store that value in local storage
    window.localStorage.setItem('inputText', input.val());
});