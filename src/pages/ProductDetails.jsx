import React, { useState } from "react";
import Commonh3 from "../components/Commonh3";
import Flex from "../components/Flex";
import Container from "../components/Container";
import Images from "../components/Images";
import productImg from "../../src/assets/productImg.png";
import { FaStar } from "react-icons/fa6";
import Button from "../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Commonh4 from "../components/Commonh4";
import { IoIosCheckmarkCircle } from "react-icons/io";
import reviewImg from "../../src/assets/reviewimg.png";

export const ProductDetails = () => {

const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <section className="productDetails">
      <>
        <div className="mb-[120px]">
          {/* Products Details Header Start */}
          <div className="bg-[#000000] pt-[174px] pb-[154px] text-center">
            <Commonh3
              commonh3={"Product Details"}
              className={
                "uppercase font-Urbanist font-bold text-[50px] text-white leading-[47px]"
              }
            />
            <p
              className={
                "font-Urbanist font-normal text-[20px] text-white leading-[47px]"
              }
            >
              Home/Shop
            </p>
          </div>
          {/* Products Details Header End */}
          <Container>
            {/* Product Details Start */}
            <Flex className={"py-[120px] gap-[66px] items-start flex flex-wrap lg:flex-nowrap"}>
              <div className="mt-5">
                <Images imgSrc={productImg} />
              </div>
              <div className="w-[390px] lg:w-1/2">
                <div className="flex items-center lg:gap-x-20 justify-between lg:justify-normal  mb-[25px]">
                  <h5 className="font-bold text-[32px] text-primaryTwo leading-[47px]">
                    Boss Sofa
                  </h5>
                  <p className="font-bold text-[20px] text-secondarys leading-[26px]">
                    $10.33{" "}
                  </p>
                </div>
                <div className="flex items-center justify-between lg:justify-normal gap-x-6">
                  <div className="flex gap-x-1">
                    <FaStar className="text-[20px] text-secondarys" />
                    <FaStar className="text-[20px] text-secondarys" />
                    <FaStar className="text-[20px] text-secondarys" />
                    <FaStar className="text-[20px] text-secondarys" />
                    <FaStar className="text-[20px] text-secondarys" />
                  </div>
                  <p className="font-Urbanist font-bold text-[20px] text-[#697585] leading-[26px]">
                    2 Customer Review
                  </p>
                </div>
                <div className="lg:w-[529px] border-b border-[#E4E4E4] my-7"></div>
                <p className="lg:w-[510px] font-Urbanist font-semibold text-base text-[#697585] leading-8">
                  Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam
                  nec eros id magna hendrerit sagittis. Nullam sed mi non odio
                  feugiat volutpat sit amet nec elit. Maecenas id hendrerit
                  ipsum.{" "}
                </p>
                <p className="font-Urbanist font-semibold text-[20px] text-[#697585] leading-[26px] pt-5 pb-3.5">
                  REF. 305/639
                </p>
                <p className="font-Urbanist font-semibold text-[20px] text-secondarys leading-[26px]">
                  In stock
                </p>
                <div className="flex gap-[30px] items-center mt-5">
                  <p className="font-Urbanist font-bold text-[20px] text-primaryTwo leading-[26px]">
                    Quantity
                  </p>
                  <div className="flex items-center border-2 border-[#E4E4E4] rounded-[10px]">
                    <button onClick={handleDecrement} className="w-13 h-11 flex items-center justify-center cursor-pointer">
                      <span className="text-[23px] text-primaryTwo">–</span>
                    </button>
                    <div className="w-18 h-11 flex items-center justify-center border-x-2 border-[#E4E4E4]">
                      <span className="font-Urbanist font-bold text-[20px] text-primaryTwo">
                        {count}
                      </span>
                    </div>
                    <button onClick={handleIncrement} className="w-13 h-11 flex items-center justify-center cursor-pointer">
                      <span className="text-[23px] text-primaryTwo">+</span>
                    </button>
                  </div>
                </div>
                {/* btn */}
                <div className="flex flex-wrap lg:flex-nowrap gap-5 my-10 justify-center lg:justify-normal">
                  <div className="relative text-center lg:text-left cursor-pointer">
                    <Button
                      btnText={"Add to Wishlist"}
                      className={
                        "py-[19px] pl-8 pr-[52px] bg-primaryTwo rounded-md text-white text-[18px] font-bold relative"
                      }
                    />
                    <FaArrowRightLong className="font-bold text-white absolute top-1/2 right-[12%] -translate-y-1/2" />
                  </div>
                  <div className="relative text-center lg:text-left cursor-pointer">
                    <Button
                      btnText={"Add to Cart"}
                      className={
                        "py-[19px] pl-8 pr-[52px] bg-secondarys rounded-md text-white text-[18px] font-bold relative"
                      }
                    />
                    <FaArrowRightLong className="font-bold text-white absolute top-1/2 right-[14%] -translate-y-1/2" />
                  </div>
                </div>
                {/* btn */}
                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal gap-[60px] items-center">
                  <p className="font-Urbanist font-bold text-[20px] text-primaryTwo leading-[26px]">
                    Share with friend
                  </p>
                  <div className="flex gap-[21px]">
                    <div className="w-10 h-10 bg-[#F6F6F6] rounded-[50%] flex justify-center items-center">
                      <FaFacebookF className="text-[20px] text-primaryTwo" />
                    </div>
                    <div className="w-10 h-10 bg-[#F6F6F6] rounded-[50%] flex justify-center items-center">
                      <FaLinkedinIn className="text-[20px] text-primaryTwo" />
                    </div>
                    <div className="w-10 h-10 bg-[#F6F6F6] rounded-[50%] flex justify-center items-center">
                      <FaTwitter className="text-[20px] text-primaryTwo" />
                    </div>
                    <div className="w-10 h-10 bg-[#F6F6F6] rounded-[50%] flex justify-center items-center">
                      <FaYoutube className="text-[20px] text-primaryTwo" />
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
            {/* Product Details End */}
            {/* Description Start */}
            <Commonh4
              commonh4={"Description"}
              className={
                "font-Urbanist font-bold text-[32px] text-primaryTwo leading-[47px]"
              }
            />
            <p className="font-Urbanist font-bold text-base text-[#697585] leading-8 tracking-[2%] lg:w-7xl my-10">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Vestibulum sollicitudin varius
              mauris non dignissim. Sed quis iaculis est. Nulla quam neque,
              interdum vitae fermentum lacinia, interdum eu magna. Mauris non
              posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl
              bibendum accumsan vitae vitae nibh. Nam nec eros id magna
              hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit
              amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus,
              ac dapibus dolor
            </p>
            <div className="">
              <div className="flex items-center gap-x-[13px]">
                <IoIosCheckmarkCircle className="text-[24px] text-secondarys" />
                <p className="font-Urbanist font-bold lg:text-[20px] text-base text-primaryTwo leading-[47px]">
                  Nibh. Nam nec eros id magna hendrerit s
                </p>
              </div>
              <div className="flex items-center gap-x-[13px]">
                <IoIosCheckmarkCircle className="text-[24px] text-secondarys" />
                <p className="font-Urbanist font-bold lg:text-[20px] text-base text-primaryTwo leading-[47px]">
                  Vitae nibh. Nam nec eros id magna hendrerit s
                </p>
              </div>
              <div className="flex items-center gap-x-[13px]">
                <IoIosCheckmarkCircle className="text-[24px] text-secondarys" />
                <p className="font-Urbanist font-bold lg:text-[20px] text-base text-primaryTwo leading-[47px]">
                  Nam nec eros id magna hendrerit s
                </p>
              </div>
            </div>
            {/* Description End */}
            {/* Review Part Start */}
            <div className="w-full border-b border-[#E4E4E4] my-[60px]"></div>
            <p className="font-Urbanist font-bold text-[24px] text-primaryTwo leading-[47px]">
              2 Reviews
            </p>
            <div className="pt-[60px] pb-20">
              <div className="pb-[60px] border-b border-[#E4E4E4] flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal items-center gap-[30px]">
                <Images imgSrc={reviewImg} />
                <div className="">
                  <div className="flex lg:gap-[900px] justify-between lg:justify-normal mb-5">
                    <div className="">
                      <p className="font-Urbanist font-bold text-[24px] text-primaryTwo leading-[26px]">
                        David Shon
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-[20px] text-secondarys" />
                      <FaStar className="text-[20px] text-secondarys" />
                      <FaStar className="text-[20px] text-secondarys" />
                      <FaStar className="text-[20px] text-secondarys" />
                      <FaStar className="text-[20px] text-secondarys" />
                    </div>
                  </div>
                  <p className="font-Urbanist font-bold text-base text-[#697585] leading-8 tracking-[2%] lg:w-[1100px]">
                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
                    Nam nec eros id magna hendrerit sagittis. Nullam sed mi non
                    odio feugiat volutpat sit amet nec elit. Maecenas id
                    hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor.
                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
                    Nam nec eros id magna hendrerit sagittis. Nullam sed mi non
                    odio feugiat volutpat sit
                  </p>
                </div>
              </div>
              <div className="py-15 border-b border-[#E4E4E4] flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal items-center gap-[30px]">
                <Images imgSrc={reviewImg} />
                <div className="">
                  <div className="flex lg:gap-[900px] justify-between lg:justify-normal mb-5">
                    <div className="">
                      <p className="font-Urbanist font-bold text-[24px] text-primaryTwo leading-[26px]">
                        David Shon
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-[20px] text-secondarys" />
                      <FaStar className="text-[20px] text-secondarys" />
                      <FaStar className="text-[20px] text-secondarys" />
                      <FaStar className="text-[20px] text-secondarys" />
                      <FaStar className="text-[20px] text-secondarys" />
                    </div>
                  </div>
                  <p className="font-Urbanist font-bold text-base text-[#697585] leading-8 tracking-[2%] lg:w-[1100px]">
                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
                    Nam nec eros id magna hendrerit sagittis. Nullam sed mi non
                    odio feugiat volutpat sit amet nec elit. Maecenas id
                    hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor.
                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
                    Nam nec eros id magna hendrerit sagittis. Nullam sed mi non
                    odio feugiat volutpat sit
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <p className="font-Urbanist font-bold text-[24px] text-primaryTwo leading-[47px]">
                Add a Review
              </p>
              <div className="flex items-center gap-4 py-10">
                <p className="font-Urbanist font-semibold text-[20px] text-[#697585] leading-[26px]">
                  Rate this Product
                </p>
                <div className="flex gap-x-1">
                  <FaStar className="text-[20px] text-secondarys" />
                  <FaStar className="text-[20px] text-secondarys" />
                  <FaStar className="text-[20px] text-secondarys" />
                  <FaStar className="text-[20px] text-secondarys" />
                  <FaStar className="text-[20px] text-secondarys" />
                </div>
              </div>
              <div className="mb-[50px]">
                <div className="lg:space-x-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="py-[25px] px-[30px] w-full lg:w-[650px] bg-[#F6F6F6] rounded-sm outline-0 font-Urbanist font-bold text-base text-[#697585] leading-[26px]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="py-[25px] px-[30px] mt-5 lg:mt-0 w-full lg:w-[650px] bg-[#F6F6F6] rounded-sm outline-0 font-Urbanist font-bold text-base text-[#697585] leading-[26px]"
                  />
                </div>
                <textarea
                  name=""
                  id=""
                  placeholder="Write a Message"
                  className="mt-5 pl-[30px] pt-6 bg-[#F6F6F6] w-full rounded-sm outline-0 font-Urbanist font-bold text-base text-[#697585] leading-[26px]"
                  rows={8}
                  cols={127}
                ></textarea>
              </div>
              <div className="relative text-center lg:text-left cursor-pointer">
                <Button
                  btnText={"Leave a Review"}
                  className={
                    "py-[19px] pl-8 pr-[52px] bg-secondarys rounded-md text-white text-[18px] font-bold relative"
                  }
                />
                <FaArrowRightLong className="font-bold text-white absolute top-1/2 left-[13%] -translate-y-1/2" />
              </div>
            </div>
            {/* Review Part Start */}
          </Container>
        </div>
      </>
    </section>
  );
};

export default ProductDetails;
