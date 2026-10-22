"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Renders a website mockup at a fixed "design width" and scales it down to
 * fit whatever container it sits in — exactly like a marketplace thumbnail.
 *
 * Because the mockup always renders at its full desktop width, text never
 * wraps awkwardly and nothing is ever squeezed or cut mid-line on phones.
 * The preview is cropped at `cropHeight` design-pixels and softened with a
 * small fade so the crop reads as an intentional editorial choice.
 */
export function ScaledMock({
  designWidth = 680,
  cropHeight = 380,
  className,
  children,
}: {
  designWidth?: number;
  cropHeight?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / designWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);

  return (
    <div
      ref={wrapRef}
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: `${designWidth} / ${cropHeight}` }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={
          scale === null
            ? { width: designWidth, visibility: "hidden" }
            : {
                width: designWidth,
                transform: `scale(${scale})`,
              }
        }
      >
        {children}
        {/* Soft fade so the crop edge looks designed, never sliced */}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-white" />
      </div>
    </div>
  );
}
