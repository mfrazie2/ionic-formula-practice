import Navigation from '@/components/common/navigation'
import './globals.css'
import Footer from '@/components/common/footer'
import Providers from './providers'

export const metadata = {
  title: 'Ionic Formula Practice',
  description: 'Practice writing and naming ionic compounds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
