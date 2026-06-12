import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import tennai from '@/assets/tennai.png'; 

export default function ReserveCTASection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
    id="reserve"
    className="relative w-full min-h-[500px] md:min-h-[800px] py-32 overflow-hidden"
  >
    {/* 最背面: 画像 */}
    <div className="absolute inset-0 z-0">
      <img
        src={tennai}
        alt="グランナチュール 店内"
        className="w-full h-full object-cover object-center"
      />
    </div>

    {/* 中間: 暗いオーバーレイ（テキスト用） */}
    <div className="absolute inset-0 z-[1] bg-black/30"></div>
    
      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full"
      >
        <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
          <p
            className="text-sm md:text-base tracking-[0.3em] mb-6 text-white/60"
            style={{ fontFamily: 'var(--font-body)' }}
          >
           
          </p>
        </div>
        <div className={`animate-in animate-in-delay-1 ${isVisible ? 'visible' : ''}`}>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-light tracking-[0.15em] text-white mb-4 md:mb-6"
          >
            RESERVE
          </h2>
        </div>
        <div className={`animate-in animate-in-delay-2 ${isVisible ? 'visible' : ''}`}>
          <p
            className="text-sm md:text-base text-white/70 mb-10 md:mb-12 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            初回限定の特別メニューを、今すぐご予約ください
          </p>
        </div>
        <div className={`animate-in animate-in-delay-3 ${isVisible ? 'visible' : ''}`}>
          <a
            href="https://reservia.jp/shop/2265e2f52e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 whitespace-nowrap px-10 py-4 rounded-full text-sm tracking-[0.15em] text-white cursor-pointer transition-all duration-500 hover:opacity-90"
            style={{
              backgroundColor: 'oklch(var(--primary-500))',
              fontFamily: 'var(--font-body)',
            }}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-calendar-check-line text-lg"></i>
            </div>
            WEB予約はこちら
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-right-up-line text-sm"></i>
            </div>
          </a>
          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href="https://www.instagram.com/grande_nature_tokyo/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer hover:bg-white/20"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              aria-label="Instagram"
            >
              <i className="ri-instagram-line text-white/70 text-lg"></i>
            </a>
            <a
              href="https://lin.ee/v31VkKI"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer hover:bg-white/20"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              aria-label="LINE"
            >
              <i className="ri-line-line text-white/70 text-lg"></i>
            </a>
            <a
              href="https://www.g-nature.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer hover:bg-white/20"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              aria-label="公式サイト"
            >
              <i className="ri-global-line text-white/70 text-lg"></i>
            </a>
          </div>

        </div>
        
      </div>
    </section>
  );
}