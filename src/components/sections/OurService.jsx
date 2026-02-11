import React from "react";
import Commonh4 from "../Commonh4";
import Container from "../Container";
import Flex from "../Flex";
import Commonh3 from "../Commonh3";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const OurService = () => {
  return (
    <>
      <section className="OurService">
        <div className="pt-[119px] pb-[98px]">
          <div class="bg-[url('/src/assets/serviceBg.png')] py-[120px] bg-cover bg-no-repeat bg-center">
            <Container>
              <Flex
                className={"items-center gap-[15px] justify-center pb-[30px]"}
              >
                <Commonh4
                  commonh4={"Our Service"}
                  className={"font-Urbanist text-primary leading-[26px]"}
                />
                <div className="flex items-center gap-x-[5px]">
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.84 5.68L0 11.36V7.75L3.59 5.68L0 3.61V0L9.84 5.68Z"
                      fill="#F57005"
                    />
                  </svg>
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.84 5.68L0 11.36V7.75L3.59 5.68L0 3.61V0L9.84 5.68Z"
                      fill="#F57005"
                    />
                  </svg>
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.84 5.68L0 11.36V7.75L3.59 5.68L0 3.61V0L9.84 5.68Z"
                      fill="#F57005"
                    />
                  </svg>
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.84 5.68L0 11.36V7.75L3.59 5.68L0 3.61V0L9.84 5.68Z"
                      fill="#F57005"
                    />
                  </svg>
                </div>
              </Flex>
              <Commonh3
                commonh3={"Creating a Lifelong Learning Best Community "}
                className={
                  "font-Urbanist text-primaryTwo leading-[47px] w-[592px] mx-auto text-center"
                }
              />
              <Flex className={"gap-3.5 justify-end"}>
                <div className="h-10 w-10 bg-white rounded-sm flex justify-center items-center group hover:bg-primary duration-300  ">
                  <FaArrowLeftLong className="text-primary group-hover:text-white" />
                </div>
                <div className="h-10 w-10 bg-white rounded-sm flex justify-center items-center group hover:bg-primary duration-300">
                  <FaArrowRightLong className="text-primary group-hover:text-white" />
                </div>
              </Flex>
            </Container>
          </div>
        </div>
        ;
      </section>
    </>
  );
};

export default OurService;
