import "./App.scss";
// import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { createContext, useEffect, useState } from "react";
import Header from "./pages/DashboardComponent/Header";
import Slider from "./pages/DashboardComponent/Slider";
import Content from "./pages/DashboardComponent/Content";
import "./pages/Dashboard/Dashboard.scss"
import { Link } from "react-router-dom";
import Table from "./pages/table/Table"
import axios from "axios";
import { AuthRoute } from "./routes";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";


export const userName = createContext(null);
const user = localStorage.getItem('user_token');
const j = JSON.parse(user);
const name  = j?.data?.fullname;
console.log(name)
function Dashboard(props) {
  const [sideBar, setSideBar] = useState(false);
  const [profile, setProfile] = useState(false);
  const [isLogin, setIsLogin] = useState(false)
  const openSidebar = () => {
    setSideBar(!sideBar);
  };
  const closeHanlder = () => {
    setSideBar(false);
  };

  useEffect(()=>{
    axios.post('http://localhost:5000/api/login')
    .then((res)=> res.json())
    .then((res)=> console.log(res))
    setIsLogin(true)
  })
  return (
    <>
{isLogin && <AuthRoute />}
  <userName.Provider value={name}>
    <div className={`inner-wrapper ${sideBar == true ? "close" : "open"}`}>
      <Header handleSidebar={openSidebar} toggleSidebar={sideBar} />
      <div className="main-container">
      <AppRoutes />
      </div>
    </div>
    <Slider openSidebar={sideBar} onSideBar={setSideBar} />
    </userName.Provider>
    </>
  );
}

export default Dashboard;
