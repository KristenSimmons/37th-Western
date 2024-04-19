const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(slideshow => {
    const images = slideshow.querySelectorAll('img');
    let currentIndex = 0;

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

    showSlide(currentIndex);

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


// Function to initialize the search functionality
function initializeSearch() {
    const form = document.getElementById('property-search-form');
    const resetButton = document.getElementById('reset-button');
    const propertyResults = document.getElementById('property-results');

    // Hide the reset button initially
    resetButton.style.display = 'none';

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const bedrooms = parseInt(document.getElementById('bedrooms').value);
        const guests = parseInt(document.getElementById('guests').value);

        // Filter properties based on the search criteria
        const filteredProperties = filterProperties(guests);

        // Display the filtered properties
        displayProperties(filteredProperties);

        // Show the reset button
        resetButton.style.display = 'block';

        // Show the property results
        propertyResults.style.display = 'block';
    });

    // Event listener for the reset button
    resetButton.addEventListener('click', function() {
        // Reset the form
        form.reset();

        // Hide the property results
        propertyResults.style.display = 'none';

        // Hide the reset button
        resetButton.style.display = 'none';
    });
}

// Function to filter properties based on the number of guests
function filterProperties(guests) {
    return properties.filter(property => {
        return property.guests >= guests;
    });
}

// Function to display the filtered properties
function displayProperties(properties) {
    const propertyResultsDiv = document.getElementById('property-results');
    propertyResultsDiv.innerHTML = '';

    properties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('results-images');
        propertyDiv.innerHTML = `
            <h3>${property.name}</h3>
            <p>${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms, Max ${property.guests} guests</p>
            <img src="${property.imageUrl}" alt="Property Image" class="results">
        `;
        propertyResultsDiv.appendChild(propertyDiv);
    });
}

const properties = [
    { 
        name: 'Brookhaven', 
        bedrooms: 5, 
        bathrooms: 3.5,
        guests: 10, 
        availability: true,
        imageUrl: 'img/brkhvnfront.png',
    },
    { 
        name: 'Farmhouse', 
        bedrooms: 6, 
        bathrooms: 3,
        guests: 12, 
        availability: true,
        imageUrl: 'img/farmhousefront.png',
    },
    { 
        name: 'Plaza', 
        bedrooms: 3, 
        bathrooms: 2,
        guests: 6, 
        availability: true,
        imageUrl: 'img/plazafront.png',
    },
    { 
        name: 'Downtown', 
        bedrooms: 3, 
        bathrooms: 3,
        guests: 6, 
        availability: true,
        imageUrl: 'img/sosafront.png',
    },
    { 
        name: 'Norman', 
        bedrooms: 4, 
        bathrooms: 3.5,
        guests: 8, 
        availability: true,
        imageUrl: 'img/acresfront.png',
    },
];

initializeSearch();
