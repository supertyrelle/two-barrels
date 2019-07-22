// page transitions!
import Swup from 'swup';
const options = {
    cache: true,
    animateHistoryBrowsing: true,
    containers: ["#swup"]

};
const swup = new Swup(options);

// tilt properties!
$('.card').tilt({
    glare: true,
    maxGlare: 0.08,
    disableAxis: X,
    perspective: 2000
})

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