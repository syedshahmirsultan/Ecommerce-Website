import React, { FC } from 'react'
import Image from 'next/image'

const LoadingComp :FC <{size:string}> = ({size}) => {
  return (
    <div className={`${size}`}>
    <Image src="/images/Preloader.gif" alt="Pre loader"/>

    </div>
  )
}

export default LoadingComp