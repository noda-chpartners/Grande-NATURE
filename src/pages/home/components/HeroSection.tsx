import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';
import hero from '@/assets/HERO.jpg';

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const parallaxRef = useParallax(0.15);

  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] overflow-hidden">
      <div className="absolute inset-0" ref={parallaxRef}>
        <img
          src={hero}
          alt="グランナチュール エステサロン"
          className="w-full h-full object-cover object-center"
          title="自由が丘のエステ グランナチュール Grande NATURE"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/40"></div>

      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 w-full"
      >
        <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
          <p
            className="text-sm md:text-base tracking-[0.3em] mb-6 md:mb-8 text-white/70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            自由が丘のエステサロン
          </p>
        </div>
        <div className={`animate-in animate-in-delay-1 ${isVisible ? 'visible' : ''}`}>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-light tracking-wide text-white mb-4 md:mb-6"
          >
            グランナチュール
          </h1>
        </div>
        <div className={`animate-in animate-in-delay-2 ${isVisible ? 'visible' : ''}`}>
          <p
            className="text-base md:text-lg lg:text-xl font-light text-white/80 tracking-wider mb-10 md:mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
          自由が丘で30年続く本物のリンパマッサージ<br/>完全個室型エステサロン
          </p>
        </div>
        <div className={`animate-in animate-in-delay-3 ${isVisible ? 'visible' : ''}`}>
          <a
            href="#reserve"
            className="inline-block whitespace-nowrap px-10 py-4 rounded-full text-sm tracking-[0.2em] cursor-pointer transition-all duration-500 text-white border border-white/30 hover:bg-white/10"
            style={{ fontFamily: 'var(--font-body)' }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            WEB予約はこちら
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce w-6 h-10 flex items-center justify-center">
          <i className="ri-arrow-down-s-line text-white/50 text-2xl"></i>
        </div>
      </div>
    </section>
  );
}