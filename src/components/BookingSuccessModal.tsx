import React from 'react';
import { CheckCircle2, Calendar, Clock, User, MapPin, Download, X } from 'lucide-react';

interface BookingSuccessModalProps {
  details: {
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
  } | null;
  onClose: () => void;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({ details, onClose }) => {
  if (!details) return null;

  const handleDownloadCalendar = () => {
    // Generate simple ICS calendar event
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Stage Hair Design//Appointment//EN
BEGIN:VEVENT
SUMMARY:Appointment at Stage Hair Design - ${details.serviceName}
DESCRIPTION:Stylist: ${details.stylistName}\\nService: ${details.serviceName}\\nDuration: ${details.duration}\\nAddress: 5455a Yonge St, North York, Toronto, ON M2N 5S1\\nPhone: (647) 350-8383
LOCATION:5455a Yonge St, North York, Toronto, ON M2N 5S1
DTSTART:${details.date.replace(/-/g, '')}T160000Z
DTEND:${details.date.replace(/-/g, '')}T173000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Stage_Hair_Design_Appointment_${details.date}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-stone-200 dark:border-stone-800 relative animate-in fade-in zoom-in-95 duration-200 transition-colors">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 p-1 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="text-center pb-6 border-b border-stone-100 dark:border-stone-800">
          <div className="w-14 h-14 bg-rose-50 dark:bg-rose-950/60 text-rose-500 dark:text-rose-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner border border-rose-100 dark:border-rose-900/50">
            <CheckCircle2 className="w-8 h-8 text-rose-500 dark:text-rose-400" />
          </div>
          <span className="text-[11px] font-semibold tracking-widest text-rose-500 dark:text-rose-400 uppercase">
            Appointment Request Confirmed
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-white mt-1">
            See You Soon, {details.firstName}!
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
            Stage Hair Design has received your booking. We'll contact you at <strong className="text-stone-700 dark:text-stone-300">{details.phone}</strong> / <strong className="text-stone-700 dark:text-stone-300">{details.email}</strong>.
          </p>
        </div>

        {/* Appointment Card Recap */}
        <div className="my-6 bg-stone-50 dark:bg-stone-950/80 rounded-2xl p-5 border border-stone-200/70 dark:border-stone-800 space-y-3.5 text-xs text-stone-700 dark:text-stone-300">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200/50 dark:border-stone-800">
            <span className="text-stone-500 dark:text-stone-400 font-medium uppercase text-[10px] tracking-wider">Service</span>
            <span className="font-semibold text-stone-900 dark:text-white text-right">{details.serviceName}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
              Stylist / Director
            </span>
            <span className="font-semibold text-stone-900 dark:text-white">{details.stylistName}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
              Date
            </span>
            <span className="font-semibold text-stone-900 dark:text-white">{details.date}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
              Time & Duration
            </span>
            <span className="font-semibold text-stone-900 dark:text-white">{details.timeSlot} ({details.duration})</span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-stone-200/50 dark:border-stone-800">
            <span className="text-stone-500 dark:text-stone-400">Estimated Rate</span>
            <span className="font-serif text-base font-semibold text-stone-900 dark:text-white">{details.price}</span>
          </div>
        </div>

        {/* Studio Location Reminder */}
        <div className="flex items-start gap-2.5 text-xs text-stone-600 dark:text-stone-300 mb-6 bg-rose-50/60 dark:bg-rose-950/40 p-3.5 rounded-xl border border-rose-100 dark:border-rose-900/50">
          <MapPin className="w-4 h-4 text-rose-500 dark:text-rose-400 flex-shrink-0 mt-0.5" />
          <span>
            <strong className="text-stone-900 dark:text-white">Stage Hair Design:</strong> 5455a Yonge St, North York, Toronto, ON M2N 5S1. Tel: (647) 350-8383. Near Finch TTC Subway.
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownloadCalendar}
            className="flex-1 py-3 px-4 rounded-full border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold uppercase tracking-wider hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Add to Calendar (.ics)</span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-950 text-xs font-semibold uppercase tracking-wider hover:bg-rose-500 dark:hover:bg-rose-400 hover:text-white dark:hover:text-stone-950 transition-all cursor-pointer shadow-md"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
