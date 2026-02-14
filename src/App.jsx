import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import RootLayouts from "./components/layouts/RootLayouts";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import TeacherDetails from "./pages/TeacherDetails";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import BecomeTeacher from "./pages/BecomeTeacher";
import Teacher from "./pages/Teacher";
import Gallery from "./pages/Gallery";
import BlogSidebar from "./pages/BlogSidebar";
import BlogDetailes from "./pages/BlogDetailes";
import Faq from "./pages/Faq";
import About from "./pages/About";
import { ProductDetails } from "./pages/ProductDetails";
import Coursepage from "./pages/Coursepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/becomeTeacher" element={<BecomeTeacher />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetailes" element={<BlogDetailes />} />
          <Route path="/blogSidebar" element={<BlogSidebar />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coursePage" element={<Coursepage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacherDetails" element={<TeacherDetails />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
