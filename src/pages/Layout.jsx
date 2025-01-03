import Product from "../pages/Product";
import Homepage from "./Homepage";
import Pricing from "./Pricing";
import PageNotFound from "./PageNotFound";
import AppLayout from "./AppLayout";
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
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;