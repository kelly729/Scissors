"use client";
import React from "react";
import Urlform from "../Components/Urlform";
import { useState, useContext, useEffect } from "react";
import UrlContainer from "../feed/urlContainer";
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
import { Appcontext } from "../context/Context";
import { styles } from "../page";
import ListSkeleton from "../Components/skeletons/ListSkeleton";
import { useRouter } from "next/navigation";

type datatype = {
  name: string;
  originalurl: string;
  shorturl: string;
  clicks: Number;
  // createdAt:string
};

const Page = () => {
  const appstate = useContext(Appcontext);
  const router = useRouter();
  const { currentUser } = appstate;
  useEffect(() => {
    if (!currentUser) {
      router.push("/Signup");
    }
  }, []);
  const [data, setData] = useState<datatype>({
    name: "",
    originalurl: "",
    shorturl: "",
    clicks: 0,
  });

  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  // getting the lastest doc in the urls collection
  const GetCurrentUrlDoc = async () => {
    const q = query(
      collection(db, "Urls"),
      where("user", "==", currentUser.email),
      orderBy("createdAt", "desc"),
      limit(1)
    );
    const QuerySnapshot = await getDocs(q);
    if (QuerySnapshot.empty) {
      setIsEmpty(true);
    }
    QuerySnapshot.forEach((doc) => {
      setData({
        name: doc.data().name,
        originalurl: doc.data().originalUrl,
        shorturl: doc.data().shortUrl,
        clicks: doc.data().clicks,
      });
    });
  };
  useEffect(() => {
    GetCurrentUrlDoc();
  }, [data, []]);

  return (
    <div className="flex justify-center text-center">
      <div>
        <h2 className={styles.fontsizeBigheading + "my-5"}>Shorten Your Url</h2>
        <div className="sm:mx-40">
          <Urlform
            show={false}
            SetResult={() => {}}
            SetName={() => {}}
            SetShowmodal={() => {}}
          />
        </div>
        <h2 className={styles.fontsizeSmallheading}>
          {currentUser && isEmpty === false
            ? "Last Field"
            : "Create a New Url Field"}
        </h2>
        {currentUser && isEmpty === false ? (
          <UrlContainer
            createdat=""
            shorturl={data.shorturl}
            originalurl={data.originalurl}
            name={data.name}
            clicks={data.clicks}
          />
        ) : (
          <ListSkeleton />
        )}
      </div>
    </div>
  );
};

export default Page;
