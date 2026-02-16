import BlogCard from "../BlogCard";
import Container from "../Container";
import Flex from "../Flex";
import { FaAngleRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="lg:mt-30 mt-20">
      <Container>
        {/* Header part */}
        <Flex
          className={
            "gap-x-2 lg:text-2xl text-lg text-primarys font-bold justify-center"
          }
        >
          Latest Blog
          <Flex className="lg:text-base text-sm text-secondarys">
            <FaAngleRight />
            <FaAngleRight />
            <FaAngleRight />
            <FaAngleRight />
          </Flex>
        </Flex>
        <h3 className="text-primaryTwo lg:text-[40px] text-3xl font-bold lg:mt-5 mt-3 lg:mb-20 mb-15 text-center">
          Latest Updates & Articles
        </h3>
        {/* Header part */}
        <Flex className={"lg:gap-x-9 gap-y-9 flex-col lg:flex-row"}>
          {/* Products */}
          <BlogCard />
          <BlogCard />
          <BlogCard />
          {/* Products */}
        </Flex>
      </Container>
    </div>
  );
};

export default Blog;
