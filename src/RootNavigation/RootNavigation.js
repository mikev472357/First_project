import React from "react";
import { Routes, Route } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Layout } from "../components/Layout";
import { Projects } from "../pages/Projects";
import { Resume } from "../pages/Resume";

const RootNavigation = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/home"} index element={<Home />} />
        <Route path={"/resume"} element={<Resume />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/contact"} element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default RootNavigation;
