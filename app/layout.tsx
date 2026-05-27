import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muammer | Robotics Engineer",
  description: "Robotics expert specializing in ROS2, autonomous navigation, and perception systems. Available for freelance projects.",
  keywords: ["robotics", "ROS2", "autonomous systems", "navigation", "perception", "freelance", "C++", "C"],
  authors: [{ name: "Muammer" }],
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
