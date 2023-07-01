import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2>Lets get in touch</h2>
      <form action="">
           <div>
            <div className="field">
            <label htmlFor="Firstname">Firstname</label>
            <input name='Firstname'  type="text" /> 
            </div>

            <div className="field">
            <label htmlFor="Lastname">Lastname</label>
            <input name='Lastname'  type="text" /> 
            </div>
           </div>
           <div className="field">
            <label htmlFor="company"></label>
           </div>
           
      </form>
    </div>
  )
}

export default Contact
