// Select the form element
const form = document.querySelector('.form');

// Add event listener to form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Select all input fields
    const inputs = document.querySelectorAll('.form__input');
    const invalids = document.querySelectorAll('.invalid');
    
    // Get the value of the name input
    const nameInput = document.getElementById('name').value;
    const invalid1 = document.querySelector('.invalid--1');
    
    // Get the value of the number input
    const numberInput = document.getElementById('number').value;
    const invalid2 = document.querySelector('.invalid--2');

    // Get the value of the date inputvarc
    var  monthInput = document.querySelector('input[name="date_month"]').value;
    var yearInput = document.querySelector('input[name="date_year"]').value;
    const invalid3 = document.querySelector(".invalid--3")
    
    // Get the value of the pin input
    const pin = document.getElementById("pin").value
    const invalid4 = document.querySelector(".invalid--4")

    // complete
    const complete =document.querySelector(".complete")
    // Check if the name input contains any numbers
    if (/\d/.test(nameInput)) {
        invalid1.textContent = "Wrong format, letters only";
    } else if (!nameInput.trim()) {
        invalid1.textContent = "Can't be blank";
    } else {
        // If the name is valid, remove the error message
        invalid1.textContent = "";
        const card__person = document.querySelector(".card__person")
        card__person.textContent = nameInput
    }

    /// Check if the number input contains any letters
    
    if (!numberInput.trim()) {
        invalid2.textContent = "Can't be blank";
    }else if (numberInput.length !== 19) {
        invalid2.textContent = "Wrong format, please enter 16 digits";
    } else {
        // If the number is valid, remove the error message
        invalid2.textContent = "";
        const cardNumberDisplay = document.querySelector('.card__number');
        cardNumberDisplay.textContent = numberInput;
    }


    // Check if the date input contains any letters
    
    if (/\D/.test(monthInput) || /\D/.test(yearInput) ) {
        invalid3.textContent = "Wrong format, numbers only";
    }
    else if (monthInput.trim() === '' || yearInput.trim() === '') {
        invalid3.textContent = "Can't be blank";
    }
    else {
        // If the date is valid, remove the error message
        invalid3.textContent = "";
        const card__date__month = document.querySelector(".card__date--month")
        card__date__month.textContent = monthInput;
        const card__date__year = document.querySelector(".card__date--year")
        card__date__year.textContent = yearInput;
    }

    // Check if the pin input contains any letters
    
    if (/\D/.test(pin)) {
        invalid4.textContent = "Wrong format, numbers only";
        } else if (!pin.trim()) {
            invalid4.textContent = "Can't be blank";
    } else if (pin.length <= 2) {
        invalid4.textContent = "Please shorten this text to 3 characters ";
    } else {
        // If the pin is valid, remove the error message
        invalid4.textContent = "";
        const card__pin = document.querySelector(".card__pin")
        card__pin.textContent = pin;
    }

    if (invalid1.textContent === "" && invalid2.textContent === "" && invalid3.textContent === "" && invalid4.textContent === "") {
        // Remove the hidden class from the complete element
        complete.classList.remove('hidden');
        // Reset the form
        form.reset();
    }
    
});

document.getElementById('number').addEventListener('input', function (e) {
    let inputValue = e.target.value.replace(/\D/g, '') // Remove non-numeric characters
    let formattedValue = formatCardNumber(inputValue);
    e.target.value = formattedValue;
});

function formatCardNumber(inputValue) {
    let formattedValue = '';
    for (let i = 0; i < inputValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' '; // Add a space after every four characters
        }
        formattedValue += inputValue[i];
    }
    return formattedValue;
}



