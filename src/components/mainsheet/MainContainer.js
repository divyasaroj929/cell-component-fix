import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Search from "../navbar/search/Search";
import NavII from "../navbar/navII/NavII";
import SideBar from "../sidebar/SideBar";
import Button from "../navbar/button/Button";

import "./maincontainer.css";

const MainContainer = ({ children }) => {
  const [showsidebar, setShowsidebar] = useState(false);

  const closeSidebar = () => {
    setShowsidebar(!showsidebar);
  };

  console.log(children, "children");
  return (
    <div className="container-hold-everything">
      <div className="hold-navbar-item">
        <div className="hold-left-navbar">
          <Navbar />
          <Button type="button" name="create" />
        </div>
        <div className="hold-right-navbar">
          <Search />
          <NavII />
        </div>
      </div>
      <div className="sidebar-hold-item">
        <SideBar
          closeSidebar={closeSidebar}
          showsidebar={showsidebar}
          setShowsidebar={setShowsidebar}
        />
      </div>
      <div
        className={`full-width ${
          showsidebar ? "width-based-on-sidebar" : "full-width"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
