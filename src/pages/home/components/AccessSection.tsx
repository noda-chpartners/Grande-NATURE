import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AccessSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="access"
      className="relative w-full py-24 md:py-32 px-8 md:px-14 lg:px-20 "
    >
      <div ref={ref} className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-14 lg:gap-20">
        <div className="w-full lg:w-1/2">
          
            <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
            <span
                className="text-4xl md:text-4xl lg:text-5xl font-script text-accent-500"
              >
                Access
              </span>
              <h2
                className="text-4xl md:text-4xl lg:text-5xl font-heading font-light  mb-10 leading-tight"
                style={{ color: 'oklch(var(--foreground-950))' }}
              >
                アクセス

              </h2>
            </div>
            <div className={`animate-in animate-in-delay-1 ${isVisible ? 'visible' : ''}`}>
              <h2
                className="text-2xl md:text-2xl lg:text-3xl font-heading font-light mt-6 mb-5 leading-tight"
                style={{ color: 'oklch(var(--foreground-950))' }}
              >
                 東京都世田谷区
                <br />
                奥沢２丁目１２－１５

              </h2>
            </div>
            <div className={`animate-in animate-in-delay-2 ${isVisible ? 'visible' : ''} mt-8 space-y-3`}>
            <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-train-line text-lg" style={{ color: 'oklch(var(--accent-500))' }}></i>
                </div>
                <p
                  className="text-sm"
                  style={{ color: 'oklch(var(--foreground-600))', fontFamily: 'var(--font-body)' }}
                >
                  自由が丘駅 徒歩5分 / 奥沢駅 徒歩3分
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-phone-line text-lg" style={{ color: 'oklch(var(--accent-500))' }}></i>
                </div>
                <a
                  href="tel:09019948142"
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: 'oklch(var(--foreground-600))', fontFamily: 'var(--font-body)' }}
                >
                  03-6421-3344
                </a>
              </div>
            </div>
            <div className={`animate-in animate-in-delay-3 ${isVisible ? 'visible' : ''} mt-8 flex items-center justify-center lg:justify-start gap-3`}>
              <span
                className="font-heading text-lg font-semibold"
                style={{ color: 'oklch(var(--foreground-950))' }}
              >
                Grande NATURE
              </span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-3 h-3 flex items-center justify-center">
                    <i className="ri-star-fill text-xs" style={{ color: 'oklch(var(--accent-500))' }}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className={`animate-in animate-in-delay-2 ${isVisible ? 'visible' : ''} rounded-lg overflow-hidden`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.890956633629!2d139.6719626!3d35.60575629999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f522a6743f8b%3A0x488d5b36c258b871!2z44Kw44Op44Oz44OK44OB44Ol44O844Or!5e0!3m2!1sja!2sjp!4v1789613550752!5m2!1sja!2sjp"
               
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="グランナチュール アクセスマップ"
                className="w-full rounded-lg"
              ></iframe>
            </div>
            <div className={`animate-in animate-in-delay-3 ${isVisible ? 'visible' : ''} mt-4 text-center lg:text-left`}>
              <p
                className="text-xs"
                style={{ color: 'oklch(var(--foreground-400))', fontFamily: 'var(--font-body)' }}
              >
                自由が丘駅正面口より徒歩5分。奥沢駅より徒歩3分。お車でお越しの際は近隣コインパーキングをご利用ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}