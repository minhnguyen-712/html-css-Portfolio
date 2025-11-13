/* Star background animation */
class StarField {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.stars = [];
        this.resize();
        this.init();
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    init() {
        // Create stars
        this.stars = [];
        const numStars = Math.floor((this.width * this.height) / 2000); // Adjust density
        
        for (let i = 0; i < numStars; i++) {
            this.stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: Math.random() * 1.5,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                alpha: Math.random()
            });
        }
    }

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.fillStyle = 'white';
        this.stars.forEach(star => {
            // Update position
            star.x += star.vx;
            star.y += star.vy;
            
            // Wrap around screen
            if (star.x < 0) star.x = this.width;
            if (star.x > this.width) star.x = 0;
            if (star.y < 0) star.y = this.height;
            if (star.y > this.height) star.y = 0;

            // Twinkle effect
            star.alpha += (Math.random() - 0.5) * 0.05;
            star.alpha = Math.max(0, Math.min(1, star.alpha));

            // Draw star
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            this.ctx.fill();
        });
    }

    animate() {
        this.update();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('star-background');
    const starField = new StarField(canvas);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        starField.resize();
        starField.init();
    });

    // Start animation
    starField.animate();
});