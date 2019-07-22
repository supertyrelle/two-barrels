import bodymovin from 'bodymovin';

var animation = bodymovin.loadAnimation({
    container: document.getElementById('motion'), // Required
    path: './full_animation.json', // Required
    renderer: 'svg/canvas/html', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Hello World", // Name for future reference. Optional.
})