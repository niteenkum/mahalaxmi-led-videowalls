import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mahalaxmi LED Video Walls | Indoor, Outdoor & Transparent LED Signage",
  description:
    "Established 2022. L-Shaped 3D Outdoor LED Displays, Indoor Fixed MicroPitch Walls, Transparent Glass LEDs, Digital Standees & Billboards across Nagpur, Ahmedabad & Bengaluru.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-t-bg text-t-ink selection:bg-t-accent selection:text-t-accent-fg">
        {children}
      </body>
    </html>
  );
}
