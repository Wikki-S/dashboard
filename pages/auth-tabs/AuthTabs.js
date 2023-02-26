import { useState } from "react";
import "./AuthTabs.scss";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";

const AuthTabs = () => {
  const [type, setType] = useState("Sign in");
  return (
    <>
      <div className="container-wrapper">
        <div className="environment">DEV</div>
        <div className="container-wrapper-auth">
          <div className="tabs">
            <div className="tabs-auth">
              <ul className="tab-group">
                <li
                  className={`tab ${type == "Sign in" ? "active" : ""}`}
                  onClick={() => setType("Sign in")}
                >
                  <button className="login">Sign In</button>
                </li>
                <li
                  className={`tab ${type == "Sign up" ? "active" : ""}`}
                  onClick={() => setType("Sign up")}
                >
                  <button className="signup">Sign Up</button>
                </li>
              </ul>
              {type == "Sign in" && (
                <div className="tab-item">
                  <Login />
                </div>
              )}
              {type == "Sign up" && (
                <div className="tab-item">
                  <Register />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthTabs;
