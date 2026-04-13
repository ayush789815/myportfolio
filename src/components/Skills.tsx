import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const groups = [
  {
    label: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    label: 'Motion & Tools',
    items: ['GSAP', 'Framer Motion', 'Three.js', 'Git & GitHub', 'Vite', 'Figma'],
  },
];

const Skills: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sk-anim', {
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={rootRef}
      className="relative py-32 md:py-40 px-6 md:px-11 scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="sk-anim flex items-center gap-3 mb-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
                (03) — Toolkit
              </span>
            </div>
            <h2
              className="sk-anim font-display font-bold text-[#EDEDE8] leading-[1] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(40px, 6vw, 84px)' }}
            >
              Stack & <span className="italic font-light text-[#93938F]">craft</span>
            </h2>
          </div>
          <p className="sk-anim max-w-sm text-[15px] leading-relaxed text-[#93938F]">
            The tools I reach for every day — chosen for speed, DX, and the
            quality of what they let me ship.
          </p>
        </div>

        <div className="border border-white/[0.09] rounded-2xl overflow-hidden">
          {groups.map((g, i) => (
            <div
              key={g.label}
              className={`sk-anim grid md:grid-cols-[220px_1fr] gap-6 p-6 md:p-8 bg-[#141413] ${
                i !== groups.length - 1 ? 'border-b border-white/[0.06]' : ''
              }`}
            >
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-[#EDEDE8] mt-1">
                  {g.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3 content-center">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-[13px] px-4 py-2 rounded-full border border-white/10 text-[#EDEDE8] hover:border-[#FF3D00] hover:text-[#FF3D00] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
