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
      <div className="lg:pt-[174px] lg:pb-36 py-25 mb-30 bg-black text-center text-white">
        <Container>
          <h3 className="font-bold text-[50px] uppercase">Blog Sidebar</h3>
          <p className="text-xl pt-4">Home / Blog</p>
        </Container>
      </div>
      {/* Header part */}
      {/* Product part */}
      <Container>
        <Flex className={"justify-between items-start"}>
          <div className="flex-col gap-y-9 flex">
            <BlogCardLg />
            <BlogCardLg />
            <BlogCardLg />
          </div>
          <div className="">
            {/* Search */}
            <Flex className="bg-secondarys p-7.5 w-[416px] text-white gap-x-2 rounded-[7px]">
              <IoSearch className="text-xl" />
              <input
                type="text"
                placeholder="Type Here"
                className=" placeholder:text-white placeholder:text-base w-[300px] outline-none"
              />
            </Flex>
            {/* Search */}
            {/* Latest Post */}
            <div className="shadow-newMade bg-white p-7.5 rounded-[14px] my-9">
              <h5 className="text-2xl text-primaryTwo font-bold pb-7.5 border-b-2 border-dashed border-secondarys mb-7.5">
                Latest Post
              </h5>
              <Flex className="pb-7.5 border-b-2 border-[#E4E4E4] mb-7.5 gap-x-5">
                <div className="h-[90px] w-[90px] rounded-[6px] bg-[#152B4A]"></div>
                <div className="">
                  <Flex className="lg:text-base text-sm text-[#697585] font-semibold gap-x-2">
                    <MdOutlineWatchLater className="text-secondarys lg:text-2xl!" />
                    26 Mar, 2023
                  </Flex>
                  <p className="text-xl font-bold text-primaryTwo w-60">
                    The Complete Web Developer Guideline 2023
                  </p>
                </div>
              </Flex>
              <Flex className="pb-7.5 border-b-2 border-[#E4E4E4] mb-7.5 gap-x-5">
                <div className="h-[90px] w-[90px] rounded-[6px] bg-[#152B4A]"></div>
                <div className="">
                  <Flex className="lg:text-base text-sm text-[#697585] font-semibold gap-x-2">
                    <MdOutlineWatchLater className="text-secondarys lg:text-2xl!" />
                    26 Mar, 2023
                  </Flex>
                  <p className="text-xl font-bold text-primaryTwo w-60">
                    The Complete Web Developer Guideline 2023
                  </p>
                </div>
              </Flex>
              <Flex className="gap-x-5">
                <div className="h-[90px] w-[90px] rounded-[6px] bg-[#152B4A]"></div>
                <div className="">
                  <Flex className="lg:text-base text-sm text-[#697585] font-semibold gap-x-2">
                    <MdOutlineWatchLater className="text-secondarys lg:text-2xl!" />
                    26 Mar, 2023
                  </Flex>
                  <p className="text-xl font-bold text-primaryTwo w-60">
                    The Complete Web Developer Guideline 2023
                  </p>
                </div>
              </Flex>
            </div>
            {/* Latest Post */}
            {/* Category */}
            <div className="shadow-newMade bg-white p-7.5 rounded-[14px] my-9">
              <h5 className="text-2xl text-primaryTwo font-bold pb-7.5 border-b-2 border-dashed border-secondarys mb-7.5">
                Categories
              </h5>
              <Flex className="pb-7.5 border-b-2 border-[#E4E4E4] mb-7.5 gap-x-3">
                <FaAnglesRight className="text-secondarys text-2xl" />
                <p className="text-xl font-semibold text-[#697585]">
                  Web Development
                </p>
              </Flex>
              <Flex className="pb-7.5 border-b-2 border-[#E4E4E4] mb-7.5 gap-x-3">
                <FaAnglesRight className="text-secondarys text-2xl" />
                <p className="text-xl font-semibold text-[#697585]">
                  Social Marketing
                </p>
              </Flex>
              <Flex className="pb-7.5 border-b-2 border-[#E4E4E4] mb-7.5 gap-x-3">
                <FaAnglesRight className="text-secondarys text-2xl" />
                <p className="text-xl font-semibold text-[#697585]">
                  Technology
                </p>
              </Flex>
              <Flex className="pb-7.5 border-b-2 border-[#E4E4E4] mb-7.5 gap-x-3">
                <FaAnglesRight className="text-secondarys text-2xl" />
                <p className="text-xl font-semibold text-[#697585]">
                  Business & Finance
                </p>
              </Flex>
              <Flex className="gap-x-3">
                <FaAnglesRight className="text-secondarys text-2xl" />
                <p className="text-xl font-semibold text-[#697585]">
                  Digital Solution
                </p>
              </Flex>
            </div>
            {/* Category */}
            {/* Tags */}
            <div className="shadow-newMade bg-white p-7.5 rounded-[14px] my-9">
              <h5 className="text-2xl text-primaryTwo font-bold pb-7.5 border-b-2 border-dashed border-secondarys mb-7.5">
                Tags
              </h5>
              <Flex className="gap-3 w-[350px] flex-wrap ">
                <p className="text-[#697585] text-base font-semibold py-3 px-4 rounded-[5px] bg-[#F6F6F6]">
                  Marketing
                </p>
                <p className="text-[#697585] text-base font-semibold py-3 px-4 rounded-[5px] bg-[#F6F6F6]">
                  Development
                </p>
                <p className="text-[#697585] text-base font-semibold py-3 px-4 rounded-[5px] bg-[#F6F6F6]">
                  Design
                </p>
                <p className="text-[#697585] text-base font-semibold py-3 px-4 rounded-[5px] bg-[#F6F6F6]">
                  Digital
                </p>
              </Flex>
            </div>
            {/* Tags */}
            {/* Comments */}
            <div className="shadow-newMade bg-white p-7.5 rounded-[14px] my-9">
              <h5 className="text-2xl text-primaryTwo font-bold pb-7.5 border-b-2 border-dashed border-secondarys mb-7.5">
                Tags
              </h5>
              <Flex className="gap-x-3 group mb-7.5">
                <div className="w-12 h-12 rounded-full group-hover:bg-secondarys bg-[#F6F6F6] text-primaryTwo text-xl group-hover:text-white duration-300 relative">
                  <LuMessageCircleMore className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
                </div>
                <p className="text-[#697585] text-base font-semibold w-[280px] leading-[25px]">
                  There are many variations of Lorem available Here
                </p>
              </Flex>
              <Flex className="gap-x-3 group mb-7.5">
                <div className="w-12 h-12 rounded-full group-hover:bg-secondarys bg-[#F6F6F6] text-primaryTwo text-xl group-hover:text-white duration-300 relative">
                  <LuMessageCircleMore className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
                </div>
                <p className="text-[#697585] text-base font-semibold w-[280px] leading-[25px]">
                  There are many variations of Lorem available Here
                </p>
              </Flex>
              <Flex className="gap-x-3 group mb-7.5">
                <div className="w-12 h-12 rounded-full group-hover:bg-secondarys bg-[#F6F6F6] text-primaryTwo text-xl group-hover:text-white duration-300 relative">
                  <LuMessageCircleMore className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
                </div>
                <p className="text-[#697585] text-base font-semibold w-[280px] leading-[25px]">
                  There are many variations of Lorem available Here
                </p>
              </Flex>
              <Flex className="gap-x-3 group">
                <div className="w-12 h-12 rounded-full group-hover:bg-secondarys bg-[#F6F6F6] text-primaryTwo text-xl group-hover:text-white duration-300 relative">
                  <LuMessageCircleMore className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
                </div>
                <p className="text-[#697585] text-base font-semibold w-[280px] leading-[25px]">
                  There are many variations of Lorem available Here
                </p>
              </Flex>
            </div>
            {/* Comments */}
          </div>
        </Flex>
        {/* Pagination */}
        <Flex className="mt-[60px] mb-25 gap-x-4">
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
