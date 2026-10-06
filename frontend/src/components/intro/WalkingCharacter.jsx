import React, { useEffect } from 'react';

export default function WalkingCharacter({ onWalkComplete }) {
  useEffect(() => {
    // Walk duration matches the 2.2s CSS keyframe animation
    const timer = setTimeout(() => {
      if (onWalkComplete) onWalkComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onWalkComplete]);

  return (
    <div className="walker-stage-container">
      {/* Ground Line & Tech Grid */}
      <div className="walker-ground-line"></div>
      <div className="walker-ground-particles"></div>

      {/* Walking Character Carrier */}
      <div className="character-track">
        {/* Footstep Ambient Ground Glow */}
        <div className="char-trail-aura"></div>

        {/* Scalable Vector Cartoon Tech Character */}
        <svg
          className="svg-character"
          viewBox="0 0 140 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back Arm (Swings in opposition to front arm) */}
          <g className="char-arm-back">
            <rect x="44" y="65" width="10" height="36" rx="5" fill="#313540" />
            {/* Hand */}
            <circle cx="49" cy="103" r="5" fill="#e1b899" />
          </g>

          {/* Left Leg (Back Leg) */}
          <g className="char-leg-left">
            {/* Thigh & Shin */}
            <rect x="52" y="105" width="12" height="42" rx="6" fill="#1c202d" />
            {/* Sneaker */}
            <path
              d="M48 144 H68 C71 144 73 147 71 150 L69 153 H46 C45 150 46 144 48 144 Z"
              fill="#4cd7f6"
            />
            {/* Sneaker Sole */}
            <rect x="45" y="152" width="27" height="3" rx="1.5" fill="#ffffff" />
          </g>

          {/* Main Body Group (Bobbing) */}
          <g className="char-body-group">
            {/* Tech Backpack */}
            <rect x="36" y="62" width="16" height="34" rx="6" fill="#171b26" stroke="#4cd7f6" strokeWidth="1" />
            <rect x="34" y="70" width="4" height="18" rx="2" fill="#4cd7f6" opacity="0.8" />

            {/* Torso / Tech Hoodie */}
            <path
              d="M48 58 Q66 54 84 58 L86 108 Q66 112 46 108 Z"
              fill="#262a35"
              stroke="#353944"
              strokeWidth="1.5"
            />
            {/* Hoodie Pocket & Zip Accents */}
            <path d="M66 57 V108" stroke="#4cd7f6" strokeWidth="1.5" strokeDasharray="3 2" />
            <path d="M54 88 H78 V103 H54 Z" fill="#1e222d" rx="3" />

            {/* Head & Face Group */}
            <g className="char-head-group">
              {/* Neck */}
              <rect x="62" y="48" width="8" height="12" fill="#e1b899" />

              {/* Head Base */}
              <circle cx="66" cy="36" r="16" fill="#f4cbb2" />

              {/* Hair (Modern flow style) */}
              <path
                d="M50 34 C50 20 62 16 78 18 C83 22 84 28 84 32 C78 28 72 28 66 30 C60 32 54 36 50 34 Z"
                fill="#1f1e29"
              />
              <path d="M50 32 C52 24 60 22 66 22 C64 26 58 29 52 34 Z" fill="#2d2b3b" />

              {/* Glasses / Visor Frame */}
              <rect x="66" y="30" width="16" height="8" rx="3" fill="#0f131d" />
              <rect x="68" y="32" width="12" height="4" rx="1.5" fill="#4cd7f6" opacity="0.9" />

              {/* Headphones Over-Ear */}
              <path d="M54 36 C54 22 78 22 78 36" stroke="#c0c1ff" strokeWidth="3" fill="none" />
              <rect x="52" y="30" width="6" height="14" rx="3" fill="#8083ff" />
              <circle cx="55" cy="37" r="2" fill="#ffffff" />
            </g>
          </g>

          {/* Right Leg (Front Leg) */}
          <g className="char-leg-right">
            {/* Thigh & Shin */}
            <rect x="68" y="105" width="12" height="42" rx="6" fill="#282e3f" />
            {/* Sneaker */}
            <path
              d="M66 144 H86 C89 144 91 147 89 150 L87 153 H64 C63 150 64 144 66 144 Z"
              fill="#c0c1ff"
            />
            {/* Sneaker Sole */}
            <rect x="63" y="152" width="27" height="3" rx="1.5" fill="#ffffff" />
          </g>

          {/* Front Arm (Swings in counter-balance) */}
          <g className="char-arm-front">
            <rect x="68" y="65" width="10" height="36" rx="5" fill="#353b49" />
            {/* Smartphone / Neural Remote in Hand */}
            <rect x="68" y="96" width="12" height="7" rx="2" fill="#0a0e18" stroke="#4cd7f6" strokeWidth="0.8" />
            {/* Hand */}
            <circle cx="73" cy="101" r="5" fill="#f4cbb2" />
          </g>
        </svg>
      </div>

      {/* Tech Progress Status */}
      <div className="walker-status-box">
        <span className="walker-status-text">
          <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#CCD0CF' }}>
            terminal
          </span>
          <span>Accessing Rohitanshu's Portfolio...</span>
        </span>
        <div className="walker-progress-track">
          <div className="walker-progress-bar"></div>
        </div>
      </div>
    </div>
  );
}
