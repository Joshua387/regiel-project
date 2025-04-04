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
let slides = document.querySelectorAll(".fade-slide");
const totalSlides = slides.length;

function moveFadeSlide(step) {
  slides[fadeIndex].classList.remove("fade-active"); // Remove active class from current slide

  fadeIndex = (fadeIndex + step + totalSlides) % totalSlides; // Calculate the new index

  slides[fadeIndex].classList.add("fade-active"); // Add active class to the new slide
}

// Auto sliding functionality
function autoSlide() {
  moveFadeSlide(1); // Automatically move to the next slide
}

let slideInterval = setInterval(autoSlide, 3000); // Change slide every 3 seconds

// Optional: You can stop the automatic sliding if you want
document
  .querySelector(".fade-slider-container")
  .addEventListener("mouseover", () => {
    clearInterval(slideInterval);
  });

document
  .querySelector(".fade-slider-container")
  .addEventListener("mouseout", () => {
    slideInterval = setInterval(autoSlide, 3000); // Restart auto sliding
  });

function sendToWhatsApp() {
  let whatsappNumber = "+23481416568832348141656883";
  let name = document.getElementById("fullName").value;
  let phone = document.getElementById("phoneNumber").value;
  let email = document.getElementById("email").value;
  let business = document.getElementById("businessName").value;
  let description = document.getElementById("businessDescription").value;

  let message =
    `Full Name: ${name}%0A` +
    `Phone Number: ${phone}%0A` +
    `Email Address: ${email}%0A` +
    `Business Name & Address: ${business}%0A` +
    `Description: ${description}`;

  let whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
  window.open(whatsappURL, "_blank");
}

// Wait for the page to fully load
window.addEventListener("load", function() {
  document.getElementById("preloader").style.display = "none";
  document.querySelector(".content").style.display = "block";
});


// function sendToWhatsApp() {
//   let number = "+2348028762186";
//   let name = document.getElementById("fullName").value;
//   let phone = document.getElementById("phoneNumber").value;
//   let email = document.getElementById("email").value;
//   let business = document.getElementById("businessName").value;
//   let description = document.getElementById("businessDescription").value;

//   let url =
//     "https://wa.me/" + number +
//     "?text" +
//     "Full Name : " +name+
//     "%0a" +
//     "Phone Number : " +phone+
//     "%0a" +
//     "Email Address : " +email+
//     "%0a" +
//     "Business Name : " +business+
//     "%0a" +
//     "Message : " +description+
//     "%0a%0a";

//   window.open(url, '_blank').focus();
// }
