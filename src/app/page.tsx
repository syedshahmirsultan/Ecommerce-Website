import BASE_PATH_FORAPI from '@/components/shared/BasePath';
import Hero from '@/components/views/Hero'
import ProductCarousel from '@/components/views/ProductCarousel';
import ProductType from '@/components/views/ProductType'

async function fetchAllProductsData(){
//   const res=await fetch(`${BASE_PATH_FORAPI}/api/products`);
// if (!res.ok){
//   throw new Error("Fetch failed")
// }
// return res.json();
return {response:"HI"}
}

 async function Home() {
  let {response} =await fetchAllProductsData();
  console.log("response :",response)
  return (
    <div>
    {/*<Hero/>
    <ProductType/>*/}
    <ProductCarousel productData={response}/>
    </div>
    
  )
}

export default Home