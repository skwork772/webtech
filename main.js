let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
window.addEventListener.apply('scroll', () => {
    Headers.classList.toggle('shadow', window.scrolly > 0);
});


const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})


sr.reveal('.home-text', {delay:200, origin:'top'})
sr.reveal('.home-img', {delay:400, origin:'top'})
sr.reveal('.about-title, .about-text, .heading, .box, input, textarea',{delay:200, origin:'top'})