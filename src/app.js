// page transitions!
import Swup from 'swup';
const options = {
    // cache: true,
    animateHistoryBrowsing: true,
    containers: ["#swup"]

};
const swup = new Swup(options);

import AOS from 'aos';
AOS.init();

// You can also pass an optional settings object
// below listed default settings
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
// // tilt properties!
// $('.card').tilt({
//     glare: true,
//     maxGlare: 0.08,
//     disableAxis: X,
//     perspective: 2000
// })

// document.querySelectorAll('header a').forEach((elem) => {

//     elem.onmouseenter =
//         elem.onmouseleave = (e) => {

//             const tolerance = 5

//             const left = 0
//             const right = elem.clientWidth

//             let x = e.pageX - elem.offsetLeft

//             if (x - tolerance < left) x = left
//             if (x + tolerance > right) x = right

//             elem.style.setProperty('--x', `${ x }px`)

//         }

// })

// var params = {
//     container: document.getElementById('illustration'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     animationData: animationData
// };

// var anim;

// anim = lottie.loadAnimation(params);