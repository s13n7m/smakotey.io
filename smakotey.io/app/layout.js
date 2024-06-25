import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

// Assuming metadata is used for the entire layout and not just specific pages
export const layoutMetadata = {
  title: "Matt Akotey",
  description: "Matt Akotey's technology portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// If you need to set metadata at the layout level, consider using a context or a higher-order component to propagate metadata to the root of your application.