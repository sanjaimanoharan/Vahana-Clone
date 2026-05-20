import { useState } from 'react';
import { FaQuestion, FaBookOpen, FaPhone, FaCaretDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MARQUEE_MSG =
  'F5 , CTRL+F5 and Right-Click are disabled on service pages due to security/technical reasons. If unable to view page properly reload the page.   |   F5 , CTRL+F5 and Right-Click are disabled on service pages due to security/technical reasons. If unable to view page properly reload the page.';

export default function TopBar({ lang, setLang, fontSize, setFontSize, t }) {
  const [langOpen, setLangOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'ta', label: 'தமிழ்' },
  ];

  const currentLang = languages.find((l) => l.code === lang);

  return (
    <div
      className="border-b border-gray-300"
      style={{ background: '#eaeaea' }}
    >
      <div className="flex items-center h-8">

        {/* Scrolling marquee — takes all available space */}
        <div className="flex-1 overflow-hidden min-w-0 px-2">
          <div className="marquee-track">
            <span className="text-red-600 font-semibold text-xs whitespace-nowrap">
              {MARQUEE_MSG}
            </span>
          </div>
        </div>

        {/* Right controls — always visible, no shrink */}
        <div className="flex items-center gap-3 pr-2 flex-shrink-0">

          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1 text-xs text-gray-700 hover:text-gray-900 font-bold transition-colors px-1"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              {currentLang?.label}
              <FaCaretDown className="w-3.5 h-3.5 text-[#006699]" />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-md z-50 min-w-[100px]"
                  role="listbox"
                >
                  {languages.map((l) => (
                    <li
                      key={l.code}
                      role="option"
                      aria-selected={lang === l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`px-3 py-1.5 cursor-pointer hover:bg-blue-50 text-xs ${lang === l.code ? 'bg-blue-100 font-semibold' : ''}`}
                    >
                      {l.label}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Font size controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setFontSize((s) => Math.max(10, s - 2))}
              className={`w-6 h-5 rounded flex items-center justify-center text-gray-700 hover:text-gray-900 border transition-all text-[11px] ${fontSize < 14 ? 'bg-gray-300 border-gray-400 font-extrabold' : 'bg-white border-gray-300 font-bold'}`}
              title="Decrease font size"
              aria-label="Decrease font size"
            >
              A<sup>-</sup>
            </button>
            <button
              onClick={() => setFontSize(14)}
              className={`w-6 h-5 rounded flex items-center justify-center text-gray-700 hover:text-gray-900 border transition-all text-xs ${fontSize === 14 ? 'bg-gray-300 border-gray-400 font-extrabold' : 'bg-white border-gray-300 font-bold'}`}
              title="Default font size"
              aria-label="Default font size"
            >
              A
            </button>
            <button
              onClick={() => setFontSize((s) => Math.min(18, s + 2))}
              className={`w-6 h-5 rounded flex items-center justify-center text-gray-700 hover:text-gray-900 border transition-all text-[11px] ${fontSize > 14 ? 'bg-gray-300 border-gray-400 font-extrabold' : 'bg-white border-gray-300 font-bold'}`}
              title="Increase font size"
              aria-label="Increase font size"
            >
              A<sup>+</sup>
            </button>
          </div>

          {/* Help icons */}
          <div className="flex items-center gap-1">
            <button
              className="w-6 h-6 rounded-full text-white flex items-center justify-center hover:bg-[#206ea7] transition-colors flex-shrink-0 shadow-sm"
              style={{ backgroundColor: '#2d88cb' }}
              title="Help"
              aria-label="Help"
            >
              <FaQuestion className="w-2.5 h-2.5" />
            </button>
            <button
              className="w-6 h-6 rounded-full text-white flex items-center justify-center hover:bg-[#d87d13] transition-colors flex-shrink-0 shadow-sm"
              style={{ backgroundColor: '#f7931e' }}
              title="Support Manual"
              aria-label="Support Manual"
            >
              <FaBookOpen className="w-3 h-3" />
            </button>
            <button
              className="w-6 h-6 rounded-full text-white flex items-center justify-center hover:bg-[#188eb5] transition-colors flex-shrink-0 shadow-sm"
              style={{ backgroundColor: '#1fa9d6' }}
              title="Phone Support"
              aria-label="Phone Support"
            >
              <FaPhone className="w-2.5 h-2.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
