import { WhatsAppTrigger } from "./whatsapp-trigger";
import { WhatsAppIcon } from "./whatsapp-icon";

/**
 * Floating WhatsApp bubble. One tap opens the visitor's installed WhatsApp
 * app directly (Android shows the system picker when both WhatsApp and
 * WhatsApp Business are installed). No intermediate panel, no blank tabs.
 */
export function WhatsAppFloat() {
  return (
    <div
      id="whatsapp-float"
      className="fixed z-[80] flex flex-col items-end [bottom:max(1.25rem,env(safe-area-inset-bottom))] [right:max(1rem,env(safe-area-inset-right))]"
    >
      <WhatsAppTrigger
        ariaLabel="Chat with FABOM GLOBAL on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1faa53] text-white shadow-[0_14px_30px_-10px_rgba(31,170,53,0.65)] transition-transform duration-150 hover:scale-105 active:scale-95"
      >
        <WhatsAppIcon className="h-7 w-7" aria-hidden="true" />
      </WhatsAppTrigger>
    </div>
  );
}
