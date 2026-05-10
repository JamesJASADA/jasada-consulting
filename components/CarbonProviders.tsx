"use client";

import { Theme } from "@carbon/react";

export function CarbonProviders({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Theme theme="white">{children}</Theme>;
}
