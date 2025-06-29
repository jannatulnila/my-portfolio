import React from 'react';
import about from '../assets/aboutImage.png'
import { FaMousePointer, FaServer } from 'react-icons/fa';
import { VscServerEnvironment } from 'react-icons/vsc';
import { SiNextui } from 'react-icons/si';

const About = () => {
    return (
        <div id="about" className='bg-black p-6 w-full max-w-5xl mx-auto mt-5 rounded-xl'>
             <h1 className='text-2xl text-center font-bold bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>About Me</h1>
            <div className='flex flex-col md:flex-row items-center shadow-lg my-5'>
               
            
            <div>
                <img src={about} alt="" />
            </div>
            <div className='text-white ' >
                <div className='flex items-center gap-3 rounded-lg bg-[#1B0036] p-3 border border-blue-400 hover:bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 mb-3'>
                     <FaMousePointer />
                  
               <div>
                 <h1 className='font-semibold text-xl'>
                   
                    Frontend Developer</h1>
                <p className='text-sm'> I'm a frontend developer with experience in building responsive
                and optimized sites</p>
              </div>
            </div>
                <div className='flex items-center gap-3 rounded-lg bg-[#1B0036] p-3 border border-blue-400 hover:bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 mb-3'>
                     <FaServer />
                  
               <div>
                 <h1 className='font-semibold text-xl'>
                   Backend Developer</h1>
                <p className='text-sm'> I have experience developing fast and optimised back-end systems and APIs</p>
              </div>
            </div>
                <div className='flex items-center gap-3 rounded-lg bg-[#1B0036] p-3 border border-blue-400 hover:bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 mb-3'>
                     <SiNextui />

                  
               <div>
                 <h1 className='font-semibold text-xl'>
                   UI Designer</h1>
                <p className='text-sm'> I have designed multiple landing pages and have created design systems as well</p>
              </div>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default About;