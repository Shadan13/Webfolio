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

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
        scrollTopButton.style.opacity = '1';
        scrollTopButton.style.pointerEvents = 'auto';
    } else {
        scrollTopButton.style.opacity = '0';
        scrollTopButton.style.pointerEvents = 'none';
    }
});