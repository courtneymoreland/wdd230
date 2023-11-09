// JSON file url
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Add event listeners to filters
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelector('div.cards'); // Select the output container element

    // No filter button
    document.querySelector("#no-filter").addEventListener("click", () => {
        // Clear cards
        cards.innerHTML = "";
        // Get prophets data and display
        getProphetData().then(prophets => displayProphets(prophets));
    });

    // Served more than a decade filter
    document.querySelector("#decade-filter").addEventListener("click", () => {
        // Clear cards
        cards.innerHTML = "";
        // Get prophets data
        getProphetData().then(prophets => {
            // Filter by years of service
            const filter = prophets.filter((prophet) => {
                // Only more than ten years
                return prophet.length >= 10;
            });
            // Display prophets
            displayProphets(filter);
        });
    });

    // Get prophets data and display
    getProphetData().then(prophets => displayProphets(prophets));
});

/**
 * Gets the Prophets data from a JSON request
 */
async function getProphetData() {
    // Fetch data from the specified URL and wait for response
    const response = await fetch(url);
    // Get JSON data from the response
    const data = await response.json();
    return data.prophets; // Return prophets data
}

/**
 * Loop through every prophet in the Array and create an HTML card
 * @param {Array} prophets - Array of prophets
 */
function displayProphets(prophets) {
    const cards = document.querySelector('div.cards'); // Select the output container element

    prophets.forEach((prophet, number) => {
        let card = document.createElement('section');
        let cardbody = document.createElement('div');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let pbirth = document.createElement('p');
        let pdeath = document.createElement('p');
        let pyears = document.createElement('p');
        let pchildren = document.createElement('p');
        let page = document.createElement('p');
        
        // Add card styles
        card.setAttribute("class", "card");
        cardbody.setAttribute("class", "card-body");

        // Build the h2 content to show the prophet's full name
        h2.textContent = `${prophet.name} ${prophet.lastname} - ${toOrdinalString(number + 1)} Latter-day President`;
        h2.setAttribute("class", "card-title");
    
        // Build the image portrait by setting attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${toOrdinalString(number + 1)} Latter-day President`);
        portrait.setAttribute('loading', 'lazy');

        // Build and append the p content to show date and place of birth
        pbirth.innerText = `Born on ${prophet.birthdate} in ${prophet.birthplace}`;
        pbirth.setAttribute("class", "card-text");

        // Build the p content to show date of death
        pdeath.innerText = `Date of death: ${(prophet.death === null) ? "N/A" : prophet.death}`;
        pdeath.setAttribute("class", "card-text");

        // Build and append the p content to show years as a prophet
        pyears.innerText = `Years as Prophet: ${prophet.length}`;
        pyears.setAttribute("class", "card-text");

        // Build the p content to show the number of children
        pchildren.innerText = `Number of children: ${prophet.numofchildren}`;
        pchildren.setAttribute("class", "card-text");

        // Build the p content to show the age
        page.innerText = `Age: ${getAge(prophet.birthdate, prophet.death)}`;
        page.setAttribute("class", "card-text");

        // Append the card body with the created elements
        cardbody.appendChild(h2);
        cardbody.appendChild(page);
        cardbody.appendChild(pbirth);
        cardbody.appendChild(pdeath);
        cardbody.appendChild(pyears);
        cardbody.appendChild(pchildren);

        // Append the section (card) with the created elements
        card.appendChild(portrait);
        card.appendChild(cardbody);

        cards.appendChild(card);
    });
}

/**
 * Converts the Prophet index in the array to an ordinal number
 * @param {Number} number - Prophet index in the array 
 * @returns String
 */
function toOrdinalString(number) {
    if (number == 1) { return "1st"; }
    else if (number == 2) { return "2nd"; }
    else if (number == 3) { return "3rd"; }
    else { return `${number}th`; }
}

/**
 * Returns the age at death
 * @param {String} birth - String date of birth 
 * @param {String} death - String date of death
 * @returns Number
 */
function getAge(birth, death) {
    if (death === null) { death = Date.now(); }
    const birthdate = new Date(birth);
    const deathdate = new Date(death);
    let age = deathdate.getFullYear() - birthdate.getFullYear();
    if (deathdate.getMonth() < birthdate.getMonth()) { age -= 1; }
    else if (deathdate.getMonth() == birthdate.getMonth()) {
        if (deathdate.getDate() < birthdate.getDate()) { age -= 1; }
    }
    return age;
}