// const pathName = windows.location.pathName;
// const pageName = pathName.split("/").pop();

// if (pageName === "index.html") {
//   document.getElementById("home").classList.add(".active");
// }
// if (pageName === "index.about") {
//   document.getElementById("about").classList.add(".active");
// }
// if (pageName === "index.html") {
//   document.getElementById("services").classList.add(".active");
// }

const sideMenu = document.getElementById("sidemenu");
const openMenu = document.getElementById("openmenu");
const closeMenu = document.getElementById("closemenu");

openMenu.addEventListener("click", () => {
  if (sideMenu.style.right == "-350px") {
    sideMenu.style.right = "0";
  } else {
    sideMenu.style.right = "-350px";
  }
});
closeMenu.addEventListener("click", () => {
  if (sideMenu.style.right == "0") {
    sideMenu.style.right = "-350px";
  } else {
    sideMenu.style.right = "-350px";
  }
});



let fadeIndex = 0;
let slides = document.querySelectorAll('.fade-slide');
const totalSlides = slides.length;

function moveFadeSlide(step) {
    slides[fadeIndex].classList.remove('fade-active');  // Remove active class from current slide

    fadeIndex = (fadeIndex + step + totalSlides) % totalSlides;  // Calculate the new index

    slides[fadeIndex].classList.add('fade-active');  // Add active class to the new slide
}

// Auto sliding functionality
function autoSlide() {
    moveFadeSlide(1);  // Automatically move to the next slide
}

let slideInterval = setInterval(autoSlide, 3000);  // Change slide every 3 seconds

// Optional: You can stop the automatic sliding if you want
document.querySelector('.fade-slider-container').addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

document.querySelector('.fade-slider-container').addEventListener('mouseout', () => {
    slideInterval = setInterval(autoSlide, 3000);  // Restart auto sliding
});