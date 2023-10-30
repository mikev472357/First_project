import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
// import { Layout } from "./components/Layout";
// import { Projects } from "./pages/Projects";
// import { Resume } from "./pages/Resume";
// import { SideNav } from "./components/SideNav";

function App() {
  return (
    <div>
      <div className="App">
        {/* <SideNav /> */}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/home"} index element={<Home />} />
          {/* <Route path={"/resume"} element={<Resume />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/contact"} element={<Contact />} /> */}
        </Routes>
      </div>
      <div
        style={{
          textAlign: "center",
          border: "1px black solid",
          height: "10vh",
        }}
      >
        CopyRight @2023 | Michael Valderrama
      </div>
    </div>
  );
}

export default App;
