import React, { FC } from 'react'
import { oneProductType, responseType, slugType } from './../../../components/utils/ProductsDataArrayAndType';
import ProductDetail from '@/components/views/ProductDetail';
import ContextWrapper from '@/global/Context';
import BASE_PATH_FORAPI from '@/components/shared/BasePath';
import { Metadata } from 'next';


// MetaData Generator
export async function generateMetadata(
  { params} :{params :{slug :string}}) {
  const slug = params.slug
  const product = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-10/data/query/production?query=*[_type == "product"]`).then((res:any)=>res.json)
const titleToSet :oneProductType = product.result.find((item:oneProductType)=>item.slug.current === slug)
  return {
   title:titleToSet.productName,
   description:titleToSet.description
  }
}



// Fetch Particular Data of Product Using Slug
async function fetchPreviewData(slug :string){
  let res=await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-10/data/query/production?query=*%5B_type+%3D%3D+%22product%22+%26%26+slug.current+%3D%3D+%22${slug}%22%5D&perspective=published`)
  return res.json();
}


    

// will make static pages of every product
async function generateStaticParams(){
  let res=await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-10/data/query/production?query=*[_type == "product"]`).then((res:any)=>res.json)

  return res.result.map((item:oneProductType)=>{slug :item.slug})

}


const Catalog :FC<{params :{slug :string}}> = async({params}) => {
  // @ts-ignore
 let data :responseType = await fetchPreviewData(params.slug)
  return (
    <ContextWrapper>
      <ProductDetail item={data.result[0]}/>
      </ContextWrapper>
  )
}

export default Catalog