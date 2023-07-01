import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='margin-main'>
        <div>
            <h2>Kelly</h2>
            <div>
                {/* <Image></Image> */}
                <input type="file" name='choose file' />

            </div>
           
        </div>
      
    </div>
  )
}

export default Page
