import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';
import { Instagram, ZoomIn, Eye } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Work' },
    { id: 'color', label: 'Color & Bleach' },
    { id: 'cuts', label: 'Cuts & Perms' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'studio', label: 'Studio Vibes' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-stone-500 uppercase">Portfolio • 作品集</span>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900 mt-2">Stage Hair Portfolio</h2>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/stagehairdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-stone-500 hover:text-rose-400 transition-colors"
            >
              <Instagram className="mr-2 w-4 h-4" />
              Follow @stagehairdesign
            </a>
          </div>
        </div>

        {/* Gallery Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Exact Masonry Grid with gap-6 and space-y-6 */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="break-inside-avoid rounded-xl overflow-hidden group relative cursor-pointer shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-white font-serif text-lg tracking-wide drop-shadow-md">
                  {item.title}
                </span>
                {item.stylist && (
                  <span className="text-rose-200 text-xs font-sans mt-1">
                    by {item.stylist}
                  </span>
                )}
                <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] uppercase tracking-wider font-semibold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
