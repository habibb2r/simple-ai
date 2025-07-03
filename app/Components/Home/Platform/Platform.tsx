import React from 'react';
import { PiBagFill } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import image1 from '../../../banner-imgs/Platform/image1.png'
import image2 from '../../../banner-imgs/Platform/image2.png'
import image3 from '../../../banner-imgs/Platform/image3.png'

const platformData = [
    {
        icon: <PiBagFill className="text-white text-xl" />, 
        image: image1,
        title: "Business Owners",
        description: "Looking to streamline their social media presence and grow their brand online with minimal effort."
    },
    {
        icon: <FaEdit className="text-white text-xl" />, 
        image: image2,
        title: "Content Creators",
        description: "Looking to streamline their social media presence and grow their brand online with minimal effort."
    },
    {
        icon: <FaUser className="text-white text-xl" />, 
        image: image3,
        title: "Time-Strapped Professionals",
        description: "Looking to streamline their social media presence and grow their brand online with minimal effort."
    }
];

const Platform = () => {
    return (
        <div className=''>
            <h1 className='font-bold text-3xl text-center'>Why is this <span className='text-purple-600 '>Platform</span> For</h1>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-5 mx-[10%] my-[5%]'>
                {platformData.map((item, idx) => (
                    <div key={idx} className='flex flex-col justify-start items-start gap-4 border border-gray-200 rounded-2xl p-8 bg-white'>
                        <div className='bg-[#8267EC] p-2 rounded-full'>
                            {item.icon}
                        </div>
                        <img src={item.image} alt={item.title} />
                        <h1 className='font-semibold text-2xl'>{item.title}</h1>
                        <p className='text-gray-400'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Platform;