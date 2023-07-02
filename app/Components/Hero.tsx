"use client";
import React, { useState,useContext } from "react";
import Link from "next/link";
import { styles } from "../page";
import vector from "../../public/images/Vector 2.png"
import icon from "../../public/icons/link-2.svg"
import eclipse from "../../public/images/Ellipse 1.png"
import Image from "next/image";
import {BsArrowRight} from "react-icons/bs"
import { customAlphabet } from "nanoid";
import { db } from "../libs/firebaseConfig";
import { Appcontext } from "../context/Context";
// import { collection,getDocs,setDoc,doc } from "firebase/firestore";



const Hero = () => {
  // MOBILE STATE
  // const [isMobile, setisMobile] = useState(window.innerWidth <= 450);
  const appcontext=useContext(Appcontext)
  const {currentUser}=appcontext
  
  return (
    <div className="flex justify-center text-center mt-10">
      <div className="">
        <h2 className={styles.fontsizeBigheading}>
          Optimize Your Online Experience with Our
        </h2>
        <h2 className={styles.fontsizeBigheading + "md:my-xxl my-4  "}>
          Advanced <span>URL Shortening</span> Solution
        </h2>
        <p className={styles.fontsizeBigtext + "sm:ml-7rem"}>
            Customize URLs to strengthen your brand and engage users. Utilize branded links, custom slugs, and domain customization options for a personalized touch
        </p>

        <div className="flex sm:justify-center sm:mt-xxl my-11">
          <Link href={currentUser?"/generate":"/Signup"}>
            {" "}
            <button className="button-main bg-main-blue text-white hover:opacity-30 transition ease-in-out delay-150  ">
              {currentUser?"CreateNew":"Signup"}
            </button>
          </Link>
          <Link href="/Contact">
            {" "}
            <button className="button-main text-main-blue font-bold   ">
              {currentUser?"Send us a message":"Contact us"}
            </button>
          </Link>
        </div>

        <div className="hero">
          <div className='sm:flex hidden relative ml-6'>
            <Image className="cone" src={vector} alt="vector image"></Image>
            <div className="box">
              <div className="icons flex">
                <Image src={icon} alt="icon"></Image>
                <Image src={icon} alt="icon"></Image>
                <Image src={icon} alt="icon"></Image>
                <i className="text-main-blue mt-8 mx-5 text-lg w-14"><BsArrowRight/></i>
                <Image src={icon} alt="icon"></Image>

              </div>
              <p>Seamlessly transform your long URLs into concise and shareable links with just few clicks.</p>

            </div>
          </div>
          <div className="my-7">
            <Image src={eclipse} alt="eclipse"></Image>
          </div>

        </div>
       
      </div>
    </div>
  );
};

export default Hero;
