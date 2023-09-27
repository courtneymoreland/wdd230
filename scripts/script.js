document.getElementById("year").innerHTML = new Date().getFullYear()
document.getElementById("updated").innerHTML = "Last updated: "+document.lastModified

function myFunction() {
    var x = document.getElementById("myTopnav");
    var icon = document.getElementById("menu-icon");
    if (x.className === "topnav") {
        x.className += " responsive";
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        x.className = "topnav";
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
}
