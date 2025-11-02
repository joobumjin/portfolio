import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import "./globals.css";
import Footer from "./components/footer"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const opensans = Open_Sans({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
});

export const metadata: Metadata = {
  title: "Bumjin Joo | Portfolio",
  // description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={opensans.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
