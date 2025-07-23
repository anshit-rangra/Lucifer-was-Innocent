import React, { useEffect, useState } from "react";
import {  Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import BuyProduct from "./pages/BuyProduct";
import DarkHeader from "./components/layout/header/Header";
import Witness from "./pages/Witness";
import Footer from "./components/layout/footer/Footer";
import Loader from "./components/ui/Loader";
import Animation from "./components/ui/Animation";
import Page404 from "./pages/Page404"

const App = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(true);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => setLoading(false), 5000);
    } else {
      window.onload = () => {
        setTimeout(() => setLoading(false), 5000);
      };
    }
  }, []);

  const showAnimation = location.pathname === "/" && !animationDone && !loading;

  if (loading) {
    return <Loader />;
  }

  if (showAnimation) {
    return <Animation onComplete={() => setAnimationDone(true)} />;
  }

  return (
    <>
          <DarkHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/order-details" element={<ProductDetails />} />
            <Route path="/place-order" element={<BuyProduct />} />
            <Route path="/witness" element={<Witness />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
    </>
  );
};

export default App;
