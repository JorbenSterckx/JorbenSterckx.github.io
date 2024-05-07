// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();

// Function to handle smooth scrolling
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
}

// Attach event listeners to each navigation link
document.querySelectorAll('.navbar-nav a, .btn-1').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default action (e.g., following the link)
        const target = this.getAttribute('href'); // Get the target section ID from the href attribute
        smoothScroll(target); // Smoothly scroll to the target section
    });
});

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}