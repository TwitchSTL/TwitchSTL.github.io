document.addEventListener('DOMContentLoaded', () => {
    const universe = document.querySelector('.universe');

    document.addEventListener('mousemove', (event) => {
        createDigit(event.clientX, event.clientY);
    });

    function createDigit(x, y) {
        const digit = document.createElement('div');
        digit.className = 'digit';
        digit.style.left = x + 'px';
        digit.style.top = y + 'px';
        digit.textContent = Math.random() < 0.5 ? '0' : '1';
        document.body.appendChild(digit);

        // Animate digit
        setTimeout(() => {
            digit.style.opacity = '1';
            digit.style.animation = 'fade 1s forwards';
        }, 10);

        // Remove digit after animation
        setTimeout(() => {
            digit.remove();
        }, 1000);
    }
});
