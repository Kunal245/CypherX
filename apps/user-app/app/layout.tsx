import { Geist, Geist_Mono, Inter } from "next/font/google"

// @ts-ignore
import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils";
// import { Providers } from "../../providers";
import { AppbarClient } from "@/components/AppbarClient";
import { Providers } from "@/providers";

const geistHeading = Geist({subsets:['latin'],variable:'--font-heading'});

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, geistHeading.variable)}
    >
      <Providers>
        <body>
          {/* <AppbarClient></AppbarClient> */}
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </Providers>
    </html>
  )
}
