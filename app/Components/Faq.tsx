"use client"
// import { access } from 'fs'
import { styles } from '../page'

import React, { useState } from 'react'
type current={
  cur:number
}
const Faq = () => {
  const [expandedIitemId,setExpandedIitemId]=useState<number| null>(null)
  const detailes=[
    {
      id:1,
      question:"How does URL shortening work?",
      answer:"URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination",
    },
    {
      id:2,
      question:"Is it necessary to create an account to use the URL shortening service?",
      answer:"",
    },
    {
      id:3,
      question:"Are the shortened links permanent? Will they expire?",
      answer:"",
    },
    {
      id:4,
      question:"Are there any limitations on the number of URLs I can shorten?",
      answer:"",
    },
    {
      id:5,
      question:"Can I customize the shortened URLs to reflect my brand or content?",
      answer:"",
    },
    {
      id:6,
      question:"Can I track the performance of my shortened URLs?",
      answer:"",
    },
    {
      id:7,
      question:"How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
      answer:"",
    },
    {
      id:8,
      question:"What is a QR code and what can it do?",
      answer:"",
    },
    {
      id:9,
      question:"Is there an API available for integrating the URL shortening service into my own applications or websites?",
      answer:"",
    },
  ]
  const ToggleAnswer=(itemid:number)=>{
   setExpandedIitemId(expandedIitemId===itemid?null:itemid)


  }
  return(
    <div className='flex flex-col justify-center items-center mt-9 sm:mb-xxl mb-9'>
      <h2 className={styles.fontsizeSmallheading}>FAQs</h2>
      <div className=''>
        {detailes.map((i)=>{
          return <div key={i.id}>
            <h3 className='sm:text-xl sm:w-700 ' >{i.question}</h3>
            {expandedIitemId===i.id&&<p className='sm:text-text-sm  sm:w-700 text-xx-sm'>{i.answer}</p>}
            <button onClick={()=>ToggleAnswer(i.id)}>{expandedIitemId==i.id?"-":"+"}</button>
          </div>
        })}
      </div>
    </div>
  )

}

export default Faq
