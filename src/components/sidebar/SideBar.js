import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BiExpandHorizontal,
  BiGitPullRequest,
  BiGitBranch,
  BiSolidBarChartAlt2,
  BiLineChart,
  BiFile,
  BiCloudUpload,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";

import "./sidebar.css";

const SideBar = ({ showsidebar, closeSidebar }) => {
  // const [showsidebar, setShowsidebar] = useState(false);

  // const closeSidebar = () => {
  //   setShowsidebar(!showsidebar);
  // };
  // console.log(showsidebar);

  const navData = [
    {
      icon: <BiExpandHorizontal />,
      name: "Source",
      path: "/",
    },
    {
      icon: <BiGitPullRequest />,
      name: "Commits",
      path: "/YourWork ",
    },
    {
      icon: <BiGitBranch />,
      name: "pull request",
      path: "/PullRequest",
    },
    {
      icon: <BiSolidBarChartAlt2 />,
      name: "Pipelines",
      path: "/Repositories",
    },
    {
      icon: <BiLineChart />,
      name: "Deployments",
      path: "/Projects",
    },
    {
      icon: <BiFile />,
      name: "Jira issues",
      path: "/People",
    },
    {
      icon: <BiCloudUpload />,
      name: "Security",
      path: "/More",
    },
    {
      icon: <BiCloudUpload />,

      name: "Downloads",
      path: "/More",
    },
    {
      icon: <BiSolidBarChartAlt2 />,

      name: "Graphs",
      path: "/More",
    },
    {
      icon: <BiSolidBarChartAlt2 />,

      name: "Reports",
      path: "/More",
    },
  ];

  return (
    <>
      {showsidebar ? (
        <BiChevronLeft
          onClick={closeSidebar}
          className={`shrink-icon ${showsidebar ? "space-toggle" : null}`}
        />
      ) : (
        <BiChevronRight
          className={`shrink-icon ${showsidebar ? "space-toggle" : null}`}
          onClick={closeSidebar}
        />
      )}
      <div className={`line ${showsidebar ? "space-toggle" : null}`}></div>

      {showsidebar ? (
        <ul className="ul-sidebar">
          {navData.map((item, index) => {
            console.log(item);
            return (
              <>
                <li key={index}>
                  <NavLink to={item.path} className="linksidebar">
                    <div className="icon-box">{item.icon}</div>
                    <div className="name-box">{item.name}</div>
                  </NavLink>
                </li>
              </>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default SideBar;
