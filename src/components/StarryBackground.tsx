"use client";

import { useEffect, useRef } from "react";

export default function StarryBackground() {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starfield = starfieldRef.current;
    if (!starfield) return;

    // Create stars
    function createStars() {
      const starCount = 80;
      const starSizes = ["small", "medium", "large"] as const;

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        const randomSize =
          starSizes[Math.floor(Math.random() * starSizes.length)];
        star.className = `star ${randomSize}`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`);
        star.style.setProperty("--delay", `${Math.random() * 3}s`);
        starfield?.appendChild(star);
      }
    }

    // Create floating particles
    function createParticles() {
      const particleCount = 15;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.setProperty(
          "--float-duration",
          `${Math.random() * 4 + 3}s`,
        );
        particle.style.setProperty("--float-delay", `${Math.random() * 2}s`);
        starfield?.appendChild(particle);
      }
    }

    // Create shooting stars periodically
    function createShootingStar() {
      const shootingStar = document.createElement("div");
      shootingStar.className = "shooting-star";
      shootingStar.style.left = `${Math.random() * 50}%`;
      shootingStar.style.top = `${Math.random() * 50}%`;
      starfield?.appendChild(shootingStar);

      setTimeout(() => {
        shootingStar.remove();
      }, 3000);
    }

    // Initialize
    createStars();
    createParticles();

    // Create shooting stars every 3-5 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        createShootingStar();
      }
    }, 3000);

    // Cleanup
    return () => {
      clearInterval(interval);
      if (starfield) {
        starfield.innerHTML = "";
      }
    };
  }, []);

  return <div ref={starfieldRef} className="starfield" />;
}
