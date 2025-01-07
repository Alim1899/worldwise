import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "../Pricing/Product";
import Homepage from "../Home/Homepage";
import Pricing from "../Pricing/Pricing";
import PageNotFound from "../Pricing/PageNotFound";
import AppLayout from "./AppLayout";
import Login from "../Login/Login";
import Form from "../../components/Form/Form";
import City from "../../components/City/City";
import CountryList from "../../components/Country/CountryList";
import CityList from "../../components/City/CityList";
import { CitiesProvider } from "../../contexts/CitiesContext";
import { AuthProvider } from "../../contexts/FakeAuthContext";
import ProtectedRoute from "../ProtectedRoute";
function Layout() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />

            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default Layout;
