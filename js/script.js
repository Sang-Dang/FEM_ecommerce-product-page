// Toggle main navigation on Mobile screen.
$("body>header>nav>.toggle").click(function () {
    $("body>header>nav").toggleClass("active");
})

// Main Carousel buttons Mobile

const slideContainer = $(".slide-container")[0];
const slides = Array.from($(".slide"));
const prevBtn = $(".slide-arrow-prev")[0];
const nextBtn = $(".slide-arrow-next")[0];

let currentSlide = 0;

prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        slideContainer.scrollTo({
            left: slides[currentSlide].offsetLeft,
            behavior: "smooth"
        });
    }
});

nextBtn.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        slideContainer.scrollTo({
            left: slides[currentSlide].offsetLeft,
            behavior: "smooth"
        });
    }
});

// Open cart
$(".shopping-cart").click(function () {
    $("section.cart").toggleClass("active");
})

// desktop slide switch

const slideDisplay = document.querySelector(".current-slide");
const displayImg = slideDisplay.querySelector("img");
const targetImg = document.querySelector(".slide.active img");
displayImg.src = targetImg.src;

document.querySelectorAll(".slide").forEach(slide => {
    if (window.matchMedia("(min-width: 1000px)")) {
        slide.addEventListener('click', () => {
            let displayImg = slideDisplay.children[0];
            let targetImg = slide.querySelector("img");

            displayImg.src = targetImg.src;

            document.querySelectorAll(".slide").forEach(slide => slide.classList.remove("active"));
            slide.classList.add("active");
        })
    }
})

// amount functionality
const amountInput = $(".select-amount")[0];
$(".add-amount").click(function () {
    if (amountInput.value == "") {
        amountInput.value = "0";
    }
    amountInput.value = parseInt(amountInput.value) + 1;
})


$(".minus-amount").click(function () {
    if (amountInput.value != 0) {
        if (amountInput.value == "") {
            amountInput.value = "0";
        }
        amountInput.value = parseInt(amountInput.value) - 1;
    }
})

amountInput.addEventListener('input', () => {
    if (isNaN(amountInput.value[amountInput.value.length - 1])) {
        amountInput.value = amountInput.value.slice(0, -1);
    }
})

amountInput.addEventListener('blur', () => {
    if (amountInput.value.length == 0) {
        amountInput.value = "0";
    }
})

// Lightbox functionality

function toggleLightbox() {
    if (window.matchMedia("(min-width: 1000px)")) {
        $(window).scrollTop(0);
        if ($("#main-lightbox").hasClass("active")) {
            $("#main-lightbox").empty();
            $("#main-lightbox").removeClass("active");
        } else {
            $(".slide-wrapper:first").clone().appendTo("#main-lightbox");
            $("#main-lightbox").addClass("active");
            $("#close-lightbox").clone().appendTo("#main-lightbox > .slide-wrapper");
        }
    }
}

// main toggle
var current;
$(".current-slide").click(() => {
    toggleLightbox();
    document.querySelectorAll("#main-lightbox .slide").forEach(slide => {
        changeLightboxImage(slide);
    })

    let slides = document.querySelectorAll("#main-lightbox .slide");
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) {
            current = i;
            break;
        }
    }

    lightboxButtons();
})

// lightbox buttons 

function changeLightboxImage(slide) {
    slide.addEventListener('click', () => {
        let slides = document.querySelectorAll("#main-lightbox .slide");

        document.querySelector("#main-lightbox .current-slide img").src = slide.children[0].children[1].src;
        slides.forEach(item => item.classList.remove("active"));
        slide.classList.add("active");
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains("active")) {
                current = i;
                break;
            }
        }
    })
}

function lightboxButtons() {
    let slides = document.querySelectorAll("#main-lightbox .slide");
    document.querySelector("#main-lightbox .slide-arrow-next").addEventListener('click', () => {
        current = (current + 1) % slides.length;
        document.querySelector("#main-lightbox .current-slide img").src = slides[current].children[0].children[1].src;
        slides.forEach(item => item.classList.remove("active"));
        slides[current].classList.add("active");
        console.log(current);
    });
    document.querySelector("#main-lightbox .slide-arrow-prev").addEventListener('click', () => {
        current = (current - 1) % slides.length;
        if (current == -1) {
            current = 3;
        }

        console.log(-1 % 4);
        document.querySelector("#main-lightbox .current-slide img").src = slides[current].children[0].children[1].src;
        slides.forEach(item => item.classList.remove("active"));
        slides[current].classList.add("active");
        console.log(current);
    });
}