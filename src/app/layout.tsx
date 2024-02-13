import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Providers } from "./providers";
import NavbarCustom from "~/components/Navbar/NavbarCustom";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Daniel Miller",
  description: "Daniel Miller's website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`text-foreground bg-background dark font-sans ${inter.variable}`}
      >
        <Providers>
          {/* <NavbarCustom /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
