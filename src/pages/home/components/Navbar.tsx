import { useState, useEffect } from 'react';
import logoLight from '@/assets/logo-white.png';  // ヒーロー上用
import logoDark from '@/assets/logo-dark.png';    // スクロール後用

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Menu', id: 'menu' },
  { label: 'Info', id: 'info' },
  { label: 'Access', id: 'access' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkColor = scrolled
    ? 'oklch(var(--foreground-700))'
    : 'rgba(255,255,255,0.85)';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] ${scrolled ? 'py-3' : 'py-5'
        } ${scrolled && !menuOpen
          ? 'bg-background-50/50 backdrop-blur-md'
          : 'bg-transparent'
        } transition-[background-color] duration-300`}
    >

<div className="max-w-6xl mx-auto w-full px-8 md:px-10 lg:px-10 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="cursor-pointer"
          aria-label="グランナチュール ホームへ"
        >
          <img
            src={scrolled ? logoDark : logoLight}
            alt="グランナチュール Grande NATURE"
            className="h-12 md:h-14 w-auto object-contain transition-opacity duration-300"
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm tracking-widest whitespace-nowrap cursor-pointer transition-colors duration-300 hover:opacity-70"
              style={{
                color: linkColor,
                fontFamily: 'var(--font-body)',
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('reserve')}
            className="whitespace-nowrap px-6 py-2 rounded-full text-sm tracking-widest cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: scrolled ? 'oklch(var(--primary-500))' : 'rgba(255,255,255,0.15)',
              color: '#ffffff',
              fontFamily: 'var(--font-body)',
              border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.3)',
            }}
          >
            RESERVE
          </button>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer z-[101] relative"
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`block h-px w-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`}
              style={{ backgroundColor: menuOpen ? 'oklch(var(--foreground-950))' : (scrolled ? 'oklch(var(--foreground-950))' : '#ffffff') }}
            ></span>
            <span
              className={`block h-px w-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              style={{ backgroundColor: menuOpen ? 'oklch(var(--foreground-950))' : (scrolled ? 'oklch(var(--foreground-950))' : '#ffffff') }}
            ></span>
            <span
              className={`block h-px w-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`}
              style={{ backgroundColor: menuOpen ? 'oklch(var(--foreground-950))' : (scrolled ? 'oklch(var(--foreground-950))' : '#ffffff') }}
            ></span>
          </div>
        </button>
      </div>



      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[98] bg-black/40 md:hidden transition-opacity duration-200 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-[99] bg-background-50 md:hidden flex flex-col transition-transform duration-300 ease-out ${menuOpen
            ? 'translate-x-0 pointer-events-auto'
            : 'translate-x-full pointer-events-none'
          }`}
        style={{ backgroundColor: 'oklch(var(--background-50))' }}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span
            className="font-heading text-xl tracking-wide"
            style={{ color: 'oklch(var(--foreground-950))' }}
          >
            <img src={logoDark} alt="グランナチュール" className="h-10 w-auto object-contain" />
          </span>

        </div>

        <div className="flex-1 flex flex-col px-6 pt-8 gap-1">
          {navLinks.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left w-full py-4 text-base tracking-widest cursor-pointer transition-colors duration-300 border-b border-background-200"
              style={{
                color: 'oklch(var(--foreground-800))',
                fontFamily: 'var(--font-body)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="px-6 py-8">
          <button
            onClick={() => scrollTo('reserve')}
            className="w-full whitespace-nowrap py-4 rounded-full text-sm tracking-[0.15em] text-white cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: 'oklch(var(--primary-500))',
              fontFamily: 'var(--font-body)',
            }}
          >
            RESERVE
          </button>
        </div>

        <div className="px-6 pb-10 flex items-center gap-4">
          <a
            href="https://www.instagram.com/grande_nature_tokyo/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: 'oklch(var(--background-100))' }}
            aria-label="Instagram"
          >
            <i className="ri-instagram-line text-sm" style={{ color: 'oklch(var(--foreground-500))' }}></i>
          </a>
          <a
            href="https://lin.ee/v31VkKI"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: 'oklch(var(--background-100))' }}
            aria-label="LINE"
          >
            <i className="ri-line-line text-sm" style={{ color: 'oklch(var(--foreground-500))' }}></i>
          </a>
          <a
            href="https://www.g-nature.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: 'oklch(var(--background-100))' }}
            aria-label="公式サイト"
          >
            <i className="ri-global-line text-sm" style={{ color: 'oklch(var(--foreground-500))' }}></i>
          </a>
        </div>
      </div>

    </nav>
  );
}