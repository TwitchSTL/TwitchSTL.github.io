document.addEventListener('DOMContentLoaded', () => {
    const universe = document.querySelector('.universe');

    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.textContent = Math.random() < 0.5 ? '0' : '1';
        universe.appendChild(star);
    }
});
