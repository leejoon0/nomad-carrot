import type { Metadata } from "next";
import "./globals.css";

//import "@/lib/db";

export const metadata: Metadata = {
  title: {
    template: "%s | Karrot Market",
    default: "Karrot Market",
  },
  description: "Sell and buy all the things!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-neutral-900 text-white max-w-screen-sm mx-auto`}>
        {children}
      </body>
    </html>
  );
}
