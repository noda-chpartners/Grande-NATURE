import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { menuItems } from '@/mocks/menuData';
import MenuCard from './MenuCard';

export default function MenuSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  function MenuCardItem({ item, index }: { item: typeof menuItems[number]; index: number }) {
    const { ref, isVisible } = useScrollAnimation(0.2);
    return (
      <div
        ref={ref}
        className={`animate-in ${isVisible ? 'visible' : ''}`}
        style={{ transitionDelay: `${0.1 * (index % 2)}s` }}
      >
        <MenuCard item={item} />
      </div>
    );
  }

  return (
    <section
      id="menu"
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: 'oklch(var(--accent-50))' }}
    >
      <div ref={ref} className="max-w-6xl mx-auto px-8 md:px-8 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div className={`animate-in ${isVisible ? 'visible' : ''}`}>
            <span
              className="text-3xl md:text-4xl font-script text-accent-500"
            >
              Menu
            </span>
            <h2
              className="text-4xl md:text-5xl font-heading font-light "
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
          
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <MenuCardItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

    </section>
  );
}