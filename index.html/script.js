// Menu hamburger
const menuicon = document.querySelector('#menu-btn');
const navlinks = document.querySelector('.nav-links');

menuicon.onclick = () => {
    navlinks.classList.toggle('active');
};

// Menu menutup otomatis setelah link diklik
navlinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navlinks.classList.remove('active'));
});

// Scroll progress bar
const progressBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.height = (scrollTop / docHeight) * 100 + '%';
});