// Function to handle the image slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the next slide
    slideIndex++;

    // Reset to the first slide if at the end
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    // Set the timeout for the next slide (change slide every 5 seconds)
    setTimeout(showSlides, 5000);
}
