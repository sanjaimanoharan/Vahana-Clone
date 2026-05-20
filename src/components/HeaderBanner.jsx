import vahanLogo from '../assets/VahanCitzenServicelogo.png';
import swachhLogo from '../assets/swachh-bharat-logo.png';

export default function HeaderBanner({ t }) {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a4f8c 0%, #1a6fad 40%, #2a8fc8 70%, #3aafde 100%)',
      }}
    >
      {/* Decorative wave lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>
      {/* Diagonal stripe accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-48 opacity-20 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.3) 8px, rgba(255,255,255,0.3) 10px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Left: VAHAN Logo image */}
        <div className="flex items-center gap-3">
          <img
            src={vahanLogo}
            alt="VAHAN Citizen Services"
            className="h-16 sm:h-20 w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {/* Center: Ministry info */}
        <div className="text-center flex-1 hidden md:block">
          <p className="text-yellow-200 text-sm font-medium tracking-wide">{t.govtIndia}</p>
          <h2 className="text-white font-bold tracking-wide leading-tight" style={{ fontSize: 'clamp(13px, 1.8vw, 20px)' }}>
            {t.ministry}
          </h2>
        </div>

        {/* Right: Swachh Bharat logo */}
        <div className="flex-shrink-0 hidden sm:flex flex-col items-center gap-1">
          <img
            src={swachhLogo}
            alt="Swachh Bharat"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </div>
      </div>

      {/* Mobile: Ministry info below */}
      <div className="md:hidden text-center pb-2 px-4">
        <p className="text-yellow-200 text-xs font-medium">{t.govtIndia}</p>
        <p className="text-white font-bold text-sm leading-tight">{t.ministry}</p>
      </div>
    </header>
  );
}
