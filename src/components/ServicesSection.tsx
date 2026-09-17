import React from 'react';
import { Scissors, Palette, Sparkles, Waves, ShieldCheck, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onViewFullMenu: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onViewFullMenu,
}) => {
  return (
    <section id="services" className="py-24 bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-stone-500 dark:text-stone-400 uppercase">
            Signature Craftsmanship
          </span>
          <h2 className="font-serif text-4xl tracking-tight text-stone-900 dark:text-white">Featured Salon Services</h2>
          <p className="text-stone-600 dark:text-stone-300">
            Expert hair artistry tailored to individual face shape, texture, and personality using world-class salon formulas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Director Cuts */}
          <div className="group bg-white dark:bg-stone-950 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100/80 dark:border-stone-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-stone-50 dark:bg-stone-900 flex items-center justify-center text-stone-900 dark:text-white mb-6 group-hover:bg-rose-50 dark:group-hover:bg-rose-950/50 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                <Scissors className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-serif text-xl text-stone-900 dark:text-white">Director Precision Cuts</h3>
                <span className="text-xs font-semibold text-rose-500 dark:text-rose-400">Men $50+ / Women $65+</span>
              </div>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
                Bespoke haircuts by technical directors Jackie Liu & team, designed to frame your facial contours and require minimal daily maintenance.
              </p>
            </div>
            <button
              onClick={() => onSelectService('cut-director-women')}
              className="text-xs font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-200 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors inline-flex items-center space-x-1 self-start cursor-pointer"
            >
              <span>Book Haircut</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Card 2: Custom Hair Colors & Bleach */}
          <div className="group bg-white dark:bg-stone-950 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100/80 dark:border-stone-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-stone-50 dark:bg-stone-900 flex items-center justify-center text-stone-900 dark:text-white mb-6 group-hover:bg-rose-50 dark:group-hover:bg-rose-950/50 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                <Palette className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-serif text-xl text-stone-900 dark:text-white">Hair Dyeing & Balayage</h3>
                <span className="text-xs font-semibold text-rose-500 dark:text-rose-400">From $140+</span>
              </div>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
                Specialized in multi-dimensional tones, ash grey, smoky lavender, and vibrant ruby reds with minimal bond damage and Olaplex protection.
              </p>
            </div>
            <button
              onClick={() => onSelectService('color-single')}
              className="text-xs font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-200 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors inline-flex items-center space-x-1 self-start cursor-pointer"
            >
              <span>Book Color</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Card 3: Digital & Cold Perms */}
          <div className="group bg-white dark:bg-stone-950 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100/80 dark:border-stone-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-stone-50 dark:bg-stone-900 flex items-center justify-center text-stone-900 dark:text-white mb-6 group-hover:bg-rose-50 dark:group-hover:bg-rose-950/50 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                <Waves className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-serif text-xl text-stone-900 dark:text-white">Digital & Texture Perms</h3>
                <span className="text-xs font-semibold text-rose-500 dark:text-rose-400">From $150+</span>
              </div>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
                Loose natural Korean wave perms (includes cut), root volume lifts, and classic cold perms with effortless wash-and-go memory.
              </p>
            </div>
            <button
              onClick={() => onSelectService('perm-digital')}
              className="text-xs font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-200 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors inline-flex items-center space-x-1 self-start cursor-pointer"
            >
              <span>Book Perm</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Card 4: Japanese Straightening */}
          <div className="group bg-white dark:bg-stone-950 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100/80 dark:border-stone-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-stone-50 dark:bg-stone-900 flex items-center justify-center text-stone-900 dark:text-white mb-6 group-hover:bg-rose-50 dark:group-hover:bg-rose-950/50 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-serif text-xl text-stone-900 dark:text-white">Japanese Straightening</h3>
                <span className="text-xs font-semibold text-rose-500 dark:text-rose-400">$280+ (Women)</span>
              </div>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
                Permanent thermal reconditioning that locks in pin-straight, ultra-glossy glass hair and permanently eliminates unmanageable frizz.
              </p>
            </div>
            <button
              onClick={() => onSelectService('perm-straightening')}
              className="text-xs font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-200 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors inline-flex items-center space-x-1 self-start cursor-pointer"
            >
              <span>Book Straightening</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Card 5: Kérastase & Caviar Rituals */}
          <div className="group bg-white dark:bg-stone-950 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100/80 dark:border-stone-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-stone-50 dark:bg-stone-900 flex items-center justify-center text-stone-900 dark:text-white mb-6 group-hover:bg-rose-50 dark:group-hover:bg-rose-950/50 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                <Sparkles className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-serif text-xl text-stone-900 dark:text-white">Kérastase & Caviar Rituals</h3>
                <span className="text-xs font-semibold text-rose-500 dark:text-rose-400">$80 – $180</span>
              </div>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
                Intensive Chronologiste Caviar and Fusio-Dose nutritive deep conditioning plus relaxing acupressure scalp micro-massage.
              </p>
            </div>
            <button
              onClick={() => onSelectService('treat-caviar')}
              className="text-xs font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-200 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors inline-flex items-center space-x-1 self-start cursor-pointer"
            >
              <span>Book Treatment</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Card 6: Complete Price Menu */}
          <div className="group bg-stone-900 dark:bg-stone-950 text-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-800 flex flex-col justify-center items-center text-center">
            <h3 className="font-serif text-2xl text-white mb-3">Official Price List</h3>
            <p className="text-sm text-stone-400 leading-relaxed mb-6 max-w-xs">
              Explore the full transparent menu with Men & Women rates, add-ons, and service duration estimates.
            </p>
            <button
              id="view-full-pricing-card-btn"
              onClick={onViewFullMenu}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white text-stone-900 hover:bg-rose-400 hover:text-stone-900 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-md group-hover:scale-105"
            >
              <span>View Full Price List</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
