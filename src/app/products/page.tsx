// import BASE_PATH_FORAPI from "@/components/shared/BasePath"
// import AllProductsCompo from "@/components/views/AllProducts";

// async function fetchAllProductsData() {
// let res =await fetch(`${BASE_PATH_FORAPI}/api/product?start=0&end=10`);
// if(!res.ok){
// throw new Error("Failed To Fetch")
// }
// return res.json()
// }
// const Product = async() => {
//   const productData = await fetchAllProductsData();
//   return (
//     <div>
//       <AllProductsCompo productData={productData}/>
//     </div>
//   )
// }

// export default Product

import BASE_PATH_FORAPI from "@/components/shared/BasePath"
import AllProductsCompo from "@/components/views/AllProducts";

async function fetchAllProductData() {
    let res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=0&end=10`, {
        next: {
            revalidate: 120
        }
    })
    if (!res.ok) {
        throw new Error("Failed to fetch")
    }
    return res.json();
};


const Products = async () => {
    const ProductData = await fetchAllProductData()
    return (
        <AllProductsCompo productData={ProductData} />
    )
}

export default Products