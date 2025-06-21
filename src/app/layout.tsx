import { ReactNode } from "react";

// This is a minimal root layout
// The actual layout is in app/[locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
