import React from 'react';
import {  FaCss3Alt, FaGitAlt, FaHtml5, FaJsSquare, FaReact, FaWordpress } from 'react-icons/fa';
import {
    
    SiTailwindcss,
    SiFirebase,
    SiFigma,
    SiMongodb,
   
    SiNextdotjs,
   
    
    SiSass,
    SiWebpack,
    SiNpm,
} from 'react-icons/si';

const Skills = () => {
    return (
        <section id='skills' className='text-white max-w-6xl mx-auto py-16 px-4'>
            <div className=' text-center'>
                <h2 className='text-2xl text-center font-bold bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>Skills</h2>
                <p className='text-gray-300  text-center text-xl'>The Skills,Tools and Technogies I use:</p>

                <div className="mt-8 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 justify-around items-center  mx-auto text-4xl">
                    <FaHtml5 className="text-orange-500 hover:scale-110 transition" title="HTML5" />
                    <FaCss3Alt className="text-blue-500 hover:scale-110 transition" title="CSS3" />
                    <FaJsSquare className="text-yellow-400 hover:scale-110 transition" title="JavaScript" />
                    <SiTailwindcss className="text-cyan-400 hover:scale-110 transition" title="Tailwind CSS" />
                    <SiNpm className="text-red-600 hover:scale-110 transition" title="NPM" />
                    <SiFigma className="text-pink-400 hover:scale-110 transition" title="Figma" />
                    <FaReact className="text-blue-400 hover:scale-110 transition" title="React" />
                    <SiWebpack className="text-blue-300 hover:scale-110 transition" title="Webpack" />
                    <FaGitAlt className="text-orange-400 hover:scale-110 transition" title="Git" />
                    <FaWordpress className="text-blue-700 hover:scale-110 transition" title="WordPress" />
                    <SiSass className="text-pink-500 hover:scale-110 transition" title="Sass" />
                    <SiNextdotjs className="text-white hover:scale-110 transition" title="next.js" />
                    <SiMongodb className="text-green-500 hover:scale-110 transition" title="MongoDb" />
                    <SiFirebase className="text-yellow-500 hover:scale-110 transition" title="MongoDb" />
                </div>
            </div>


        </section>
    );
};

export default Skills;