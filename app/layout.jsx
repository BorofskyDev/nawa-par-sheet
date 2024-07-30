import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Important Sheet",
  description: "A PAR sheet for expiration dates for items going frozen to ambient",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
