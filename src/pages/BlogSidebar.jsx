import BlogCardLg from "@/components/BlogCardLg";
import Container from "@/components/Container";
import Flex from "@/components/Flex";
import { FaChevronRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaAnglesRight } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";

const BlogSidebar = () => {
  return (
    <>
      {/* Header part */}
      <div className="lg:pt-[174px] lg:pb-36 py-16 bg-black text-center text-white">
        <Container className="w-[390px] lg:w-330 mx-auto">
          <h3 className="font-bold text-[32px] lg:text-[50px] uppercase">Blog Sidebar</h3>
          <p className="text-lg lg:text-xl pt-4">Home / Blog</p>
        </Container>
      </div>
      {/* Header part */}
      {/* Product part */}
      <Container className="w-[390px] lg:w-330 mx-auto py-30">
        <Flex className={"flex-col lg:flex-row justify-between items-start gap-y-10"}>
          {/* Left Side: Blog Cards */}
          <div className="flex-col gap-y-9 flex w-full lg:w-auto">
            <BlogCardLg />
            <BlogCardLg />
            <BlogCardLg />
          </div>
          {/* Right Side: Sidebar */}
          <div className="w-full lg:w-[416px]">
            {/* Search */}
            <Flex className="bg-secondarys p-5 lg:p-7.5 w-full text-white gap-x-2 rounded-[7px] items-center">
              <IoSearch className="text-xl shrink-0" />
              <input
                type="text"
                placeholder="Type Here"
                className="bg-transparent placeholder:text-white placeholder:text-base w-full outline-none"
              />
            </Flex>
            {/* Search */}
            {/* Latest Post */}
            <div className="shadow-newMade bg-white p-5 lg:p-7.5 rounded-[14px] my-9">
              <h5 className="text-xl lg:text-2xl text-primaryTwo font-bold pb-6 border-b-2 border-dashed border-secondarys mb-7.5">
                Latest Post
              </h5>
              
              {/* Item 1 */}
              <Flex className="pb-7.5 border-b-2 border-[#E4E4E4] mb-7.5 gap-x-4 lg:gap-x-5">
                <div className="h-20 w-20 lg:h-[90px] lg:w-[90px] rounded-[6px] bg-[#152B4A] shrink-0"></div>
                <div className="">
                  <Flex className="text-xs lg:text-base text-[#697585] font-semibold gap-x-2 items-center">
                    <MdOutlineWatchLater className="text-secondarys text-lg lg:text-2xl" />
                    26 Mar, 2023
                  </Flex>
                  <p className="text-base lg:text-xl font-bold text-primaryTwo w-full lg:w-60 mt-1">
                    The Complete Web Developer Guideline 2023
                  </p>
                </div>
              </Flex>
              {/* Item 2 */}
              <Flex className="pb-7.5 border-b-2 border-[#E4E4E4] mb-7.5 gap-x-4 lg:gap-x-5">
                <div className="h-20 w-20 lg:h-[90px] lg:w-[90px] rounded-[6px] bg-[#152B4A] shrink-0"></div>
                <div className="">
                  <Flex className="text-xs lg:text-base text-[#697585] font-semibold gap-x-2 items-center">
                    <MdOutlineWatchLater className="text-secondarys text-lg lg:text-2xl" />
                    26 Mar, 2023
                  </Flex>
                  <p className="text-base lg:text-xl font-bold text-primaryTwo w-full lg:w-60 mt-1">
                    The Complete Web Developer Guideline 2023
                  </p>
                </div>
              </Flex>
              {/* Item 3 */}
              <Flex className="gap-x-4 lg:gap-x-5">
                <div className="h-20 w-20 lg:h-[90px] lg:w-[90px] rounded-[6px] bg-[#152B4A] shrink-0"></div>
                <div className="">
                  <Flex className="text-xs lg:text-base text-[#697585] font-semibold gap-x-2 items-center">
                    <MdOutlineWatchLater className="text-secondarys text-lg lg:text-2xl" />
                    26 Mar, 2023
                  </Flex>
                  <p className="text-base lg:text-xl font-bold text-primaryTwo w-full lg:w-60 mt-1">
                    The Complete Web Developer Guideline 2023
                  </p>
                </div>
              </Flex>
            </div>
            {/* Latest Post */}
            {/* Category */}
            <div className="shadow-newMade bg-white p-5 lg:p-7.5 rounded-[14px] my-9">
              <h5 className="text-xl lg:text-2xl text-primaryTwo font-bold pb-6 border-b-2 border-dashed border-secondarys mb-7.5">
                Categories
              </h5>
              
              <Flex className="pb-5 lg:pb-7.5 border-b-2 border-[#E4E4E4] mb-5 lg:mb-7.5 gap-x-3 items-center">
                <FaAnglesRight className="text-secondarys text-xl lg:text-2xl" />
                <p className="text-base lg:text-xl font-semibold text-[#697585]">
                  Web Development
                </p>
              </Flex>
              <Flex className="pb-5 lg:pb-7.5 border-b-2 border-[#E4E4E4] mb-5 lg:mb-7.5 gap-x-3 items-center">
                <FaAnglesRight className="text-secondarys text-xl lg:text-2xl" />
                <p className="text-base lg:text-xl font-semibold text-[#697585]">
                  Social Marketing
                </p>
              </Flex>
              <Flex className="pb-5 lg:pb-7.5 border-b-2 border-[#E4E4E4] mb-5 lg:mb-7.5 gap-x-3 items-center">
                <FaAnglesRight className="text-secondarys text-xl lg:text-2xl" />
                <p className="text-base lg:text-xl font-semibold text-[#697585]">
                  Technology
                </p>
              </Flex>
              <Flex className="pb-5 lg:pb-7.5 border-b-2 border-[#E4E4E4] mb-5 lg:mb-7.5 gap-x-3 items-center">
                <FaAnglesRight className="text-secondarys text-xl lg:text-2xl" />
                <p className="text-base lg:text-xl font-semibold text-[#697585]">
                  Business & Finance
                </p>
              </Flex>
              <Flex className="gap-x-3 items-center">
                <FaAnglesRight className="text-secondarys text-xl lg:text-2xl" />
                <p className="text-base lg:text-xl font-semibold text-[#697585]">
                  Digital Solution
                </p>
              </Flex>
            </div>
            {/* Category */}
            {/* Tags (First Box) */}
            <div className="shadow-newMade bg-white p-5 lg:p-7.5 rounded-[14px] my-9">
              <h5 className="text-xl lg:text-2xl text-primaryTwo font-bold pb-6 border-b-2 border-dashed border-secondarys mb-7.5">
                Tags
              </h5>
              <Flex className="gap-3 w-full flex-wrap">
                <p className="text-[#697585] text-sm lg:text-base font-semibold py-2 px-3 lg:py-3 lg:px-4 rounded-[5px] bg-[#F6F6F6]">
                  Marketing
                </p>
                <p className="text-[#697585] text-sm lg:text-base font-semibold py-2 px-3 lg:py-3 lg:px-4 rounded-[5px] bg-[#F6F6F6]">
                  Development
                </p>
                <p className="text-[#697585] text-sm lg:text-base font-semibold py-2 px-3 lg:py-3 lg:px-4 rounded-[5px] bg-[#F6F6F6]">
                  Design
                </p>
                <p className="text-[#697585] text-sm lg:text-base font-semibold py-2 px-3 lg:py-3 lg:px-4 rounded-[5px] bg-[#F6F6F6]">
                  Digital
                </p>
              </Flex>
            </div>
            {/* Tags */}
            {/* Comments (Previously labeled Tags) */}
            <div className="shadow-newMade bg-white p-5 lg:p-7.5 rounded-[14px] my-9">
              <h5 className="text-xl lg:text-2xl text-primaryTwo font-bold pb-6 border-b-2 border-dashed border-secondarys mb-7.5">
                Recent Comments
              </h5>
              
              <Flex className="gap-x-3 group mb-7.5 items-start">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full group-hover:bg-secondarys bg-[#F6F6F6] text-primaryTwo text-lg lg:text-xl group-hover:text-white duration-300 relative shrink-0">
                  <LuMessageCircleMore className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
                </div>
                <p className="text-[#697585] text-sm lg:text-base font-semibold w-full lg:w-[280px] leading-[22px] lg:leading-[25px]">
                  There are many variations of Lorem available Here
                </p>
              </Flex>
              <Flex className="gap-x-3 group mb-7.5 items-start">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full group-hover:bg-secondarys bg-[#F6F6F6] text-primaryTwo text-lg lg:text-xl group-hover:text-white duration-300 relative shrink-0">
                  <LuMessageCircleMore className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
                </div>
                <p className="text-[#697585] text-sm lg:text-base font-semibold w-full lg:w-[280px] leading-[22px] lg:leading-[25px]">
                  There are many variations of Lorem available Here
                </p>
              </Flex>
              <Flex className="gap-x-3 group mb-7.5 items-start">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full group-hover:bg-secondarys bg-[#F6F6F6] text-primaryTwo text-lg lg:text-xl group-hover:text-white duration-300 relative shrink-0">
                  <LuMessageCircleMore className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
                </div>
                <p className="text-[#697585] text-sm lg:text-base font-semibold w-full lg:w-[280px] leading-[22px] lg:leading-[25px]">
                  There are many variations of Lorem available Here
                </p>
              </Flex>
              <Flex className="gap-x-3 group items-start">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full group-hover:bg-secondarys bg-[#F6F6F6] text-primaryTwo text-lg lg:text-xl group-hover:text-white duration-300 relative shrink-0">
                  <LuMessageCircleMore className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
                </div>
                <p className="text-[#697585] text-sm lg:text-base font-semibold w-full lg:w-[280px] leading-[22px] lg:leading-[25px]">
                  There are many variations of Lorem available Here
                </p>
              </Flex>
            </div>
            {/* Comments */}
          </div>
        </Flex>
        {/* Pagination */}
        <Flex className="mt-10 lg:mt-[60px] mb-15 lg:mb-25 gap-x-4 justify-center lg:justify-start">
          <div className="text-primaryTwo h-10 w-10 rounded-[10px] text-xl font-semibold hover:border-secondarys hover:bg-secondarys hover:text-white duration-300 cursor-pointer border-2 border-[#E4E4E4] relative">
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              1
            </p>
          </div>
          <div className="text-primaryTwo h-10 w-10 rounded-[10px] text-xl font-semibold hover:border-secondarys hover:bg-secondarys hover:text-white duration-300 cursor-pointer border-2 border-[#E4E4E4] relative">
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              2
            </p>
          </div>
          <div className="text-primaryTwo h-10 w-10 rounded-[10px] text-sm font-semibold hover:border-secondarys hover:bg-secondarys hover:text-white duration-300 cursor-pointer border-2 border-[#E4E4E4] relative">
            <FaChevronRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </Flex>
        {/* Pagination */}
      </Container>
      {/* Product part */}
    </>
  );
};

export default BlogSidebar;