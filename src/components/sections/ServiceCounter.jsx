import Container from "../Container";
import Flex from "../Flex";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ServiceCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <section className="serviceCounter">
        <div className="mb-[82px]">
          <div className="bg-[url('/src/assets/counterBg.png')] pt-[22px] pb-[60px] lg:pb-[120px] bg-cover bg-no-repeat bg-center shadow-[-1px_3px_60px_0px_rgba(0,0,0,0.07)]">
            <Container>
              <Flex className={"flex-col lg:flex-row gap-6 lg:gap-9 justify-center items-center"}>
                {/* Item 1 */}
                <div className="max-w-[303px] w-full py-10 lg:py-[57px] px-5 lg:px-[76px] bg-white border-2 border-dashed border-primarys rounded-[10px] text-center">
                  <p
                    ref={ref}
                    className="font-Urbanist font-bold text-[40px] lg:text-[50px] text-secondarys leading-[50px] lg:leading-[60px]"
                  >
                    {inView ? (
                      <CountUp
                        start={0}
                        end={30.3}
                        duration={4.5}
                        decimals={1}
                        suffix="k"
                      />
                    ) : (
                      "0"
                    )}
                  </p>
                  <span className="uppercase font-Urbanist font-semibold text-sm lg:text-base text-[#697585] leading-[26px] whitespace-nowrap">
                    Student Enrolled
                  </span>
                </div>
                {/* Item 2 */}
                <div className="max-w-[303px] w-full py-10 lg:py-[57px] px-5 lg:px-[76px] bg-white border-2 border-dashed border-primarys rounded-[10px] text-center">
                  <div className="">
                    <p className="font-Urbanist font-bold text-[40px] lg:text-[50px] text-secondarys leading-[50px] lg:leading-[60px]">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={40.5}
                          duration={4.5}
                          decimals={1}
                          suffix="k"
                        />
                      ) : (
                        "0"
                      )}
                    </p>
                    <span className="uppercase font-Urbanist font-semibold text-sm lg:text-base text-[#697585] leading-[26px] whitespace-nowrap">
                      Class completed
                    </span>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="max-w-[303px] w-full py-10 lg:py-[57px] px-5 lg:px-[76px] bg-white border-2 border-dashed border-primarys rounded-[10px] text-center">
                  <div className="">
                    <p className="font-Urbanist font-bold text-[40px] lg:text-[50px] text-secondarys leading-[50px] lg:leading-[60px]">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={88.9}
                          duration={4.5}
                          decimals={1}
                          suffix="%"
                        />
                      ) : (
                        "0"
                      )}
                    </p>
                    <span className="uppercase font-Urbanist font-semibold text-sm lg:text-base text-[#697585] leading-[26px] whitespace-nowrap">
                      satisfaction rate
                    </span>
                  </div>
                </div>
                {/* Item 4 */}
                <div className="max-w-[303px] w-full py-10 lg:py-[57px] px-5 lg:px-[76px] bg-white border-2 border-dashed border-primarys rounded-[10px] text-center">
                  <div className="">
                    <p className="font-Urbanist font-bold text-[40px] lg:text-[50px] text-secondarys leading-[50px] lg:leading-[60px]">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={6.3}
                          duration={4.5}
                          decimals={2}
                          suffix="+"
                        />
                      ) : (
                        "0"
                      )}
                    </p>
                    <span className="uppercase font-Urbanist font-semibold text-sm lg:text-base text-[#697585] leading-[26px] whitespace-nowrap">
                      Top instructors
                    </span>
                  </div>
                </div>
              </Flex>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCounter;