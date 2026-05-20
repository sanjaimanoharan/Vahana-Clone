import awarenessBg from '../assets/mobile-number-by-citizens.jpg';

export default function AwarenessBanner() {
  return (
    <div
      className="rounded-[20px] border border-gray-300 shadow-md overflow-hidden flex-1 flex items-stretch"
      style={{ background: 'linear-gradient(to bottom, #103452 0%, #047289 100%)' }}
    >
      <img
        src={awarenessBg}
        alt="Beware of Fraudulent Websites and Apps"
        className="w-full h-full block"
        style={{
          objectFit: 'fill',
          objectPosition: 'center',
        }}
      />
    </div>
  );
}
