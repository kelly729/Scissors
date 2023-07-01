"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import img from "../../public/images/5356680.jpg"
import Image from 'next/image'

type networkType={
    children:React.ReactNode

}

const Network = ({children}:networkType) => {
const [isOnline,setIsOnline]=useState<any>(true)
useEffect(()=>{
    setIsOnline(navigator.onLine)
})

window.addEventListener("online",()=>{
    setIsOnline(true)
})
window.addEventListener("offline",()=>{
    setIsOnline(false)
})
if(isOnline){
    return(
        <div>
            {children}
        </div>
    )
}
else{
    return(
        <div className='text-center flex justify-center'>
            <div>
            <h2>Disconnected</h2>
            <Image width={400} src={img} alt='No internet connection' ></Image>

            </div>
        </div>
    )
}
  
}

export default Network
