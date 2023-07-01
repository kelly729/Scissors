// import React, { useState } from 'reac
import {GrFormClose} from "react-icons/gr"
type Urlmodaltype={
  name:string,
  url:string,
  setModal:Function
}
const Urlmodal = ({name,url,setModal}:Urlmodaltype) => {
    
  return (
    <div className='url-modal bg-indigo-50'>
      <div>
        <p onClick={()=>setModal(false)} className="text-center text-base"><GrFormClose/></p>
      <p className="text-main-blue mt-4" >{name}:  <span className="ml-4"><a className="text-green" href="url">{url}</a></span></p>
      </div>
      <div>
        <button className=" bg-main-blue text-white mt-4">Copy</button>
      </div>
     </div>
  )
}

export default Urlmodal
