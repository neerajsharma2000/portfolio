import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import AWS from "../assets/aws.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Github from "../assets/github.png";
import react from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import spboot from "../assets/spboot.png";
import java from "../assets/java.png";
import cpp from "../assets/c++.png";
import mysql from "../assets/mysql.png";
import jnkns from "../assets/jnkns.png";
import bkt from "../assets/bkt.png";
import jira from "../assets/jira.png";
import heroku from "../assets/heroku.png";
import Flask from "../assets/Flask.png";
import python from "../assets/python.png";





import Palette from '../components/Palette';
import bg from '../assets/mohammad-rahmani-LrxSl4ZxoRs-unsplash.jpg';



const Experience = () => {
  return (
    <div style={{backgroundImage:`url(${bg})`}} className='w-full h-screen flex flex-col justify-center items-center bgpic'>
      {/* <Navbar /> */}

      <div className='w-full h-screen flex flex-col justify-center items-center  text-blue-400 '>
        <div className="w-max-[1000px]  mx-auto p-4 flex justify-center items-center  bg-black opacity-80 ">
          <h1 className='text-2xl md:text-4xl md:font-bold rounded-md hover:bg-blue-400 hover:text-black'>Experience</h1>

        </div>
        <div className="w-max-[1000px]   mx-auto  flex p-2 bg-black opacity-80">
          <div className="flex mx-4 justify-center items-center  w-20 h-20"><img src={react} alt="React" /></div>
          <div className="flex mx-4 justify-center items-center w-20 h-20"><img src={HTML} alt="" /></div>
          <div className="flex mx-4 justify-center items-center w-20 h-20"><img src={CSS} alt="" /></div>
          <div className="flex mx-4 justify-center items-center w-20 h-20"><img src={Javascript} alt="" /></div>
        </div>
        <div className="w-max-[1000px]   mx-auto  flex p-2  bg-black opacity-80">

        <div className="flex mx-4 justify-center items-center  w-20 h-20"><img src={cpp} alt="" /></div>
          <div className="flex mx-4 justify-center items-center w-20 h-20"><img src={java} alt="" /></div>
          <div className="flex mx-4 justify-center items-center w-20 h-20"><img src={mysql} alt="" /></div>
          <div className="flex mx-4 justify-center items-center w-20 h-20"><img src={spboot} alt="" /></div>
         </div>
         <div className="w-max-[1000px]   mx-auto  flex p-2  bg-black opacity-80">
 
         <div className="flex mx-4 justify-center items-center  w-20 h-20"><img src={bkt} alt="" /></div>
          <div className="flex mx-4 justify-center items-center w-20 h-20"><img src={jnkns} alt="" /></div>
          <div className="flex mx-4 justify-center items-center w-20 h-20"><img src={jira} alt="" /></div>
          <div className="flex mx-4 justify-center items-center w-20 h-20"><img src={heroku} alt="" /></div>
         </div>
         <div className="w-max-[1000px]   mx-auto  flex p-2  bg-black opacity-80">
 
         <div className="flex mx-4 justify-center items-center  w-20 h-20"><img src={python} alt="" /></div>
          <div className="flex mx-4 justify-center items-center w-20 h-20"><img src={Flask} alt="" /></div>
          <div className="flex mx-4 justify-center items-center  w-20 h-20"><img src={AWS} alt="" /></div>
          <div className="flex mx-4 justify-center items-center w-20 h-20"><img src={Tailwind} alt="" /></div>
        
        </div>
      

      </div>
      <Palette /> 
    </div>
  )
}

export default Experience