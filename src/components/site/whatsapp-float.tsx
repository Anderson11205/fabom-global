"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./whatsapp-icon";

/**
 * Floating WhatsApp bubble with an app chooser.
 *
 * On Android the two options deep-link straight into WhatsApp and WhatsApp
 * Business (separate app packages) via intent:// URLs, so visitors with both
 * apps installed can pick the exact one they want to chat from. If an app is
 * missing, the browser silently falls back to the universal wa.me link.
 * On other platforms both options use the universal wa.me click-to-chat link.
 */

function universalLink() {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    SITE.whatsappMessage
  )}`;
}

/** Android intent URL that opens a specific WhatsApp app package. */
function androidIntentLink(pkg: string) {
  const fallback = encodeURIComponent(
    `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`
  );
  return `intent://send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(
    SITE.whatsappMessage
  )}#Intent;scheme=whatsapp;package=${pkg};S.browser_fallback_url=${fallback};end`;
}

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  // Detect platform after mount so server and client render identically.
  useEffect(() => {
    setIsAndroid(/Android/i.test(navigator.userAgent));
  }, []);

  // Close on Escape and on taps outside the bubble/panel.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onPointer(e: PointerEvent) {
      const root = document.getElementById("whatsapp-float");
      if (root && !root.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const whatsappHref = isAndroid
    ? androidIntentLink("com.whatsapp")
    : universalLink();
  const businessHref = isAndroid
    ? androidIntentLink("com.whatsapp.w4b")
    : universalLink();

  return (
    <div
      id="whatsapp-float"
      className="fixed z-[80] flex flex-col items-end gap-3 [bottom:max(1.25rem,env(safe-area-inset-bottom))] [right:max(1rem,env(safe-area-inset-right))]"
    >
      {open ? (
        <div
          role="dialog"
          aria-label="Choose which WhatsApp app to chat with"
          className="w-[min(20rem,calc(100vw-2rem))] animate-[wa-pop_0.2s_ease-out] border border-line bg-white p-5 shadow-[0_24px_60px_-24px_rgba(13,26,44,0.45)] motion-reduce:animate-none"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-steel">
                Chat with us
              </p>
              <p className="mt-1 font-display text-lg font-bold leading-tight text-navy">
                FABOM GLOBAL
              </p>
              <p className="mt-0.5 text-[13px] text-steel">
                {SITE.whatsappDisplay}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat options"
              className="-m-1 flex h-8 w-8 shrink-0 items-center justify-center text-steel transition-colors hover:text-navy"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-4 space-y-2.5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center gap-2 bg-[#1faa53] text-sm font-semibold text-white transition-colors hover:bg-[#178f45]"
            >
              <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
              Open WhatsApp
            </a>
            <a
              href={businessHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center gap-2 border border-[#1faa53] bg-white text-sm font-semibold text-[#14803c] transition-colors hover:bg-[#1faa53]/5"
            >
              <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
              Open WhatsApp Business
            </a>
          </div>

          <p className="mt-3 text-[11.5px] leading-relaxed text-steel">
            Your chat opens with a ready message. If your phone has both apps
            installed, it will ask which one to use — tap the one you prefer.
          </p>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close WhatsApp chat options" : "Chat with FABOM GLOBAL on WhatsApp"}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_14px_30px_-10px_rgba(31,170,83,0.65)]",
          "transition-transform duration-150 hover:scale-105 active:scale-95",
          open ? "bg-navy" : "bg-[#1faa53]"
        )}
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <WhatsAppIcon className="h-7 w-7" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
