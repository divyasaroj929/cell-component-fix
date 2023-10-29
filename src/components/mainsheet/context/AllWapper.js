import React from "react";
import "./allwapper.css";

const AllWapper = ({ children, title }) => {
  return (
    <div className="posision-between-nav-and-side ">
      {title}
      {children}
    </div>
  );
};

export default AllWapper;
