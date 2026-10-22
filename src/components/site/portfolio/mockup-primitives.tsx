import { cn } from "@/lib/utils";

/**
 * Presentational building blocks for the CSS-built website mockups.
 * Everything rendered with these primitives is decorative (aria-hidden)
 * and non-interactive — the accessible description lives on the parent card.
 */

export function MockBrowser({
  url,
  children,
  className,
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "overflow-hidden rounded-[4px] border border-black/10 bg-white shadow-[0_18px_44px_-18px_rgba(13,26,44,0.35)]",
        className
      )}
    >
      {/* Chrome bar — clean, no decorative dots */}
      <div className="flex items-center gap-2 border-b border-black/[0.07] bg-[#eef0f3] px-3 py-1.5">
        <span className="flex-1 truncate rounded-[3px] bg-white px-2 py-[3px] text-[7px] leading-none text-steel">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

export function MockPhone({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "overflow-hidden rounded-[14px] border border-black/10 bg-white p-[3px] shadow-[0_18px_44px_-18px_rgba(13,26,44,0.4)]",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-[11px] border border-black/[0.06]">
        <div className="flex items-center justify-center gap-1 bg-[#eef0f3] py-[3px]">
          <span className="h-[3px] w-8 rounded-full bg-black/15" />
        </div>
        {children}
      </div>
    </div>
  );
}

/** Tiny display headline used inside mockups */
export function MockHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn("block font-display font-bold leading-[1.12]", className)}
    >
      {children}
    </span>
  );
}

/** Small pill button used inside mockups */
export function MockButton({
  children,
  tone = "solid",
  className,
}: {
  children: React.ReactNode;
  tone?: "solid" | "outline" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-[2px] px-2 py-[3px] text-[6.5px] font-semibold tracking-wide",
        tone === "solid" && "bg-navy text-white",
        tone === "outline" && "border border-current",
        tone === "light" && "bg-white/15 text-white",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Abstract image placeholder block */
export function MockImage({
  className,
  icon,
}: {
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {icon ? <span className="relative opacity-60">{icon}</span> : null}
    </span>
  );
}
