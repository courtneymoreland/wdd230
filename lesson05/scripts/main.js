// Get references to HTML elements
const input = document.querySelector('#favchap');
const addButton = document.querySelector('#addButton');
const chapterList = document.querySelector('#chapterList');

// Create a click event listener for the Add Chapter button
addButton.addEventListener('click', () => {
    const chapterName = input.value.trim(); // Trim to remove leading/trailing white space

    if (chapterName === '') {
        // Handle empty input
        alert('Please enter a chapter.');
    } else {
        // Create a new list item
        const li = document.createElement('li');

        // Create a delete button for the list item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // Add an event listener to delete the list item when the delete button is clicked
        deleteButton.addEventListener('click', () => {
            chapterList.removeChild(li);
        });

        // Set the text content of the list item and append the delete button
        li.textContent = chapterName;
        li.appendChild(deleteButton);

        // Append the list item to the unordered list
        chapterList.appendChild(li);

        // Clear the input field
        input.value = '';

        // Set focus back to the input field
        input.focus();
    }
});
document.getElementById("year").innerHTML = new Date().getFullYear()
document.getElementById("updated").innerHTML = "Last updated: "+document.lastModified
