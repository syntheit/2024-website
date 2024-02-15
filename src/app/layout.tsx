import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Providers } from "./providers";

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
        className={`bg-background font-sans text-foreground dark ${inter.variable}`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
