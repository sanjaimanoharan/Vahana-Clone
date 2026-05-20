import { useState, useRef } from 'react';
import indiaMap from '../assets/India_map_new.png';

const STATE_DATA = {
  tn: {
    name: 'TAMIL NADU',
    services: 19,
    path: 'M12,4 L16,5 L18,8 L20,12 L19,16 L17,20 L14,24 L10,25 L9,22 L11,18 L10,14 L8,10 L7,7 L9,5 Z',
  },
  kl: {
    name: 'KERALA',
    services: 14,
    path: 'M8,4 L10,7 L11,12 L12,18 L10,24 L7,26 L6,22 L8,16 L8,10 L6,6 Z',
  },
  ka: {
    name: 'KARNATAKA',
    services: 18,
    path: 'M10,4 L14,5 L18,8 L16,14 L18,18 L16,22 L12,24 L9,22 L8,18 L7,12 L6,8 L7,5 Z',
  },
  mh: {
    name: 'MAHARASHTRA',
    services: 23,
    path: 'M6,6 L12,4 L18,5 L24,7 L26,11 L22,14 L20,18 L16,16 L12,14 L8,12 L5,9 Z',
  },
  gj: {
    name: 'GUJARAT',
    services: 17,
    path: 'M18,4 L22,6 L24,10 L22,14 L18,16 L14,14 L10,12 L6,14 L8,10 L12,8 Z',
  },
  rj: {
    name: 'RAJASTHAN',
    services: 21,
    path: 'M10,4 L16,3 L22,6 L24,11 L20,16 L14,18 L8,14 L6,8 L7,5 Z',
  },
  mp: {
    name: 'MADHYA PRADESH',
    services: 16,
    path: 'M6,8 L12,6 L18,5 L24,7 L26,12 L22,15 L18,14 L14,16 L10,14 L6,12 Z',
  },
  up: {
    name: 'UTTAR PRADESH',
    services: 25,
    path: 'M6,10 L12,8 L18,6 L24,8 L26,12 L22,15 L18,14 L14,16 L10,14 Z',
  },
  ap: {
    name: 'ANDHRA PRADESH',
    services: 19,
    path: 'M12,4 L16,5 L18,9 L19,14 L16,18 L12,22 L10,20 L9,15 L11,10 Z',
  },
  od: {
    name: 'ODISHA',
    services: 18,
    path: 'M8,6 L14,5 L18,7 L20,11 L18,15 L14,17 L10,15 L7,11 Z',
  },
  wb: {
    name: 'WEST BENGAL',
    services: 22,
    path: 'M10,4 L12,8 L14,14 L12,20 L9,22 L8,18 L10,12 L9,7 Z',
  },
};

function getStateFromCoords(x, y) {
  if (x > 0.45 && x < 0.65 && y > 0.72 && y < 0.98) return STATE_DATA.tn;
  if (x > 0.35 && x < 0.50 && y > 0.75 && y < 0.96) return STATE_DATA.kl;
  if (x > 0.30 && x < 0.52 && y > 0.58 && y < 0.78) return STATE_DATA.ka;
  if (x > 0.28 && x < 0.58 && y > 0.46 && y < 0.62) return STATE_DATA.mh;
  if (x > 0.12 && x < 0.34 && y > 0.38 && y < 0.54) return STATE_DATA.gj;
  if (x > 0.16 && x < 0.42 && y > 0.22 && y < 0.44) return STATE_DATA.rj;
  if (x > 0.40 && x < 0.62 && y > 0.34 && y < 0.56) return STATE_DATA.mp;
  if (x > 0.46 && x < 0.68 && y > 0.22 && y < 0.38) return STATE_DATA.up;
  if (x > 0.52 && x < 0.74 && y > 0.52 && y < 0.74) return STATE_DATA.ap;
  if (x > 0.60 && x < 0.78 && y > 0.40 && y < 0.58) return STATE_DATA.od;
  if (x > 0.65 && x < 0.82 && y > 0.30 && y < 0.46) return STATE_DATA.wb;
  
  // Default fallback
  return STATE_DATA.tn;
}

export default function IndiaMapCard({ onDemoClick }) {
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [stateInfo, setStateInfo] = useState(STATE_DATA.tn);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    const info = getStateFromCoords(x, y);
    setStateInfo(info);
    
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="flex flex-col h-full bg-white md:bg-transparent relative" 
      ref={containerRef}
    >
      {/* Map image — fills remaining height */}
      <div 
        className="flex-1 flex flex-col items-center justify-center p-0 cursor-crosshair relative"
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          onClick={onDemoClick}
          className="w-full focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg overflow-hidden"
          aria-label="India map — select a state"
        >
          <img
            src={indiaMap}
            alt="India map — click to select a state"
            className="w-full h-auto object-contain block hover:scale-[1.01] transition-transform duration-300"
          />
        </button>
      </div>

      {hovered && (
        <div
          className="absolute pointer-events-none z-50 shadow-[0_8px_30px_rgb(0,0,0,0.16)] flex flex-col rounded-lg overflow-hidden"
          style={{
            left: coords.x,
            top: coords.y - 12,
            width: '185px',
            transform: 'translate(-50%, -100%)',
          }}
        >
          {/* Header */}
          <div
            className="text-white text-[12px] font-bold text-center py-1 px-3 rounded-t-lg"
            style={{
              background: '#147291',
              textShadow: '0 1px 1px rgba(0,0,0,0.2)',
              borderBottom: '1px solid #105d76',
            }}
          >
            {stateInfo.name}
          </div>
          
          {/* Body */}
          <div
            className="flex items-center gap-2 p-2 border-t-0 rounded-b-lg"
            style={{
              background: '#f5a8a0',
              border: '1.5px solid #f3958c',
              borderTop: 'none',
            }}
          >
            {/* Outline Circle */}
            <div
              className="w-8 h-8 rounded-full bg-[#f0ede9] border border-gray-400 flex items-center justify-center flex-shrink-0 shadow-sm"
            >
              <svg
                viewBox="0 0 30 30"
                className="w-6 h-6 text-[#3b82f6] fill-[#3b82f6]"
              >
                <path d={stateInfo.path} />
              </svg>
            </div>
            
            {/* Info text */}
            <div className="flex flex-col flex-1 leading-tight text-center">
              <span className="text-[#063156] font-bold text-[9px] tracking-tight">
                NUMBER OF SERVICES
              </span>
              <span className="text-[#063156] font-extrabold text-[15px] mt-0.5">
                {stateInfo.services}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
