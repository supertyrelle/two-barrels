checklocation();
document.addEventListener('swup:contentReplaced', event => {
    checklocation();
});
console.log(window.location.pathname);


function checklocation() {
    var endpoint = window.location.pathname;
    var overviewLink = document.getElementById("overview-link");
    var whoLink = document.getElementById("who-link");
    var jobsLink = document.getElementById("jobs-link");
    var contactLink = document.getElementById("contact-link");

    if (endpoint == "/index.html") {
        removeactive();
        overview();
        overviewLink.classList.add("active");
    } else if (endpoint == "/who-we-are.html") {
        removeactive();

        whoLink.classList.add("active");
    } else if (endpoint == "/jobs.html") {
        removeactive();

        jobsLink.classList.add("active");
    } else if (endpoint == "/contact.html") {
        removeactive();

        contact();
        contactLink.classList.add("active");
    } else {
        removeactive();
        overview();
        overviewLink.classList.add("active");
    }

    function removeactive() {
        overviewLink.classList.remove("active");
        whoLink.classList.remove("active");
        jobsLink.classList.remove("active");
        contactLink.classList.remove("active");
    }
}

// page transitions!
import Swup from 'swup';
import SwupScrollPlugin from '@swup/scroll-plugin';
const options = {
    // cache: true,
    animateHistoryBrowsing: true,
    plugins: [new SwupScrollPlugin({
        doScrollingRightAway: true,
        animateScroll: true,
        scrollFriction: 0.2,
        scrollAcceleration: 0.06,
    })]
};
const swup = new Swup(options);
// nice smooth scrolling animations!
import AOS from 'aos';
AOS.init();


AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 0, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// typing animation for the front page!
import TypeIt from 'typeit';

function overview() {
    function jobText() {
        const instance = new TypeIt('#replace', {
            strings: ["Work", "Create", "Succeed"],
            speed: 200,
            cursorSpeed: 1400,
            waitUntilVisible: true,
            breakLines: false,
            loop: true,
            loopDelay: 3000,
            waitUntilVisible: true,
            nextStringDelay: 1950
        }).go();
    }
    jobText();

    function ctaScroll() {
        const moreCTA = document.getElementById("more-cta");
        moreCTA.onclick = function () {
            const contentTop = document.getElementById('content-top');
            const contentTopLocation = contentTop.getBoundingClientRect().top + window.pageYOffset;
            const yOffset = -40;

            window.scrollTo({
                top: contentTopLocation + yOffset,
                behavior: 'smooth'
            });
        };
    }
    ctaScroll();
};
window.onload = function () {
    overview();
}
// contact form alert
import Swal from 'sweetalert2';

function contact() {
    var oink = document.getElementById("boink");
    oink.onclick = function () {
        function myFunction() {
            document.getElementById("contact-input").reset();
        }
        myFunction();
        Swal.fire({
            title: 'Message sent',
            text: "Thanks for sending us your message. We'll get back to you as soon as possible!",
            type: 'success',
            confirmButtonText: 'Sounds good',
            timer: 6000,
            customClass: {
                container: 'container-class',
                popup: 'popup',
                header: 'header-class',
                title: 'title-class',
                closeButton: 'close-button-class',
                icon: 'icon-class',
                image: 'image-class',
                content: 'content-class',
                input: 'input-class',
                actions: 'actions-class',
                confirmButton: 'popup-confirm',
                cancelButton: 'cancel-button-class',
                footer: 'footer-class'
            },
            onAfterClose: () => window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })

        });

    };
};