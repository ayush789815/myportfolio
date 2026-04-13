import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ab-anim', {
        y: 30,
        duration: 0.9,
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
      id="about"
      ref={rootRef}
      className="relative py-32 md:py-40 px-6 md:px-11 scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24">
        {/* Left column */}
        <div>
          <div className="ab-anim flex items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
              (02) — About
            </span>
          </div>

          <h2
            className="ab-anim font-display font-bold text-[#EDEDE8] leading-[1] tracking-[-0.03em] mb-10"
            style={{ fontSize: 'clamp(40px, 6vw, 84px)' }}
          >
            Building the web, <br />
            <span className="italic font-light text-[#93938F]">
              one pixel at a time.
            </span>
          </h2>

          <div className="ab-anim space-y-5 text-[15px] leading-[1.75] text-[#93938F] max-w-xl">
            <p>
              I'm Ayush — a MERN stack developer from Bhopal, India. I build
              responsive dashboards, integrate complex APIs, and craft
              interfaces that feel as good as they look.
            </p>
            <p>
              Currently, I'm building product dashboards at{' '}
              <span className="text-[#EDEDE8]">Veramasa</span>. Previously I
              interned at <span className="text-[#EDEDE8]">Trisanco Infotech</span>{' '}
              where I shipped pixel-perfect components on live client projects.
            </p>
            <p>
              I love clean code, tight interactions, and the quiet joy of a
              perfectly tuned animation. When I'm not coding, you'll find me
              exploring motion experiments in GSAP and Three.js.
            </p>
          </div>
        </div>

        {/* Right column — stats + highlights */}
        <div className="space-y-8">
          <div className="ab-anim grid grid-cols-2 gap-px bg-white/[0.09] border border-white/[0.09] rounded-2xl overflow-hidden">
            {[
              { k: '1+', v: 'Years shipping' },
              { k: '10+', v: 'Projects delivered' },
              { k: '50+', v: 'APIs integrated' },
              { k: '100%', v: 'Commitment' },
            ].map((s) => (
              <div
                key={s.v}
                className="bg-[#141413] p-6 md:p-8"
              >
                <div className="font-display font-bold text-[#EDEDE8] tracking-[-0.03em] text-4xl md:text-5xl">
                  {s.k}
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#93938F] mt-2">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <div className="ab-anim border border-white/[0.09] rounded-2xl p-6 md:p-8 bg-[#141413]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
                Currently
              </span>
              <span className="inline-flex items-center gap-2 text-[11px] text-[#22c55e]">
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#22c55e] avail-dot" />
                active
              </span>
            </div>
            <ul className="space-y-3 text-[14px] text-[#EDEDE8]">
              <li className="flex items-start gap-3">
                <span className="text-[#FF3D00] mt-1">→</span>
                <span>Building product dashboards at Veramasa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF3D00] mt-1">→</span>
                <span>Deep-diving into advanced GSAP + Three.js motion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF3D00] mt-1">→</span>
                <span>Exploring TypeScript patterns & React performance</span>
              </li>
            </ul>
          </div>

          <div className="ab-anim flex items-center gap-6 text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
            <span>23.2599° N, 77.4126° E</span>
            <span className="w-1 h-1 rounded-full bg-[#93938F]" />
            <span>Bhopal / IST</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
