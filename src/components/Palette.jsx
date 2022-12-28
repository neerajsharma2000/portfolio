import React from 'react'
import {
    FaBars, FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
    FaVoicemail,
    HiOutlineMail,
    

} from 'react-icons/fa';
import {BsFillFileEarmarkFill} from 'react-icons/bs';
import {SiGmail,SiLeetcode} from 'react-icons/si';

import { Link } from "react-router-dom";

const Palette = () => {
    return (

            <div className="fixed top-[25%] left-[0%] flex flex-col justify-center items-center  z-10">
                <ul className='flex flex-col justify-center items-center bg-blue-400'>
                    <li className='px-1 py-1  '><a href='https://linkedin.com/in/neeraj-sharma-6697111aa/' target={"_blank"}><FaLinkedin size={30} /></a></li>
                    <li className='px-1 py-1 '><a href="https://github.com/neerajsharma2000/"  target={"_blank"}><FaGithub size={30} /></a></li>
                    <li className='px-1 py-1 '><a href='https://drive.google.com/file/d/1nXZI_miS66BX1meuE-kSS_XIO35GiR76/view?usp=share_link' target={"_blank"}><BsFillFileEarmarkFill size={30}/></a></li>
                    <li className='px-1 py-1 '><a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new' target={"_blank"}><SiGmail size={30}/></a></li>
                    <li className='px-1 py-1 '><a href='https://leetcode.com/user4851h/' target={"_blank"}><SiLeetcode size={30}/></a></li>

                </ul>
                {/* <div className=" flex justify-center items-center ">
                    <a href="/">
                        <h1 className="text-2xl font-bold ">Back</h1>
                    </a>

                </div> */}
            </div>
            

            )
}

            export default Palette