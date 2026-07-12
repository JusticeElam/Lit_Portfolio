// =========================================
// MOBILE SIDE NAVIGATION
// =========================================

const hamburger = document.querySelector(".hamburger");
const sideNav = document.querySelector(".side-nav");
const closeBtn = document.querySelector(".fa-xmark");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".side-nav a");

// Open Side Menu
hamburger.addEventListener("click", () => {
    sideNav.classList.add("active");
    overlay.classList.add("active");
});

// Close Side Menu Function
function closeMenu() {
    sideNav.classList.remove("active");
    overlay.classList.remove("active");
}

// Close Button
closeBtn.addEventListener("click", closeMenu);

// Close When Clicking Overlay
overlay.addEventListener("click", closeMenu);

// Close Menu After Clicking a Navigation Link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});



// =========================================
// EMAILJS INITIALIZATION
// =========================================

emailjs.init("RgZ2cP17R_vlwRfjx");



// =========================================
// CONTACT FORM
// =========================================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Get Form Values
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const country = document.getElementById("country").value.trim();

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    )?.value;

    const message = document.getElementById("message").value.trim();


    // Validation
    if (
        name === "" ||
        email === "" ||
        country === "" ||
        !gender ||
        message === ""
    ) {

        alert("Please fill in all the fields.");

        return;
    }


    // Send Email
    emailjs.send(

        "service_n5xl7f9",

        "template_dibx363",

        {
            name: name,
            email: email,
            country: country,
            gender: gender,
            message: message
        }

    )

    .then(function () {

        alert("Message sent successfully!");

        form.reset();

    })

    .catch(function (error) {

        console.log("EmailJS Error:", error);

        alert("Failed to send message. Please try again.");

    });

});