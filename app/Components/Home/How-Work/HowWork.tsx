import { FcUpload } from "react-icons/fc";
import { MdOutlineLightMode } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { MdHistoryToggleOff } from "react-icons/md";

const HowWork = () => {
    return (
        <div className='text-center px-[10%] py-10'>
            <h1 className='font-bold text-3xl my-5'>How it <span className='text-purple-600'>Works</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5'>
                <div className='border-1 border-gray-300 px-5 py-3 rounded-2xl flex flex-col items-center gap-2'>
                    <div className="p-3 bg-[#3D58EA33] rounded-full">
                        <FcUpload className="text-2xl text-purple-400"/>
                    </div>
                    <h1 className='font-semibold'>Create Your Content</h1>
                    <p>Upload your photo or post directly to
 our intuitive web app.</p>
                </div>

                <div className='border-1 border-gray-300 px-5 py-3 rounded-2xl flex flex-col items-center gap-2'>
                    <div className="p-3 bg-[#3D58EA33] rounded-full">
                        <MdOutlineLightMode className="text-2xl text-purple-400"/>
                    </div>
                    <h1 className='font-semibold'>AI-Powered Magic</h1>
                    <p>Our system, powered by advanced AI, automatically crafts a catchy caption and relevant hashtags for your post. </p>
                </div>

                <div className='border-1 border-gray-300 px-5 py-3 rounded-2xl flex flex-col items-center gap-2'>
                   <div className="p-3 bg-[#3D58EA33] rounded-full">
                     <BsFillSendFill className="text-2xl text-purple-400"/>
                   </div>
                    <h1 className='font-semibold'>Publish with One Click</h1>
                    <p>Review, then instantly publish your content to Instagram (and optionally Facebook) with a single click.</p>
                </div>

                <div className='border-1 border-gray-300 px-5 py-3 rounded-2xl flex flex-col items-center gap-2'>
                    <div className="p-3 bg-[#3D58EA33] rounded-full">
                        <MdHistoryToggleOff className="text-2xl text-purple-400"/>
                    </div>
                    <h1 className='font-semibold'>Track Your Histor</h1>
                    <p>Easily review your past posts and engagement within your personal dashboard.</p>
                </div>
            </div>
        </div>
    );
};

export default HowWork;