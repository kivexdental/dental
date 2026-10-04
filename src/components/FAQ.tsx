import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/dentalData';

export const FAQ: React.FC = () => {
  // First item open by default matching reference image
  const [openId, setOpenId] = useState<string>('1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="max-w-[1240px] mx-auto bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-subtle border border-black/[0.04]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 self-start bg-[#F5F5F3] px-3.5 py-1.5 rounded-full border border-black/[0.05] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/60"></span>
              <span className="text-[12px] sm:text-[13px] font-medium text-[#444444]">
                FAQ
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight text-[#111111] leading-tight">
              Frequently Asked<br />
              <span className="text-[#111111]">Questions</span>
            </h2>

            <p className="text-[14px] sm:text-[16px] text-[#666666] mt-2 font-normal">
              Find quick answers to common questions about our dental services, technology, and patient care.
            </p>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              const buttonId = `faq-btn-${item.id}`;
              const panelId = `faq-panel-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={`rounded-[22px] transition-all duration-300 border ${
                    isOpen
                      ? 'bg-[#FAFAF9] border-black/[0.08] shadow-sm'
                      : 'bg-white hover:bg-[#FAFAF9] border-black/[0.05]'
                  }`}
                >
                  <button
                    id={buttonId}
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7] rounded-[22px]"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="text-[15px] sm:text-[16px] font-bold text-[#111111] leading-snug">
                      {item.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#111111] text-white' : 'bg-[#F5F5F3] text-[#111111]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-5 sm:px-6 pb-5 pt-1 text-[14px] text-[#666666] leading-relaxed border-t border-black/[0.04] mt-1 animate-in fade-in duration-200"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
