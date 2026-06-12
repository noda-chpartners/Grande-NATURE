import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { menuItems } from '@/mocks/menuData';
import MenuCard from './MenuCard';

export default function MenuSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="menu"
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: 'oklch(var(--background-100))' }}
    >
      <div ref={ref} className="px-8 md:px-14 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
            <span
              className="text-xs tracking-[0.3em]"
              style={{ color: 'oklch(var(--accent-500))', fontFamily: 'var(--font-body)' }}
            >
              / Menu
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-light mt-4"
              style={{ color: 'oklch(var(--foreground-950))' }}
            >
              人気メニュー
            </h2>
            <p
              className="text-sm mt-3"
              style={{ color: 'oklch(var(--foreground-500))', fontFamily: 'var(--font-body)' }}
            >
              すべて初回限定の特別価格でご提供中
            </p>
          </div>
          <div className={`animate-in animate-in-delay-2 ${isVisible ? 'visible' : ''} flex items-center gap-3 mt-6 md:mt-0`}>
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-foreground-100"
              style={{ backgroundColor: 'oklch(var(--background-200))', color: 'oklch(var(--foreground-600))' }}
              aria-label="左にスクロール"
            >
              <i className="ri-arrow-left-s-line text-lg"></i>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-foreground-100"
              style={{ backgroundColor: 'oklch(var(--background-200))', color: 'oklch(var(--foreground-600))' }}
              aria-label="右にスクロール"
            >
              <i className="ri-arrow-right-s-line text-lg"></i>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className={`animate-in animate-in-delay-1 ${isVisible ? 'visible' : ''} flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {menuItems.map((item, index) => (
            <div key={item.id} className="snap-start flex-shrink-0" style={{ animationDelay: `${0.15 * index}s` }}>
              <MenuCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`animate-in animate-in-delay-4 ${isVisible ? 'visible' : ''} text-center mt-12 md:mt-16`}
      >
        <span
          className="inline-block whitespace-nowrap px-6 py-2 rounded-full text-xs tracking-wider"
          style={{
            backgroundColor: 'oklch(var(--primary-100))',
            color: 'oklch(var(--primary-700))',
            fontFamily: 'var(--font-body)',
          }}
        >
          初回限定
        </span>
      </div>
    </section>
  );
}