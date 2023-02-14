


import { signOut, useSession } from "next-auth/react"
import Link from "next/link";





export default function AppBar() {


    const { data: session } = useSession();

    return (
        <header className=' z-40 flex items-center justify-between p-5 fixed top-0 right-0 w-full box-shadow  header_div bg-white'>
            <div className='brand text-purple-600 flex gap-2 items-center justify-center'>
                <img src="https://www.zenithbank.com/media/2077/zenith-bank-logo_2.png" alt="" width={50} height={50}/>
            </div> 
            {
                session ? <button className="p-3 bg-red-700 text-white" onClick={()=>signOut()}>Sign out</button> : <Link href='/' className="p-3 bg-red-700 text-white">Sign In</Link>
            }
        </header>
      
  )
}
