import React from "react";
import { styles } from "../page";
import url from "../../public/icons/link-2 (1).svg"
import analyticsvg from "../../public/icons/Vector (4).png"
import gridsvg from "../../public/icons/grid.svg"
import editsvg from "../../public/icons/edit.svg"
import Image from "next/image";
const About = () => {
  const detailes = [
    {
      id: 1,
      text: "Active users",
      number: "1M",
      heading:"URL Shortening",
      icon:url,
      desp:"Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects."
    },
    {
      id: 2,
      text: "Links & QR codes created",
      number: "60M",
      heading:"Custom URLs",
      icon:analyticsvg,
      desp:"With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses."
    },
    {
      id: 3,
      text: "Clicked & Scanned connections",
      number: "1B",
      heading:" QR Codes ",
      icon:gridsvg,
      desp:"Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution."
    },
    {
      id: 4,
      text: "App Integrations",
      number: "300K",
      heading:" Data Analytics",
      icon:editsvg,
      desp:" Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress."
    },
  ];

  return (
    <div className="mt-5 ">
      <div className="flex justify-between sm:mb-xxl mb-16">
        <h2 className={styles.fontsizeSmallheading}>One Stop . Four <span> Possibilities</span></h2>
        <div className="sm:flex sm:justify-between grid grid-cols-2 ">
          {detailes.map((i) => {
            return (
              <div key={i.id} className="sm:ml-10">
                <h2 className="text-2xl leading-10 mb-4">{i.number}</h2>
                <p>{i.text}</p>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>

      <div className="sm:flex ">
        <div className="headersm:text ">
          <h2 className={styles.fontsizeSmallheading + "mb-4"}>Why choose <span>Scissors</span></h2>
          <p className={"sm:w-80"+ styles.fontsizeSmallText}>
            Scissors is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating custom ones for
            your personal, business, event usage. Our swift QR code creation,
            management and usage tracking with advance analytics for all of
            these is second to none
          </p>
        </div>
        <div className="lg:grid grid-cols-2  md:flex md:flex-col ">
          {detailes.map((i)=>{
            return <div className="mb-5 sm:ml-10 mx-2" key={i.id}>
             <div className="eclipse-mn mb-3 w-[56px] h-[56px] rounded-[56px] hidden sm:flex justify-center text-center items-center bg-[#3284FF21]"><Image alt={i.heading}src={i.icon}></Image></div>
              <h2 className="sm:text-2xl leading-10 mb-4 text-sm ">{i.heading}</h2>
              <p className={styles.fontsizeSmallText}>{i.desp}</p>
            </div>
          })}

        </div>

      </div>
      <div></div>
    </div>
  );
};

export default About;
