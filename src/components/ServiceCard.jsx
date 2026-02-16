import Images from "./Images";
import serviceCardBg from "../../src/assets/servicecardbg.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ServiceCard = ({ serviceCardImage, cardHeading, cardContent }) => {
  return (
    <>
      <div className="bg-white w-full max-w-[303px] relative shadow-newMade rounded-[10px] overflow-hidden group mx-auto">
        {/* Card Header Background */}
        <Images className={"relative w-full"} imgSrc={serviceCardBg} />
        {/* Round Shape */}
        <div className="absolute -top-[70px] left-1/2 -translate-x-1/2 w-[166px] h-[166px] bg-secondarys rounded-full group-hover:bg-primarys transition-colors duration-300"></div>
        {/* Service Icon/Image */}
        <Images
          className={"absolute top-[15px] left-1/2 -translate-x-1/2"}
          imgSrc={serviceCardImage}
        />
        {/* Content Section */}
        <div className="pt-[23px] text-center max-w-[215px] mx-auto ">
          <h5 className="font-bold text-[20px] text-primaryTwo pb-[30px]">
            {cardHeading}
          </h5>
          <p className="font-medium text-base text-[#697585] leading-[25px]">
            {cardContent}
          </p>
        </div>
        {/* Divider */}
        <div className="w-full border-b border-[#E4E4E4] mt-10"></div>
        {/* Button Section */}
        <div className="py-[30px] flex items-center gap-x-[9px] justify-center group-hover:bg-[#152B4A] transition-colors duration-300 cursor-pointer">
          <p className="font-bold text-base text-primaryTwo group-hover:text-white">
            Read More
          </p>
          <MdOutlineKeyboardArrowRight className="text-secondary text-[20px]" />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;