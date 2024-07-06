function switchMode() {
    const button = document.querySelector('.dark-light');
    const currentIcon = button.querySelector('i');
    const currentStyleSheet = document.querySelector('link[rel=\'stylesheet\']');
    const logoImg = document.querySelector('.nav-logo img');

    // Toggle icon
    if (currentIcon.classList.contains('bxs-sun')) {
        currentIcon.classList.replace('bxs-sun', 'bxs-moon');
    } else {
        currentIcon.classList.replace('bxs-moon', 'bxs-sun');
    }

    // Toggle stylesheet
    if (currentStyleSheet.href.endsWith('style-dark.css')) {
        currentStyleSheet.href = 'css/style-light.css';
    } else {
        currentStyleSheet.href = 'css/style-dark.css';
    }

    // Toggle logo image
    if (logoImg.src.endsWith('logo-dark.png')) {
        logoImg.src = 'images/logo-light.png';
    } else {
        logoImg.src = 'images/logo-dark.png';
    }
}