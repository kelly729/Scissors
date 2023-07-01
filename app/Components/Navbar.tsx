"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "../page";
import { usePathname,useRouter } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { useContext } from "react";
import { Appcontext } from "../context/Context";
import { BsMenuButton } from "react-icons/bs";
import { auth } from "../libs/firebaseConfig";
import { CiUser } from "react-icons/ci";
import {
  setDoc,
  doc,
  getDoc,
  getDocs,
  where,
  query,
  orderBy,
  limit,
  collection,
} from "firebase/firestore";
import { db } from "../libs/firebaseConfig";
type userType={
  username:any
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const appcontext = useContext(Appcontext);
  const [show, setshow] = useState(false);
  const { currentUser, Logout } = appcontext;
  const currentLoginuser: any = auth.currentUser;
  const [user,setUser]=useState<userType>({
    username:""
  })
  const router=useRouter()
  // GET CURRENT USER DETAILES SAVED IN THE DATA BASE
  const GetCurrentuserDetails = async () => {
    const q = query(
      collection(db, "users"),
      where("email", "==", currentUser.email),
      orderBy("createdAt", "desc"),
      limit(1)
    );
    const QuerySnapshot = await getDocs(q);
    if (QuerySnapshot.empty) {
      return
    }
    QuerySnapshot.forEach((doc) => {
      setUser({
        username:doc.data().username
        
      });
    });
  };

  useEffect(()=>{
    GetCurrentuserDetails()

  },[currentUser])
  

  // LOG OUT USER
  const SignOut = () => {
    Logout();
    router.push("/")
    
  };
  //  TOGGLE DROPDOWN
  const toggleshow = () => {
    setshow(!show);
  };
  // TOGGLE MOBILE SLIDER
  const ToggleNav = () => {
    setIsOpen(!isOpen);
  };
  const detailes = [
    {
      id: 1,
      title: "MyUrls",
      path: "/",
    },
    {
      id: 2,
      title: currentUser ? "Dashboard" : "Features",
      path: currentUser ? "/dashboard" : "*",
    },
    {
      id: 3,
      title: "Pricing",
      path: "*",
    },
    {
      id: 4,
      title: currentUser ? "" : "Analytics",
      path: "dashboard",
    },
    {
      id: 5,
      title: "FAQ",
      path: "*",
    },
  ];

  const currentRoute = usePathname();
  return (
    <div className=" flex justify-between   mt-5">
      <Logo color="#005AE2" />

      <nav className={isOpen ? "open" : "nav-bar"}>
        <div className="sm:hidden">
          {currentUser ? (
            <p className=" ml-4 text-base text-white">
              {currentLoginuser?.displayName==null?user.username:currentLoginuser?.displayName}
            </p>
          ) : (
            <Logo color="white" />
          )}

          <hr />
        </div>
        {detailes.map((i) => {
          return (
            <Link
              className={currentRoute == i.path ? "active" : ""}
              href={i.path}
              key={i.id}
            >
              {i.title}
            </Link>
          );
        })}
        {currentUser ? (
          <button onClick={SignOut} className={"sm:hidden mobile-login"}>
            {"Logout"}
          </button>
        ) : (
          <Link className={"sm:hidden mobile-login"} href={"/Login"}>
            {"LogIn"}
          </Link>
        )}
      </nav>
      {currentUser ? (
        <p className=" ml-4 text-base text-main-blue">
          {currentLoginuser?.displayName==null?user.username:currentLoginuser?.displayName}
        </p>
      ) : (
        ""
      )}
      {currentUser ? (
        <div className="hidden sm:flex">
          <div>
            <div onClick={toggleshow} className="userImg">
              {" "}
              <CiUser className="text-xl"></CiUser>
            </div>
            {show ? (
              <div className=" bg-indigo-50 px-7 flex flex-col">
                <button
                  onClick={SignOut}
                  className="text-main-blue text-base hover:opacity-30 transition ease-in-out delay-150"
                >
                  Logout
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <nav className="hidden sm:flex sm:justify-between ">
          <Link
            className={
              currentRoute == "/Login" ? "active" : "" + "ml-8 text-lg"
            }
            href="/Login"
          >
            Login
          </Link>
          <Link href={"/Signup"}>
            <button className=" hover:opacity-30 transition ease-in-out delay-150 block button-main text-white ml-4 bg-main-blue">
              Try for free
            </button>
          </Link>
        </nav>
      )}

      <div onClick={() => ToggleNav()} className="menu sm:hidden">
        {isOpen ? <GrFormClose /> : <HiMenu />}
      </div>
    </div>
  );
};

export default Navbar;
