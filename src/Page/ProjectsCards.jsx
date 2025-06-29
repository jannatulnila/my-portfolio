import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectsCards = ({ project }) => {
    const {
        images,
        title,
        description,
        techStack,
        liveLink,
        clientRepo,
        serverRepo,
        errors } = project;
    const [showErrors, setShowErrors] = useState(false);



    return (
        <div className= "  shadow-md rounded-xl p-4 md:flex gap-6 mb-6 border border-blue-400 ">
            {/* Left side - Carousel */}
            <div className="md:w-1/2 w-full">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    className="rounded-lg overflow-hidden"
                >
                    {images.map((img, index) => (
                        <div key={index}>
                            <img src={img} alt='' className=" rounded-xl  m-2" />
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Right side - Info */}
            <div className="md:w-1/2 w-full flex flex-col justify-around">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                    <p className="text-white mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {techStack.map((tech, i) => (
                            <span
                                key={i}
                                className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-1 rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                    <a href={liveLink} target="_blank" rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-medium">
                        Live Link
                    </a>
                    <a href={clientRepo} target="_blank" rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded font-medium">
                        GitHub Client
                    </a>
                    <a href={serverRepo} target="_blank" rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded font-medium">
                        GitHub Server
                    </a>
                    <button
                        onClick={() => setShowErrors(!showErrors)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-medium"
                    >
                        Errors Faced
                    </button>
                </div>

                {showErrors && (
                    <ul className="mt-4 list-disc list-inside text-sm text-red-700 bg-red-100 p-3 rounded-md">
                        {errors.map((err, i) => (
                            <li key={i}>{err}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProjectsCards;