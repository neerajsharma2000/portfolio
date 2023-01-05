import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import About from "../routes/About";
import Experience from "../routes/Experience";
import Projects from "../routes/Projects";
import Contacts from "../routes/Contacts";
import Palette from "../components/Palette";
import pic from "../assets/20221204_120804-min.jpg";
import bg from "../assets/mohammad-rahmani-LrxSl4ZxoRs-unsplash.jpg";

const Home = () => {
  return (
    <div className="relative w-full h-screen container flex-col justify-center items-center bgpic">
      <Navbar />
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="container flex justify-center items-center bg-black text-blue-400 bgpic"
      >
        <div
          style={{ backgroundImage: `url(${pic})` }}
          className=" mx-auto p-8 border-b-blue-400 flex justify-center rounded-full mincontent-div md:content-div"
        ></div>
        <div className="max-w-[400px]  h-screen mx-auto flex flex-col justify-center ">
          <p className="text-2xl  bg-black opacity-80">Hi,I am </p>
          <h1 className="text-white text-3xl md:text-6xl  bg-black opacity-80">
            Neeraj Sharma
          </h1>
          <h2 className="text-blue-200 text-2xl md:text-4xl  bg-black opacity-80">
            Software Developer &
          </h2>
          <h2 className="text-blue-200 text-2xl md:text-4xl  bg-black opacity-80">
            B.Tech. C.S.E. Graduate from M.M.M.U.T Gorakhpur(2022){" "}
          </h2>
          <p className=" bg-black opacity-80">
            Self-motivated, focused, and hardworking professional,aiming to
            leverage my abilities to successfully fill the role at your company.
            Frequently praised as efficient by my peers. I can be relied upon to
            help your organization achieve its goals.
          </p>
        </div>
      </div>
      {/* singlepage */}
      <About />
      <Experience />

      <Projects />
      <Contacts />
      {/* <Palette /> */}
    </div>
  );
};

export default Home;
