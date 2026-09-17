import React, { useState } from 'react';
import { Menu, X, CalendarClock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string, stylistId?: string) => void;
  onOpenPriceList?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenPriceList }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (targetId === 'pricing' && onOpenPriceList) {
      onOpenPriceList();
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300" id="navbar">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Mobile Menu Button (Left) */}
        <div className="md:hidden">
          <button
            id="mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer text-stone-800 p-2 hover:text-rose-400 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Logo (Centered on Mobile, Left on Desktop) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex-shrink-0 flex items-center gap-3 text-left group"
          id="brand-logo"
        >
          <div className="w-9 h-9 rounded-lg bg-stone-900 text-white flex flex-col items-center justify-center font-bold text-xs shadow-sm group-hover:bg-rose-500 transition-colors">
            <span className="leading-tight text-[10px] tracking-tighter">STAGE</span>
            <span className="text-[8px] font-normal opacity-80 -mt-0.5">舞台</span>
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl tracking-tight text-stone-900 block font-semibold">
              Stage Hair Design
            </span>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 hidden sm:block">
              5455a Yonge St • North York
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium tracking-wide text-stone-600">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="hover:text-rose-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="hover:text-rose-400 transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="hover:text-rose-400 transition-colors"
          >
            Services
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, 'pricing')}
            className="hover:text-rose-400 transition-colors"
          >
            Price List
          </a>
          <a
            href="#team"
            onClick={(e) => handleNavClick(e, 'team')}
            className="hover:text-rose-400 transition-colors"
          >
            Stylists
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleNavClick(e, 'gallery')}
            className="hover:text-rose-400 transition-colors"
          >
            Gallery
          </a>
          <a
            href="#styles"
            onClick={(e) => handleNavClick(e, 'styles')}
            className="hover:text-rose-400 transition-colors"
          >
            Client Looks
          </a>
          <a
            href="#reviews"
            onClick={(e) => handleNavClick(e, 'reviews')}
            className="hover:text-rose-400 transition-colors"
          >
            Reviews
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hover:text-rose-400 transition-colors"
          >
            Location
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="tel:6473508383"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 px-3 py-1.5 rounded-full border border-stone-200 hover:border-stone-300 transition-colors"
          >
            <span>(647) 350-8383</span>
          </a>
          <button
            id="nav-book-btn"
            onClick={() => onOpenBooking()}
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-stone-900 hover:bg-rose-400 hover:text-stone-900 transition-all duration-300 rounded-full cursor-pointer shadow-sm hover:shadow"
          >
            Book Appointment
          </button>
          {/* Mobile Booking Icon */}
          <button
            id="mobile-book-icon-btn"
            aria-label="Book Appointment"
            onClick={() => onOpenBooking()}
            className="md:hidden text-stone-900 p-2 hover:text-rose-400 transition-colors cursor-pointer"
          >
            <CalendarClock size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 bg-stone-50 z-40 transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 space-y-5 overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          id="mobile-drawer-close"
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 cursor-pointer text-stone-800 hover:text-rose-400 p-2"
        >
          <X size={24} strokeWidth={1.5} />
        </button>
        <div className="text-center pb-4 border-b border-stone-200">
          <span className="font-serif text-2xl tracking-tight text-stone-900 font-bold">Stage Hair Design</span>
          <p className="text-xs text-stone-500 mt-1 uppercase tracking-widest">5455a Yonge St, North York, ON</p>
          <p className="text-xs text-rose-500 font-medium mt-0.5">Tel: (647) 350-8383</p>
        </div>
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-2xl font-serif text-stone-900 hover:text-rose-400 transition-colors py-1"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, 'about')}
          className="text-2xl font-serif text-stone-900 hover:text-rose-400 transition-colors py-1"
        >
          About the Salon
        </a>
        <a
          href="#services"
          onClick={(e) => handleNavClick(e, 'services')}
          className="text-2xl font-serif text-stone-900 hover:text-rose-400 transition-colors py-1"
        >
          Featured Services
        </a>
        <a
          href="#pricing"
          onClick={(e) => handleNavClick(e, 'pricing')}
          className="text-2xl font-serif text-stone-900 hover:text-rose-400 transition-colors py-1"
        >
          Official Price List
        </a>
        <a
          href="#team"
          onClick={(e) => handleNavClick(e, 'team')}
          className="text-2xl font-serif text-stone-900 hover:text-rose-400 transition-colors py-1"
        >
          Stylists & Directors
        </a>
        <a
          href="#gallery"
          onClick={(e) => handleNavClick(e, 'gallery')}
          className="text-2xl font-serif text-stone-900 hover:text-rose-400 transition-colors py-1"
        >
          Haircuts & Color Gallery
        </a>
        <a
          href="#styles"
          onClick={(e) => handleNavClick(e, 'styles')}
          className="text-2xl font-serif text-stone-900 hover:text-rose-400 transition-colors py-1"
        >
          Client Style Feed
        </a>
        <a
          href="#reviews"
          onClick={(e) => handleNavClick(e, 'reviews')}
          className="text-2xl font-serif text-stone-900 hover:text-rose-400 transition-colors py-1"
        >
          Client Reviews & Ratings
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="text-2xl font-serif text-stone-900 hover:text-rose-400 transition-colors py-1"
        >
          Contact & Location
        </a>

        <div className="pt-6 pb-12">
          <button
            id="mobile-drawer-book-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full block text-center py-4 bg-stone-900 hover:bg-rose-400 hover:text-stone-900 text-white font-medium rounded-lg transition-colors cursor-pointer shadow"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </nav>
  );
};
