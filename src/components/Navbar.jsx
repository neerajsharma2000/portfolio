import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaVoicemail,
  HiOutlineMail,
  BsFillPersonalLinesFill,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Palette from "./Palette";
export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=" container h-[80px] flex justify-between bg-black  text-blue-400">
      <div className="rounded-md m-2 p-2 flex justify-center items-center hover:bg-blue-400 hover:text-black">
        <Link to="/">
          <h1 className="rounded-md  text-3xl font-bold ">Portfolio</h1>
        </Link>
      </div>
      <div className=" m-2 px-2 flex justify-center items-center ">
        <ul className="hidden md:flex text-2xl ">
          <li className="px-2 py-2  cursor-pointer  hover:bg-blue-400 hover:text-black rounded-md ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2 py-2 cursor-pointer hover:bg-blue-400 hover:text-black rounded-md">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-2 py-2 cursor-pointer hover:bg-blue-400 hover:text-black rounded-md">
            {" "}
            <Link to={"/experience"}>Skills</Link>
          </li>
          <li className="px-2 py-2 cursor-pointer hover:bg-blue-400 hover:text-black rounded-md">
            <Link to={"/contacts"}>Contacts</Link>
          </li>
          <li className="px-2 py-2 cursor-pointer hover:bg-blue-400 hover:text-black rounded-md">
            <Link to={"/projects"}>Projects</Link>
          </li>
        </ul>
      </div>

      <div
        onClick={handleClick}
        className="md:hidden flex justify-center items-center z-10"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-2xl bg-black z-10"
        }
      >
        <ul className=" md:hidden ">
          <li className="px-4 py-4 cursor-pointer  hover:bg-blue-400 hover:text-black rounded-md">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 py-4 cursor-pointer  hover:bg-blue-400 hover:text-black rounded-md">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-4 py-4 cursor-pointer  hover:bg-blue-400 hover:text-black rounded-md">
            {" "}
            <Link to={"/experience"}>Skills</Link>
          </li>
          <li className="px-4 py-4 cursor-pointer  hover:bg-blue-400 hover:text-black rounded-md">
            <Link to={"/contacts"}>Contacts</Link>
          </li>
          <li className="px-4 py-4 cursor-pointer  hover:bg-blue-400 hover:text-black rounded-md">
            <Link to={"/projects"}>Projects</Link>
          </li>
        </ul>
      </div>
      <Palette />
    </div>
  );
};
