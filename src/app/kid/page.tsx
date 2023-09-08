import { oneProductType, responseType } from "@/components/utils/ProductsDataArrayAndType";
import CardAll from "@/components/views/CardAll";

async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-05-26/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%20%26%26%20productTypes%5B0%5D%3D%3D%20%22Kid%22%5D`, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json();
}


// const Kid = async ({ params }: { params: { ftype: string } }) => {
//   let res: responseType = await fetchAllProductsData();
//   return (
//     <div
//       className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4"
//     >
//       {res.result.map((items: oneProductType, index: number) => (
//         <CardAll key={index} singleProductData={items} />
//       ))}
//     </div>
//   )
// }

// export default Kid


const Kid = async ({ params }: { params: { ftype: string } }) => {
  try {
    let res: responseType = await fetchAllProductsData();
    
    if (!res || !res.result) {
      throw new Error("No data found");
    }

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4">
        {res.result.map((items: oneProductType, index: number) => (
          <CardAll key={index} singleProductData={items} />
        ))}
      </div>
    );
  } catch (error) {
    // Handle the error here, e.g., display an error message or log it.
    console.error("Error fetching data:", error);
    return <div>Error fetching data. Please try again later.</div>;
  }
};
