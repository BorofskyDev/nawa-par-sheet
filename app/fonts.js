import { VT323, Inconsolata } from "next/font/google";

export const vt323 = VT323({
    subsets: ['latin'],
    variable: '--font-heading',
    weight: ['400']
})

export const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '700'],
})