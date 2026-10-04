import React, { useEffect } from 'react';
import { X, ShieldAlert, FileText, Lock, Cookie, CalendarCheck } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms' | 'medical-disclaimer' | 'cookie' | 'appointment';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  activePolicy: PolicyType;
  onSelectPolicy: (policy: PolicyType) => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  activePolicy,
  onSelectPolicy,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tabs: { id: PolicyType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'privacy', label: 'Privacy Policy', icon: Lock },
    { id: 'terms', label: 'Terms & Conditions', icon: FileText },
    { id: 'medical-disclaimer', label: 'Medical Disclaimer', icon: ShieldAlert },
    { id: 'cookie', label: 'Cookie Policy', icon: Cookie },
    { id: 'appointment', label: 'Appointment Policy', icon: CalendarCheck },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-dialog-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
    >
      <div className="bg-white max-w-2xl w-full rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-black/[0.08] flex flex-col relative max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-black/[0.06] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#EAF8D2] flex items-center justify-center text-[#3B7011]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 id="policy-dialog-title" className="text-lg sm:text-xl font-bold text-[#111111] leading-tight">
                Legal & Clinic Policies
              </h2>
              <p className="text-xs text-[#777777]">
                Transparency, patient rights, and data protection guidelines
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close policy dialog"
            className="w-8 h-8 rounded-full bg-[#F5F5F3] hover:bg-[#eaeaea] text-[#111111] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 px-4 sm:px-6 py-2.5 bg-[#FAFAF9] border-b border-black/[0.04] overflow-x-auto no-scrollbar shrink-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activePolicy === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectPolicy(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7] ${
                  isActive
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-[#555555] hover:text-[#111111] hover:bg-black/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm text-[#444444] leading-relaxed">
          {activePolicy === 'privacy' && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#111111]">Privacy Policy</h3>
              <p>
                At <strong>dental Clinic</strong>, we are committed to upholding your privacy and securing any personal data you share with us.
              </p>
              <h4 className="font-semibold text-[#111111] text-xs uppercase tracking-wider pt-1">1. Information We Collect</h4>
              <p>
                When submitting an inquiry or requesting a demo appointment, we collect your name, phone number, and optional email address. We do not store or transmit protected health information (PHI) over unencrypted public channels.
              </p>
              <h4 className="font-semibold text-[#111111] text-xs uppercase tracking-wider pt-1">2. Purpose of Use</h4>
              <p>
                Your contact details are solely utilized to confirm consultation appointments, reply to clinical inquiries, and share critical appointment reminders. We never sell, lease, or distribute your personal details to third-party commercial marketing entities.
              </p>
              <h4 className="font-semibold text-[#111111] text-xs uppercase tracking-wider pt-1">3. Data Security</h4>
              <p>
                All communications on this site employ standard TLS/HTTPS encryption protocols to safeguard against unauthorized interception.
              </p>
            </div>
          )}

          {activePolicy === 'terms' && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#111111]">Terms & Conditions</h3>
              <p>
                By accessing or browsing this website, you agree to comply with and be bound by the following terms and conditions of use.
              </p>
              <h4 className="font-semibold text-[#111111] text-xs uppercase tracking-wider pt-1">1. Informational Showcase</h4>
              <p>
                The materials and treatment visualizers presented on this site are intended for educational and aesthetic informational purposes only. Treatment outcomes, timelines, and costs may vary following individualized diagnostic evaluation by our clinical staff.
              </p>
              <h4 className="font-semibold text-[#111111] text-xs uppercase tracking-wider pt-1">2. Intellectual Property</h4>
              <p>
                All branding, interface components, images, visual designs, and copy displayed on this website are protected under applicable copyright and intellectual property legislation.
              </p>
            </div>
          )}

          {activePolicy === 'medical-disclaimer' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                <strong>Important Notice:</strong> Website content does not constitute medical advice or establish a doctor-patient relationship.
              </div>
              <h3 className="text-base font-bold text-[#111111]">Medical Disclaimer</h3>
              <p>
                The information provided on this dental clinic website—including blog articles, FAQ answers, procedure descriptions, and before/after comparisons—is offered solely for educational guidance and patient awareness.
              </p>
              <p>
                This information <strong>does not substitute</strong> for professional medical or dental diagnosis, clinical examination, or certified treatment. Always consult Dr. Alex Carter or a licensed healthcare provider regarding any oral health questions or medical emergencies.
              </p>
              <p>
                Never disregard professional dental guidance or delay seeking specialized care because of something you read or viewed on this website.
              </p>
            </div>
          )}

          {activePolicy === 'cookie' && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#111111]">Cookie Policy</h3>
              <p>
                Our website uses essential and functional cookies to ensure proper navigational performance, preserve device preview states, and analyze anonymous site traffic.
              </p>
              <h4 className="font-semibold text-[#111111] text-xs uppercase tracking-wider pt-1">Types of Cookies Used:</h4>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li><strong>Strictly Necessary:</strong> Enable navigation, session management, and interface display.</li>
                <li><strong>Functional:</strong> Remember your device mode preferences and user interactions.</li>
                <li><strong>Analytics (Optional):</strong> Assist in understanding user traffic to refine patient experience.</li>
              </ul>
            </div>
          )}

          {activePolicy === 'appointment' && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#111111]">Appointment & Cancellation Policy</h3>
              <p>
                We reserve dedicated operatory time and specialized sterilization setups for each scheduled patient visit.
              </p>
              <h4 className="font-semibold text-[#111111] text-xs uppercase tracking-wider pt-1">1. Scheduling & Confirmation</h4>
              <p>
                Appointments requested through our online showcase receive follow-up confirmation via telephone or SMS within standard clinic operating hours (Mon–Sat, 9:00 AM – 8:00 PM).
              </p>
              <h4 className="font-semibold text-[#111111] text-xs uppercase tracking-wider pt-1">2. Cancellation Notice</h4>
              <p>
                If you need to reschedule or cancel your visit, please provide at least 24 hours advance notification so we can accommodate patients requiring urgent dental relief.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-black/[0.06] bg-[#FAFAF9] flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#111111] hover:bg-black text-white text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
          >
            Close Policy
          </button>
        </div>

      </div>
    </div>
  );
};
