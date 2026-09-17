/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingMenu } from './components/PricingMenu';
import { StaffSection } from './components/StaffSection';
import { GallerySection } from './components/GallerySection';
import { SocialFeedSection } from './components/SocialFeedSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { BookingSuccessModal } from './components/BookingSuccessModal';
import { GalleryItem } from './types';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedStylistId, setSelectedStylistId] = useState<string | undefined>(undefined);
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [completedBooking, setCompletedBooking] = useState<any | null>(null);
  const [isPriceListOpen, setIsPriceListOpen] = useState(false);

  const scrollToBooking = (serviceId?: string, stylistId?: string) => {
    if (serviceId) setSelectedServiceId(serviceId);
    if (stylistId) setSelectedStylistId(stylistId);
    
    const bookElem = document.getElementById('book');
    if (bookElem) {
      bookElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookStyle = (serviceCategoryOrName: string, stylist?: string) => {
    if (stylist) {
      const lower = stylist.toLowerCase();
      if (lower.includes('jack') || lower.includes('liu')) setSelectedStylistId('jackie');
      else if (lower.includes('william')) setSelectedStylistId('william');
      else if (lower.includes('andy')) setSelectedStylistId('andy');
      else if (lower.includes('gavin')) setSelectedStylistId('gavin');
    }

    const lowerService = serviceCategoryOrName.toLowerCase();
    if (lowerService.includes('perm') || lowerService.includes('wave')) {
      setSelectedServiceId('perm-digital');
    } else if (lowerService.includes('bleach') || lowerService.includes('lightening')) {
      setSelectedServiceId('color-bleach');
    } else if (lowerService.includes('color') || lowerService.includes('dye') || lowerService.includes('balayage')) {
      setSelectedServiceId('color-single');
    } else if (lowerService.includes('straight') || lowerService.includes('japanese')) {
      setSelectedServiceId('perm-straightening');
    } else if (lowerService.includes('treatment') || lowerService.includes('kerastase') || lowerService.includes('caviar')) {
      setSelectedServiceId('treat-caviar');
    } else if (lowerService.includes('cut')) {
      setSelectedServiceId('cut-director-women');
    }

    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans antialiased selection:bg-rose-200 selection:text-stone-900">
      {/* 1. Navigation */}
      <Navbar
        onOpenBooking={() => scrollToBooking()}
        onOpenPriceList={() => setIsPriceListOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero
        onOpenBooking={() => scrollToBooking()}
        onOpenPriceList={() => setIsPriceListOpen(true)}
      />

      {/* 3. About Section */}
      <AboutSection onMeetTeam={() => scrollToSection('team')} />

      {/* 4. Curated Services Grid with "View Full Price List" trigger */}
      <ServicesSection
        onSelectService={(serviceId) => scrollToBooking(serviceId)}
        onViewFullMenu={() => setIsPriceListOpen(true)}
      />

      {/* 5. Staff / Stylist Team */}
      <StaffSection
        onBookWithStylist={(stylistId) => scrollToBooking(undefined, stylistId)}
      />

      {/* 6. Gallery Section (Masonry layout) */}
      <GallerySection onOpenLightbox={(item) => setActiveLightboxItem(item)} />

      {/* 7. Social Media Feed (Latest Client Styles) */}
      <SocialFeedSection
        onBookStyle={(serviceName, stylist) => handleBookStyle(serviceName, stylist)}
      />

      {/* 8. Reviews Section */}
      <ReviewsSection />

      {/* 9 & 10. Booking Strip, Contact & Booking Form */}
      <ContactSection
        selectedServiceId={selectedServiceId}
        selectedStylistId={selectedStylistId}
        onBookingComplete={(details) => setCompletedBooking(details)}
        onScrollToBook={() => scrollToBooking()}
      />

      {/* 11. Footer */}
      <Footer
        onScrollToSection={(sec) => scrollToSection(sec)}
        onOpenPriceList={() => setIsPriceListOpen(true)}
      />

      {/* Official Price List Pop-up Modal */}
      <PricingMenu
        isOpen={isPriceListOpen}
        onClose={() => setIsPriceListOpen(false)}
        onSelectService={(serviceId) => scrollToBooking(serviceId)}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
        onBookStyle={(cat) => handleBookStyle(cat)}
      />

      {/* Booking Confirmation Receipt Modal */}
      <BookingSuccessModal
        details={completedBooking}
        onClose={() => setCompletedBooking(null)}
      />
    </div>
  );
}
