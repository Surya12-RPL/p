// Smooth scrolling for anchor links in navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (validateForm()) {
        // Simulate form submission (replace with actual form submission logic)
        alert('Form submitted successfully!');
        form.reset();
    }
});

function validateForm() {
    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === '') {
        isValid = false;
        setErrorFor(nameInput, 'Name cannot be blank');
    } else {
        setSuccessFor(nameInput);
    }

    // Validate email
    if (emailInput.value.trim() === '') {
        isValid = false;
        setErrorFor(emailInput, 'Email cannot be blank');
    } else if (!isValidEmail(emailInput.value.trim())) {
        isValid = false;
        setErrorFor(emailInput, 'Invalid email format');
    } else {
        setSuccessFor(emailInput);
    }

    // Validate message
    if (messageInput.value.trim() === '') {
        isValid = false;
        setErrorFor(messageInput, 'Message cannot be blank');
    } else {
        setSuccessFor(messageInput);
    }

    return isValid;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email) {
    // Basic email validation using regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
