import React from 'react';
import firstLog from '../../../banner-imgs/features-logo/Simplification.png'
import secLog from '../../../banner-imgs/features-logo/Simplification (1).png'
import thLog from '../../../banner-imgs/features-logo/Simplification (2).png'
import frLog from '../../../banner-imgs/features-logo/Simplification (3).png'

const keyFeaturesData = [
    {
        img: firstLog,
        title: 'Automated Caption & Hashtag Generation',
        desc: 'Leverage the power of AI to instantly generate engaging captions and highly relevant hashtags tailored to your content, saving you hours of brainstorming and research.'
    },
    {
        img: secLog,
        title: 'Seamless Instagram (and Facebook) Integration',
        desc: 'Leverage the power of AI to instantly generate engaging captions and highly relevant hashtags tailored to your content, saving you hours of brainstorming and research.'
    },
    {
        img: thLog,
        title: 'Simple, Intuitive Web Interface',
        desc: 'Leverage the power of AI to instantly generate engaging captions and highly relevant hashtags tailored to your content, saving you hours of brainstorming and research.'
    },
    {
        img: frLog,
        title: 'Scalable & Future-Ready Backend',
        desc: 'Leverage the power of AI to instantly generate engaging captions and highly relevant hashtags tailored to your content, saving you hours of brainstorming and research.'
    },
];

const KeyFeatures = () => {
    return (
        <div className='mx-[15%] border border-gray-200 rounded-2xl my-[10%] p-[5%] bg-white'>
            <h1 className='font-bold text-3xl text-center'>Key <span className='text-purple-600 '>Features</span> You'll Love</h1>
            <div className='grid grid-cols-1 xl:grid-cols-2 mt-5'>
                {keyFeaturesData.map((item, idx) => (
                    <div key={idx} className='flex flex-col justify-start items-start gap-3 p-5'>
                        <img className='h-16 w-16' src={item.img} alt={item.title} />
                        <h1 className='text-purple-600 font-semibold'>{item.title}</h1>
                        <p className='text-gray-400'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeyFeatures;