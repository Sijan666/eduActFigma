import Container from "../Container";
import Flex from "../Flex";
import { FaAngleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
  return (
    <div className="mt-30">
      <Container>
        {/* Header part */}
        <Flex
          className={"gap-x-2 text-2xl text-primary font-bold justify-center"}
        >
          Latest Blog
          <Flex className="text-base text-secondary">
            <FaAngleRight />
            <FaAngleRight />
            <FaAngleRight />
            <FaAngleRight />
          </Flex>
        </Flex>
        <h3 className="text-[#2A254D] text-[40px] font-bold mt-5 mb-20 text-center">
          Latest Updates & Articles
        </h3>
        {/* Header part */}
        <Flex className={"gap-x-9"}>
          {/* Product One */}
          <div className="bg-[#152B4A] h-[488px] w-[416px] rounded-[14px] relative group">
            <div className="absolute w-[357px] bg-white -bottom-20 left-1/2 -translate-x-1/2 shadow-newMade p-7 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[50px] rounded-br-[50px]">
              <Flex className={"gap-x-25"}>
                <p className="text-sm text-white bg-primary font-semibold py-2 px-2.5 rounded-[5px]">
                  Development
                </p>
                <p className="text-base text-secondary font-semibold">
                  26 Mar, 2023
                </p>
              </Flex>
              <h5 className="py-6 text-2xl text-[#2A254D] font-bold">
                The Complete Web Developer Guideline 2023
              </h5>
              <Flex className={"justify-between"}>
                <div className="flex items-center">
                  <div className="h-11 w-11 rounded-full bg-[#152B4A] mr-2.5"></div>
                  <div className="">
                    <p className="text-base text-[#2A254D] font-bold pb-1">
                      Darrell Steward
                    </p>
                    <p className="text-xs text-[#697585] font-medium tracking-[4%] uppercase">
                      Fronted Developer
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-transparent group-hover:bg-secondary border border-secondary text-[#697585] group-hover:text-white duration-300 relative">
                  <FaArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
              </Flex>
            </div>
          </div>
          {/* Product One */}
          {/* Product Two */}
          <div className="bg-[#152B4A] h-[488px] w-[416px] rounded-[14px] relative group">
            <div className="absolute w-[357px] bg-white -bottom-20 left-1/2 -translate-x-1/2 shadow-newMade p-7 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[50px] rounded-br-[50px]">
              <Flex className={"gap-x-25"}>
                <p className="text-sm text-white bg-primary font-semibold py-2 px-2.5 rounded-[5px]">
                  Development
                </p>
                <p className="text-base text-secondary font-semibold">
                  26 Mar, 2023
                </p>
              </Flex>
              <h5 className="py-6 text-2xl text-[#2A254D] font-bold">
                The Complete Web Developer Guideline 2023
              </h5>
              <Flex className={"justify-between"}>
                <div className="flex items-center">
                  <div className="h-11 w-11 rounded-full bg-[#152B4A] mr-2.5"></div>
                  <div className="">
                    <p className="text-base text-[#2A254D] font-bold pb-1">
                      Darrell Steward
                    </p>
                    <p className="text-xs text-[#697585] font-medium tracking-[4%] uppercase">
                      Fronted Developer
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-transparent group-hover:bg-secondary border border-secondary text-[#697585] group-hover:text-white duration-300 relative">
                  <FaArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
              </Flex>
            </div>
          </div>
          {/* Product Two */}
          {/* Product Thr */}
          <div className="bg-[#152B4A] h-[488px] w-[416px] rounded-[14px] relative group">
            <div className="absolute w-[357px] bg-white -bottom-20 left-1/2 -translate-x-1/2 shadow-newMade p-7 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[50px] rounded-br-[50px]">
              <Flex className={"gap-x-25"}>
                <p className="text-sm text-white bg-primary font-semibold py-2 px-2.5 rounded-[5px]">
                  Development
                </p>
                <p className="text-base text-secondary font-semibold">
                  26 Mar, 2023
                </p>
              </Flex>
              <h5 className="py-6 text-2xl text-[#2A254D] font-bold">
                The Complete Web Developer Guideline 2023
              </h5>
              <Flex className={"justify-between"}>
                <div className="flex items-center">
                  <div className="h-11 w-11 rounded-full bg-[#152B4A] mr-2.5"></div>
                  <div className="">
                    <p className="text-base text-[#2A254D] font-bold pb-1">
                      Darrell Steward
                    </p>
                    <p className="text-xs text-[#697585] font-medium tracking-[4%] uppercase">
                      Fronted Developer
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-transparent group-hover:bg-secondary border border-secondary text-[#697585] group-hover:text-white duration-300 relative">
                  <FaArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
              </Flex>
            </div>
          </div>
          {/* Product Thr */}
        </Flex>
      </Container>
    </div>
  );
};

export default Blog;
