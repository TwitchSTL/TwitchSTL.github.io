document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const colors = ['#ff9999', '#66ff66', '#6699ff', '#ff66cc', '#ffff66'];
    
    document.addEventListener('mousemove', (event) => {
        createCircle(event.clientX, event.clientY);
    });

    function createCircle(x, y) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.width = circle.style.height = Math.random() * 50 + 'px';
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const depth = Math.random() * 500 - 250;  /* Randomize depth for 3D effect */
        circle.style.transform = `translateZ(${depth}px)`;
        
        body.appendChild(circle);
        
        setTimeout(() => {
            circle.remove();
        }, 3000);
    }
});
