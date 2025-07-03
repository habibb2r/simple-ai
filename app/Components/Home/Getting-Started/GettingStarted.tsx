import React from 'react';

import { FaUserTie, FaUserShield, FaLink } from 'react-icons/fa';

const gettingStartedData = [
  {
    icon: <FaUserTie className="text-3xl text-white bg-purple-400 p-2 rounded-md" />,
    title: 'Facebook Business Account',
    desc: 'Ensure your business has an active Facebook Business Account, which serves as the foundation for Meta Business Suite.'
  },
  {
    icon: <FaUserShield className="text-3xl text-white bg-cyan-400 p-2 rounded-md" />,
    title: 'Admin Access',
    desc: `You'll need Admin access to both your Facebook Page and your Instagram Business Account to link them effectively.`
  },
  {
    icon: <FaLink className="text-3xl text-white bg-pink-300 p-2 rounded-md" />,
    title: 'Linked Accounts',
    desc: 'Verify that your Instagram and Facebook accounts are properly linked under Meta Business Suite for smooth automation.'
  }
];

const GettingStarted = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 md:p-16 mx-[10%] my-[5%] border border-gray-200 relative">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Getting <span className="text-purple-600">Started: What You'll </span> Need
      </h1>
      <p className="text-center text-gray-500 mb-12 text-lg max-w-2xl mx-auto">
        Prepare For Seamless Integration And Unlock The Full Potential Of Your Social Media Automation.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-10 md:gap-0 relative">
        {gettingStartedData.map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center text-center px-2 md:px-6">
            <div>{item.icon}</div>
            <h2 className="font-bold text-lg mt-6 mb-2">{item.title}</h2>
            <p className="text-gray-500 text-base mb-2">{item.desc}</p>
          </div>
        ))}
       
        <div className="hidden md:block absolute left-3/12 right-0 top-[5%] -translate-y-1/2 z-0">
          <div className="flex justify-between items-center w-[30%] px-8">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-300 via-cyan-300 to-pink-300 opacity-60"></span>
            <span className="flex-1 border-t-2 border-dotted border-cyan-300"></span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-300 via-cyan-300 to-pink-300 opacity-60"></span>
            
          </div>
        </div>
        <div className="hidden md:block absolute left-7/12 right-0 top-[5%] -translate-y-1/2 z-0">
          <div className="flex justify-between items-center w-[50%] px-8">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-300 via-cyan-300 to-pink-300 opacity-60"></span>
            <span className="flex-1 border-t-2 border-dotted border-cyan-300"></span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-300 via-cyan-300 to-pink-300 opacity-60"></span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;