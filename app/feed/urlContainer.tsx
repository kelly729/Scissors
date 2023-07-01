"use client"
import React from 'react'
import { useState } from 'react';
import {AiFillCopy} from "react-icons/ai"
import {QRCodeCanvas} from 'qrcode.react';
import { setDoc ,doc,getDoc,getDocs,updateDoc,increment ,where, query, collection, limit } from 'firebase/firestore'
import { db } from '../libs/firebaseConfig';

type UrlProps={
    name:string,
    originalurl:string,
    shorturl:string,
    createdat:string
    clicks:any
    }

    type objectType={
      id:any
    }
    
const UrlContainer = ({name,originalurl,shorturl,createdat,clicks}:UrlProps) => {
  const [copied,setCopied]=useState(false)
  const handleCopy=()=>{
    navigator.clipboard.writeText(shorturl)
    setCopied(!copied)
  }
  
  return (
    <div className='flex justify-center sm:flex sm:justify-normal  mx-auto'>
       <div className='w-90 sm:w-700  px-4 py-4 h-auto shadow'>
        <div className='sm:flex sm:justify-between justify-center'>
            <p>{name}</p>
           <div>
           <p className='w-80 break-words'>{originalurl}</p>
           </div>

            <div className='flex max-h-9 mx-7 my-3 sm:mx-0 '>
                <div className='short'>
                  <a  href={shorturl}>{shorturl}</a>
                </div>
                <button onClick={handleCopy} className=' relative copy'>{copied?"!copied":"copy"}</button>
            </div>
        </div>
        <div className='mx-16 sm:mx-0'>
          <QRCodeCanvas value={shorturl} />
        </div>
        <div>
          {clicks}
        </div>
       </div>
    </div>
  )
}

export default UrlContainer
