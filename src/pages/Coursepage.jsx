import Container from "@/components/Container";
import React from "react";
import Rating from "../../src/assets/Rating.png";
import CourseCard from "@/components/CourseCard";
import { FaChevronRight } from "react-icons/fa";
import Flex from "@/components/Flex";
import Images from "@/components/Images";
import plane from "/src/assets/Element.png";
import paper from "/src/assets/plane.png";

const Coursepage = () => {
  return (
    <>
      <section className="coursePage">
        {/* common bg for pages */}
        <div className="bg-[url('/src/assets/commonPage.png')] pt-[174px] pb-[154px]">
          {/* common bg for pages */}
          <Container>
            {/* common tag for pages */}
            <div className="text-center">
              <h3 className="lg:text-[50px] text-[35px] font-bold text-white uppercase">
                Course
              </h3>
              <p className="text-[20px] text-white">Home / Course</p>
            </div>
            {/* common tag for pages */}
          </Container>
        </div>
        <div className="py-30">
          <Container>
            {/* course card part */}
            <div className="pt-20 flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:justify-between items-center relative z-1">
              <CourseCard
                className={"lg:w-1/3"}
                courseTime={"20 Hours"}
                courseRating={Rating}
                courseTitle={"Management Consultants in Competitive Markets"}
                insName={"Guy Hawkins"}
                insTitle={"Project Manager"}
                price={"$473.00"}
                lessons={"15 Lessons"}
              />
              <CourseCard
                className={"lg:w-1/3"}
                courseTime={"20 Hours"}
                courseRating={Rating}
                courseTitle={"Management Consultants in Competitive Markets"}
                insName={"Guy Hawkins"}
                insTitle={"Project Manager"}
                price={"$473.00"}
                lessons={"15 Lessons"}
              />
              <CourseCard
                className={"lg:w-1/3"}
                courseTime={"20 Hours"}
                courseRating={Rating}
                courseTitle={"Management Consultants in Competitive Markets"}
                insName={"Guy Hawkins"}
                insTitle={"Project Manager"}
                price={"$473.00"}
                lessons={"15 Lessons"}
              />
              <Images
                imgSrc={paper}
                className={
                  "absolute lg:top-60 lg:-right-60 hidden lg:block"
                }
              />
            </div>
            <div className="pt-20 flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:justify-between items-center relative z-1">
              <CourseCard
                className={"lg:w-1/3"}
                courseTime={"20 Hours"}
                courseRating={Rating}
                courseTitle={"Management Consultants in Competitive Markets"}
                insName={"Guy Hawkins"}
                insTitle={"Project Manager"}
                price={"$473.00"}
                lessons={"15 Lessons"}
              />
              <CourseCard
                className={"lg:w-1/3"}
                courseTime={"20 Hours"}
                courseRating={Rating}
                courseTitle={"Management Consultants in Competitive Markets"}
                insName={"Guy Hawkins"}
                insTitle={"Project Manager"}
                price={"$473.00"}
                lessons={"15 Lessons"}
              />
              <CourseCard
                className={"lg:w-1/3"}
                courseTime={"20 Hours"}
                courseRating={Rating}
                courseTitle={"Management Consultants in Competitive Markets"}
                insName={"Guy Hawkins"}
                insTitle={"Project Manager"}
                price={"$473.00"}
                lessons={"15 Lessons"}
              />
              <Images
                imgSrc={plane}
                className={
                  "absolute lg:top-60 lg:-left-60 hidden lg:block"
                }
              />
            </div>
            {/* Pagination */}
            <Flex className="mx-auto mt-[60px] gap-x-4 justify-center">
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
        </div>
      </section>
    </>
  );
};

export default Coursepage;
