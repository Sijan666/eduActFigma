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
  const [dropshow, setdropshow] = useState(false);

  const handelClick = () => {
    setdropshow(!dropshow);
  };

  return (
    <header className="relative">
      <Container className={"lg:py-2 py-5 w-full lg:w-[1320px] px-4 lg:px-0"}>
        <Flex className={"justify-between items-center lg:justify-normal"}>
          {/* Logo */}
          <Link to={"/"}>
            <Images imgSrc={logo} />
          </Link>

          {/* Desktop Menu */}
          <nav className="ml-[115px] mr-16 hidden lg:block">
            <ul className="lg:flex items-center gap-x-[55px] font-semibold text-primaryTwo text-base">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"} className="flex items-center gap-x-1">
                  About <FaAngleDown />
                </Link>
              </li>
              <li>
                <Link to={"/coursePage"}>Courses</Link>
              </li>

              {/* Pages Dropdown Parent */}
              <li
                className="relative cursor-pointer select-none"
                onClick={handelClick}
              >
                <div className="flex items-center gap-x-1 justify-center">
                  Pages{" "}
                  <FaAngleDown
                    className={`transition-all ${dropshow ? "rotate-180" : ""}`}
                  />
                </div>

                {/* Dropdown */}
                <div
                  className={`rounded-2xl px-5 py-4 absolute top-12 -left-10 shadow-newMade w-52 bg-white z-50 transition-all duration-300
                  ${dropshow ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"}`}
                >
                  <ul className="flex flex-col gap-y-4 text-sm font-medium">
                    <li>
                      <Link
                        to={"/becomeTeacher"}
                        className="hover:text-primarys"
                      >
                        Become Teacher
                      </Link>
                    </li>
                    <li className="hover:text-primarys">
                      <Link to={"/blogDetailes"}>Blog Details</Link>
                    </li>
                    <li className="hover:text-primarys">
                      <Link to={"/blogSidebar"}>Blog Sidebar</Link>
                    </li>
                    <li className="hover:text-primarys">
                      <Link to={"/cart"}>Cart</Link>
                    </li>
                    <li className="hover:text-primarys">
                      <Link to={"/checkout"}>Checkout</Link>
                    </li>
                    <li className="hover:text-primarys">
                      <Link to={"/coursePage"}>Course Page</Link>
                    </li>
                    <li className="hover:text-primarys">
                      <Link to={"/faq"}>Faq</Link>
                    </li>
                    <li className="hover:text-primarys">
                      <Link to={"/gallery"}>Gallery</Link>
                    </li>
                    <li className="hover:text-primarys">
                      <Link to={"/product"}>Product</Link>
                    </li>
                    <li className="hover:text-primarys">
                      <Link to={"/productDetails"}>Product Details</Link>
                    </li>
                    <li className="hover:text-primarys">
                      <Link to={"/teacher"}>Teacher</Link>
                    </li>
                    <li className="hover:text-primarys">
                      <Link to={"/teacherDetails"}>Teacher Details</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/product"}>Shop</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Device Icon */}
          <div
            className="block lg:hidden text-3xl text-primaryTwo cursor-pointer"
            onClick={() => setshow(!show)}
          >
            <CgMenuRight />
          </div>

          {/* Mobile Menu Content */}
          <nav
            className={`absolute left-1/2 lg:hidden backdrop-blur-lg border-2 border-gray-300 rounded-3xl p-5 w-[90%] -translate-x-1/2 text-center 
            transition-all duration-400 ease-in-out z-50 
            ${show ? "top-24 opacity-100 visible" : "top-20 opacity-0 invisible"}`}
          >
            <ul className="flex-col flex gap-y-5 font-semibold text-primaryTwo text-base text-center">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="flex items-center gap-x-1 justify-center"
                >
                  About <FaAngleDown />
                </Link>
              </li>
              <li>
                <Link to={"/coursePage"}>Courses</Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="flex items-center gap-x-1 justify-center"
                >
                  Pages <FaAngleDown />
                </Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/product"}>Shop</Link>
              </li>
            </ul>
            <div className="bg-primarys py-4 px-4 mt-5 rounded-full w-full max-w-[250px] mx-auto">
              <Link to={"/"}>
                <Flex className={"gap-x-4 items-center justify-center"}>
                  <div className="text-primarys bg-white text-[24px] p-2 rounded-full">
                    <FiPhoneCall />
                  </div>
                  <div className="text-white font-semibold text-left">
                    <p className="text-[16px]">(303) 555-0105</p>
                    <p className="text-xs">Call to Questions</p>
                  </div>
                </Flex>
              </Link>
            </div>
          </nav>

          {/* Search & User Desktop */}
          <Flex
            className={
              "gap-x-3 text-primaryTwo text-xl hidden lg:flex ml-auto items-center"
            }
          >
            <Link to={"/"}>
              <FiSearch />
            </Link>
            <Link to={"/login"}>
              <FaRegUser />
            </Link>
          </Flex>

          {/* Contact Button Desktop */}
          <div className="bg-primarys py-4 pl-4 pr-10 rounded-tl-full rounded-bl-full ml-10 hidden lg:block">
            <Link to={"/contact"}>
              <Flex className={"gap-x-4 items-center"}>
                <div className="text-primarys bg-white text-[28px] p-3 rounded-full">
                  <FiPhoneCall />
                </div>
                <div className="text-white font-semibold">
                  <p className="text-[18px]">(303) 555-0105</p>
                  <p className="text-sm">Call to Questions</p>
                </div>
              </Flex>
            </Link>
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
