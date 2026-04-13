import React from 'react';

/**
 * Custom SVG banners hand-designed to match each project's brand.
 * YK Studio — dark minimal creative-production vibe (#080808, white, elegant typography).
 * Cafe Ubud — moody Balinese cafe/lounge (#111611, warm amber accents, tropical leaves).
 */

export const YKStudioBanner: React.FC = () => (
  <svg
    viewBox="0 0 800 500"
    className="w-full h-full object-cover"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="YK Studio banner"
  >
    <defs>
      <radialGradient id="ykVignette" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#080808" />
      </radialGradient>
      <linearGradient id="ykLine" x1="0" x2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="ykGlow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Background */}
    <rect width="800" height="500" fill="url(#ykVignette)" />

    {/* Subtle film grain dots */}
    <g opacity="0.15">
      {Array.from({ length: 60 }).map((_, i) => (
        <circle
          key={i}
          cx={(i * 97) % 800}
          cy={(i * 53) % 500}
          r={(i % 3) * 0.5 + 0.4}
          fill="#ffffff"
        />
      ))}
    </g>

    {/* Top meta row */}
    <text
      x="40"
      y="50"
      fill="#ffffff"
      opacity="0.55"
      fontFamily="Poppins, system-ui, sans-serif"
      fontSize="11"
      letterSpacing="4"
    >
      CREATIVE · PRODUCTION · STUDIO
    </text>
    <text
      x="760"
      y="50"
      textAnchor="end"
      fill="#ffffff"
      opacity="0.45"
      fontFamily="Poppins, system-ui, sans-serif"
      fontSize="11"
      letterSpacing="3"
    >
      EST · 2024
    </text>
    <line x1="40" y1="62" x2="760" y2="62" stroke="url(#ykLine)" strokeWidth="0.5" />

    {/* Central monogram */}
    <g transform="translate(400 250)">
      <circle r="120" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" />
      <circle r="80" fill="none" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1" />
      <text
        textAnchor="middle"
        dominantBaseline="central"
        fill="#ffffff"
        fontFamily="Poppins, Georgia, serif"
        fontSize="140"
        fontWeight="200"
        letterSpacing="-4"
      >
        YK
      </text>
    </g>

    {/* Big faded wordmark */}
    <text
      x="400"
      y="430"
      textAnchor="middle"
      fill="#ffffff"
      opacity="0.06"
      fontFamily="Poppins, system-ui, sans-serif"
      fontSize="110"
      fontWeight="700"
      letterSpacing="-2"
    >
      STUDIO
    </text>

    {/* Tagline */}
    <text
      x="400"
      y="400"
      textAnchor="middle"
      fill="#ffffff"
      opacity="0.75"
      fontFamily="Poppins, system-ui, sans-serif"
      fontSize="13"
      letterSpacing="6"
    >
      VISION  INTO  FORM · FORM  INTO  PLAY
    </text>

    {/* Bottom scroll indicator */}
    <line x1="400" y1="455" x2="400" y2="485" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1" />
    <circle cx="400" cy="485" r="2" fill="#ffffff" opacity="0.8" />

    {/* Corner marks */}
    <g stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" fill="none">
      <path d="M30 80 L30 100 L50 100" />
      <path d="M770 80 L770 100 L750 100" />
      <path d="M30 470 L30 450 L50 450" />
      <path d="M770 470 L770 450 L750 450" />
    </g>

    {/* Top glow */}
    <rect width="800" height="220" fill="url(#ykGlow)" />
  </svg>
);

