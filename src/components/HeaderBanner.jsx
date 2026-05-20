import vahanLogo from '../assets/VahanCitzenServicelogo.png';
import swachhLogo from '../assets/swachh-bharat-logo.png';

export default function HeaderBanner({ t }) {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #0e5b83 0%, #1579a3 45%, #007e9b 100%)',
      }}
    >
      {/* Decorative wave lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-2 flex items-center justify-between gap-4">
        {/* Left section: Logo + Divider + Ministry info */}
        <div className="flex items-center gap-3">
          <img
            src={vahanLogo}
            alt="VAHAN Citizen Services"
            className="h-12 sm:h-[54px] w-auto object-contain flex-shrink-0"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          
          {/* Vertical Divider */}
          <div className="h-9 w-[1px] bg-white opacity-40 hidden md:block" />

          {/* Ministry info */}
          <div className="hidden md:flex flex-col text-left leading-tight">
            <span 
              className="text-white text-[12px] font-semibold tracking-wide"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
            >
              {t.govtIndia}
            </span>
            <h2 
              className="text-white font-bold tracking-wide uppercase text-[15px] mt-0.5"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
            >
              {t.ministry}
            </h2>
          </div>
        </div>

        {/* Right section: Swachh Bharat logo */}
        <div className="flex-shrink-0 flex items-center">
          <img
            src={swachhLogo}
            alt="Swachh Bharat"
            className="h-12 sm:h-[54px] w-auto object-contain"
          />
        </div>
      </div>

      {/* Mobile: Ministry info below */}
      <div className="md:hidden text-center pb-2 px-4">
        <p className="text-white text-xs font-semibold opacity-90">{t.govtIndia}</p>
        <p className="text-white font-bold text-[13px] leading-tight mt-0.5">{t.ministry}</p>
      </div>
    </header>
  );
}
