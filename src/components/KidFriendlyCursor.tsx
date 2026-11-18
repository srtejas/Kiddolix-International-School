import React, { useEffect, useRef, useState } from 'react';

const PLAYFUL_COLORS = ['#0297DB', '#E91E79', '#65A30D', '#EA580C', '#EAB308'];

export const KidFriendlyCursor: React.FC = () => {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    let rafId = 0;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const animate = () => {
      currentX += (targetX - currentX) * 0.24;
      currentY += (targetY - currentY) * 0.24;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      rafId = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('a, button, [role="tab"], select, input, textarea');
      setIsInteractive(Boolean(interactiveEl));
    };

    const handleMouseDown = () => {
      setColorIndex((prev) => (prev + 1) % PLAYFUL_COLORS.length);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    rafId = window.requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  const activeColor = PLAYFUL_COLORS[colorIndex];

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[60] -ml-4 -mt-4 transition-opacity duration-150 hidden md:block"
      style={{
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className="w-8 h-8 rounded-full border-2 transition-transform duration-150 ease-out"
        style={{
          borderColor: activeColor,
          backgroundColor: isInteractive ? `${activeColor}18` : 'transparent',
          transform: isInteractive ? 'scale(1.35)' : 'scale(1)',
        }}
      />
    </div>
  );
};
