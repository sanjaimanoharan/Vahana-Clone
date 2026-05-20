import nicLogo from '../assets/nic-logo.png';

export default function Footer({ t, onDemoClick }) {
  const links = [
    { label: t.footerAbout },
    { label: t.footerPrivacy },
    { label: t.footerTerms },
    { label: t.footerContact },
  ];

  return (
    <footer className="bg-[#2a2a2a] text-gray-300 mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* NIC Logo */}
          <div className="flex-shrink-0">
            <img
              src={nicLogo}
              alt="National Informatics Centre"
              className="h-14 w-auto object-contain bg-white rounded p-1"
            />
          </div>

          {/* Center info */}
          <div className="flex-1 text-center">
            <p className="text-gray-300 text-xs leading-relaxed">
              {t.footerBuild}
            </p>
            <p className="text-gray-400 text-xs mt-1">{t.footerBestView}</p>
            <p className="text-gray-400 text-xs mt-1">{t.footerBelongs}</p>
            <p className="text-gray-400 text-xs">{t.footerGovt}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-3 pt-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-400 text-xs">{t.footerCopy}</p>
          <nav className="flex flex-wrap justify-center gap-3" aria-label="Footer navigation">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={onDemoClick}
                className="text-gray-400 text-xs hover:text-white transition-colors hover:underline focus:outline-none focus:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
