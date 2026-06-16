interface MenuCardProps {
  item: {
    name: string;
    description: string;
    duration: string;
    originalPrice: string;
    salePrice: string;
    image: string;
  };
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div
      className="w-full flex flex-col md:flex-row rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1 cursor-pointer"
      style={{ backgroundColor: 'oklch(var(--background-50))' }}
    >
      <div className="relative w-full md:w-2/5 lg:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          title={`グランナチュール ${item.name}`}
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span
            className="text-[10px] tracking-wider px-3 py-1 rounded-full"
            style={{
              backgroundColor: 'oklch(var(--primary-500))',
              color: '#ffffff',
              fontFamily: 'var(--font-body)',
            }}
          >
            {item.duration}
          </span>
        </div>
      </div>
      <div className="p-5 md:p-7 flex-1 flex flex-col justify-center">
        <h3
          className="text-base md:text-lg font-medium mb-1 leading-snug"
          style={{ color: 'oklch(var(--foreground-950))', fontFamily: 'var(--font-body)' }}
        >
          {item.name}
        </h3>
        <p
          className="text-xs mb-4"
          style={{ color: 'oklch(var(--foreground-400))', fontFamily: 'var(--font-body)' }}
        >
          {item.description}
        </p>
        <div className="flex flex-col items-end gap-1">
          <span
            className="text-[10px] tracking-wider px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: 'oklch(var(--accent-100))',
              color: 'oklch(var(--accent-700))',
              fontFamily: 'var(--font-body)',
            }}
          >
            初回限定
          </span>
          <div className="flex items-baseline gap-3">
            <span
              className="text-xs line-through"
              style={{ color: 'oklch(var(--foreground-300))', fontFamily: 'var(--font-body)' }}
            >
              {item.originalPrice}
            </span>
            <span
              className="text-xl md:text-2xl font-semibold"
              style={{ color: 'oklch(var(--accent-500))', fontFamily: 'var(--font-body)' }}
            >
              {item.salePrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}