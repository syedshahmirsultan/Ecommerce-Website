import { responseType } from "@/components/utils/ProductsDataArrayAndType";
import Hero from "@/components/views/Hero";
import Jewellery from "@/components/views/Jewellery";
import Newsletter from "@/components/views/NewsLetter";
import ProductCarousel from "@/components/views/ProductCarousel";
import ProductsType from "@/components/views/ProductType";


async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "Products"]`, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json();
}

  async function Home() {
    let { result }: responseType = await fetchAllProductsData();
  return (
    <div className="overflow-hidden">
      <Hero />
      <ProductsType />
     <ProductCarousel ProductData={result} />
      <Jewellery />
      <Newsletter />
    </div>
  )
}

export default Home ;