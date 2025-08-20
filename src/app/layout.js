import { Inter } from "next/font/google";  // ✅ correct import for Google Fonts
import "./globals.css";                    // ✅ global styles import
import TransitionProvider from "@/components/transitionProvider"; // ✅ custom component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev Portfolio App",
  description: "The best animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
