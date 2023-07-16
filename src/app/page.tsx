import BASE_PATH_FORAPI from '@/components/shared/BasePath';
import Hero from '@/components/views/Hero'
import ProductCarousel from '@/components/views/ProductCarousel';
import ProductType from '@/components/views/ProductType'
import { responseType } from '@/components/utils/ProductsDataArrayAndType';
import Jewellery from '@/components/views/Jewellery';
import Female from './female/[ftype]/page';

async function fetchAllProductsData(){
  let res=await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "product"]`,{
    next :{
      revalidate : 60
    }
  });

  if (!res.ok){
  throw new Error("Fetch failed")
}
return res.json();

}

 async function Home() {
  let {result} :responseType=await fetchAllProductsData();
  return (
    <div>
    <Hero/>
    <ProductType/>
    <ProductCarousel productData={result}/>
    <Jewellery/>
    </div>
    
  )
}

export default Home;