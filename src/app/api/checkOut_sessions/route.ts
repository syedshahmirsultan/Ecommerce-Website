import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe'


interface typeOfData{
    price:string,
    name:string,
    quautity:number,
}

let originalData = [
    {
        price:"price_1NXaSoE9slNBw1m7XeokJCEv",
        name:"Flex Push Button Bomber",
        quautity:1,
    },
    {
        price:"price_1NXaRkE9slNBw1m7mCMKdFRe",
        name:"Muscle Tank",
        quautity:1,
    },
    {
        price:"price_1NXaQKE9slNBw1m7InFNczUU",
        name:"Brushed Bomber",
        quautity:1,
    },
    {
        price:"price_1NXaOOE9slNBw1m7w30aEylR",
        name:"Raglan Sweatshirt",
        quautity:1,
    },
    {
        price:"price_1NXaN3E9slNBw1m7vclROl5h",
        name:"Imperial Alpaca Hoodie",
        quautity:1,
    },
    {
        price:"price_1NXaLyE9slNBw1m77gelcH8M",
        name:"Flex Sweatpants",
        quautity:1,
    },
    {
        price:"price_1NXaKIE9slNBw1m7WPTAvi9n",
        name:"Kids One",
        quautity:1,
    },
    {
        price:"price_1NXaIyE9slNBw1m7TQTTmUpW",
        name:"Lite Sweatpants",
        quautity:1,
    },
    {
        price:"price_1NXaGbE9slNBw1m7jBu9fxYM",
        name:"Flex Sweatshirt",
        quautity:1,
    },
    {
        price:"price_1NXaFPE9slNBw1m7uhUWzrEn",
        name:"Cameryn Sash Tie Dress",
        quautity:1,
    },
    {
        price:"price_1NXaEIE9slNBw1m7PBhU4rtn",
        name:"Brushed Raglan Sweatshirt",
        quautity:1,
    },
    {
        price:"price_1NXaC2E9slNBw1m7YOJ4p8bM",
        name:"Pink Fleece Sweatpants",
        quautity:1,
    },
]
//@ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req:NextRequest){
    let cartItemsArray:any = req.json();
  let line_item =  originalData.filter((item:typeOfData)=>{
        for (let index = 0; index < cartItemsArray.length; index++) {
            const element : oneProductType = cartItemsArray[index];
            if(element.productName === item.name){
                return true
            }
            
        }
    })

   let line_itemToSend = line_item.map((item:typeOfData)=>{
   return {
    price:item.price,
  quautity: item.quautity
    }})
try {
let session =await stripe.checkout.sessions.create({
    line_items :line_itemToSend,
    mode:"payment",
    success_url:`${req.nextUrl.origin}/?success=true`,
    cancel_url:`${req.nextUrl.origin}/?success=false`
})

return NextResponse.json({link : session.url})
} catch (error) {
    console.log((error as {message:string}).message);
    return NextResponse.json({ error })}
}