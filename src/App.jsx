import { useState } from 'react';
import { translations } from './i18n';
import TopBar from './components/TopBar';
import HeaderBanner from './components/HeaderBanner';
import NavButtons from './components/NavButtons';
import ServiceForm from './components/ServiceForm';
import AwarenessBanner from './components/AwarenessBanner';
import IndiaMapCard from './components/IndiaMapCard';
import DemoModal from './components/DemoModal';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('en');
  const [fontSize, setFontSize] = useState(14);
  const [modalOpen, setModalOpen] = useState(false);

  const t = translations[lang];

  const openDemo = () => setModalOpen(true);
  const closeDemo = () => setModalOpen(false);

  return (
    <div
      className="min-h-screen flex flex-col overflow-x-hidden"
      style={{ fontSize: `${fontSize}px`, background: '#f0f4f8' }}
    >
      {/* Top utility bar */}
      <TopBar lang={lang} setLang={setLang} fontSize={fontSize} setFontSize={setFontSize} t={t} />

      {/* Government header */}
      <HeaderBanner t={t} />

      {/* Navigation buttons */}
      <NavButtons t={t} onDemoClick={openDemo} />

      {/* Main content */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 py-4 box-border">
        <div className="grid grid-cols-1 md:grid-cols-[290px_1fr_240px] gap-3 items-stretch min-w-0">
          {/* Left: Service Form */}
          <div className="flex flex-col">
            <ServiceForm t={t} onDemoClick={openDemo} />
          </div>

          {/* Center: Awareness Banner */}
          <div className="flex flex-col">
            <AwarenessBanner t={t} onDemoClick={openDemo} />
          </div>

          {/* Right: India Map */}
          <div className="flex flex-col">
            <IndiaMapCard t={t} onDemoClick={openDemo} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer t={t} onDemoClick={openDemo} />

      {/* Demo modal */}
      <DemoModal isOpen={modalOpen} onClose={closeDemo} />
    </div>
  );
}
