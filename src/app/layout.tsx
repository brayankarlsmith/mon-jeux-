import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Play 237 — Joue. Défie. Gagne.",
    template: "%s | Play 237",
  },
  description:
    "Retrouve tes amis, lance une partie de Ludo ou découvre les jeux de cartes sur Play 237.",
  applicationName: "Play 237",
};

export const viewport: Viewport = {
  themeColor: "#0B1024",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
