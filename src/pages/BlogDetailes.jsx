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
import { MdOutlineWatchLater } from "react-icons/md";

const BlogDetailes = () => {
  return (
    <>
      {/* Header part */}
      <div className="lg:pt-[174px] lg:pb-36 py-15 lg:py-25 bg-black text-center text-white">
        <Container className="w-[390px] lg:w-330 mx-auto">
          <h3 className="font-bold text-[32px] lg:text-[50px] uppercase">Blog Details</h3>
          <p className="text-lg lg:text-xl pt-4">Home / Blog</p>
        </Container>
      </div>
      <Container className="w-[390px] lg:w-330 mx-auto">
        <Flex className={"flex-col lg:flex-row justify-between items-start mt-10 lg:mt-30 mb-20 lg:mb-[150px] gap-y-10"}>
          {/* Content Area */}
          <div className="w-full lg:w-[868px]">
            {/* Main Image/Placeholder */}
            <div className="w-full h-[250px] lg:h-[448px] rounded-[14px] bg-[#152B4A]"></div>
            {/* Article Section */}
            <div className="mt-10 pb-[50px] border-b-2 border-[#E4E4E4]">
              <Flex className={"gap-x-5"}>
                <p className="text-sm text-white bg-primarys font-semibold py-1.5 px-2.5 rounded-[5px]">
                  Development
                </p>
                <Flex className="text-sm lg:text-base text-[#697585] font-semibold gap-x-2">
                  <MdOutlineWatchLater className="text-secondarys lg:text-2xl" />
                  26 Mar, 2023
                </Flex>
              </Flex>
              <h4 className="text-2xl lg:text-[32px] text-primaryTwo font-bold pt-5 pb-7.5 leading-tight">
                The Complete Web Developer Guideline 2023
              </h4>
              <p className="text-sm lg:text-base font-semibold text-[#697585] w-full lg:w-[840px] leading-relaxed">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
                <br /> <br />
                Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam
                nec eros id magna hendrerit sagittis. Nullam sed mi non odio
                feugiat volutpat sit amet nec elit.
              </p>
            </div>
            {/* Tags & Socials */}
            <div className="py-10 border-b-2 border-[#E4E4E4]">
              <Flex className={"flex-col lg:flex-row justify-between gap-y-6 w-full"}>
                <Flex className={"flex-col lg:flex-row items-start lg:items-center gap-5"}>
                  <h5 className="text-xl lg:text-2xl text-primaryTwo font-bold">Tags</h5>
                  <Flex className="gap-2 flex-wrap">
                    {["Marketing", "Development", "Design"].map((tag) => (
                      <p key={tag} className="text-[#697585] text-xs lg:text-base font-semibold py-2 px-3 lg:py-3 lg:px-4 rounded-[5px] bg-[#F6F6F6]">
                        {tag}
                      </p>
                    ))}
                  </Flex>
                </Flex>
                <Flex className={"gap-x-4"}>
                  {[FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube].map((Icon, i) => (
                    <div key={i} className="p-2 lg:p-2.5 text-primaryTwo rounded-full bg-[#F6F6F6] cursor-pointer">
                      <Icon className="text-xl lg:text-2xl" />
                    </div>
                  ))}
                </Flex>
              </Flex>
            </div>
            {/* Comments Section */}
            <div className="my-[50px]">
              <p className="text-primaryTwo text-2xl font-bold">2 Comments</p>
              {[1, 2].map((item) => (
                <Flex key={item} className={"py-10 lg:py-15 border-b-2 border-[#E4E4E4] flex-col lg:flex-row gap-5 items-start lg:items-center"}>
                  <div className="h-20 w-20 lg:h-[165px] lg:w-[165px] bg-[#152B4A] rounded-full shrink-0"></div>
                  <div className="w-full">
                    <h6 className="text-primaryTwo text-xl lg:text-2xl font-bold">David Shon</h6>
                    <p className="text-sm lg:text-base text-[#697585] font-semibold w-full lg:w-[650px] pt-3 pb-5 leading-7">
                      Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
                      Nam nec eros id magna hendrerit sagittis.
                    </p>
                    <p className="text-[#697585] text-sm font-semibold py-2 px-6 rounded-[5px] bg-[#F6F6F6] cursor-pointer inline-block">
                      Reply
                    </p>
                  </div>
                </Flex>
              ))}
            </div>
            {/* Comment Form */}
            <div className="w-full">
              <p className="text-primaryTwo text-2xl font-bold">Leave a Comment</p>
              <div className="py-6 lg:py-10">
                <Flex className={"flex-col lg:flex-row justify-between gap-5 mb-5"}>
                  <input type="text" placeholder="Your Name" className="px-5 py-4 bg-[#F6F6F6] w-full lg:w-[48%] rounded-lg outline-none" />
                  <input type="email" placeholder="Email Address" className="px-5 py-4 bg-[#F6F6F6] w-full lg:w-[48%] rounded-lg outline-none" />
                </Flex>
                <textarea className="w-full h-[150px] lg:h-[250px] px-5 py-5 bg-[#F6F6F6] rounded-lg outline-none" placeholder="Write a Message"></textarea>
              </div>
              <button className="btn w-full lg:w-auto flex items-center justify-center gap-2">
                Submit Comment <FaArrowRight />
              </button>
            </div>
          </div>
          {/* Sidebar */}
          <div className="w-full lg:w-[416px]">
            {/* Search */}
            <Flex className="bg-secondarys p-5 lg:p-7.5 w-full text-white gap-x-2 rounded-[7px]">
              <IoSearch className="text-xl" />
              <input type="text" placeholder="Type Here" className="bg-transparent placeholder:text-white placeholder:text-base w-full outline-none" />
            </Flex>
            {/* Latest Post */}
            <div className="shadow-newMade bg-white p-5 lg:p-7.5 rounded-[14px] my-9">
              <h5 className="text-xl lg:text-2xl text-primaryTwo font-bold pb-5 border-b-2 border-dashed border-secondarys mb-5">Latest Post</h5>
              {[1, 2, 3].map((post) => (
                <Flex key={post} className="pb-5 border-b border-[#E4E4E4] mb-5 last:border-0 last:mb-0 gap-x-4">
                  <div className="h-16 w-16 lg:h-[90px] lg:w-[90px] rounded-[6px] bg-[#152B4A] shrink-0"></div>
                  <div>
                    <Flex className="text-xs lg:text-sm text-[#697585] font-semibold gap-x-1">
                      <MdOutlineWatchLater className="text-secondarys" /> 26 Mar, 2023
                    </Flex>
                    <p className="text-sm lg:text-xl font-bold text-primaryTwo leading-tight mt-1">Web Developer Guideline</p>
                  </div>
                </Flex>
              ))}
            </div>
            {/* Categories */}
            <div className="shadow-newMade bg-white p-5 lg:p-7.5 rounded-[14px] my-9">
              <h5 className="text-xl lg:text-2xl text-primaryTwo font-bold pb-5 border-b-2 border-dashed border-secondarys mb-5">Categories</h5>
              {["Web Development", "Social Marketing", "Technology"].map((cat) => (
                <Flex key={cat} className="pb-4 border-b border-[#E4E4E4] mb-4 last:border-0 last:mb-0 gap-x-3 items-center">
                  <FaAnglesRight className="text-secondarys" />
                  <p className="text-base lg:text-xl font-semibold text-[#697585]">{cat}</p>
                </Flex>
              ))}
            </div>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default BlogDetailes;