import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <Container className={"py-2"}>
        <Flex>
          {/* Logo */}
          <Link to={""}>
            <Images imgSrc={logo} />
          </Link>
          {/* Logo */}
          {/* Menu */}
          <ul className="flex items-center gap-x-[55px] font-semibold text-[#2A254D] text-base ml-[115px] mr-16">
            <li>
              <Link to={""}>Home</Link>
            </li>
            <li>
              <Link to={""} className=" flex items-center gap-x-1">
                About <FaAngleDown />
              </Link>
            </li>
            <li>
              <Link to={""}>Courses</Link>
            </li>
            <li>
              <Link to={""}>Pages </Link>
            </li>
            <li>
              <Link to={""}> Blog</Link>
            </li>
            <li>
              <Link to={""}> Shop</Link>
            </li>
          </ul>
          {/* Mobile Device */}
          <div className="" hidden>
            <CgMenuRight />
          </div>
          {/* Mobile Device */}
          {/* Menu */}
          {/* Search & User */}
          <Flex className={"gap-x-3 text-[#2A254D] text-xl"}>
            <Link to={""}>
              <FiSearch />
            </Link>
            <Link to={""}>
              <FaRegUser />
            </Link>
          </Flex>
          {/* Search & User */}
          {/* Button */}
          <div className="bg-primary py-4 pl-4 pr-12.5 rounded-tl-full rounded-bl-full ml-25">
            <Link to={""}>
              <Flex className={"gap-x-4"}>
                <div className="text-primary bg-white text-[28px] p-3 rounded-full">
                  <FiPhoneCall />
                </div>
                <div className="text-white font-semibold ">
                  <p className="text-[18px]">(303) 555-0105</p>
                  <p className="text-sm">Call to Questions</p>
                </div>
              </Flex>
            </Link>
          </div>
          {/* Button */}
        </Flex>
      </Container>
    </>
  );
};

export default Header;
