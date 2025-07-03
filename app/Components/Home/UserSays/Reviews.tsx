import React from 'react';

const reviews = [
  {
    name: 'Wehwish',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'This platform has genuinely saved me countless hours every week! The AI captions are an absolute game-changer for my small business.',
    color: 'border-l-4 border-purple-400',
  },
  {
    name: 'Wade Warren',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Finally, an easy and effective way to manage my Instagram content. The automation is flawless, and I highly recommend it to any content creator!',
    color: 'border-l-4 border-cyan-400',
  },
  {
    name: 'Guy Hawkins',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    text: 'This platform has genuinely saved me countless hours every week! The AI captions are an absolute game-changer for my small business.',
    color: 'border-l-4 border-pink-300',
  },
];

const Reviews = () => {
  return (
    <div className=" rounded-2xl shadow-md p-8 md:p-16 mx-[10%] my-[5%] border border-gray-200 relative flex justify-center items-center">
      <div className="mb-8 w-1/2 px-[5%]">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          What <span className="text-purple-600">Our Early Users</span> <span className="text-cyan-400">Are</span> <span className="text-purple-600">Saying</span>
        </h1>
        <p className="text-gray-400 max-w-xl py-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
        </p>
      </div>
      <div className="flex flex-row md:flex-col gap-6 md:gap-8 w-1/2">
        {reviews.map((review, idx) => (
          <div key={idx} className={`flex-1 bg-white rounded-xl shadow-sm p-6 flex flex-col gap-2 ${review.color} relative ${idx % 2 === 0 ? 'ml-8 -mr-8' : 'ml-0'}`}>
            <div className="flex items-center gap-3 mb-2">
              <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full border-2 border-white shadow" />
              <span className="font-semibold text-gray-800">{review.name}</span>
            </div>
            <p className="text-gray-600 text-sm">"{review.text}"</p>
            <span className="absolute right-4 top-4 text-2xl text-purple-200">❝❞</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
