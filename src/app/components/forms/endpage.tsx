





'use client'

import { signOut } from "next-auth/react"


    //import Others from "./Others";
    //const { data: session } = useSession();





export default function EndPoint() {
    const clearAndLogOut = () => {
        localStorage.clear()
        signOut()
    }
    return (
        <div className="flex flex-col gap-4">
            <div className=" text-3xl font-bold text-gray-700">
                Congratulations!!!
            </div>
            <div className="">
                Your request has been sent 
                An email would be sent to you to confirm your approval status.
            </div>

            <button onClick={clearAndLogOut} className="w-full bg-gray-800 text-white p-4">
                Re-Submit
            </button>
        </div>
        
    )
  }
  

/***
 * 
 * 
 * 
 * 
 * 
 */