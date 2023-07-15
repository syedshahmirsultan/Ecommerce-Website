 "use client"

 import { Component, ReactNode } from "react"
 import { render } from "react-dom"
 import { oneProductType } from '@/components/utils/ProductsDataArrayAndType'
 import React, { FC } from 'react'
 import Card from '../Card'
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 import Slider from "react-slick";






// export default class ProductCarousel extends Component<{productData:Array<oneProductType>}>{
// render():ReactNode{
//   var settings = {
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1
          
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       } ] };  

//  return( 
//  <Slider {...settings}>
// {this.props.productData.map((item:oneProductType,i:number)=>(
//  <Card singleProductData={item}/>
//     ))}
//     </Slider>)
// }}





const ProductCarousel: FC<{ productData: Array<oneProductType> }> = ({ productData }) => {
    let initialX: number;
    let isDragging = false;
    let tabBox: any;

    const isBrowser = () => typeof window !== "undefined";

    if (isBrowser()) {
        tabBox = document.querySelector(".scrollGrab");
    }

    // Desktop functions
    function mouseMoves(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            tabBox.scrollLeft -= e.movementX;
        }
    };
    function mouseDown() {
        console.log("moving orignal")
        isDragging = true;
    }
    function mouseUp() {
        isDragging = false
    }

    // mobile functions
    function mouseMovesForMobile(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            var currentX = e.touches[0].clientX;
            var movementX = currentX - initialX;
            tabBox.scrollLeft -= movementX / 5;
        }
    };
    function mouseDownForMobile(e: any) {
        isDragging = true;
        initialX = e.touches[0].clientX;
    };

let dataToIterate=productData.slice(0,15)
    return (
      <div className="space-y-4">
      <div className="text-center space-y-3">
        <p className="text-blue-800 text-sm">PRODUCTS</p>
        <h3 className="text-3xl text-gray-800 font-bold">Check What We Have</h3>
      </div>
        <div
            onMouseMove={mouseMoves}
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
            className="select-none flex gap-4 overflow-x-hidden scrollGrab py-4"
            onTouchMove={mouseMovesForMobile}
            onTouchStart={mouseDownForMobile}
            onTouchEnd={mouseUp}
        >
            {dataToIterate.map((item: oneProductType, index: number) => (
                <Card key={index + 4} singleProductData={item} />
            ))}
        </div></div>
    )
}

export default ProductCarousel