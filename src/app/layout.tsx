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
  title: "bumjin | portfolio",
  description: "Hi! I'm Bumjin, a master's student studying machine learning at Brown. Learn more about me, my experience, and my projects here!",
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
