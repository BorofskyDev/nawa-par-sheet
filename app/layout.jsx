import BackgroundComponent from '@/components/layout/background-component/BackgroundComponent'
import { righteous, openSans } from './fonts'
import LinkContainer from '@/components/layout/link-container/LinkContainer'
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
          <BackgroundComponent />
          {children}
          <LinkContainer />
        </ThemeProvider>
      </body>
    </html>
  )
}
