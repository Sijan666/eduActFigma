import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import aboutUs from "/src/assets/aboutUs.png";
import aboutUsIcon from "/src/assets/aboutUsRightIcon.png";
import aboutUsRight from "/src/assets/aboutUsRight.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <div className="aboutUs lg:my-30 my-15">
      <Container>
        <Flex className={"gap-x-[65px] flex flex-wrap lg:flex-nowrap"}>
          <div className="">
            <Images imgSrc={aboutUs} />
          </div>
          <div className="mx-auto lg:mx-0">
            <div className="flex items-center gap-x-2 pt-10 lg:pt-0">
              <h4 className="text-2xl text-primarys font-bold ">About Us</h4>
              <Images imgSrc={aboutUsIcon} className={"h-2.5 w-2.5"} />
            </div>
            <h3 className="text-primaryTwo text-[40px] font-bold lg:w-[630px] w-100 leading-11 mt-7">
              Establishing a community that encourages lifelong learning
            </h3>
            <p className="text-[#697585] text-base font-semibold lg:w-[642px] w-100 leading-6 my-10">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks
            </p>
            <Images imgSrc={aboutUsRight} className={"mx-auto"} />
            <div className="flex lg:gap-x-[65px] gap-x-3 mt-12">
              <div className="flex items-center lg:gap-x-3 gap-x-2">
                <IoIosCheckmarkCircle className="text-primarys text-[20px] font-bold" />
                <h4>Free Incoming method</h4>
              </div>
              <div className="flex items-center lg:gap-x-3 gap-x-2">
                <IoIosCheckmarkCircle className="text-secondarys text-[20px] font-bold" />
                <h4>Provide Best Support</h4>
              </div>
            </div>
            <div className="flex lg:gap-x-[65px] gap-x-4 mt-1 pb-12.5">
              <div className="flex items-center lg:gap-x-3 gap-x-2">
                <IoIosCheckmarkCircle className="text-secondarys text-[20px] font-bold" />
                <h4>Expert Many Teacher </h4>
              </div>
              <div className="flex items-center lg:gap-x-3 gap-x-2">
                <IoIosCheckmarkCircle className="text-primarys text-[20px] font-bold " />
                <h4>Lifetime access </h4>
              </div>
            </div>
            <Link to={"/"}>
              {/* <div className=" bg-primarys/79 text-white text-[18px] font-bold rounded-md w-[178px] ">
                <Button
                  btnText={
                    <>
                      Try for fee
                      <FaArrowRight />
                    </>
                  }
                  className={
                    "bg-primarys py-[19px] px-8 rounded-md w-[178px] clip-ss flex items-center gap-x-2"
                  }
                />
              </div> */}
              <button className="btnTwo">
                Try for fee
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Aboutus;
