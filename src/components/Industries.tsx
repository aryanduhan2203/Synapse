"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface IndustriesProps {
  dict: {
    titleMain: string;
    titleSub: string;
    cta: string;
    fintech: { title: string; desc: string };
    travel: { title: string; desc: string };
    logistics: { title: string; desc: string };
    retail: { title: string; desc: string };
    supplyChain: { title: string; desc: string };
    education: { title: string; desc: string };
  };
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
}

export default function Industries({ dict }: IndustriesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 900);
    let height = (canvas.height = 900);

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: parentWidth } = entry.contentRect;
        // Dynamically scale canvas resolution based on container width
        const size = Math.max(380, Math.min(900, parentWidth));
        canvas.width = size;
        canvas.height = size;
        width = size;
        height = size;
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // 3D Sphere setup
    const sphereRadius = 195;
    const numPoints = 220;
    const points: Point3D[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      points.push({
        x: x * sphereRadius,
        y: y * sphereRadius,
        z: z * sphereRadius,
      });
    }

    let angleX = 0.002;
    let angleY = 0.003;
    const focalLength = 380;

    // Laser rays particle system (dense, continuous ray emissions)
    let particles: Particle[] = [];

    const createParticle = (): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.2 + Math.random() * 2.2;
      const isTeal = Math.random() > 0.45;
      return {
        x: width / 2 + Math.cos(angle) * sphereRadius,
        y: height / 2 + Math.sin(angle) * sphereRadius,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 0.9 + Math.random() * 1.4,
        color: isTeal ? "rgba(10, 211, 169, " : "rgba(168, 85, 247, ", // Teal & Purple rays
        alpha: 1,
        life: 0,
        maxLife: 75 + Math.random() * 55,
      };
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Draw glowing background halo (ambiance)
      const glowGrad = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, sphereRadius * 1.7);
      glowGrad.addColorStop(0, "rgba(10, 211, 169, 0.09)");
      glowGrad.addColorStop(0.5, "rgba(168, 85, 247, 0.03)");
      glowGrad.addColorStop(1, "rgba(12, 13, 20, 0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Update and Draw Laser Rays shooting from the globe
      if (particles.length < 65 && Math.random() > 0.25) {
        particles.push(createParticle());
      }

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.alpha = 1 - p.life / p.maxLife;

        if (p.life >= p.maxLife) {
          particles[idx] = createParticle();
        } else {
          // Calculate emergence angle to tie line seamlessly to sphere surface
          const angle = Math.atan2(p.y - centerY, p.x - centerX);
          const startX = centerX + Math.cos(angle) * sphereRadius;
          const startY = centerY + Math.sin(angle) * sphereRadius;

          // Draw the continuous glowing ray line from globe to particle tip
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `${p.color}${p.alpha * 0.24})`;
          ctx.lineWidth = p.size;
          ctx.stroke();

          // Draw leading spark tip
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha * 0.75})`;
          ctx.fill();
        }
      });

      // 3. Rotate and Project 3D Globe dots
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projectedPoints: { x: number; y: number; size: number; alpha: number }[] = [];

      points.forEach((p) => {
        // Rotate Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Save rotated points
        p.x = x1;
        p.y = y2;
        p.z = z2;

        // Project
        const scale = focalLength / (focalLength + z2);
        const screenX = centerX + x1 * scale;
        const screenY = centerY + y2 * scale;

        // Calculate opacity and size by depth z
        const depthAlpha = (z2 + sphereRadius) / (2 * sphereRadius);
        const size = (1.0 + depthAlpha * 1.8) * scale;
        const finalAlpha = 0.2 + depthAlpha * 0.72;

        projectedPoints.push({ x: screenX, y: screenY, size, alpha: finalAlpha });
      });

      // Render projected points
      projectedPoints.forEach((pt) => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        const colorVal = pt.alpha > 0.6 ? "0, 242, 254" : "10, 211, 169";
        ctx.fillStyle = `rgba(${colorVal}, ${pt.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  // Helper function to highlight key phrases dynamically
  const formatDesc = (text: string) => {
    const highlights = ["EHR systems", "ecommerce websites", "LMS platforms"];
    let output = text;
    highlights.forEach((phrase) => {
      if (output.includes(phrase)) {
        const parts = output.split(phrase);
        const highlightClass = "text-teal-400 group-hover:text-cyan-200 font-extrabold hover:underline underline-offset-4 decoration-2 transition-colors duration-300";
        output = parts.join(`<span class="${highlightClass}">${phrase}</span>`);
      }
    });
    return <span dangerouslySetInnerHTML={{ __html: output }} />;
  };

  return (
    <section id="industries" className="relative w-full bg-[#0c0d14] py-16 lg:py-24 overflow-hidden flex flex-col justify-center">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* Massive rotating particle globe positioned behind the columns */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[850px] lg:h-[850px] pointer-events-none z-0 flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full opacity-40"
        />
      </div>

      {/* Tightened container max-width to squeeze columns closer */}
      <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center min-h-[600px]">
          
          {/* Left Column: 3 Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-5 justify-center order-2 lg:order-1">
            
            {/* Card 1: Fintech Software */}
            <div className="group relative overflow-hidden p-5 rounded-2xl bg-[#151824]/60 border border-slate-800/80 backdrop-blur-md hover:border-transparent transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-teal-500/10 lg:translate-x-8 xl:translate-x-12">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              <div className="absolute inset-0 grid-bg-teal opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                    <svg className="w-5.5 h-5.5 text-teal-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 8a2.5 2.5 0 0 1 4 2 2.5 2.5 0 0 1 4-2c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5a2.5 2.5 0 0 1-4-2 2.5 2.5 0 0 1-4 2C6.62 13 5.5 11.88 5.5 10.5S6.62 8 8 8z" />
                      <path d="M3 18c1.5-1.5 3-1.5 5 0s3 1.5 5 0c1.5-1.5 3-1.5 5 0m-8 2h6" />
                    </svg>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:border-white/30 group-hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base md:text-[17px] font-extrabold text-white mb-2 transition-colors duration-300">
                  {dict.fintech.title}
                </h3>
                <p className="text-slate-400 group-hover:text-white/95 text-[13px] leading-relaxed transition-colors duration-300">
                  {dict.fintech.desc}
                </p>
              </div>
            </div>

            {/* Card 3: Logistics */}
            <div className="group relative overflow-hidden p-5 rounded-2xl bg-[#151824]/60 border border-slate-800/80 backdrop-blur-md hover:border-transparent transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-teal-500/10 translate-x-0">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              <div className="absolute inset-0 grid-bg-teal opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                    <svg className="w-5.5 h-5.5 text-teal-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 8a2.5 2.5 0 0 1 4 2 2.5 2.5 0 0 1 4-2c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5a2.5 2.5 0 0 1-4-2 2.5 2.5 0 0 1-4 2C6.62 13 5.5 11.88 5.5 10.5S6.62 8 8 8z" />
                      <path d="M3 18c1.5-1.5 3-1.5 5 0s3 1.5 5 0c1.5-1.5 3-1.5 5 0m-8 2h6" />
                    </svg>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:border-white/30 group-hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base md:text-[17px] font-extrabold text-white mb-2 transition-colors duration-300">
                  {dict.logistics.title}
                </h3>
                <p className="text-slate-400 group-hover:text-white/95 text-[13px] leading-relaxed transition-colors duration-300">
                  {dict.logistics.desc}
                </p>
              </div>
            </div>

            {/* Card 5: Logistics & Supply Chain */}
            <div className="group relative overflow-hidden p-5 rounded-2xl bg-[#151824]/60 border border-slate-800/80 backdrop-blur-md hover:border-transparent transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-teal-500/10 lg:translate-x-8 xl:translate-x-12">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              <div className="absolute inset-0 grid-bg-teal opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                    <svg className="w-5.5 h-5.5 text-teal-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 8a2.5 2.5 0 0 1 4 2 2.5 2.5 0 0 1 4-2c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5a2.5 2.5 0 0 1-4-2 2.5 2.5 0 0 1-4 2C6.62 13 5.5 11.88 5.5 10.5S6.62 8 8 8z" />
                      <path d="M3 18c1.5-1.5 3-1.5 5 0s3 1.5 5 0c1.5-1.5 3-1.5 5 0m-8 2h6" />
                    </svg>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:border-white/30 group-hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base md:text-[17px] font-extrabold text-white mb-2 transition-colors duration-300">
                  {dict.supplyChain.title}
                </h3>
                <p className="text-slate-400 group-hover:text-white/95 text-[13px] leading-relaxed transition-colors duration-300">
                  {dict.supplyChain.desc}
                </p>
              </div>
            </div>

          </div>

          {/* Center Column: Title overlay directly in the middle of the globe */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center px-1 min-h-[250px] lg:min-h-0 order-1 lg:order-2 relative z-25">
            <h2 className="text-3.5xl md:text-4.5xl lg:text-5xl font-black tracking-tight text-white leading-tight select-none">
              {dict.titleMain}
              <span className="block text-teal-400 font-black mt-1 lg:mt-2">{dict.titleSub}</span>
            </h2>

            <Link
              href="#all-industries"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-800 bg-[#121420]/90 hover:bg-[#1a1e2f]/95 text-white text-xs lg:text-sm font-extrabold backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/55 group"
            >
              {dict.cta}
              <div className="w-4.5 h-4.5 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg
                  className="w-2.5 h-2.5 text-white transition-transform transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Right Column: 3 Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-5 justify-center order-3">
            
            {/* Card 2: Travel & Hospitality */}
            <div className="group relative overflow-hidden p-5 rounded-2xl bg-[#151824]/60 border border-slate-800/80 backdrop-blur-md hover:border-transparent transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-teal-500/10 lg:-translate-x-8 xl:-translate-x-12">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              <div className="absolute inset-0 grid-bg-teal opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                    <svg className="w-5.5 h-5.5 text-teal-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 8a2.5 2.5 0 0 1 4 2 2.5 2.5 0 0 1 4-2c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5a2.5 2.5 0 0 1-4-2 2.5 2.5 0 0 1-4 2C6.62 13 5.5 11.88 5.5 10.5S6.62 8 8 8z" />
                      <path d="M3 18c1.5-1.5 3-1.5 5 0s3 1.5 5 0c1.5-1.5 3-1.5 5 0m-8 2h6" />
                    </svg>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:border-white/30 group-hover:text-white transition-all duration-300">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base md:text-[17px] font-extrabold text-white mb-2 transition-colors duration-300">
                  {dict.travel.title}
                </h3>
                <p className="text-slate-400 group-hover:text-white/95 text-[13px] leading-relaxed transition-colors duration-300">
                  {formatDesc(dict.travel.desc)}
                </p>
              </div>
            </div>

            {/* Card 4: Retail & E-commerce */}
            <div className="group relative overflow-hidden p-5 rounded-2xl bg-[#151824]/60 border border-slate-800/80 backdrop-blur-md hover:border-transparent transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-teal-500/10 translate-x-0">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              <div className="absolute inset-0 grid-bg-teal opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                    <svg className="w-5.5 h-5.5 text-teal-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 8a2.5 2.5 0 0 1 4 2 2.5 2.5 0 0 1 4-2c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5a2.5 2.5 0 0 1-4-2 2.5 2.5 0 0 1-4 2C6.62 13 5.5 11.88 5.5 10.5S6.62 8 8 8z" />
                      <path d="M3 18c1.5-1.5 3-1.5 5 0s3 1.5 5 0c1.5-1.5 3-1.5 5 0m-8 2h6" />
                    </svg>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:border-white/30 group-hover:text-white transition-all duration-300">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base md:text-[17px] font-extrabold text-white mb-2 transition-colors duration-300">
                  {dict.retail.title}
                </h3>
                <p className="text-slate-400 group-hover:text-white/95 text-[13px] leading-relaxed transition-colors duration-300">
                  {formatDesc(dict.retail.desc)}
                </p>
              </div>
            </div>

            {/* Card 6: Education */}
            <div className="group relative overflow-hidden p-5 rounded-2xl bg-[#151824]/60 border border-slate-800/80 backdrop-blur-md hover:border-transparent transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-teal-500/10 lg:-translate-x-8 xl:-translate-x-12">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              <div className="absolute inset-0 grid-bg-teal opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                    <svg className="w-5.5 h-5.5 text-teal-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 8a2.5 2.5 0 0 1 4 2 2.5 2.5 0 0 1 4-2c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5a2.5 2.5 0 0 1-4-2 2.5 2.5 0 0 1-4 2C6.62 13 5.5 11.88 5.5 10.5S6.62 8 8 8z" />
                      <path d="M3 18c1.5-1.5 3-1.5 5 0s3 1.5 5 0c1.5-1.5 3-1.5 5 0m-8 2h6" />
                    </svg>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:border-white/30 group-hover:text-white transition-all duration-300">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base md:text-[17px] font-extrabold text-white mb-2 transition-colors duration-300">
                  {dict.education.title}
                </h3>
                <p className="text-slate-400 group-hover:text-white/95 text-[13px] leading-relaxed transition-colors duration-300">
                  {formatDesc(dict.education.desc)}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
