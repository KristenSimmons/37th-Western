let slideIndex = 0;
showSlide(slideIndex);

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function showSlide(index) {
    const slides = document.getElementsByClassName('slide');
    if (index >= slides.length) { slideIndex = 0 }
    if (index < 0) { slideIndex = slides.length - 1 }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

// script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form element
    var contactForm = document.getElementById('contactForm');

    // Add submit event listener to the form
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        var formData = new FormData(contactForm);
        var formDataObject = {};
        formData.forEach(function(value, key){
            formDataObject[key] = value;
        });

        // Log form data to the console
        console.log('Form submission:', formDataObject);

        // Clear form fields
        var formElements = contactForm.elements;
        for (var i = 0; i < formElements.length; i++) {
            if (formElements[i].type !== 'submit') { // Exclude submit button
                formElements[i].value = ''; // Clear field value
            }
        }
    });
});

