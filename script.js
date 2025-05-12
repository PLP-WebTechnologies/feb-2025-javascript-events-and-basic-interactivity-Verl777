// 1. Button click to change text
const changeTextButton = document.getElementById('changeTextButton');
changeTextButton.addEventListener('click', () => {
    document.body.style.backgroundColor = '#e0f7fa';
    changeTextButton.innerText = 'Home of the Best Products';
    changeTextButton.style.color = ' #FFFFFF';
});

// 2. Image hover effects in the gallery
const productImages = document.querySelectorAll('.product-image');
productImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// 3. Form validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address!');
        event.preventDefault();
        return;
    }

    // Check password length
    if (password.length < 8) {
        alert('Password must be at least 8 characters long!');
        event.preventDefault();
        return;
    }

    alert('Form submitted successfully!');
});
