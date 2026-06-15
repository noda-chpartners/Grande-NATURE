export default function FooterSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full pt-20 md:pt-24 pb-10 px-8 md:px-14 lg:px-20"
      style={{ backgroundColor: 'oklch(var(--foreground-600))' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 mb-16 md:mb-20">
          <div>
            <h4
              className="text-xs tracking-[0.2em] mb-5 text-white/40"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              FOLLOW US
            </h4>
            <div className="w-6 h-px mb-4" style={{ backgroundColor: 'oklch(var(--accent-500))' }}></div>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/grande_nature_tokyo/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-sm text-white/60 hover:text-white/90 transition-colors duration-300 flex items-center gap-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-instagram-line"></i>
                </div>
                Instagram
              </a>
              <a
                href="https://lin.ee/v31VkKI"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-sm text-white/60 hover:text-white/90 transition-colors duration-300 flex items-center gap-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-line-line"></i>
                </div>
                LINE公式
              </a>
              <a
                href="https://www.g-nature.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-sm text-white/60 hover:text-white/90 transition-colors duration-300 flex items-center gap-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-global-line"></i>
                </div>
                ウェブサイト
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3
              className="font-heading text-3xl md:text-4xl tracking-wide text-white/90 mb-2"
            >
              Grande NATURE
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px" style={{ backgroundColor: 'oklch(var(--accent-500))' }}></div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
           
            <p
              className="text-xs text-white/30"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              &copy; {new Date().getFullYear()} Grande NATURE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}