import { vt323, inconsolata } from './fonts'
import LinkContainer from '@/components/layout/link-container/LinkContainer'
import Navbar from '@/components/layout/nav/Navbar'
import '@/styles/globals.scss'
import { ThemeProvider } from 'next-themes'

const header = vt323
const body = inconsolata

export const metadata = {
  title: 'Important Sheet',
  description:
    'A PAR sheet for expiration dates for items going frozen to ambient',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={`${header.variable} ${body.variable}`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <LinkContainer />
        </ThemeProvider>
      </body>
    </html>
  )
}
