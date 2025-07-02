import Banner from "~/Components/Home/Banner/Banner"
import HowWork from "~/Components/Home/How-Work/HowWork"
import NavBar from "~/Components/Navigation/NavBar"

const Main = () => {
    return (
        <div className="font-Montserrat">
            <NavBar />
            <Banner />
            <HowWork />
           
           
        </div>
    )
}

export default Main