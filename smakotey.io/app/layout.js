import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matt Akotey",
  description: "Matt Akotey's technology portfolio",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href={inter.url} />
        </Head>
        <body className={inter.className}>{children}</body>
      </html>
  );
}
