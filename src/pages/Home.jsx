import Discover from "../components/sections/Discover"
import OurCategories from "../components/sections/OurCategories"
import OurService from "../components/sections/OurService"
import ServiceCard from "../components/ServiceCard"



const Home = () => {
    return (
        <>
        <OurCategories/>
        <Discover/>
        <OurService/>
        <ServiceCard/>
        </>
    )
}

export default Home