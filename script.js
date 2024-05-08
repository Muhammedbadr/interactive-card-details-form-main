// Select the form element
const form = document.querySelector('.form');

// Add event listener to form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Select all input fields
    const inputs = document.querySelectorAll('.form__input');

    // Flag to track if any input is empty
    let isEmpty = false;

    // Loop through each input field
    inputs.forEach(function(input) {
        // Check if the input value is empty or consists only of whitespace
        if (!input.value.trim()) {
            isEmpty = true;
            return;
        }
    });

    // If any input is empty, display an alert
    if (isEmpty) {
        alert('Please fill out all fields.');
    } else {
        // Otherwise, submit the form
        form.submit();
    }
});
