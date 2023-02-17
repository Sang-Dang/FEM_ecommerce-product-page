// Open cart
$("#header .shopping-cart").click(function () {
    $("section.cart").toggleClass("active");
})

// Toggle main navigation on Mobile screen.
$("#header .toggle").click(function () {
    $("body>header>nav").toggleClass("active");
})

// toggle user-dropdown
$("#header .user").click(function () {
    $(".user-dropdown").toggleClass("active");
})