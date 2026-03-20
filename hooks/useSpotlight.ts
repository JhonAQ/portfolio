import { useRef, useState, useEffect } from 'react';

export const useSpotlight = (isDarkMode: boolean) => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      }
    };
    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    let animationFrameId: number;
    const animate = () => {
      delayedMouse.current.x += (mouse.current.x - delayedMouse.current.x) * 0.08;
      delayedMouse.current.y += (mouse.current.y - delayedMouse.current.y) * 0.08;

      if (spotlightRef.current) {
        const spotColor = isDarkMode ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.06)';
        spotlightRef.current.style.background = `radial-gradient(250px circle at ${delayedMouse.current.x}px ${delayedMouse.current.y}px, ${spotColor}, transparent 80%)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode, isHovering]);

  return { spotlightRef, cursorRef, isHovering };
};
