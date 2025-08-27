'use client';

import React, { useEffect, useRef } from 'react';

export default function Bg() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;

    const ctx = c.getContext('2d');
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    // Apply CSS sizing (visual) once
    c.style.imageRendering = 'pixelated';
    c.style.width = '100%';
    c.style.height = '100%';

    // Setup canvas pixel size for high DPI
    const setup = () => {
      c.width = Math.floor(window.innerWidth * dpr);
      c.height = Math.floor(window.innerHeight * dpr);
      // scale drawing operations to account for DPR
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // convert original getPos into this scope
    function getPos(index, wireSpacing = 1) {
      if (index === 0) return [0, 0];

      let level = 1;
      let wiresInLevel = 6;
      let totalWires = 1;

      while (index >= totalWires + wiresInLevel) {
        totalWires += wiresInLevel;
        wiresInLevel += 6;
        level++;
      }
      const positionInLevel = index - totalWires;
      const angle = (positionInLevel / wiresInLevel) * Math.PI * 2;
      const radius = level * wireSpacing;
      return [Math.cos(angle) * radius, Math.sin(angle) * radius];
    }

    let prevTime = 0;
    const animate = (time) => {
      rafRef.current = requestAnimationFrame(animate);

      const delta = time - prevTime;

      // Clear (full opaque black)
      ctx.fillStyle = 'rgba(245, 245, 245, 1)';
      ctx.fillRect(0, 0, c.width / dpr, c.height / dpr);

      const cx = (c.width / dpr) / 2;
      const cy = (c.height / dpr) / 2;
      const t = performance.now() * 0.001;

      const count = 100;
      ctx.fillStyle = 'black';
      const radius = 60;
      const diameter = radius * 2;

      for (let i = 0; i < count; i++) {
        const [x, y] = getPos(i);

        const angle1 = i * 17 - t * 0.5;
        const angle2 = Math.sin(i * 13 + t);

        ctx.beginPath();
        ctx.arc(
          (Math.sin(angle1) * 100) + cx + x * diameter + Math.cos(angle2) * 100,
          (Math.cos(angle1) * 100) + cy + y * diameter + Math.sin(angle2) * 100,
          radius * (Math.cos(0.05 * t + i) * 0.5 + 0.5) * 0.1,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      prevTime = time;
    };

    // init
    setup();
    rafRef.current = requestAnimationFrame(animate);

    const onResize = () => {
      setup();
    };
    window.addEventListener('resize', onResize);

    // cleanup
    return () => {
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      id="c"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full "
    />
  );
}