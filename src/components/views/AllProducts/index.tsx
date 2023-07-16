"use client"
import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
import { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../Card";

interface propsType{
    productArray: Array<oneProductType>
}

export default class AllProductsCompo extends Component <{productData :propsType}>{
    start :number=0;
    end:number=10;
    state :{items: Array<oneProductType>, hasMore:boolean  } = {
        items:[...this.props.productData.productArray],
        hasMore:true,

    }
    fetchDataFromApiGradually = async(start:number,end:number)=>{
        const res = await fetch(`${BASE_PATH_FORAPI}/api/product?start=${start}&end=${end}`);
        const datToCheckAndSend = await res.json()
        if(datToCheckAndSend.productArray === "Not Found"){
            this.setState({ hasMore : false })
        }  
        return datToCheckAndSend;
         }

   getData = async() => {
    let allTogether = await this.fetchDataFromApiGradually(this.start,this.end);
    if (allTogether.productArray !== "Not Found"){
        this.setState({
            items: this.state.items.concat(allTogether.productArray)
    })
    }
    else{
        this.setState({ hasMore : false })
        
    }
    this.start ==this.start + 10;
    this.end == this.end + 10;
    // console.log(this.props.productData.productArray[0].price)
   }
   
    render(){
        return(
                <InfiniteScroll
  dataLength={this.state.items.length} 
  next={this.getData}
  hasMore={this.state.hasMore}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
}
className="grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-3 gap-4">

{this.state.items.map((item:oneProductType,i:number)=>(
<Card key={i} singleProductData={item}/>
)

)}
</InfiniteScroll>
        )
    }
}