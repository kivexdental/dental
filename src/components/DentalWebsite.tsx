import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Services } from './Services';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { About } from './About';
import { Doctor } from './Doctor';
import { Safety } from './Safety';
import { News } from './News';
import { LocationMap } from './LocationMap';
import { FAQ } from './FAQ';
import { Footer } from './Footer';
import { AppointmentModal } from './AppointmentModal';
import { PolicyModal, PolicyType } from './PolicyModal';
import { CookieBanner } from './CookieBanner';
import { Marquee } from './magicui/marquee';
import { ServiceItem } from '../data/dentalData';
import { Award, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export const DentalWebsite: React.FC = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('General Consultation');
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicyType>('privacy');

  const handleBookAppointment = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsAppointmentOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    handleBookAppointment(service.title);
  };

  const handleOpenPolicy = (policy: PolicyType) => {
    setActivePolicy(policy);
    setIsPolicyOpen(true);
  };

  const accreditations = [
    { title: 'ADA Accredited Clinic', icon: Award },
    { title: 'Straumann® Guided Surgery', icon: CheckCircle2 },
    { title: 'Invisalign® Diamond Provider', icon: Sparkles },
    { title: '3Shape TRIOS® 3D Scanning', icon: CheckCircle2 },
    { title: 'Nobel Biocare® Implant Partner', icon: ShieldCheck },
    { title: 'Philips Zoom!® Laser Whitening', icon: Sparkles },
    { title: 'ISO 9001:2015 Certified Sterilization', icon: ShieldCheck },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F5F5F3] text-[#111111] antialiased selection:bg-[#B8F23A] selection:text-black overflow-x-hidden">
      
      {/* 1. Floating Pill Navigation */}
      <Navbar onBookAppointment={() => handleBookAppointment()} />

      {/* Main Content Sections */}
      <main className="space-y-4 sm:space-y-6">
        {/* 2. Hero Section */}
        <Hero onBookAppointment={() => handleBookAppointment()} />

        {/* 3. Magic UI Accreditation Marquee Ribbon */}
        <section className="px-3 sm:px-6 lg:px-8 py-1 max-w-[1240px] mx-auto overflow-hidden">
          <div className="bg-white/80 backdrop-blur-md rounded-full py-2.5 px-4 border border-black/[0.04] shadow-xs">
            <Marquee duration="30s" pauseOnHover={true} repeat={4} gap="2.5rem">
              {accreditations.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold text-[#444444] whitespace-nowrap">
                    <span className="w-5 h-5 rounded-full bg-[#EAF8D2] flex items-center justify-center text-[#3B7011]">
                      <Icon className="w-3 h-3 text-[#3B7011]" />
                    </span>
                    <span>{item.title}</span>
                    <span className="text-[#cccccc] mx-2">•</span>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </section>

        {/* 4. Complete Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Interactive Before / After Treatment Slider */}
        <BeforeAfterSlider />

        {/* 6. About Us Clinic Section */}
        <About onLearnMore={() => handleBookAppointment()} />

        {/* 7. Meet Your Doctor Section */}
        <Doctor onViewProfile={() => handleBookAppointment('Dr. Alex Carter Consultation')} />

        {/* 8. Safety Care Protocols */}
        <Safety onLearnMore={() => handleBookAppointment()} />

        {/* 9. Latest News & Insights */}
        <News />

        {/* 10. Clinic Location & Interactive Map */}
        <LocationMap />

        {/* 11. Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* 12. Footer with Legal Policies */}
      <Footer
        onBookAppointment={() => handleBookAppointment()}
        onOpenPolicy={handleOpenPolicy}
      />

      {/* 13. Interactive Appointment Scheduler Modal (Showcase / Demo) */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        initialService={selectedService}
      />

      {/* 14. Legal & Clinic Policy Modal */}
      <PolicyModal
        isOpen={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
        activePolicy={activePolicy}
        onSelectPolicy={setActivePolicy}
      />

      {/* 15. Cookie Notice & Privacy Banner */}
      <CookieBanner onOpenCookiePolicy={() => handleOpenPolicy('cookie')} />

    </div>
  );
};

export default DentalWebsite;
