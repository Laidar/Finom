import { tns } from "../node_modules/tiny-slider/src/tiny-slider"

let slider = tns({
    container: '.slider',
    items: 1,
    slideBy: '1',
    navPosition: 'bottom',
    navContainer: '#slider__nav',
    autoplay: true,
    autoplayButtonOutput: false,
    speed: 400,
    controls: false,
    mouseDrag: true,
});

import "./assets/blocks/header/header"

import "./assets/styles/styles.scss";

console.log("run")