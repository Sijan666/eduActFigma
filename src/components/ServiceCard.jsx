import React from "react";
import Images from "./Images";
import servicecardbg from "../../src/assets/servicecardbg.png";
import servicecardround from "../../src/assets/servicecardround.png";
import education from "../../src/assets/serviceEducation.png";
import Container from "./Container";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ServiceCard = () => {
  return (
    <>
      <Container>
        <div className="pb-[30px] bg-white max-w-[303px] relative shadow-newMade rounded-[10px] overflow-hidden">
          <Images className={"relative"} imgSrc={servicecardbg} />
          <Images
            className={"absolute top-0 left-1/2 -translate-x-1/2"}
            imgSrc={servicecardround}
          />
          <Images
            className={"absolute top-[18px] left-1/2 -translate-x-1/2"}
            imgSrc={education}
          />
          <div className="pt-[23px] text-center max-w-[215px] mx-auto ">
            <h5 className="font-Urbanist font-bold text-[20px] text-primaryTwo pb-[30px]">
              Exclusive Coach
            </h5>
            <p className="font-Urbanist font-medium text-base text-[#697585] leading-[25px]">
              Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id
              hendrerit{" "}
            </p>
          </div>
          <div className="w-full border-b border-[#E4E4E4] mt-10 mb-[30px]"></div>
          <div className="flex items-center gap-x-[9px] justify-center">
            <p className="font-Urbanist font-bold text-base text-primaryTwo ">Read More</p>
            <MdOutlineKeyboardArrowRight className="text-[#F57005] text-[20px]" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ServiceCard;
