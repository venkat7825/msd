// MSD Website JavaScript

// Mobile menu toggle
function toggleMenu() {
    let menu = document.getElementById("menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


// Welcome message
function welcomeMSD() {
    alert("Welcome to MSD Software Solutions");
}


// Change theme color
function changeColor() {
    document.body.style.backgroundColor = "#f0f8ff";
}


// Contact form validation
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Form submitted successfully");
    return true;
}


// Current year in footer
document.getElementById("year").innerHTML =
    new Date().getFullYear();
