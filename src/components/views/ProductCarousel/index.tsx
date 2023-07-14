"use client"

import { Component, ReactNode } from "react"
import { render } from "react-dom"
import { oneProductType } from '@/components/utils/ProductsDataArrayAndType'
import React, { FC } from 'react'
import Card from '../Card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



//const ProductCarousel:FC<{productData :Array<oneProductType>}> = ({productData}) => {
// //   return (
// //     <div className="flex">
// //       {productData.map((item:oneProductType,i:number)=>(
// // <Card singleProductData={item}/>
// //     ))}</div>
// //   )
// // }

// export default function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

// }

// export default ProductCarousel



export default class ProductCarousel extends Component<{productData:Array<oneProductType>}>{
render():ReactNode{
  var settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } ] };  

 return( 
 <Slider {...settings}>
{this.props.productData.map((item:oneProductType,i:number)=>(
 <Card singleProductData={item}/>
    ))}
    </Slider>)
}}
