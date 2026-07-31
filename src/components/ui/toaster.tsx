"use client";

import { Toaster as SonnerToaster, toast } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      richColors
      closeButton
      toastOptions={{
        style: {
          fontFamily: "var(--font-dm-sans)",
        },
      }}
    />
  );
}

export { toast };
