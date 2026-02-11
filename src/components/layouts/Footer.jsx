import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import footerLogo from '../../assets/footerLogo.png'
import { FiMapPin } from "react-icons/fi"
import { PiPhoneCall } from "react-icons/pi"
import { TfiEmail } from "react-icons/tfi"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6"
import f1 from '../../assets/f1.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-[url('/src/assets/footerBg.png')] py-30 bg-center bg-cover bg-no-repeat">
          <Container>
            <Flex className={'lg:justify-between items-start! flex-wrap gap-y-5 lg:flex-nowrap '}>
              {/* 1st line */}
              <div className="first lg:mx-0 mx-auto">
                <Images imgSrc={footerLogo}/>
                <div className="pt-7.5">
                  {/* address */}
                  <div className="address flex gap-x-4 items-center">
                    <FiMapPin className="text-[25px] text-secondary"/>
                    <p className="text-[#B3ADE1] text-[18px]">6391 Elgin St. Celina, Delaware 10299</p>
                  </div>
                  {/* phone */}
                  <div className="address flex gap-x-4 items-center py-6">
                    <PiPhoneCall className="text-[25px] text-secondary"/>
                    <p className="text-[#B3ADE1] text-[18px]">(303) 555-0105</p>
                  </div>
                  {/* mail */}
                  <div className="address flex gap-x-4 items-center">
                    <TfiEmail className="text-[25px] text-secondary"/>
                    <p className="text-[#B3ADE1] text-[18px]">michael.mitc@example.com</p>
                  </div>
                  {/* logo */}
                  <div className="pt-7.5">
                    <Flex className={'gap-x-4'}>
                      <div className="px-3 py-3 border-2 border-primary text-white rounded-full cursor-pointer">
                        <FaFacebookF  className="text-[15px]"/>
                      </div>
                      <div className="px-3 py-3 border-2 border-primary text-white rounded-full cursor-pointer">
                        <FaLinkedinIn className="text-[15px]"/>
                      </div>
                      <div className="px-3 py-3 border-2 border-primary text-white rounded-full cursor-pointer">
                        <FaTwitter   className="text-[15px]"/>
                      </div>
                      <div className="px-3 py-3 border-2 border-primary text-white rounded-full cursor-pointer">
                        <FaYoutube   className="text-[15px]"/>
                      </div>
                    </Flex>
                  </div>
                </div>
              </div>
              {/* 2nd line */}
              <div className="second pt-5 lg:pt-0 pr-15 lg:pr-0 lg:mx-0 mx-auto">
                <h3 className="text-[24px] font-semibold text-white">Quick Links</h3>
                <div className="pt-7.5">
                  <ul className="flex flex-col gap-y-3">
                    <li className="text-[#B3ADE1] text-[18px] cursor-pointer">Latest Courses</li>
                    <li className="text-[#B3ADE1] text-[18px] cursor-pointer">Mission & Vision</li>
                    <li className="text-[#B3ADE1] text-[18px] cursor-pointer">Our Approach</li>
                    <li className="text-[#B3ADE1] text-[18px] cursor-pointer">Exclusive Advisors</li>
                    <li className="text-[#B3ADE1] text-[18px] cursor-pointer">Join a Carrer</li>
                  </ul>
                </div>
              </div>
              {/* 3rd line */}
              <div className="second pt-5 lg:pt-0 lg:mx-0 mx-auto">
                <h3 className="text-[24px] font-semibold text-white">Explore</h3>
                <div className="pt-7.5">
                  <ul className="flex flex-col gap-y-3">
                    <li className="text-[#B3ADE1] text-[18px] cursor-pointer">About Us</li>
                    <li className="text-[#B3ADE1] text-[18px] cursor-pointer">Upcoming Events</li>
                    <li className="text-[#B3ADE1] text-[18px] cursor-pointer">Blog & News</li>
                    <li className="text-[#B3ADE1] text-[18px] cursor-pointer">FAQ Question</li>
                    <li className="text-[#B3ADE1] text-[18px] cursor-pointer">Testimonial</li>
                    <li className="text-[#B3ADE1] text-[18px] cursor-pointer">Privacy Policy</li>
                  </ul>
                </div>
              </div>
              {/* 4th line */}
              <div className="second lg:mx-0 mx-auto">
                <h3 className="text-[24px] font-semibold text-white">Gallery</h3>
                <div className="pt-7.5">
                  <Flex className={'justify-between gap-x-4'}>
                    <Images imgSrc={f1}/>
                    <Images imgSrc={f1}/>
                    <Images imgSrc={f1}/>
                  </Flex>
                  <Flex className={'justify-between gap-x-4 pt-4'}>
                    <Images imgSrc={f1}/>
                    <Images imgSrc={f1}/>
                    <Images imgSrc={f1}/>
                  </Flex>
                </div>
              </div>
            </Flex>
          </Container>
        </div>
        {/* footer bottom copyright section */}
        <div className="bg-[#1F1944] py-[35px]">
          <Container>
            <p className="text-base text-[#B3ADE1] text-center">© Copyright 2023 by Company.com</p>
          </Container>
        </div>
        {/* footer bottom copyright section */}
      </footer>
    </>
  )
}

export default Footer
