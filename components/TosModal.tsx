git commit -m "feat: update footer links and add terms of service"import React from 'react';

interface TosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TosModal: React.FC<TosModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-fast"
      onClick={onClose}
    >
      <div 
        className="relative bg-[var(--bg-card)] rounded-xl border border-[var(--border-primary)] w-full max-w-2xl max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-[var(--border-primary)] flex-shrink-0">
            <h2 className="text-xl font-semibold text-[var(--accent-primary)]">Terms of Service</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-[var(--text-secondary)] hover:bg-[rgba(107,114,128,0.2)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Close Terms of Service"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
        </div>
        <div className="overflow-y-auto p-6 text-[var(--text-secondary)] text-sm space-y-4">
            <p>Welcome to FREEgenerate! These terms and conditions outline the rules and regulations for the use of our application.</p>
            
            <h3 className="text-lg font-semibold text-[var(--text-primary)] pt-2">1. Acceptance of Terms</h3>
            <p>By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

            <h3 className="text-lg font-semibold text-[var(--text-primary)] pt-2">2. Use of the Service</h3>
            <p>Our service allows you to manipulate and generate images using AI models. You agree not to use the service for any unlawful purpose or to generate content that is harmful, obscene, abusive, invasive of privacy, or otherwise objectionable.</p>
            <p>You are responsible for the images you upload and the prompts you provide. You must ensure you have the necessary rights to use any content you submit to the service.</p>

            <h3 className="text-lg font-semibold text-[var(--text-primary)] pt-2">3. Intellectual Property</h3>
            <p>You retain ownership of the content you create. However, by using the service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display the generated content solely for the purpose of operating and providing the service to you.</p>

            <h3 className="text-lg font-semibold text-[var(--text-primary)] pt-2">4. Disclaimer of Warranties</h3>
            <p>This service is provided "as is," with all faults, and we express no representations or warranties, of any kind related to this application or the materials contained on this application. Also, nothing contained on this application shall be interpreted as advising you.</p>
            
            <h3 className="text-lg font-semibold text-[var(--text-primary)] pt-2">5. Limitation of Liability</h3>
            <p>In no event shall we, nor any of our officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this application whether such liability is under contract. We shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this application.</p>
            
            <h3 className="text-lg font-semibold text-[var(--text-primary)] pt-2">6. Changes to Terms</h3>
            <p>We reserve the right to revise these terms at any time as we see fit, and by using this application you are expected to review these terms on a regular basis.</p>
        </div>
      </div>
    </div>
  );
};

export default TosModal;