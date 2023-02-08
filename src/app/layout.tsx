import { AppContextProvider } from "@/context/ContextProvider";
import "../styles/main.scss";
import { Header } from "./Header";
import { ThemeScript } from "./ThemeScript";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeScript />
        <AppContextProvider>
          <Header />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
