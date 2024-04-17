const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(slideshow => {
    const images = slideshow.querySelectorAll('img');
    let currentIndex = 0;

    // Function to show the current slide
    const showSlide = (index) => {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
        currentIndex = index;
    };

    // Show the first slide initially
    showSlide(currentIndex);

    // Event listeners for previous and next buttons
    slideshow.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('prev')) {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showSlide(currentIndex);
        } else if (target.classList.contains('next')) {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        }
    });
});


const form = document.getElementById('property-search-form');
// Add event listener for form submission
form.addEventListener('submit', function(event) {
 // Prevent the default form submission behavior
event.preventDefault();
// Get the values of form fields
const bedrooms = document.getElementById('bedrooms').value;
const guests = document.getElementById('guests').value;
const checkIn = document.getElementById('check-in').value;
const checkOut = document.getElementById('check-out').value;

if (!bedrooms || !guests || !checkIn || !checkOut) {
    alert('Please fill in all required fields.');
    return;
    }
// Process the query 
const searchQuery = {
    bedrooms: bedrooms,
    guests: guests,
    checkIn: checkIn,
    checkOut: checkOut,
    }
    clearForm();
});

function clearForm() {
    document.getElementById('bedrooms').value = '';
    document.getElementById('guests').value = ''
    document.getElementById('check-in').value = '';
    document.getElementById('check-out').value = '';
    ;
}

document.getElementById('property-search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const bedrooms = parseInt(document.getElementById('bedrooms').value);
    const guests = parseInt(document.getElementById('guests').value);

    // Filter properties based on bedrooms and guests count
    const filteredProperties = properties.filter(property => {
        return property.bedrooms >= bedrooms && property.guests >= guests && property.availability;
    });
    console.log('Filtered Properties:', filteredProperties);
    // Display filtered properties
    displayProperties(filteredProperties);
});

function displayProperties(properties) {
    const propertyResultsDiv = document.getElementById('property-results');
    propertyResultsDiv.innerHTML = '';

    properties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('property');
        propertyDiv.innerHTML = `
            <h3>${property.name}</h3>
            <p>Bedrooms: ${property.bedrooms}</p>
            <p>Guests: ${property.guests}</p>
            <p>Availability: ${property.availability ? 'Available' : 'Not available'}</p>
        `;
        propertyResultsDiv.appendChild(propertyDiv);
    });
}

const properties = [
    { name: 'Brookhaven', bedrooms: 5, guests: 10, availability: true },
    { name: 'Farmhouse', bedrooms: 6, guests: 12, availability: true },
    { name: 'Property 3', bedrooms: 2, guests: 4, availability: false }
];
