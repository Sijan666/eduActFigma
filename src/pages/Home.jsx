import Discover from "../components/sections/Discover"
import OurCategories from "../components/sections/OurCategories"
import OurService from "../components/sections/OurService"
import ServiceCounter from "../components/sections/ServiceCounter"
import { ProductDetails } from "./ProductDetails"




const Home = () => {
    return (
        <>
        <OurCategories/>
        <Discover/>
        <OurService/>
        <ServiceCounter/>
        <ProductDetails/>
        </>
    )
}

export default Home