import React, { FC } from 'react'

async function fetchPreviewData(){
  let res=await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "product"]`)
  

}


const Catalog :FC<{params :{slug :string}}> = ({params}) => {
  return (
    <div>{params.slug}</div>
  )
}

export default Catalog