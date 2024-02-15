"use client";

import { NextUIProvider } from "@nextui-org/react";
import PlausibleProvider from "next-plausible";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <PlausibleProvider
        domain="matv.io"
        customDomain="https://analytics.matv.io"
      >
        {children}
      </PlausibleProvider>
    </NextUIProvider>
  );
}
