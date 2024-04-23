import '@/styles/globals.css'

import { Inter as FontSans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-muted/40 font-sans antialiased',
            fontSans.variable
          )}
        >
          <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
            <div className='relative flex min-h-screen flex-col bg-background'>
              {children}
            </div>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
