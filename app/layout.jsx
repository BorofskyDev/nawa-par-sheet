import { righteous, openSans } from './fonts'
import LinkContainer from '@/components/layout/link-container/LinkContainer'
import ThemeToggle from '@/components/layout/theme-toggle/ThemeToggle'
import '@/styles/globals.scss'
import { ThemeProvider } from 'next-themes'

const header = righteous
const body = openSans

export const metadata = {
  title: 'Important Sheet',
  description:
    'A PAR sheet for expiration dates for items going frozen to ambient',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${header.variable} ${body.variable}`}>
        <ThemeProvider>
          {children}
          <LinkContainer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
