// Toggle main navigation on Mobile screen.
$("body>header>nav>.toggle").click(function() {
    $("body>header>nav").toggleClass("active");
})

// Main Carousel buttons Mobile
const slides = $("#slide-container>.slide");
var current = 0;

$("#slide-arrow-next").click(function() {
    slides[++current % slides.length].scrollIntoView();
})

$("#slide-arrow-prev").click(function() {
    slides[--current % slides.length].scrollIntoView();
})

// Open cart
$(".shopping-cart").click(function() {
    $("section.cart").toggleClass("active");
})