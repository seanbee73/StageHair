import React from 'react';
import { GalleryItem } from '../types';
import { X, Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onBookStyle: (serviceCategory: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onBookStyle }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl border border-stone-200 grid md:grid-cols-2 relative animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-stone-900/70 text-white hover:bg-rose-400 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image side */}
        <div className="bg-stone-100 relative min-h-[300px] md:min-h-[480px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content side */}
        <div className="p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-500 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{item.category}</span>
            </div>

            <h3 className="font-serif text-3xl text-stone-900 leading-tight">
              {item.title}
            </h3>

            {item.stylist && (
              <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">
                Crafted by: <span className="text-stone-800 font-semibold">{item.stylist}</span>
              </p>
            )}

            <p className="text-sm text-stone-600 leading-relaxed pt-2">
              {item.description || 'Custom salon service personalized to the client’s hair profile, lifestyle, and facial architecture.'}
            </p>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/60 text-xs text-stone-600 space-y-1.5">
              <div className="font-semibold text-stone-900 uppercase tracking-wider text-[10px]">Styling Notes</div>
              <p>Achieved using gentle ammoniated gloss, botanical bond builders, and lightweight heat protectant.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-100 flex flex-col gap-3">
            <button
              onClick={() => {
                onClose();
                onBookStyle(item.category);
              }}
              className="w-full py-3.5 bg-stone-900 hover:bg-rose-400 hover:text-stone-900 text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Similar Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="text-xs text-stone-400 hover:text-stone-700 py-1 transition-colors text-center cursor-pointer"
            >
              Back to gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
