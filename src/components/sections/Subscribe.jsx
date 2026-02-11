import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";

const Subscribe = () => {
  return (
    <div className="lg:mt-50 mt-30">
      <Container
        className={
          "lg:bg-[url(/src/assets/subscribe.png)] bg-primary lg:py-20 py-15 px-[77px] rounded-2xl lg:rounded-tl-[14px] lg:rounded-tr-[14px] lg:rounded-br-none lg:rounded-bl-none bg-no-repeat bg-center"
        }
      >
        <Flex
          className={
            "lg:justify-between justify-normal gap-y-8 flex-col lg:flex-row"
          }
        >
          <h3 className="lg:text-[40px] text-3xl text-white font-bold lg:w-[500px] w-[340px]">
            Subscribe to our newsletter for daily updates
          </h3>
          <Flex className={"lg:gap-x-3 gap-y-4 lg:flex-row flex-col"}>
            <input
              type="email"
              placeholder="Email Address"
              className="py-5 px-6 rounded-md w-[352px] outline-none border-none bg-white"
            />
            <Button
              btnText={"Subscribe"}
              className={
                "text-white bg-secondary py-4.5 px-12.5 rounded-md text-lg font-bold"
              }
            />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Subscribe;
