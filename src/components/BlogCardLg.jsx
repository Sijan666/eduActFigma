import { FaArrowRight } from "react-icons/fa";
import Flex from "./Flex";
import { MdOutlineWatchLater } from "react-icons/md";

const BlogCardLg = () => {
  return (
    <div className="bg-[#152B4A] lg:h-[450px] h-[400px] lg:w-[868px] rounded-[14px] relative group mb-65 w-[90%]">
      <div className="absolute lg:w-[788px] w-[300px] bg-white -bottom-65 left-1/2 -translate-x-1/2 shadow-newMade p-7 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[50px] rounded-br-[50px]">
        <Flex className={"gap-x-5"}>
          <p className="text-sm text-white bg-primarys font-semibold py-2 px-2.5 rounded-[5px]">
            Development
          </p>
          <Flex className="lg:text-base text-sm text-[#697585] font-semibold gap-x-2">
            <MdOutlineWatchLater className="text-secondarys lg:text-2xl!" />
            26 Mar, 2023
          </Flex>
        </Flex>
        <h5 className="pt-6 lg:text-[32px] text-xl text-primaryTwo font-bold">
          The Complete Web Developer Guideline 2023
        </h5>
        <p className="text-[#697585] font-semibold text-base leading-[25px] py-6 w-[690px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteradution in some form by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going
        </p>
        <Flex className={"justify-between"}>
          <Flex>
            <div className="h-11 w-11 rounded-full bg-[#152B4A] mr-2.5"></div>
            <div className="">
              <p className="text-lg text-primaryTwo font-bold pb-.5">
                Darrell Steward
              </p>
              <p className="text-sm text-[#697585] font-medium tracking-[4%] uppercase">
                Fronted Developer
              </p>
            </div>
          </Flex>
          <div className="w-12.5 h-12.5 rounded-full bg-transparent group-hover:bg-secondarys border border-secondarys text-[#697585] group-hover:text-white duration-300 relative">
            <FaArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default BlogCardLg;
