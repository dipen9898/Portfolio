import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false, speed: 0, lastX: 0, lastY: 0 });
  const pointsRef = useRef<Point[]>([]);
  const sparksRef = useRef<Spark[]>([]);
  const rafRef = useRef<number>(0);

  // Configuration - Blue Highlighted Long Trail
  const TRAIL_POINTS = 35; // Long trail for pointer flow
  const SPRING_TENSION = 0.4; // Softer follow for flow
  const SPRING_FRICTION = 0.6;
  const BRIGHT_BLUE = "#007AFF";
  const SOFT_WHITE = "rgba(255, 255, 255, 0.6)";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    // Initialize points
    pointsRef.current = Array.from({ length: TRAIL_POINTS }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }));

    const createSpark = (x: number, y: number, isBurst = false) => {
      const count = isBurst ? 10 : 1;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const force = isBurst ? Math.random() * 3 + 1 : Math.random() * 1;
        sparksRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * force,
          vy: Math.sin(angle) * force,
          life: 1.0,
          color: Math.random() > 0.8 ? SOFT_WHITE : BRIGHT_BLUE,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const points = pointsRef.current;
      const sparks = sparksRef.current;

      // Calculate speed for subtle dynamics
      const dx = mouse.x - mouse.lastX;
      const dy = mouse.y - mouse.lastY;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;

      // Update points with direct interpolation (lerp) to remove "spiral" effect
      points[0].x = mouse.x;
      points[0].y = mouse.y;

      for (let i = 1; i < points.length; i++) {
        const p1 = points[i - 1];
        const p2 = points[i];

        // Direct follow without momentum/velocity to prevent spiraling
        p2.x += (p1.x - p2.x) * 0.3; 
        p2.y += (p1.y - p2.y) * 0.3;
      }

      // Draw "Blue Highlight" Trail
      if (points.some((p, i) => i > 0 && (Math.abs(p.x - points[i-1].x) > 0.01))) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        
        // Subtle blue glow
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(0, 122, 255, 0.3)";

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
          const xc = (points[i].x + points[i - 1].x) / 2;
          const yc = (points[i].y + points[i - 1].y) / 2;
          ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
        }

        const gradient = ctx.createLinearGradient(points[0].x, points[0].y, points[points.length - 1].x, points[points.length - 1].y);
        gradient.addColorStop(0, "rgba(0, 122, 255, 0.6)"); // Highlighted blue
        gradient.addColorStop(1, "rgba(0, 122, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3; // Slightly thicker for "highlighted" feel
        ctx.stroke();

        // Inner bright core
        ctx.shadowBlur = 0;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Sparkles along path
        if (mouse.speed > 3 && Math.random() > 0.6) {
          createSpark(points[0].x, points[0].y);
        }
      }

      // Update and draw sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.015; // Elegant fade

        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.life * 0.8;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(update);
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const y = "touches" in e ? e.touches[0].clientY : e.clientY;
      mouseRef.current.x = x;
      mouseRef.current.y = y;
      mouseRef.current.active = true;
    };

    const handleClick = () => {
      createSpark(mouseRef.current.x, mouseRef.current.y, true);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleClick);

    resize();
    update();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("mousedown", handleClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
}
