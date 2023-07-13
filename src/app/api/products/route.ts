import { createClient } from "next-sanity";
import { NextResponse } from "next/server";
import { projectId } from './../../../../sanity/env';
import { SanityClient } from "sanity";

let client :SanityClient=createClient({
    projectId:`${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
    dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    apiVersion: "2022-03-25",
     useCdn: false

})
export default async function GET() {
    try {
   // @ts-ignore
      const response = await client.query("*[_type ==\"products\"]")
      return NextResponse.json({response})
    } catch (error) {
      console.log((error as {message:string}).message)
      return NextResponse.json({"Error": error})
    }
  }

 
  
//   export async function getProducts() {
//     const client = createClient({
//       projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//       dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//       apiVersion: "2022-03-25",
//       useCdn: false,
//     });

  
//     const response = await client.query("*[_type ==\"products\"]")
  
//     return NextResponse.json(response)
//   }

