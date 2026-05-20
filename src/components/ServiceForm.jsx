import { useState } from 'react';
import { FaCar, FaBuilding, FaChevronDown } from 'react-icons/fa';
import { stateRTOData } from '../i18n';

export default function ServiceForm({ t, onDemoClick }) {
  const [mode, setMode] = useState('vehicle');
  const [regNo, setRegNo] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedRTO, setSelectedRTO] = useState('');
  const [accepted, setAccepted] = useState(false);

  const states = Object.keys(stateRTOData);
  const rtos = selectedState ? stateRTOData[selectedState] : [];

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedRTO('');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-gray-300">

      {/* Card Header — Teal gradient */}
      <div
        className="px-4 py-2.5 text-white text-[15px] font-bold text-center"
        style={{
          background: 'linear-gradient(180deg, #13838a 0%, #007a8b 100%)',
        }}
      >
        {t.chooseOption}
      </div>

      {/* Mode toggle — white background */}
      <div className="flex border-b border-gray-200 bg-white">

        {/* Vehicle Registration */}
        <button
          onClick={() => setMode('vehicle')}
          className="flex-1 flex flex-row items-center justify-center gap-1.5 py-2 px-1 border-r border-gray-200 transition-colors"
          style={{ background: 'white' }}
          aria-pressed={mode === 'vehicle'}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all shadow-sm flex-shrink-0"
            style={{
              borderColor: mode === 'vehicle' ? '#13838a' : '#ddd',
              background: '#f8fbfc',
            }}
          >
            <FaCar
              className="w-4 h-4"
              style={{ color: mode === 'vehicle' ? '#13838a' : '#999' }}
            />
          </div>
          <span
            className="text-left leading-tight text-[13px] font-bold"
            style={{ color: mode === 'vehicle' ? '#007a8b' : '#666' }}
          >
            {t.vehicleReg}
          </span>
        </button>

        {/* Registering Authority */}
        <button
          onClick={() => setMode('authority')}
          className="flex-1 flex flex-row items-center justify-center gap-1.5 py-2 px-1 transition-colors"
          style={{ background: 'white' }}
          aria-pressed={mode === 'authority'}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all shadow-sm flex-shrink-0"
            style={{
              borderColor: mode === 'authority' ? '#13838a' : '#ddd',
              background: '#f8fbfc',
            }}
          >
            <FaBuilding
              className="w-4 h-4"
              style={{ color: mode === 'authority' ? '#13838a' : '#999' }}
            />
          </div>
          <span
            className="text-left leading-tight text-[13px] font-bold"
            style={{ color: mode === 'authority' ? '#007a8b' : '#666' }}
          >
            {t.regAuthority}
          </span>
        </button>
      </div>

      {/* Form fields — white background */}
      <div className="p-3 flex flex-col gap-2.5 flex-1 bg-white">

        {/* Registration number input */}
        {mode === 'vehicle' && (
          <input
            type="text"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value.toUpperCase())}
            placeholder={t.enterRegNo}
            maxLength={15}
            className="w-full border border-gray-300 rounded px-3 py-2 text-[13px] text-gray-700
              placeholder-gray-400 tracking-widest uppercase bg-white shadow-inner
              focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500
              hover:border-gray-400 transition-colors"
            aria-label={t.enterRegNo}
          />
        )}

        {/* State dropdown */}
        <div className="relative">
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-2 text-[13px] text-gray-600
              bg-gray-100/50 cursor-pointer shadow-sm
              focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500
              hover:border-gray-400 transition-colors"
            aria-label={t.selectState}
          >
            <option value="">{t.selectState}</option>
            {states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
        </div>

        {/* RTO dropdown */}
        <div className="relative">
          <select
            value={selectedRTO}
            onChange={(e) => setSelectedRTO(e.target.value)}
            disabled={!selectedState}
            className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-2 text-[13px] text-gray-600
              bg-gray-100/50 cursor-pointer shadow-sm
              focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500
              hover:border-gray-400 transition-colors
              disabled:cursor-not-allowed disabled:text-gray-400 disabled:bg-gray-100"
            aria-label={t.selectRTO}
          >
            <option value="">{t.selectRTO}</option>
            {rtos.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
        </div>

        {/* Accept terms */}
        <label className="flex items-start gap-2 cursor-pointer text-[12px] text-gray-700 font-medium leading-tight mt-0.5">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-teal-600 cursor-pointer flex-shrink-0"
          />
          <span>
            {t.acceptText}{' '}
            <button
              onClick={onDemoClick}
              className="text-red-600 font-bold hover:underline focus:outline-none"
            >
              {t.privacyPolicy}
            </button>{' '}
            {t.andText}{' '}
            <button
              onClick={onDemoClick}
              className="text-red-600 font-bold hover:underline focus:outline-none"
            >
              {t.termsOfService}
            </button>{' '}
            {t.forProcessing}
          </span>
        </label>

        {/* Proceed button */}
        <button
          onClick={onDemoClick}
          disabled={!accepted}
          className="w-full py-2 mt-1 rounded-lg text-white text-[15px] font-bold tracking-wide transition-all duration-200
            shadow-[0_4px_10px_rgba(91,168,232,0.3)]
            active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-teal-300
            disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none"
          style={{
            background: 'linear-gradient(180deg, #8bc6df 0%, #7dbbd6 50%, #6faec8 100%)',
            border: '1px solid #6faec8',
            color: 'white',
            textShadow: '0 1px 1px rgba(0,0,0,0.1)',
          }}
        >
          {t.proceed}
        </button>
      </div>
    </div>
  );
}
