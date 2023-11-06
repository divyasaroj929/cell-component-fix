import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { BsGrid3X3GapFill } from "react-icons/bs";

const Navbar = () => {
  const navData = [
    { icon: <BsGrid3X3GapFill /> },
    {
      name: "Home",
      path: "/cell-component-fix",
    },
    {
      name: "Your Work",
      path: "/YourWork ",
    },
    {
      name: "pull request",
      path: "/PullRequest",
    },
    {
      name: "Repositories",
      path: "/Repositories",
    },
    {
      name: "Projects",
      path: "/Projects",
    },
    {
      name: "People",
      path: "/People",
    },
    {
      name: "More",
      path: "/More",
    },
  ];
  // console.log(navData);

  return (
    <div className="container-hold-navbar">
      <ul>
        {navData.map((item, index) => {
          console.log(item);
          return (
            <li key={index}>
              <NavLink to={item.path} className="link">
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
