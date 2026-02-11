import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { FaChevronRight } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      {/* Header part */}
      <div className="lg:pt-[174px] lg:pb-[154px] py-25 bg-black text-center text-white">
        <Container>
          <h3 className="font-bold text-[50px] uppercase">Blog</h3>
          <p className="text-xl pt-4">Home / Blog</p>
        </Container>
      </div>
      {/* Header part */}
      {/* Product part */}
      <Container className={"lg:mt-30 mt-20 "}>
        <Flex className={"gap-9 flex-wrap justify-center lg:justify-normal"}>
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </Flex>
        {/* Pagination */}
        <Flex className="mx-auto mt-[60px] mb-25 gap-x-4 justify-center">
          <div className="text-[#2A254D] h-10 w-10 rounded-[10px] text-xl font-semibold hover:border-secondary hover:bg-secondary hover:text-white duration-300 cursor-pointer border-2 border-[#E4E4E4] relative">
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              1
            </p>
          </div>
          <div className="text-[#2A254D] h-10 w-10 rounded-[10px] text-xl font-semibold hover:border-secondary hover:bg-secondary hover:text-white duration-300 cursor-pointer border-2 border-[#E4E4E4] relative">
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              2
            </p>
          </div>
          <div className="text-[#2A254D] h-10 w-10 rounded-[10px] text-sm font-semibold hover:border-secondary hover:bg-secondary hover:text-white duration-300 cursor-pointer border-2 border-[#E4E4E4] relative">
            <FaChevronRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </Flex>
        {/* Pagination */}
      </Container>
      {/* Product part */}
    </>
  );
};

export default Blog;
