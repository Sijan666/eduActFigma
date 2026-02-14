import Button from "@/components/Button";
import Container from "@/components/Container";
import Flex from "@/components/Flex";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdOutlineWatchLater } from "react-icons/md";

const BlogDetailes = () => {
  return (
    <>
      {/* Header part */}
      <div className="lg:pt-[174px] lg:pb-36 py-25 bg-black text-center text-white">
        <Container>
          <h3 className="font-bold text-[50px] uppercase">Blog Details</h3>
          <p className="text-xl pt-4">Home / Blog</p>
        </Container>
      </div>
      {/* Header part */}
      <Container>
        <Flex className={"justify-between items-start mt-30 mb-[150px]"}>
          {/* Content */}
          <div className="">
            <div className="w-[868px] h-[448px] rounded-[14px] bg-[#152B4A]"></div>
            {/* Article */}
            <div className="mt-10 pb-[50px] border-b-2 border-[#E4E4E4]">
              <Flex className={"gap-x-5"}>
                <p className="text-sm text-white bg-primarys font-semibold py-1.5 px-2.5 rounded-[5px]">
                  Development
                </p>
                <Flex className="lg:text-base text-sm text-[#697585] font-semibold gap-x-2">
                  <MdOutlineWatchLater className="text-secondarys lg:text-2xl!" />
                  26 Mar, 2023
                </Flex>
              </Flex>
              <h4 className="text-[32px] text-primaryTwo font-bold pt-5 pb-7.5">
                The Complete Web Developer Guideline 2023
              </h4>
              <p className="text-base font-semibold text-[#697585] w-[840px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin
                varius mauris non dignissim. Sed quis iaculis est. Nulla quam
                neque, interdum vitae fermentum lacinia, interdum eu magna.
                Mauris non posuere tellus. Donec quis euismod tellus. Nam vel
                lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros
                id magna hendrerit sagittis. Nullam sed mi non odio feugiat
                volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed
                eget auctor metus, ac dapibus dolor
                <br /> <br />
                Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam
                nec eros id magna hendrerit sagittis. Nullam sed mi non odio
                feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum.
                Sed eget auctor metus, ac dapibus dolor. Mauris gravida lacus
                metus, ac sagittis tortor hendrerit sit amet. Aenean dictum eget
                nulla in pharetra. Vestibulum vulputate vehicula mattis. Vivamus
                dictum nec dui porta rutrum. Nam erat felis, mattis ac massa
              </p>
            </div>
            {/* Article */}
            {/* Tags */}
            <div className="py-10 border-b-2 border-[#E4E4E4]">
              <Flex className={"justify-between w-[868px]"}>
                <Flex className={"gap-x-5"}>
                  <h5 className="text-2xl text-primaryTwo font-bold">Tags</h5>
                  <Flex className="gap-x-2">
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
                </Flex>
                <Flex className={"gap-x-4"}>
                  <div className="p-2.5 text-primaryTwo rounded-full bg-[#F6F6F6] cursor-pointer">
                    <FaFacebookF className="text-2xl" />
                  </div>
                  <div className="p-2.5 text-primaryTwo rounded-full bg-[#F6F6F6] cursor-pointer">
                    <FaLinkedinIn className="text-2xl" />
                  </div>
                  <div className="p-2.5 text-primaryTwo rounded-full bg-[#F6F6F6] cursor-pointer">
                    <FaTwitter className="text-2xl" />
                  </div>
                  <div className="p-2.5 text-primaryTwo rounded-full bg-[#F6F6F6] cursor-pointer">
                    <FaYoutube className="text-2xl" />
                  </div>
                </Flex>
                <Flex></Flex>
              </Flex>
            </div>
            {/* Tags */}
            {/* Comments */}
            <div className="my-[50px]">
              <p className="text-primaryTwo text-2xl font-bold">2 Comments</p>
              <Flex
                className={"py-15 border-b-2 border-[#E4E4E4] justify-between"}
              >
                <div className="h-[165px] w-[165px] bg-[#152B4A] rounded-full"></div>
                <div className="">
                  <h6 className="text-primaryTwo text-2xl font-bold">
                    David Shon
                  </h6>
                  <p className="text-base text-[#697585] font-semibold w-[650px] pt-5 pb-7.5 leading-8">
                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
                    Nam nec eros id magna hendrerit sagittis. Nullam sed mi non
                    odio feugiat volutpat sit amet nec elit. Maecenas id
                    hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor.
                  </p>
                  <p className="text-[#697585] text-base font-semibold py-2 px-6 rounded-[5px] bg-[#F6F6F6] cursor-pointer inline-block">
                    Reply
                  </p>
                </div>
              </Flex>
              <Flex
                className={"py-15 border-b-2 border-[#E4E4E4] justify-between"}
              >
                <div className="h-[165px] w-[165px] bg-[#152B4A] rounded-full"></div>
                <div className="">
                  <h6 className="text-primaryTwo text-2xl font-bold">
                    Jhon Watchson
                  </h6>
                  <p className="text-base text-[#697585] font-semibold w-[650px] pt-5 pb-7.5 leading-8">
                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
                    Nam nec eros id magna hendrerit sagittis. Nullam sed mi non
                    odio feugiat volutpat sit amet nec elit. Maecenas id
                    hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor.
                  </p>
                  <p className="text-[#697585] text-base font-semibold py-2 px-6 rounded-[5px] bg-[#F6F6F6] cursor-pointer inline-block">
                    Reply
                  </p>
                </div>
              </Flex>
            </div>
            {/* Comments */}
            {/* Form */}
            <div className="">
              <p className="text-primaryTwo text-2xl font-bold">
                Leave a Comment
              </p>
              <div className="py-10">
                <Flex className={"justify-between mb-5"}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-7.5 py-4.5 bg-[#F6F6F6] w-[424px] rounded-lg outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="px-7.5 py-4.5 bg-[#F6F6F6] w-[424px] rounded-lg outline-none"
                  />
                </Flex>
                <textarea
                  className="w-[868px] h-[250px] px-7.5 py-6 bg-[#F6F6F6] rounded-lg outline-none"
                  placeholder="Write a Message"
                ></textarea>
              </div>
              {/* btn */}
              {/* <div className="bg-[#f58c37]  text-white text-[18px] font-bold rounded-md w-60">
                <Button
                  btnText={
                    <>
                      Submit Comment
                      <FaArrowRight />
                    </>
                  }
                  className={
                    "bg-secondarys py-[19px] px-8 rounded-md w-60 clip-ss flex items-center gap-x-2"
                  }
                />
              </div> */}
              <button className="btn">
                  Submit Comment
                  <FaArrowRight />
              </button>
              {/* btn */}
            </div>
            {/* Form */}
          </div>
          {/* Content */}
          {/* Slidbar */}
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
          {/* Slidbar */}
        </Flex>
      </Container>
    </>
  );
};

export default BlogDetailes;
