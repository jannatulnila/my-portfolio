import React from 'react';
import { motion } from "motion/react"

const Education = () => {
    return (
        <section id='education' className=" py-10 px-6 md:px-16">
            <h2 className="text-3xl font-bold text-center mb-8 ">🎓 <snap className='bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'>Education</snap></h2>

            <div className="max-w-4xl mx-auto space-y-8">

                

                <motion.div
                    className="border border-blue-400 hover:bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 mb-3 rounded-lg p-6 shadow-md "
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                       
                    }}
                >
        
                    <h3 className="text-xl font-bold text-white">Bachelor of Business Administration (BBA)</h3>
                    <p className="text-white">Major: Finance and Banking</p>
                    <p className="text-white">Institution: National University, Bangladesh</p>
                    <p className="text-white">Duration: 2023 – 2026 <span className="italic">(Ongoing)</span></p>
                    <ul className="list-disc pl-5 text-white mt-2">
                        <li>Studying financial management, investment, and banking operations</li>
                        <li>Strong foundation in business communication and market analysis</li>
                        <li>Developing analytical and problem-solving skills</li>
                    </ul>
            </motion.div>

            <motion.div
            
                           
                             className="border border-blue-400 hover:bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 mb-3 rounded-lg p-6 shadow-md "
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                
                            }}
                        >
           
                <h3 className="text-xl font-bold text-white">Web Development (Self-Learning)</h3>
                <p className="text-white">Duration: 2024 – Present</p>
                <ul className="list-disc pl-5 text-white mt-2">
                    <li>Frontend: HTML, CSS, JavaScript, React, Tailwind CSS, DaisyUI</li>
                    <li>Backend: Node.js, Express.js, MongoDB, Firebase</li>
                    <li>Real-world projects, Git version control, and deployment skills</li>
                </ul>
            </motion.div>

        </div>
    </section >
  );
};

export default Education;
