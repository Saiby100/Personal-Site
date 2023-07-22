// gsap.fromTo('.socials img', {x: 500}, {x: 0, duration: 1})

const primaryNav = document.querySelector('nav ul');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    function rotateTopStroke(degrees) {
        gsap.to('.top-stroke', {
            rotation: degrees,
            duration: 1
        });
    }

    function rotateBotStroke(degrees) {
        gsap.to('.bot-stroke', {
            rotation: degrees,
            duration: 1
        });
    }

    if (visibility == "false") {
        primaryNav.setAttribute("data-visible", true);
        gsap.to('.mid-stroke', {
            opacity: 0, 
            duration: 0.5,
            onComplete: function () {
                gsap.to('.top-stroke', {
                    rotation: -45,
                    duration: 1
                });

                gsap.to('.bot-stroke', {
                    rotation: 45,
                    duration: 1
                });
            }
        });

    } else {
        primaryNav.setAttribute("data-visible", false);
        gsap.to('.top-stroke', {
            rotation: 0,
            duration: 1
        });

        gsap.to('.bot-stroke', {
            rotation: 0,
            duration: 1,
            onComplete: function () {
                gsap.to('.mid-stroke', {
                    opacity: 1, 
                    duration: 0.5,
                    });
                }
        });
    }
});