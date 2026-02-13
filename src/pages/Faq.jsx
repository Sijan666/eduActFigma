import Container from "@/components/Container";
import Flex from "@/components/Flex";
import { FaAngleRight } from "react-icons/fa";
import { FiPhoneCall, FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <>
      {/* Header part */}
      <div className="lg:pt-[174px] lg:pb-[154px] py-25 bg-black text-center text-white">
        <Container>
          <h3 className="font-bold text-[50px] uppercase">FAQs</h3>
          <p className="text-xl pt-4">Home / FAQs</p>
        </Container>
      </div>
      <Container>
        <Flex
          className={
            "gap-x-2 lg:text-2xl text-lg text-primarys font-bold justify-center mt-30"
          }
        >
          Our Recent FAQS
          <Flex className="lg:text-base text-sm text-secondarys">
            <FaAngleRight />
            <FaAngleRight />
            <FaAngleRight />
            <FaAngleRight />
          </Flex>
        </Flex>
        <h3 className="text-primaryTwo lg:text-[40px] text-3xl font-bold lg:mt-5 mt-3 lg:mb-20 mb-15 text-center lg:w-[514px] mx-auto">
          Frequently asked Question & Answers Here
        </h3>
        {/* Header part */}
        <Accordion
          type="single"
          collapsible
          defaultValue="shipping"
          className="max-w-[1100px] mx-auto"
        >
          <div className="flex flex-col gap-y-5">
            <AccordionItem
              value="shipping "
              className={
                "border-[#E4E4E4] border-2 rounded-xl py-9 px-10 w-[1100px] "
              }
            >
              <AccordionTrigger
                className={
                  "hover:no-underline hover:cursor-pointer text-primaryTwo text-base font-semibold"
                }
              >
                What Happens to my data if I cancel?
              </AccordionTrigger>
              <AccordionContent
                className={
                  "mt-10 text-base text-[#697585] font-semibold w-[945px]"
                }
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="shipping "
              className={
                "border-[#E4E4E4] border-2 rounded-xl py-9 px-10 w-[1100px] "
              }
            >
              <AccordionTrigger
                className={
                  "hover:no-underline hover:cursor-pointer text-primaryTwo text-base font-semibold"
                }
              >
                What Happens to my data if I cancel?
              </AccordionTrigger>
              <AccordionContent
                className={
                  "mt-10 text-base text-[#697585] font-semibold w-[945px]"
                }
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="shipping "
              className={
                "border-[#E4E4E4] border-2 rounded-xl py-9 px-10 w-[1100px] "
              }
            >
              <AccordionTrigger
                className={
                  "hover:no-underline hover:cursor-pointer text-primaryTwo text-base font-semibold"
                }
              >
                What Happens to my data if I cancel?
              </AccordionTrigger>
              <AccordionContent
                className={
                  "mt-10 text-base text-[#697585] font-semibold w-[945px]"
                }
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="shipping "
              className={
                "border-[#E4E4E4] border-2 rounded-xl py-9 px-10 w-[1100px] "
              }
            >
              <AccordionTrigger
                className={
                  "hover:no-underline hover:cursor-pointer text-primaryTwo text-base font-semibold"
                }
              >
                What Happens to my data if I cancel?
              </AccordionTrigger>
              <AccordionContent
                className={
                  "mt-10 text-base text-[#697585] font-semibold w-[945px]"
                }
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="shipping "
              className={
                "border-[#E4E4E4] border-2 rounded-xl py-9 px-10 w-[1100px] "
              }
            >
              <AccordionTrigger
                className={
                  "hover:no-underline hover:cursor-pointer text-primaryTwo text-base font-semibold"
                }
              >
                What Happens to my data if I cancel?
              </AccordionTrigger>
              <AccordionContent
                className={
                  "mt-10 text-base text-[#697585] font-semibold w-[945px]"
                }
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="shipping "
              className={
                "border-[#E4E4E4] border-2 rounded-xl py-9 px-10 w-[1100px]"
              }
            >
              <AccordionTrigger
                className={
                  "hover:no-underline hover:cursor-pointer text-primaryTwo text-base font-semibold"
                }
              >
                What Happens to my data if I cancel?
              </AccordionTrigger>
              <AccordionContent
                className={
                  "mt-10 text-base text-[#697585] font-semibold w-[945px]"
                }
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
        {/* Faq part */}
        {/* <Flex className="border-[#E4E4E4] border-2 rounded-xl justify-between py-9 px-10">
          <p className="text-base  font-semibold">
            What Happens to my data if I cancel?
          </p>
          <FiPlus className="text-3xl text-primaryTwo" />
        </Flex>
        <div className="border-[#E4E4E4] border-2 rounded-xl py-9 px-10">
          <Flex className="justify-between text-secondarys">
            <p className="">What Happens to my data if I cancel?</p>
            <FaMinus className="text-3xl" />
          </Flex>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </div> */}
        {/* Faq part */}

        {/* Call part */}
        <div className="w-[1100px] mx-auto bg-[#4353c5] rounded-[14px] px-[285px] py-[52px] my-30 text-center cursor-pointer">
          <div className="text-secondarys bg-white text-[28px] p-4.5 w-[67px] h-[65px] rounded-full mx-auto">
            <FiPhoneCall />
          </div>
          <h4 className="text-white text-[40px] font-semibold border-b-2 border-secondarys mt-5 pb-3">
            Do you still have question?
          </h4>
          <p className="text-white text-base font-semibold mt-5 mb-2">
            Call Anytime
          </p>
          <h6 className="text-white text-2xl font-bold">(303) 555-0105</h6>
        </div>
        {/* Call part */}
      </Container>
    </>
  );
};

export default Faq;
