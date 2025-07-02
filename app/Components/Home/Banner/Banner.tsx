import leftSide from '../../../banner-imgs/left-grid.png'
import rightSide from '../../../banner-imgs/right-grid.png'

const Banner = () => {
    return (
        <div>
       <section className="relative bg-white overflow-hidden py-24">
        <div className='flex justify-between items-center absolute inset-0 z-0'>
          <img src={leftSide} alt="" />
          <img src={rightSide} alt="" />
        </div>
      <div className="relative z-10 text-center  mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Effortless <span className="text-purple-600">Social Media</span> Content,<br />
          Powered By AI.
        </h1>
        <p className="mt-4 text-gray-500">
          Generate captivating captions and hashtags with AI, then auto-publish to Instagram and <br /> Facebook. Save time, boost creativity, and grow your online presence.
        </p>
        <button className="mt-8 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#3D58EA] via-[#22499C] to-[#8A36EA]">
          Get Started
        </button>
      </div>
    </section>

        </div>
    );
};

export default Banner;