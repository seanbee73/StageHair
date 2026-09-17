import React, { useState } from 'react';
import { Instagram, Facebook, ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenPriceList?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection, onOpenPriceList }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-white text-stone-900 flex flex-col items-center justify-center font-bold text-[10px]">
              <span>STAGE</span>
            </div>
            <span className="font-serif text-2xl tracking-tight text-white uppercase font-semibold">
              Stage Hair Design
            </span>
          </div>
          <p className="mt-4 text-stone-400 max-w-sm text-sm leading-relaxed">
            Full-service Toronto salon situated at 5455a Yonge St, North York. Dedicated to precision cuts, custom hair dyeing, digital perms, Japanese straightening, and Kérastase rituals.
          </p>
          <div className="mt-4 text-xs text-stone-400 space-y-1">
            <p className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>5455a Yonge St, North York, Toronto, ON M2N 5S1</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-rose-400" />
              <span>(647) 350-8383 • Wed-Mon: 12:00 PM – 8:00 PM (Tue Closed)</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-rose-400" />
              <span>stagehairdeisgn@gmail.com</span>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Quick Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() => onScrollToSection('home')}
                className="hover:text-rose-300 transition-colors text-left cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => onScrollToSection('about')}
                className="hover:text-rose-300 transition-colors text-left cursor-pointer"
              >
                About Stage Hair
              </button>
            </li>
            <li>
              <button
                onClick={() => onScrollToSection('services')}
                className="hover:text-rose-300 transition-colors text-left cursor-pointer"
              >
                Featured Services
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  if (onOpenPriceList) onOpenPriceList();
                  else onScrollToSection('pricing');
                }}
                className="hover:text-rose-300 transition-colors text-left cursor-pointer"
              >
                Official Price Menu
              </button>
            </li>
            <li>
              <button
                onClick={() => onScrollToSection('team')}
                className="hover:text-rose-300 transition-colors text-left cursor-pointer"
              >
                Stylists & Directors
              </button>
            </li>
            <li>
              <button
                onClick={() => onScrollToSection('gallery')}
                className="hover:text-rose-300 transition-colors text-left cursor-pointer"
              >
                Style Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => onScrollToSection('reviews')}
                className="hover:text-rose-300 transition-colors text-left cursor-pointer"
              >
                Client Reviews (4.9★)
              </button>
            </li>
            <li>
              <button
                onClick={() => onScrollToSection('book')}
                className="hover:text-rose-300 transition-colors text-left cursor-pointer font-medium text-rose-300"
              >
                Book Appointment
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-6">
            <a
              href="https://www.instagram.com/stagehairdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all text-stone-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all text-stone-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors cursor-pointer border border-stone-800 px-3 py-1.5 rounded-full"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800 text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2026 Stage Hair Design (5455a Yonge St, North York, ON). All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <button
            onClick={() => setLegalModal('privacy')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setLegalModal('terms')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Salon Terms & Policies
          </button>
        </div>
      </div>

      {/* Legal Dialog */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-stone-800 rounded-2xl p-8 max-w-lg w-full shadow-2xl border border-stone-200">
            <h3 className="font-serif text-2xl text-stone-900 mb-4 capitalize">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Salon Terms & Policies'}
            </h3>
            <div className="text-xs text-stone-600 space-y-3 max-h-72 overflow-y-auto pr-2 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>At Stage Hair Design, client privacy is paramount. Information submitted for appointments or inquiries is used solely to coordinate your salon visits and hair care consultations.</p>
                  <p>We do not share or distribute personal client details. Online requests and notifications are securely processed.</p>
                </>
              ) : (
                <>
                  <p>We appreciate 24 hours advance notice for cancellations or rescheduling so we can accommodate other clients on our waitlist.</p>
                  <p>Walk-ins are welcomed subject to technical director and stylist availability. For chemical services like bleaching, Japanese straightening, and digital perms, we recommend booking in advance.</p>
                </>
              )}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-6 py-2 bg-stone-900 text-white rounded-full text-xs font-semibold uppercase hover:bg-rose-400 hover:text-stone-900 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
