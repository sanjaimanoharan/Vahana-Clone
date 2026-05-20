import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

function DropdownMenu({ items, onSelect }) {
  return (
    <motion.ul
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18 }}
      className="absolute left-0 top-full mt-1 bg-[#3a3a3a] border border-gray-600 rounded shadow-xl z-50 min-w-[260px]"
      role="menu"
    >
      {items.map((item, i) => (
        <li key={i} role="none">
          <button
            role="menuitem"
            onClick={() => onSelect(item)}
            className="w-full text-left px-4 py-3 text-white text-sm hover:bg-[#555] transition-colors border-b border-gray-600 last:border-b-0"
          >
            {item}
          </button>
        </li>
      ))}
    </motion.ul>
  );
}

// Light blue button with gold/yellow text (Know Your Payment, Verify Receipt)
function NavBtnGold({ label, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 px-3 py-[7px] text-[#ffcc00] text-xs sm:text-[13px] font-bold rounded-lg
        transition-all duration-150 whitespace-nowrap select-none border border-[#1a6abf] shadow-sm
        active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
      style={{
        background: 'linear-gradient(180deg, #4da1e6 0%, #1a6abf 100%)',
        textShadow: '0 1px 2px rgba(0,0,0,0.5)',
      }}
    >
      {label}{children}
    </button>
  );
}

// Standard blue button (Apply For New Registration, Administrative Users)
function NavBtnBlue({ label, onClick, children, ariaHaspopup, ariaExpanded }) {
  return (
    <button
      onClick={onClick}
      aria-haspopup={ariaHaspopup}
      aria-expanded={ariaExpanded}
      className="flex items-center gap-1.5 px-3 py-[7px] text-white text-xs sm:text-[13px] font-medium rounded-lg
        transition-all duration-150 whitespace-nowrap select-none border border-[#1a6abf] shadow-sm
        active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
      style={{
        background: 'linear-gradient(180deg, #4da1e6 0%, #1a6abf 100%)',
        textShadow: '0 1px 1px rgba(0,0,0,0.25)',
      }}
    >
      {label}{children}
    </button>
  );
}

// Dark navy/black button (Feedback/Complaint)
function NavBtnDark({ label, onClick, children, ariaHaspopup, ariaExpanded }) {
  return (
    <button
      onClick={onClick}
      aria-haspopup={ariaHaspopup}
      aria-expanded={ariaExpanded}
      className="flex items-center gap-1.5 px-4 py-[7px] text-white text-xs sm:text-[13px] font-bold rounded-lg
        transition-all duration-150 whitespace-nowrap select-none border border-[#002244] shadow-md
        active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
      style={{
        background: 'linear-gradient(180deg, #004488 0%, #001133 100%)',
        textShadow: '0 1px 1px rgba(0,0,0,0.5)',
      }}
    >
      {label}{children}
    </button>
  );
}

export default function NavButtons({ t, onDemoClick }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  const applyItems = [t.nocVehicle, t.tempVehicle];
  const adminItems = [t.appointmentLogin, t.helpdeskLogin, t.rtoLogin];

  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setOpenDropdown(null);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const toggle = (name) => setOpenDropdown((o) => (o === name ? null : name));

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      className="border-b border-gray-300"
      style={{
        background: 'linear-gradient(180deg, #f0f7ff 0%, #d0e4f5 100%)',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-3 py-2 flex flex-wrap items-center gap-2">

        {/* Know Your Payment */}
        <NavBtnGold label={t.knowPayment} onClick={onDemoClick} />

        {/* Verify Receipt */}
        <NavBtnGold label={t.verifyReceipt} onClick={onDemoClick} />

        {/* Feedback/Complaint — dark navy */}
        <NavBtnDark label={t.feedback} onClick={onDemoClick} />

        {/* Apply For New Registration — blue with dropdown */}
        <div className="relative">
          <NavBtnBlue
            label={t.applyNew}
            onClick={() => toggle('apply')}
            ariaHaspopup="menu"
            ariaExpanded={openDropdown === 'apply'}
          >
            <FaChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${openDropdown === 'apply' ? 'rotate-180' : ''}`}
            />
          </NavBtnBlue>
          <AnimatePresence>
            {openDropdown === 'apply' && (
              <DropdownMenu
                items={applyItems}
                onSelect={() => { setOpenDropdown(null); onDemoClick(); }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Administrative Users — blue, pushed right */}
        <div className="relative ml-auto">
          <NavBtnBlue
            label={t.adminUsers}
            onClick={() => toggle('admin')}
            ariaHaspopup="menu"
            ariaExpanded={openDropdown === 'admin'}
          >
            <FaChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${openDropdown === 'admin' ? 'rotate-180' : ''}`}
            />
          </NavBtnBlue>
          <AnimatePresence>
            {openDropdown === 'admin' && (
              <DropdownMenu
                items={adminItems}
                onSelect={() => { setOpenDropdown(null); onDemoClick(); }}
              />
            )}
          </AnimatePresence>
        </div>

      </div>
    </nav>
  );
}
