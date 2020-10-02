import React, { useEffect, useRef, useState } from "react";
import { LoginContainer } from "./style";
import { InputBox, CheckBox } from "../FormElements/Elements";
import axios from "axios";
import { toastr } from "react-redux-toastr";
import HOST from "../../../proxy";

const Login = () => {
  const loginRef = useRef();
  useEffect(() => {
    loginRef.current.style.opacity = 1;
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChangeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(email, password);
      const res = await axios.post(
        `${HOST}/api/login`,
        JSON.stringify({ email, password }),
        config
      );
      window.location.replace(
        `https://village-dashboard.netlify.app/auth/${res.data.token}`
      );
    } catch (e) {
      const toastOptions = {
        icon: "error",
        status: "error",
        timeOut: 0,
        showCloseButton: true,
      };
      toastr.light("Invalid Login!", "Please Try Again", toastOptions);
    }
  };

  return (
    <LoginContainer
      className="py-4 px-4 m-0"
      ref={loginRef}
      onSubmit={(e) => onSubmitHandler(e)}
    >
      <h3>Log In Your Account</h3>
      <div className="mt-3 mb-4">
        <InputBox
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => onChangeHandler(e)}
          placeholder="Email"
        />
        <InputBox
          name="password"
          type="password"
          required
          value={password}
          onChange={(e) => onChangeHandler(e)}
          placeholder="Password"
        />
        <CheckBox label="Remember" />
        <InputBox type="submit" />
      </div>
      {/* <div>
        <p>Or Log In With</p>
        <div className="row m-0">
          <div className="col-12 col-sm-6 m-0 p-0 pr-sm-1">
            <button className="btn-facebook">
              <i className="fa fa-facebook"></i>
            </button>
          </div>
          <div className="col-12 col-sm-6 m-0 p-0 pl-sm-1">
            <button className="btn-google">
              <i className="fa fa-google-plus"></i>
            </button>
          </div>
        </div>
      </div> */}
    </LoginContainer>
  );
};

export default Login;
