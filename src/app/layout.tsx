'use client'
import './globals.css'
import { SessionProvider, useSession } from "next-auth/react"
import AppBar from './components/header/AppBar';
import { Session } from 'types';
//import type { Session } from 'next-auth';




export default function RootLayout({
  children,
  //session
}: {
    children: React.ReactNode,
   // session: Session
  }) {
  
  //const mi = useSession()

  //console.log(session, '---------', mi)
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <>
            <AppBar />
            <main className=' mt-[90px]'>{children}</main>
          </>
        </SessionProvider>
      
      </body>
    </html>
           
    
  )
}
