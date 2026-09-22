import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, MapPin, Phone, Calendar, ArrowRight, Sparkles, Clock, Instagram, Facebook } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string, stylistId?: string) => void;
  onOpenPriceList?: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenPriceList,
  theme,
  onToggleTheme,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && drawerOpen) {
        setDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [drawerOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [drawerOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    setDrawerOpen(false);
    if (targetId === 'pricing' && onOpenPriceList) {
      onOpenPriceList();
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home', zh: '首页' },
    { id: 'about', label: 'About Salon', zh: '关于我们' },
    { id: 'services', label: 'Featured Services', zh: '精选项目' },
    { id: 'pricing', label: 'Official Price List', zh: '官方价目表', isPriceModal: true },
    { id: 'team', label: 'Stylists & Directors', zh: '发型师团队' },
    { id: 'gallery', label: 'Hair Gallery', zh: '作品相册' },
    { id: 'styles', label: 'Client Looks', zh: '客户实拍' },
    { id: 'reviews', label: 'Reviews & Ratings', zh: '客户评价' },
    { id: 'contact', label: 'Location & Hours', zh: '地址营业时间' },
  ];

  return (
    <>
      <nav
        id="navbar"
        className="sticky top-0 z-40 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200/60 dark:border-stone-800 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo (Left) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex-shrink-0 flex items-center gap-3 text-left group"
            id="brand-logo"
          >
            <div className="w-9 h-9 rounded-lg bg-stone-900 dark:bg-white text-white dark:text-stone-900 flex flex-col items-center justify-center font-bold text-xs shadow-sm group-hover:bg-rose-500 dark:group-hover:bg-rose-400 dark:group-hover:text-white transition-colors">
              <span className="leading-tight text-[10px] tracking-tighter">STAGE</span>
              <span className="text-[8px] font-normal opacity-80 -mt-0.5">舞台</span>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl tracking-tight text-stone-900 dark:text-stone-100 block font-semibold leading-none">
                Stage Hair Design
              </span>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-1 block">
                5455a Yonge St • North York
              </span>
            </div>
          </a>

          {/* Desktop Inline Links */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium tracking-wide text-stone-600 dark:text-stone-300">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              Services
            </a>
            <button
              onClick={() => onOpenPriceList?.()}
              className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors cursor-pointer"
            >
              Price List
            </button>
            <a
              href="#team"
              onClick={(e) => handleNavClick(e, 'team')}
              className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              Stylists
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, 'gallery')}
              className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#reviews"
              onClick={(e) => handleNavClick(e, 'reviews')}
              className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              Reviews
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Top Right Controls: Phone, Book CTA, Light/Dark Toggle, Hamburger Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Phone Link (Desktop) */}
            <a
              href="tel:6473508383"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
            >
              <Phone className="w-3 h-3 text-rose-500" />
              <span>(647) 350-8383</span>
            </a>

            {/* Book Appointment CTA (Desktop/Tablet) */}
            <button
              id="nav-book-btn"
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center justify-center px-4 md:px-5 py-2 text-xs font-semibold tracking-wide uppercase text-white dark:text-stone-950 bg-stone-900 dark:bg-white hover:bg-rose-500 dark:hover:bg-rose-400 hover:text-white dark:hover:text-stone-950 transition-all duration-300 rounded-full cursor-pointer shadow-sm"
            >
              Book
            </button>

            {/* Light / Dark Mode Toggle (Placed to the left of the hamburger menu) */}
            <button
              id="theme-toggle-btn"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={onToggleTheme}
              className="p-2.5 rounded-full border border-stone-200 dark:border-stone-800 bg-stone-100/80 dark:bg-stone-900 text-stone-700 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800 transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-once" />
              ) : (
                <Moon className="w-4 h-4 text-stone-700" />
              )}
            </button>

            {/* Hamburger Menu Button (Top Right of the site) */}
            <button
              id="nav-hamburger-btn"
              aria-label="Toggle Navigation Menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="p-2.5 rounded-full border border-stone-200 dark:border-stone-800 bg-stone-100/80 dark:bg-stone-900 text-stone-900 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 flex items-center justify-center"
            >
              {drawerOpen ? (
                <X className="w-5 h-5 text-rose-500" strokeWidth={2} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Right-Side Slide-Over Hamburger Drawer Overlay */}
      <div
        id="side-drawer-backdrop"
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Semi-transparent backdrop blur */}
        <div
          className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />

        {/* Drawer Panel Sliding in from Right */}
        <div
          id="side-drawer-panel"
          className={`absolute top-0 right-0 bottom-0 w-full max-w-md bg-stone-50 dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 shadow-2xl flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out transform ${
            drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Top Header */}
          <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-100/70 dark:bg-stone-950/60">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-stone-900 dark:bg-white text-white dark:text-stone-900 flex flex-col items-center justify-center font-bold text-xs shadow-sm">
                <span className="leading-tight text-[10px] tracking-tighter">STAGE</span>
                <span className="text-[8px] font-normal opacity-80 -mt-0.5">舞台</span>
              </div>
              <div>
                <span className="font-serif text-lg text-stone-900 dark:text-white font-semibold block leading-tight">
                  Stage Hair Design
                </span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-wider block">
                  Toronto Studio Menu
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Theme toggle also in drawer */}
              <button
                onClick={onToggleTheme}
                aria-label="Toggle Theme"
                className="p-2 rounded-full border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors cursor-pointer"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-stone-700" />
                )}
              </button>

              <button
                id="close-drawer-btn"
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-full text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="p-6 border-b border-stone-200 dark:border-stone-800 bg-white/60 dark:bg-stone-900/60 grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                setDrawerOpen(false);
                onOpenBooking();
              }}
              className="py-3 px-4 rounded-xl bg-stone-900 dark:bg-white text-white dark:text-stone-950 font-semibold text-xs uppercase tracking-wider hover:bg-rose-500 dark:hover:bg-rose-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Online</span>
            </button>
            <button
              onClick={() => {
                setDrawerOpen(false);
                onOpenPriceList?.();
              }}
              className="py-3 px-4 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white font-semibold text-xs uppercase tracking-wider hover:bg-stone-200 dark:hover:bg-stone-700 transition-all flex items-center justify-center gap-2 cursor-pointer border border-stone-200/80 dark:border-stone-700"
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>Price List</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 p-6 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 block mb-3">
              Explore Salon
            </span>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="group flex items-center justify-between py-3 px-3.5 rounded-xl hover:bg-stone-200/60 dark:hover:bg-stone-800/80 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-lg text-stone-800 dark:text-stone-200 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors font-medium">
                    {link.label}
                  </span>
                  <span className="text-xs text-stone-400 dark:text-stone-500">
                    {link.zh}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-rose-500 dark:group-hover:text-rose-400 group-hover:translate-x-1 transition-all opacity-60 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          {/* Drawer Bottom Info */}
          <div className="p-6 border-t border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-950/60 space-y-4">
            <div className="space-y-2 text-xs text-stone-600 dark:text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>5455a Yonge St, North York, Toronto, ON M2N 5S1</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                <span>Wed–Mon: 12:00 PM – 8:00 PM (Closed Tue)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                <a
                  href="tel:6473508383"
                  className="font-semibold text-stone-900 dark:text-stone-200 underline hover:text-rose-500"
                >
                  (647) 350-8383
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-stone-200 dark:border-stone-800">
              <span className="text-[11px] text-stone-400 dark:text-stone-500">
                © {new Date().getFullYear()} Stage Hair Design
              </span>
              <div className="flex items-center gap-3 text-stone-500 dark:text-stone-400">
                <a
                  href="https://www.instagram.com/stagehairdesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/Stagehairdeisgn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
