import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';


import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
    const form = useRef();
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm(
            'service_xpe0sqb',     // From EmailJS dashboard
            'template_rctm1ml',    // From EmailJS template
            form.current,          // Your form reference
            'wml0PteNKXU0tky14'      // From EmailJS API Keys
        )
            .then(() => {
                setSent(true);
                e.target.reset();
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });
    };

    return (
        <section id="contact" className=" py-16 px-4 border border-blue-400">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

                {/* ✅ Left Side - Contact Info */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
                    <p className="text-white">
                        I’d love to hear from you! Whether you have a project, idea, or just want to say hello.
                    </p>
                    <div>
                        <h4 className="text-white font-semibold">Address</h4>
                        <p className='text-white'> Dhaka, Bangladesh</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaWhatsapp className="text-green-500 text-3xl" />
                        <a href="https://wa.me/8801234567890" target="_blank" rel="noreferrer" className="hover:underline text-white">
                            +880 1310427683
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-blue-500 text-3xl" />
                        <a href="jannatulnila74@gmail.com" className="hover:underline text-white">
                            jannatulnila74@gmail.com
                        </a>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.linkedin.com/in/jannatul-fardous-nila" target="_blank" rel="noreferrer">
                            <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-800" />
                        </a>
                        <a href="https://github.com/jannatulnila" target="_blank" rel="noreferrer">
                            <FaGithub className="text-2xl text-white hover:text-white" />
                        </a>
                    </div>
                </div>

                {/* ✅ Right Side - Feedback Form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className=" p-6 rounded-lg shadow-md space-y-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full p-3 border border-blue-400 text-white rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full p-3 border border-blue-400 text-white  rounded"
                    />
                    
                    <input
                        type="text"
                        name="title"
                        placeholder="Subject"
                        required
                        className="w-full p-3 border border-blue-400 text-white  rounded"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Feedback"
                        rows="5"
                        required
                        className="w-full p-3 border border-blue-400 text-white  rounded"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Send Email
                    </button>
                    {sent && (
                        <p className="text-green-600 font-medium">Message sent successfully!</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
