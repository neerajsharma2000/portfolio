import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Palette from '../components/Palette';
import bg from '../assets/mohammad-rahmani-LrxSl4ZxoRs-unsplash.jpg';

const Contacts = () => {
  return (
    <div style={{backgroundImage:`url(${bg})`}} className='w-full h-screen flex flex-col justify-center items-center bgpic'>
      {/* <Navbar/> */}

      {/* <div className='w-full h-screen flex flex-col justify-center items-center bg-black text-blue-400'>
        <h1>Contacts</h1>

      </div> */}
      <div name='contact' className='w-full h-screen flex justify-center items-center p-4  text-blue-400 '>
        <form method='POST' action="https://formspree.io/f/mrgvzjgz" enctype="multipart/form-data" className='flex flex-col max-w-[600px] w-full  bg-black opacity-80'>
          <div className='flex justify-center items-center'>
            <p className='text-xl md:text-4xl md:font-bold inline rounded-md text-gray-300 hover:bg-blue-400 hover:text-black'>Contact</p>
            {/* <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in</p> */}
          </div>
          <input className='bg-white p-2  m-2' type="text" placeholder='Name' name='name' />
          <input className=' p-2 bg-white m-2' type="email" placeholder='Email' name='email' />
          <textarea className='bg-white p-2 m-2' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 rounded-md hover:bg-blue-400 hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      </div>
      <Palette />
    </div>
  )
}

export default Contacts