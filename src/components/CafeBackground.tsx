import React from 'react';

// Subtle ambient glow + grain (grain handled via .noise in index.css)
const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#0C0C0B]" />
      {/* orange accent glow top-right */}
      <div
        className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full opacity-[0.12]"
        style={{
          background:
            'radial-gradient(circle, #FF3D00 0%, rgba(255,61,0,0) 60%)',
        }}
      />
      {/* soft glow bottom-left */}
      <div
        className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full opacity-[0.08]"
        style={{
          background:
            'radial-gradient(circle, #FF7A5C 0%, rgba(255,122,92,0) 60%)',
        }}
      />
    </div>
  );
};

export default Background;
