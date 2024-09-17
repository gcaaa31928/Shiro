import { Manrope, Noto_Serif_TC } from 'next/font/google'

const sansFont = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

const serifFont = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
  // adjustFontFallback: false,
  fallback: ['Noto Serif TC'],
})

export { sansFont, serifFont }
