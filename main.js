const main = document.querySelector('main');
const span_error = document.querySelector('.span__error');
const email_input = document.getElementById('email_input');
const user_email = document.getElementById('user__email');
const submit__button = document.getElementById('submit_button');

// Validate email function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Submit the form and validate
const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email;
    
    // reset classes
    email.classList.remove('error');
    span_error.classList.add('hide');
    
    // Validate email
    if (email.value.trim() !== '' &&  validateEmail(email.value)) {
        // Show success message
        main.classList.add('success');
        // Write user email in the success message
        user_email.textContent = email.value;
        return
    }

    // Show error
    span_error.classList.remove('hide');
    email.classList.add('error');

}

const handleDismiss = () => {
    // Reset form
    email_input.value = '';
    // hide success message
    main.classList.remove('success');
}

email_input.addEventListener('focus', () => {
    submit__button.classList.add('active');
});

email_input.addEventListener('blur', () => {
    submit__button.classList.remove('active');
});