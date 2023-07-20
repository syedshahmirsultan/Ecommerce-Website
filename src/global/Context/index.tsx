"use client"

import {createContext, useEffect, useReducer} from 'react'
import { ReactNode, FC, useContext } from 'react';
import { cartReducer } from '../Reducer';

export const cartContext = createContext<any>(null);

const ContextWrapper :FC<{children :ReactNode}> = ({children}) => {    
    const initializerOfCart={
        cart :[]
    }
    const [state,dispatch] = useReducer(cartReducer,initializerOfCart);
    useEffect(() => {
     let cart = localStorage.getItem("cart") as string;
     if(cart === null){
localStorage.setItem("cart",state.cart)
     }else{
initializerOfCart.cart = JSON.parse(cart)
     }
    })

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(state.cart))
    },[state.cart])
    
    return (
      <cartContext.Provider value={{state,dispatch}}>
          {children}
      </cartContext.Provider>
    )
  }
  
  export const CartState = ()=>{
      const first = useContext(cartContext)
  }
  
  export default ContextWrapper





















