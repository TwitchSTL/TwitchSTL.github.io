document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const colors = ['#ff9999', '#66ff66', '#6699ff', '#ff66cc', '#ffff66'];

    document.addEventListener('mousemove', (event) => {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.width = circle.style.height = Math.random() * 50 + 'px';
        circle.style.left = event.clientX + 'px';
        circle.style.top = event.clientY + 'px';
        circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        const depth = Math.random() * 500 - 250;  /* Randomize depth for 3D effect */
        circle.style.transform = `translateZ(${depth}px)`;

        body.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 3000);
    });
});

document.addEventListener('mousemove', (event) => {
    const xAxis = (window.innerWidth / 2 - event.clientX) / 50;
    const yAxis = (window.innerHeight / 2 - event.clientY) / 50;

    body.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
