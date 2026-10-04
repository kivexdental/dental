import React, { useState, useEffect } from 'react';
import { DentalWebsite } from './components/DentalWebsite';
import { PreviewToolbar, PreviewMode } from './components/PreviewToolbar';
import { DeviceFrame } from './components/DeviceFrame';

export function App() {
  const [isStandalone, setIsStandalone] = useState<boolean>(false);
  const [previewMode, setPreviewMode] = useState<PreviewMode>('pc');
  const [isToolbarVisible, setIsToolbarVisible] = useState<boolean>(true);

  useEffect(() => {
    // Detect if running inside iframe or standalone query
    const inIframe = window.self !== window.top;
    const urlParams = new URLSearchParams(window.location.search);
    const standaloneParam = urlParams.get('standalone') === 'true';

    setIsStandalone(inIframe || standaloneParam);
  }, []);

  // If inside the iframe or standalone parameter requested, render the pure dental clinic website directly
  if (isStandalone) {
    return <DentalWebsite />;
  }

  // Otherwise, render the Master Responsive Preview Shell with KIVEX Toolbar & Device Frames
  return (
    <div className="w-full min-h-screen bg-[#121214] overflow-hidden relative">
      {/* KIVEX Technology Permanent Preview Toolbar */}
      {isToolbarVisible && (
        <PreviewToolbar
          currentMode={previewMode}
          onModeChange={setPreviewMode}
          onClose={() => setIsToolbarVisible(false)}
        />
      )}

      {/* Floating Circular Reopen Control when Toolbar is Hidden */}
      {!isToolbarVisible && (
        <button
          onClick={() => setIsToolbarVisible(true)}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#F5EFE5] hover:bg-[#ede4d7] text-[#222222] border-2 border-[#2D5FC7] px-3.5 py-2 rounded-full shadow-2xl transition-all duration-200 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5FC7] cursor-pointer"
          title="Reopen KIVEX Technology Preview Toolbar"
          aria-label="Reopen KIVEX Technology Preview Toolbar"
        >
          <div className="w-5 h-5 rounded-full bg-[#2D5FC7] flex items-center justify-center text-white text-[10px] font-black">
            K
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-black text-[#2D5FC7]">KIVEX</span>
            <span className="text-[10px] font-bold text-[#E8B62A]">Preview</span>
          </div>
        </button>
      )}

      {/* Device Chassis & Responsive Viewport */}
      <DeviceFrame mode={previewMode} isToolbarVisible={isToolbarVisible} />
    </div>
  );
}

export default App;
