import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const WHATSAPP_URL =
  'https://wa.me/918839042497?text=Hi%20Ayush%2C%20I%20saw%20your%20portfolio.';
const EMAIL = 'ayushvishwakarmaa612@gmail.com';

const marqueeItems = [
  'React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GSAP', 'Three.js',
  'Node.js', 'MongoDB', 'Framer Motion', 'Git', 'REST APIs', 'Figma',
];

const Hero: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.clip-reveal > span', {
        yPercent: 110,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.07,
      });
      gsap.from('.h-fade', {
        y: 18,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.06,
        delay: 0.3,
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative min-h-[100svh] flex flex-col px-6 md:px-11 pt-28 pb-10"
    >
      <div className="max-w-[1280px] mx-auto w-full flex-1 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
        {/* LEFT — main content */}
        <div>
          {/* eyebrow */}
          <div className="h-fade flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#EDEDE8]/30" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
              Frontend Developer / Portfolio · 2026
            </span>
          </div>

          {/* title */}
          <h1
            className="font-display font-bold text-[#EDEDE8] leading-[1] tracking-[-0.035em]"
            style={{ fontSize: 'clamp(40px, 5.8vw, 88px)' }}
          >
            <div className="clip-reveal block"><span>Ayush</span></div>
            <div className="clip-reveal block">
              <span>
                Vishwakar<span className="text-[#FF3D00]">ma.</span>
              </span>
            </div>
          </h1>

          {/* subtitle */}
          <p className="h-fade mt-6 text-base md:text-lg text-[#93938F] max-w-xl leading-relaxed">
            I build responsive dashboards, clean product UI and delightful
            motion — with <span className="text-[#EDEDE8]">React</span>,{' '}
            <span className="text-[#EDEDE8]">TypeScript</span> and{' '}
            <span className="text-[#EDEDE8]">Tailwind</span>. Currently shipping
            at <span className="text-[#EDEDE8]">Veramasa</span>.
          </p>

          {/* meta row */}
          <div className="h-fade mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[#93938F]">
            <span className="inline-flex items-center gap-2">
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#22c55e] avail-dot" />
              <span className="text-[#EDEDE8]">Available for work</span>
            </span>
            <span className="h-3 w-px bg-white/15" />
            <span>Bhopal, India · IST</span>
            <span className="h-3 w-px bg-white/15" />
            <span>1+ yrs shipping</span>
          </div>

          {/* CTAs */}
          <div className="h-fade mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#EDEDE8] text-[#0C0C0B] text-[13px] font-medium hover:bg-[#FF3D00] hover:text-white transition-colors"
            >
              View work
              <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-[#0C0C0B] text-[13px] font-semibold hover:bg-[#1ea855] transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-[13px] text-[#EDEDE8] hover:border-[#EDEDE8]/60 hover:bg-white/5 transition-all"
            >
              Email
            </a>
          </div>

          {/* Trusted by / worked with */}
          <div className="h-fade mt-10 pt-6 border-t border-white/[0.06]">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#93938F] mb-4">
              Shipped for
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-display">
              <span className="text-[#EDEDE8]/80 text-xl md:text-2xl tracking-tight">Veramasa</span>
              <span className="w-1 h-1 rounded-full bg-[#93938F]" />
              <span className="text-[#EDEDE8]/80 text-xl md:text-2xl tracking-tight">Trisanco Infotech</span>
              <span className="w-1 h-1 rounded-full bg-[#93938F]" />
              <span className="text-[#EDEDE8]/80 text-xl md:text-2xl tracking-tight">Gaswale</span>
              <span className="w-1 h-1 rounded-full bg-[#93938F]" />
              <span className="text-[#EDEDE8]/80 text-xl md:text-2xl tracking-tight">StayMate</span>
            </div>
          </div>
        </div>

        {/* RIGHT — info card */}
        <div className="h-fade relative">
          <div className="relative rounded-3xl border border-white/[0.09] bg-[#141413] p-6 md:p-7 overflow-hidden">
            {/* glow */}
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: '#FF3D00' }}
            />

            <div className="relative flex items-center justify-between mb-5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
                // status
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-[#22c55e] uppercase tracking-[0.2em]">
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#22c55e] avail-dot" />
                online
              </span>
            </div>

            <div className="relative flex items-center gap-4 mb-6">
              <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#FF3D00] to-[#FF7A5C] flex items-center justify-center font-display text-2xl font-bold text-[#0C0C0B]">
                AV
              </div>
              <div>
                <div className="font-display text-lg text-[#EDEDE8] tracking-tight">Ayush Vishwakarma</div>
                <div className="text-[12.5px] text-[#93938F]">Frontend Dev · @Veramasa</div>
              </div>
            </div>

            <div className="relative h-px bg-white/[0.06] mb-5" />

            <dl className="relative grid grid-cols-2 gap-y-3 gap-x-4 text-[12.5px]">
              <dt className="text-[#93938F]">Role</dt>
              <dd className="text-[#EDEDE8] text-right">Frontend Dev</dd>
              <dt className="text-[#93938F]">Stack</dt>
              <dd className="text-[#EDEDE8] text-right">React · TS · Node</dd>
              <dt className="text-[#93938F]">Experience</dt>
              <dd className="text-[#EDEDE8] text-right">1+ years</dd>
              <dt className="text-[#93938F]">Location</dt>
              <dd className="text-[#EDEDE8] text-right">Bhopal, IN</dd>
              <dt className="text-[#93938F]">Response</dt>
              <dd className="text-[#22c55e] text-right">&lt; 24 hours</dd>
            </dl>

            <div className="relative mt-6 flex gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-full bg-[#25D366] text-[#0C0C0B] text-[12px] font-semibold hover:bg-[#1ea855] transition-colors"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex-1 text-center py-2.5 rounded-full border border-white/15 text-[12px] text-[#EDEDE8] hover:border-[#EDEDE8]/50 hover:bg-white/5 transition-all"
              >
                Email
              </a>
            </div>
          </div>

          {/* stats strip below card */}
          <div className="mt-4 grid grid-cols-3 gap-px bg-white/[0.09] border border-white/[0.09] rounded-2xl overflow-hidden">
            {[
              { k: '1+', v: 'Years' },
              { k: '10+', v: 'Projects' },
              { k: '50+', v: 'APIs' },
            ].map((s) => (
              <div key={s.v} className="bg-[#141413] p-4 text-center">
                <div className="font-display font-bold text-[#EDEDE8] text-2xl md:text-3xl tracking-[-0.03em]">
                  {s.k}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#93938F] mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          {/* small floating tag */}
          <div className="absolute -top-3 -left-3 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0C0C0B] border border-white/10 text-[10px] uppercase tracking-[0.25em] text-[#93938F]">
            <span className="w-1 h-1 rounded-full bg-[#FF3D00]" />
            open to roles
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="max-w-[1280px] mx-auto w-full mt-12 relative border-t border-white/[0.06] pt-5">
        <div className="flex items-center gap-6">
          <span className="shrink-0 text-[10px] uppercase tracking-[0.3em] text-[#93938F]">
            // stack
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="flex whitespace-nowrap marquee-x gap-10 text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
              {[...marqueeItems, ...marqueeItems].map((m, i) => (
                <span key={i} className="flex items-center gap-10">
                  <span>{m}</span>
                  <span className="w-1 h-1 rounded-full bg-[#93938F]/50" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-[#25D366] text-[#0C0C0B] shadow-[0_10px_40px_-10px_rgba(37,211,102,0.7)] hover:bg-[#1ea855] transition-colors"
      >
        <span className="relative flex w-10 h-10 -ml-1 items-center justify-center rounded-full bg-[#0C0C0B]/10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </span>
        <span className="text-[13px] font-semibold whitespace-nowrap hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </section>
  );
};

export default Hero;
