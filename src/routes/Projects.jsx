import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Portfolio from '../assets/projects/prtf.png';
import Stroke from '../assets/projects/stroke.png';


import Palette from '../components/Palette';
import bg from '../assets/mohammad-rahmani-LrxSl4ZxoRs-unsplash.jpg'

const Projects = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='w-full h-screen flex flex-col justify-center items-center bgpic'>
      {/* <Navbar /> */}
      <div className='w-full h-screen flex flex-col justify-center items-center  text-blue-400'>
        <div className="w-max-[1000px] mx-auto p-4 flex flex-col justify-center items-center  bg-black opacity-80">
          <h1 className='text-xl md:text-4xl font-bold rounded-md hover:bg-blue-400 hover:text-black'>Projects</h1>
        </div>

        {/* containers */}

        <div className="m-2 p-4 grid sm:grid-cols-1 md:grid-cols-2 gap-4 bg-black opacity-80">

          <div className=" shadow-lg shadow-white  container rounded-md flex-col justify-center items-center  ">
            <div style={{ backgroundImage: `url(${Portfolio})` }} className="shadow-lg shadow-white  container rounded-md flex justify-center items-center mx-auto content-div ">
            </div>

            <div className="flex-col justify-start items-center container rounded-md ">
              <div className="flex justify-center items-center container rounded-md">
                Individually built a Portfolio website.It involved use of web framework like TailwindCSS,React and Javascript and deployed on Github.io platform.
              </div>
              <div className="flex justify-center items-center container rounded-md">
                {/* eslint-disable-next-line */}
                <a href='/' target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href='/' target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className=" shadow-lg shadow-white  container rounded-md flex-col justify-center items-center  ">
            <div style={{ backgroundImage: `url(${Stroke})` }} className="shadow-lg shadow-white  container rounded-md flex justify-center items-center mx-auto content-div ">
            </div>

            <div className="flex-col justify-start items-center container rounded-md ">
              <div className="flex justify-center items-center container rounded-md">
                <p>Individually built a data science project predicting Stroke disease chance based on given user inputs. Applied
                supervised algorithms, GridsearchCV algorithm and deployed on Render platform</p>
              </div>
              <div className="flex justify-center items-center container rounded-md">
                {/* eslint-disable-next-line */}
                <a href='https://github.com/neerajsharma2000/strokeproject' target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href='https://stroke-disease.onrender.com/' target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>




        </div>

      </div>
      <Palette />
    </div>

  )
}

export default Projects