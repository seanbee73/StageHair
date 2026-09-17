import React from 'react';
import { Sparkles, Award, Clock, Scissors, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenPriceList: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenPriceList }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background Image - Crystal Clear & High Contrast */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://ik.imagekit.io/kevfun/IMG-20260916-WA5490.jpg"
          alt="Stage Hair Design Salon"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle gradient to keep image crystal clear while ensuring crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10 md:from-black/75 md:via-black/35 md:to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-8 fade-in-up" style={{ animationDelay: '0.1s' }}>
          {/* Subtle Pill Tag */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-semibold tracking-wider text-white uppercase">
            <MapPin className="w-3.5 h-3.5 text-rose-300" />
            <span>5455a Yonge St, North York • Toronto</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white drop-shadow-sm">
            Let’s make <br />
            <span className="italic text-rose-300 font-normal">something</span> <br />
            together!
          </h1>

          <p className="text-lg text-stone-200 max-w-md leading-relaxed drop-shadow-sm">
            Full-service Toronto hair studio offering personalized precision cuts, custom hair dyeing, digital perms, Japanese straightening, and Kérastase rituals by world-traveled master stylists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              id="hero-book-now-btn"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-stone-950 bg-white hover:bg-stone-100 transition-colors rounded-full shadow-lg shadow-black/25 cursor-pointer"
            >
              Book Appointment
            </button>
            <button
              id="hero-view-services-btn"
              onClick={onOpenPriceList}
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-white bg-white/10 border border-white/30 hover:bg-white/20 transition-colors rounded-full cursor-pointer backdrop-blur-sm shadow-sm"
            >
              View Price List
            </button>
          </div>

          {/* Quick Perks Bar */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20 max-w-lg">
            <div className="flex items-center space-x-2 text-stone-200">
              <Award className="w-4 h-4 text-rose-300 flex-shrink-0" />
              <span className="text-xs font-medium">10+ Yrs Technical Directors</span>
            </div>
            <div className="flex items-center space-x-2 text-stone-200">
              <Scissors className="w-4 h-4 text-rose-300 flex-shrink-0" />
              <span className="text-xs font-medium">Digital Perm & Straightening</span>
            </div>
            <div className="flex items-center space-x-2 text-stone-200">
              <Clock className="w-4 h-4 text-rose-300 flex-shrink-0" />
              <span className="text-xs font-medium">Kérastase & Olaplex Care</span>
            </div>
          </div>
        </div>

        {/* Empty column for spacing on desktop */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};
