import React from "react";
import TopBar from "./TopBar";
import { useCookies } from "react-cookie";
import Wallet from "../screens/dashboard/Wallet";
import { useState } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import Overview from "../screens/DashConsole/Overview";
import CarbonFootprint from "../screens/DashConsole/CarbonFootprint";
import Tree from "../screens/DashConsole/Tree";

const DashConsole = ({ children }) => {
  const [cookies, setCookie] = useCookies();
  const [footData, setfootData] = useState();

  // console.log(cookies.key);

  const dashSection = () => {
    switch (cookies.dashnav) {
      case "Overview":
        return <Overview />;
      case "Wallet":
        return <Wallet />;
      case "Calculate Footprint":
        return <CarbonFootprint />;
      case "Trees":
        return <Tree />;
      default:
        return <Overview />;
    }
  };
  return (
    <div className="bg-white">
      <SideNav />
      <div className="lg:ml-235px ml-50px sm:px-10 ">
        <TopNav />
        <div className=" bg-lightgreen sm:px-6 px-2 rounded-3xl ">
          {/* <main>{children}</main> */}
          {dashSection()}
        </div>
      </div>
    </div>
  );
};

export default DashConsole;
