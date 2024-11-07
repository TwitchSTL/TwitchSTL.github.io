document.addEventListener('DOMContentLoaded', () => {
    createRandomDigits(50);

    document.addEventListener('mousemove', (event) => {
        createDigit(event.clientX, event.clientY);
    });
});

function createRandomDigits(count) {
    for (let i = 0; i < count; i++) {
        const digit = document.createElement('div');
        digit.className = 'digit';
        digit.style.top = Math.random() * 100 + 'vh';
        digit.style.left = Math.random() * 100 + 'vw';
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
}

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
