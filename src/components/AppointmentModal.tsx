import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ArrowRight, Info, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ShimmerButton } from './magicui/shimmer-button';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService = 'General Consultation'
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService,
    doctor: 'Dr. Alex Carter (Prosthodontist)',
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM',
    notes: ''
  });

  // Sync initialService when opened
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService, isOpen]);

  // Handle ESC key to close
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

  const validate = () => {
    const newErrors: { name?: string; phone?: string; email?: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid patient full name (at least 2 characters).';
    }
    const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!cleanPhone || cleanPhone.length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits).';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate safe mock response without storing or exposing medical data
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B8F23A', '#3B7011', '#ffffff', '#EAF8D2']
        });
      } catch (err) {
        // Safe fallback
      }
    }, 600);
  };

  const timeSlots = [
    '09:30 AM', '11:00 AM', '01:30 PM', '03:00 PM', '04:30 PM', '06:00 PM'
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
    >
      <div className="bg-white max-w-lg w-full rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-black/[0.08] flex flex-col relative max-h-[92vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-[#F5F5F3] hover:bg-[#eaeaea] text-[#111111] flex items-center justify-center z-20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'form' ? (
          <div className="p-5 sm:p-8 overflow-y-auto">
            {/* Header */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 bg-[#EAF8D2] px-3 py-1 rounded-full text-xs font-bold text-[#3B7011]">
                  <span>Demo Appointment Flow</span>
                </span>
                <span className="text-[11px] font-semibold text-[#888888] bg-[#F5F5F3] px-2.5 py-1 rounded-full">
                  Showcase Mode
                </span>
              </div>

              <h2 id="modal-title" className="text-2xl sm:text-[26px] font-bold text-[#111111] tracking-tight">
                Schedule Your Visit
              </h2>
              <p className="text-xs sm:text-[13px] text-[#666666] mt-1 leading-relaxed">
                Choose your desired treatment, doctor, date, and preferred time slot.
              </p>

              {/* Explicit Demo Notification */}
              <div className="mt-3 p-3 rounded-2xl bg-[#F5F5F3] border border-black/[0.05] flex items-start gap-2.5 text-[11px] sm:text-[12px] text-[#555555]">
                <Info className="w-4 h-4 text-[#3B7011] shrink-0 mt-0.5" />
                <span>
                  <strong>Note:</strong> This showcase does not create a real appointment. No medical records or patient data are stored or shared.
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
              {/* Service Select */}
              <div>
                <label htmlFor="apt-service" className="block text-xs font-bold text-[#444444] uppercase tracking-wider mb-1">
                  Select Treatment
                </label>
                <select
                  id="apt-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#FAFAF9] border border-black/[0.08] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#B8F23A] transition-shadow"
                >
                  <option value="General Consultation">General Diagnostic Consultation</option>
                  <option value="Teeth Whitening">Laser Teeth Whitening</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Clear Aligners">Clear Aligners & Orthodontics</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry & Veneers</option>
                  <option value="Pediatric Dentistry">Pediatric Care</option>
                </select>
              </div>

              {/* Doctor Select */}
              <div>
                <label htmlFor="apt-doctor" className="block text-xs font-bold text-[#444444] uppercase tracking-wider mb-1">
                  Preferred Doctor
                </label>
                <select
                  id="apt-doctor"
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#FAFAF9] border border-black/[0.08] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#B8F23A] transition-shadow"
                >
                  <option value="Dr. Alex Carter (Prosthodontist)">Dr. Alex Carter (Prosthodontist & Implantologist)</option>
                  <option value="First Available Specialist">First Available Dental Specialist</option>
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="apt-date" className="block text-xs font-bold text-[#444444] uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    id="apt-date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#FAFAF9] border border-black/[0.08] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#B8F23A] transition-shadow"
                  />
                </div>

                <div>
                  <label htmlFor="apt-time" className="block text-xs font-bold text-[#444444] uppercase tracking-wider mb-1">
                    Available Time
                  </label>
                  <select
                    id="apt-time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#FAFAF9] border border-black/[0.08] text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#B8F23A] transition-shadow"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="apt-name" className="block text-xs font-bold text-[#444444] uppercase tracking-wider mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="apt-name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full px-4 py-2.5 rounded-2xl bg-[#FAFAF9] border text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#B8F23A] transition-shadow ${
                      errors.name ? 'border-red-500 bg-red-50/20' : 'border-black/[0.08]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium" role="alert">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="apt-phone" className="block text-xs font-bold text-[#444444] uppercase tracking-wider mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="apt-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 00000"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    className={`w-full px-4 py-2.5 rounded-2xl bg-[#FAFAF9] border text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#B8F23A] transition-shadow ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-black/[0.08]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium" role="alert">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Patient Email */}
              <div>
                <label htmlFor="apt-email" className="block text-xs font-bold text-[#444444] uppercase tracking-wider mb-1">
                  Email Address <span className="text-xs text-[#888888] font-normal normal-case">(optional)</span>
                </label>
                <input
                  id="apt-email"
                  type="email"
                  placeholder="sarah.jenkins@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full px-4 py-2.5 rounded-2xl bg-[#FAFAF9] border text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#B8F23A] transition-shadow ${
                    errors.email ? 'border-red-500 bg-red-50/20' : 'border-black/[0.08]'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600 mt-1 font-medium" role="alert">{errors.email}</p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <ShimmerButton
                  type="submit"
                  disabled={isSubmitting}
                  background="#B8F23A"
                  shimmerColor="rgba(255, 255, 255, 0.8)"
                  className="w-full py-3.5 px-6 rounded-full text-black font-semibold text-sm shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Processing Request...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <span>Confirm Appointment Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </ShimmerButton>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-6 sm:p-8 text-center flex flex-col items-center justify-center animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EAF8D2] flex items-center justify-center text-[#3B7011] mb-3 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="inline-flex items-center gap-1.5 bg-[#EAF8D2] px-3 py-0.5 rounded-full text-xs font-bold text-[#3B7011] mb-2">
              Demo Simulation Completed
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
              Appointment Requested!
            </h3>
            <p className="text-xs sm:text-sm text-[#666666] mt-1 max-w-sm">
              Thank you, <span className="font-semibold text-black">{formData.name || 'valued patient'}</span>. The showcase appointment details are summarized below:
            </p>

            {/* Recap Card */}
            <div className="bg-[#FAFAF9] rounded-2xl p-4 my-4 w-full text-left border border-black/[0.05] text-xs space-y-2 shadow-xs">
              <div className="flex justify-between">
                <span className="text-[#777777]">Treatment:</span>
                <span className="font-bold text-[#111111]">{formData.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777777]">Doctor:</span>
                <span className="font-bold text-[#111111]">{formData.doctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777777]">Date & Time:</span>
                <span className="font-bold text-[#111111]">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777777]">Location:</span>
                <span className="font-bold text-[#111111]">123 Smile Street, Ahmedabad</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777777]">Patient Contact:</span>
                <span className="font-bold text-[#111111]">{formData.phone}</span>
              </div>
            </div>

            <div className="bg-[#F5F5F3] p-3 rounded-xl border border-black/[0.05] text-[11px] text-[#666666] mb-5 max-w-sm text-left">
              <strong>Showcase Notice:</strong> This flow simulates patient booking interaction. In production, this form connects to your HIPAA-compliant EHR or scheduling software. No actual data has been saved.
            </div>

            <button
              onClick={() => {
                setStep('form');
                onClose();
              }}
              className="px-8 py-3 rounded-full bg-[#111111] text-white hover:bg-black text-sm font-semibold transition-colors active:scale-95 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7]"
            >
              Close Showcase
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
