"use client";
import Image from "next/image";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Pricing from "./Components/Pricing";
import Faq from "./Components/Faq";
import Link from "next/link";
import Urlform from "./Components/Urlform";
import icon from "../public/icons/logo.svg";
import line from "../public/icons/line.svg";
import { useState, useContext } from "react";
import { Appcontext } from "./context/Context";
import Urlmodal from "./feed/Urlmodal";
import Network from "./network/Network";

export default function Home() {
  const appcontext = useContext(Appcontext);
  const { currentUser } = appcontext;
  // URL STATE
  const [shortUrl, setShortUrl] = useState("");
  const [alias, setAlias] = useState("");
  // MODAL STATE
  const [modal, setModal] = useState(false);

  return (
    <Network>
      <div className="">
        <section className="my-5">
          <div className="margin-main">
            <Hero />
          </div>
          {currentUser ? (
            <div></div>
          ) : (
            <>
              <div className="margin-main">
                <About />
              </div>
              <div>
                <Pricing />
              </div>
              <div className="flex justify-center background mt-6 relative">
                <Urlform
                  SetResult={setShortUrl}
                  SetName={setAlias}
                  SetShowmodal={setModal}
                  show={true}
                ></Urlform>
                {modal && (
                  <Urlmodal setModal={setModal} name={alias} url={shortUrl} />
                )}
              </div>
              <div className="margin-main">
                <Faq />
              </div>
              <div className="flex justify-center text-center background items-center mt-6  ">
                <div>
                  <h2 className={styles.fontsizeSmallheading + "text-white"}>
                    Revolutionizing Link Optimization
                  </h2>
                  <div className="flex justify-center mt-8">
                    <Link href={"/Signup"}>
                      {" "}
                      <button className="button-main bg-main-blue text-white  ">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div></div>
            </>
          )}
        </section>
      </div>
     </Network>
  );
}
// Logo component
export const Logo = ({ color }: { color: string }) => {
  const style = {
    color: color,
  };
  return (
    <Link href="/">
      <div className="logo flex">
        <Image src={icon} alt="image-icon"></Image>
        <Image className="mx-2 bg-white" src={line} alt="line"></Image>
        <h2 style={style} className=" text-xl sm:text-2xl">
          SCISSORS
        </h2>
      </div>
    </Link>
  );
};
// Typography Styles
export const styles = {
  navbarmobile: "",
  footerMobile: "",
  fontsizeBigheading:
    "sm:text-header-bg lg:leading-20 text-mid  leading-8   md:text-header-sm  ",
  fontsizeSmallheading: "sm:text-header-sm leading-11  text-mid  ",
  fontsizeBigtext: "sm:text-text-lg  leading-6 sm:w-700 text-text-text-sm    ",
  fontsizeSmallText: "text-text-sm leading-6  w-80   ",
  errorsyle: "text-start  text-base text-red-500"
};
