import { AppContextProvider } from "@/context/ContextProvider";
import "../styles/main.scss";
import { Header } from "@/partials/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* <script src="./preferences.js" /> */}
        <AppContextProvider>
          <Header />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}

// export const ThemeScript = () => <script src="./theme.js" />;
