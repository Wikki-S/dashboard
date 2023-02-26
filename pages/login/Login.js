import React from "react";
import { useState } from "react";
import imgs from "../../assets/images/res.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../../component/Card/Card";

function Login(props) {

  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", login, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          toast.success(response.statusText);
          navigate("/chart");
          const data = JSON.stringify(response);
          localStorage.setItem("user_token", data);
          setLogin({
            email: "",
            password: "",
          });
        }
        return response;
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid Credential");
      });
  };
  const togglePassword = () => {
    console.log("click");
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex align-items-center min-vh-100 main-section">
            <div className="col-lg-4">
              <Card>
                <h3>Login</h3>
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <label>Email Address</label>
                    <div className="col-md-13 input-group">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={changeHandler}
                        value={login.email}
                        className="form-control"
                        required
                      />
                      <i className="input-group-text bi bi-envelope"></i>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <div className="col-md-13 input-group">
                      <input
                        type={passwordType}
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={changeHandler}
                        value={login.password}
                        required
                      />
                      <div
                        className="input-group-text"
                        onClick={togglePassword}
                      >
                        {passwordType === "password" ? (
                          <i className="bi bi-eye-slash"></i>
                        ) : (
                          <i className="bi bi-eye"></i>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary my-2"
                    disabled={!login.email || !login.password} >Submit </button>
                </form>
              </Card>
            </div>
            <div className="col-lg-7">
              <img src={imgs} className="img-fluid" alt="log-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