export const CafeUbudBanner: React.FC = () => (
  <svg
    viewBox="0 0 800 500"
    className="w-full h-full object-cover"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Cafe Ubud banner"
  >
    <defs>
      <radialGradient id="ubudBg" cx="50%" cy="50%" r="80%">
        <stop offset="0%" stopColor="#1a2418" />
        <stop offset="100%" stopColor="#0a0e09" />
      </radialGradient>
      <linearGradient id="ubudWarm" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#e8b878" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#e8b878" stopOpacity="0" />
      </linearGradient>
      <radialGradient id="ubudSpot" cx="50%" cy="35%" r="45%">
        <stop offset="0%" stopColor="#f5c27a" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#f5c27a" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="ubudLine" x1="0" x2="1">
        <stop offset="0%" stopColor="#d4a96a" stopOpacity="0" />
        <stop offset="50%" stopColor="#d4a96a" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#d4a96a" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Moody background */}
    <rect width="800" height="500" fill="url(#ubudBg)" />
    <rect width="800" height="500" fill="url(#ubudSpot)" />

    {/* Tropical leaf silhouettes (left) */}
    <g opacity="0.22" fill="#2d3d28">
      <path d="M-20 400 Q 80 320 160 380 Q 200 420 170 470 Q 100 490 -20 480 Z" />
      <path d="M-10 200 Q 70 140 150 190 Q 180 230 140 260 Q 70 270 -10 240 Z" />
      <g transform="translate(60 250) rotate(-25)">
        <path d="M0 0 Q 40 -60 80 -30 Q 90 0 70 25 Q 40 35 0 20 Z" fill="#3a5232" />
        <line x1="0" y1="5" x2="75" y2="-15" stroke="#1e2a1a" strokeWidth="1.5" />
      </g>
    </g>
    {/* Tropical leaf silhouettes (right) */}
    <g opacity="0.22" fill="#2d3d28">
      <path d="M820 100 Q 720 40 640 90 Q 610 130 640 170 Q 720 180 820 150 Z" />
      <path d="M820 450 Q 720 380 640 430 Q 610 470 650 490 Q 730 500 820 495 Z" />
      <g transform="translate(730 270) rotate(35)">
        <path d="M0 0 Q -40 -60 -80 -30 Q -90 0 -70 25 Q -40 35 0 20 Z" fill="#3a5232" />
        <line x1="0" y1="5" x2="-75" y2="-15" stroke="#1e2a1a" strokeWidth="1.5" />
      </g>
    </g>

    {/* Warm corner light */}
    <rect width="800" height="500" fill="url(#ubudWarm)" />

    {/* Top meta */}
    <text
      x="400"
      y="80"
      textAnchor="middle"
      fill="#d4a96a"
      opacity="0.85"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="11"
      letterSpacing="8"
    >
      CAFÉ  ·  LOUNGE  ·  BALI
    </text>

    {/* Decorative divider */}
    <line x1="260" y1="105" x2="540" y2="105" stroke="url(#ubudLine)" strokeWidth="1" />
    <circle cx="400" cy="105" r="3" fill="#d4a96a" />
    <circle cx="380" cy="105" r="1.5" fill="#d4a96a" opacity="0.6" />
    <circle cx="420" cy="105" r="1.5" fill="#d4a96a" opacity="0.6" />

    {/* Main wordmark */}
    <text
      x="400"
      y="260"
      textAnchor="middle"
      fill="#f4e9d3"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="140"
      fontWeight="400"
      letterSpacing="14"
    >
      UBUD
    </text>

    {/* Subtitle */}
    <text
      x="400"
      y="310"
      textAnchor="middle"
      fill="#d4a96a"
      fontFamily="Georgia, serif"
      fontStyle="italic"
      fontSize="20"
      opacity="0.9"
    >
      where every sip tells a story
    </text>

    {/* Bottom divider */}
    <line x1="280" y1="360" x2="520" y2="360" stroke="url(#ubudLine)" strokeWidth="0.8" />

    {/* Coffee cup mini icon */}
    <g transform="translate(400 395)" fill="none" stroke="#d4a96a" strokeWidth="1.3" opacity="0.85">
      <path d="M-14 -6 L-14 6 Q -14 12 -8 12 L8 12 Q 14 12 14 6 L14 -6 Z" />
      <path d="M14 -2 Q 22 -2 22 4 Q 22 10 14 10" />
      {/* steam */}
      <path d="M-6 -14 Q -3 -18 -6 -22" strokeLinecap="round" />
      <path d="M0 -14 Q 3 -18 0 -22" strokeLinecap="round" />
      <path d="M6 -14 Q 9 -18 6 -22" strokeLinecap="round" />
    </g>

    {/* Bottom meta */}
    <text
      x="400"
      y="460"
      textAnchor="middle"
      fill="#f4e9d3"
      opacity="0.55"
      fontFamily="Georgia, serif"
      fontSize="10"
      letterSpacing="6"
    >
      HANDCRAFTED  COFFEE  ·  SINCE  EST.
    </text>
  </svg>
);
