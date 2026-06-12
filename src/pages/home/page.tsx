import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import InfoSection from './components/InfoSection';
import AccessSection from './components/AccessSection';
import ReserveCTASection from './components/ReserveCTASection';
import FooterSection from './components/FooterSection';

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <InfoSection />
      <AccessSection />
      <ReserveCTASection />
      <FooterSection />
    </main>
  );
}