"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactLenis } from "lenis/react";

export function Providers({ children }) {
  return (
    // 'root' attaches the smooth scroll to the document window
    // lerp: 0.07 provides that heavy, premium luxury scroll feel
    <ReactLenis root options={{ lerp: 0.07, duration: 1.2, smoothWheel: true }}>
      <NextThemesProvider 
        attribute="class" 
        defaultTheme="dark" 
        enableSystem 
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </ReactLenis>
  );
}