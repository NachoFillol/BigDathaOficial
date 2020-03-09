window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
}

window.sr = ScrollReveal();
sr.reveal('.descripcion', {
    duration: 2000,
    origin: 'bottom',

});
sr.reveal('.que-hacemos-contenedor', {
    duration: 2000,
    origin: 'bottom',
    delay: 1000
});
sr.reveal('#portfolio', {
    duration: 2000,
    origin: 'bottom',
    delay: 1000
});
sr.reveal('#contact-us', {
    duration: 2000,
    origin: 'bottom',
    delay: 1000
});