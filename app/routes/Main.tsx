import Banner from "~/Components/Home/Banner/Banner"
import FAQ from "~/Components/Home/FAQ/FAQ"
import Footer from "~/Components/Home/Footer/Footer"
import GettingStarted from "~/Components/Home/Getting-Started/GettingStarted"
import HowWork from "~/Components/Home/How-Work/HowWork"
import KeyFeatures from "~/Components/Home/KeyFeatures/KeyFeatures"
import NavBar from "~/Components/Home/Navigation/NavBar"
import Platform from "~/Components/Home/Platform/Platform"
import Pricing from "~/Components/Home/Pricing/Pricing"
import SocialMedia from "~/Components/Home/SocialMedia/SocialMedia"
import Reviews from "~/Components/Home/UserSays/Reviews"

const Main = () => {
    return (
        <div className="font-Montserrat">
            <NavBar />
            <Banner />
            <HowWork />
            <KeyFeatures/>
            <Platform />
            <GettingStarted />
            <Reviews />
            <Pricing />
            <FAQ />
            <SocialMedia />
           <Footer />
           
        </div>
    )
}

export default Main