import Banner from "~/Components/Home/Banner/Banner"
import HowWork from "~/Components/Home/How-Work/HowWork"
import KeyFeatures from "~/Components/KeyFeatures/KeyFeatures"
import NavBar from "~/Components/Navigation/NavBar"
import Platform from "~/Components/Platform/Platform"

const Main = () => {
    return (
        <div className="font-Montserrat">
            <NavBar />
            <Banner />
            <HowWork />
            <KeyFeatures/>
            <Platform />
           
           
        </div>
    )
}

export default Main