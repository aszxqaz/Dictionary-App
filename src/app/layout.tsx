import "../styles/main.scss";

import { Inconsolata, Inter, Lora } from "@next/font/google";
import { Header } from "./Header";
import { ThemeScript } from "./ThemeScript";

const inconsolata = Inconsolata({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const lora = Lora({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeScript />
        <Header />
        {children}
      </body>
    </html>
  );
}
