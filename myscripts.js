document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myLink');
    
    // Hover effect
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
    });
    
    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // Click effect
    button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
    });
    
    // Surprise effect on click
    button.addEventListener('click', function(e) {
        // Create and animate heart emojis
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('span');
            heart.textContent = '💖';
            heart.style.position = 'absolute';
            heart.style.left = (Math.random() * 100) + '%';
            heart.style.top = button.offsetTop + 'px';
            heart.style.fontSize = '24px';
            heart.style.pointerEvents = 'none';
            document.body.appendChild(heart);
            
            // Animate the heart
            let position = button.offsetTop;
            const animation = setInterval(function() {
                position -= 2;
                heart.style.top = position + 'px';
                heart.style.opacity = (button.offsetTop - position) / 100;
                
                if (position < button.offsetTop - 100) {
                    clearInterval(animation);
                    document.body.removeChild(heart);
                }
            }, 20);
        }
    });
});

