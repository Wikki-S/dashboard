import React, { useEffect, useState } from "react";
import Header from "../DashboardComponent/Header";
import Slider from "../DashboardComponent/Slider";
import Content from "../DashboardComponent/Content";
import "./Dashboard.scss";
import { Link } from "react-router-dom";
import Table from "../table/Table";
import BackDrop from "../../component/backdrop/BackDrop";
import { AppRoutes } from "../../routes";
import axios from "axios";
function Dashboard(props) {
  const [sideBar, setSideBar] = useState(false);
  const [profile, setProfile] = useState(false);

  const openSidebar = () => {
    setSideBar(!sideBar);
  };
  const closeHanlder = () => {
    setSideBar(false);
  };

  return (
    <>
      <div className={`inner-wrapper ${sideBar == true ? "close" : "open"}`}>
        <Header handleSidebar={openSidebar} toggleSidebar={sideBar} />
        <div className="main-container"></div>
      </div>
      <Slider openSidebar={sideBar} onSideBar={setSideBar} />
    </>
  );
}

export default Dashboard;
