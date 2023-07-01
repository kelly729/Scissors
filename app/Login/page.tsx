"use client"
import React from 'react'
import Link from 'next/link'
import {FcGoogle} from "react-icons/fc"
import { AppContext } from 'next/app'
import { useContext,useState,useEffect } from "react"
import { Appcontext } from '../context/Context'
import {auth,GoogleProvider} from "../libs/firebaseConfig"
import { signInWithPopup } from 'firebase/auth'
import { style } from '../Signup/page'
import { signInwithGoogle,LoginwithEmail } from '../Auth/Auth'
import { useRouter } from 'next/navigation'
import {  toast } from 'react-toastify';
import {AiFillEye} from "react-icons/ai"
import {BiSolidHide} from "react-icons/bi"

const Login = () => {
  const router=useRouter()
  const appcontext=useContext(Appcontext)
  const [ishidden,setHidden]=useState(true)
  const {currentUser}=appcontext
  useEffect(()=>{
    if(currentUser){
      router.push("/")
      
    }
  })
  // const {signInwithGoogle,errormsg,LoginwithEmail}=appcontext
  const [form,setForm]=useState({
    email:"",
    password:""
  })
  const [formerror,setFormerror]=useState({
    email:"",
    password:""
  })
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const{name,value}=e.target
    console.log(e.target.value)
  setForm( ({ ...form, [name]: value })); 
  }

  const validate=()=>{
    const errors={
      email:"",
      password:""
    }
    if(!form.email){
      errors.email="enter email"
    }
    else if (!form.password){
      errors.password="enter password"
    }

    setFormerror(errors)

    return Object.values(errors).every(error => error === '')


  }
  const GoogleSignin=(e:any)=>{
    signInwithGoogle()
    router.push("/generate")
    toast.info(`Welcome back ${currentUser.displayName}` , {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
   
    
  }

  const SignIn=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const isvalid=validate()
  if(isvalid){
   LoginwithEmail(form.email,form.password)
   router.push("/generate")

   toast.info(`Welcome back ${currentUser.displayName}` , {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  }

  }

  return (
    <div className='flex justify-center items-center text-center margin-main'>
     <div>  
      <div className="header flex justify-center ">
        <div>
        <h2 className='my-4 text-xs text-neutral'>Log in in with</h2>
        <button onClick={GoogleSignin} className='google-btn' ><FcGoogle/>Google</button>
    
        </div>
          
      </div>
      <div className='flex justify-center  '>
        <hr />
        <p className='mx-5 my-5 text-sm text-neutral'>or</p>
        <hr />
      </div>
      <div className='mb-5'>
        <form className='form-main' onSubmit={SignIn} action="">
          <div>
          <input name='email' value={form.email} onChange={handleChange} placeholder='Email adress ' type="text" />
            </div>
            <div className='w-80 sm:w-450px'>
            {formerror.email && <small className={style.error}>{formerror.email}</small> }
            </div>
          <div className='relative'>
          
          <input name='password' value={form.password} onChange={handleChange} placeholder='Password ' type={ishidden?"password":"text"}/>
          <i onClick={()=>setHidden(!ishidden)} className="eye">{ishidden?<BiSolidHide/>:<AiFillEye/>}</i>
          </div>
          <div className='w-80 sm:w-450px'>
          {formerror.password && <small className={style.error} >{formerror.password}</small> }
         
          </div>

          <div>
          <small className='text-sm text-neutral sm:text-end text-center'>Forgot your password?</small>
          </div>
          
          <button className='form-button mt-7 hover:opacity-30 transition ease-in-out delay-150hover:opacity-30 ' type='submit'>Sign in with email</button>
        
          
        
             </form>
      </div>
      <div>
        <p  className='text-sm text-neutral mb-5'> Don’t have an account?  <Link className='text-main-blue' href="/Signup">Signup</Link> </p>
        <p className='text-xs text-neutral' >By signing up, you agree to </p>
        <p className='text-xs text-neutral'>Scissors Terms of Service, Privacy Policy and Acceptable Use Policy.</p>
      </div>
      </div> 
    </div>
   
  )
}

export default Login
