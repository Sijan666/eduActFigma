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
import { useState } from "react";

const Header = () => {
  const [show, setshow] = useState(false);

  return (
    <header className="relative">
      <Container className={"lg:py-2 py-5 w-[390px] lg:w-[1320px]"}>
        <Flex className={"justify-between lg:justify-normal"}>
          {/* Logo */}
          <Link to={""}>
            <Images imgSrc={logo} />
          </Link>
          {/* Logo */}
          {/* Menu */}

          <nav className="ml-[115px] mr-16 hidden lg:block">
            <ul className="lg:flex items-center gap-x-[55px] font-semibold text-[#2A254D] text-base">
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
          </nav>
          {/* Mobile Device */}
          <div
            className="block lg:hidden text-3xl text-[#2A254D] "
            onClick={() => setshow(!show)}
          >
            <CgMenuRight />
          </div>
          {show && (
            <>
              <nav className="absolute left-1/2 lg:hidden  top-20 bg-gray-300 rounded-3xl p-5 w-[90%] -translate-x-1/2 text-center">
                <ul className="flex-col flex gap-y-4 font-semibold text-[#2A254D] text-base text-center">
                  <li>
                    <Link to={""}>Home</Link>
                  </li>
                  <li>
                    <Link
                      to={""}
                      className="flex items-center gap-x-1  justify-center"
                    >
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
                <div className="bg-primary py-4 px-4 mt-5 rounded-full w-[250px]  mx-auto lg:hidden">
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
              </nav>
            </>
          )}
          {/* Mobile Device */}
          {/* Menu */}
          {/* Search & User */}
          <Flex className={"gap-x-3 text-[#2A254D] text-xl hidden lg:flex"}>
            <Link to={""}>
              <FiSearch />
            </Link>
            <Link to={""}>
              <FaRegUser />
            </Link>
          </Flex>
          {/* Search & User */}
          {/* Button */}
          <div className="bg-primary py-4 pl-4 pr-12.5 rounded-tl-full rounded-bl-full ml-25 hidden lg:block">
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
    </header>
  );
};

export default Header;
