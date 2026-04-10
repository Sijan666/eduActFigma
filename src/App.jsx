import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ReactLenis from "lenis/react";
import RootLayouts from "./components/layouts/RootLayouts";
import PremiumLoader from "./components/PremiumLoader";
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Error = lazy(() => import("./pages/Error"));
const TeacherDetails = lazy(() => import("./pages/TeacherDetails"));
const Blog = lazy(() => import("./pages/Blog"));
const Login = lazy(() => import("./pages/Login"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
const BecomeTeacher = lazy(() => import("./pages/BecomeTeacher"));
const Teacher = lazy(() => import("./pages/Teacher"));
const Gallery = lazy(() => import("./pages/Gallery"));
const BlogSidebar = lazy(() => import("./pages/BlogSidebar"));
const BlogDetailes = lazy(() => import("./pages/BlogDetailes"));
const Faq = lazy(() => import("./pages/Faq"));
const About = lazy(() => import("./pages/About"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Coursepage = lazy(() => import("./pages/Coursepage"));
const Cdetails = lazy(() => import("./pages/cDetails"));

function App() {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true, wheelMultiplier: 0.8 }}>
        <Suspense fallback={<PremiumLoader />}>
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
              <Route path="/cDetails" element={<Cdetails />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </ReactLenis>
    </>
  );
}

export default App;