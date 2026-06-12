import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { infoData } from '@/mocks/menuData';

export default function InfoSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="info" className="relative w-full py-24 md:py-32 px-8 md:px-14 lg:px-20">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`animate-in text-center mb-14 md:mb-20 ${isVisible ? 'visible' : ''}`}>
          <span
            className="text-xs tracking-[0.3em]"
            style={{ color: 'oklch(var(--accent-500))', fontFamily: 'var(--font-body)' }}
          >
            / Information
          </span>
          <h2
            className="text-4xl md:text-5xl font-heading font-light mt-4"
            style={{ color: 'oklch(var(--foreground-950))' }}
          >
            基本情報
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {infoData.map((item, index) => (
            <div
              key={item.label}
              className={`animate-in animate-in-delay-${index + 1} ${isVisible ? 'visible' : ''} rounded-lg p-6 md:p-7 text-center transition-all duration-500 hover:-translate-y-1`}
              style={{ backgroundColor: 'oklch(var(--background-100))' }}
            >
              <div
                className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'oklch(var(--accent-100))' }}
              >
                <i
                  className={`${item.icon} text-xl md:text-2xl`}
                  style={{ color: 'oklch(var(--accent-600))' }}
                ></i>
              </div>
              <h3
                className="text-sm font-medium mb-3 tracking-wider"
                style={{ color: 'oklch(var(--foreground-800))', fontFamily: 'var(--font-body)' }}
              >
                {item.label}
              </h3>
              <p
                className="text-base md:text-lg font-semibold mb-2"
                style={{ color: 'oklch(var(--foreground-950))', fontFamily: 'var(--font-body)' }}
              >
                {item.value}
              </p>
              <p
                className="text-xs"
                style={{ color: 'oklch(var(--foreground-400))', fontFamily: 'var(--font-body)' }}
              >
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}