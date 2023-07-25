import { cartTableDrizzle, db } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";



export async function GET(){
    try {
        let allCartData = await db.select().from(cartTableDrizzle)
        return NextResponse.json({allCartData})
    } catch (error :any) {
        return NextResponse.json({error})
    }
}

let dataToInsert ={
    product_id :"shahmirpro",
    quantity :10,
    user_id:"shahmiruser_id"
}

export async function POST(req:NextRequest) {
    let request :any =req.json();
    try {
        
        if(request.product_id && request.user_id && request.quantity && request.price){
            //@ts-ignore
       let response = await db.insert(cartTableDrizzle).values(request).returning();
       return NextResponse.json({response})
        } else{
            throw new Error("Please put product_id user_id quantity")
        }
    } catch (error) {
        return NextResponse.json({error})
    }
}


export async function PUT(req:NextRequest){
    let request :any =req.json();
    try {
        let response =  await db.update(cartTableDrizzle).set(request).where(
            and(eq(cartTableDrizzle.product_id,request.product_id),eq(cartTableDrizzle.user_id,request.user_id)))
        return NextResponse.json({response})
    } catch (error) {
        return NextResponse.json({error})
    }
}

export async function DELETE(req:NextRequest){
    let url = req.nextUrl.searchParams;
    try {
        if(url.has("product_id")  && url.has("user_id")){
        let response = await db.delete(cartTableDrizzle).
        where(
        and(eq(cartTableDrizzle.product_id,(url.get("product_id")as string)),eq(cartTableDrizzle.user_id,(url.get("user_id") as string)))).returning()}
    } catch (error) {
        return NextResponse.json({error})
    }
}