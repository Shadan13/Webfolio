const navbar = document.querySelector('nav');

let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos < currentScrollPos) {
        navbar.style.transition = 'ease-in-out 0.8s';
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transition = 'ease-in-out 0.8s';
        navbar.style.transform = 'translateY(0)';
    }

    prevScrollPos = currentScrollPos;
});