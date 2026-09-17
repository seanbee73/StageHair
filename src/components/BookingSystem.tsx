import React, { useState, useEffect } from 'react';
import { SALON_SERVICES, STAFF_MEMBERS } from '../data/salonData';
import { ChevronDown, ExternalLink, Clock, Sparkles } from 'lucide-react';

interface BookingSystemProps {
  selectedServiceId?: string;
  selectedStylistId?: string;
  onBookingComplete: (bookingDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    serviceName: string;
    stylistName: string;
    date: string;
    timeSlot: string;
    isNewClient: boolean;
    price: string;
    duration: string;
  }) => void;
}

export const BookingSystem: React.FC<BookingSystemProps> = ({
  selectedServiceId,
  selectedStylistId,
  onBookingComplete,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceId, setServiceId] = useState(selectedServiceId || 'cut-director-women');
  const [stylistId, setStylistId] = useState(selectedStylistId || 'any');
  const [date, setDate] = useState(() => {
    // Default to tomorrow
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('01:00 PM');
  const [isNewClient, setIsNewClient] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedServiceId) {
      setServiceId(selectedServiceId);
    }
  }, [selectedServiceId]);

  useEffect(() => {
    if (selectedStylistId) {
      setStylistId(selectedStylistId);
    }
  }, [selectedStylistId]);

  const timeSlots = [
    '12:00 PM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '06:30 PM',
    '07:15 PM',
  ];

  const currentService = SALON_SERVICES.find(s => s.id === serviceId) || SALON_SERVICES[0];
  const currentStylist = STAFF_MEMBERS.find(m => m.id === stylistId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onBookingComplete({
        firstName: firstName || 'Valued',
        lastName: lastName || 'Client',
        email: email || 'client@example.com',
        phone: phone || '(647) 000-0000',
        serviceName: currentService.name,
        stylistName: currentStylist ? currentStylist.name : 'First Available Director / Senior Stylist',
        date,
        timeSlot,
        isNewClient,
        price: currentService.price,
        duration: currentService.duration,
      });
    }, 600);
  };

  return (
    <div id="book" className="bg-white p-8 rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-serif text-2xl text-stone-900">Request Appointment</h3>
          <p className="text-xs text-stone-500 mt-1">Instant confirmation • Stage Hair Design (5455a Yonge St)</p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold bg-rose-50 text-rose-600 px-2.5 py-1 rounded-full">
          <Clock className="w-3 h-3" />
          Real-time Slots
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-stone-500 uppercase">First Name</label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all bg-stone-50 text-stone-800 text-sm"
              placeholder="Sarah"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-stone-500 uppercase">Last Name</label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all bg-stone-50 text-stone-800 text-sm"
              placeholder="Zhang"
            />
          </div>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-stone-500 uppercase">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all bg-stone-50 text-stone-800 text-sm"
              placeholder="sarah@example.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-stone-500 uppercase">Phone Number</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all bg-stone-50 text-stone-800 text-sm"
              placeholder="(647) 350-8383"
            />
          </div>
        </div>

        {/* Service selection */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-xs font-medium text-stone-500 uppercase">Service Selection</label>
            <span className="text-xs font-semibold text-rose-500">
              {currentService.price} ({currentService.duration})
            </span>
          </div>
          <div className="relative">
            <select
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all bg-stone-50 appearance-none text-stone-800 text-sm cursor-pointer pr-10"
            >
              {SALON_SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} — {s.price} ({s.duration})
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-3.5 text-stone-400 pointer-events-none w-4 h-4" />
          </div>
        </div>

        {/* Stylist Selection */}
        <div className="space-y-1">
          <label className="text-xs font-medium text-stone-500 uppercase">Preferred Stylist / Director</label>
          <div className="relative">
            <select
              value={stylistId}
              onChange={(e) => setStylistId(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all bg-stone-50 appearance-none text-stone-800 text-sm cursor-pointer pr-10"
            >
              <option value="any">Any Available Technical Director / Stylist</option>
              {STAFF_MEMBERS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} ({m.role})
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-3.5 text-stone-400 pointer-events-none w-4 h-4" />
          </div>
        </div>

        {/* Date & Time Slot selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-stone-500 uppercase">Preferred Date</label>
            <div className="relative">
              <input
                type="date"
                required
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all bg-stone-50 text-stone-800 text-sm"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-stone-500 uppercase">Time Slot (Open 12pm - 8pm)</label>
            <div className="relative">
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 transition-all bg-stone-50 appearance-none text-stone-800 text-sm cursor-pointer pr-10"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-3.5 text-stone-400 pointer-events-none w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Custom Checkbox for New Client */}
        <div className="space-y-3 pt-2">
          <label className="flex items-center space-x-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isNewClient}
              onChange={(e) => setIsNewClient(e.target.checked)}
              className="custom-checkbox"
            />
            <span className="text-sm text-stone-600">
              I am a new client (includes complimentary 1-on-1 style & color consultation)
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-stone-900 hover:bg-rose-500 hover:text-white text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 mt-4 cursor-pointer shadow-md disabled:opacity-75"
        >
          {isSubmitting ? (
            <span>Securing Appointment...</span>
          ) : (
            <>
              <span>Confirm Appointment Request</span>
              <ExternalLink className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-xs text-center text-stone-400 mt-4">
          Instant Confirmation • Stage Hair Design Toronto
        </p>
      </form>
    </div>
  );
};
