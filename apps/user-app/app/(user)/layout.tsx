// import { Geist, Geist_Mono, Inter } from "next/font/google"

import { AppbarClient } from "@/components/AppbarClient"

// // @ts-ignore
// import "@workspace/ui/globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
// import { cn } from "@workspace/ui/lib/utils";
// import { Providers } from "../../providers";
// import { AppbarClient } from "@/components/AppbarClient";

// const geistHeading = Geist({subsets:['latin'],variable:'--font-heading'});

// const inter = Inter({subsets:['latin'],variable:'--font-sans'})

// const fontMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <AppbarClient></AppbarClient>
      {children}
    </div>
  )
}
