import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import InfoSection from './components/InfoSection';
import AccessSection from './components/AccessSection';
import ReserveCTASection from './components/ReserveCTASection';
import FooterSection from './components/FooterSection';
import infoAccessBg from '@/assets/hikari-bg.png';

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />

      {/* Info + Access 共通背景 */}
      <div className="relative">
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <img
            src={infoAccessBg}
            alt=""
            className="w-full h-full object-cover object-top opacity-30"
          />
        </div>
        <InfoSection />
        <AccessSection />
      </div>

      <ReserveCTASection />
      <FooterSection />
    </main>
  );
}