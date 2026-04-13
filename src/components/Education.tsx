import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Radharaman Engineering College',
    year: '2020 — 2024',
    grade: 'CGPA 7.6 / 10',
  },
  {
    degree: 'Higher Secondary (12th PCM)',
    institution: 'Vidhya Bharti Hr. Sec. School',
    year: '2019 — 2020',
    grade: 'PCM Stream',
  },
  {
    degree: 'Secondary (10th)',
    institution: 'Vidhya Bharti Hr. Sec. School',
    year: '2017 — 2018',
    grade: '82%',
  },
];

const Education: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.edu-anim', {
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
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
      id="education"
      ref={rootRef}
      className="relative py-32 md:py-40 px-6 md:px-11 scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="edu-anim flex items-center gap-3 mb-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
                (05) — Education
              </span>
            </div>
            <h2
              className="edu-anim font-display font-bold text-[#EDEDE8] leading-[1] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(40px, 6vw, 84px)' }}
            >
              Learned the <span className="italic font-light text-[#93938F]">craft</span>
            </h2>
          </div>
        </div>

        <ul className="border border-white/[0.09] rounded-2xl overflow-hidden bg-[#141413]">
          {education.map((e, i) => (
            <li
              key={i}
              className={`edu-anim group grid md:grid-cols-[140px_1fr_auto] gap-4 md:gap-8 items-center p-6 md:p-8 hover:bg-white/[0.02] transition-colors ${
                i !== education.length - 1 ? 'border-b border-white/[0.06]' : ''
              }`}
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#93938F]">
                {e.year}
              </span>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-[#EDEDE8] tracking-[-0.02em]">
                  {e.degree}
                </h3>
                <p className="text-[14px] text-[#93938F] mt-1">{e.institution}</p>
              </div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#FF3D00] px-3 py-1.5 rounded-full border border-[#FF3D00]/30">
                {e.grade}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
