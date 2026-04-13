import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Veramasa',
    location: 'Remote',
    period: 'Jun 2025 — Present',
    points: [
      'Building responsive dashboards using React.js and Tailwind CSS.',
      'Integrating REST APIs and optimizing data workflows.',
      'Developing reusable, scalable UI components across products.',
    ],
    tech: ['React.js', 'Tailwind', 'REST APIs', 'Git'],
    current: true,
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Trisanco Infotech',
    location: 'Bhopal, India',
    period: 'Dec 2024 — May 2025',
    points: [
      'Worked on live client projects using React.js and Tailwind CSS.',
      'Improved UI/UX and implemented pixel-perfect responsive components.',
      'Assisted in API integration, testing, and debugging.',
    ],
    tech: ['React.js', 'Tailwind', 'JavaScript', 'API'],
    current: false,
  },
];

const Experience: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.exp-anim', {
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
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
      id="experience"
      ref={rootRef}
      className="relative py-32 md:py-40 px-6 md:px-11 scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="exp-anim flex items-center gap-3 mb-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
                (04) — Experience
              </span>
            </div>
            <h2
              className="exp-anim font-display font-bold text-[#EDEDE8] leading-[1] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(40px, 6vw, 84px)' }}
            >
              Where I've <span className="italic font-light text-[#93938F]">worked</span>
            </h2>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="exp-anim group grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 p-6 md:p-10 rounded-2xl border border-white/[0.09] bg-[#141413] hover:border-white/20 transition-colors"
            >
              {/* Left meta */}
              <div className="flex flex-col justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
                    {exp.period}
                  </span>
                  {exp.current && (
                    <div className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#22c55e] px-2.5 py-1 rounded-full border border-[#22c55e]/30">
                      <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#22c55e] avail-dot" />
                      Current
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#93938F] mb-1">
                    Location
                  </p>
                  <p className="text-[14px] text-[#EDEDE8]">{exp.location}</p>
                </div>
              </div>

              {/* Right details */}
              <div>
                <h3 className="font-display text-3xl md:text-4xl text-[#EDEDE8] tracking-[-0.02em] leading-tight">
                  {exp.role}
                </h3>
                <p className="text-[#FF3D00] text-lg mt-1 mb-5">@ {exp.company}</p>

                <ul className="space-y-3 mb-6">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-[#93938F]">
                      <span className="text-[#FF3D00] mt-1 shrink-0">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-md border border-white/10 text-[#93938F]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
