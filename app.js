gsap.fromTo('.socials img', {x: 500}, {x: 0, duration: 1})

// Hamburger Animation
const primaryNav = document.querySelector('nav ul');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility == "false") {
        primaryNav.setAttribute("data-visible", true);
        gsap.to('.mid-stroke', {
            opacity: 0, 
            duration: 0.5,
            onComplete: function () {
                gsap.to('.top-stroke', {
                    rotation: -45,
                    duration: .6
                });

                gsap.to('.bot-stroke', {
                    rotation: 45,
                    duration: .6
                });
            }
        });

        navToggle.style.position = "fixed";

    } else {
        primaryNav.setAttribute("data-visible", false);
        gsap.to('.top-stroke', {
            rotation: 0,
            duration: 1
        });

        gsap.to('.bot-stroke', {
            rotation: 0,
            duration: .6,
            onComplete: function () {
                gsap.to('.mid-stroke', {
                    opacity: 1, 
                    duration: 0.5,
                    });
                }
        });
        navToggle.style.position = "absolute";
    }
});

// Carousel Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });

});

const hiddenElements = document.querySelectorAll('.hidden');
const rightHiddenElements = document.querySelectorAll('.hidden-right');

hiddenElements.forEach((element) => observer.observe(element));
rightHiddenElements.forEach((element) => observer.observe(element));