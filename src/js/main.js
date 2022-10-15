import slide from './modules/slides';
import animation from './modules/animation';
const sRequire = require('./modules/sampleRequire');

console.log('main js file');
slide();
animation();
sRequire();

const d = new Date();
document.getElementById("currentYear").innerHTML = d.getFullYear();