import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillQuestionCircle } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { BsGrid3X3GapFill } from "react-icons/bs";

const NavII = () => {
  const navIIData = [
    { icon: <AiFillQuestionCircle /> },
    { icon: <AiOutlineSetting /> },
    { icon: <BsGrid3X3GapFill /> },
  ];
  return (
    <>
      <div className="container-hold-navbar">
        <ul>
          {navIIData.map((item, index) => {
            console.log(item);
            return (
              <li key={index}>
                <NavLink to={item.path} className="link-icon">
                  {item.icon}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavII;
