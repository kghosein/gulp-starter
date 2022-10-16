import toggleMode from "./modules/darkmode";
import navLinks from "./modules/navlinks";

import slide from "./modules/slides";
import animation from "./modules/animation";
const sRequire = require("./modules/sampleRequire");
console.log("main (bundled) js file");
slide();
animation();
sRequire();

// year in footer
const d = new Date();
document.getElementById("currentYear").innerHTML = d.getFullYear();

// toggle dark mode
toggleMode();

// dynamic nav links
navLinks();