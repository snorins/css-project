// Sets the current year in the page footer copyright text.
const currentYearText = document.querySelector('.current-year');
currentYearText.innerHTML = String(new Date().getFullYear());

// Sets overflow to hidden so user would not be able to scroll when the mobile navigation is open.
const setBodyOverflow = () => {
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
};

// Opens and closes the mobile navigation.
const header = document.querySelector('.header');
const mobileNavButton = document.querySelector('.mobile-nav-button');
mobileNavButton.addEventListener('click', () => {
    header.classList.toggle('nav-open');
});

// Closes the mobile navigation (if the current screen is mobile or small tablet), once the link is clicked.
const navLinks = document.querySelectorAll('.main-nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        header.classList.toggle('nav-open');

        if (mobileNavButton.style.display === 'block') {
            setBodyOverflow();
        }
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