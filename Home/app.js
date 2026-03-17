const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const donateBtn = document.getElementById('hero-donate');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

if (donateBtn) {
    donateBtn.addEventListener('click', () => {
        alert('Donation portal coming soon!');
    });
}
