"use client";

import type { ReactNode } from "react";

/**
 * Event name used to ask the floating WhatsApp bubble to open the app
 * chooser (WhatsApp vs WhatsApp Business). Any WhatsApp CTA on the page —
 * navbar, footer, hero "Book Now", enquiry form — dispatches this event
 * instead of linking to wa.me directly.
 *
 * Why: wa.me links can land on a "download WhatsApp" page in some mobile
 * browsers. The chooser uses Android intent:// deep links that open the
 * installed app directly, with wa.me only as a silent fallback.
 */
export const WHATSAPP_CHOOSER_EVENT = "fabom:open-whatsapp-chooser";

export function openWhatsAppChooser() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(WHATSAPP_CHOOSER_EVENT));
  }
}

/**
 * Button that opens the WhatsApp app chooser on tap. Drop-in replacement
 * for the old wa.me <a> links — keeps the same visual classes.
 */
export function WhatsAppTrigger({
  children,
  className,
  ariaLabel,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        openWhatsAppChooser();
      }}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </button>
  );
}
