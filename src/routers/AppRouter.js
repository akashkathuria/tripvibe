import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/home/HomePage";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import About from "../components/about/about";
import { ROUTES } from "../constants/routes";
import Mauritius from "../components/destination/mauritius/mauritius";
import Contact from "../components/contact/contact";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <div className="body-margin">
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />}></Route>
        <Route path={ROUTES.ABOUT} element={<About />}></Route>
        <Route path={ROUTES.CONTACT} element={<Contact />}></Route>
        <Route path={ROUTES.MAURITIUS} element={<Mauritius />}></Route>
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
