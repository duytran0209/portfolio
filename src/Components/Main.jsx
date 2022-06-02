import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Darkmode from "./Darkmode";
import ScrollToTop from "./ScrollToTop";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <Darkmode></Darkmode>
      <ScrollToTop></ScrollToTop>
      <Outlet></Outlet>
    </>
  );
};

export default Main;
