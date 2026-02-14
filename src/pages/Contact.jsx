import { BiSolidChevronsRight } from "react-icons/bi"
import Commonh4 from "../components/Commonh4"
import Container from "../components/Container"
import Commonh3 from "../components/Commonh3"
import Flex from "../components/Flex"
// import Button from "../components/Button"
import { FaArrowRight } from "react-icons/fa6"
import { FiMapPin } from "react-icons/fi"
import { TfiEmail } from "react-icons/tfi"
import { PiPhoneCall } from "react-icons/pi"



const Contact = () => {
  return (
    <>
    <section className="contact">
      {/* common bg for pages */}
      <div className="bg-[url('/src/assets/commonPage.png')] pt-[174px] pb-[154px]">
      {/* common bg for pages */}
        <Container>
          {/* common tag for pages */}
          <div className="text-center">
            <h3 className="text-[50px] font-bold text-white uppercase">Contact</h3>
            <p className="text-[20px] text-white">Home  /  Contact</p>
          </div>
          {/* common tag for pages */}
        </Container>
      </div>
      <div className="py-30">
        <Container>
          {/* common text part */}
          <div className="text-center lg:pt-30">
              <div className='gap-x-[15px] items-center flex justify-center'>
                  <Commonh4 commonh4={'Contact with  Us'} className={'text-primarys '}/>
                  <div className="flex items-center text-secondarys text-[20px]">
                      <BiSolidChevronsRight/>
                      <BiSolidChevronsRight className='-ml-2'/>
                  </div>
              </div>
              <Commonh3 commonh3={"Feel free to write us anytime"} className={'text-primaryTwo'}/>
          </div>
          {/* common text part */}
          {/* input section */}
          <div className="pt-15">
            <Flex className={'lg:justify-center gap-x-5 flex-wrap gap-y-5'}>
              <input type="text" placeholder="Your Name" className="py-[25px] px-7.5 bg-[#F6F6F6] text-[#697585] text-base font-bold rounded-sm w-[424px] outline-none"/>
              <input type="email" placeholder="Email Address" className="py-[25px] px-7.5 bg-[#F6F6F6] text-[#697585] text-base font-bold rounded-sm w-[424px]  outline-none"/>
            </Flex>
            <Flex className={'justify-center flex-wrap gap-x-5 pt-5 gap-y-5 pb-10'}>
              <input type="number" placeholder="Phone" className="py-[25px] px-7.5 bg-[#F6F6F6] text-[#697585] text-base font-bold rounded-sm w-[424px] outline-none"/>
              <input type="text" placeholder="Subject" className="py-[25px] px-7.5 bg-[#F6F6F6] text-[#697585] text-base font-bold rounded-sm w-[424px] outline-none"/>
              <textarea name="" placeholder="Write a Message" rows={5} cols={5} className="py-[25px] px-7.5 bg-[#F6F6F6] text-[#697585] text-base font-bold rounded-sm outline-none w-[868px]"></textarea>
            </Flex>
            {/* button */}
            {/* <div className="bg-[#f58c37] mx-auto text-white text-[18px] font-bold rounded-md w-[227px] mb-7.5">
              <Button btnText={<>Send a Message<FaArrowRight /></>}className={"bg-secondarys py-[19px] px-8 rounded-md w-[227px] clip-ss flex items-center gap-x-2"}/>
            </div> */}
            <button className="btn">
                Send a Message
                <FaArrowRight />
            </button>
            {/* button */}
            {/* cart part */}
            <div className="">
              <Flex className={'lg:justify-center lg:flex-row flex-col gap-y-5 '}>
                <div className=" py-[45px] shadow-newMade text-center group hover:bg-primarys duration-300 w-full lg:w-1/3 lg:rounded-tl-[14px] lg:rounded-bl-[14px] lg:rounded-tr-none lg:rounded-br-none rounded-[14px]">
                    <PiPhoneCall className="text-[45px] group-hover:text-white text-primarys mx-auto"/>
                    <p className="text-[#697585] text-[20px] font-medium pt-4 pb-2 group-hover:text-white">Have any question?</p>
                    <p className="text-primaryTwo text-[24px] font-bold group-hover:text-white">Free + 23 (000)-8050</p>
                </div>
                <div className=" py-[45px] shadow-newMade text-center group hover:bg-primarys duration-300 w-full lg:w-1/3 lg:rounded-none rounded-[14px]">
                    <TfiEmail className="text-[45px] group-hover:text-white text-primarys mx-auto"/>
                    <p className="text-[#697585] text-[20px] font-medium pt-4 pb-2 group-hover:text-white">Send Email</p>
                    <p className="text-primaryTwo text-[24px] font-bold group-hover:text-white">Demo@gmail.com</p>
                </div>
                <div className=" py-[45px] shadow-newMade text-center group hover:bg-primarys duration-300 w-full lg:w-1/3 lg:rounded-tr-[14px] lg:rounded-br-[14px] lg:rounded-tl-none lg:rounded-bl-none rounded-[14px]">
                    <FiMapPin className="text-[45px] group-hover:text-white text-primarys mx-auto"/>
                    <p className="text-[#697585] text-[20px] font-medium pt-4 pb-2 group-hover:text-white">Visit Anytime</p>
                    <p className="text-primaryTwo text-[24px] font-bold group-hover:text-white">6391 Elgin St. Delaware 10299</p>
                </div>
              </Flex>
            </div>
            {/* cart part */}
          </div>
          {/* input section */}
        </Container>
      </div>
      {/* map */}
      <div className="bg-[url('/src/assets/map.png')] bg-center bg-cover bg-no-repeat lg:h-[772px] h-50"></div>
      {/* map */}
    </section>
    </>
  )
}

export default Contact