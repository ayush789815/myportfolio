import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { label: 'Email', value: 'ayushvishwakarmaa612@gmail.com', link: 'mailto:ayushvishwakarmaa612@gmail.com' },
  { label: 'LinkedIn', value: 'ayush-vishwakarmaa', link: 'https://www.linkedin.com/in/ayush-vishwakarma-9300b3291' },
  { label: 'GitHub', value: '@ayush789815', link: 'https://github.com/ayush789815' },
  { label: 'Location', value: 'Bhopal, India', link: 'https://maps.app.goo.gl/ZPynogdu3x4obtuK8' },
];

const Contact: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ct-anim', {
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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ayushvishwakarmaa612@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section
      id="contact"
      ref={rootRef}
      className="relative py-32 md:py-40 px-6 md:px-11 scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="ct-anim flex items-center gap-3 mb-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
            (06) — Contact
          </span>
        </div>

        <h2
          className="ct-anim font-display font-bold text-[#EDEDE8] leading-[0.95] tracking-[-0.04em] mb-10"
          style={{ fontSize: 'clamp(52px, 10vw, 160px)' }}
        >
          Let's build <br />
          <span className="italic font-light text-[#93938F]">something.</span>
        </h2>

        <p className="ct-anim max-w-xl text-[15px] leading-relaxed text-[#93938F] mb-10">
          Got a role, a project, or just want to say hi? My inbox is always
          open — I'll get back to you within 24 hours.
        </p>

        {/* Email CTA */}
        <div className="ct-anim flex flex-wrap items-center gap-3 mb-16">
          <a
            href="mailto:ayushvishwakarmaa612@gmail.com"
            className="group inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[#EDEDE8] text-[#0C0C0B] text-[14px] font-medium hover:bg-[#FF3D00] hover:text-white transition-colors"
          >
            Say hi
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-3 px-6 py-4 rounded-full border border-white/15 text-[14px] text-[#EDEDE8] hover:border-[#EDEDE8]/60 hover:bg-white/5 transition-all"
          >
            {copied ? (
              <span className="text-[#22c55e]">✓ Copied</span>
            ) : (
              <>
                <span>ayushvishwakarmaa612@gmail.com</span>
                <span className="text-[#93938F]">⧉</span>
              </>
            )}
          </button>
          <a
            href="/RenderCV_EngineeringResumes_Theme.pdf"
            download="Ayush_Vishwakarma_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/15 text-[14px] text-[#EDEDE8] hover:border-[#EDEDE8]/60 hover:bg-white/5 transition-all"
          >
            Download CV
            <span>↓</span>
          </a>
        </div>

        {/* Socials grid */}
        <div className="ct-anim grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.09] border border-white/[0.09] rounded-2xl overflow-hidden">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#141413] p-6 md:p-8 hover:bg-[#0C0C0B] transition-colors"
            >
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
                {s.label}
              </span>
              <p className="mt-3 text-[#EDEDE8] text-[14px] break-all group-hover:text-[#FF3D00] transition-colors">
                {s.value}
              </p>
              <span className="absolute top-6 right-6 text-[#93938F] group-hover:text-[#FF3D00] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/[0.09] flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
          <span>© 2026 Ayush Vishwakarma</span>
          <span className="hidden md:inline">Built with React · Tailwind · GSAP</span>
          <span>v1.0 — Bhopal, IN</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
