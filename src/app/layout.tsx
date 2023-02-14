'use client'
import '../globals.css'
import { SessionProvider } from "next-auth/react"
import AppBar from './components/header/AppBar';

export default function RootLayout({
  children,
  session
}: {
    children: React.ReactNode,
    session: any
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <>
            <AppBar />
            <main className=' mt-[90px]'>{children}</main>
          </>
        </SessionProvider>
      
      </body>
    </html>
           
    
  )
}
