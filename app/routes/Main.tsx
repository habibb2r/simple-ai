import Banner from "~/Components/Home/Banner/Banner";
import FAQ from "~/Components/Home/FAQ/FAQ";
import Footer from "~/Components/Home/Footer/Footer";
import GettingStarted from "~/Components/Home/Getting-Started/GettingStarted";
import HowWork from "~/Components/Home/How-Work/HowWork";
import KeyFeatures from "~/Components/Home/KeyFeatures/KeyFeatures";
import NavBar from "~/Components/Home/Navigation/NavBar";
import Platform from "~/Components/Home/Platform/Platform";
import Pricing from "~/Components/Home/Pricing/Pricing";
import SocialMedia from "~/Components/Home/SocialMedia/SocialMedia";
import Reviews from "~/Components/Home/UserSays/Reviews";


const Main = () => {
  return (
    <div className="font-Montserrat">
      <NavBar />
      <Banner />
      <div className="relative  bg-[url('./banner-imgs/back.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="relative z-20">
          <HowWork />
          <KeyFeatures />
          <Platform />
          <GettingStarted />
        </div>
      </div>

      <Reviews />

      <div className="relative  bg-[url('./banner-imgs/back.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="relative z-20">
          <Pricing />
          <FAQ />
        </div>
      </div>

      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Main;
