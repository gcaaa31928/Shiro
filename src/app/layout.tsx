import '../styles/index.css'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { PropsWithChildren } from 'react'

import { init } from './init'
import { InitInClient } from './InitInClient'

init()
export default async function RootLayout({ children }: PropsWithChildren) {
  const messages = await getMessages()
  return (
    <>
      <NextIntlClientProvider messages={messages}>
        {children}
        <InitInClient />
        {/* <BrowserSupport /> */}
      </NextIntlClientProvider>
    </>
  )
}
