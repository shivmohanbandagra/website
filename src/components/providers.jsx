"use client";

import { ReactLenis } from "lenis/react";

// Named export required by layout.js
export function Providers({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
