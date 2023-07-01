"use client";
import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { auth, GoogleProvider, db } from "../libs/firebaseConfig";
import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";

// Context type
type ChildrenType = {
  children: React.ReactNode;
};
// Usertype
type userType = {
  uid: string | null;
  email: string | any;
  displayName?: string | null;
  photoURL?: string | null;
};

// creating context
export const Appcontext = createContext<any>(null);

const Context = ({ children }: ChildrenType) => {
  const router = useRouter();
  // context state
  const [currentUser, setCurrentUser] = useState<userType | null>(null);

  // getting the currentuser state when the page loads
  useEffect(() => {
    const getCurrentUserSignIn = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          setCurrentUser({
            uid,
            email,
            displayName,
            photoURL,
          });
        }
      });
    };
    getCurrentUserSignIn();
  }, []);
  // console.log(currentUser);

  // Log out user
  const Logout = () => {
    signOut(auth).catch((error) => console.log(error));
    setCurrentUser(null);
    router.push("/");
  };

  return (
    <Appcontext.Provider value={{ currentUser, Logout }}>
      {children}
    </Appcontext.Provider>
  );
};

export default Context;
