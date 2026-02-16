
import Banner from "../components/sections/Banner";
import OurCategories from "../components/sections/OurCategories";
import Discover from "../components/sections/Discover";
import Aboutus from "../components/sections/Aboutus";
import OurService from "../components/sections/OurService";
import Subscribe from "@/components/sections/Subscribe";
import Blog from "@/components/sections/Blog";
import OurTeam from "@/components/sections/OurTeam";
import Testimonial from "@/components/sections/Testimonial";
import ServiceCounter from "@/components/sections/ServiceCounter";
import Course from "@/components/sections/Course";

const Home = () => {
        return (
        <>
        <Banner />
        <Aboutus/>
        <OurService/>
        <ServiceCounter/>
        <Course/>
        <OurCategories />
        <Discover />
        <OurTeam/>
        <Testimonial/>
        <Blog/>
        <Subscribe/>
        </>
        );
};

export default Home