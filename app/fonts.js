import { Righteous, Open_Sans } from "next/font/google";

export const righteous = Righteous({
    subsets: ['latin'],
    variables: '--font-heading',
    weight: ['400']
})

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '700'],
})