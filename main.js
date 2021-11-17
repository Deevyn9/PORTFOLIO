const toggleButton = document.getElementsByClassName("toggle-button")[0];const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navBar = document.getElementsByClassName("navbar")[0];


toggleButton.addEventListener('click', () => {
    document.body.classList.toggle("close");
    document.body.classList.toggle("black");
    navbarLinks.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 780) {
    navBar.style.position = "sticky";
    navBar.style.backgroundColor = "black";        
    } else {
    navBar.style.position = "absolute";
    navBar.style.backgroundColor = "var(--nav-bg)";
    }
});