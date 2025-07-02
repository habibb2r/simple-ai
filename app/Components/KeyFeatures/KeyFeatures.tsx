import React from 'react';
import firstLog from '../../banner-imgs/features-logo/Simplification.png'
import secLog from '../../banner-imgs/features-logo/Simplification (1).png'
import thLog from '../../banner-imgs/features-logo/Simplification (2).png'
import frLog from '../../banner-imgs/features-logo/Simplification (3).png'

const KeyFeatures = () => {
    return (
        <div className='mx-[15%] border border-gray-200 rounded-2xl my-[10%] p-[5%]'>
            <h1 className='font-bold text-3xl text-center'>Key <span className='text-purple-600 '>Features</span> You'll Love</h1>
            <div className='grid grid-cols-1 xl:grid-cols-2 mt-5'>
                <div className='flex flex-col justify-start items-start gap-3 p-5'>
                    <img className='h-16 w-16' src={firstLog} alt="" />
                    <h1 className='text-purple-600 font-semibold'>Automated Caption & Hashtag Generation</h1>
                    <p className='text-gray-400'>Leverage the power of AI to instantly generate engaging captions and highly relevant hashtags tailored to your content, saving you hours of brainstorming and research.</p>
                </div>
                <div className='flex flex-col justify-start items-start gap-3 p-5'>
                    <img className='h-16 w-16' src={secLog} alt="" />
                    <h1 className='text-purple-600 font-semibold'>Seamless Instagram (and Facebook) Integration</h1>
                    <p className='text-gray-400'>Leverage the power of AI to instantly generate engaging captions and highly relevant hashtags tailored to your content, saving you hours of brainstorming and research.</p>
                </div>
                <div className='flex flex-col justify-start items-start gap-3 p-5'>
                    <img className='h-16 w-16' src={thLog} alt="" />
                    <h1 className='text-purple-600 font-semibold'>Simple, Intuitive Web Interface</h1>
                    <p className='text-gray-400'>Leverage the power of AI to instantly generate engaging captions and highly relevant hashtags tailored to your content, saving you hours of brainstorming and research.</p>
                </div>
                <div className='flex flex-col justify-start items-start gap-3 p-5'>
                    <img className='h-16 w-16' src={frLog} alt="" />
                    <h1 className='text-purple-600 font-semibold'>Scalable & Future-Ready Backend</h1>
                    <p className='text-gray-400'>Leverage the power of AI to instantly generate engaging captions and highly relevant hashtags tailored to your content, saving you hours of brainstorming and research.</p>
                </div>
            </div>
        </div>
    );
};

export default KeyFeatures;