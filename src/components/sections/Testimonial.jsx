import React from 'react';
import Container from "../Container";
import Images from "../Images";
import HeadingImg from "/src/assets/headingImg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import reviewOne from "/src/assets/reviewOne.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"; 

const Testimonial = () => {
  return (
    <div className="py-30 bg-[url('/src/assets/testimonialBG.png')] bg-no-repeat bg-center bg-cover relative mb-[340px]">
      <Container>
        {/* Heading Part */}
        <div className="text-center pb-42.5">
          <div className="flex items-center justify-center gap-x-[15px]">
            <h4 className="text-primarys text-2xl font-bold">Testimonial</h4>
            <Images imgSrc={HeadingImg} />
          </div>
          <h3 className="text-primaryTwo text-[40px] font-bold">
            What Our Student Feedback
          </h3>
        </div>
        {/* Testimonial Part */}
        <div className="absolute left-0 right-0 -bottom-[200px] z-10 px-4 xl:px-0">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            className="w-full xl:w-[1290px] mx-auto"
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {/* স্লাইডগুলো */}
            <SwiperSlide>
              <Images imgSrc={reviewOne} />
            </SwiperSlide>
            <SwiperSlide>
              <Images imgSrc={reviewOne} />
            </SwiperSlide>
            <SwiperSlide>
              <Images imgSrc={reviewOne} />
            </SwiperSlide>
            <SwiperSlide>
              <Images imgSrc={reviewOne} />
            </SwiperSlide>
            <SwiperSlide>
              <Images imgSrc={reviewOne} />
            </SwiperSlide>
            <SwiperSlide>
              <Images imgSrc={reviewOne} />
            </SwiperSlide>
            <SwiperSlide>
              <Images imgSrc={reviewOne} />
            </SwiperSlide>
            <SwiperSlide>
              <Images imgSrc={reviewOne} />
            </SwiperSlide>
            <SwiperSlide>
              <Images imgSrc={reviewOne} />
            </SwiperSlide>
          </Swiper>
          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-x-4 mt-12">
            <button className="prev-btn w-[50px] h-[50px] bg-primarys hover:bg-secondarys text-white flex justify-center items-center rounded-sm cursor-pointer transition-all duration-500">
              <FaArrowLeft size={20} />
            </button>
            <button className="next-btn w-[50px] h-[50px] bg-primarys hover:bg-secondarys text-white flex justify-center items-center rounded-sm cursor-pointer transition-all duration-500">
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;