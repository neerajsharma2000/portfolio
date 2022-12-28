import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Palette from '../components/Palette';
import { FiArrowRightCircle } from 'react-icons/fi';
import bg from '../assets/mohammad-rahmani-LrxSl4ZxoRs-unsplash.jpg'

const About = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}  className='w-full h-screen flex flex-col justify-center items-center bgpic'>
      {/* <Navbar /> */}
      <div className='w-full h-screen flex flex-col justify-center items-center  text-blue-400  '>

       

        <div className="max-w-[1000px]  mx-auto p-2 flex-col md:flex  bg-black opacity-80">
          <div className="flex justify-center items-center ">
            <h1 className="text-4xl font-extrabold hover:bg-blue-400 hover:text-black rounded-md">About</h1>
          </div>
          <div className="sm:text-left text-2xl  flex justify-center items-center">
            <p>I am Neeraj Sharma, B.Tech. C.S.E. Graduate(2022 passout) from M.M.M.U.T, Gorakhpur.Currently a Software developer(Java,Springboot,Bootstrap,MySQL). I have good problem solving skills and have programming language experience in C++, Java as well as hands-on experience on data science and Springboot projects.
            </p>
          </div>
        </div>

        <div className="max-w-[1000px]  flex-col justify-center items-center  bg-black opacity-80">
          <div className="flex-col justify-center items-center">
            <h1 className="text-3xl font-extrabold">Chaipoint| Java, Springboot,MySQL</h1>
            <p><FiArrowRightCircle size={10} /> Worked and developed multiple APIs under the 7-member developer team for MyChaiCorner organization
              involving the use of SpringBoot,Vaadin, JAVA, Rest APIs, etc. Also tested, integrated, debugged, monitored,
              and deployed these APIs eg-store tags, filter by tags, terminal creation, bank details tab layout.Optimized and fixed
              bugs of multiple features related to the MyChaiCorner website.</p>
            <p><FiArrowRightCircle size={10} />Collaborated with marketing team and built Enchante Instagram filters with Meta spark player and received
              ’ultimate team-player’ award from the team.</p></div>
          <div className="flex-col justify-center items-center">
            <h1 className="text-3xl font-extrabold">EISystems Services| Python, Flask,Bootstrap</h1>
            <p><FiArrowRightCircle size={10} />Individually built 2 data science projects namely-Stroke disease prediction, and IPL Twitter sentiment
              analysis using machine learning datasets. Cleaned, Preprocessed, implemented, tested, and deployed the project
              on Heroku platform.</p>
            <p><FiArrowRightCircle size={10} />Accuracy scores were above 80 percent.</p></div>
          <div className="flex-col justify-center items-center">
            <h1 className="text-3xl font-extrabold">Bachelor of Technology,C.S.E</h1>
            <p>Madan Mohan Malaviya University of Technology,Gorakhpur</p>
            <p>2018-2022</p></div>
          <div className="flex-col justify-center items-center">
            <h1 className="text-3xl font-extrabold">High School</h1>
            <p>Gyandeep Academy</p>
            <p>2016-2017</p></div>


        </div>

      </div>


      <Palette />

    </div >

  )
}

export default About