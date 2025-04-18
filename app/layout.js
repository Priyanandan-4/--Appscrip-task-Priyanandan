import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Premium Handcrafted Products | MetaShop",
  description:
    "Discover our collection of high-quality, handcrafted products made by skilled artisans from around the world.",
  keywords: "handcrafted, artisan, premium products, sustainable, eco-friendly",
  openGraph: {
    title: "Premium Handcrafted Products | MetaShop",
    description:
      "Discover our collection of high-quality, handcrafted products made by skilled artisans from around the world.",
    url: "https://metashop.example.com",
    siteName: "MetaShop",
    images: [
      {
        url: "https://metashop.example.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MetaShop - Premium Handcrafted Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
