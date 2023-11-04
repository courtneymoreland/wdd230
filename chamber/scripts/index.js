/**
 * Date prototype to get the day as String
 * @returns String
 */
Date.prototype.getDayString = function() {

    // Array with every day of the week as a string
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Return the proper day as string with today's index (0-6)
    return days[this.getDay()];
}

/**
 * Date prototype to get the month as String
 * @returns String
 */
Date.prototype.getMonthString = function() {

    // Array with every month
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    // Return month as string
    return months[this.getMonth()];
}

/**
 * Returns the same capitalized string
 * @returns Capitalized String
 */
String.prototype.capitalize = function() {
    // split the string by spaces
    let arr = this.split(" ");
    // capitalized array
    let capArr = [];
    // loop through every word
    arr.forEach(word => {
        // capitalize word
        capArr.push(`${word.slice(0, 1).toUpperCase()}${word.slice(1)}`);
    });
    // join array and return
    return capArr.join(" ");
}

document.addEventListener("DOMContentLoaded", () => {

    // Hamburger menu
    const navLinks = document.querySelector(".nav-links");
    const menu = document.querySelector("#menu");
    // Current date paragraph
    const date = document.querySelector("#date-section p");
    // Date object
    const dateObj = new Date();
    // Last modified paragraph
    const lastModified = document.querySelector("#lastModified");
    // Full year paragraph
    const fullYear = document.querySelector("#footer-bottom-content p:first-child");

    // Check whether it's Monday or Tuesday to show banner
    const day = dateObj.getDay();
    if(day > 0 && day < 3) { 
        // Create container for banner
        let banner = document.createElement("section");
        banner.classList.add("banner");
        // Create h4 for the content
        let bannerContent = document.createElement("h4");
        bannerContent.innerText = "🤝 Come join us for the chamber meet and greet Wednesday at 7:00 pm 🤝";
        // Append elements
        banner.append(bannerContent);
        document.querySelector("header").prepend(banner);
    }
});
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

  // Function to calculate the difference in days between two dates
  function daysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    return Math.round(Math.abs((date1 - date2) / oneDay));
  }

  // Function to format the message based on the number of days
  function formatVisitMessage(days) {
    if (days === 0) {
      return "Back so soon! Awesome!";
    } else if (days === 1) {
      return "You last visited 1 day ago.";
    } else {
      return `You last visited ${days} days ago.`;
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    // Get the last visit date from localStorage
    const lastVisitTimestamp = localStorage.getItem('lastVisit');

    if (lastVisitTimestamp) {
        const lastVisitDate = new Date(parseInt(lastVisitTimestamp));
        const currentDate = new Date();
        
        // Check if the date parsing is valid
        if (!isNaN(lastVisitDate) && !isNaN(currentDate)) {
            const timeDifference = currentDate - lastVisitDate;
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            if (daysDifference === 0) {
                // If the user visited less than a day ago
                document.getElementById('lastvisitD').textContent = 'Back so soon! Awesome!';
            } else {
                // If the user visited more than a day ago
                const dayOrDays = daysDifference === 1 ? 'day' : 'days';
                document.getElementById('lastvisitD').textContent = `You visited this webpage ${daysDifference} ${dayOrDays} ago!`;
            }
        } else {
            // Handle the case where date parsing is invalid
            document.getElementById('lastvisitD').textContent = 'Welcome back! Let us know if you have any questions.';
        }
    } else {
        // If this is the user's first visit
        document.getElementById('lastvisitD').textContent = 'Welcome! Let us know if you have any questions.';
    }

    // Update the last visit date in localStorage
    localStorage.setItem('lastVisit', Date.now().toString());
});
    // Function to get the current date and time in the desired format
    function getCurrentDateTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    // Set the value of the hidden timestamp field
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        timestampField.value = getCurrentDateTime();
    }