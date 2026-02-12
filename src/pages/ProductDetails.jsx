import React from "react";
import Commonh3 from "../components/Commonh3";
import Flex from "../components/Flex";
import Container from "../components/Container";
import Images from "../components/Images";
import productImg from "../../src/assets/productImg.png";
import { FaStar } from "react-icons/fa6";

export const ProductDetails = () => {
  return (
    <section className="productDetails">
      <>
        <div>
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
          {/* Product Details Start */}
          <Container>
            <Flex className={"py-[120px] px-10 gap-[66px] items-start"}>
              <div className="">
                <Images imgSrc={productImg} />
              </div>
              <div className="">
                <div className="flex items-center gap-x-20 mb-[30px]">
                  <h5 className="font-Urbanist font-bold text-[32px] text-primaryTwo leading-[47px]">
                    Boss Sofa
                  </h5>
                  <p className="font-Urbanist font-bold text-[20px] text-[#F57005] leading-[26px]">
                    $10.33{" "}
                  </p>
                </div>
                <div className="flex items-center gap-x-6">
                  <div className="flex gap-x-1">
                    <FaStar className="text-[20px] text-secondary" />
                    <FaStar className="text-[20px] text-secondary" />
                    <FaStar className="text-[20px] text-secondary" />
                    <FaStar className="text-[20px] text-secondary" />
                    <FaStar className="text-[20px] text-secondary" />
                  </div>
                  <p className="font-Urbanist font-bold text-[20px] text-[#697585] leading-[26px]">2 Customer Review</p>
                </div>
                <div className="w-[529px] border-b border-[#E4E4E4] mt-10"></div>
              </div>
            </Flex>
          </Container>
          {/* Product Details End */}
        </div>
      </>
    </section>
  );
};
