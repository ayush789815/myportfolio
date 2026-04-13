import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { YKStudioBanner, CafeUbudBanner } from './ProjectBanners';

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  company: string;
  year: string;
  role: string;
  description: string;
  tech: string[];
  gradient: string;
  banner?: React.ReactNode;
  image?: string;
  liveLink: string;
  githubLink?: string;
};

const projects: Project[] = [
  {
    title: 'YK Studio',
    company: 'Creative Production',
    year: '2025',
    role: 'Frontend · Motion',
    description:
      'Creative production studio with cinematic scroll, elegant typography and storytelling-first layouts. Dark minimal aesthetic.',
    tech: ['React', 'GSAP', 'Tailwind', 'Framer Motion'],
    gradient: 'from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a]',
    banner: <YKStudioBanner />,
    liveLink: 'https://69c79463ad4a3039e6f5efa2--yk-studio.netlify.app/',
  },
  {
    title: 'Cafe Ubud',
    company: 'Hospitality',
    year: '2025',
    role: 'Frontend · UX',
    description:
      'Moody Balinese-inspired café & lounge website. Warm, cinematic hero, elegant serif typography and immersive storytelling.',
    tech: ['React', 'Tailwind', 'GSAP'],
    gradient: 'from-[#2d3d28] via-[#1a2418] to-[#0a0e09]',
    banner: <CafeUbudBanner />,
    liveLink: 'https://cafe-ubud.vercel.app/',
  },
  {
    title: 'Gaswale Admin Panel',
    company: 'Logistics',
    year: '2025',
    role: 'Frontend · Dashboards',
    description:
      'Full admin system integrating 50+ REST APIs across orders, vendors, delivery partners, payments and reports. Reusable components, optimized data handling.',
    tech: ['React.js', 'Tailwind', 'REST APIs', 'Charts'],
    gradient: 'from-[#1e3a5f] via-[#0c1929] to-[#0a0f1a]',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    liveLink: '#',
  },
  {
    title: 'StayMate Dashboard',
    company: 'Hospitality SaaS',
    year: '2025',
    role: 'Frontend',
    description:
      'Dashboard modules for rooms, bookings, users and analytics. API integration for listings, payments and booking workflows.',
    tech: ['React.js', 'Tailwind', 'REST APIs'],
    gradient: 'from-[#3d2e1e] via-[#1f1710] to-[#0e0a06]',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
    liveLink: '#',
  },
  {
    title: 'Real Estate Admin',
    company: 'Property Tech',
    year: '2024',
    role: 'Frontend',
    description:
      'CRUD modules for properties, pricing, categories and agents. APIs for uploads, filtering, approvals and analytics.',
    tech: ['React.js', 'Tailwind', 'REST APIs'],
    gradient: 'from-[#1e3a2d] via-[#0f1f18] to-[#05100c]',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop',
    liveLink: 'https://fabulous-daffodil-9cf19d.netlify.app/',
    githubLink: 'https://github.com/ayush789815/Osumare_frontend_task',
  },
  {
    title: 'Exclusive E-Commerce',
    company: 'Retail',
    year: '2024',
    role: 'Full Stack',
    description:
      'E-commerce platform with Razorpay payment, advanced search & filtering, shopping cart and responsive design.',
    tech: ['React', 'Node', 'MongoDB', 'Razorpay'],
    gradient: 'from-[#3d1e3a] via-[#1f101f] to-[#0e050e]',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
    liveLink: 'https://exclusive-786.netlify.app/',
    githubLink: 'https://github.com/ayush789815/ecommerce',
  },
];

const Projects: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.proj-title', {
        y: 60,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
      gsap.from('.proj-card', {
        y: 50,
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
      id="projects"
      ref={rootRef}
      className="relative py-32 md:py-40 px-6 md:px-11 scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16 md:mb-20 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
                (01) — Selected Work
              </span>
            </div>
            <h2
              className="proj-title font-display font-bold text-[#EDEDE8] leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(44px, 7vw, 110px)' }}
            >
              Recent <span className="italic font-light text-[#93938F]">projects</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-[#93938F]">
            A selection of things I've designed, built and shipped across
            dashboards, frontend experiences and full-stack products.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-6 md:space-y-8">
          {projects.map((project, idx) => (
            <a
              key={project.title}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-card group relative grid md:grid-cols-2 gap-0 border border-white/[0.09] hover:border-white/30 rounded-2xl overflow-hidden bg-[#141413] transition-all duration-500"
            >
              {/* Info panel */}
              <div className="relative p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[320px]">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#93938F]">
                    0{idx + 1} / {String(projects.length).padStart(2, '0')}
                  </span>
                  {/* Arrow */}
                  <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-[#EDEDE8] transition-all duration-500 group-hover:border-[#FF3D00] group-hover:bg-[#FF3D00] group-hover:rotate-45">
                    ↗
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3 text-[11px] uppercase tracking-[0.2em] text-[#93938F]">
                    <span>{project.company}</span>
                    <span className="w-1 h-1 rounded-full bg-[#93938F]" />
                    <span>{project.year}</span>
                    <span className="w-1 h-1 rounded-full bg-[#93938F]" />
                    <span>{project.role}</span>
                  </div>

                  <h3
                    className="font-display font-bold text-[#EDEDE8] leading-[1.05] tracking-[-0.03em] mb-5"
                    style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-[#93938F] text-[14.5px] leading-relaxed mb-6 max-w-md">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10 text-[#93938F]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual panel */}
              <div
                className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} min-h-[280px] md:min-h-0 border-l border-white/[0.06]`}
              >
                {/* animated blob */}
                <div
                  className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-30 blur-3xl transition-all duration-700 group-hover:opacity-50 group-hover:scale-125"
                  style={{ background: '#FF3D00' }}
                />

                <div className="relative w-full h-full flex items-center justify-center p-6 md:p-10">
                  <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 transition-transform duration-700 group-hover:scale-[1.06]">
                    {project.banner ? (
                      project.banner
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/ayush789815"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-[13px] text-[#EDEDE8] hover:border-[#EDEDE8]/60 hover:bg-white/5 transition-all"
          >
            See more on GitHub <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
