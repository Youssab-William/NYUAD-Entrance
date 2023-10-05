const svg = document.querySelector('svg');
let rotated = false;

svg.addEventListener('click', () => {
    if (!rotated) {
        svg.style.transition = 'transform 0.5s ease';
        svg.style.transform = 'rotateY(360deg)';
        rotated = true;
    } else {
        svg.style.transition = 'transform 0.5s ease';
        svg.style.transform = 'rotateY(0deg)'; 
        rotated = false;
    }
});
