import indiaMap from '../assets/India_map_new.png';

export default function IndiaMapCard({ onDemoClick }) {
  return (
    <div className="flex flex-col h-full bg-white md:bg-transparent">
      {/* Map image — fills remaining height */}
      <div className="flex-1 flex flex-col items-center justify-center p-0">
        <button
          onClick={onDemoClick}
          className="w-full focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg overflow-hidden"
          aria-label="India map — select a state"
        >
          <img
            src={indiaMap}
            alt="India map — click to select a state"
            className="w-full h-auto object-contain block hover:scale-[1.02] transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  );
}
