import React, { useState, useEffect } from 'react';
import { SALON_SERVICES } from '../data/salonData';
import { Clock, Sparkles, Check, HelpCircle, Phone, X, Search, Calendar, Scissors, ArrowRight } from 'lucide-react';

interface PricingMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceId: string) => void;
}

export const PricingMenu: React.FC<PricingMenuProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'cuts', label: 'Hair Cut & Styling (洗剪吹)' },
    { id: 'color', label: 'Hair Colors (染发/挑染)' },
    { id: 'perm', label: 'Hair Perm (冷烫/数码烫/拉直)' },
    { id: 'treatments', label: 'Treatments (卡诗护理)' },
    { id: 'styling', label: 'Styling & Blow Dry (造型)' },
    { id: 'extensions', label: 'Hair Extension (接发)' },
  ];

  const filteredServices = SALON_SERVICES.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      service.name.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      (service.priceMen && service.priceMen.toLowerCase().includes(query)) ||
      (service.priceWomen && service.priceWomen.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const handleBookService = (serviceId: string) => {
    onSelectService(serviceId);
    onClose();
  };

  return (
    <div
      id="price-list-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="price-list-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-stone-950/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-stone-200 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="p-5 md:p-6 border-b border-stone-100 bg-stone-50/95 backdrop-blur-md flex-shrink-0">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold tracking-widest text-rose-500 uppercase bg-rose-50 px-2 py-0.5 rounded">
                  Official Menu • 价目表
                </span>
                <span className="text-[10px] uppercase tracking-wider text-stone-600 font-medium">
                  Stage Hair Design • 5455a Yonge St
                </span>
              </div>
              <h2 id="price-list-title" className="font-serif text-2xl md:text-3xl text-stone-900 font-semibold tracking-tight">
                Salon Service & Price Menu
              </h2>
            </div>
            <button
              id="close-price-list-modal-btn"
              onClick={onClose}
              aria-label="Close Price List"
              className="p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200/70 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search bar & Category filters */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g., haircut, digital perm, caviar, bleach)..."
                className="w-full pl-10 pr-4 py-2 text-xs md:text-sm bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all placeholder:text-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-stone-900 text-white shadow-sm'
                      : 'bg-stone-200/60 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable Price List Content */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-4 bg-stone-50/50">
          {filteredServices.length === 0 ? (
            <div className="py-16 text-center text-stone-500 space-y-2">
              <Scissors className="w-8 h-8 mx-auto text-stone-300" />
              <p className="text-sm font-medium">No services found matching "{searchQuery}"</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-xs text-rose-500 hover:underline font-semibold"
              >
                Reset filters & search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl p-5 border border-stone-200/80 hover:border-rose-300 transition-all hover:shadow-sm flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-serif text-base md:text-lg font-semibold text-stone-900 group-hover:text-rose-500 transition-colors leading-snug">
                            {service.name}
                          </h3>
                          {service.popular && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 text-rose-700 tracking-wide">
                              <Sparkles className="w-2.5 h-2.5 mr-1 text-rose-500" />
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="font-serif text-lg font-bold text-stone-900 text-right whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>

                    {/* Men / Women Breakdown Badge */}
                    {(service.priceMen || service.priceWomen) && (
                      <div className="flex items-center gap-2 mb-2">
                        {service.priceMen && (
                          <span className="text-[11px] font-medium bg-stone-100 text-stone-800 px-2 py-0.5 rounded">
                            Men (男): <strong>{service.priceMen}</strong>
                          </span>
                        )}
                        {service.priceWomen && (
                          <span className="text-[11px] font-medium bg-rose-50 text-rose-700 px-2 py-0.5 rounded border border-rose-100">
                            Women (女): <strong>{service.priceWomen}</strong>
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-xs text-stone-400 mb-2.5">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        {service.duration}
                      </span>
                      <span>•</span>
                      <span className="capitalize">{service.category}</span>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-600 font-medium">Stage Guarantee</span>
                    <button
                      id={`book-service-${service.id}-btn`}
                      onClick={() => handleBookService(service.id)}
                      className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-stone-900 text-white hover:bg-rose-500 transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Salon Policy Notes */}
          <div className="mt-6 bg-stone-100/90 rounded-xl p-4 md:p-5 border border-stone-200">
            <div className="flex items-start gap-3">
              <HelpCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Salon Guidelines & Pricing Notes
                </h4>
                <ul className="text-xs text-stone-600 space-y-1 leading-relaxed">
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Length & Density:</strong> Additional length and volume may require extra time & product formula (+ $20–$40). Transparently confirmed in consultation.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Hair Protection:</strong> All color & perm formulas use low-ammonia technologies and Olaplex bond repair.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="p-4 md:px-6 border-t border-stone-200 bg-white flex-shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <Phone className="w-3.5 h-3.5 text-rose-500" />
            <span>Questions? Call our front desk at <a href="tel:6473508383" className="font-semibold text-stone-900 underline hover:text-rose-500">(647) 350-8383</a></span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectService('cut-director-women');
              }}
              className="flex-1 sm:flex-none px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-rose-500 rounded-full transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
