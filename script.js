document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const colors = ['#ff9999', '#66ff66', '#6699ff', '#ff66cc', '#ffff66'];
    
    document.addEventListener('mousemove', (event) => {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.width = circle.style.height = Math.random() * 50 + 'px';
        circle.style.left = event.clientX - 25 + 'px';
        circle.style.top = event.clientY - 25 + 'px';
        circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        body.appendChild(circle);
        
        setTimeout(() => {
            circle.remove();
        }, 3000);
    });
});
