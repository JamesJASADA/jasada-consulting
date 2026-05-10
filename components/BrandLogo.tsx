"use client";

import Image from "next/image";
import { EMBLEM_TITLE_TOOLTIP, SITE } from "@/lib/site";

const dimensions = {
  header: { width: 40, height: 40, className: "brand-logo--header" },
  hero: { width: 360, height: 360, className: "brand-logo--hero" },
  footer: { width: 52, height: 52, className: "brand-logo--footer" },
  watermark: { width: 220, height: 220, className: "brand-logo--watermark" },
} as const;

type Variant = keyof typeof dimensions;

type Props = {
  variant: Variant;
  /** Meaningful alt when the emblem is primary content; empty when paired with visible company name. */
  alt?: string;
  /** Optional title/tooltip (defaults on header & footer when omitted). */
  title?: string;
  priority?: boolean;
};

export function BrandLogo({
  variant,
  alt = "",
  title,
  priority = false,
}: Readonly<Props>) {
  const d = dimensions[variant];
  const resolvedTitle =
    title ??
    (variant === "header" || variant === "footer"
      ? EMBLEM_TITLE_TOOLTIP
      : undefined);
  const eager =
    priority || variant === "header";

  return (
    <Image
      src={SITE.emblemPath}
      alt={alt}
      title={resolvedTitle}
      width={d.width}
      height={d.height}
      priority={priority}
      loading={eager ? "eager" : "lazy"}
      sizes={
        variant === "hero"
          ? "(max-width: 672px) 70vw, 360px"
          : variant === "watermark"
            ? "220px"
            : `${d.width}px`
      }
      className={`brand-logo ${d.className}`}
    />
  );
}
