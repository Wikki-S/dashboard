import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Register.css";
import res from "../../assets/images/res.png";


import Card from "../../component/Card/Card";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const [passwordType, setPasswordType] = useState("password");

  const changeHandler = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/signup", register, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Success Notification !", {
            position: toast.POSITION.TOP_LEFT,
          });
          console.log(response);
          const data = JSON.parse(response.config.data);
          console.log(data);
          localStorage.setItem("user_token", response.data.token);
          const d = localStorage.setItem("username", data.fullname);
          console.log(d);
          setRegister({
            fullname: "",
            email: "",
            password: "",
          });
          navigate("/login");
        }
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
          <div className="main-register main-section">
            <div className="col-lg-4">
              <Card>
                <h3>Register</h3>
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <label>Name</label>
                    <div className="col-md-13 input-group">
                      <input
                        type="text"
                        onChange={changeHandler}
                        placeholder="Fullname"
                        name="fullname"
                        value={register.fullname}
                        className="form-control"
                        required
                      />
                      <i className="input-group-text bi bi-person"></i>
                    </div>
                  </div>

                  {/* <div className="form-group">
                  <label>Username</label>
                  <div className="col-md-13 input-group">
                    <input
                       onChange={changeHandler}
                       placeholder="Username"
                       name="username"
                       value={register.username}
                       type="text"
                       className="form-control"
                    />
                    <i class="input-group-text bi bi-person"></i>
                  </div>
              
                </div> */}

                  <div className="form-group">
                    <label>Email Address</label>
                    <div className="col-md-13 input-group">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={changeHandler}
                        value={register.email}
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
                        value={register.password}
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
                      {/* <i className="input-group-text bi bi-eye-slash"></i> */}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary my-2"
                    disabled={!register.email || !register.password}
                  >
                    Submit
                  </button>
                </form>
                <div className="account">
                  <p>Already have a account</p>
                  <Link to="/login">Login</Link>
                </div>
              </Card>
            </div>
            <div className="col-lg-8">
              <div className="second-section">
                <img src={res} className="img-fluid" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
