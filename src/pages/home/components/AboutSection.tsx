import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="relative w-full py-24 md:py-32 px-8 md:px-14 lg:px-20">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
              <span
                className="text-xs tracking-[0.3em]"
                style={{ color: 'oklch(var(--primary-500))', fontFamily: 'var(--font-body)' }}
              >
                / Concept
              </span>
            </div>
            <div className={`animate-in animate-in-delay-1 ${isVisible ? 'visible' : ''}`}>
              <h2
                className="text-4xl md:text-5xl lg:text-5xl font-heading font-light mt-6 mb-10 leading-tight"
                style={{ color: 'oklch(var(--foreground-950))' }}
              >
                人と地球との調和

              </h2>
            </div>
            <div className={`animate-in animate-in-delay-2 ${isVisible ? 'visible' : ''}`}>
              <p
                className="text-sm md:text-base leading-loose"
                style={{ color: 'oklch(var(--foreground-700))', fontFamily: 'var(--font-body)' }}
              >
                1995年のオープン以来、グランナチュールは「人と地球との調和」を大切に、お客様一人ひとりに寄り添った施術をご提供してまいりました。
                独自の「ナチュール リンパドレナージュ」によるオールハンドのトリートメントで、心と身体の巡りを整え、本来の美しさを引き出します。
                日々の忙しさを忘れ、自分自身をいたわる特別なひとときをお過ごしください。皆様のご来店を心よりお待ちしております。

              </p>
            </div>
            <div className={`animate-in animate-in-delay-3 ${isVisible ? 'visible' : ''} mt-8`}>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className={`animate-in animate-in-delay-2 ${isVisible ? 'visible' : ''}`}>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="https://readdy.ai/api/search-image?query=Warm%20minimalist%20spa%20treatment%20room%20with%20soft%20natural%20light%20streaming%20through%20sheer%20curtains%2C%20fresh%20white%20orchids%20on%20wooden%20shelf%2C%20cream%20colored%20walls%2C%20serene%20and%20calming%20atmosphere%2C%20high%20end%20esthetic%20salon%20interior%2C%20architectural%20photography%2C%20warm%20beige%20and%20cream%20tones%2C%20elegant%20minimalist%20design&width=800&height=600&seq=about-spa-interior&orientation=landscape"
                  alt="グランナチュール 店内"
                  className="w-full h-full object-cover object-center"
                  title="グランナチュール トリートメントルーム"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}