// 1. Button click to change text and background color
const changeTextButton = document.getElementById('changeTextButton');
changeTextButton.addEventListener('click', () => {
    document.body.style.backgroundColor = '#e0f7fa'; // Change background color
    changeTextButton.innerText = 'HOME OF THE BEST PRODUCTS'; // Change button text
    changeTextButton.style.color = '#FFFFFF'; // Change button text color
});

// 2. Image hover effects in the gallery
const productImages = document.querySelectorAll('.product-image');
productImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)'; // Zoom in on hover
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)'; // Return to original size
    });
});

// 3. Form validation and real-time feedback
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission until validation

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Clear previous feedback
    formFeedback.textContent = '';

    let valid = true;

    // Check if the name field is empty
    if (name === '') {
        formFeedback.textContent += 'Name is required.\n';
        valid = false;
    }

    // Check email format using regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        formFeedback.textContent += 'Please enter a valid email address.\n';
        valid = false;
    }

    // Check password strength
    if (password.length < 8) {
        formFeedback.textContent += 'Password must be at least 8 characters long.\n';
        valid = false;
    }

    if (valid) {
        formFeedback.textContent = 'Form submitted successfully! 🎉';
        formFeedback.style.color = 'green';
    } else {
        formFeedback.style.color = 'red';
    }
});

// 4. Real-time feedback on email field
const emailField = document.getElementById('email');
emailField.addEventListener('input', () => {
    const email = emailField.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(email)) {
        emailField.style.borderColor = 'green';
    } else {
        emailField.style.borderColor = 'red';
    }
});

// 5. Real-time password feedback
const passwordField = document.getElementById('password');
passwordField.addEventListener('input', () => {
    if (passwordField.value.length >= 8) {
        passwordField.style.borderColor = 'green';
    } else {
        passwordField.style.borderColor = 'red';
    }
});
