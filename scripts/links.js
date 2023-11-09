// Define the base URL and the URL of the links.json data file
const baseURL = 'https://courtney.github.io/wdd230/'; // Update with your actual URL
const linksURL = baseURL + 'data/links.json';

// Asynchronous function to fetch links data
async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.lessons);
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

// Function to display the links dynamically
function displayLinks(weeks) {
    const lessonList = document.getElementById('lesson-list');

    weeks.forEach(week => {
        const lessonItem = document.createElement('li');
        lessonItem.textContent = `Lesson ${week.lesson}:`;

        const link = document.createElement('a');
        link.href = baseURL + week.links[0].url;
        link.textContent = week.links[0].title;

        lessonItem.appendChild(link);
        lessonList.appendChild(lessonItem);
    });
}

// Call the getLinks function to fetch and display the links
getLinks();
