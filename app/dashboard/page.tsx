"use client";
import React from "react";
import Urlform from "../Components/Urlform";
import Link from "next/link";
import { Appcontext } from "../context/Context";
import { useState, useContext, useEffect } from "react";

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
  deleteDoc,
} from "firebase/firestore";
import { db } from "../libs/firebaseConfig";
import { auth } from "../libs/firebaseConfig";
import { toast } from "react-toastify";

// import Spinner from '../Components/Spinner';
import ListSkeleton from "../Components/skeletons/ListSkeleton";
import { useRouter } from "next/navigation";
// import { styles } from '../page'
// Urls doc type
type datatype = {
  id: string | any;
  name: string | any;
  originalurl: string | any;
  shorturl: string | any;
  clicks: number | any;
  // createdAt:string
};
const Page = () => {
  const [documents, setDocument] = useState<datatype[]>([]);
  const [isloading, setisloading] = useState(false);
  const [copied, setCopied] = useState(false);

  const appstate = useContext(Appcontext);
  const { currentUser } = appstate;
  const currentuser: any = auth.currentUser;
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/Signup");
      // Redirecting if user is not logged in
    }
  }, []);

  console.log(documents);
  // getting all user urls documents
  const getAllDocs = async () => {
    // query to find user documents
    const q = query(
      collection(db, "Urls"),
      where("user", "==", currentUser.email),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
    }
    const docs: datatype[] = [];
    querySnapshot.forEach((doc) => {
      docs.push({
        id: doc.id,
        name: doc.data().name,
        shorturl: doc.data().shortUrl,
        originalurl: doc.data().originalUrl,
        clicks: doc.data().clicks,
      });
    });
    setDocument(docs);
  };
  useEffect(() => {
    getAllDocs();
    // console.log(documents)
  }, [documents, []]);
  // deleting a document
  const Delete: React.MouseEventHandler<HTMLButtonElement> = async (
    docid: any
  ) => {
    await deleteDoc(doc(db, "Urls", docid)).catch((error) => {
      console.log("error");
    });
    toast.success("🦄Sucessfully deleted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  // copy functionality
  const handleCopy: React.MouseEventHandler<HTMLButtonElement> = (
    shorturl: any
  ) => {
    navigator.clipboard.writeText(shorturl);
    setCopied(true);
    if (copied) {
      toast.success("Copied!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="margin-main ">
      <div className="dash-body mb-5 mt-10">
        <div className="welcome flex justify-between">
          <div>
            <small>Welcome Back</small>
            <h2 className="text-2xl">
              {currentuser?.displayName} <span>{`(${documents.length})`}</span>{" "}
            </h2>
          </div>

          <Link href={"/generate"}>
            {" "}
            <button className="bg-main-blue text-white">Create new</button>
          </Link>
        </div>

        {documents.length !== 0 ? (
          <div className="field-containers ">
            {documents.map((item: any) => {
              return (
                <div key={item.id} className="sm:flex justify-between field">
                  <button
                    onClick={() => handleCopy(item.shorturl)}
                    className="bg-green-600 mb-3 sm:mb-0"
                  >
                    Copy
                  </button>
                  <div>
                    <h2>{item.shorturl}</h2>
                    <small>{item.originalurl}</small>
                  </div>
                  <div>
                    <p>{item.name}</p>
                  </div>

                  <div>
                    <p>Count: {item.clicks}</p>
                  </div>

                  <div>
                    <button
                      onClick={() => Delete(item.id)}
                      className=" bg-red-500 mt-3 sm:mt-0"
                    >
                      delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <ListSkeleton />
        )}
      </div>
    </div>
  );
};

export default Page;
