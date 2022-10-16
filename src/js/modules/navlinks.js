export default function navLinks() {
    const indexPage = document.querySelector('#homepage'),
          aboutPage = document.querySelector('#aboutpage'),
          contactPage = document.querySelector('#contactpage');
    const navAnchors = document.querySelectorAll('.menu nav a');

    // if any id is not found on any particular page the about container(s) return null, so we can use this thing to signal dynamic links
    if(indexPage !== null) {
        console.log('index page');
        navAnchors[0].href = 'javascript:void(0);'; // home (no reference)
        navAnchors[1].href = './pages/about.html'; // about page
        navAnchors[2].href = './pages/contact.html'; // contact page
    } else if(aboutPage !== null) {
        console.log('about page');
        navAnchors[0].href = '/' // home
        navAnchors[1].href = 'javascript:void(0);' // about (no reference)
        navAnchors[2].href = 'contact.html'; // contact page
    } else if(contactPage !== null) {
        console.log('contact page');
        navAnchors[0].href = '/' // home
        navAnchors[1].href = 'about.html' // about page
        navAnchors[2].href = 'javascript:void(0);'; // contact page (no reference)
    }
}