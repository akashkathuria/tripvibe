import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/home/HomePage";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <div class="body-margin">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
