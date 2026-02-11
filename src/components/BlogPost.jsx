import { FaArrowRight } from "react-icons/fa";
import Flex from "./Flex";

const BlogPost = () => {
  return (
    <div className="bg-[#152B4A] lg:h-[488px] h-[400px] lg:w-[416px] rounded-[14px] relative group mb-20 w-[90%]">
      <div className="absolute lg:w-[357px] w-[300px] bg-white -bottom-20 left-1/2 -translate-x-1/2 shadow-newMade p-7 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[50px] rounded-br-[50px]">
        <Flex className={"justify-between"}>
          <p className="text-sm text-white bg-primary font-semibold py-2 px-2.5 rounded-[5px]">
            Development
          </p>
          <p className="lg:text-base text-sm text-secondary font-semibold">
            26 Mar, 2023
          </p>
        </Flex>
        <h5 className="py-6 lg:text-2xl text-xl text-[#2A254D] font-bold">
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
  );
};

export default BlogPost;
