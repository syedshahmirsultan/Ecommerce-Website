import { createClient } from "next-sanity";
import { NextResponse, NextRequest } from "next/server";
import { SanityClient } from "sanity";

async function GET(request: NextRequest) {
    try {
      let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`);
      return NextResponse.json({res})
    } catch (error) {
      console.log((error as {message:string}).message)
      return NextResponse.json({"Error": error})
    }
  }




 
  
