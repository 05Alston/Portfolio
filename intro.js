var intro = document.querySelector(".intro");
var social = document.querySelector(".social")

document.body.style.overflow = 'hidden';
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        setTimeout(() => { social.style.opacity = "1.0"; document.body.style.overflow = ''; }, 700)
        console.log("Hello");
        intro.style.height = "0";
    }, 1400);

});
