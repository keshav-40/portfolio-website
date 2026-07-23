// Resume Button

let resumeButton = document.getElementById("resumeBtn");

resumeButton.addEventListener("click", function () {
    alert("Resume download feature coming soon!");
});


// About Button

let aboutButton = document.getElementById("aboutBtn");
let moreText = document.getElementById("moreText");

aboutButton.addEventListener("click", function () {
    moreText.style.display = "block";
});


// Dark Mode

let themeButton = document.getElementById("themeBtn");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


// Mobile Menu

let menuButton = document.getElementById("menuBtn");
let navLinks = document.querySelector("nav ul");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show-menu");
});


// Project Modal

let portfolioButton = document.getElementById("portfolioBtn");
let dsaButton = document.getElementById("dsaBtn");
let interviewButton = document.getElementById("interviewBtn");

let projectModal = document.getElementById("projectModal");
let closeModal = document.getElementById("closeModal");

let modalTitle = document.getElementById("modalTitle");
let modalDescription = document.getElementById("modalDescription");


// Portfolio Project

portfolioButton.addEventListener("click", function () {

    modalTitle.textContent = "Personal Portfolio Website";

    modalDescription.textContent =
        "A responsive portfolio website built using HTML, CSS and JavaScript to showcase my skills and projects.";

    projectModal.style.display = "block";
});


// DSA Project

dsaButton.addEventListener("click", function () {

    modalTitle.textContent = "DSA Practice Tracker";

    modalDescription.textContent =
        "A web application to track coding problems, topics, difficulty levels and progress.";

    projectModal.style.display = "block";
});


// Interview Project

interviewButton.addEventListener("click", function () {

    modalTitle.textContent = "Interview Tracker";

    modalDescription.textContent =
        "A productivity tool to track companies, applications, interview rounds and application status.";

    projectModal.style.display = "block";
});


// Close Modal using X button

closeModal.addEventListener("click", function () {

    projectModal.style.display = "none";

});


// Close Modal by clicking outside the white box

projectModal.addEventListener("click", function (event) {

    if (event.target === projectModal) {

        projectModal.style.display = "none";

    }

});
let contactForm = document.getElementById("contactForm");

let formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;


    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill all the fields.";

        formMessage.className = "error";

    } else if (!email.includes("@") || !email.includes(".")) {

        formMessage.textContent = "Please enter a valid email.";

        formMessage.className = "error";
    } else {



        formMessage.textContent = "Message sent successfully!";

        formMessage.className = "success";

        contactForm.reset();


    }

});
let revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {

    revealElements.forEach(function (element) {

        let windowHeight = window.innerHeight;

        let elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

});
let topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
let year = document.getElementById("year");

year.textContent = new Date().getFullYear();
let skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(function (card) {

    card.addEventListener("click", function () {

        card.classList.toggle("selected");

    });

});