import React from 'react';
import { ArrowRight, CheckCircle2, Heart, Sparkles, MapPin } from 'lucide-react';

interface AboutSectionProps {
  onMeetTeam: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onMeetTeam }) => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-stone-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-stone-100 dark:bg-stone-900 rounded-2xl overflow-hidden shadow-xl shadow-stone-200/50 dark:shadow-none border border-stone-100 dark:border-stone-800">
              <img
                src="https://ik.imagekit.io/kevfun/nghia-do-thanh-HiLMRM4qkGA-unsplash.jpeg"
                alt="Stage Hair Design Salon Interior and Stylists"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100 dark:bg-rose-950/40 rounded-full -z-10 blur-2xl opacity-60 pointer-events-none"></div>
            
            {/* Floating Experience Badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-stone-100 dark:border-stone-800 max-w-[220px]">
              <div className="flex items-center space-x-2 text-rose-500 dark:text-rose-400 mb-1">
                <Sparkles className="w-4 h-4 fill-rose-300 text-rose-500 dark:text-rose-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 dark:text-white">Newly Renovated</span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 font-medium">
                Modern arched LED stations & soothing hair wash lounge on Yonge St.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest text-rose-500 dark:text-rose-400 uppercase">
              About Stage Hair Design • 舞台发型设计
            </span>
            <h2 className="font-serif text-4xl tracking-tight text-stone-900 dark:text-white leading-tight">
              Bringing global hair artistry & personalized care to Toronto.
            </h2>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              Stage Hair Design is a premier full-service salon situated in North York, Toronto at 5455a Yonge Street. We have an extended group of talented and experienced hairstylists who strive to deliver the very best in personalized cuts, custom hair dyeing, digital perms, and restorative scalp therapy.
            </p>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              Our dedicated team has traveled around the world to bring back the latest styling trends—from effortless Korean wave perms and Japanese thermal straightening to zero-damage vivid bleaches and Kérastase luxury treatments. Every service starts with a thorough, patient consultation so your style truly flatters your face shape and hair texture.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-500 dark:text-rose-400 flex-shrink-0" />
                <span className="text-sm font-medium text-stone-800 dark:text-stone-200">1-on-1 personalized consultations</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-500 dark:text-rose-400 flex-shrink-0" />
                <span className="text-sm font-medium text-stone-800 dark:text-stone-200">Minimal-damage bleach & color</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-500 dark:text-rose-400 flex-shrink-0" />
                <span className="text-sm font-medium text-stone-800 dark:text-stone-200">Kérastase & Olaplex hair care</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-500 dark:text-rose-400 flex-shrink-0" />
                <span className="text-sm font-medium text-stone-800 dark:text-stone-200">Relaxing head massage & SPA</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                id="meet-team-btn"
                onClick={onMeetTeam}
                className="group inline-flex items-center text-sm font-medium text-stone-900 dark:text-stone-100 border-b border-stone-300 dark:border-stone-700 pb-1 hover:border-rose-500 dark:hover:border-rose-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors cursor-pointer"
              >
                <span>Meet Our Directors & Stylists</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
