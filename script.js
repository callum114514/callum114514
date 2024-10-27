// script.js

document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > navHeight) {
            nav.style.backgroundColor = 'rgba(51, 51, 51, 0.9)';
        } else {
            nav.style.backgroundColor = 'transparent';
        }
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offsetTop = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });
});
