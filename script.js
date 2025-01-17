ScrollReveal().reveal("#home-items", {
    distance: "10%",
    duration: 2000,
    opacity: 0,
    easing: "ease",
    origin: "top",
});

ScrollReveal().reveal(".main-r", {
    distance: "80px",
    duration: 2000,
    delay: 500,
    opacity: 0,
    easing: "ease",
    origin: "left",
});

//
//
let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateSliderPosition();
}

function updateSliderPosition() {
    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function menuMobShow() {
    const menuMobile = document.getElementById("menu-mobile");

    menuMobile.style.display = "block";
}

function menuMobClose(event) {
    const menuMobile = document.getElementById("menu-mobile");

    menuMobile.style.display = "none";
}
