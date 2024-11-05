import React from "react";
import Navitem from "./Navitem";
import DropdownDemoes from "./DropdownDemoes";
import DropdownPages from "./DropdownPages";
import DropdownCourses from "./DropdownCourses";
import DropdownWrapper from "@/components/shared/wrappers/DropdownWrapper";
import DropdownDashboard from "./DropdownDashboard";
import DropdownEcommerce from "./DropdownEcommerce";

const NavItems = () => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/home-10", // Direct link to Home 5
      dropdown: null, // No dropdown for Home 5
      isRelative: false,
    },
    // {
    //   id: 2,
    //   name: "Pages",
    //   path: "/about",
    //   dropdown: <DropdownPages />,
    //   isRelative: false,
    // },
    // {
    //   id: 3,
    //   name: "",
    //   path: "/courses",
    //   dropdown: <DropdownCourses />,
    //   isRelative: false,
    // },
    // {
    //   id: 4,
    //   name: "Dashboard",
    //   path: "/dashboards/instructor-dashboard",
    //   dropdown: <DropdownDashboard />,
    //   isRelative: true,
    // },
    // {
    //   id: 5,
    //   name: "eCommerce",
    //   path: "/ecommerce/shop",
    //   dropdown: <DropdownEcommerce />,
    //   isRelative: true,
    // },
  ];
  return (
    <div className="hidden lg:block lg:col-start-3 lg:col-span-7">
      <ul >
      {/* className="nav-list flex justify-center" */}
        {navItems.map((navItem, idx) => (
          <Navitem key={idx} idx={idx} navItem={{ ...navItem, idx: idx }}>
            <DropdownWrapper>{navItem.dropdown}</DropdownWrapper>
          </Navitem>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
