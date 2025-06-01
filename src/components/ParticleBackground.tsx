import { useRef, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { darkMode } = useContext(ThemeContext);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    let gradientColors: string[];
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = gradientColors[Math.floor(Math.random() * gradientColors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      gradientColors = darkMode 
        ? ['rgba(59, 130, 246, 0.3)', 'rgba(99, 102, 241, 0.3)', 'rgba(139, 92, 246, 0.3)']
        : ['rgba(59, 130, 246, 0.15)', 'rgba(99, 102, 241, 0.15)', 'rgba(139, 92, 246, 0.15)'];
      
      particles = Array.from({ length: 50 }, () => new Particle());
    };
    
    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = darkMode 
              ? `rgba(99, 102, 241, ${0.2 * (1 - distance/150)})`
              : `rgba(99, 102, 241, ${0.1 * (1 - distance/150)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    window.addEventListener('resize', init);
    
    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity: darkMode ? 1 : 0.7 }}
    />
  );
};

export default ParticleBackground;