// Sets the current year in the page footer copyright text.
const currentYearText = document.querySelector('.current-year');
currentYearText.innerHTML = String(new Date().getFullYear());

// Sets overflow to hidden so user would not be able to scroll when the mobile navigation is open.
const setBodyOverflow = () => {
    if (header.classList.contains('nav-open')) {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
};

// Opens and closes the mobile navigation.
const header = document.querySelector('.header');
const mobileNavButton = document.querySelector('.mobile-nav-button');
mobileNavButton.addEventListener('click', () => {
    setBodyOverflow();
    header.classList.toggle('nav-open');
});

// Closes the mobile navigation (if the current screen is mobile or small tablet), once the link is clicked.
const navLinks = document.querySelectorAll('.main-nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Sets the body overflow only if the current screen size is mobile or small tablet.
        // Otherwise, it would set overflow on large tablets and desktops which does not have mobile navigation that
        // needs to get rid of and set overflow.
        const mobileNavButtonStyles = getComputedStyle(mobileNavButton);
        mobileNavButtonStyles.display === 'block' && setBodyOverflow();

        header.classList.toggle('nav-open');
    });
});

// Handles the sticky navigation logic.
const sectionHeroEl = document.querySelector('.section-hero');
const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    // entry.isIntersecting ? document.body.classList.remove('sticky') : document.body.classList.add('sticky');
    if (entry.isIntersecting) {
        document.body.classList.remove('sticky');
    } else {
        document.body.classList.add('sticky');
    }
}, {
    root: null,
    threshold: 0,
    rootMargin: '-96px'
});
observer.observe(sectionHeroEl);