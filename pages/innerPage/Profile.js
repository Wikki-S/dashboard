import React from "react";
import { useState } from "react";
import "./Profile.scss";
import Card from "../../component/Card/Card";
import { Link } from "react-router-dom";
import axios from "axios";
function Profile() {
  const [profile, setProfile] = useState({
    fullname: "",
    email: "",
    password: "",
    image: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const changeHandler = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    setProfile(imgSrc);
    console.log(profile.image);
    const imgSrc = profile.image;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("/http:localhost:5000/api/signup", profile).then((response) => {
      console.log(response);
    });
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const [file, setFile] = useState("");
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="main-register main-section">
            <div className="col-lg-5">
              <Card>
                <h3 className="text-center">Profile</h3>
                <form onSubmit={submitHandler}>
                  <div className="avatar-upload">
                    <div className="avatar-edit">
                      <input
                        type="file"
                        id="imageUpload"
                        name="image"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleChange}
                      />
                      <label htmlFor="imageUpload"></label>
                    </div>
                    <div className="avatar-preview">
                      <div
                        id="imagePreview"
                        style={{
                          backgroundImage: `url('${file}')`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Name</label>
                    <div className="col-md-13 input-group">
                      <input
                        type="text"
                        onChange={changeHandler}
                        placeholder="Fullname"
                        name="fullname"
                        value={profile.fullname}
                        className="form-control"
                        required
                      />
                      <i className="input-group-text bi bi-person"></i>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <div className="col-md-13 input-group">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={changeHandler}
                        value={profile.email}
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
                        value={profile.password}
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
                    disabled={!profile.email || !profile.password}
                  >
                    Update
                  </button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
