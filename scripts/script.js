document.getElementById("year").innerHTML = new Date().getFullYear()
document.getElementById("updated").innerHTML = "Last updated: "+document.lastModified


document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var topnav = document.getElementById('myTopnav');
    var icon = document.getElementById('menu-icon');

    menuToggle.addEventListener('click', function () {
        if (topnav.className === 'topnav') {
            topnav.className += ' responsive';
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            topnav.className = 'topnav';
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Check if localStorage already has a visit count
if (localStorage.getItem('visitCount')) {
    // If yes, retrieve and increment the count
    let count = parseInt(localStorage.getItem('visitCount'));
    count++;
    localStorage.setItem('visitCount', count);
    document.getElementById('visit-count').textContent = count;
} else {
    // If not, initialize the count to 1 and store it in localStorage
    localStorage.setItem('visitCount', 1);
    document.getElementById('visit-count').textContent = 1;
}
function checkPassword() {
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("password-confirm");
    const message = document.getElementById("password-message");

    if (password.value !== passwordConfirm.value) {
        message.textContent = "Passwords do not match.";
    } else {
        message.textContent = "";
    }
}

function updateRatingValue() {
    const rating = document.getElementById("rating");
    const ratingValue = document.getElementById("rating-value");
    ratingValue.textContent = rating.value;
}