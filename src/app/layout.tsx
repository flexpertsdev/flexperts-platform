import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Flexperts - Build Apps Without Code",
  description: "Democratizing software development - build real applications through natural conversation",
  keywords: "no-code, app builder, AI development, visual programming",
  authors: [{ name: "Flexperts" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#22C55E" },
    { media: "(prefers-color-scheme: dark)", color: "#16C181" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
