window.addEventListener('load', function() {
    document.querySelector('.welcome').classList.add('loaded');
});
window.addEventListener('load', function() {
    document.querySelector('.LandingPage').classList.add('loaded');
});




window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});