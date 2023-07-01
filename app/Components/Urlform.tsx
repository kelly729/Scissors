"use client";
import React from "react";
import { useState, useContext, useEffect } from "react";
import {
  setDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../libs/firebaseConfig";
import { Appcontext } from "../context/Context";
import { Shortid } from "../libs/generateShortLink";
import { getAnalytics, logEvent } from "firebase/analytics";
import { toast } from "react-toastify";
import { IoIosColorWand } from "react-icons/io";

// URL FORM TYPES
type UrlProps = {
  show: boolean;
  SetResult: Function;
  SetShowmodal: Function;
  SetName: Function;
};

const Urlform = ({ SetName, SetResult, show, SetShowmodal }: UrlProps) => {
  const appcontext = useContext(Appcontext);
  // CURRENT USER
  const { currentUser } = appcontext;

  // FORM STATES
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [alias, setAlias] = useState("");
  const customid = Shortid();

  // FUNCTION TO CREATE A NEW URL DOC IN DATABASE
  const CreatnewUrl = async (shorturl: any) => {
    if (currentUser) {
      // creating new doc in Urls collection
      await setDoc(doc(db, "Urls", customid), {
        name: alias,
        originalUrl: originalUrl,
        shortUrl: shorturl,
        createdAt: Date(),
        user: currentUser.email,
        clicks: 0,
      });
      toast.success(" Sucessfully created!", {
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

  const handle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // shortening url
    const res = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${originalUrl}`
    );
    const data = await res.json();
    const short = data.result.short_link;
    //  setting the new shortend url
    setShortUrl(short);
    console.log("short url is ", short);

    setOriginalUrl("");
    setAlias("");
    if (res.ok) {
      // setting result modal if there is'nt any logged in user
      if (!currentUser) {
        SetName(alias);
        SetResult(short);
        SetShowmodal(true);
      }
      // storing in data base
      CreatnewUrl(short);
    }
  };

  return (
    <div>
      <form onSubmit={handle} className="form-url" action="">
        <div>
          <input
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="Paste URL here..."
            className="url-input-form"
            type="text"
          />
          <div className="sm:flex justify-between select-div my-4">
            <select name="" id=""></select>
            <input
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              placeholder="Type Alias here"
              type="text"
            />
          </div>
          <button type="submit" className="form-button mb-4">
            Trim Url
            <IoIosColorWand />
          </button>
          {show ? (
            <p className="text-center sm:text-start text-main-blue">
              By clicking TrimURL, I agree to the Terms of Service, Privacy
              Policy and Use of Cookies.
            </p>
          ) : (
            ""
          )}
        </div>
        {/* <h2>{shortUrl}</h2> */}
      </form>
    </div>
  );
};

export default Urlform;
