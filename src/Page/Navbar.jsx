import React, { useState } from 'react';
import { TbLetterJSmall, TbSquareLetterJFilled } from 'react-icons/tb';
import { HiMenuAlt3, HiX } from 'react-icons/hi';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" sticky  top-0 z-50 bg-[#1B0036] px-4 py-3 mx-auto">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a href='/' className="text-4xl italic font-bold t bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    JannatulNila
                </a>

                

                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-2xl text-white"
                    >
                        {isOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>

                <div className="hidden md:flex space-x-6 text-white font-medium">
                    <a href='#about' className="hover:text-white">About</a>
                    <a href='#skills'  className="hover:text-white">Skills</a>
                    <a href='#education' className="hover:text-white">Education</a>
                    <a href='#contact' className="hover:text-white">Contact</a>
                </div>

                
                <div className="hidden md:block">
                    <a
                        href="https://drive.google.com/file/d/12G321p-9iwyEUW8yBmNoR6hlpcDpqg0W/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:text-white transition"
                    >
                        Resume
                    </a>
                </div>
            </div>

         
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col items-center space-y-3 text-center text-white font-medium">
                    <a href='#about' className="hover:text-white">About</a>
                    <a href='#skills'  className="hover:text-white">Skills</a>
                    <a href='#education' className="hover:text-white">Education</a>
                    <a href='#contact' className="hover:text-white">Contact</a>
                    <a
                        href="https://drive.google.com/file/d/12G321p-9iwyEUW8yBmNoR6hlpcDpqg0W/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:text-white transition"
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
