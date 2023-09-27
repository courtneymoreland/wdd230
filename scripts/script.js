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

