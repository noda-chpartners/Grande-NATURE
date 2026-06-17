import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';
import hero from '@/assets/hero.jpg';
import heromb from '@/assets/hero-mb.png';

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const parallaxRef = useParallax(0.15);

  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] overflow-hidden ">
      <div className="absolute inset-0" ref={parallaxRef}>
        {/* モバイルのみ */}
        <img
          src={heromb}
          alt="グランナチュール エステサロン"
          className="md:hidden w-full h-full object-cover object-center"
          title="自由が丘のエステ グランナチュール Grande NATURE"
        />
        {/* タブレット・PC */}
        <img
          src={hero}
          alt="グランナチュール エステサロン"
          className="hidden md:block w-full h-full object-cover object-center"
          title="自由が丘のエステ グランナチュール Grande NATURE"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-background-100/20 to-accent-100/20"></div>

      <div
        ref={ref}
                className="relative z-10 flex flex-col items-start justify-center h-full text-left px-4 w-full ml-2 md:ml-4 -translate-y-36 md:-translate-y-20"
      >
        <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
          <p
            className="text-sm md:text-base lg:text-xl tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-8 text-white/70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            自由が丘のエステサロン
          </p>
        </div>
        <div className={`animate-in animate-in-delay-1 ${isVisible ? 'visible' : ''}`}>
          <h1
            className="text-3xl md:text-5xl lg:text-7xl font-heading font-light tracking-wide text-white mb-4 md:mb-6"
            style={{
              textShadow:
                '0 0 30px oklch(var(--accent-500) / 0.9), 0 0 60px oklch(var(--accent-400) / 0.5), 0 2px 12px ',
            }}
          >
            グランナチュール
          </h1>
        </div>
        <div className={`animate-in animate-in-delay-2 ${isVisible ? 'visible' : ''}`}>
          <p
            className="text-xs md:text-lg lg:text-xl font-light text-white/90 tracking-wider mb-10 md:mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            自由が丘で30年続く本物のリンパマッサージ<br />完全個室型エステサロン
          </p>
        </div>
        <div className={`animate-in animate-in-delay-3 ${isVisible ? 'visible' : ''}`}>
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