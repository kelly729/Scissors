"use client";
import React, { useState, useContext,useEffect } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { error } from "console";
import { BiGridSmall } from "react-icons/bi";
import { Appcontext } from "../context/Context";
import { signInwithGoogle } from "../Auth/Auth";
import { signUpwithEmail } from "../Auth/Auth";
import { useRouter } from "next/navigation";
import {  toast } from 'react-toastify';
import {AiFillEye} from "react-icons/ai"
import {BiSolidHide} from "react-icons/bi"
export const style = {
  error: "  text-start  text-base text-red-500",
};
const SignUp = () => {
const router=useRouter()
  const appcontext = useContext(Appcontext);
  const{currentUser}=appcontext
  const [ishidden,setHidden]=useState(true)
  

  useEffect(()=>{
    if(currentUser){
      router.push("/")
      
    }
  })

  // users form data
  const [formData, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  // Error state 
  const [formError, setFormError] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  // google sign in
  const GoogleSignin = (e: any) => {
    signInwithGoogle();
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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormdata({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const usernameRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*()\-=_+{}\[\]:;"'<>,./?])(?=.*[a-zA-Z]).{9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const errors = {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    };
    if (!formData.username) {
      errors.username = "enter username";
    }
    //  if(!usernameRegex.test(formData.username)){
    //   errors.username="username must contain a string,number and a special character"
    //  }
    if (!formData.email) {
      errors.email = "enter email";
    }
    if (!emailRegex.test(formData.email)) {
      errors.email = "enter a valid email";
    }
    if (!formData.password) {
      errors.password = "enter password";
    }
    if (!passwordRegex.test(formData.password)) {
      errors.password =
        "password must be 6 characters or more one number,one uppercase and one lowercase ";
    } else if (formData.cpassword !== formData.password) {
      errors.cpassword = "password does not match";
    }

    setFormError(errors);

    return Object.values(errors).every((error) => error === "");
  };

  const handle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
// checking if form is valid
    const isvalid = validateForm();
    if (isvalid) {
      signUpwithEmail(formData.username, formData.email, formData.password);
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
  };
  return (
    <div className="flex justify-center items-center text-center margin-main mb-10">
      <div>
        <div className="header flex justify-center ">
          <div>
            <h2 className="my-4 text-xs text-neutral">Sign up with</h2>
            <button onClick={GoogleSignin} className="google-btn">
              <FcGoogle />
              Google
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center text-center">
          <hr />
          <p className="mx-5 my-5 text-sm text-neutral">or</p>
          <hr />
        </div>
        <div className="mb-5">
          <form className="form-main" onSubmit={handle} action="">
            <div>
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                type="text"
              />
            </div>
            <div className=" w-80 sm:w-450px ">
              {formError.username && (
                <p className={style.error}>{formError.username}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="w-80 sm:w-450px">
              {formError.email && (
                <p className={style.error}>{formError.email}</p>
              )}
            </div>

            <div className="relative">
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type={ishidden?"password":"text"}
                placeholder="Password"
              />
              <i onClick={()=>setHidden(!ishidden)} className="eye">{ishidden?<BiSolidHide/>:<AiFillEye/>}</i>
            </div>
            <div className="w-80 sm:w-450px">
              {formError.password && (
                <p className={style.error}>{formError.password}</p>
              )}
            </div>

            <div>
              <input
                name="cpassword"
                value={formData.cpassword}
                onChange={handleChange}
                placeholder="Retype Password"
                type={ishidden?"password":"text"}
              />
            </div>

            <div className="w-80 sm:w-450px">
              {formError.cpassword && (
              <p className={style.error}>{formError.cpassword}</p>
              )}
            </div>

            <div className="">
              <small className="text-sm text-neutral sm:text-start text-center">
                6 or more characters, one number, one uppercase & one lower
                case.
              </small>
            </div>

            <button className="form-button mt-7 hover:opacity-30 transition ease-in-out delay-150" type="submit">
              Sign up with email
            </button>
          </form>
        </div>
        <div>
          <p className="text-sm text-neutral mb-5">
            Already have an account?{" "}
            <Link className="text-main-blue" href="/Login">
              Login
            </Link>{" "}
          </p>
          <p className="text-xs text-neutral">By signing up, you agree to </p>
          <p className="text-xs text-neutral">
            Scissors Terms of Service, Privacy Policy and Acceptable Use Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
