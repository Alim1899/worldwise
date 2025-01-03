import Product from "../Pricing/Product";
import Homepage from "../Home/Homepage";
import Pricing from "../Pricing/Pricing";
import PageNotFound from "../Pricing/PageNotFound";
import AppLayout from "./AppLayout";
import Login from "../Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Layout() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;
