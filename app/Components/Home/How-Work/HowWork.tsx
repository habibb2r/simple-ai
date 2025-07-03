import { FcUpload } from "react-icons/fc";
import { MdOutlineLightMode } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { MdHistoryToggleOff } from "react-icons/md";

const howWorkData = [
    {
        icon: <FcUpload className="text-2xl text-purple-400"/>,
        title: 'Create Your Content',
        desc: 'Upload your photo or post directly to our intuitive web app.'
    },
    {
        icon: <MdOutlineLightMode className="text-2xl text-purple-400"/>,
        title: 'AI-Powered Magic',
        desc: 'Our system, powered by advanced AI, automatically crafts a catchy caption and relevant hashtags for your post.'
    },
    {
        icon: <BsFillSendFill className="text-2xl text-purple-400"/>,
        title: 'Publish with One Click',
        desc: 'Review, then instantly publish your content to Instagram (and optionally Facebook) with a single click.'
    },
    {
        icon: <MdHistoryToggleOff className="text-2xl text-purple-400"/>,
        title: 'Track Your History',
        desc: 'Easily review your past posts and engagement within your personal dashboard.'
    },
];

const HowWork = () => {
    return (
        <div className='text-center px-[10%] py-10 mt-[5%]'>
            <h1 className='font-bold text-3xl my-[5%]'>How it <span className='text-purple-600'>Works</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5'>
                {howWorkData.map((item, idx) => (
                    <div key={idx} className='border-1 border-gray-300 p-[10%] rounded-2xl flex flex-col items-center gap-2'>
                        <div className="p-3 bg-[#3D58EA33] rounded-full">
                            {item.icon}
                        </div>
                        <h1 className='font-semibold'>{item.title}</h1>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowWork;