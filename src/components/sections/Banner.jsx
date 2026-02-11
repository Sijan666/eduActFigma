import Button from "../Button";
import Container from "../Container";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-[url(/src/assets/banner.png)] py-56 bg-cover bg-center bg-no-repeat">
      <Container>
        <h1 className="text-7xl text-[#2A254D] font-bold leading-[70px] w-[600px]">
          Come along <br /> as we begin our learning journey
        </h1>
        <p className="text-base text-[#697585] leading-8 py-10 w-[440px]">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary,
        </p>
        <div className="bg-[#f58c37]  text-white text-[18px] font-bold rounded-md w-[178px]">
          <Button
            btnText={
              <>
                Try for fee
                <FaArrowRight />
              </>
            }
            className={
              "bg-[#F57005] py-[19px] px-8 rounded-md w-[178px] clip-ss flex items-center gap-x-2"
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
