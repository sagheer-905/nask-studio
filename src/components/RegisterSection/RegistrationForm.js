import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants";
import SocialButton from "./SocialButton ";
import { GoogleLogin } from "@react-oauth/google";
import { Loader } from "../Loader";
const RegistrationForm = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const loggedInUser = localStorage.getItem("auth");
  if (loggedInUser) {
    navigate("/login");
  }
  const [registerInput, setRegister] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    user_type: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      username: registerInput.username,
      email: registerInput.email,
      phone: registerInput.phone,
      password: registerInput.password,
      password_confirmation: registerInput.password_confirmation,
      user_type: registerInput.user_type,
    };

    const body = {
      email: registerInput.email,
    };

    axios
      .get("https://nask.1stbusines.com/sanctum/csrf-cookie")
      .then((response) => {
        axios
          .post(`${BASE_URL}/register`, data)
          .then((res) => {
            if (res.status == 201) {
              axios
                .post(`${BASE_URL}/send-otp-in-mail`, body)
                .then((result) => {
                  result.json().then((resp) => {
                    console.log(resp);
                  });
                });

              localStorage.setItem("email_verified", registerInput.email);
              // localStorage.setItem('auth_name', res.data.users);
              swal("Success", "Account Created", "success");
              navigate("/verification");
            } else {
              setRegister({ ...registerInput, error_list: res.data.validate });
            }
          })
          .catch((error) => {
            if (error.response) {
              swal("Error", error.response.data.message, "error");
            }
          });
      });
  };
  const handleSocialLogin = (user) => {
    setLoader(true);
    axios
      .post(`${BASE_URL}/social/login`, {
        social_id: user._token.accessToken,
        login_type: "facebook",
        user_type: 1,
        email: user._profile.email,
        name: user._profile.name,
      })
      .then((res) => {
        setLoader(false);
        localStorage.setItem("auth", res.data.user.token);
        navigate("/user-dashboard");
      });
  };

  const handleSocialLoginFailure = (err) => {
    swal("Error", "Login Failed", "error");
  };
  const handleSuccess = (data) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${data.credential}`
      )
      .then((res) => {
        console.log('res',res);
        sendData(data, res.data.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const sendData = (token, email) => {
    console.log('sedn',email);
    axios
      .post(`${BASE_URL}/social/login`, {
        social_id: token.credential,
        login_type: "google",
        user_type: 1,
        email: email,
      })
      .then((res) => {
        setLoader(false);
        localStorage.setItem("auth", res.data.user.token);
        navigate("/user-dashboard");
      });
  };
  return (
    <>
      {loader && <Loader />}
      <div className="register-form border-top border-bottom py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-lg-10 col-xl-9 py-sm-5 ps-sm-3 pe-sm-5 rounded-4 py-5 px-3">
              <h4 className="fw-semibold text-center mb-5">Register</h4>
              <form onSubmit={registerSubmit} className="px-xl-4" method="POST">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <label className="form-label">Full Name</label>
                  </div>
                  <div className="col-md-5">
                    <input
                      type="text"
                      required
                      name="name"
                      onChange={handleInput}
                      value={registerInput.name}
                      className="form-control rounded-pill"
                      placeholder="Full Name"
                    />
                    <span>{registerInput.error_list.name}</span>
                  </div>
                  <div className="col-md-5">
                    <input
                      type="text"
                      required
                      name="username"
                      onChange={handleInput}
                      value={registerInput.username}
                      className="form-control rounded-pill"
                      placeholder="Username"
                    />
                    <span>{registerInput.error_list.username}</span>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <label className="form-label">E-mail</label>
                  </div>
                  <div className="col-md-10">
                    <input
                      type="email"
                      required
                      name="email"
                      onChange={handleInput}
                      value={registerInput.email}
                      className="form-control rounded-pill"
                      placeholder="ex: myname@example.com"
                    />
                    <span>{registerInput.error_list.email}</span>
                  </div>
                </div>
                <div className="row align-items-center mt-4 mt-md-0">
                  <div className="col-md-2">
                    <label className="form-label">Phone Number</label>
                  </div>

                  <div className="col-md-4">
                    <input
                      type="text"
                      required
                      name="phone"
                      onChange={handleInput}
                      value={registerInput.phone}
                      className="form-control rounded-pill"
                      placeholder="Phone Number"
                    />
                    <span>{registerInput.error_list.phone}</span>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <label className="form-label">Password</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="password"
                      required
                      name="password"
                      onChange={handleInput}
                      value={registerInput.password}
                      className="form-control rounded-pill"
                      placeholder="Password"
                    />
                    <span>{registerInput.error_list.password}</span>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <label className="form-label">Confirm Password</label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="password"
                      required
                      name="password_confirmation"
                      onChange={handleInput}
                      value={registerInput.password_confirmation}
                      className="form-control rounded-pill"
                      placeholder="Password"
                    />
                    <span>
                      {registerInput.error_list.password_confirmation}
                    </span>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-md-2" />
                </div>
                <div className="row align-items-center">
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn rounded-pill text-uppercase"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
              <div className="continue-text text-center">
                <p>Or continue with</p>

                <SocialButton
                  provider="facebook"
                  appId="523636806159681"
                  onLoginSuccess={handleSocialLogin}
                  onLoginFailure={handleSocialLoginFailure}
                >
                  Login with Facebook
                </SocialButton>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                    handleSuccess(credentialResponse);
                  }}
                  onError={() => {
                    swal("Error", "Login Failed", "error");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
