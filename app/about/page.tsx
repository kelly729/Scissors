"use client";
import React from "react";
import { styles } from "../page";

const Page = () => {
  const Data = [
    {
      id: 1,
      text: "At Scissors URL Shortener, we understand the importance of simplicity and efficiency when it comes to managing and sharing links. Our powerful app is designed to make the process of shortening and customizing URLs quick and hassle-free. With Scissors, you can say goodbye to long and cumbersome web addresses and say hello to concise, memorable links that enhance your online experience.",
      heading: "",
    },
    {
      id: 2,
      heading: "Streamline Your Links with Ease",
      text: "Our app offers a seamless solution for transforming lengthy URLs into concise and manageable links. With just a few clicks, you can convert any web address into a compact, memorable URL that is easier to share and remember. Say goodbye to cumbersome links that clutter your emails, social media posts, and other online communications. Scissors streamlines your links effortlessly, saving you time and effort in the process.",
    },
    {
      id: 3,
      heading: "Customize and Personalize Your Links",
      text: "Not only does Scissors shorten your URLs, but it also provides you with the ability to customize them according to your preferences. Stand out from the crowd by choosing meaningful and brand-friendly aliases for your links. Whether you're a business, marketer, or individual user, our app allows you to personalize your shortened URLs, making them more engaging and clickable for your audience.",
    },
    {
      id: 4,
      heading: "Comprehensive Link Management",
      text: "With Scissors, you have complete control over your shortened URLs. Our app provides a comprehensive link management system that allows you to track, analyze, and optimize your links' performance. Gain valuable insights into click-through rates, geolocation, referral sources, and more. By understanding how your links are performing, you can refine your strategies and maximize the impact of your online presence.",
    },
    {
      id: 5,
      text: "Scissors URL Shortener is your go-to tool for simplifying and sharing your links effectively. With our user-friendly interface, customizable options, and powerful analytics, you can streamline your online communications and make a lasting impression on your audience. Join thousands of satisfied users who have already experienced the convenience and benefits of Scissors. Sign up today and start transforming your URLs into sleek, shareable links with ease",
    },
  ];
  return (
    <div className="mt-5">
    <div className="margin-main hidden sm:block">
      {Data.map((item) => {
        return (
          <div key={item.id}>
            <h2 className={"text-lg mt-3 text-main-blue"}>{item.heading}</h2>
            <p className={"mt-5 text-base "}>{item.text}</p>
          </div>
        );
      })}
      
    </div>
    <div className="sm:hidden text-center margin-main ">
    <p>
      At Scissors URL Shortener, we understand the importance of simplicity
      and efficiency when it comes to managing and sharing links. Our
      powerful app is designed to make the process of shortening and
      customizing URLs quick and hassle-free. With Scissors, you can say
      goodbye to long and cumbersome web addresses and say hello to concise,
      memorable links that enhance your online experience.
    </p>
  </div>
  </div>
  );
};

export default Page;
