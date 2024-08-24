import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;
    let cursorTrail = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.02;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let particlesArray = [];

    const createParticle = () => {
      const xPos = Math.random() * canvas.width;
      const yPos = Math.random() * canvas.height;
      const color = Math.random() > 0.5 ? 'rgba(255, 8, 8, 1)' : 'rgba(0, 201, 244, 0.93)';
      particlesArray.push(new Particle(xPos, yPos, color));
    };

    // Cursor trail particle
    class CursorParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.alpha = 0.7;
        //this.color = Math.random() > 0.5 ? 'rgba(255, 8, 8, ' : 'rgba(0, 201, 244, ';
        this.color = Math.random() > 0.5 ? 'rgba(199, 234, 241, 0.93)' : 'rgba(241, 199, 210, 0.93)';
      }

      update() {
        this.alpha -= 0.03;
        this.size -= 0.1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${this.alpha})`;
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background particles
      if (particlesArray.length < 25) {
        createParticle();
      }

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size <= 0.2) {
          particlesArray.splice(i, 1);
          i--;
        }
      }

      // Cursor trail
      cursorTrail.push(new CursorParticle(mouseX, mouseY));
      for (let i = 0; i < cursorTrail.length; i++) {
        cursorTrail[i].update();
        cursorTrail[i].draw();
        if (cursorTrail[i].alpha <= 0 || cursorTrail[i].size <= 0) {
          cursorTrail.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Mouse move event listener
    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 1 // Changed from 0.5 to 1 for full visibility
      }}
    />
  );
};

export default BackgroundAnimation;