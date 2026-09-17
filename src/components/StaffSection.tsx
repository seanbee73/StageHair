import React from 'react';
import { STAFF_MEMBERS } from '../data/salonData';
import { Instagram, Calendar, Award } from 'lucide-react';

interface StaffSectionProps {
  onBookWithStylist: (stylistId: string) => void;
}

export const StaffSection: React.FC<StaffSectionProps> = ({ onBookWithStylist }) => {
  return (
    <section id="team" className="py-24 bg-stone-50 dark:bg-stone-900 border-t border-stone-200/40 dark:border-stone-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-stone-500 dark:text-stone-400 uppercase">
            Our Master Stylists • 发型师团队
          </span>
          <h2 className="font-serif text-4xl tracking-tight text-stone-900 dark:text-white">Directors & Senior Stylists</h2>
          <p className="text-stone-600 dark:text-stone-300">
            Dedicated artists with extensive global experience and hundreds of 5-star customer reviews across North York & Toronto.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STAFF_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-stone-950 rounded-2xl overflow-hidden border border-stone-200/60 dark:border-stone-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Stylist Image */}
                <div className="aspect-[4/5] overflow-hidden bg-stone-100 dark:bg-stone-900 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-stone-900/80 dark:bg-stone-950/80 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Award className="w-3 h-3 text-rose-300" />
                    <span>{member.experience}</span>
                  </div>
                </div>

                {/* Stylist Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-serif text-xl text-stone-900 dark:text-white font-semibold">{member.name}</h3>
                      {member.chineseRole && (
                        <span className="text-xs font-medium text-stone-500 dark:text-stone-400 block">
                          {member.chineseRole}
                        </span>
                      )}
                    </div>
                    <a
                      href="https://www.instagram.com/stagehairdesign"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 dark:text-stone-500 hover:text-rose-500 dark:hover:text-rose-400 transition-colors p-1"
                      aria-label={`${member.name} Instagram`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs font-medium text-rose-500 dark:text-rose-400 uppercase tracking-wide mb-3">
                    {member.role}
                  </p>

                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {member.specialties.map((spec, index) => (
                      <span
                        key={index}
                        className="text-[11px] font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 px-2 py-0.5 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onBookWithStylist(member.id)}
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-wide rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-950 hover:bg-rose-500 dark:hover:bg-rose-400 hover:text-white dark:hover:text-stone-950 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {member.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
