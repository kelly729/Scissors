import React from 'react'
import { styles } from '../page'
import { text } from 'stream/consumers'
import {AiFillCheckCircle} from "react-icons/ai"

const Pricing = () => {
  const detailes=[
    {
      id:1,
      plan:"Basic",
      amount:"Free",
      desp:"Free plan for all users",
      access:[
        {
          id:1,
          name:"Unlimited URL Shortening"
        },
        {
          id:2,
          name:"Basic Link Analytics"
        },
        {
          id:3,
          name:"Customizable Short Links"
        },
        {
          id:4,
          name:"Standard Support"
        },
        {
          id:5,
          name:"Ad-supported"
        },
      ]

    },
    {
      id:2,
      plan:"Professional",
      amount:"$15/month",
      desp:"Ideal for business creators",
      access:[
        {
          id:1,
          name:"Enhanced Link Analytics"
        },
        {
          id:2,
          name:"Custom Branded Domains"
        },
        {
          id:3,
          name:"Advanced Link Customization"
        },
        {
          id:4,
          name:"Priority Support"
        },
        {
          id:5,
          name:"Ad-free Experience"
        },
      ]

    },
    {
      id:2,
      plan:"Teams",
      amount:"$25/month",
      desp:"Share with up to 10 users",
      access:[
        {
          id:1,
          name:"Team Collaboration"
        },
       {
        id:2,
        name:"User Roles and Permissions"
       },
        {
          id:3,
          name:"Enhanced Security"
        },
        {
          id:4,
          name:"API Access"
        },
        {
          id:5,
          name:"Dedicated Account Manager"
        },
      ]

    },
  ]
  return (
    <div className='hidden sm:mt-xxl mt-9 margin sm:block '>
      <div className='text-center sm:mb-xxl mb-9'>
        <h2 className={styles.fontsizeSmallheading}>A <span>price perfect</span> or your needs.</h2>
        <p className= "text-text-sm  text-center mt-4" >From catering for your personal, business, event, socials needs, you can be rest assured we have you in mind in our pricing.</p>
      </div>
      <div className='flex sm:mx-10 '>
        {detailes.map((i)=>{
          return <div className='price'  key={i.id}>
            <p className='mb-7'>{i.plan}</p>
            <h2 className={styles.fontsizeSmallheading + "mb-3"}>{i.amount}</h2>
            <p>{i.desp}</p>
            {i.access.map((i)=>{
              return <ul className='mt-5' key={i.id}><li className='mt-5 text-sm'>{i.name}</li></ul>
            })}

          </div>
        })}
\                                                                                                                                 
      </div>
      <div className="buttons flex justify-center mt-9">
        <button className='button-main text-main-blue border ml-5 hover:bg-main-blue hover:text-white border-main-blue transition ease-in-out delay-150 '>Get Custom Pricing</button>
        <button className="button-main  bg-main-blue text-white ml-7 hover:opacity-30 transition ease-in-out delay-150 ">Select Pricing</button>

      </div>
    </div>
  )
}

export default Pricing
