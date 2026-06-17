import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import about from '@/assets/about11.jpg';
import ink2 from '@/assets/ink2.png';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="relative w-full py-24 md:py-32 px-8 md:px-14 lg:px-20 overflow-hidden">
    {/* 背景: ink2 */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <img
        src={ink2}
        alt=""
        className="w-full h-full object-cover object-center opacity-30"
      />
    </div>

    <div ref={ref} className="max-w-6xl mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
            <span
                className="text-4xl md:text-4xl lg:text-5xl font-script text-accent-500"
              >
                About us
              </span>
              <h2
  className="text-4xl md:text-4xl lg:text-5xl font-heading font-light mb-10 leading-tight"
  style={{
    color: 'oklch(var(--foreground-950))',
    textShadow: '0 0 10px rgb(255, 244, 223)',
  }}
>
                私たちについて

              </h2>
            </div>
            <div className={`animate-in animate-in-delay-1 ${isVisible ? 'visible' : ''}`}>
            <h2
  className="text-2xl md:text-2xl lg:text-3xl font-heading font-light mt-6 mb-5 leading-tight"
  style={{
    color: 'oklch(var(--foreground-950))',
    textShadow: '0 0 10px rgb(255, 244, 223)',
  }}
>
                人と地球との調和

              </h2>
            </div>
            <div className={`animate-in animate-in-delay-2 ${isVisible ? 'visible' : ''}`}>
            <p
  className="text-sm md:text-base leading-loose"
  style={{
    color: 'oklch(var(--foreground-700))',
    fontFamily: 'var(--font-body)',
    textShadow: '0 0 10px rgb(255, 244, 223)',
  }}
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
                  src={about}
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