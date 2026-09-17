import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { BookingSystem } from './BookingSystem';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  selectedServiceId?: string;
  selectedStylistId?: string;
  onBookingComplete: (details: any) => void;
  onScrollToBook: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedServiceId,
  selectedStylistId,
  onBookingComplete,
  onScrollToBook,
}) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);
  const [showDirectionsModal, setShowDirectionsModal] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim() || !inquiryMessage.trim()) return;

    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMessage('');
    }, 4000);
  };

  return (
    <>
      {/* BOOKING STRIP */}
      <section className="py-20 bg-stone-900 text-center px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-4">
          Ready for your transformation?
        </h2>
        <p className="text-stone-400 mb-8 max-w-lg mx-auto text-sm md:text-base">
          Book online or call <strong>(647) 350-8383</strong>. We look forward to welcoming you at Stage Hair Design.
        </p>
        <button
          onClick={onScrollToBook}
          className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-stone-900 bg-white hover:bg-rose-100 transition-colors rounded-full cursor-pointer shadow-lg"
        >
          Book Appointment
        </button>
      </section>

      {/* CONTACT & BOOKING SYSTEM */}
      <section id="contact" className="py-24 bg-stone-50 dark:bg-stone-900 border-t border-stone-200/40 dark:border-stone-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info Column */}
            <div className="space-y-8">
              <div>
                <span className="text-xs font-semibold tracking-widest text-stone-500 dark:text-stone-400 uppercase">
                  Location & Hours • 营业信息
                </span>
                <h2 className="font-serif text-4xl tracking-tight text-stone-900 dark:text-white mt-2">
                  Visit Stage Hair Design
                </h2>
                <p className="text-stone-600 dark:text-stone-300 mt-2 text-sm">
                  Conveniently situated on Yonge Street in North York / Willowdale, walking distance from Finch TTC Subway Station.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-rose-500 dark:text-rose-400 mt-1 mr-4 w-5 h-5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-stone-900 dark:text-white">Address</h4>
                    <p className="text-stone-600 dark:text-stone-300 mt-1">
                      5455a Yonge St<br />
                      North York, Toronto, ON M2N 5S1
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-rose-500 dark:text-rose-400 mt-1 mr-4 w-5 h-5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-stone-900 dark:text-white">Phone</h4>
                    <p className="text-stone-600 dark:text-stone-300 mt-1">
                      <a href="tel:6473508383" className="hover:text-rose-500 dark:hover:text-rose-400 font-medium transition-colors">
                        (647) 350-8383
                      </a>
                      <span className="text-xs text-stone-500 dark:text-stone-400 ml-2">/ +1 (647) 735-08383</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-rose-500 dark:text-rose-400 mt-1 mr-4 w-5 h-5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-stone-900 dark:text-white">Email & Web</h4>
                    <p className="text-stone-600 dark:text-stone-300 mt-1">
                      <a href="mailto:stagehairdeisgn@gmail.com" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
                        stagehairdeisgn@gmail.com
                      </a>
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">stagehairdesign.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-rose-500 dark:text-rose-400 mt-1 mr-4 w-5 h-5 flex-shrink-0" />
                  <div className="w-full">
                    <h4 className="font-medium text-stone-900 dark:text-white mb-1">Opening Hours</h4>
                    <div className="grid grid-cols-2 gap-y-1 text-xs text-stone-600 dark:text-stone-300 max-w-xs">
                      <span>Monday:</span>
                      <span className="font-medium text-stone-800 dark:text-stone-200">12:00 PM – 8:00 PM</span>
                      <span>Tuesday:</span>
                      <span className="font-semibold text-rose-500 dark:text-rose-400">Closed</span>
                      <span>Wednesday:</span>
                      <span className="font-medium text-stone-800 dark:text-stone-200">12:00 PM – 8:00 PM</span>
                      <span>Thursday:</span>
                      <span className="font-medium text-stone-800 dark:text-stone-200">12:00 PM – 8:00 PM</span>
                      <span>Friday:</span>
                      <span className="font-medium text-stone-800 dark:text-stone-200">12:00 PM – 8:00 PM</span>
                      <span>Saturday:</span>
                      <span className="font-medium text-stone-800 dark:text-stone-200">12:00 PM – 8:00 PM</span>
                      <span>Sunday:</span>
                      <span className="font-medium text-stone-800 dark:text-stone-200">12:00 PM – 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder matching North York location */}
              <div className="w-full h-48 bg-stone-200 dark:bg-stone-800 rounded-xl overflow-hidden relative shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1774&auto=format&fit=crop"
                  className="w-full h-full object-cover opacity-50 grayscale"
                  alt="North York Map"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button
                    onClick={() => setShowDirectionsModal(true)}
                    className="bg-white dark:bg-stone-900 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-white shadow-md hover:bg-rose-50 dark:hover:bg-stone-800 hover:text-rose-500 dark:hover:text-rose-400 transition-all flex items-center gap-1.5 cursor-pointer border border-transparent dark:border-stone-700"
                  >
                    <Navigation className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
                    <span>View Directions & Transit</span>
                  </button>
                </div>
              </div>

              {/* Quick Inquiry Form */}
              <div className="bg-white dark:bg-stone-950 p-6 rounded-2xl border border-stone-200/70 dark:border-stone-800 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-stone-900 dark:text-white font-serif text-lg">
                  <MessageSquare className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                  <span>Have a Question or Hair Consultation Inquiry?</span>
                </div>
                {inquirySent ? (
                  <div className="p-4 bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 rounded-lg flex items-center gap-2 text-xs font-medium border border-rose-100 dark:border-rose-900">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 dark:text-rose-400 flex-shrink-0" />
                    <span>Message received! Our team at Stage Hair Design will contact you shortly.</span>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="px-3 py-2 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg text-xs text-stone-800 dark:text-stone-100 focus:outline-none focus:border-rose-300"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        className="px-3 py-2 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg text-xs text-stone-800 dark:text-stone-100 focus:outline-none focus:border-rose-300"
                      />
                    </div>
                    <textarea
                      required
                      rows={2}
                      placeholder="Ask about hair dyeing, bleach tones, digital perms, or hair extensions..."
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg text-xs text-stone-800 dark:text-stone-100 focus:outline-none focus:border-rose-300 resize-none"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full py-2 bg-stone-800 dark:bg-stone-100 hover:bg-stone-900 dark:hover:bg-white text-white dark:text-stone-950 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3 h-3" />
                      <span>Send Message to Stage Hair</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Booking Widget Mockup */}
            <div>
              <BookingSystem
                selectedServiceId={selectedServiceId}
                selectedStylistId={selectedStylistId}
                onBookingComplete={onBookingComplete}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Directions & Transit Modal */}
      {showDirectionsModal && (
        <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 rounded-2xl p-8 max-w-lg w-full shadow-2xl border border-stone-200 dark:border-stone-800">
            <h3 className="font-serif text-2xl text-stone-900 dark:text-white mb-2">Stage Hair Design Directions</h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 mb-4">5455a Yonge St, North York, Toronto, ON M2N 5S1</p>

            <div className="space-y-4 text-xs text-stone-600 dark:text-stone-300">
              <div className="p-3 bg-stone-50 dark:bg-stone-800/80 rounded-lg border border-stone-200 dark:border-stone-700">
                <h5 className="font-semibold text-stone-900 dark:text-white mb-1">🚇 TTC Subway Access</h5>
                <p>Located on Yonge Street between Finch Subway Station (Line 1) and North York Centre Station. 5-7 min walk south of Finch Station.</p>
              </div>
              <div className="p-3 bg-stone-50 dark:bg-stone-800/80 rounded-lg border border-stone-200 dark:border-stone-700">
                <h5 className="font-semibold text-stone-900 dark:text-white mb-1">🚗 Driving & Parking</h5>
                <p>Convenient street parking along Yonge St and nearby side streets (Byng Ave, Doris Ave, Kempford Blvd) and municipal Green P parking lots.</p>
              </div>
              <div className="p-3 bg-stone-50 dark:bg-stone-800/80 rounded-lg border border-stone-200 dark:border-stone-700">
                <h5 className="font-semibold text-stone-900 dark:text-white mb-1">📍 Salon Entrance</h5>
                <p>5455a Yonge Street storefront with illuminated STAGE sign and modern glass entryway.</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowDirectionsModal(false)}
                className="px-6 py-2.5 bg-stone-900 dark:bg-white text-white dark:text-stone-950 rounded-full text-xs font-semibold uppercase hover:bg-rose-500 dark:hover:bg-rose-400 transition-colors cursor-pointer"
              >
                Close Directions
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
